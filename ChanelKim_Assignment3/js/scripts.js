/* 
---------- Flexible Function Assignment -------------- 
Pattern Generator using multiple functions, callbacks and parameters that makes your pattern creating method as flexible as possible. Play around by tweaking the arguments so that by changing a few parameters, your function creates something unexpected and unique. Then put them together into a sequence of function calls.
*/

// GOAL - create letterform out of series of symbols and spaces, made of a 5x5 arrangement of one ASCII symbol

//Step 1 - create function that produces a series of 0s and 1s (length 5)
function arrGenerator() {
  //generates random array of 0s and 1s
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random()));
  }
  return arr;
}
const arr = arrGenerator(); //store array in variable
console.log(arr);

//Step 2 - create function that prints 0 as a space, 1 as the variable ASCII character from the randomly generated array
let character = "º";
function symbolGenerator(symbol, array) {
  let space = " ";
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      array[i] = space;
    } else {
      array[i] = symbol;
    }
  }
  return array.join(" "); //array.join() method converts items in symbolized array into a single string
}
const symArr = symbolGenerator(character, arr);
console.log(symArr);

//Step 3 - create function that stacks the randomly generated arrays (5 lines tall)
function stackGenerator() {
  let stack = [];
  for (let i = 0; i < 5; i++) {
    stack.push(arrGenerator());
  }
  return stack;
}
const stack = stackGenerator(); //store in stack of arrays in variable
// console.log(stack);

//Step 4 - loop through the array of arrays, symbolizing each array to create a 5x5 symbol stack, a pattern that hopefully emulates a letterform
function symbolStackGen(symbol, array) {
  let space = " ";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == 0) {
        array[i][j] = space;
      } else {
        array[i][j] = symbol;
      }
    }
  }
  return array;
}
const pattern = symbolStackGen(character, stack);
console.log(pattern);
