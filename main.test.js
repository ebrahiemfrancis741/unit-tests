import { capitalize } from "./main.js";

test("capitalize", () => {
  expect(capitalize("hello")).toEqual("Hello");
  expect(capitalize("bye")).toEqual("Bye");
  expect(capitalize("my name is lol!")).toEqual("My name is lol!");
});
