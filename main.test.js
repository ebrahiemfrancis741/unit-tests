import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main.js";

test("capitalize", () => {
  expect(capitalize("hello")).toEqual("Hello");
  expect(capitalize("bye")).toEqual("Bye");
  expect(capitalize("my name is lol!")).toEqual("My name is lol!");
});

test("reverseString", () => {
  expect(reverseString("hello")).toEqual("olleh");
  expect(reverseString("Hello")).toEqual("olleH");
  expect(reverseString("Bye!?")).toEqual("?!eyB");
});

test("calculator", () => {
  expect(calculator.add(1, 1)).toEqual(2);
  expect(calculator.add(-5, 1)).toEqual(-4);
  expect(calculator.add(27, 0)).toEqual(27);
  expect(calculator.subtract(1, 1)).toEqual(0);
  expect(calculator.subtract(-1, 5)).toEqual(-6);
  expect(calculator.subtract(5, 0)).toEqual(5);
  expect(calculator.multiply(5, 5)).toEqual(25);
  expect(calculator.multiply(-1, 5)).toEqual(-5);
  expect(calculator.multiply(5, 0)).toEqual(0);
  expect(calculator.divide(5, 5)).toEqual(1);
  expect(calculator.divide(10, -2)).toEqual(-5);
  expect(calculator.divide(5, 0)).toEqual(Infinity);
});

test("caesarCipher", () => {
  expect(caesarCipher("abc", 1)).toEqual("bcd");
  expect(caesarCipher("abc", 2)).toEqual("cde");
  expect(caesarCipher("aBc", 2)).toEqual("cDe");
  expect(caesarCipher("ABc", 2)).toEqual("CDe");
  expect(caesarCipher("ZaB", 4)).toEqual("DeF");
  expect(caesarCipher("abc", 0)).toEqual("abc");
  expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 3,
  });

  expect(analyzeArray([-1, -2, -3])).toEqual({
    average: -2,
    min: -3,
    max: -1,
    length: 3,
  });
});
