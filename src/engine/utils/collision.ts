import Ball from 'assets/ball';
import { Asset } from 'assets/types';
import Wall from 'assets/wall';
import { ComputationCacheProps } from 'engine/types';
import { Vector2D } from 'utils/vector';

export namespace CollisionKit {
  export function resolveCollision(
    _assetL: Asset,
    _assetR: Asset,
    computationCache: ComputationCacheProps
  ): void {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const ballL = _assetL as Ball;
      const ballR = _assetR as Ball;

      const { lineOfActionVector: colNormalVec } = computationCache;
      const colNormalUnitVec = colNormalVec.unit();

      const normalInitialVelL = colNormalUnitVec.dot(ballL.vel);
      const normalInitialVelR = colNormalUnitVec.dot(ballR.vel);

      const massSum = ballL.mass + ballR.mass;

      const normalFinalVelL =
        (normalInitialVelL * (ballL.mass - ballR.mass) + 2 * ballR.mass * normalInitialVelR) /
        massSum;
      const normalFinalVelR =
        (normalInitialVelR * (ballR.mass - ballL.mass) + 2 * ballL.mass * normalInitialVelL) /
        massSum;

      ballL.vel = ballL.vel
        .add(colNormalUnitVec.mul(-normalInitialVelL))
        .add(colNormalUnitVec.mul(normalFinalVelL));

      ballR.vel = ballR.vel
        .add(colNormalUnitVec.mul(-normalInitialVelR))
        .add(colNormalUnitVec.mul(normalFinalVelR));
    } else if (
      (_assetL instanceof Ball && _assetR instanceof Wall) ||
      (_assetL instanceof Wall && _assetR instanceof Ball)
    ) {
      const ball = (_assetL instanceof Ball ? _assetL : _assetR) as Ball;

      const { lineOfActionVector: colNormalVec } = computationCache;

      const colNormalUnitVec = colNormalVec.unit();

      const normalInitialVelL = colNormalUnitVec.dot(ball.vel);

      ball.vel = ball.vel.add(colNormalUnitVec.mul(-2 * normalInitialVelL));
    }
  }
}
