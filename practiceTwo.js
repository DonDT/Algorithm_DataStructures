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
