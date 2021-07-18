// Big O
// O(5n + 2) => n, because the number of operations grow proportionally with n.
// O(2n) => O(n)
// O(500) => O(1)
// O(13n^2) => O(n^2)
// O(n^2 + 5n + 8) => O(n^2)

//CONSTANTS O(1)
// Arithmetic operations are constants
// variable assignments are also constants
// Accessing elements in an array(by index) or object(by key) is constant.
// In a loop the complexity is the length of the loop times the complexity of whatever happens inside the //// loop.

// O(n)
// as n grows the number of operations grows, like the length of an array in a for loop. Is the length /////// constant or increases. Would the number of operatins increase with n increasing?

// SPACE COMPLEXITY => space it takes up as n increases, memory
// Most primities, booleans, numbers , undefined, null are constant space
// strings require more space, O(n) where n is the length of a string
// Reference types, Arrays and objects are O(n), where n is the length (for arrays), or the number of keys (for objects).

// O(log n) , O(nlog n)

//OBJECTS PERFORMANCE
// There very quick, if we want no order and just save and find data.
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(1)

// Objects are an excellent choice when we don't need any ordering.
// Object.keys - O(n) as each keys increases n increases
// Object.values - O(n) as each values increases n increases
// Object.entries - O(n) as each values increases n increases
// hasOwnProperty - O(1) constant time, if a key exists

// ARRAYS are also called ordered list, through indexes, intrincic ordering.
// Use arrays if you need order, only.

/**
 * Insertion - it depends, at the end of the array O(1) constant time, inserting at the beginning has to re-index each element, thats the time O(n).
 * Removal - it depends, same as above for removing
 * Searching - O(n)
 * Access - O(1)
 */
// Thus push() and pop() always faster than shift and unshift

/**
 * push - O(1)
 * pop - O(1)
 * shift - O(n)
 * unshift - O(n)
 * concat - O(n)
 * slice - O(n)
 * splice - O(n)
 * sort - O(nlog n)
 * forEach/map/filter/reduce/find/etc. O(n)
 */

// PROBLEM SOLVING PATTERNS
// Devise a plan for solving the problems
// Master common problem solving patterns

/**
 * Understand the problem
 * Explore Concrete Examples
 * Break it Down
 * Solve/Simplify
 * Look Back and Refactor
 */

// UNDERSTAND THE PROBLEM
// =>  Can I restate the problem in own words
// => What are the inputs, the outputs, what do they look like
// Can the out put be gotten from the input
// How should I label the important pieces of data

// EXPLORE EXAMPLES
// start with simple examples
// Progress to more complex examples
// Explore examples with Empty inputs
// Explore examples with invalid inputs

// BREAK IT DOWM
// Write comments to what you are doing

// SOLVE or Simplify
/**
 * Find the core difficulty in what you are trying to do.
 * Temporarily ignore that difficulty
 * Write a simplified solution
 * Incorporate that difficulty back in
 */

// LOOK BACK AND REFACTOR
// Can you check the result
//Can you derive the result differently
// Can you understand it at a glace.
// Can you use the result or method for some other problem?
// can you improve the performance of your solution.
// Can you think of other ways to refector
// How has other people solved this problem

// Example
// Count each alphanumeric character

function charCount(str) {
  const obj = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

//console.log(charCount("hjbj   enianoj l<<löxnin"));

// FREQUENCY COUNTER

function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};

  for (let val of arr1) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }
  for (let key in frequencyCounterOne) {
    /** let key of used to iterate over object, key in used to check a property or value, just that this checks the entire prototype chain, and not always recommended, unless i'm very sure, use hasOwnProperty */
    //console.log(frequencyCounterTwo.hasOwnProperty(key));
    //console.log(key in frequencyCounterTwo);
    // if(!(key ** 2 in frequencyCounterOne)) return false

    if (!(key ** 2 in frequencyCounterTwo)) return false;
    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key])
      return false;
  }

  return true;
}

//console.log(frequencyCounter([1, 2, 3, 2], [4, 9, 1, 4]));

// ANAGRAM

function anagram(str1, str2) {
  if (str1 === "" && str2 === "") return true;
  if (str1.length !== str2.length) return false;

  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};

  for (let letter of str1) {
    frequencyCounterOne[letter] = (frequencyCounterOne[letter] || 0) + 1;
  }
  for (let letter of str2) {
    frequencyCounterTwo[letter] = (frequencyCounterTwo[letter] || 0) + 1;
  }

  for (let key in frequencyCounterOne) {
    if (!(key in frequencyCounterTwo)) return false;
    if (frequencyCounterOne[key] !== frequencyCounterTwo[key]) return false;
  }

  return true;
}

