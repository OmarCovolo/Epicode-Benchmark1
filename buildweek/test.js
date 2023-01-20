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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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

let k = 0;

const createNewQuestion = function () {
  let question = questions[k].question; //selezione della domanda
  let newQuestion = document.querySelector("p");
  newQuestion.innerText = question;
};

createNewQuestion();



const createRadioButtons = function () {
  let allAnswers = []; // creazione array di risposte
  allAnswers.push(questions[k].correct_answer);
  for (let i = 0; i < questions[k].incorrect_answers.length; i++) {
    allAnswers.push(questions[k].incorrect_answers[i]);
  }
  console.log("Tutte le risposte disponibili: ", allAnswers); // fine creazione array di risposte
  shuffle(allAnswers);
  console.log(allAnswers);
  for (let m = 0; m < allAnswers.length; m++) {
    let buttonContainer = document.querySelector("section");
    let newButton = document.createElement("div");
    newButton.innerHTML = `<label id=${allAnswers[m]}, value=${allAnswers[m]}>${allAnswers[m]}<input onclick=myClick(event) type="radio" id="option2" class="option" name="option"/> </label>`;
    newButton.className = "divOption";
    buttonContainer.appendChild(newButton);
  }
};
createRadioButtons();


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}




const removePreviusButtons = function () {
  previousButton = document.querySelectorAll(".divOption");
  for (let i = 0; i < previousButton.length; i++) {
    previousButton[i].remove();
  }
};

const createNextPageButton = function () {
  nextPageButton = document.createElement("button");
  nextPageButton.innerHTML = "<a>SHOW ME MY SCORE</a>";
  nextPageContainer = document.querySelector("footer");
  nextPageContainer.appendChild(nextPageButton);
  myA = document.querySelector("a");
  myA.setAttribute("href", `./result.html?correctAnswers=${correctCounter}&incorrectAnswers=${incorrectCounter}`);
};

const removeLastQuestion = function () {
  lastQuestion = document.querySelector("p");
  lastQuestion.remove();
};

let score = 0;
let correctCounter = 0;
let incorrectCounter = 0;
let arrayOfMyAnswers = [];

const valutazione = function () {
  for (let x = 0; x < arrayOfMyAnswers.length; x++) {
    if (arrayOfMyAnswers[x] == questions[x].correct_answer) {
      score++;
      correctCounter++;
    } else {
      incorrectCounter++;
    }
  }
};


counter = 1;
acc = 1;
let qu = document.querySelector(".q");
qu.innerText ="QUESTION "
let newcount = document.querySelector(".n");
newcount.innerText =acc 
let le = document.querySelector(".l");
le.innerText = "/" + `${questions.length}`;


const addCounter = function () {
  let acc = counter++;
  let qu = document.querySelector(".q");
  qu.innerText ="QUESTION "
  let newcount = document.querySelector(".n");
  newcount.innerText =acc + 1 
  let le = document.querySelector(".l");
  le.innerText = "/" + `${questions.length}`;
  
};

let timeoutRestart;
let intervalRestart;
function startTimer() {
  let countdown = 30;
  timeoutRestart = setTimeout(function () {
    incorrectCounter++
    myClick();
  }, countdown * 1000);

  intervalRestart = setInterval(function () {
    countdown--;
    let sec = document.querySelector(".sec");
    sec.innerText = `SECONDS`;
    let visual = document.querySelector("h3");
    visual.innerText = `${countdown}`;
    let rem = document.querySelector(".rem");
    rem.innerText = `REMAINING`;
  }, 1000);
}

startTimer();

function myClick(event) {
  //console.log(event);
  if (k < questions.length -1 ) {
    addCounter();
    clearInterval(timeoutRestart);
    clearInterval(intervalRestart);
    startTimer();


    k++;
    removePreviusButtons();
    createNewQuestion();
    createRadioButtons();
    let clickedLabel = event.target.parentNode;
    //console.log(clickedLabel); // seleziona la label cliccata
    let clickedLabelValue = clickedLabel.innerText;
    newValue = clickedLabelValue.slice(0, -1);
    arrayOfMyAnswers.push(newValue);
    console.log(arrayOfMyAnswers);
    //console.log("la risposta corretta è:", questions[k].correct_answer);

    console.log(incorrectCounter);
  } 


  else {
    let clickedLabel = event.target.parentNode;
    
    let clickedLabelValue = clickedLabel.innerText;
    newValue = clickedLabelValue
    arrayOfMyAnswers.push(newValue);
    removePreviusButtons();
    removeLastQuestion();
    valutazione();
    newcount.remove();
    createNextPageButton();
    let firstdiv = document.querySelector("div");
    firstdiv.removeAttribute("class");
    let sec = document.querySelector(".sec");
    sec.innerText = ``;
    let visual = document.querySelector("h3");
    visual.innerText = ``;
    let rem = document.querySelector(".rem");
    rem.innerText = ``;
    sec.remove()
    visual.remove();
    rem.remove()
    qu.remove();
    le.remove();

    console.log("Le mie risposte:", arrayOfMyAnswers);
    console.log("Risposte sbagliate:", incorrectCounter);
    console.log("Risposte corrette:", correctCounter);
    console.log("Punteggio:", score);

    
  }
}
