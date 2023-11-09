// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

function uni(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1).includes(str[i]) && str[i] !== " ") {
      return false;
    }
  }
  return true;
}

// define unique please. what about upper/lowercase? add str.toLowerCase() before?
// this already removes spaces from the algo... is this desired?
