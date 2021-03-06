import { Vector2D } from 'utils/vector';

export interface Asset {
  mass: number;

  vel: Vector2D;

  grabPos: Vector2D;
  isGrabbed: boolean;
  guideLines: boolean;
  isFixed: boolean;

  shouldGrab: (x: number, y: number) => boolean;
  setGrab: (x: number, y: number) => void;
  unsetGrab: () => void;

  setGuideLines: (value: boolean) => void;

  calculateNextState: ({ dt, force }: StateUpdateProp) => void;
  render: (ctx: CanvasRenderingContext2D) => void;
}

export type StateUpdateProp = { dt: number; force?: Vector2D };
