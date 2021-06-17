import Scene from 'scene';
import { Vector2D } from 'utils/vector';

export type EngineProps = {
  scene: Scene;
  guideLines?: boolean;
};

export type ComputationCacheProps = {
  lineOfActionVector?: Vector2D;
  nearestPointOnLine?: Vector2D;
};
