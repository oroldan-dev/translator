import { mult } from '../output/mult.js';

export function fac (x_1) {
  let z_1 = 1 
  let aux = x_1 
  
  while ((aux !== 0)) {
    
  z_1 = mult(z_1, aux) 
  aux-- 
}
  
  return z_1
  }
  