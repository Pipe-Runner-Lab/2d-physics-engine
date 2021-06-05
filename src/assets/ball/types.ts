import { PointAsset } from 'assets/types';

export interface GenericBall extends PointAsset {
  radius: number;
}

export type BallProps = {
  radius?: number;
  mass?: number;

  x: number;
  y: number;

  vX?: number;
  vY?: number;

  aX?: number;
  aY?: number;
};
