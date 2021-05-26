type SceneOptions = {
  backgroundColor: string;
};

export default class Scene {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  width: number;

  height: number;

  backgroundColor: string;

  constructor(options?: SceneOptions) {
    this.canvas = document.createElement('canvas');
    this.canvas.height = window.innerHeight - 60;
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

    this.cleanUp();
  }

  cleanUp(): void {
    this.ctx.clearRect(0, 0, this.height, this.width);

    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.height, this.height);
  }
}
