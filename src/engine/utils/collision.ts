import { GenericBall } from 'assets/ball/types';
import { Asset } from 'assets/types';

export namespace CollisionKit {
  export function isColliding(_assetL: Asset, _assetR: Asset): boolean {
    const assetL = _assetL as GenericBall;
    const assetR = _assetR as GenericBall;
    if (assetL.pos.sub(assetR.pos).mag() === assetL.radius + assetR.radius) {
      return true;
    }
    return false;
  }

  export function resolveCollision(_assetL: Asset, _assetR: Asset): void {
    const assetL = _assetL as GenericBall;
    const assetR = _assetR as GenericBall;

    const colNormalVec = assetL.pos.sub(assetR.pos);
    const colNormalUnitVec = colNormalVec.unit();

    const normalInitialVelL = colNormalUnitVec.mul(-1).dot(assetL.vel);
    const normalInitialVelR = colNormalUnitVec.dot(assetR.vel);

    const massSum = assetL.mass + assetR.mass;

    const normalFinalVelL =
      (normalInitialVelL * (assetL.mass - assetR.mass) + 2 * assetL.mass * normalInitialVelR) /
      massSum;
    const normalFinalVelR =
      (normalInitialVelR * (assetR.mass - assetL.mass) + 2 * assetR.mass * normalInitialVelL) /
      massSum;

    assetL.vel = assetL.vel
      .add(colNormalUnitVec.mul(normalInitialVelL))
      .add(colNormalUnitVec.mul(normalFinalVelL));

    assetR.vel = assetR.vel
      .add(colNormalUnitVec.mul(-1).mul(normalInitialVelR))
      .add(colNormalUnitVec.mul(-1).mul(normalFinalVelR));
  }
}
