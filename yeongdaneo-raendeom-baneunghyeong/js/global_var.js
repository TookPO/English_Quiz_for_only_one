const WORD_NUM = 1;
const INTERPRET_NUM = 2;
const PROPOSITION_NUM = 3;
const PAST_NUM = 4;
const PAGO_LC_NUM = 5;
const PAGO_RC_NUM = 6;

// [해당 컨텐츠 명칭]
const WORD_CODE = 'word';
const INTERPRET_CODE = 'interpret';
const PROPOSITION_CODE = 'proposition';
const PAST_CODE = 'past';
const PAGO_LC_CODE = 'pago_lc';
const PAGO_RC_CODE = 'pago_rc';


var kind = WORD_CODE; // 현재 실행중인 컨텐츠 이름
var kindNum = WORD_NUM; // 현재 실행중인 컨텐츠 고유 번호

// data배열을 담은 map
var contentArrMap = new Map();
contentArrMap.set(WORD_CODE, words);
contentArrMap.set(INTERPRET_CODE, interprets);
contentArrMap.set(PROPOSITION_CODE, proposition);
contentArrMap.set(PAST_CODE, past);
contentArrMap.set(PAGO_LC_CODE, pago_lc);
contentArrMap.set(PAGO_RC_CODE, pago_rc);

var currentIndex = -1;

var ignoreArrMap = new Map(); // 안에 arr이가 담김
// 제외된 컨텐츠를 담은 arr
ignoreArrMap.set(WORD_CODE, new Array());
ignoreArrMap.set(INTERPRET_CODE, new Array());
ignoreArrMap.set(PROPOSITION_CODE, new Array());
ignoreArrMap.set(PAST_CODE, new Array());
ignoreArrMap.set(PAGO_LC_CODE, new Array());
ignoreArrMap.set(PAGO_RC_CODE, new Array());

let tryPage = new Map(); // 시도 횟수 (새로고침 전) {key: value 배열이 들음}