//console.log(anagram("", ""));

// More Efficient Anagram Solution
// Loop through  just the first string
// Pay attention

function anagramOne(str1, str2) {
  if (str1.length !== str2.length) return false;

  let str1LookUp = {};

  for (let letter of str1) {
    str1LookUp[letter] ? str1LookUp[letter]++ : (str1LookUp[letter] = 1);
  }

  for (let l of str2) {
    if (!str1LookUp[l]) return false;
    // is this really necessary
    //else str1LookUp[l]--;
  }

  return true;
}

//console.log(anagramOne("anagram", "maanagr"));

// MOULTIPLE POINTERS

// Creating pointers or values that correspond to an index or position and moves towards the beginning,
// end or middle based on a certain condition.

// Sorted Array
function zeroSum(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else if (sum < 0) left++;
  }
}

//console.log(zeroSum([-4, -3, -2, -1, 0, 1, 2, 3, 5]));

// Count unique values, sorted, no -ve values

function multiplePointers(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      // Switching the values avoids double comparison
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//console.log(multiplePointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// SLIDING WINDOW PATTERN
/**
 * This pattern involves creating a window which can either be an array or number from one position to another. Depending on the condition, the window either decreases or increases or closes, and a new window is created. very useful for keeping track of subset of data in an array.
 */

function slidingWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (num > arr.length) return null;
  // First get the first three numbers sum.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // add the next value
    tempSum = tempSum - arr[i - num] + arr[i];
    // substract the previous value
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

//console.log(slidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// LINEAR SEARCH

// BINARY search, the array is sorted, so we divide the array and find a section where te number would be inside.
// We pick a value at the middle of the array, is that value greater or lesser, if it is greater then
// we chose the left split and do it again and again and again.

// Return the value of the index of the num
function linearSearch(arr, num) {
  // array is sorted

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return null;
}

//console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));

// BINARY SEARCHING

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

//SECTION 6, Coding Exercise 3.

/**
 * Frequency Counter - Same frequency
 */

function sameFrequencyEx(str1, str2) {
  str1 = str1.toString();
  str2 = str2.toString();

  if (str1.length !== str2.length) return false;

  let lookUp = {};

  for (let val of str1) {
    lookUp[val] = lookUp[val] ? ++lookUp[val] : 1;
  }
  for (let val of str2) {
    if (!lookUp[val]) return false;
    // else lookUp[val]--;
  }

  return true;
}

//console.log(sameFrequencyEx(129, 291));

function areThereDuplicates() {
  let allArgs = [...arguments];
  // frequency counter
  let sortedArgs = {};

  for (let val in allArgs) {
    if (!sortedArgs[allArgs[val]]) sortedArgs[allArgs[val]] = 1;
    else ++sortedArgs[allArgs[val]];

    if (sortedArgs[allArgs[val]] >= 2) return true;
  }

  return false;

  //  return new Set(arguments).size !== arguments.length;
}

//console.log(areThereDuplicates(1, 2, 3, 1));

//MULTIPLE POINTERS

// AVERAGE PAIR
// takes one item and compare with all the rest in a single loop, by increasing and or decreasing start and end.

function averagePair(arr, num) {
  console.log(arr, num);

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg > num) end--;
    else if (avg < num) start++;
    else return true;
  }

  return false;
}

//console.log(averagePair([1, 2, 3], 10));

// Is-Subsequence

