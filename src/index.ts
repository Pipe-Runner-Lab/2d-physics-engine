// TODO Why were we using dynamic imports?
import Scene from 'scene';
import Engine from 'engine';
// import { test } from '../wasm';
import './base.css';
import Ball from 'assets/ball';
import Wall from 'assets/wall';

// console.log('I am a fun page');

// test();

const scene = new Scene({
  backgroundColor: 'black',
  mouseEvents: true
});

const engine = new Engine({ scene, guideLines: true });

engine.addAsset(new Ball({ x: 100, y: 100, mass: 50 }));
engine.addAsset(new Ball({ x: 300, y: 300, mass: 30 }));
engine.addAsset(new Ball({ x: 600, y: 600, mass: 35 }));
engine.addAsset(new Ball({ x: 500, y: 100, mass: 40 }));
engine.addAsset(new Ball({ x: 150, y: 550, mass: 50 }));

engine.addAsset(new Wall({ x1: 40, y1: 40, x2: scene.canvas.width - 40, y2: 40 }));
engine.addAsset(
  new Wall({
    x1: scene.canvas.width - 40,
    y1: 40,
    x2: scene.canvas.width - 40,
    y2: scene.canvas.height - 40
  })
);
engine.addAsset(
  new Wall({
    x1: 40,
    y1: scene.canvas.height - 40,
    x2: scene.canvas.width - 40,
    y2: scene.canvas.height - 40
  })
);
engine.addAsset(new Wall({ x1: 40, y1: 40, x2: 40, y2: scene.canvas.height - 40 }));

function renderLoop(timestamp = 0): void {
  engine.render(timestamp);
  requestAnimationFrame(renderLoop);
}

renderLoop();
