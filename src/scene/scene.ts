import { SceneOptions, SceneInterface, SceneEventType } from './types';

class Scene implements SceneInterface {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  backgroundColor: string;

  width: number;

  height: number;

  top: number;

  left: number;

  clickObserverList: ((x: number, y: number) => void)[];

  dragObserverList: ((x: number, y: number) => void)[];

  constructor(options?: SceneOptions) {
    this.clickObserverList = [];
    this.dragObserverList = [];

    this.canvas = document.createElement('canvas');
    this.canvas.height = window.innerHeight - 100;
    this.canvas.width = this.canvas.height;

    this.ctx = this.canvas.getContext('2d');

    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'scene-wrapper');
    wrapper.appendChild(this.canvas);

    const container = document.createElement('div');
    container.setAttribute('id', 'scene-container');
    container.appendChild(wrapper);

    document.querySelector('body').appendChild(container);

    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.backgroundColor = options?.backgroundColor ?? 'white';

    const rect = this.canvas.getBoundingClientRect();
    this.top = rect.top;
    this.left = rect.left;

    if (options.mouseEvents) {
      this.canvas.addEventListener(SceneEventType.CLICK, this.triggerClickObserver.bind(this));
      this.canvas.addEventListener(SceneEventType.DRAG, this.triggerDragObserver.bind(this));
    }

    this.cleanUp();
  }

  triggerClickObserver(event: MouseEvent): void {
    this.clickObserverList.forEach((observer) =>
      observer(event.clientX - this.left, event.clientY - this.top)
    );
  }

  triggerDragObserver(event: MouseEvent): void {
    this.dragObserverList.forEach((observer) =>
      observer(event.clientX - this.left, event.clientY - this.top)
    );
  }

  registerObserver(eventType: SceneEventType, observer: (x: number, y: number) => void): void {
    switch (eventType) {
      case SceneEventType.CLICK:
        this.clickObserverList.push(observer);
        break;
      case SceneEventType.DRAG:
        this.dragObserverList.push(observer);
        break;
      default:
        break;
    }
  }

  deregisterObserver(observer: (x: number, y: number) => void): void {
    this.clickObserverList = this.clickObserverList.filter((item) => item !== observer);
    this.dragObserverList = this.dragObserverList.filter((item) => item !== observer);
  }

  cleanUp(): void {
    this.ctx.clearRect(0, 0, this.height, this.width);

    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.height, this.height);
  }
}

export default Scene;
