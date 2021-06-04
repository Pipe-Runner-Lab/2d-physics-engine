import { Assets } from 'assets/types';
import Scene from 'scene';

type EngineProps = {
  scene: Scene;
};

class Engine {
  scene: Scene;

  assetList: Assets[];

  constructor({ scene }: EngineProps) {
    this.scene = scene;
  }

  addAssets(asset: Assets): void {
    this.assetList.push(asset);
  }

  render(): void {
    this.assetList.forEach((asset) => {
      asset.render();
    });
  }
}

export default Engine;
