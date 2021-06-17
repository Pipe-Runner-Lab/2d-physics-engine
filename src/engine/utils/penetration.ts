import Ball from 'assets/ball';
import { Asset } from 'assets/types';
import Wall from 'assets/wall';
import { ComputationCacheProps } from 'engine/types';
import { Vector2D } from 'utils/vector';

export namespace PenetrationKit {
  export function isPenetrating(
    _assetL: Asset,
    _assetR: Asset
  ): { isPenetrating: boolean; computationCache?: ComputationCacheProps } {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const ballL = _assetL as Ball;
      const ballR = _assetR as Ball;
      if (ballL.pos.sub(ballR.pos).mag() < ballL.radius + ballR.radius) {
        return {
          isPenetrating: true,
          computationCache: {
            lineOfActionVector: ballL.pos.sub(ballR.pos)
          }
        };
      }
    } else if (
      (_assetL instanceof Ball && _assetR instanceof Wall) ||
      (_assetL instanceof Wall && _assetR instanceof Ball)
    ) {
      const ball = (_assetL instanceof Ball ? _assetL : _assetR) as Ball;
      const wall = (_assetR instanceof Wall ? _assetR : _assetL) as Wall;

      const wallVec = wall.startPos.sub(wall.endPos);
      const wallUnitVec = wallVec.unit();

      let nearestPointOnLine = wall.startPos;
      let projectionVec: Vector2D;
      const projection = wall.startPos.sub(ball.pos).dot(wallUnitVec);

      if (projection > 0) {
        nearestPointOnLine = wall.endPos;
        const secondaryProjection = wall.endPos.sub(ball.pos).dot(wallUnitVec);

        if (secondaryProjection < 0) {
          projectionVec = wallUnitVec.mul(projection);
          nearestPointOnLine = wall.startPos.sub(projectionVec);
        }
      }

      if (ball.pos.sub(nearestPointOnLine).mag() < ball.radius) {
        return {
          isPenetrating: true,
          computationCache: {
            lineOfActionVector: nearestPointOnLine.sub(ball.pos),
            nearestPointOnLine
          }
        };
      }
    }

    return { isPenetrating: false };
  }

  export function resolvePenetration(
    _assetL: Asset,
    _assetR: Asset,
    computationCache: ComputationCacheProps
  ): void {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const ballL = _assetL as Ball;
      const ballR = _assetR as Ball;

      const { lineOfActionVector: penNormalVec } = computationCache;
      const penNormalUnitVec = penNormalVec.unit();

      const semiPenDist = (ballL.radius + ballR.radius - penNormalVec.mag()) / 2;

      ballL.pos = ballL.pos.add(penNormalUnitVec.mul(semiPenDist));
      ballR.pos = ballR.pos.add(penNormalUnitVec.mul(-semiPenDist));
    } else if (
      (_assetL instanceof Ball && _assetR instanceof Wall) ||
      (_assetL instanceof Wall && _assetR instanceof Ball)
    ) {
      const ball = (_assetL instanceof Ball ? _assetL : _assetR) as Ball;

      const { lineOfActionVector: penNormalVec, nearestPointOnLine } = computationCache;

      const penDist = ball.radius - ball.pos.sub(nearestPointOnLine).mag();
      const penNormalUnitVec = penNormalVec.unit();

      ball.pos = ball.pos.add(penNormalUnitVec.mul(-penDist));
    }
  }
}
