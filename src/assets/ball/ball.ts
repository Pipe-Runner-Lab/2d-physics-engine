import { Vector2D } from 'utils/vector';
import { BallProps, GenericBall } from './types';

class Ball implements GenericBall {
  radius: number;

  pos: Vector2D;

  vel: Vector2D;

  acc: Vector2D;

  mass: number;

  constructor({ x, y, radius = 1, mass = 1 }: BallProps) {
    this.radius = radius;
    this.mass = mass;

    this.pos = new Vector2D(x, y);

    this.vel = new Vector2D(0, 0);

    this.acc = new Vector2D(0, 0);
  }

  render(ctx: CanvasRenderingContext2D, dt: number): void {
    const dVel = this.acc.mul(dt);
    this.vel = this.vel.add(dVel);

    const dPos = this.vel.mul(dt);
    this.pos = this.pos.add(dPos);

    ctx.beginPath();
    ctx.fillStyle = 'orange';
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
 */
