const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let params = new URLSearchParams(location.search);
let correct = params.get("correctAnswers");
let incorrect = params.get("incorrectAnswers");

console.log("Risposte corrette:", correct);
console.log("Risposte sbagliate:", incorrect);
let totale = parseInt(correct) + parseInt(incorrect);
let percentualeCorrette = (correct / totale) * 100;
let percentualeSbagliate = (incorrect / totale) * 100;

console.log(percentualeCorrette.toFixed(2));
console.log(percentualeSbagliate.toFixed(2));

let containerCorrectPerc = document.getElementById("correctPerc");
containerCorrectPerc.innerText = `${percentualeCorrette.toFixed(2)}%`;

let containerNumCorrect = document.getElementById("correctNum");
containerNumCorrect.innerText = `${correct}/${totale} questions`;

let containerIncorrectPerc = document.getElementById("incorrectPerc");
containerIncorrectPerc.innerText = `${percentualeSbagliate.toFixed(2)}%`;

let containerNumIncorrect = document.getElementById("incorrectNum");
containerNumIncorrect.innerText = `${incorrect}/${totale} questions`;

let containerTextResult = document.getElementById("textResult");
let containerTextResult2 = document.getElementById("textResult2");
let containerParagafResult = document.getElementById("pResult");

if (percentualeCorrette >= 60) {
  containerTextResult.innerText = `Congratulations!`;
  containerTextResult.innerText2 = `You passed the exam.`;
  document.getElementById("textResult2").style.color = "#01ffff";

  containerParagafResult.innerText = `We'll send you the certificate in few minutes.`;
} else {
  containerTextResult.innerText = `Oh nooooooo!`;
  containerTextResult2.innerText = `You didn't passed the exam.`;
  containerParagafResult.innerText = `You will be reviewed (and probably killed) by Lidia and Riccardo`;
  document.getElementById("circle").style.borderColor = "#c2138d";
  document.getElementById("textResult2").style.color = "#c2138d";
  document.getElementById("circle").style.backgroundImage = "url(https://media.tenor.com/TbLpG9NCzjkAAAAC/bonk.gif)";
  document.getElementById("circle").style.backgroundPosition = "50%";
  //containerTextResult.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  //containerTextResult2.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  let mytext = document.getElementById("pResult");
  mytext.style.fontWeight = "bolder";
  mytext.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  let mytext2 = document.getElementById("pResult2");
  mytext2.style.fontWeight = "bolder";
  mytext2.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  mytext.style.borderRadius = "50%";
  mytext2.style.borderRadius = "50%";

  console.log(mytext);
  document.getElementById("circle").style.color = "black";
  document.getElementById("circle").style.textShadow = "-1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;";
}

document.addEventListener("DOMContentLoaded", function () {
  const correct_answer = document.getElementById("correct_answer");
});
