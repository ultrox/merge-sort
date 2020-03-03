import {is, first, rest, drop, take} from "@ma.vu/htdp"

// * produce sorted list of number (ASC) using merge sort
function mergeSort(arr: number[]): number[] {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  } else {
    const half = Math.floor(arr.length / 2);
    return merge(mergeSort(take(arr, half)), mergeSort(drop(arr, half)));
  }
}

// * merge 2 given sorted arr to single sorted arr
// ASSUME: both arr must already be sorted
function merge(arr1: number[], arr2: number[]): number[] {
  if (is.empty(arr2)) return arr1;
  if (is.empty(arr1)) return arr2;

  if (first(arr1) < first(arr2)) {
    return [first(arr1)].concat(merge(rest(arr1), arr2));
  } else {
    return [first(arr2)].concat(merge(arr1, rest(arr2)));
  }
}

export default mergeSort;
