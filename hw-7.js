//Задание 1
let text = 'текст';
console.log(text.toUpperCase());

//Задание 2
function searchStart(arr, convergence) {
    arr.forEach((forArr) => {
        if(forArr.toLowerCase().startsWith(convergence.toLowerCase())) {
            console.log(forArr);
        }
    });
};
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4
let arr =[52, 53, 49, 77, 21, 32];
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(`Наименьшее число: ${min}, наибольшее число ${max}`);

//Задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1,10));

//Задание 6
function randomNum(n) {
    let result = [];
    for (let i = 0; i < Math.floor(n/2); i++) {
        result.push(Math.round(Math.random() * n));
    }
    return result;
}
randomNum(7);

//Задание 7
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1,10));

//Задание 8
let dateNow = new Date();
console.log(dateNow);

//Задание 9
let currentDate = new Date();
let date = currentDate.getDate();
currentDate.setDate(date + 73);
console.log(currentDate);

//Задание 10
function enterDate(date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    console.log("Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()]); 
    console.log("Время: " + date.toLocaleTimeString());
}
enterDate(new Date());

//Задание 11 (Разместил в файле script.js)
function secondGame(){
let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
list = list.sort(() => Math.random() - 0.5);
alert(list);

let firstGuess = prompt('Какой первый элемент массива');
let lastGuess = prompt('Какой последний элемент массива');

if (firstGuess.toLowerCase() === list[0].toLowerCase() && lastGuess.toLowerCase() === list[list.length - 1].toLowerCase()) {
    alert('Поздравляем! Все верно')
} else if (firstGuess.toLowerCase() === list[0].toLowerCase() || lastGuess.toLowerCase() === list[list.length - 1].toLowerCase()) {
    alert('Близко')
} else {
    alert('Не верно')
}
}