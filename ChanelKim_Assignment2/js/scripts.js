/* 
---------- 1. Conditions -------------- 
Find the current time using the Date() function. Extract the hour from it. Create a condition to check if it's the morning, evening, afternoon or night. Use console.log to output an appropriate message. 
*/
let current_time = new Date();
let current_hr = current_time.getHours();
console.log(current_time);
console.log(current_hr);

const night = [0, 1, 2, 3, 4, 5, 6];
const morning = [7, 8, 9, 10, 11];
const afternoon = [12, 13, 14, 15, 16];
const evening = [17, 18, 19, 20, 21, 22, 23, 24];

if (current_hr >= 0 && current_hr < 6) {
  console.log(`It's night time.`);
} else if (current_hr >= 7 && current_hr < 11) {
  console.log(`It's morning time.`);
} else if (current_hr >= 12 && current_hr < 16) {
  console.log(`It's afternoon.`);
} else {
  console.log(`It's evening.`);
}

/* 
---------- 2. Loops -------------- 
Use the same random dice generator as above to generate a number between 1 and 6. Now create a loop that keep rolling until the number generated is more than 3. As soon as you get a number more than three, the loop should end. Output how many times the loop ran before it reached this number.
*/
let dice = Math.ceil(6 * Math.random());
const my_array = [];
if (dice <= 6) {
  console.log(`Rolled a ${dice}.`);
  while (dice < 4) {
    my_array.push(dice);
    dice++;
    console.log(`Rolled a ${dice}.`);
  }
  console.log(
    `Rolled a number more than three on throw ${my_array.length + 1}.`
  );
}

/* 
---------- 3. Loops -------------- 
Using loops , create a triangular pattern (using console.log statements only for now) like this:
#
##
###
####
*/
let symbol = "#";
let rows = 4;
for (let i = 1; i <= rows; i++) {
  //for loop - iterate over number of rows
  console.log(symbol.repeat(i)); //string.repeat() method - writes string in console
}

/* 
---------- 4. Loops and Conditions -------------- 
Using more loops and conditions, create a chess board using # and space ' ' using console.log statements.  You could consider using a loop inside a loop to create the alternative pattern. A chess board  has  8 x 8 = 64 squares.
*/
let black = "|#|";
let white = "   ";
let lines = 8;
for (let i = 0; i < 1; i++) {
  //switches between even and odd
  if (i % 2 == 0) {
    for (j = 0; j < lines; j++) {
      //iterate over even or odd line
      if (j % 2 == 0) {
        console.log((black + white).repeat(4));
      } else {
        console.log((white + black).repeat(4));
      }
    }
  } else {
    console.log("debug");
  }
}
