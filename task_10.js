
// 10. Slicing an Array
// Create an array of programming languages with at least 6 elements.
// Use the slice method to extract a portion of the array from the 2nd to the 4th index (inclusive).
// Display the extracted portion and the original array.

// Create an array of programming languages with at least 6 elements
const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go'];

// Use the slice method to extract a portion of the array from the 2nd to the 4th index
const slicedLanguages = programmingLanguages.slice(2, 5); // 5 is exclusive, so it includes index 2, 3, and 4

// Display the extracted portion and the original array
console.log('Extracted Portion:', slicedLanguages);
// Output: ['Java', 'C++', 'Ruby']

console.log('Original Array:', programmingLanguages);
// Output: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go']
