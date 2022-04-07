"use strict"

let built = [];

function buildSlice(input) {
  if (built.length >= textArr.length) {
    addSlice(built, slices);
    built.splice(0);
  } else {
    for (let i = 0; i < input.length; i++) {
      append(built, input[i]);
    }
  }
}

/**
 * Merges to arrays in order based on their natural
 * relationship.
 * @param {Array} left The first array to merge.
 * @param {Array} right The second array to merge.
 * @return {Array} The merged array.
 */
function merge(left, right) {

  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result = result.concat(left).concat(right);

  //make sure remaining arrays are empty
  left.splice(0, left.length);
  right.splice(0, right.length);

  return result;
}

/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param {Array} items The array to sort.
 * @return {Array} The sorted array.
 */
function mergeSort(items) {
  addSlice(items, slices);
  // Terminal condition - don't need to do anything for arrays with 0 or 1 items
  if (items.length < 2) {
    return items;
  }

  let work = [];
  let len = items.length;

  for (let i = 0; i < len; i++) {
    work.push([items[i]]);
  }
  work.push([]); //in case of odd number of items

  for (var lim = len; lim > 1; lim = Math.floor((lim + 1) / 2)) {

    var j = 0;

    for (var k = 0; k < lim; k += 2) {

      for (let s = 0; s < work.length; s++) {

        buildSlice(work[s]);
      }

      work[j] = merge(work[k], work[k + 1]);

      j++;
    }

    work[j] = []; //in case of odd number of items
  }
  addSlice(work[0], slices);
  return work[0];
}

function insertionSortAscending(A) {
  addSlice(A, slices);
  for (let j = 1; j < A.length; j++) {
    let _key = A[j];
    //Insert A[j] into the sorted sequence A[1..j-1].
    let i = j - 1;
    while (A[i] > _key) {
      A[i + 1] = A[i];
      i = i - 1;
      A[i + 1] = _key;
      addSlice(A, slices);
    }
  }
}

function insertionSortDescending(A) {
  addSlice(A, slices);
  for (let j = 1; j < A.length; j++) {
    let _key = A[j];
    //Insert A[j] into the sorted sequence A[1..j-1].
    let i = j - 1;
    while (A[i] < _key) {
      A[i + 1] = A[i];
      i = i - 1;
      A[i + 1] = _key;
      addSlice(A, slices);
    }
  }
}