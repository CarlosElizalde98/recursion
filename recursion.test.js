const recursion = require("./recursion");

test("Sums 3 numbers", () => {
  expect(recursion(3)).toBe(6);
});
test("Sums 4 numbers", () => {
  expect(recursion(4)).toBe(10);
});
test("Sums 100 numbers", () => {
  expect(recursion(100)).toBe(5050);
});
