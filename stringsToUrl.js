// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// WITHOUT RECURSION
function StrToUrl(str) {
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      strArr.splice(i, 1, "%20");
    }
  }
  const output = strArr.join("");
  return output;
}

// WITHOUT RECURSION
// 1. use split to mutate into array
// 2. iterate with for loop. if it hits a space at 'i', it is replaced (1 instead of 0, which would just insert) with '%20'
// 3. strArr is still an array... output looks like a string. arr.join("") to turn back into string. Quotes are needed as argument, otherwise it will have unsightly commas
