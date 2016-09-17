const print = function(character, num) {
  if(num == 0) return '';
  return character + print(character, num - 1);
}

const triangle = function(height, currentLine) {
  if(currentLine == undefined) currentLine = 0;
  if(height == 0) return;

  return triangle(height - 1, currentLine + 1) + console.log(print(' ', currentLine) + print('*', 2 * height - 1));
}

triangle(5);
