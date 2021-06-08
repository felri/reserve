function nest(S) {
  let chars = S.split("");
  let openBrackets = ["(", "[", "{"];
  let closedBrackets = [")", "]", "}"];
  let required = [];
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < openBrackets.length; j++) {
      if (chars[i] == openBrackets[j]) {
        required.push(closedBrackets[j]);
      } else if (chars[i] == closedBrackets[j]) {
        if (chars[i] != required[required.length - 1]) {
          return null;
        } else {
          required.pop();
        }
      }
    }
  }

  return required.length == 0 ? S : null;
}

module.exports = nest;
