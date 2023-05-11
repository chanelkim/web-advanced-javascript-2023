/* 
---------- Creat a Chatbot Helper Object -------------- 
Create a simple Bot that can respond to questions. 
*/

// in array form:
const qs = [
  ["how are you", "getting better"],
  ["what is your name", "HAL"],
  ["why are you here", "sorry...that question needs pondering"],
  ["what is the meaning on life", "I am pretty sure it's 42"],
];

function checkAnswer(q) {
  // logic to loop through and find a match
  for (let o of qs) {
    if (o[0] == q) {
      // if the first index (the question) matches the argument, then return the 2nd index (answer)
      return o[1];
    }
  }
}

//var question = prompt('Ask your question'); // this prompt you to ask a question from within the console
let question = "what is your name";
let ans = checkAnswer(question);
console.log(ans);

// const query = [
//   {
//     question: "is it a work day? yes or no",
//     answer: ["yes", "no"],
//     answered() {
//       if (this.answer == "yes") {
//         return query[1];
//       }
//     },
//   },
//   {
//     question: "do you have free time? yes or no",
//     answer: ["yes", "no"],
//   },
//   {
//     question: "when is your free time?",
//     answer: ["before 9am", "from 9-4pm", "after 4pm"],
//   },
//   {
//     question: "can you wake up? yes or no",
//     answer: ["yes", "no"],
//   },
//   {
//     question: "do you want to go to yoga? yes or no",
//     answer: ["yes", "no"],
//   },
//   {
//     question: "is there class time available? yes or no",
//     answer: ["yes", "no"],
//   },
//   {
//     question: "is the class not full? yes or no",
//     answer: ["yes", "no"],
//   },
// ];

// function checkAns(q) {
//   // logic to loop through and find a match
//   for (let i of query) {
//     if (query[i].answer == query[i].answer[0]) {
//       return query[0];
//     }
//   }
// }

const query = [
  ["is it a work day?", ["yes", "no"]],
  ["do you have free time?", ["yes", "no"]],
  ["when is your free time?", ["before 9am", "from 9-4pm", "after 4pm"]],
  ["can you wake up?", ["yes", "no"]],
  ["do you want to go to yoga?", ["yes", "no"]],
  ["is there class time available?", ["yes", "no"]],
  ["is the class not full?", ["yes", "no"]],
];

function checkAns(q) {
  // logic to loop through and find a match
  for (let o of query) {
    if (o[0] == q) {
      // if the first index (the question) matches the argument, then return the 2nd index (answer)
      return o[1];
    }
  }
}
