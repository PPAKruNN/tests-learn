import calculator from "calculator";

describe.each([
  [1, 2, 2],
  [5, 5, 25],
  [0, 0, 0],
  [4, 12, 48],
])("%#  .mul(%i, %i)", (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(calculator.mul(a, b)).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(calculator.mul(a, b)).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(calculator.mul(a, b)).not.toBeLessThan(expected);
  });
});

describe("Calculator", () => {
  it("Division should work", () => {
    expect(calculator.div(2, 2)).toBe(1);
  });

  it("Multiplication should work", () => {
    expect(calculator.mul(25, 3)).toBe(75);
  });

  it("Sum should work", () => {
    expect(calculator.sum(1, 6)).toBe(7);
  });

  it("Subtraction should work", () => {
    expect(calculator.sub(10, 4)).toBe(6);
  });

  test.todo("Should handle 0 division");
});
