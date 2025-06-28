//!  Завдання 1
// 1 - отримай body елемент і виведи його в консоль;

const body = document.querySelector("body");
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;

const title = document.querySelector("#title");
console.log(title);
console.log(title.textContent);

// 3 - отримай елемент class="list" і виведи його в консоль;

const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const dataNav = document.querySelector('li[data-topic="navigation"]');
console.log(dataNav);

const dataSearch = document.querySelector('li[data-topic="search"]');
console.log(dataSearch);

const dataProps = document.querySelector('li[data-topic="props"]');
console.log(dataProps);

const dataManipulation = document.querySelector('li[data-topic="manipulation"]');
console.log(dataManipulation);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const topics = document.querySelectorAll('[data-topic]');
const firstDataEl = topics[0];
console.log(firstDataEl);


// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastDataEl = topics[topics.length - 1];
console.log(lastDataEl);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const previousElSibling = title.previousElementSibling;
console.log("Попередній сусідній елемент: ", previousElSibling);
const nextElSibling = title.nextElementSibling;
console.log("Наступний сусідній елемент: ", nextElSibling); 

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const subTitle = document.querySelectorAll("h3");
const cycle = Array.from(subTitle).map(item => console.log(item));

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

subTitle.forEach(item => item.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navLi = document.querySelector('li[data-topic = "navigation"]');
console.log(navLi);


// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navLi.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const paragraph = navLi.querySelector("p");
paragraph.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут 
// data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const element = document.querySelector(`[data-topic="${currentTopic}"]`); // означає: знайди перший елемент, у якого атрибут data-topic дорівнює значенню змінної currentTopic.
console.log(element);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

element.style.backgroundColor = "lightblue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const liCompleted = document.querySelector(".completed");
console.log(liCompleted);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const completedHeading = document.querySelector("h3.completed");
const parentEl = completedHeading.closest("li");
parentEl.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний
//  текст: "Об'єктна модель документа (Document Object Model)"

const newParagraph = document.createElement("p");
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
title.after(newParagraph);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
//  а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево 
// - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, 
// потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const newLi = document.createElement("li");

// const newLiHeading = document.createElement("h3");
// newLiHeading.textContent = "Властивість innerHTML";

// const newLiParagraph = document.createElement("p");
// newLiParagraph.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// newLi.appendChild(newLiHeading);
// newLi.appendChild(newLiParagraph);

// list.appendChild(newLi);


// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const newListItem = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
  </li>
`;

list.insertAdjacentHTML("beforeend", newListItem);

// 20 - очисти список

list.innerHTML = "";




//!  Завдання 2
 // Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;


//!  Завдання 3
 // Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


//!  Завдання 4
 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів. 