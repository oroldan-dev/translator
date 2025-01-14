"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Function to translate Essential code to TypeScript
function translateEssentialToTS(inputFile, outputFile) {
    // Read the input file
    var essentialCode = fs.readFileSync(inputFile, 'utf-8');
    // Split code into lines and process each one
    var lines = essentialCode.split('\n');
    var insideFunction = false; // Track if inside a function definition
    var declaredVariables = new Set(); // Track declared variables
    var translatedLines = lines.map(function (line) {
        var _a, _b, _c;
        // Remove extra spaces
        line = line.trim();
        // Translate function definitions
        if (line.startsWith('mas(')) {
            insideFunction = true;
            var funcName = line.split('(')[0];
            var params = (_a = line.match(/\((.*?)\)/)) === null || _a === void 0 ? void 0 : _a[1];
            return "function ".concat(funcName, "(").concat(params, "){");
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
            var variable = line.split(' ')[1];
            declaredVariables.add(variable);
            return "".concat(variable, " = 0;");
        }
        if (line.includes('<-')) {
            var _d = line.split('<-').map(function (s) { return s.trim(); }), left = _d[0], right = _d[1];
            if (insideFunction && !declaredVariables.has(left)) {
                declaredVariables.add(left);
                return "let ".concat(left, " = ").concat(right, ";");
            }
            return "".concat(left, " = ").concat(right, ";");
        }
        if (line.startsWith('while')) {
            // Correct the while format without adding extra braces
            var condition = line.replace('while', '').replace("}", " ").replace("{", " ").replace('!=', '!==').trim();
            return "while (".concat(condition, ") {");
        }
        if (line.startsWith('incr')) {
            var variable = (_b = line.match(/\((.*?)\)/)) === null || _b === void 0 ? void 0 : _b[1];
            if (variable)
                return "".concat(variable, "++;");
        }
        if (line.startsWith('decr')) {
            var variable = (_c = line.match(/\((.*?)\)/)) === null || _c === void 0 ? void 0 : _c[1];
            if (variable)
                return "".concat(variable, "--;");
        }
        if (line.startsWith('return')) {
            var variable = line.split(' ')[1];
            return "return ".concat(variable, ";");
        }
        return line; // Return unmodified line if no match
    });
    // Join the translated lines and write to output file
    var translatedCode = translatedLines.join('\n');
    fs.writeFileSync(outputFile, translatedCode, 'utf-8');
    console.log("Translation complete. Code saved to ".concat(outputFile));
}
// Read command-line arguments
var args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Usage: ts-node src/translator.ts <input_file> <output_file>');
    process.exit(1);
}
var inputFile = args[0];
var outputFile = args[1];
translateEssentialToTS(inputFile, outputFile);
