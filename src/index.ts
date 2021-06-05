// TODO Why were we using dynamic imports?
import Scene from 'scene';
import Engine from 'engine';
// import { test } from '../wasm';
import './base.css';
import Ball from 'assets/ball';

// console.log('I am a fun page');

// test();

const scene = new Scene({
  backgroundColor: 'black'
});

const engine = new Engine({ scene });

engine.addAsset(new Ball({ x: 100, y: 100, radius: 50 }));

engine.render();
