import Ball from 'assets/ball';
import { Asset } from 'assets/types';

export namespace CollisionKit {
  export function isColliding(_assetL: Asset, _assetR: Asset): boolean {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const assetL = _assetL as Ball;
      const assetR = _assetR as Ball;
      if (assetL.pos.sub(assetR.pos).mag() === assetL.radius + assetR.radius) {
        return true;
      }
    }

    return false;
  }

  export function resolveCollision(_assetL: Asset, _assetR: Asset): void {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const assetL = _assetL as Ball;
      const assetR = _assetR as Ball;

      const colNormalVec = assetL.pos.sub(assetR.pos);
      const colNormalUnitVec = colNormalVec.unit();

      const normalInitialVelL = colNormalUnitVec.dot(assetL.vel);
      const normalInitialVelR = colNormalUnitVec.dot(assetR.vel);

      console.log(normalInitialVelL, normalInitialVelR);

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
    }
  }
}
