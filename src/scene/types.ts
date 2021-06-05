export type SceneOptions = {
  backgroundColor: string;
};

export interface Scene {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  backgroundColor: string;
}