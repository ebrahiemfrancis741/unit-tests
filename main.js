function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function reverseString(text) {
  text = text.split("");
  text = text.reverse();
  text = text.join("");
  return text;
}

let calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    return a / b;
  },
};

export { capitalize, reverseString, calculator };
