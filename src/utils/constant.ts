import { Vector2D } from './vector';

export const DEFAULT_TIME_DELTA = 1;

export const FORCE_DILUTION_FACTOR = 0.1;

export const ACC_DILUTION_FACTOR = 0.01;

export const ACC_GRAVITY = new Vector2D(0, 9.8 * ACC_DILUTION_FACTOR);
