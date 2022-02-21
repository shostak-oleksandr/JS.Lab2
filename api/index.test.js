const { jest_test } = require("./index");

const argument = "Hello World";

describe("A test JEST to check if a string matches.", () => {
  describe("jest_test", () => {
    test("Given 'Hello World!', return 'Hello World!'", () => {
      const received = "Hello World";
      const expected = "Hello World!";
      expect(jest_test(argument)).toBe(expected);
    });
  });
});