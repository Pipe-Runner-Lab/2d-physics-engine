export type SceneOptions = {
  backgroundColor: string;
  mouseEvents: boolean;
};

export interface SceneInterface {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  top: number;
  left: number;
  backgroundColor: string;
}

export enum SceneEventType {
  CLICK = 'click',
  DRAG = 'mousemove'
}
