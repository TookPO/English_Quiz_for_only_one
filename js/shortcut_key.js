// 'z' 키를 눌렀을 때 이벤트 처리[컨텐츠 변경]
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey) {
    runNextPage();
  }
});

// Enter 키를 눌렀을 때 이벤트 처리[정답 확인]
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    runCheckAnswer();
  }
});

// 'delete' 키를 눌렀을 때 이벤트 처리[내용 제외하기]
document.addEventListener('keydown', function(event) {
  if (event.key === 'Delete') {
    runInsertIgnore();
  }
});

// 'c' 키를 눌렀을 때 이벤트 처리[컨텐츠 바꾸기]
document.addEventListener('keydown', function(event) {
  if (event.key === '-') {
    changeKind();
  }
});