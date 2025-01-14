import { pred } from '../output/pred.js';

export function monus (x_1,x_2) {
  let z_1 = x_1 
  let aux = x_2 
  
  while ((aux !== 0)) {
    
  z_1 = pred(z_1) 
  aux-- 
}
  
  return z_1
  }
  