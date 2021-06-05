import { PointAsset } from 'assets/types';
import Scene from 'scene';
import { EngineProps } from './types';

class Engine {
  scene: Scene;

  dt: number;

  assetList: PointAsset[];

  constructor({ scene }: EngineProps) {
    this.assetList = [];
    this.scene = scene;
    this.dt = 1;
  }

  addAsset(asset: PointAsset): void {
    this.assetList.push(asset);
  }

  render(): void {
    this.scene.cleanUp();

    this.assetList.forEach((asset) => {
      this.scene.ctx.save();
      asset.render(this.scene.ctx, this.dt);
      this.scene.ctx.restore();
    });
  }
}

export default Engine;
