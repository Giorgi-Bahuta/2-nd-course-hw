//Задание 1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание 2
for (let i = 1; i < 6; i++) {
    console.log(i);
}

//Задание 3
for (let i = 7; i < 23; i++) {
    console.log(i);
}

//Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}

for(let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов.`)
}

//Задание 5
num = 0;
for (let n = 1000; n >= 50; n /= 2) {
    num ++;
}
console.log(num);

//Задание 6
for (let dayNumber = 1; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`)
}