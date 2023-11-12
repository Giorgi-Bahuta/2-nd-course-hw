// Задание 1
let z = 10;
alert(z);
z = 20;
alert(z);

// Задание 2
let ageFirstIphone = 2007;
alert(ageFirstIphone);

// Задание 3
let creatorJS = "Брендан Эйх";
alert(creatorJS);

// Задание 4
let x = 10;
let y = 2;
let addition = x + y;
let subtraction = x - y;
let multiplication = x * y;
let dvision = x / y;
alert(`Сумма ${addition}, разность ${subtraction}, произведение ${multiplication}, частное ${dvision}`)

// Задание 5
let result = 2**5;
alert(result);

// Задание 6
let a = 9;
let b = 2;
let remainder = a % b;
alert(remainder);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?")
alert(age);

// Задание 9
const user = {
    name: 'Bob',
    age: 18,
    isAdmin: true
}
// 9.1
user['cityOfResidence'] = 'NewYork';
// 9.2
user['age'] = 28;
// 9.3
delete user['cityOfResidence'];
// 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?')
alert(user[info]);

// Задание 10
let name = prompt('Как вас зовут?');
alert(`Привет, ${name}!`)
