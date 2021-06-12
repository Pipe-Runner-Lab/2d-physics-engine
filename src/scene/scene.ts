import { SceneOptions, SceneInterface, SceneEventType } from './types';

class Scene implements SceneInterface {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  backgroundColor: string;

  width: number;

  height: number;

  top: number;

  left: number;

  mouseDownObserverList: ((x: number, y: number) => void)[];

  mouseMoveObserverList: ((x: number, y: number) => void)[];

  mouseUpObserverList: ((x: number, y: number) => void)[];

  constructor(options?: SceneOptions) {
    this.mouseDownObserverList = [];
    this.mouseMoveObserverList = [];
    this.mouseUpObserverList = [];

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
      this.canvas.addEventListener(
        SceneEventType.MOUSE_DOWN,
        this.triggerMouseDownObservers.bind(this)
      );
      this.canvas.addEventListener(
        SceneEventType.MOUSE_MOVE,
        this.triggerMouseMoveObserver.bind(this)
      );
      this.canvas.addEventListener(
        SceneEventType.MOUSE_UP,
        this.triggerMouseUpObservers.bind(this)
      );
    }

    this.cleanUp();
  }

  triggerMouseDownObservers(event: MouseEvent): void {
    this.mouseDownObserverList.forEach((observer) =>
      observer(event.clientX - this.left, event.clientY - this.top)
    );
  }

  triggerMouseMoveObserver(event: MouseEvent): void {
    this.mouseMoveObserverList.forEach((observer) =>
      observer(event.clientX - this.left, event.clientY - this.top)
    );
  }

  triggerMouseUpObservers(event: MouseEvent): void {
    this.mouseUpObserverList.forEach((observer) =>
      observer(event.clientX - this.left, event.clientY - this.top)
    );
  }

  registerObserver(eventType: SceneEventType, observer: (x: number, y: number) => void): void {
    switch (eventType) {
      case SceneEventType.MOUSE_DOWN:
        this.mouseDownObserverList.push(observer);
        break;
      case SceneEventType.MOUSE_MOVE:
        this.mouseMoveObserverList.push(observer);
        break;
      case SceneEventType.MOUSE_UP:
        this.mouseUpObserverList.push(observer);
        break;
      default:
        break;
    }
  }

  deregisterObserver(observer: (x: number, y: number) => void): void {
    this.mouseDownObserverList = this.mouseDownObserverList.filter((item) => item !== observer);
    this.mouseMoveObserverList = this.mouseMoveObserverList.filter((item) => item !== observer);
    this.mouseUpObserverList = this.mouseUpObserverList.filter((item) => item !== observer);
  }

  cleanUp(): void {
    this.ctx.clearRect(0, 0, this.height, this.width);

    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.height, this.height);
  }
}

export default Scene;
