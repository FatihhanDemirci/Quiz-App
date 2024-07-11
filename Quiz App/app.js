const quizData = [
  {
    question: "What is the capital city of Turkey?",
    options: ["A.) Ankara", "B.) İstanbul", "C.) İzmir", "D.) Bursa"],
    answer: "A.) Ankara",
  },

  {
    question: "What is Einstein's famous formula?",
    options: ["A.) E=mc^2", "B.) F=ma", "C.) h=λ/p", "D.) a^2 + b^2 = c^2"],
    answer: "A.) E=mc^2",
  },
  {
    question: "What is the capital city of Germany??",
    options: ["A.) Ankara", "B.) Berlin", "C.) Paris", "D.) Rome"],
    answer: "B.) Berlin",
  },
  {
    question: "Which one is not a programming language?",
    options: ["A.) Google", "B.) JavaScript", "C.) JAVA", "D.) C#"],
    answer: "A.) Google",
  },
  {
    question: "Which one is not a fruit??",
    options: ["A.) Apple", "B.) Orange", "C.) Grape", "D.) Taco"],
    answer: "D.) Taco",
  },
  {
    question: "Which one is not a Country",
    options: ["A.) France", "B.) Germany", "C.) Madrid", "D.) Türkiye"],
    answer: "C.) Madrid",
  },
  {
    question: "Which one is not a Capital",
    options: ["A.) Rome", "B.) İstanbul", "C.) Madrid", "D.) Paris"],
    answer: "B.) İstanbul",
  },
];

const questionText = document.getElementById("text");
const optionswrapper = document.getElementById("options-wrapper");
const scoreValue = document.getElementById("score-value");
let currentquestion = 0;
let score = 0;

const loadQuiz = () => {
  const quiz = quizData[currentquestion];
  questionText.textContent = quiz.question;
  optionswrapper.innerHTML = "";
  quiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => {
      checkAnswer(option);
    });
    optionswrapper.appendChild(button);
  });
};

const checkAnswer = (answer) => {
  const quiz = quizData[currentquestion];
  if (answer === quiz.answer) {
    score++;
    scoreValue.textContent = score;
  }
  currentquestion++;
  if (currentquestion < quizData.length) {
    loadQuiz();
  } else {
    endQuiz();
  }
};

const endQuiz = () => {
  alert("The End");
};

loadQuiz();
