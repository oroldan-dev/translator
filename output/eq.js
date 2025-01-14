import { monus } from '../output/monus.js';
import { mas } from '../output/mas.js';

export function eq (x_1,x_2) {
  let z_1 = monus(1, mas(monus(x_1, x_2), monus(x_2, x_1))) 
  
  return z_1
}
  