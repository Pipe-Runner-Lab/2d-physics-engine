export class Vector2D {
  i: number;

  j: number;

  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }

  add(vec: Vector2D): Vector2D {
    this.i += vec.i;
    this.j += vec.j;
    return this;
  }

  sub(vec: Vector2D): Vector2D {
    this.i -= vec.i;
    this.j -= vec.j;
    return this;
  }

  mul(scalar: number): Vector2D {
    this.i *= scalar;
    this.j *= scalar;
    return this;
  }
}

/**
 * 1. Not returning a new object to avoid creation and save performance
 */
