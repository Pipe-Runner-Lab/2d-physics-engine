import { GenericBall } from 'assets/ball/types';
import { Asset } from 'assets/types';

export namespace PenetrationKit {
  export function isPenetrating(_assetL: Asset, _assetR: Asset): boolean {
    const assetL = _assetL as GenericBall;
    const assetR = _assetR as GenericBall;
    if (assetL.pos.sub(assetR.pos).mag() < assetL.radius + assetR.radius) {
      return true;
    }
    return false;
  }

  export function resolvePenetration(_assetL: Asset, _assetR: Asset): void {
    const assetL = _assetL as GenericBall;
    const assetR = _assetR as GenericBall;

    const penNormalVec = assetL.pos.sub(assetR.pos);
    const penNormalUnitVec = penNormalVec.unit();

    const semiPenDist = (assetL.radius + assetR.radius - penNormalVec.mag()) / (2 * Math.SQRT2);

    assetL.pos = assetL.pos.add(penNormalUnitVec.mul(semiPenDist));
    assetR.pos = assetR.pos.add(penNormalUnitVec.mul(-semiPenDist));
  }
}
