// 전치사에서 전공책에서 나온 단어를 학습하는 것으로 바뀜
var proposition = [
  { question: "statement(프로그래밍에서)", answer: "구문" },
  { question: "Expression(프로그래밍에서)", answer: "수식" },
  { question: "instead", answer: "대신에" },
  { question: "interactive", answer: "상호적인" },
  { question: "perform", answer: "이행하다" },
  { question: "inside", answer: "안에서" },
  { question: "examine", answer: "검사하다" },
  { question: "even", answer: "더욱, ~까지도, 평평한" },
  { question: "so far", answer: "지금" },
  { question: "regardless", answer: "부주의한" },
  { question: "external", answer: "외부의" },
  { question: "pros and cons", answer: "장점과 단점" },
  { question: "possibility", answer: "가능성" },
  { question: "lack", answer: "부족" },
  { question: "escape sequence(뭔지)", answer: "백슬래시문" },
  { question: "terminate", answer: "끝내다" },
  { question: "properly", answer: "적절히" },
  { question: "initialize", answer: "초기화하다" },
  { question: "idioms", answer: "특정 기능을 하나 이상의 언어로 표현한 것" },
  { question: "directive", answer: "지시" },
  { question: "reliance", answer: "신뢰" },
  { question: "misuse", answer: "악용하다" },
  { question: "parentheses", answer: "둥근 괄호" },
  { question: "bracket", answer: "대괄호" },
  { question: "sophisticated", answer: "복잡한" },
  { question: "invoke", answer: "발동하다" },
  { question: "concatenated", answer: "연결됨" },
  { question: "ellipsis", answer: "생략" },
  { question: "miscellanceous", answer: "여러가지 잡다한" },
  { question: "directive", answer: "명령" },
  { question: "encounter", answer: "맞닥뜨리다" },
  { question: "numbered", answer: "번호를 매기다" },
  { question: "token", answer: "예약어, 선언된 변수명, 상수, 문자열 상수, 산술부호, 구두점(의미를 강조하는 기호문자)" },
  { question: "convention", answer: "관습" },
  { question: "extension", answer: "확장/ 확장자" },
  { question: "Reverse Polish Notation(RPN)", answer: "후위 표기법(피연산자 뒤에 연산자가 오는 수식표기방법) " },
  { question: "perform", answer: "실행하다" },
  { question: "fade", answer: "사라지다" },
  { question: "as well", answer: "뿐만아니라" },
  { question: "principle", answer: "원리, 법칙" },
  { question: "examine", answer: "검사하다" },
  { question: "delve", answer: "파헤치다" },
  { question: "executable", answer: "실행가능한" },
  { question: "intricacy", answer: "복잡" },
  { question: "redundancy", answer: "여분, 과잉" },
  { question: "detect", answer: "발견하다" },
  { question: "initializer", answer: "생성자" },
  { question: "suffer", answer: "겪다" },
  { question: "therefore", answer: "그러므로" },
  { question: "whether", answer: "~이든 아니든" },
  { question: "embed", answer: "파묻다" },
  { question: "constant", answer: "상수" },
  { question: "allow", answer: "지급하다" },
  { question: "traverse", answer: "횡단하다" },
  { question: "Alter", answer: "바꾸다" },
  { question: "bypass", answer: "우회하다" },
  { question: "reclaim", answer: "교정하다" },
  { question: "occupy", answer: "(장소를)차지하다" },
  { question: "locate", answer: "위치하다, 찾아내다" },
  { question: "liberal", answer: "자유" },
  { question: "suppose", answer: "가정하다" },
  { question: "somewhere", answer: "어딘가에" },
  { question: "achieve", answer: "달성하다" },
  { question: "assume", answer: "가정하다" },
  { question: "standpoint", answer: "입장" },
  { question: "will", answer: "의지" },
  { question: "parenthesis", answer: "괄호" },
  { question: "thus", answer: "따라서" },
  { question: "stick", answer: "버티다, 찌르다" },
  { question: "relevant", answer: "관련된" },
  { question: "comparison", answer: "비교" },
  { question: "ascending", answer: "오름차순" },
  { question: "portion", answer: "부분" },
  { question: "concisely", answer: "간결한" },
  { question: "reveal", answer: "드러나다" },
  { question: "furnish", answer: "제공하다" },
  { question: "qualifier", answer: "한정자" },
  { question: "belong", answer: "속하다" },
  { question: "placement", answer: "배치" },
  { question: "ordinary", answer: "보통의" },
  { question: "illegal", answer: "불법의" },
  { question: "even if", answer: "~라 할지라도" },
  { question: "optimize", answer: "최고로 활용하다" },
  { question: "maintenance", answer: "유지" },
  { question: "summary", answer: "요약" },
  { question: "consist", answer: "이루어져 있다, 존재하다" },
  { question: "precede", answer: "앞서다" },
  { question: "possibly", answer: "아마도" },
  { question: "elsewhere", answer: "다른곳에서" },
  { question: "decipher", answer: "해독하다" },
  { question: "favor", answer: "돕다, 선호하다" },
  { question: "precede", answer: "앞서다, 선행하다" },
  { question: "breed", answer: "사육하다" },
  { question: "distinct", answer: "분명한" },
  { question: "instruction", answer: "지시" },
  { question: "cumulative", answer: "누적하는" },
  { question: "both", answer: "양쪽의" },
  { question: "restrict", answer: "제한하다" },
  { question: "syntax", answer: "구조" },
  { question: "obvious", answer: "분명한" },
  { question: "independent", answer: "독립적인" },
  { question: "available", answer: "이용할 수 있는" },
  { question: "describe", answer: "설명하다, 묘사하다" },
  { question: "terminology", answer: "전문용어" },
  { question: "implementing", answer: "실행하기" },
  { question: "reusability", answer: "재사용성" },
  { question: "fashion", answer: "방법, 방식" },
  { question: "while", answer: "(명)잠깐, 잠시" },

  { question: "turn over", answer: "~을 생각하다, 숙고하다/ 뒤집히다" },
  { question: "implementation defined", answer: "각각의 구현 방법에 따라, 어떤 행동 방식(behavior)이 결정될 수 있고, 그에 따라 문서화되어 있다" },
  // { question: "", answer: "" },
];

// -------------------------- 전공영어 end -------------------------- 