function isSubsequence(str1, str2) {
  console.log(str1, str2);
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//console.log(isSubsequence("sing", "signt"));

// SLIDING WINDOW

function maxSubarray(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // add the next value
    tempSum += arr[i] - arr[i - num];
    // substract the previous value
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

//console.log(maxSubarray([100, 200, 300, 400], 2));

// SLIDING WINDOW
//

// function minSubArraylen(arr, num){

// }

// console.log(minSubArraylen([2,3,1,2,4,3], 7))

// function minSubArraylen(arr, num){
// let total = 0;
// let start = 0;
// let end = 0;
// let minLen = Infinity;

// while (start < nums.length) {
//   // if current window doesn't add up to the given sum then
// 	// move the window to right
//   if(total < sum && end < nums.length){
//     total += nums[end];
// 		end++;
//   }
//   // if current window adds up to at least the sum given then
// 	// we can shrink the window
//   else if(total >= sum){
//     minLen = Math.min(minLen, end-start);
// 		total -= nums[start];
// 		start++;
//   }
//   // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//   else {
//     break;
//   }

// }

// console.log(minSubArraylen([2,3,1,2,4,3], 7))

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//    // let char = str[i];
//     if (seen[str[i]]) {
//       start = Math.max(start, seen[str[i]]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next str[i] so as to not double count
//     seen[str[i]] = i + 1;
//   }
//   return longest;
// }

//console.log(findLongestSubstring("thisisawesome"));

// RECURSION

// Factorial

function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

//console.log(factorial(7));

// Return all odd values

function collectALlOddValues(arr) {
  let result = [];

  helper(arr);

  function helper(arr) {
    if (arr.length === 0) return;

    if (arr[0] % 2 !== 0) result.push(arr[0]);

    arr = arr.slice(1);
    helper(arr);
  }
  return result;
}

//console.log(collectALlOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Pure recursive

function collectOdds(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectALlOddValues(arr.slice(1)));

  return newArr;
}

//console.log(collectALlOddValues([1, 2, 3, 4]));

function toThePower(num, power) {
  if (power === 0) return 1;

  return num * toThePower(num, power - 1);
}

//console.log(toThePower(2, 3));

// Product of arrays

function productOfArrays(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArrays(arr.slice(1));
}

//console.log(productOfArrays([1, 2, 3, 10]));

//  Recursive range

function recursiverange(num) {
  if (num === 0) return 0;

  return num + recursiverange(num - 1);
}

//console.log(recursiveRange(10));

function fibSequence(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibSequence(num - 1) + fibSequence(num - 2);
}

//console.log(fibSequence(4));

// Reverse

function reverseString(str) {
  let lastChar = str.charAt(str.length - 1);
  let withoutLastChar = str.substring(0, str.length - 1);

  if (str.length === 0) return "";
  return lastChar + reverse(withoutLastChar);
}

//console.log(reverseString("hello"));

// Is Palindrome

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str.length === 1) return true;

  let firstChar = str.charAt(0);
  let lastChar = str.charAt(str.length - 1);

  if (firstChar === lastChar) {
    let withoutLastChar = str.substring(1, str.length - 1);
    return isPalindrome(withoutLastChar);
  }

  return false;
}

//console.log(isPalindrome("amanaplanacanalpandemonium"));

// Some recursive

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  let firstItem = arr[0];
  let restOfArray = arr.slice(1);

  let result = callback(firstItem);

  if (!result) {
    return someRecursive(restOfArray, callback);
  } else return true;
}

const isOdd = (val) => val % 2 !== 0;

//console.log(someRecursive([6, 4, 3], isOdd));
function flattenArrayParent(arr) {
  let newFlatArray = [];

  arr = JSON.stringify(arr);
  flattenArray(arr);

  function flattenArray(arr) {
    if (arr.length === 0) return newFlatArray;

    if (arr[0] === "[" || arr[0] === "]" || arr[0] === " ") {
      flattenArray(arr.slice(1));
    } else {
      if (arr[0] !== ",") newFlatArray.push(JSON.parse(arr[0]));

      flattenArray(arr.slice(1));
    }
  }

  return newFlatArray;
}

//console.log(flattenArrayParent([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

//console.log(JSON.stringify([1, 2, 3, [4, 5]]).length);

// Capitalize first letter of each word

function capitalizeFirst(arr) {
  let capArr = [];
  if (arr.length === 0) return capArr;

  helperCap(arr);

  function helperCap(arr) {
    if (arr.length === 0) return capArr;
    let firstWord = arr[0];
    let capWord = firstWord.charAt(0).toUpperCase();
    let restOfWord = arr[0].substring(1);
    let combinedWord = capWord + restOfWord;

    capArr.push(combinedWord);
    arr = arr.slice(1);

    helperCap(arr);
  }

  return capArr;
}

//console.log(capitalizeFirst(["car", "taco", "banana"]));

// Nested even sum

function nestedEvenSum(obj) {
  console.log(obj);
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

//console.log(nestedEvenSum(obj1));

// Capitalize words

function capitalizeWords(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  capHelper(arr);

  function capHelper(arr) {
    if (arr.length === 0) return newArr;

    let firstWord = arr[0];

    newArr.push(firstWord.toUpperCase());

    arr = arr.slice(1);

    capHelper(arr);
  }

  return newArr;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
