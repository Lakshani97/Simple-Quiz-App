const quiz1Question = [
  {
    question: "Which type of JavaScript language is",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<javascript>",
    d: "<scripting>",
    correct: "a",
  },
  {
    question: "Which of the following is not a JavaScript Data Types?",
    a: "Boolean",
    b: "Undefined",
    c: "Number",
    d: "Float",
    correct: "d",
  },
  {
    question:
      " What are the different types of Pop up boxes available in JavaScript?",
    a: "Alert",
    b: "Prompt",
    c: "Confirm",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "Which of the following is the correct way to write a comment in JavaScript code?",
    a: "//This is a coment",
    b: "/*This is a coment*/",
    c: "$This is a comment$",
    d: "**This is a comment**",
    correct: "a",
  },
];

const quiz2Question = [
  {
    question: "Choose the correct HTML element for the largest heading",
    a: "<head>",
    b: "<heading>",
    c: "<h6>",
    d: "<h1>",
    correct: "d",
  },
  {
    question: "Choose the correct HTML element to define important text",
    a: "<i>",
    b: "<important>",
    c: "<b>",
    d: "<strong>",
    correct: "b",
  },
  {
    question: "Which character is used to indicate an end tag?",
    a: "*",
    b: "/",
    c: "^",
    d: "<",
    correct: "b",
  },
  {
    question: " Which of these elements are all <table> elements?",
    a: "<table><tr><tt>  ",
    b: "<table><head><tfoot>> ",
    c: "<table><tr><td>",
    d: "<thead><body><tr>",
    correct: "c",
  },
  {
    question: "The HTML <canvas> element is used to:",
    a: "draw graphics",
    b: "create draggable elements",
    c: "manipulate data in MySQL",
    d: "display database records",
    correct: "a",
  },
];

const quiz3Question = [
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Cascading Style Sheets  ",
    c: "Colorful Style Sheets",
    d: "Computer Style Sheets",
    correct: "b",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "font",
    b: "style",
    c: "styles",
    d: "class",
    correct: "b",
  },
  {
    question: "Which CSS property controls the text size?",
    a: "text-size",
    b: "text-style",
    c: "font-size",
    d: "font-style",
    correct: "c",
  },
  {
    question: "How do you select an element with id 'demo'?",
    a: "#demo",
    b: "demo",
    c: ".demo",
    d: "*demo",
    correct: "a",
  },
  {
    question: "What is the default value of the position property?",
    a: "relative",
    b: "fixed",
    c: "absolute",
    d: "static",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const questionEle = document.getElementById("question");
const answerEles = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const btn = document.getElementById("submit");

const btnjs = document.getElementById("js");
const btnhtml = document.getElementById("html");
const btncss = document.getElementById("css");

let currentQuiz = 0;
let score = 0;

loadPage();

function loadPage() {
  document.getElementById("quizbody").style.display = "none";
  document.getElementById("submit").style.display = "none";
  document.getElementById("start").innerHTML =
    "Hi! Learners &#128512;<br> Let's get start Quiz";
}

//js quiz
btnjs.addEventListener("click", () => {
  loadQuiz1();

  function loadQuiz1() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizbody").style.display = "block";
    document.getElementById("submit").style.display = "block";

    deselectAnswer();

    const currentQuiz1Question = quiz1Question[currentQuiz];

    questionEle.innerText = currentQuiz1Question.question;

    a_text.innerText = currentQuiz1Question.a;
    b_text.innerText = currentQuiz1Question.b;
    c_text.innerText = currentQuiz1Question.c;
    d_text.innerText = currentQuiz1Question.d;
  }

  btn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    if (answer) {
      if (answer === quiz1Question[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;
      if (currentQuiz < quiz1Question.length) {
        loadQuiz1();
      } else {
        quiz.innerHTML = `<h3>You answered correctly at ${score}/${quiz1Question.length} questions.</h3> 
            <button onclick="location.reload()">Reload</button>`;
      }
    }
  });
});

//html quiz
btnhtml.addEventListener("click", () => {
  loadQuiz2();

  function loadQuiz2() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizbody").style.display = "block";
    document.getElementById("submit").style.display = "block";

    deselectAnswer();

    const currentQuiz2Question = quiz2Question[currentQuiz];

    questionEle.innerText = currentQuiz2Question.question;

    a_text.innerText = currentQuiz2Question.a;
    b_text.innerText = currentQuiz2Question.b;
    c_text.innerText = currentQuiz2Question.c;
    d_text.innerText = currentQuiz2Question.d;
  }

  btn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    if (answer) {
      if (answer === quiz2Question[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;
      if (currentQuiz < quiz2Question.length) {
        loadQuiz2();
      } else {
        quiz.innerHTML = `<h3>You answered correctly at ${score}/${quiz2Question.length} questions.</h3> 
              <button onclick="location.reload()">Reload</button>`;
      }
    }
  });
});

//css quiz
btncss.addEventListener("click", () => {
  loadQuiz3();

  function loadQuiz3() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizbody").style.display = "block";
    document.getElementById("submit").style.display = "block";

    deselectAnswer();

    const currentQuiz3Question = quiz3Question[currentQuiz];

    questionEle.innerText = currentQuiz3Question.question;

    a_text.innerText = currentQuiz3Question.a;
    b_text.innerText = currentQuiz3Question.b;
    c_text.innerText = currentQuiz3Question.c;
    d_text.innerText = currentQuiz3Question.d;
  }

  btn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    if (answer) {
      if (answer === quiz3Question[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;
      if (currentQuiz < quiz3Question.length) {
        loadQuiz3();
      } else {
        quiz.innerHTML = `<h3>You answered correctly at ${score}/${quiz3Question.length} questions.</h3> 
              <button onclick="location.reload()">Reload</button>`;
      }
    }
  });
});

function getSelected() {
  let answer = undefined;

  answerEles.forEach((answerEle) => {
    if (answerEle.checked) {
      answer = answerEle.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerEles.forEach((answerEle) => {
    answerEle.checked = false;
  });
}
