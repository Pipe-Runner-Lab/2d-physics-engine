// TODO Why were we using dynamic imports?
import Scene from 'scene';
import Engine from 'engine';
// import { test } from '../wasm';
import './base.css';

// console.log('I am a fun page');

// test();

const scene = new Scene({
  backgroundColor: 'black'
});

const engine = new Engine({ scene });

engine.render();
