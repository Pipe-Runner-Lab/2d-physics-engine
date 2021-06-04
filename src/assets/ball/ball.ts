import { PointAsset } from 'assets/types';
import { Vector2D } from 'utils/vector';

interface Ball extends PointAsset {
  radius: number;
}

type BallProps = {
  radius?: number;
  mass?: number;

  x: number;
  y: number;

  vX?: number;
  vY?: number;

  aX?: number;
  aY?: number;
};

class Ball implements Ball {
  constructor({ x, y, radius = 1, mass = 1 }: BallProps) {
    this.radius = radius;
    this.mass = mass;

    this.pos = new Vector2D(x, y);

    this.vel = new Vector2D(0, 0);

    this.acc = new Vector2D(0, 0);
  }

  render(ctx, dt): void {
    const dVel = this.acc.mul(dt);
    const dPos = this.
  }
}

export default Ball;
