
// 1: word, 2: Interpret

function checkAnswer(leaningArray) {
  var currentPage = leaningArray[currentIndex];
  var userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
  if (userAnswer === currentPage.answer.toLowerCase()) {
    document.getElementById('result').textContent = "정답입니다!";
  } else {
    document.getElementById('result').textContent = "오답입니다. 정답은 '" + currentPage.answer + "' 입니다.";
  }
}

function runNextPage() { // [랜덤문제 실행] 영단어냐 해석이냐
  showNextPage(contentArrMap.get(kind));
}

function runCheckAnswer() { // 어떤 종류의 문제를 맞출것인가
  if (kind == "word") {
    checkAnswer(words);
  } else if (kind == "interpret") {
    checkAnswer(interprets);
  } else if (kind == PROPOSITION_CODE) {
    checkAnswer(proposition);
  } else if (kind == PAST_CODE) {
    checkAnswer(past);
  }else if (kind == PAGO_LC_CODE){
    checkAnswer(pago_lc);
  }else if (kind == PAGO_RC_CODE){
    checkAnswer(pago_rc);
  }
}



// 잠깐 뜨고 사라지는 메세지
function showAutoHideMessage(message, duration) {
  var alertBox = document.createElement('div');
  alertBox.setAttribute('id', 'auto-hide-alert');
  alertBox.textContent = message;

  document.body.appendChild(alertBox);

  setTimeout(function() {
    // 일정 시간 후 투명도를 0으로 하여 사라지게 함
    alertBox.style.opacity = 0;
    // 사라진 후 alertBox를 삭제함
    setTimeout(function() {
      alertBox.remove();
    }, 1000);
  }, duration);
}

// 컨텐츠 제외 실행
function runInsertIgnore() {
  insertIgnore(contentArrMap.get(kind));
}

runNextPage(); // 페이지 로딩 시 첫 번째 단어 표시