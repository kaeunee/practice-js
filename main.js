// import random from './getRandom'

// const a = random()

// //switch
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

// //if
// if (a === 0) {
// console.log('a is 0')
// } else if (a === 2) { //else if는 중간조건
//     console.log('a is 2')
// } else if (a === 4) {
//     console.log('a is 4')
// } else {
//     console.log('rest...')
// }


// 반복문 (for statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')
// console.log(ulEl)

for (let i = 0; i < 10; i+= 1) {
    const li = document.createElement('li')
    li.textContent = `list-${i + 1}`
    if ((i + 1) % 2 === 0) {
        li.addEventListener('click', function () {
            console.log(li.textContent)
        })
    }
    ulEl.appendChild(li)
}