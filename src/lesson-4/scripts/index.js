import colorize from './colors.js';
import { sum } from './sum.js';

console.log('------------------- Lesson 17 -----------------------');

// Click paragraphs
const text1El = document.getElementById('text1');
const text2El = document.getElementById('text2');
const text3El = document.getElementById('text3');

colorize([text1El, text2El, text3El]);

console.log(sum(2)(3));
console.log(sum(5)(2));
