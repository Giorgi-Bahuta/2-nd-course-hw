//Задание 1
let num = [1, 5, 4, 10, 0, 3];

for(let i = 0; i < num.length; i++) {
    console.log(num[i]);
    if (num[i] == 10) break;
}


//Задание 2
let num = [1, 5, 4, 10, 0, 3];

let search = num.indexOf(4);
console.log(search);


//Задание 3
let num = [1, 3, 5, 10, 20];

let search = num.join(' ');
console.log(search);


//Задание 4
let arr = [];
for (i = 0; i < 3; i++) {
    // Создаем внешний цикл, который повторяется 3 раза
    let innerArr = []; // Создаем вложенный массив
    for (j = 0; j < 3; j++) {
        // Создаем внутренний цикл, который также повторяется 3 раза
        innerArr.push(1); // Добавляем значение 1 во вложенный массив
    }
    arr.push(innerArr); // Добавляем вложенный массив в главный массив
}
console.log(arr);


//Задание 5
let num = [1, 1, 1];

num.push(2, 2, 2);
console.log(num);

//Задание 6
let num = [9, 8, 7, 'a', 6, 5];

num.sort().pop();
console.log(num);

//Задание 7
let num = [9, 8, 7, 6, 5];

let userAnswer = Number(prompt('Введи число'));
if (num.includes(userAnswer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


//Задание 8
let text = 'abcdef';
let arrayText = text.split('').reverse().join('');
console.log(arrayText);

//Задание 9
let arr = [
    [1, 2, 3],
    [4, 5, 6],
];
let arrGeneral = arr.flat();
console.log(arrGeneral);

//Задание 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i=0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}

//Задание 11
function squareNum(...arr) {
    return arr.map((item) => item ** 2);
}
squareNum(1, 2, 3);

//Задание 12
function squareNum(...arr) {
    return arr.map((item) => item.length);
}
squareNum('слово', '', 'слог', 'длинное предложение', 'буква');

//Задание 13
function squareNum(...arr) {
    let result = [];
    for(i = 0; i < arr.length; i++)
    if (arr[i] < 0) {
    result.push(arr[i]);
    }
    return result;
}
squareNum(1, -2, -3, 3, -1, -110, 200);