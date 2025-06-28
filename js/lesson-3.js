//! Завдання 1  ----
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const exp = [];
// numbers.forEach(num => exp.push(num * num));
// console.log(exp);

//! Завдання 2  ----
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const dataValues = data.flatMap(item => item.values);
// console.log(dataValues);

//! Завдання 3   ----
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const filterByAge = (arr, minAge) => {
//   return arr.some((item) => item.age < minAge)
// };
// console.log(filterByAge(people, 20));

//! Завдання 4   ----
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const pairNum = numbers.every(num => num % 2 === 0);
// console.log(pairNum);

//! Завдання 5   ----
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const noPair = numbers.find(item => item % 2 !== 0);
// console.log(noPair); // 1

//! Завдання 6  ----
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const res = numbersArray.toSorted();
// console.log(res); // [1, 2, 3, 4, 5]

//! Завдання 7  ----
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const res = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(res); // ['apple', 'banana', 'orange', 'pear']

//! Завдання 8  ----
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const sorted = users.toSorted((a, b) => a.age - b.age);
// console.log(sorted);

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

// const userFiltered = (arr, minAge) => {
//   return arr.filter((item) => item.age > minAge);
// };

// console.log(userFiltered(user, 20));

//! Завдання 10  ----
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);

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
//     subtract(value) {
//         this.result -= value;
//         return this;
//     }
//     multiply(value) {
//         this.result *= value;
//         return this;
//     }
//     divide(value) {
//         if(value === 0) {
//             return alert("Не можна ділити на 0!")
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
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
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
