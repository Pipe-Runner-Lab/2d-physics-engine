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
}

/**
 * 1. Not returning a new object to avoid creation and save performance
 */
