// DYNAMIC PROGRAMMING.
/**
 * It is a method for solving a complex problem by breaking it down into a collection of simpler
 * subproblems, solving each of those subproblems just once, and sorting their solutions.
 *
 * In general it means comming up with an optimal solution.
 */

// Overlapping sub-problems.
// It can be broken into smaller pieces that can be re-used several times. Like fibonacci sequence,
// where f(5) depends on f(4) and f(3), while f(4) depends on f(3) and f(2) and f(3) also depends on f(2)...

// Optimal sub-structure
// if the optimal solution can be constructed from optimal solutions of it's subproblems.
// It means we can break a problem down into sub-problems and use the sub-problems solutions.
// as the final answer.
// The best solution to the overall problem is the sum of the optimal solutions of all it's smaller parts
// sub-problems
// (2 ^n) Big O 0f fibinacci worst than n^2

// Main thing is the repeatition.

/**
 * We keep in memory the individual calculations, so at not to re-do it
 */

// MEMOIZATION (a)
// Storing the results of expensive function call and returning the cached result when the same input
// comes back.

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let response = fib(n - 1, memo) + fib(n - 2, memo);
  return response;
}

// BIG O 0f Memoization
// O(n)

// TABULATION (b)
// Storing the result of a previous result in a tableusually an array()
// usually done with iteration

function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
