/* flag의 종류
i(ignore case) : 대소문자 구별 않고 패턴 검색
g(global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
flag는 옵션이므로 선택적으로 사용, 순서와 상관 없이 하나 이상의 플래그를 동시 설정 가능
*/

let target = 'Java JavaScript';

console.log(target.match(/VA/));
console.log(target.match(/VA/i));
console.log(target.match(/VA/ig));

console.log('--------------------------');

/* pattern
패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다.
*/

// . : 임의의 문자열
target = 'abcdefg';
console.log(target.match(/../g));    // 임의의 2자리 문자열 전역 검색
console.log('--------------------------');

// {m, n} : 최소 m번, 최대 n번 반복 되는 문자열 (반복 검색)
target = 'a aa aaa b bb bbb ab aab abb';
console.log(target.match(/a{2,3}/g))    // a 최소 2번 ~ 최대 3번 반복
console.log(target.match(/b{2}/g))      // b 두 번 반복
console.log(target.match(/b{3,}/g))     // b 세 번 이상 반복
console.log('--------------------------');

// + : 앞선 패턴이 최소 한 번 이상 반복 되는 문자열 (반복 검색)
// +는 {1,}과 같다.
console.log(target.match(/b+/g));

// ? : 앞선 패턴이 최대 한 번(0번 포함) 이상 반복 되는 문자열 (반복 검색)
// ?는 {0,1}과 같다.

target = 'soul seoul';
console.log(target.match(/se?oul/g));   // e 부분이 있어도 되고 없어도 되는 패턴을 찾아와라.


// | : or
target = 'aa bb cc dd 123 456 _@';
console.log(target.match(/a|b/g));       // [ 'a', 'a', 'b', 'b' ]
// 분해 되지 않은 단어 레벨로 검색
console.log(target.match(/a+|b+/g));     // [ 'aa', 'bb' ]
// [] 내의 문자는 or로 동작
console.log(target.match(/[abc]+/g));    // [ 'aa', 'bb', 'cc' ]
// 범위를 지정하려면 - 사용
console.log(target.match(/[a-z]+/g));    // [ 'aa', 'bb', 'cc', 'dd' ]
// 대소문자 범위
console.log(target.match(/[A-Za-z]+/g)); // [ 'aa', 'bb', 'cc', 'dd' ]
// 숫자 범위
console.log(target.match(/[0-9]+/g));    // [ '123', '456' ]
console.log('--------------------------')

// \d : 숫자
// \D : 숫자가 아닌 문자
console.log(target.match(/\d+/g));       // [ '123', '456' ]
console.log(target.match(/\D+/g));       // [ 'aa bb cc dd ', ' ', ' _@' ]
// \w : 알파벳, 숫자, 언더스코터
// \W : \w의 반대 (워드가 아니다)
console.log(target.match(/\w+/g));
console.log(target.match(/\W+/g));
console.log('--------------------------')

// [..] 내의 ^ : not
console.log(target.match(/[^0-9]+/g));     // 0에서 9가 아닌 애를 전역적으로 패턴 뽑아내겠다.
console.log(target.match(/[^a-z]+/g));     // a에서 z가 아닌 ..
console.log('--------------------------')

// [..] 밖의 ^ : 시작 위치 검색
// $ : 마지막 위치 검색
target = 'https://www.google.com';
console.log(/^https/.test(target));        // https로 시작? / true
console.log(/com$/.test(target));          // com으로 끝나? / true