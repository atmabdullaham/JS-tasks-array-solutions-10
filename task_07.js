// 7. Filtering Even Numbers
// Create an array of numbers containing at least 6 elements.
// Use the filter method to create a new array containing only even numbers.
// Display the new array of even numbers.

// Create an array of numbers containing at least 6 elements
const numbers = [3, 8, 15, 22, 7, 10, 5];

// Use the filter method to create a new array containing only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Display the new array of even numbers
console.log('Even Numbers:', evenNumbers);
// Output: [8, 22, 10]
