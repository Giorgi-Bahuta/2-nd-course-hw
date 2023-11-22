//Задание 1
function min(a, b) {
    a <= b ? console.log(a) : console.log(b);
}
min(8, 4);
min(6, 6);

//Задание 2
function classification(a) {
    a % 2 === 0 ? console.log('Число четное') : console.log('Число нечетное');
}
classification(2);

//Задание 3.1
let squared = (a) => a**2
squared(5);

//Задание 3.2
let squared = (a) => {
    let result = a**2;
    return result;
}
squared(5);

//Задание 4
let userAnswer = prompt('Сколько тебе лет?');
let greeting = (userAnswer < 0) ? 'Вы ввели неправильное значение' : 
(userAnswer <= 12) ? 'Привет, друг!' :
'Добро пожаловать!';
alert(greeting);

//Задание 5
function num(a, b) {
    isNaN(a) || isNaN(b) ?  console.log('Одно или оба значения не являются числом') : console.log(a * b); 
}
num(5, 4);

//Задание 6
function num() {
    let userNum = prompt('Введи число');
    let squared = userNum ** 2;
    isNaN(userNum) ? console.log('Переданный параметр не является числом') : console.log(`${userNum} в кубе равняется ${squared}`);
}
num();

//Задание 7
function getArea() {
    return 3.14 * (this.radius ** 2);
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 5,

    getArea: getArea,
    getPerimeter: getPerimeter,
};

const circle2 = {
    radius: 4,

    getArea: getArea,
    getPerimeter: getPerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8
function numMonth() {
    let userNum = Number(prompt('Введит число, а я скажу к какому времени года он относится'));
    (userNum === 3) || (userNum === 4) || (userNum === 5) ? alert('Весна') :
    (userNum === 6) || (userNum === 7) || (userNum === 8) ? alert('Лето') :
    (userNum === 9) || (userNum === 10) || (userNum === 11) ? alert('Осень') :
    (userNum === 12) || (userNum === 1) || (userNum === 2) ? alert('Зима') :
    alert('Некорректное число')
}