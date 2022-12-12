let a = 1
// a++
// a = a + 1
// _____

// a = a + 5
a += 5

// for (let i = 0; i < 3; i++) {
// // Действие
//     console.log(i);
// }

// // Начало цикла
// let j = 0;
// if (j < 3) {
//     console.log(j)
// }
// j = j + 1
// if (j < 3) {
//     console.log(j)
// }
// j = j + 1 
// if (j < 3) { // не сработает, выходим из цикла
//     console.log(j)
// }

// let b = 0
// for (; b < 5; b+= 2) {
//     console.log(b);
// }
// console.log(b)


// const arrA = [1, 2, 3, 4, 5,312,321,3,21,321,3,21,3,21,3,213,21,3,21,3,213,21,3,213,21,3,213,21,3,213,21,321,3,21,3,123,21,3,21,312,3,21,321,3,213,21,3,213,21,312,3,12,31,23,2,543,56,54,45,5243,56,547,34,5423,5654,6,34,235,3,634,4231,5,546,45,523,423,634,24,324,23465,2,421,4]
// // Длина = 5
// // Последний индекс массива будет = 4

// let stop = false
// setTimeout(()=> {
//     stop = true
// }, 100)
// let result = 0;
// for (let i = 0; i < arrA.length; i++) {
//     if (stop) {
//         break;
//     }
//     result = result + arrA[i]
//     // console.log(i)
// }
// console.log(stop)



// let i = 20000
// // while(i < 20000) {
// //     i += 1
// //     console.log(i)
// // }

// do {
//     i += 1
//     console.log(i)
// } while(i < 20000)

// console.log(result)


// рекурсия
function factorial(num, total = 0) {
    if (num === 1) {
        return total
    }
    return factorial(num - 1, total === 0 ? num * (num - 1) : total * (num-1))
}

function factorialItter(num) {
    let total = 1
    while (num) {
        total = total * num;
        num = num - 1
    }

    return total

}

const j = factorialItter(5)
console.log(j)


