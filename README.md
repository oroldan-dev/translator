# Math translator

Translator of implementations of essential mathematical operations in JavaScript.

---

## Features

- **Addition (`mas`)**: Adds two numbers.
- **Multiplication (`mult`)**: Multiplies two numbers.
- **Exponentiation (`exp`)**: Raises one number to the power of another.
- **Factorial (`fac`)**: Computes the factorial of a number.
- **Subtraction with floor (`monus`)**: Subtracts with a lower bound of zero.
- **Equality Check (`eq`)**: Checks if two numbers are equal.
- **Integer Division (`div`)**: Performs integer division.
- **Special Division (`coc`)**: A custom division that returns 0 when `coc(x,0)`.

---

## Installation

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

---

## How to Execute

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. Run the tests:

   ```bash
   node src/test.js
   ```

3. (Optional): change lpe definitions and translate to javascript,
for example translate **mas** with:

   ```bash
   node src/traductor.js ./lpe/mas.lpe
   ```

---

## Example Usage

You can use the functions in your JavaScript projects by importing them:

```javascript
import { mas } from './output/mas.js';
import { mult } from './output/mult.js';

console.log(mas(3, 5)); // Output: 8
console.log(mult(2, 4)); // Output: 8
```

---

## Files

- `lpe/`: Contains the individual function definitions in LPE.
- `output/`: Contains the individual function implementations.
- `test.js`: A test script to demonstrate the functionality of the files.
