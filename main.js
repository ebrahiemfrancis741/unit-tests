function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function reverseString(text){
  text = text.split("");
  text = text.reverse();
  text = text.join("");
  return text;
}

export { capitalize, reverseString };
