//! Завдання 1  ----
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
//     1
// const doubleNumbers = numbers.map(num => num ** 2);
// console.log(doubleNumbers);
//    2
// const getDoubleNumbers = (arr) => arr.map(el => el ** 2);
// console.log(getDoubleNumbers(numbers));

//* пошук/фільтрація уніальних елементів
// console.log([1, 1, 3, 4, 3].filter((el, i, arr) => arr.indexOf(el) === i));  // [1, 3, 4]
// дано - масив чисел. Видаліть дублікати [1, 2, 2, 3, 4, 4, 5]. Очікуваний результат - [1, 2, 3, 4, 5]:
// console.log([1, 2, 2, 3, 4, 4, 5].filter((el, i, arr) => arr.indexOf(el) === i)); // [1, 2, 3, 4, 5]


//! Завдання 2  ----
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

//    1
// const dataValues = data.flatMap(item => item.values);
// console.log(dataValues);
//    2
// const getDataValues = (arr) => arr.flatMap(el => el.values);
// console.log(getDataValues(data));


//! Завдання 3   ----
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

//    1
// const filterByAge = people.some(item => item.age < 20);
// console.log(filterByAge);
//    2
// const getFilterByAge = (arr, minAge) => arr.some((item) => item.age < minAge);
// console.log(getFilterByAge(people, 20));



//! Завдання 4   ----
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

//    1
// const pairNum = numbers.every(num => num % 2 === 0);
// console.log(pairNum);
//    2
// const getPairNum = (arr) => arr.every(el => el % 2 === 0);
// console.log(getPairNum(numbers));



//! Завдання 5   ----
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

//    1
// const noPair = numbers.find(number => number % 2 !== 0);
// console.log(noPair); // 1
//    2
// const getNoPair = (arr) => {
//     const check = arr.find(item => item % 2 !== 0); 
//    if(check === undefined) {
//      return "Ooops!"
//    }
//     return check;
// };
// console.log(getNoPair([2, 4, 6])); // "Ooops!"
// console.log(getNoPair(numbers)); // 1



//! Завдання 6  ----
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

//    1
// const res = numbersArray.toSorted((a, b) => a - b);
// console.log(res); // [1, 2, 3, 4, 5]
//    2
// const getRes = (arr) => arr.toSorted((a, b) => a - b);
// console.log(getRes(numbersArray)); // [1, 2, 3, 4, 5]
// console.log(getRes([10, 9, 22, 46, 1])); // [1, 9, 10, 22, 46]




//! Завдання 7  ----
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

//    1
// const result = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(result); // ['apple', 'banana', 'orange', 'pear']
//    2
// const getResult = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(getResult(stringArray)); // ['apple', 'banana', 'orange', 'pear']
// console.log(getResult(["lalala", "tototo", "blablabla"])); // ['blablabla', 'lalala', 'tototo']




//! Завдання 8  ----
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

//    1
// const sorted = users.toSorted((a, b) => a.age - b.age);
// console.log(sorted);
//    2
// const getSorted = (arr) => arr.toSorted((a, b) => a.age - b.age);
// console.log(getSorted(users));
// console.log(getSorted([
//     {name: 'Vasya', age: 10},
//     {name: 'Katya', age: 90},
//     {name: 'Jenya', age: 42}
// ]));



//! Завдання 9  ----
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]


//    1
// const userFiltered = user.filter(item => item.age > 20);
// console.log(userFiltered);

//    2
// const getUserFiltered = (arr, minAge) => {
//   return arr.filter((item) => item.age > minAge);
// };

// console.log(getUserFiltered(user, 20));
// console.log(getUserFiltered([
//     {name: 'Vasya', age: 10},
//     {name: 'Katya', age: 90},
//     {name: 'Jenya', age: 42}
// ], 20));



//! Завдання 10  ----
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

//    1
// const sumArr = numbers.reduce((sum, num) => sum + num, 0);
// console.log(sumArr);

//    2
// const getSum = (arr) => arr.reduce((sum, item) => sum + item, 0);
// console.log(getSum(numbers)); // 15
// console.log(getSum([2, 2, 2, 2, 2])); // 10




//! Завдання 11  ----
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка



//* Метод chaining(ланцюжок) - один виклик переходить у наступний, і так далі - тільки якщо кожен метод поавертає this

// class Calculator {
//     constructor() {
//         this.result = 0;
//     }
//     number(value) {
//         this.result = value;
//         return this;
//     }
//     getResult() {
//         return this.result;
//     }
//     add(value) {
//         this.result += value;
//         return this;
//     }
//     substract(value) {
//         this.result -= value;
//         return this;
//     }
//     multiply(value) {
//         this.result *= value;
//         return this;
//     }
//     divide(value) {
//         if(value === 0) {
//             alert("Не можна ділити на 0!")
//         }
//         this.result /= value;
//         return this; 
//     } 
// }

// // Приклад використання:
//  const calc = new Calculator()

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .substract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24



//! Завдання 12  ----
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(obj) {
//     this.#login = obj.login;
//     this.#email = obj.email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const newClient = new Client({
//   login: "Maryna",
//   email: "maryna@gmail.com"
// })
// console.log(newClient);
// newClient.login = "Vasya";
// console.log(newClient);
// newClient.email = "vasya@gmail.com";
// console.log(newClient);

//! Завдання 13  ----
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(obj) {
//     this.name = obj.name;
//     this.age = obj.age;
//     this.gender = obj.gender;
//     this.email = obj.email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email
//     };
//   }
// }


// class Employee extends Person {
//   constructor({ salary, department, ...rest }) {
//     super(rest);
//     this.salary = salary;
//     this.department = department;
//   }

//   getEmployeeDetails(salary, department) {
//     return {
//       salary: this.salary,
//       department: this.department
//     };
//   }
// }

// const iAm = new Employee({
//   name: 'Maryna',
//   age: 40,
//   gender: 'female',
//   email: 'maryna@mail.com',
//   salary: 30000,
//   department: 'embroidery',
// });

// console.log(iAm.getDetails());
// console.log(iAm.getEmployeeDetails());
