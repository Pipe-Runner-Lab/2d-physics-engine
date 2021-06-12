import { Vector2D } from 'utils/vector';

export interface PointAsset {
  pos: Vector2D;

  vel: Vector2D;

  acc: Vector2D;

  mass: number;

  render: (ctx: CanvasRenderingContext2D) => void;

  traceNext: (dt: number) => void;
}

/**
 * 1. Point object will have one grab point
 */
