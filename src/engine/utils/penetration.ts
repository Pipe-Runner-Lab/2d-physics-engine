import Ball from 'assets/ball';
import { Asset } from 'assets/types';
import Wall from 'assets/wall';
import { Vector2D } from 'utils/vector';

export namespace PenetrationKit {
  export function isPenetrating(_assetL: Asset, _assetR: Asset): boolean {
    if (_assetL instanceof Ball && _assetR instanceof Ball) {
      const assetL = _assetL as Ball;
      const assetR = _assetR as Ball;
      if (assetL.pos.sub(assetR.pos).mag() < assetL.radius + assetR.radius) {
        return true;
      }
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

      if (assetL.pos.sub(nearestPointOnLine).mag() < assetL.radius) {
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

      const semiPenDist = (assetL.radius + assetR.radius - penNormalVec.mag()) / 2;

      assetL.pos = assetL.pos.add(penNormalUnitVec.mul(semiPenDist));
      assetR.pos = assetR.pos.add(penNormalUnitVec.mul(-semiPenDist));
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

      const penDist = assetL.radius - assetL.pos.sub(nearestPointOnLine).mag();
      const penNormalUnitVec = nearestPointOnLine.sub(assetL.pos).unit();

      assetL.pos = assetL.pos.add(penNormalUnitVec.mul(-penDist));
    }
  }
}
