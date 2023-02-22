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

// *** NEED HELP HERE ***
//Step 2 - create function that prints 0 as a space, 1 as the variable ASCII character from the randomly generated array
let character = "º";
function symbolGenerator(symbol, array) {
  let space = "-";

  for (let i = 0; i < array.length; i++) {
    for ( let j = 0; j < array[i].length; j++ ) {
      // Kunal - below you need to make changes. You cannot simply return. MOdify the array param and sub the values and then return this modded array back
      if (array[i][j] == 0) {
        array[i][j] = space;
      } else {
        array[i][j] = symbol;
      }
    }
  }

  return array;
}
// }
// Kunal - you do not need this!
// const symbols = symbolGenerator(character, arr); //store symbolized array in variable
// console.log(symbols);

//Step 3 - create function that stacks the randomly generated arrays (5 lines tall)
function stackGenerator() {
  let stack = [];
  for (let i = 0; i < 5; i++) {
    stack.push(arrGenerator());
  }
  return stack;
}
const stack = stackGenerator(); //store in stack of arrays in variable
console.log(stack);

// *** NEED HELP HERE ***
//Step 4 - loop through the array of arrays, symbolizing each array to create a 5x5 symbol stack, a pattern that hopefully emulates a letterform
const pattern = symbolGenerator(character, stack); //stores symbolized stack in a variable
console.log(pattern);
