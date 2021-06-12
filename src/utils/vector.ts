export class Vector2D {
  i: number;

  j: number;

  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }

  add(vec: Vector2D): Vector2D {
    return new Vector2D(this.i + vec.j, this.j + vec.j);
  }

  sub(vec: Vector2D): Vector2D {
    return new Vector2D(this.i - vec.j, this.j - vec.j);
  }

  mul(scalar: number): Vector2D {
    return new Vector2D(this.i * scalar, this.j * scalar);
  }

  magSqr(): number {
    return this.i ** 2 + this.j ** 2;
  }

  mag(): number {
    return Math.sqrt(this.i ** 2 + this.j ** 2);
  }

  unit(): Vector2D {
    const mag = this.mag();
    return this.mul(1 / mag);
  }

  dot(vec: Vector2D): number {
    return this.i * vec.i + this.j * vec.j;
  }
}

/**
 * 1. Not returning a new object to avoid creation and save performance
 */
