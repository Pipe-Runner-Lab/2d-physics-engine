import { SceneOptions, SceneInterface, SceneEventType, ObserverCallback } from './types';

class Scene implements SceneInterface {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  private _backgroundColor: string;

  private _top: number;

  private _left: number;

  private _mouseDownObserverList: ObserverCallback[] = [];

  private _mouseMoveObserverList: ObserverCallback[] = [];

  private _mouseUpObserverList: ObserverCallback[] = [];

  constructor(options?: SceneOptions) {
    this.canvas = document.createElement('canvas');
    this.canvas.height = window.innerHeight - 100;
    this.canvas.width = window.innerWidth - 100;

    this.ctx = this.canvas.getContext('2d');

    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'scene-wrapper');
    wrapper.appendChild(this.canvas);

    const container = document.createElement('div');
    container.setAttribute('id', 'scene-container');
    container.appendChild(wrapper);

    document.querySelector('body').appendChild(container);

    this._backgroundColor = options?.backgroundColor ?? 'white';

    const rect = this.canvas.getBoundingClientRect();
    this._top = rect.top;
    this._left = rect.left;

    if (options.mouseEvents) {
      this.canvas.addEventListener(
        SceneEventType.MOUSE_DOWN,
        this._triggerMouseDownObservers.bind(this)
      );
      this.canvas.addEventListener(
        SceneEventType.MOUSE_MOVE,
        this._triggerMouseMoveObserver.bind(this)
      );
      this.canvas.addEventListener(
        SceneEventType.MOUSE_UP,
        this._triggerMouseUpObservers.bind(this)
      );
    }

    this.cleanUp();
  }

  private _triggerMouseDownObservers(event: MouseEvent): void {
    this._mouseDownObserverList.forEach((observer) =>
      observer(event.clientX - this._left, event.clientY - this._top)
    );
  }

  private _triggerMouseMoveObserver(event: MouseEvent): void {
    this._mouseMoveObserverList.forEach((observer) =>
      observer(event.clientX - this._left, event.clientY - this._top)
    );
  }

  private _triggerMouseUpObservers(event: MouseEvent): void {
    this._mouseUpObserverList.forEach((observer) =>
      observer(event.clientX - this._left, event.clientY - this._top)
    );
  }

  registerObserver(eventType: SceneEventType, observer: ObserverCallback): void {
    switch (eventType) {
      case SceneEventType.MOUSE_DOWN:
        this._mouseDownObserverList.push(observer);
        break;
      case SceneEventType.MOUSE_MOVE:
        this._mouseMoveObserverList.push(observer);
        break;
      case SceneEventType.MOUSE_UP:
        this._mouseUpObserverList.push(observer);
        break;
      default:
        break;
    }
  }

  deregisterObserver(eventType: SceneEventType, observer: ObserverCallback): void {
    switch (eventType) {
      case SceneEventType.MOUSE_DOWN:
        this._mouseDownObserverList = this._mouseDownObserverList.filter(
          (item) => item !== observer
        );
        break;
      case SceneEventType.MOUSE_MOVE:
        this._mouseMoveObserverList = this._mouseMoveObserverList.filter(
          (item) => item !== observer
        );
        break;
      case SceneEventType.MOUSE_UP:
        this._mouseUpObserverList = this._mouseUpObserverList.filter((item) => item !== observer);
        break;
      default:
        break;
    }
  }

  cleanUp(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = this._backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Scene;
