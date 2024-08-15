// Section 1: JavaScript [Mandatory]
// 1. Coding Challenge: Array Manipulation
// You need to double even numbers and leave odd numbers unchanged. Here's a function to accomplish that:

function manipulateArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
}

// // Example usage:
// console.log(manipulateArray([1, 2, 3, 4])); // Output: [1, 4, 3, 8]
// 2. Conceptual Question: Differences Between == and ===
// == (loose equality) compares two values after performing type coercion (i.e., it converts the values to a common type before comparison).
// === (strict equality) compares both the value and the type without coercion, meaning both must be identical.
