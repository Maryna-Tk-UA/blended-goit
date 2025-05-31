//* Методи, вбудовані в браузер
//? Метод Prompt - дозволяє запитати щось у користувача і отримати відповідь (зберегти у змінну)
//?              - завжди повертає рядок -  -- "скасувати" поверне null --
//? Метод Alert - аналог console.log();, замість консолі виводить сповіщення на екран
//? Метод Conform - як і Prompt, запитує про щось користувача, але має лише два варіантв відповіді - так/ні

//!  Завдання 1   done
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = +prompt('Enter number'); // замість Number(prompt('Enter number'))
// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

const number = +prompt('Enter number');
alert(number === 10 ? 'Вірно' : 'Невірно');

const value = confirm('Are you here?');
console.log(value);

//! Завдання 2   done
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const min = Math.floor(Math.random() * (59 - 0) + 0);
if (min < 15) {
  alert(`${min} входить в першу чверть`);
} else if (min < 30) {
  alert(`${min} входить в другу чверть`);
} else if (min < 45) {
  alert(`${min} входить в третю чверть`);
} else {
  alert(`${min} входить в четверту чверть`);
}
console.log(min);

//! Завдання 3   done
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

const num = prompt('Введіть значення від 1 до 4 включно');
let result = '';
switch (num) {
  case '1':
    result = 'зима';
    break;
  case '2':
    result = 'весна';
    break;
  case '3':
    result = 'літо';
    break;
  case '4':
    result = 'осінь';
    break;
  default:
    result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
}
alert(result);
console.log(result);

//! Завдання 4   done
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const clientMinutes = +prompt('Enter minutes');
const hours = Math.floor(clientMinutes / 60);
const minutes = clientMinutes % 60;
const doubleHours = String(hours).padStart(2, 0);
const doubleMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleHours}:${doubleMinutes}`);
// alert(`${doubleHours}:${doubleMinutes}`);

//! Завдання 5   done
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt('Введіть ваш логін');
console.log(login);
if (login === 'Адмін') {
  const password = prompt('Введіть пароль');
  if (password === 'Я головний') {
    alert('Добрий день!');
  } else if (password === null || password === '') {
    alert('Скасовано');
  } else {
    alert('Невірний пароль!');
  }
} else if (login === null || login === '') {
  alert('Скасовано');
} else {
  alert('Я вас не знаю!');
}

//! Завдання 6   done
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
let count = 0;
const b = 20;
while (count <= b) {
  console.log(`Count: ${count}`);
  count += 1;
}

//! Завдання 7   done
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let total = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}
console.log(getNumbers(3, 10));

//! Завдання 8   done
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//     //   } else if (a < b) {
//     //     return a;
//     //   } else {
//     //     return b;
//   }
//   return a < b ? a : b;
// }
// console.log(min(2, 4));
// console.log(min(6, 3));
// console.log(min('2', '5'));

//! Завдання 9   done
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return confirm('Are you adult?');
  //   return answer;
  //   return age >= 18 || confirm('Are you adult?');
}
console.log(isAdult(20));
// console.log(isAdult(10));

//! Завдання 10   done
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
//   if (typeof num !== 'number') {
//     console.log('no number');
//     return;
//   }
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, 'fizzbuzz');
    } else if (i % 3 === 0) {
      console.log(i, 'fizz');
    } else if (i % 5 === 0) {
      console.log(i, 'buzz');
    }
  }
}
fizzBuzz();
console.log(fizzBuzz(15));
