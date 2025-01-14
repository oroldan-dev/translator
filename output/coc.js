import { eq } from '../output/eq.js';
import { mas } from '../output/mas.js';
import { mult } from '../output/mult.js'; 


export function coc (x_1,x_2) {
  let z_1 = 0 
  let aux = x_1 
  x_1 = 0 
  
  while ((aux !== 0)) {
    
  let x_3 = z_1 
  z_1 = mas( x_3, eq(mas(x_1,1),mas(mult(x_3,x_2), x_2)) ) 
  x_1++ 
  aux-- 
}
  
  return z_1
  }
  