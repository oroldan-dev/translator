import { mult } from '../output/mult.js';

export function exp (x_1,x_2) {
  let z_1 = 1 
  let aux = x_2 
  x_2 = 0 
  
  while ((aux !== 0)) {
    
  let x_3 = z_1 
  z_1 = mult(x_1, x_3) 
  x_2++ 
  aux-- 
}
  
  return z_1
  }
  