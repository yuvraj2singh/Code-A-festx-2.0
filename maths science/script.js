function submitQuiz() {
  const answers = {
    q1: "a",
    q2: "c",
    q3: "a",
    q4: "a",
    q5: "a",
    q6: "c",
    q7: "a",
    q8: "b",
    q9: "a",
    q10: "b",
  };

  let score = 0;
  let totalQuestions = 10;

  const userAnswers = {
    q1: document.querySelector('input[name="q1"]:checked'),
    q2: document.querySelector('input[name="q2"]:checked'),
    q3: document.querySelector('input[name="q3"]:checked'),
    q4: document.querySelector('input[name="q4"]:checked'),
    q5: document.querySelector('input[name="q5"]:checked'),
    q6: document.querySelector('input[name="q6"]:checked'),
    q7: document.querySelector('input[name="q7"]:checked'),
    q8: document.querySelector('input[name="q8"]:checked'),
    q9: document.querySelector('input[name="q9"]:checked'),
    q10: document.querySelector('input[name="q10"]:checked'),
  };

  for (let question in answers) {
    if (
      userAnswers[question] &&
      userAnswers[question].value === answers[question]
    ) {
      score++;
    }
  }

  document.querySelector(
    ".result"
  ).innerText = `Your score is ${score} out of ${totalQuestions}`;
}
