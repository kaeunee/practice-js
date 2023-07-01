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

function sum(x, y) {
    return x + y
}

const a = sum(1, 3)
const b = sum (4, 12)

console.log(a)
console.log(b)
console.log(a + b)

// 함수의 결과가 반복적으로 사용될때에는 변수에 담아서 사용하는 것이 좋고
// 단일로만 사용될때에는 그대로 함수의 결과가 사용되는 곳에서 함수를 호출하는 것도 효과적인 사용 방법이다.