import { mas } from '../output/mas.js';
import { mult } from '../output/mult.js';
import { exp } from '../output/exp.js';
import { fac } from '../output/fac.js';
import { monus } from '../output/monus.js';
import { eq } from '../output/eq.js';
import { div } from '../output/div.js';
import { coc } from '../output/coc.js';

console.log("========== Function Test ==========\n");

// Testing the `mas` function
console.log("Testing 'mas' (Addition)");
console.log(`mas(3, 5): Expected 8, Got ${mas(3, 5)}`);
console.log("----------------------------------------\n");

console.log("Testing 'mult' (Multiplication)");
console.log(`mult(11, 4): Expected 44, Got ${mult(11, 4)}`);
console.log("----------------------------------------\n");

console.log("Testing 'exp' (Exponentiation)");
console.log(`exp(2, 3): Expected 8, Got ${exp(2, 3)}`);
console.log("----------------------------------------\n");

console.log("Testing 'fac' (Factorial)");
console.log(`fac(4): Expected 24, Got ${fac(4)}`);
console.log("----------------------------------------\n");

console.log("Testing 'monus' (Subtraction with floor at 0)");
console.log(`monus(14, 15): Expected 0, Got ${monus(14, 15)}`);
console.log("----------------------------------------\n");

console.log("Testing 'eq' (Equality Check)");
console.log(`eq(15, 15): Expected 1, Got ${eq(15, 15)}`);
console.log(`eq(1, 15): Expected 0, Got ${eq(1, 15)}`);
console.log("----------------------------------------\n");

console.log("Testing 'div' (Integer Division)");
console.log(`div(17, 2): Expected 8, Got ${div(17, 2)}`);
console.log("----------------------------------------\n");

console.log("Testing 'coc' (Special Division Function)");
console.log(`coc(17, 2): Expected 8, Got ${coc(17, 2)}`);
console.log(`coc(17, 0): Expected 0, Got ${coc(17, 0)}`);
console.log("----------------------------------------\n");

