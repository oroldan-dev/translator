import { monus } from '../output/monus.js';
import { mas } from '../output/mas.js';
import { mult } from '../output/mult.js'; 


      export function div (x_1,x_2) {
let x_3 = 0; 
let z_1 = monus(mas(x_1, 1), mas(mult(x_3, x_2), x_2)); 

while ((z_1 !== 0)) {
    
x_3 ++; 
z_1 = monus(mas(x_1, 1), mas(mult(x_3, x_2), x_2)); 
}

z_1 = x_3; 

return z_1; 
}
