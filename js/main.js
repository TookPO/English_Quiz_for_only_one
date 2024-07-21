function showNextPage(leaningArray) {
  currentIndex = Math.floor(Math.random() * leaningArray.length);
  var currentPage = leaningArray[currentIndex];
  document.getElementById('question').textContent = currentPage.question;
  document.getElementById('result').textContent = "";
  document.getElementById('userAnswer').value = "";

  if (typeof tryPage.get(currentPage.question) == 'undefined') {
    document.getElementById('word_try_num').innerHTML = '0';
    tryPage.set(currentPage.question, 1);
  } else {
    document.getElementById('word_try_num').innerHTML = tryPage.get(currentPage.question).toString();

    tryPage.set(currentPage.question, tryPage.get(currentPage.question) + 1);
  }
}

function chageHtmlTitle(kindName) {

  document.getElementById('kindTitle').innerHTML = kindName;
}

// *4. '문제 바꾸기'버튼 시 표기하기 위해 내용 추가 + HTML에 표기할 문제명 추가
function changeKind() { // 문제내는 종류를 바꿈
  var kindName = "";
  switch (kindNum + 1) {
    case 1:
      kind = WORD_CODE;
      kindNum = WORD_NUM;
      kindName = "영단어";
      break;

    case 2:
      kind = INTERPRET_CODE;
      kindNum = INTERPRET_NUM;
      kindName = "해석";
      break;

    case 3:
      kind = PROPOSITION_CODE;
      kindNum = PROPOSITION_NUM;
      kindName = "전공책";
      break;

    case 4:
      kind = PAST_CODE;
      kindNum = PAST_NUM;
      kindName = "과거형";
      break;

    case 5:
      kind = PAGO_LC_CODE;
      kindNum = PAGO_LC_NUM;
      kindName = "PAGO LC";
      break;

    case 6:
      kind = PAGO_RC_CODE;
      kindNum = PAGO_RC_NUM;
      kindName = "PAGO RC";
      break;

    case 7:
      kind = SPEAKING_365_CODE;
      kindNum = SPEAKING_365_NUM;
      kindName = "365 Speaking"
      break;

    default:
      kind = WORD_CODE;
      kindNum = WORD_NUM;
      kindName = "영단어";
      break;
  }

  chageHtmlTitle(kindName); // HTML 제목을 바꿈
  runNextPage();
}

// [제외할 항목 추가]
function insertIgnore(leaningArr) {
  ignoreArrMap.get(kind).push(leaningArr[currentIndex]);
  console.log(leaningArr[currentIndex].question + "제외됨 , 제외:" + ignoreArrMap.get(kind));
  leaningArr.splice(currentIndex, 1);

  runNextPage();
  showAutoHideMessage('정상적으로 삭제 되었습니다.', 500);
}

// [제외된 항목 보기]

