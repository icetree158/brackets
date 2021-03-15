module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBracket = 0;
  if (str.length % 2 != 0)
      return false;
  for (let i = 0; i < str.length; i++) {
      for (const [a, b] of bracketsConfig) {
          if (str[i] == b) {
              if (stack[openBracket - 1] == a) {
                  stack.pop();
                  openBracket -= 1;
              } else {
                  stack.push(str[i]);
                  openBracket++;
              }

          } else if (str[i] == a) {
              stack.push(str[i]);
              openBracket += 1;
          }
      }
  }

  return !stack.length;
}
