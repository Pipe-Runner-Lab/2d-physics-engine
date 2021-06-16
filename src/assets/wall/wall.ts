import { Asset, StateUpdateProp } from 'assets/types';
import { ACC_GRAVITY } from 'utils/constant';
import { Vector2D } from 'utils/vector';
import { WallProps } from './types';

class Wall implements Asset {
  mass: number;

  startPos: Vector2D;

  endPos: Vector2D;

  vel = new Vector2D(0, 0);

  grabPos: Vector2D;

  isGrabbed = false;

  guideLines = false;

  radius: number;

  isFixed = true;

  constructor({ x1, y1, x2, y2 }: WallProps) {
    this.startPos = new Vector2D(x1, y1);
    this.endPos = new Vector2D(x2, y2);

    this.mass = Number.POSITIVE_INFINITY;

    this.grabPos = new Vector2D((x1 + x2) / 2, (y1 + y2) / 2);
  }

  setGuideLines(value: boolean): void {
    this.guideLines = value;
  }

  shouldGrab(x: number, y: number): boolean {
    return !this.isFixed;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setGrab(x: number, y: number): void {
    this.isGrabbed = true;
  }

  unsetGrab(): void {
    this.isGrabbed = false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line class-methods-use-this
  calculateNextState({ dt, force }: StateUpdateProp): void {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(this.startPos.i, this.startPos.j);
    ctx.lineTo(this.endPos.i, this.endPos.j);
    ctx.stroke();
    ctx.closePath();
  }
}

export default Wall;
