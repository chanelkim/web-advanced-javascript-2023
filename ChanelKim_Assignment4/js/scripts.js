/*
---------- Creat a Chatbot Helper Object -------------- 
Create a simple Bot that can respond to questions. 
 data structure inspo: https://codepen.io/njmcode/pen/gOaJez
*/

var question = prompt("Is it a weekday or weekend?");
/*** DATA ***/

const data = {
  initial: ["weekDay", "weekEnd"],
  choices: {
    // TOP LEVEL

    weekDay: {
      name: "It is a weekday.",
      children: ["free", "plans"],
    },

    weekEnd: {
      name: "It is a weekend.",
      children: ["free", "plans"],
    },

    // FREE
    free: {
      name: "I have free time.",
      children: ["morning", "afternoon", "evening"],
    },

    // PLANS
    plans: {
      name: "I do not have free time.",
      children: ["noPlans", "yesPlans"],
    },

    // NO PLANS
    noPlans: {
      name: "I have no plans.",
      children: ["motivated", "notMotivated"],
    },

    // YES PLANS - NO EXERCISE
    yesPlans: {
      name: "No exercise, enjoy life!",
    },

    // MOTIVATED
    motivated: {
      name: "I want to move my body!",
      children: ["free", "moveBad"],
    },

    // NOT MOTIVATED - NO EXERCISE
    notMotivated: {
      name: "No exercise, enjoy life!",
    },

    // MOVE BAD
    moveBad: {
      name: "Movement is not a good idea right now. Rest and relax.",
    },

    // MORNING
    morning: {},

    // AFTERNOON

    // EVENING
  },
};
