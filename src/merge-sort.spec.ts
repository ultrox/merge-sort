import mergeSort from "./merge-sort";

it("to work", function() {
  expect(mergeSort([])).toEqual([]);
  expect(mergeSort([1])).toEqual([1]);
  expect(mergeSort([2, 1])).toEqual([1, 2]);
  expect(mergeSort([2, 1, 0])).toEqual([0, 1, 2]);
});
