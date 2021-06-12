// TODO Why were we using dynamic imports?
import Scene from 'scene';
import Engine from 'engine';
// import { test } from '../wasm';
import './base.css';
import Ball from 'assets/ball';

// console.log('I am a fun page');

// test();

const scene = new Scene({
  backgroundColor: 'black',
  mouseEvents: true
});

const engine = new Engine({ scene });

engine.addAsset(new Ball({ x: 100, y: 100, radius: 50 }));
engine.addAsset(new Ball({ x: 300, y: 300, radius: 90 }));
engine.addAsset(new Ball({ x: 600, y: 600, radius: 30 }));
engine.addAsset(new Ball({ x: 500, y: 100, radius: 40 }));
engine.addAsset(new Ball({ x: 150, y: 550, radius: 70 }));

engine.render();
