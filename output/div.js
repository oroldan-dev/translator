import { monus } from '../output/monus.js';
import { mas } from '../output/mas.js';
import { mult } from '../output/mult.js'; 


      export function div (x_1,x_2) {
z_1 = 0; 
let aux = x_1; 
x_1 = 0; 

while ((aux !== 0)) {
    
let x_3 = z_1; 
z_1 = monus(mas(x_1, 1), mas(mult(aux, x_2), x_3)); 
z_1 ++; 
x_2 ++; 
aux --; 
}

return z_1; 
}
