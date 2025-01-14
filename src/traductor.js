import * as fs from 'fs';

function translateEssentialToJS(inputFile, outputFile) {
  const essentialCode = fs.readFileSync(inputFile, 'utf-8');

  let importsToAdd = '';
  const lines = essentialCode.split('\n');
  let insideFunction = false;
  const declaredVariables = new Set();
  const translatedLines = lines.map(line => {
    line = line.trim();

    if (line.startsWith('mas(')) {
      importsToAdd = ` `
    } else if (line.startsWith('mult(')) {
      importsToAdd = `import { mas } from '../output/mas.js';`
    } else if (line.startsWith('exp(')) {
      importsToAdd = `import { mult } from '../output/mult.js';`
    } else if (line.startsWith('fac(')) {
      importsToAdd = `import { mult } from '../output/mult.js';`
    } else if (line.startsWith('monus(')) {
      importsToAdd = `import { pred } from '../output/pred.js';`
    } else if (line.startsWith('eq(')) {
      importsToAdd = `import { monus } from '../output/monus.js';
import { mas } from '../output/mas.js';`
    } else if (line.startsWith('div(')) {
      importsToAdd = `import { monus } from '../output/monus.js';
import { mas } from '../output/mas.js';
import { mult } from '../output/mult.js'; 
`}
    else if (line.startsWith('coc(')) {
      importsToAdd = `import { eq } from '../output/eq.js';
import { mas } from '../output/mas.js';
import { mult } from '../output/mult.js'; 
`}


    if (
      line.startsWith('mas(')
      || line.startsWith('mult(')
      || line.startsWith('exp(')
      || line.startsWith('fac(')
      || line.startsWith('monus(')
      || line.startsWith('pred(')
      || line.startsWith('eq(')
      || line.startsWith('div(')
      || line.startsWith('coc(')
    ) {
      insideFunction = true;
      const funcName = line.split('(')[0];
      const params = line.match(/\((.*?)\)/)?.[1];
      return `${importsToAdd}

      export function ${funcName} (${params}) {`;
    }

    if (line === '}') {
      if (insideFunction) {
        insideFunction = false;
        return '}';
      }
    }

    // Translations based on Essential language
    if (line.startsWith('clear')) {
      const variable = line.split(' ')[1];
      declaredVariables.add(variable);
      return `${variable} = 0; `;
    }
    if (line.includes('<-')) {
      const [left, right] = line.split('<-').map(s => s.trim());
      if (insideFunction && !declaredVariables.has(left)) {
        declaredVariables.add(left);
        return `let ${left} = ${right}; `;
      }
      return `${left} = ${right}; `;
    }
    if (line.startsWith('while')) {
      const condition = line.replace('while', '').replace("}", " ").replace("{", " ").replace('!=', '!==').trim();
      return `while (${condition}) {
    `;
    }
    if (line.startsWith('incr')) {
      const variable = line.match(/\((.*?)\)/)?.[1];
      if (variable) return `${variable} ++; `;
    }
    if (line.startsWith('decr')) {
      const variable = line.match(/\((.*?)\)/)?.[1];
      if (variable) return `${variable} --; `;
    }
    if (line.startsWith('return')) {
      const variable = line.split(' ')[1];
      return `return ${variable}; `;
    }
    return line;
  });

  const translatedCode = translatedLines.join('\n');
  fs.writeFileSync(outputFile, translatedCode, 'utf-8');
  console.log(`Translation complete.Code saved to ${outputFile} `);
}

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node traductor.js <input_file>');
  process.exit(1);
}

const inputFile = args[0];
const functionName = inputFile.split('\\').pop().split('.').shift();
const outputFile = `output/${functionName}.js`;

// Remove the file if it exists
if (fs.existsSync(outputFile)) {
  fs.unlinkSync(outputFile);
  console.log(`Removed existing file: ${outputFile} `);
}

translateEssentialToJS(inputFile, outputFile);
