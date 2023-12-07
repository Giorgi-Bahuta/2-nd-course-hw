//Задание 8
function numMonth() {
    let userNum = Number(prompt('Введи номер месяца, а я скажу к какому времени года он относится'));
    (userNum === 3) || (userNum === 4) || (userNum === 5) ? alert('Весна') :
    (userNum === 6) || (userNum === 7) || (userNum === 8) ? alert('Лето') :
    (userNum === 9) || (userNum === 10) || (userNum === 11) ? alert('Осень') :
    (userNum === 12) || (userNum === 1) || (userNum === 2) ? alert('Зима') :
    alert('Некорректное число')
}