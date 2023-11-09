// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// WITHOUT RECURSION
function compStr(str) {
  let tempCount = 1;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      tempCount++;
    } else if (str[i] !== str[i + 1] && tempCount > 1) {
      res.push(tempCount, str[i]);
      tempCount = 1;
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}
