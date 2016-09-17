/*
    *       = floor 4, line = 1
   ***      = floor 3, line = 2
  *****     = floor 2, line = 3
 *******    = floor 1, line = 4
*********   = floor 0, line = 5

Q:  How to identify the number of stars and spaces?

A:  If n = the line number from top, then n X 2 - 1 = number of required stars.
    e.g: If line = 4, then 4 X 2 - 1 = 7 stars required.

    Starting from floor = 0, adding one space to the top.
    e.g: If floor = 3, then number of spaces = 3.
*/

const print = function(character, num) {
  if(num == 0) return '';
  return character + print(character, num - 1);
}

const triangle = function(line, currentFloor) {
  if(currentFloor == undefined) currentFloor = 0;
  if(line == 0) return;

  return triangle(line - 1, currentFloor + 1) + console.log(print(' ', currentFloor) + print('*', 2 * line - 1));
}

triangle(5);
