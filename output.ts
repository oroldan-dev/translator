function mas(x_1, x_2) {
  let z_1 = x_1;
  let aux = x_2;
  x_2 = 0;

  while (aux !== 0) {
    let x_3 = z_1;
    z_1 = x_3;
    z_1++;
    x_2++;
    aux--;
  }

  return z_1;
}
