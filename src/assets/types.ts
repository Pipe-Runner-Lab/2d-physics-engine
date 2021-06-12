import { Vector2D } from 'utils/vector';

export interface Asset {
  pos: Vector2D;

  vel: Vector2D;

  grabPos: Vector2D;

  isGrabbed: boolean;

  shouldGrab: (x: number, y: number) => boolean;

  render: (ctx: CanvasRenderingContext2D) => void;

  traceNext: (dt: number) => void;

  setGrab: (x: number, y: number) => void;

  unsetGrab: () => void;
}

export interface PointAsset extends Asset {
  acc: Vector2D;

  mass: number;
}

/**
 * 1. Point object will have one grab point
 */
