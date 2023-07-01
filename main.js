// import random from './getRandom'

// const a = random()

// switch
// switch (a) {
//     case 0:
//     console.log('a is 0')
//         break
//     case 2:
//     console.log('a is 2')
//         break
//     case 4:
//     console.log('a is 4')
//         break
//     default: //나머지인 경우
// }

// if
// if (a === 0) {
// console.log('a is 0')
// } else if (a === 2) { //else if는 중간조건
//     console.log('a is 2')
// } else if (a === 4) {
//     console.log('a is 4')
// } else {
//     console.log('rest...')
// }


// // 반복문 (for statement)
// // for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul')
// console.log(ulEl)

// for (let i = 0; i < 10; i+= 1) {
//     const li = document.createElement('li')
//     li.textContent = `list-${i + 1}`
//     if ((i + 1) % 2 === 0) {
//         li.addEventListener('click', function () {
//             console.log(li.textContent)
//         })
//     }
//     ulEl.appendChild(li)
// }

// 변수 유효범위(Variable Scope)
// var, let, const (최신 자바스크립트 문법에 의해서 var는 되도록 사용하지 않을 것)

// 블록레벨: 변수가 선언되어져있는 그 범위의 중괄호 부분
// var는 블록레벨의 유효범위가 아닌 함수레벨의 유효범위를 갖기때문에

// 함수 복습

/*
function sum(x, y) {
    return x + y
}

const a = sum(1, 3)
const b = sum (4, 12)

console.log(a)
console.log(b)
console.log(a + b)
*/

// 함수의 결과가 반복적으로 사용될때에는 변수에 담아서 사용하는 것이 좋고
// 단일로만 사용될때에는 그대로 함수의 결과가 사용되는 곳에서 함수를 호출하는 것도 효과적인 사용 방법이다.

/**
 * 함수 선언방식, 함수 표현
 * return 키워드 반환(내보내기)과 동시에 종료를 의미하기도 함
 * 함수를 사용할때 매개변수 없이 arguments라는 특정 개체 사용할 수 있음
 * 함수 안에서 언제든지 사용할 수 있음
 * 함수를 실행할때 사용하는 인수가 너무 많아서 매개변수를 일일히 지정하기 힘들때
 * arguments 객체를 활용할 수 있음 단, 직관적이지 않아서 매개변수를 지정 권장
*/

// 화살표 함수
// () => {} vs function () {}

// const double = function (x) {
//     return x * 2
// }
// console.log.apply('double: ', double(7))

// 동일 로직을 통한 화살표 함수 function키워드가 없는 대신 화살표 입력
// 화살표 함수와 일반 함수의 차이는 화살표 함수는 기본적 로직 축약형
// 객체 데이터를 만들때에는 중괄호 사용하지만, *화살표 함수는 소괄호로 감싸준 후 중괄호 사용해야함)

/*
const doubleArrow = (x) => {
    return x * 2
}
console.log.apply('doubleArrow', doubleArrow(7))
*/

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

/*
const a = 7
function double() {
    console.log(a * 2)
}
double();
*/

/*
함수를 하나 만들었는데 한번 실행되고 쓸 일이 없는 전제하에 굳이 함수 이름을 만들어서 호출할 필요가 없음
이런 경우를 대비해서 즉시실행함수 사용 정의되자마자 즉시 실행
*/

/*
(function () {
    console.log( a * 2 )
})();

(function () {
    console.log( a * 2 )
}());
*/

// 즉시실행함수는 위와같이 (x)(), (x()) 두 가지 사용 문법 존재

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double()

function double() {
    console.log(a * 2)
} 
/* 함수 선언은 아래에 작성해도 그 위에서 호출이 가능
함수이름만 보고도 대략적인 로직을 알 수 있음
코드를 위에서부터 아래로 읽어져 내려갈때 이름을 통해 대략적인 로직을 추측하기 위해 */