// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

// WITHOUT RECURSION
function arrDeDup(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  arr = newArr; //is this needed? Do i need to transform org array, or just return any old arr?
  return arr;
}

// still need recursion and filter
//WITH FILTER

function remDupFilter(arr) {
  return arr.filter(function (element, index) {
    return arr.indexOf(element) === index;
  });
}

//WITH RECURSION
// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

function remDup(arr) {
  if (arr.length === 0) {
    return [];
  }

  const tester = arr[0];
  const modArr = arr.slice(1);

  if (modArr.includes(tester)) {
    return remDup(modArr);
  } else {
    return [tester].concat(remDup(modArr));
  }
}
