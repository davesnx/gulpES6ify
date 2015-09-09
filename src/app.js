import * as _ from '../node_modules/lodash/index.js';
import { square, diag } from './lib';

console.log('Square of default (5): ' + square()); // 121
console.log('Lodash (5): ' + _.first([5, 2, 3])); // 5

let bodyText = `This is really
now
perfectly
legal.`;

console.log("");
console.log(bodyText);
