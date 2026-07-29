"use strict";

const questions = [
  {
    category: "通学について",
    text: "高校には、どのくらいの頻度で通いたいですか？",
    support: "今の状況ではなく、理想に近いものを選んでみてください。",
    answers: [
      {
        text: "できれば週5日、学校へ通いたい",
        scores: { five: 4, three: 1, web: 0 }
      },
      {
        text: "週3日くらいから無理なく通いたい",
        scores: { five: 1, three: 4, web: 1 }
      },
      {
        text: "自宅学習を中心に、必要な日に登校したい",
        scores: { five: 0, three: 1, web: 4 }
      }
    ]
  },
  {
    category: "生活リズムについて",
    text: "朝の生活リズムについて、一番近いものは？",
    support: "普段の自分に近いものを選んでください。",
    answers: [
      {
        text: "決まった時間に起きて行動しやすい",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "日によって差があるので、少し余裕がほしい",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "朝の登校には不安があり、自分のペースを優先したい",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "先生との関わりについて",
    text: "勉強するとき、先生にはどのくらい関わってほしいですか？",
    support: "自分が安心して取り組めそうな形を選びましょう。",
    answers: [
      {
        text: "日々の授業で、こまめに教えてほしい",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "登校日に相談しながら進めたい",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "必要なときに相談できれば、自分でも進められそう",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "友人関係について",
    text: "高校での友人との関わり方は、どれが理想ですか？",
    support: "友人の人数ではなく、過ごし方の希望で選んでください。",
    answers: [
      {
        text: "日常的に友人と会い、一緒に過ごしたい",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "適度に関われるくらいが安心する",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "人との関わりは必要な範囲で、自分の時間も大切にしたい",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "学校行事について",
    text: "文化祭や校外学習などの学校行事には、どう関わりたいですか？",
    support: "今の時点での気持ちに近いものを選んでください。",
    answers: [
      {
        text: "できるだけ積極的に参加して楽しみたい",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "興味のある行事を選んで参加したい",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "行事よりも、学習や自分の予定を優先したい",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "学習方法について",
    text: "勉強を進めるとき、どの方法が自分に合いそうですか？",
    support: "過去の経験も思い出しながら選んでみてください。",
    answers: [
      {
        text: "決まった時間割に沿って、授業を受けながら進めたい",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "授業と自分で取り組む時間を、バランスよく持ちたい",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "自分で時間を決めて、集中できるときに進めたい",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "通学の負担について",
    text: "学校への移動や通学時間について、どう感じますか？",
    support: "毎週続けることを想像して選んでください。",
    answers: [
      {
        text: "毎日の通学でも、大きな負担にはならなそう",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "毎日は少し大変でも、週3日程度なら通えそう",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "通学の負担はできるだけ少なくしたい",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "学校への慣れ方について",
    text: "新しい学校生活には、どのように慣れていきたいですか？",
    support: "安心して始められそうなペースを選んでください。",
    answers: [
      {
        text: "毎日通いながら、早めに学校生活へ慣れたい",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "無理のない日数から、少しずつ慣れていきたい",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "まずは自宅での学習を中心に、自分のペースで慣れたい",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "課題への取り組み方について",
    text: "レポートや課題を進めるとき、どんな環境が安心ですか？",
    support: "一番取り組みやすそうなものを選びましょう。",
    answers: [
      {
        text: "学校で先生に確認しながら、計画的に進めたい",
        scores: { five: 3, three: 1, web: 0 }
      },
      {
        text: "登校日に確認し、自宅でも少しずつ進めたい",
        scores: { five: 1, three: 3, web: 1 }
      },
      {
        text: "自宅で自分の予定に合わせて進めたい",
        scores: { five: 0, three: 1, web: 3 }
      }
    ]
  },
  {
    category: "理想の高校生活について",
    text: "高校生活で、特に大切にしたいことは？",
    support: "最後の質問です。今の気持ちに一番近いものを選んでください。",
    answers: [
      {
        text: "学校生活をしっかり楽しみ、さまざまな経験をしたい",
        scores: { five: 4, three: 1, web: 0 }
      },
      {
        text: "学校と自分の時間を両立し、無理なく続けたい",
        scores: { five: 1, three: 4, web: 1 }
      },
      {
        text: "時間や場所に縛られず、自分らしく学びたい",
        scores: { five: 0, three: 1, web: 4 }
      }
    ]
  }
];

const resultData = {
  five: {
    title: "5日スタイル",
    catch:
      "学校で過ごす時間を大切にしながら、高校生活をしっかり楽しみたいタイプです。",
    reasons: [
      "決まった生活リズムをつくりやすい",
      "授業で先生から直接サポートを受けやすい",
      "友人との日常や学校行事を楽しみやすい"
    ],
    secondText:
      "登校日数に少し余裕を持たせたい場合は、3日スタイルも確認してみましょう。"
  },
  three: {
    title: "3日スタイル",
    catch:
      "学校と自分の時間を両立しながら、無理のないペースで高校生活を送りたいタイプです。",
    reasons: [
      "週3日の登校から生活リズムを整えやすい",
      "登校日と自宅で過ごす時間を両立できる",
      "学校生活に少しずつ慣れていきやすい"
    ],
    secondText:
      "生活リズムや登校への希望によっては、5日スタイルまたはWEBスタイルも選択肢になります。"
  },
  web: {
    title: "WEBスタイル",
    catch:
      "自分の時間や生活ペースを大切にしながら、柔軟に学びたいタイプです。",
    reasons: [
      "自宅学習を中心に、自分の予定を立てやすい",
      "通学にかかる負担を抑えやすい",
      "自分が集中しやすい時間や場所で学びやすい"
    ],
    secondText:
      "学校で先生や友人と関わる機会も持ちたい場合は、3日スタイルも確認してみましょう。"
  }
};

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const loadingScreen = document.getElementById("loading-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const previousButton = document.getElementById("previous-button");
const quitButton = document.getElementById("quit-button");
const restartButton = document.getElementById("restart-button");

const currentNumber = document.getElementById("current-number");
const totalNumber = document.getElementById("total-number");
const progressBar = document.getElementById("progress-bar");
const progressTrack = document.querySelector(".progress-track");

const questionCategory = document.getElementById("question-category");
const questionLabel = document.getElementById("question-label");
const questionText = document.getElementById("question-text");
const questionSupport = document.getElementById("question-support");
const answerList = document.getElementById("answer-list");

const resultTitle = document.getElementById("result-title");
const resultCatch = document.getElementById("result-catch");
const resultReasons = document.getElementById("result-reasons");
const secondResultTitle = document.getElementById("second-result-title");
const secondResultText = document.getElementById("second-result-text");

let currentQuestionIndex = 0;
let selectedAnswers = [];

totalNumber.textContent = String(questions.length);

function showScreen(screenToShow) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  screenToShow.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function resetDiagnosis() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const displayNumber = currentQuestionIndex + 1;
  const progress = (displayNumber / questions.length) * 100;

  currentNumber.textContent = String(displayNumber);
  questionCategory.textContent = question.category;
  questionLabel.textContent =
    `QUESTION ${String(displayNumber).padStart(2, "0")}`;
  questionText.textContent = question.text;
  questionSupport.textContent = question.support;

  progressBar.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", String(displayNumber));

  previousButton.disabled = currentQuestionIndex === 0;
  previousButton.classList.toggle(
    "hidden-button",
    currentQuestionIndex === 0
  );

  answerList.innerHTML = "";

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-button";

    if (selectedAnswers[currentQuestionIndex] === answerIndex) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <span class="answer-letter">
        ${String.fromCharCode(65 + answerIndex)}
      </span>
      <span class="answer-text">${answer.text}</span>
      <span class="answer-arrow">→</span>
    `;

    button.addEventListener("click", () => {
      selectAnswer(answerIndex);
    });

    answerList.appendChild(button);
  });
}

function selectAnswer(answerIndex) {
  selectedAnswers[currentQuestionIndex] = answerIndex;

  const answerButtons =
    answerList.querySelectorAll(".answer-button");

  answerButtons.forEach((button, index) => {
    button.classList.toggle("selected", index === answerIndex);
  });

  window.setTimeout(() => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
      renderQuestion();
    } else {
      calculateResult();
    }
  }, 260);
}

function calculateScores() {
  const scores = {
    five: 0,
    three: 0,
    web: 0
  };

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    const answer =
      questions[questionIndex].answers[answerIndex];

    scores.five += answer.scores.five;
    scores.three += answer.scores.three;
    scores.web += answer.scores.web;
  });

  return scores;
}

function calculateResult() {
  showScreen(loadingScreen);

  const scores = calculateScores();

  const ranking = Object.entries(scores)
    .sort((first, second) => second[1] - first[1]);

  const primaryKey = ranking[0][0];
  const secondaryKey = ranking[1][0];

  window.setTimeout(() => {
    renderResult(primaryKey, secondaryKey);
    showScreen(resultScreen);
  }, 1500);
}

function renderResult(primaryKey, secondaryKey) {
  const primaryResult = resultData[primaryKey];
  const secondaryResult = resultData[secondaryKey];

  resultTitle.textContent = primaryResult.title;
  resultCatch.textContent = primaryResult.catch;

  resultReasons.innerHTML = primaryResult.reasons
    .map(
      (reason) => `
        <div class="reason-item">
          <span class="reason-check">✓</span>
          <span>${reason}</span>
        </div>
      `
    )
    .join("");

  secondResultTitle.textContent = secondaryResult.title;

  secondResultText.textContent =
    primaryResult.secondText;
}

function confirmReturnToStart() {
  const shouldReturn = window.confirm(
    "回答内容をリセットして、最初の画面に戻りますか？"
  );

  if (!shouldReturn) {
    return;
  }

  resetDiagnosis();
  showScreen(startScreen);
}

startButton.addEventListener("click", () => {
  resetDiagnosis();
  renderQuestion();
  showScreen(questionScreen);
});

previousButton.addEventListener("click", () => {
  if (currentQuestionIndex === 0) {
    return;
  }

  currentQuestionIndex -= 1;
  renderQuestion();
});

quitButton.addEventListener("click", confirmReturnToStart);

restartButton.addEventListener("click", () => {
  resetDiagnosis();
  renderQuestion();
  showScreen(questionScreen);
});