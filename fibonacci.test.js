const fibonacci = require("./fibonacci");

test("Expect the 3rd fibonacci number", () => {
  expect(fibonacci(3)).toBe(2);
});
test("Expect the 7th number of fibonacci sequence", () => {
  expect(fibonacci(7)).toBe(13);
});
