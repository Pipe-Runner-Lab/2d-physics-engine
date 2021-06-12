import { PointAsset } from 'assets/types';
import Scene from 'scene';
import { SceneEventType } from 'scene/types';
import { EngineProps } from './types';

class Engine {
  scene: Scene;

  dt: number;

  assetList: PointAsset[];

  constructor({ scene }: EngineProps) {
    this.assetList = [];
    this.scene = scene;
    this.dt = 1;

    this.scene.registerObserver(SceneEventType.CLICK, (x, y) => console.log(x, y));
  }

  addAsset(asset: PointAsset): void {
    this.assetList.push(asset);
  }

  render(): void {
    this.scene.cleanUp();

    this.assetList.forEach((asset) => {
      asset.traceNext(this.dt);
    });

    // Detect collision here

    // Resolve collision

    this.assetList.forEach((asset) => {
      this.scene.ctx.save();
      asset.render(this.scene.ctx);
      this.scene.ctx.restore();
    });
  }
}

export default Engine;

/**
 * 1. The means of interaction between objects and world is Force and Torque
 * 2. For each frame both force and torque should be nulled to 0 in order to avoid leaks
 */
