//Задание 8
function numMonth() {
    let userNum = Number(prompt('Введи номер месяца, а я скажу к какому времени года он относится'));
    (userNum === 3) || (userNum === 4) || (userNum === 5) ? alert('Весна') :
    (userNum === 6) || (userNum === 7) || (userNum === 8) ? alert('Лето') :
    (userNum === 9) || (userNum === 10) || (userNum === 11) ? alert('Осень') :
    (userNum === 12) || (userNum === 1) || (userNum === 2) ? alert('Зима') :
    alert('Некорректное число')
}

//Задание 11 
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