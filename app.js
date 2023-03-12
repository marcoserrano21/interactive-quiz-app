const quizData = [
    {
      question: "What is the capital of France?",
      a: "Paris",
      b: "Madrid",
      c: "Berlin",
      d: "London",
      correct: "a",
    },
    {
      question: "What is the largest country in the world?",
      a: "China",
      b: "United States",
      c: "Russia",
      d: "Canada",
      correct: "c",
    },
    {
      question: "What is the smallest country in the world?",
      a: "Monaco",
      b: "Nauru",
      c: "San Marino",
      d: "Vatican City",
      correct: "d",
    },
  ];
  
  const quizForm = document.getElementById("quiz-form");
  const submitBtn = document.getElementById("submit-btn");
  const resultsDiv = document.getElementById("results");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
  
    const questionEl = document.createElement("h2");
    questionEl.innerText = currentQuizData.question;
  
    const labelAE = document.createElement("label");
    labelAE.innerText = currentQuizData.a;
    const inputAE = document.createElement("input");
    inputAE.type = "radio";
    inputAE.name = "answer";
    inputAE.value = "a";
    labelAE.appendChild(inputAE);
  
    const labelBE = document.createElement("label");
    labelBE.innerText = currentQuizData.b;
    const inputBE = document.createElement("input");
    inputBE.type = "radio";
    inputBE.name = "answer";
    inputBE.value = "b";
    labelBE.appendChild(inputBE);
  
    const labelCE = document.createElement("label");
    labelCE.innerText = currentQuizData.c;
    const inputCE = document.createElement("input");
    inputCE.type = "radio";
    inputCE.name = "answer";
    inputCE.value = "c";
    labelCE.appendChild(inputCE);
  
    const labelDE = document.createElement("label");
    labelDE.innerText = currentQuizData.d;
    const inputDE = document.createElement("input");
    inputDE.type = "radio";
    inputDE.name = "answer";
    inputDE.value = "d";
    labelDE.appendChild(inputDE);
  
    quizForm.innerHTML = "";
    quizForm.appendChild(questionEl);
    quizForm.appendChild(labelAE);
    quizForm.appendChild(labelBE);
    quizForm.appendChild(labelCE);
    quizForm.appendChild(labelDE);
  }
  
  loadQuiz();
  
  function getSelected() {
    const answerEls = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer = undefined;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        selectedAnswer = answerEl.value;
      }
    });
    return selectedAnswer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuestion].correct) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        resultsDiv.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>
          <button onClick="location.reload()">Reload</button>`;
      }
    }
  });
  