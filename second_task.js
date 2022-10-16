const sumFun1 = function() {
    const a = 5;
    const b = 6
    console.log(a+b);
}

const sumFun2 = function() {
    console.log(5+6);
}

const sumFun3 = function(a,b) {
    console.log(a + b);
}

const wer1 = function(f,y) {
    console.log(y-f)
}

// wer1(10, 15) // 5
// wer1(20, 100) // 80
// wer1(321314, 723472387) // какое-то 


// Задача: Функция, которая принимает в себя один аргумент.
//_____
// Если аргумент больше 10, то прибавляю к аргументу 5 и вывожу в консоль
// иначе если аргумент четко равен 5, то вывожу в консоль этот аргумент
// иначе прибавляю к аргументу 100 и вывожу в консоль
//_____
// (задача со звездочкой)* если переданый аргумент не является числом, то вывожу в консоль
// "ЭТО НЕ ЧИСЛО" и выхожу из функции 


const myfun = function(a) {
    if (isNaN(a)) {
        console.log('ЭТО НЕ ЧИСЛО')
        return
    }

    if (a>10)  {
        console.log(a+5)}
    else if (a == 5)  {
        console.log(a)}
    else {
        console.log(a+100)}
}

myfun(11) // 16
myfun(3) // 103
myfun(5) // 5
myfun('5') // 5
myfun('Что это такое') // "ЭТО НЕ ЧИСЛО" и выход из функции


const sumFunWithReturn = function(a,b) {
    // a = 1
    // b = undefiend
    if (!a || !b) // true 
    {
        return 'Введи данные, человек!'
    }
    const c = a+ b
    const f = c * (b + c)
    if (f=== 1500) {
        return 'Ух блин, много'
    } else {
         return "Не много"
    }
}

const jok = sumFunWithReturn(1);
// console.log(jok)