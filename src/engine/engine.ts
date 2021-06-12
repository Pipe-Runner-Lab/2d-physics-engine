import { Asset } from 'assets/types';
import Scene from 'scene';
import { SceneEventType } from 'scene/types';
import { Vector2D } from 'utils/vector';
import { EngineProps } from './types';

class Engine {
  scene: Scene;

  dt: number;

  assetList: Asset[];

  grabbedAsset: Asset | null;

  guideLines: boolean;

  mousePos: Vector2D;

  constructor({ scene, guideLines = false }: EngineProps) {
    this.dt = 1;
    this.scene = scene;

    // array of all objects add to engine
    this.assetList = [];

    // variables to deal with mouse grabs
    this.grabbedAsset = null;
    this.mousePos = new Vector2D(0, 0);

    // if activated, helper lines will be available
    this.guideLines = guideLines;

    // Event to deal with mouse grab events
    this.scene.registerObserver(SceneEventType.MOUSE_DOWN, this.findGrabbedAsset.bind(this));
    this.scene.registerObserver(SceneEventType.MOUSE_MOVE, (x, y) => {
      this.mousePos.i = x;
      this.mousePos.j = y;
    });
    this.scene.registerObserver(SceneEventType.MOUSE_UP, (x, y) => {
      this.grabbedAsset?.unsetGrab();
      this.grabbedAsset = null;
    });
  }

  addAsset(asset: Asset): void {
    if (this.guideLines) asset.enableGuideLine();
    this.assetList.push(asset);
  }

  findGrabbedAsset(x: number, y: number): void {
    this.assetList.forEach((asset) => {
      if (asset.shouldGrab(x, y)) {
        asset.setGrab(x, y);
        this.grabbedAsset = asset;
      }
    });
  }

  renderGuideLines(): void {
    this.scene.ctx.save();
    this.scene.ctx.strokeStyle = 'green';
    this.scene.ctx.moveTo(this.grabbedAsset.grabPos.i, this.grabbedAsset.grabPos.j);
    this.scene.ctx.lineTo(this.mousePos.i, this.mousePos.j);
    this.scene.ctx.stroke();
    this.scene.ctx.restore();
  }

  render(): void {
    this.scene.cleanUp();

    this.assetList.forEach((asset) => {
      if (asset === this.grabbedAsset) {
        asset.applyForce(
          this.dt,
          new Vector2D(
            this.mousePos.i - this.grabbedAsset.grabPos.i,
            this.mousePos.j - this.grabbedAsset.grabPos.j
          )
        );
      } else {
        asset.applyForce(this.dt, new Vector2D(0, 0));
      }
    });

    // Detect collision here

    // Resolve collision

    this.assetList.forEach((asset) => {
      this.scene.ctx.save();
      asset.render(this.scene.ctx);
      this.scene.ctx.restore();
    });

    if (this.guideLines && this.grabbedAsset) this.renderGuideLines();
  }
}

export default Engine;

/**
 * 1. The means of interaction between objects and world is Force and Torque
 * 2. For each frame both force and torque should be nulled to 0 in order to avoid leaks
 */
