function extendOffset(value, offset) {
  if (Array.isArray(value) && typeof offset === 'number') {
    return value.map(item => item + offset);
  } else if (typeof value === 'number' && typeof offset === 'number') {
    return value + offset;
  } else {
    throw new Error('Invalid input types');
  }
}

// Example usage with an array:
const arrayValue = [1, 2, 3];
const offset = 2;
const resultArray = extendOffset(arrayValue, offset);

console.log(resultArray); // Output: [3, 4, 5]

// Example usage with numbers:
const numberValue = 10;
const resultNumber = extendOffset(numberValue, offset);

console.log(resultNumber); // Output: 12
