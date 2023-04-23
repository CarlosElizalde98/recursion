const factorial = require("./factorial");

test("returns factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});
test("returns factorial of 4", () => {
  expect(factorial(4)).toBe(24);
});
