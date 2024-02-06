//Задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
}));



//Задание 2 
function isPositive(num) {
  return num > 0;
}
function isMale(person) {
  return person.gender === 'male';
}
function filter(arr, callback) {
  const result = []; 

  arr.forEach((el) => {
    if(callback(el)) {
      result.push(el)
    }
  });

  return result
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]



//Задание 3
const timer = (deadline) => {
	const interval = setInterval(() => {
		console.log(new Date());
	}, 3000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, 30 * 1000)
};

timer();



// Задание 4
function delayForSecond(callback) {
  setTimeout(callback, 1000)
}

delayForSecond(function () {
 console.log('Привет, Глеб!');
})



//Задание 5
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))