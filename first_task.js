const num = 1223 // number
const bigInt = BigInt(1232132131); // bigInt
const str = "Cтрока, что угодно" // string
const name = 'Даша'; // string
const bool = true; //boolean
const bool_j = false; //boolean
const nul = null // null
const undef = undefined // undefined
const sym = Symbol('213'); // Symbol
const obj = {
    key: 'value'
} // Объект
const array1 = [1,2,3,4,5,9,235,265];
const array2 = [3123,12,2,1,76,100000]
const array = ['3', '1', {key1: 'f', key2: '123'}, [1,2,3,4]] // Массивы
const num1 = 5;
const boolnum = num1 > 3
// console.log(boolnum)
// if (num1 > 3) {
//     console.log('Правда')
// } else if (num1 === 2) {
//     console.log('Что-то среднее')
// } else {
//     console.log('Ложь')
// }

const obj1 = {
    bread: 'new bread',
    key_second: 'value 2',
    'key_third': 123,
}
// console.log(obj1.bread)
obj1.pizza = 'Шаверма'
// console.log(obj1)
obj1.pizza = 'Салями'
// console.log(obj1)
obj1.vegetables = {
    potato: "Чипсы"
}
// console.log(obj1.obj321.potato)


const array3 = [1,2,3,4,5,6,7,8,9,10]
array3[6]="Привет"

const ojb3 ={
    name: "Dasha",
    age: 23
}

ojb3.age = ojb3.age + 1
ojb3.color = "Red"

// if (ojb3.color === "Green") {
//     console.log ("Я люблю зелёный цвет")
// } else { 
//     console.log ("Я не люблю зелёный цвет")
// }



const a = 1;
const b = '1';
// == - Сравнение c приведением типов
// === -Сравнение без приведения типов

//Вопрос: Что напишется в консоль?
// console.log(a.toString() === b)

console.log('1' + 2);
console.log(1 + '2');
const c = '3' - 1
console.log(typeof c)
console.log('Привет' + '_' + 'Мир')
console.log('Хей' - 'хей');