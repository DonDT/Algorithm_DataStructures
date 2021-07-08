// Big O Notation
// Why the need ?
// What's the best approach?
// As the input grows, how does it affect run time?

// Does the number of operations increases as n, the input to the function increase?

// f(n) could be linear (f(n)=n)
// f(n) could be quadratic (f(n)=n2)
// f(n) could be constant (f(n) = 1)
//f(n) could be something entirely different

// Number of operations always the same => O(1)
// Number of operations ia eventually bounded by a multiple of n(say, 10n) => O(n)

// Nested operations
// An O(n) inside an O(n) operation is O(n * n)
/**
 * O(n + 10) => O(n)
 * O(100 * n) => O(n)
 * O(25) => O(1)
 * O(n^2 + n^3) => O(n^3)
 * O(n + n + n + n) => O(n)
 */

/**
  * Determine the time complexity for the following function 

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
Answer => O(n) // the number of operations increases proportionately with n.

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
Answer => O(1) // the number of operations is always constant

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

Answer => O(n) // number of operations increases proportionately

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
Answer => O(n) // There is always a proportionate increase of odd and even numbers.

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
Answer => O(n^2)
Space complexitry => O(n)
  */

// Space complexity.
// Space required by the algorithm only to run.
// Most primitives (boolean, number, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys(for objects )

/** Examples
   * 
   * function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
Space complexity => O(1)

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

 Answer => O(1)


 function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
Answer => O(n)
   */

// Logarithms

// log2(value ) = exponent => 2 exponent = value

// BIG O F OBJECTS

// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(1)

// Big O of Object Methods
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)
// Object.hasOwnProperty - O(1)

// Big O of Arrays

// Insertion - End - O(1) , Start O(n)
// Removal - End - O(1), Start O(n)
// Searching - O(n)
// Access - O(1)

// ARRAY Methds Big O
// Push - O(1)
// Pop - O(1)
// Shift -O(n)
// Unshift - O(n)
// concat - O(n)
// slice - O(n)
// splice - O(n)
// Sort - O(n * logn)
// forEach/map/filter/reduce/etc - O(n)

// PROBLEM SOLVING STRATEGY

// Understand the problem
//=> Can I restate the problem in my pwn words
//=> What are the inputs that go into the problem
//=> What are the outputs that should come from the solution to the problem
//=> Can the outputs be determined from th inputs?
//=> How Should I label the important peices of data that are a part of the problem?

// Explore concrete examples
//=> Start with simple examples(Easy use cases)
//=> Progress to More Complex Examples
//=> Explore examples with empty inputs
//=> Explore examples with invalid inputs

// Break it down
//=> Steps I need to take write it down.

// Solve/simplify
//=> Find the core difficulty in what you are trying to solve
//=> Temporarily ignore that difficulty
//=> Write a simplified solution
//=> Then incorporate that difficulty back

// Look back and refactor

// PROBLEM SOLVING PATTERNS
//=> Master common patterns

// Frequency Counter
// Two seperate loops is better than one nested loop 0(100n) + 0(100n) = 0(200n), better than 0(100n * 100n).
/*
This pattern uses objects or sets to collect values/frequences of values

This can often avoid the need for nested loops or O(n^2) operations with arrays / strings.


 */
