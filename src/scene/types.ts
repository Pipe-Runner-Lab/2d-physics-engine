export type SceneOptions = {
  backgroundColor: string;
  mouseEvents: boolean;
};

export interface SceneInterface {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  registerObserver: (eventType: SceneEventType, observer: ObserverCallback) => void;
  deregisterObserver: (eventType: SceneEventType, observer: ObserverCallback) => void;
  cleanUp: () => void;
}

export type ObserverCallback = (x: number, y: number) => void;

export enum SceneEventType {
  MOUSE_DOWN = 'mousedown',
  MOUSE_MOVE = 'mousemove',
  MOUSE_UP = 'mouseup'
}
