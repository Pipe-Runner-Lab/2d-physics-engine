import { Vector2D } from 'utils/vector';
import { BallProps, GenericBall } from './types';

class Ball implements GenericBall {
  radius: number;

  pos: Vector2D;

  vel: Vector2D;

  grabPos: Vector2D;

  isGrabbed: boolean;

  mass: number;

  guideLines: boolean;

  constructor({ x, y, radius = 1, mass = 1 }: BallProps) {
    this.radius = radius;
    this.mass = mass;

    this.pos = new Vector2D(x, y);

    this.grabPos = this.pos;

    this.vel = new Vector2D(0, 0);

    this.isGrabbed = false;

    this.guideLines = false;
  }

  enableGuideLine(): void {
    this.guideLines = true;
  }

  disableGuideLine(): void {
    this.guideLines = false;
  }

  shouldGrab(x: number, y: number): boolean {
    return (x - this.pos.i) ** 2 + (y - this.pos.j) ** 2 < this.radius ** 2;
  }

  setGrab(x: number, y: number): void {
    this.isGrabbed = true;
  }

  unsetGrab(): void {
    this.isGrabbed = false;
  }

  applyForce(dt: number, force: Vector2D): void {
    const acc = force.mul(1 / this.mass).mul(1 / 1000);
    const dVel = acc.mul(dt);
    const dPos = this.vel.mul(dt);
    this.vel = this.vel.add(dVel);
    this.pos = this.pos.add(dPos);

    this.grabPos = this.pos;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = this.isGrabbed ? 'red' : 'orange';
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
