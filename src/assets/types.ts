import { Vector2D } from 'utils/vector';

export interface PointAsset {
  pos: Vector2D;

  vel: Vector2D;

  acc: Vector2D;

  mass: number;

  render: (ctx: CanvasRenderingContext2D, dt: number) => void;
}
