import { Asset, StateUpdateProp } from 'assets/types';
import { ACC_GRAVITY } from 'utils/constant';
import { Vector2D } from 'utils/vector';
import { BallProps } from './types';

class Ball implements Asset {
  mass: number;

  pos: Vector2D;

  vel = new Vector2D(0, 0);

  grabPos: Vector2D;

  isGrabbed = false;

  guideLines = false;

  radius: number;

  isFixed = false;

  constructor({ x, y, radius = 1, mass = 1 }: BallProps) {
    this.radius = radius * mass;
    this.mass = mass;

    this.pos = new Vector2D(x, y);

    this.grabPos = new Vector2D(x, y);
  }

  setGuideLines(value: boolean): void {
    this.guideLines = value;
  }

  shouldGrab(x: number, y: number): boolean {
    return (x - this.pos.i) ** 2 + (y - this.pos.j) ** 2 < this.radius ** 2;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setGrab(x: number, y: number): void {
    this.isGrabbed = true;
  }

  unsetGrab(): void {
    this.isGrabbed = false;
  }

  calculateNextState({ dt, force }: StateUpdateProp): void {
    let acc = ACC_GRAVITY;
    acc = force ? acc.add(force).mul(1 / this.mass) : acc;
    const dVel = acc?.mul(dt);
    const dPos = this.vel.mul(dt);

    if (dVel) this.vel = this.vel.add(dVel);

    this.pos = this.pos.add(dPos);

    this.grabPos = this.pos;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = 'orange';
    if (this.isGrabbed) ctx.fillStyle = 'red';
    if (this.vel.mag()) ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.arc(this.pos.i, this.pos.j, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

export default Ball;

/**
 * 1. We are not considering t = 0 case
 * 2. Calculate dVel and dPost first, then update together
 */
