function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let numOne = num1.toString();
  let numTwo = num2.toString();
  console.log(numOne, numTwo);

  if (numOne.length !== numTwo.length) return false;
  let numOneMap = {};
  for (let i = 0; i < numOne.length; i++) {
    let letter = numOne[i];
    numOneMap[letter] = (numOneMap[letter] || 0) + 1;
  }
  console.log(numOneMap);
  for (let l = 0; l < numTwo.length; l++) {
    let letter = numTwo[l];
    if (!numOneMap[letter]) {
      return false;
    } else {
      numOneMap[letter] -= 1;
    }
  }
  return true;
}

//let response = sameFrequency(3589578, 5879385);

//console.log(response);
///////////////////////////////////////////////////////////
// Frequency counter / Multiple Pointers

function areThereDuplicates(a, b, c) {
  // good luck. (supply any arguments you deem necessary.)
  let arrOfItems = [...arguments];
  console.log(arrOfItems);
  let argsMap = {};
  if (Object.keys(arrOfItems).length === 0) return false;

  for (let i = 0; i < arrOfItems.length; i++) {
    let arg = arrOfItems[i];
    argsMap[arg] = (argsMap[arg] || 0) + 1;
    console.log(argsMap[arg]);

    if (argsMap[arg] > 1) {
      return true;
    }
  }
  return false;
}

// const testOne = areThereDuplicates(1, 2, 3);
// console.log(testOne);
// const testTwo = areThereDuplicates(1, 2, 2);
// console.log(testTwo);
const testThree = areThereDuplicates("a", "b", "c", "a");
//console.log(testThree);

//areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

//sameFrequency Solution
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

function factorial(num) {
  if (num === 1) return 1;
  // recursively the first instance of num * factorial(num -1) waits for the second instance of
  // num * factorial(num -1 ) until completion
  return num * factorial(num - 1);
}

const sumAll = factorial(1);

//console.log(sumAll);

function collectOddValues(arr) {
  // Though newArr is everytime set to lenght of zero,
  // it's value is held in concat recursively below
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

//POWER SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
//FACTORIAL SOLUTION
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
////PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
//RECURSIVE RANGE SOLUTION
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
//FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// REVERSE
function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let lastChar = str.charAt(str.length - 1);
  let withoutLastChar = str.substring(0, str.length - 1);
  console.log(lastChar, withoutLastChar);

  if (str.length === 0) return "";
  return lastChar + reverse(withoutLastChar);
}

//console.log(reverse("rithmschool")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// Is Palindrom

//Reverse Solution

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
//isPalindrome Solution

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// Searching An Array
// Linear search

function linearSearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let indexOfItem = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) indexOfItem = i;
  }
  return indexOfItem;
}

//console.log(linearSearch([9, 12, 6, 7, 90, 25, 4], 7));

// Binary search # Array has to be sorted to work
// Binary serach is divide and conquer
// We have the left, the right and the middle

function binarySearch(arr, num) {
  let end = arr.length - 1;
  let start = 0;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === num) return middle;
  return -1;
}

//console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 2));

// Search Naive string

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

//console.log(naiveSearch("lorie loled", "pop"));

// BUBBLE Sort
// Maximum data is accumulated at the back

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

//console.log(bubbleSort([37, 45, 29, 8, -1, 0, 62]));

// SElection Sort
// Sorted data is accumulated at the begining
// Time complexity => O(n^2)

function selectionSort(arr) {
  let foundSmaller;
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
        foundSmaller = true;
      }
    }
    if (foundSmaller) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

//console.log(selectionSort([37, 45, 29, 8, -1, 62]));

// Insertion Sort
// I builds up the sort by gradually place an element where it should go in our sorted half.
// Start by picking the second element in the array
// compare it with the one before it and swap if necessary
// Continue to the next element and if it is incorrect order, iterate through the sorted portion and
// place the element in the correct place  => repeat until is it sorted and return that array

// Time complexity O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // condition is in the for loop condition
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

//console.log(insertionSort([2, 1, 9, 76, 4]));

// Merge Sort
// Combination of splitting, merging and sorting
// Explots the fact that arrays of 0 or 1 elments are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements,
// then building up a newly sorted array.

// Function to merge 2 sorted arrays
// O(n + m) time and space
/**
 * Create an empty array
 * While there are still values we haven't looked at
 * If the value in the first array is smaller than the values in the second array.
 * push the value of the first array into the result and move to the next value in the first array
 * If the value in the first array is larger than the value in the second array, push the value
 * of the second array into our result and move to the next value in the second array.
 * Once we exhaust all the values from one array, push all the remaining values from the other array.
 */

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

//console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// Breaking the code
// Break up the array into halves until you have arrays that are empty of have one element.
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
// Once the array has been merged back together, return the merged and sorted array.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);

  //mergeSort()
}

//console.log(mergeSort([10, 24, 76, 73, 52, 72, 1, 9]));

// Big O Time and space complexity
// Time complexity => O(n log n) => Best, average, worst
// As n, the length grows, the number of time we have to split it up grows at the rate of log n.
// 2 to what power, 2 being the base, would give us n.
// Always a fixed number of comparisions 0(n) => O(n log n)
// Space complexity => O(n)

// ### QUICK SORT ### //
// We pick a pivot element, compare it with every other element
// Those that are less than are placed to the left and those greater than placed to the right
// each time an item is less than, it is counted.
// Then when all the lesser items are found, the pivot elemnt is placed right after it.
// Then the same process repeated for the left and right sides as well.

function Pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;

  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  //console.log(arr);
  return swapIndex;
}

//console.log(Pivot([4, 8, 2, 1, 5, 7, 6, 3]));
