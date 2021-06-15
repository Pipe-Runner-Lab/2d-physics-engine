import Ball from 'assets/ball';
import { Asset } from 'assets/types';

export namespace PenetrationKit {
  export function isPenetrating(_assetL: Asset, _assetR: Asset): boolean {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const assetL = _assetL as Ball;
      const assetR = _assetR as Ball;
      if (assetL.pos.sub(assetR.pos).mag() < assetL.radius + assetR.radius) {
        return true;
      }
    }

    return false;
  }

  export function resolvePenetration(_assetL: Asset, _assetR: Asset): void {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const assetL = _assetL as Ball;
      const assetR = _assetR as Ball;

      const penNormalVec = assetL.pos.sub(assetR.pos);
      const penNormalUnitVec = penNormalVec.unit();

      const semiPenDist = (assetL.radius + assetR.radius - penNormalVec.mag()) / (2 * Math.SQRT2);

      assetL.pos = assetL.pos.add(penNormalUnitVec.mul(semiPenDist));
      assetR.pos = assetR.pos.add(penNormalUnitVec.mul(-semiPenDist));
    }
  }
}
