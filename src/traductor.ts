import * as fs from 'fs';

// Function to translate Essential code to TypeScript
function translateEssentialToTS(inputFile: string, outputFile: string): void {
  // Read the input file
  const essentialCode = fs.readFileSync(inputFile, 'utf-8');

  // Split code into lines and process each one
  const lines = essentialCode.split('\n');
  let insideFunction = false; // Track if inside a function definition
  const declaredVariables = new Set<string>(); // Track declared variables
  const translatedLines = lines.map(line => {
    // Remove extra spaces
    line = line.trim();

    // Translate function definitions
    if (line.startsWith('mas(')) {
      insideFunction = true;
      const funcName = line.split('(')[0];
      const params = line.match(/\((.*?)\)/)?.[1];
      return `function ${funcName}(${params}){`;
    }

    // End of function
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
      return `${variable} = 0;`;
    }
    if (line.includes('<-')) {
      const [left, right] = line.split('<-').map(s => s.trim());
      if (insideFunction && !declaredVariables.has(left)) {
        declaredVariables.add(left);
        return `let ${left} = ${right};`;
      }
      return `${left} = ${right};`;
    }
    if (line.startsWith('while')) {
      // Correct the while format without adding extra braces
      const condition = line.replace('while', '').replace("}", " ").replace("{", " ").replace('!=', '!==').trim();
      return `while (${condition}) {`;
    }
    if (line.startsWith('incr')) {
      const variable = line.match(/\((.*?)\)/)?.[1];
      if (variable) return `${variable}++;`;
    }
    if (line.startsWith('decr')) {
      const variable = line.match(/\((.*?)\)/)?.[1];
      if (variable) return `${variable}--;`;
    }
    if (line.startsWith('return')) {
      const variable = line.split(' ')[1];
      return `return ${variable};`;
    }
    return line; // Return unmodified line if no match
  });

  // Join the translated lines and write to output file
  const translatedCode = translatedLines.join('\n');
  fs.writeFileSync(outputFile, translatedCode, 'utf-8');
  console.log(`Translation complete. Code saved to ${outputFile}`);
}

// Read command-line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: ts-node src/translator.ts <input_file> <output_file>');
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1];
translateEssentialToTS(inputFile, outputFile);
