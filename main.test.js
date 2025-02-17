import { capitalize, reverseString } from "./main.js";

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
