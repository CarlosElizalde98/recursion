const mergeSort = require("./mergesort");

const unsorted = [2, 5, 6, 8, 1, 3, 4, 7];
const sorted = [1, 2, 3, 4, 5, 6, 7, 8];

test("Expect the array to be sorted", () => {
  expect(mergeSort(unsorted)).toBe(sorted);
});
