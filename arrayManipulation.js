// arrayManipulation.js
function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

// Example usage:
let numbers = [1, 2, 3, 4];
console.log(processArray(numbers)); // Outp// arrayManipulation.js (continued)

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage:
let strings = ["Hello", "World", "JavaScript"];
let processedNumbers = processArray(numbers);
console.log(formatArrayStrings(strings, processedNumbers)); // Output: ["hello", "WORLD", "javascript"]
ut: [3, 4, 9, 16]
