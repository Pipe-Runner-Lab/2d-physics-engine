// TODO Why were we using dynamic imports?
import Scene from 'components/scene';
import { test } from '../wasm';
import './base.css';

console.log('I am a fun page');

test();

const scene = new Scene({
  backgroundColor: 'black'
});
