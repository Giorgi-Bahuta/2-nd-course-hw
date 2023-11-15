//Задание 1
let password = 'стакан';
let userAnswer = prompt('Введите пароль');
if (userAnswer === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно")
}

//Задание 2
let c = prompt('Введите число');
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 3
let d = prompt('Введите первое значение');
let e = prompt('Введите второе значение');
if (d > 100 || e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
}

//Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:    
        alert('Сейчас зима');
        break;
    case 3:
    case 4:
    case 5:  
        alert('Сейчас весна');
        break;
    case 6:
    case 7:
    case 8: 
        alert('Сейчас лето');
        break;
    case 9:
    case 10:
    case 11: 
        alert('Сейчас осень');
        break;
    default: alert('Что ты вводишь? У нас всего 12 месяце. Попробуй еще раз')
        break;
}

//Задание 6
alert('Hover и адаптив сделал');

//Задание 7
let num = prompt('Пожалуйста, введите любое число');
if (isNaN(num)) {
    alert('NaN');
} else if (num % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

//Задание 8
let clientOS = 0;
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}

//Задание 9
let clientOS = 0;
let clientDeviceYear = 2015;
if (clientOS === 0 && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear < 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Установите облегченную версию приложения для Android по ссылке');
}