// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

function arrSort(arr) {
  if (arr.length < 1) {
    console.log(res);
    return arr;
  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      res.push(arr.shift());
    } else {
      res.splice(0, 0, arr.shift());
    }
  }
  arrSort(arr);
}
