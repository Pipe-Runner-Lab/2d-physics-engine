import Ball from 'assets/ball';
import { Asset } from 'assets/types';
import Wall from 'assets/wall';
import { Vector2D } from 'utils/vector';

export namespace CollisionKit {
  export function resolveCollision(_assetL: Asset, _assetR: Asset): void {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const assetL = _assetL as Ball;
      const assetR = _assetR as Ball;

      const colNormalUnitVec = assetL.pos.sub(assetR.pos).unit();

      const normalInitialVelL = colNormalUnitVec.dot(assetL.vel);
      const normalInitialVelR = colNormalUnitVec.dot(assetR.vel);

      const massSum = assetL.mass + assetR.mass;

      const normalFinalVelL =
        (normalInitialVelL * (assetL.mass - assetR.mass) + 2 * assetR.mass * normalInitialVelR) /
        massSum;
      const normalFinalVelR =
        (normalInitialVelR * (assetR.mass - assetL.mass) + 2 * assetL.mass * normalInitialVelL) /
        massSum;

      assetL.vel = assetL.vel
        .add(colNormalUnitVec.mul(-normalInitialVelL))
        .add(colNormalUnitVec.mul(normalFinalVelL));

      assetR.vel = assetR.vel
        .add(colNormalUnitVec.mul(-normalInitialVelR))
        .add(colNormalUnitVec.mul(normalFinalVelR));
    } else if (
      (_assetL instanceof Ball && _assetR instanceof Wall) ||
      (_assetL instanceof Wall && _assetR instanceof Ball)
    ) {
      const assetL = (_assetL instanceof Ball ? _assetL : _assetR) as Ball;
      const assetR = (_assetR instanceof Wall ? _assetR : _assetL) as Wall;

      const wallVec = assetR.startPos.sub(assetR.endPos);
      const wallUnitVec = wallVec.unit();

      let nearestPointOnLine = assetR.startPos;
      let projectionVec: Vector2D;
      const projection = assetR.startPos.sub(assetL.pos).dot(wallUnitVec);

      if (projection > 0) {
        nearestPointOnLine = assetR.endPos;
        const secondaryProjection = assetR.endPos.sub(assetL.pos).dot(wallUnitVec);

        if (secondaryProjection < 0) {
          projectionVec = wallUnitVec.mul(projection);
          nearestPointOnLine = assetR.startPos.sub(projectionVec);
        }
      }

      const colNormalUnitVec = nearestPointOnLine.sub(assetL.pos).unit();

      const normalInitialVelL = colNormalUnitVec.dot(assetL.vel);

      assetL.vel = assetL.vel.add(colNormalUnitVec.mul(-2 * normalInitialVelL));
    }
  }
}
