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

function caesarCipher(text, shift) {
  // A = 65, Z = 90, a = 97, z = 122
  let cipher = "";
  let charCode;
  for (let i = 0; i < text.length; i++) {
    charCode = text.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      )
    ) {
      cipher = cipher + String.fromCharCode(charCode);
      continue;
    }
    for (let j = 0; j < shift; j++) {
      if (charCode == 90) charCode = 65;
      else if (charCode == 122) charCode = 97;
      else charCode++;
    }
    cipher = cipher + String.fromCharCode(charCode);
  }
  return cipher;
}

export { capitalize, reverseString, calculator, caesarCipher };
