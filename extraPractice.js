// BUBBLE SORT
// It is called bubble because we bubble an the largest item to the back of the array.
// We have an outer loop that makes sure the array is looped arr.length time.
// Then we have an inner loop that checks each element once.

// we always starts at zero
// if an item is greater than the previous, we swap them and keep comparing till the end.

// We want to exit if there was no swaps

function practiceBubbleSort(arr) {
  let noSwaps;
  // Outer loop to make sure the inner iteration runs the length of the array number of times.
  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
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

//console.log(practiceBubbleSort([7, 3, 0, 9, 6, 1, 5]));

// SELECTION SORT

//

function practiceSelectionSort(arr) {
  // The outer loop assign each particular item as the lowest
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    // the inner loop give us the least item compared this outer loop
    for (let j = i + 1; j < arr.length; j++) {
      // Every time we find a smaller item , we take it's index
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
      // if this lowest value is not the same as the initial value, of i, swap
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

//console.log(practiceSelectionSort([2, 7, 1, 9, 5, 4]));
