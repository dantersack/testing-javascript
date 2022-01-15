const { expect, test } = require("./testing-framework");
const { sum, subtract, sumAsync, subtractAsync } = require("./math");

test("add two numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract two numbers", () => {
  const result = subtract(4, 2);
  const expected = 2;
  expect(result).toBe(expected);
});

test("add two numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract two numbers asynchronously", async () => {
  const result = await subtractAsync(4, 2);
  const expected = 2;
  expect(result).toBe(expected);
});
