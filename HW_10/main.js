//#sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

// let div = document.createElement('div');
// div.id = 'text';
// div.textContent = 'This is a text element';
// document.body.appendChild(div);
// console.log(div);
//
// let button = document.createElement('button');
// button.textContent = 'Remove Element';
// document.body.appendChild(button);
//
// button.addEventListener('click', function() {
//     let elementToRemove = document.getElementById('text');
//     elementToRemove.remove();
// });

//______________________________________________________________________________________________________________________________
//#j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

// let input = document.createElement('input');
// input.type = 'number';
// input.placeholder = 'Enter your age';
// document.body.appendChild(input);
//
// let button = document.createElement('button');
// button.textContent = 'Submit';
// document.body.appendChild(button);
//
// button.addEventListener('click', function() {
//     let age = input.value;
//     if (age < 18) {
//         alert('You are not old enough!');
//     } else {
//         alert('You are old enough!');
//     }
// });


//______________________________________________________________________________________________________________________________
//#ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

// Створюємо форму
// let form = document.createElement('form');
//
// let nameInput = document.createElement('input');
// let surnameInput = document.createElement('input');
// let ageInput = document.createElement('input');
// let submitBtn = document.createElement('button');
// submitBtn.type = 'button';
// submitBtn.textContent = 'Надіслати';
//
// form.appendChild(nameInput);
// form.appendChild(surnameInput);
// form.appendChild(ageInput);
// form.appendChild(submitBtn);
//
// document.body.appendChild(form);
//
// submitBtn.addEventListener('click', function (e) {
//     const userData = {
//         name : nameInput.value,
//         surnameInput : surnameInput.value,
//         age : ageInput.value
//     }
//     console.log(userData)
//     form.reset()
// })


//______________________________________________________________________________________________________________________________
//#2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


// let counter = localStorage.getItem('pageLoadCounter') || 0;
//
// counter = +(counter) + 1;
//
// localStorage.setItem('pageLoadCounter', counter);
//
// const counterElement = document.createElement('div');
// counterElement.textContent = `Кількість завантажень: ${counter}`;
//
// document.body.appendChild(counterElement);

//______________________________________________________________________________________________________________________________
//#LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const timeString = now.toLocaleString();

    document.getElementById('currentTime').textContent = timeString;

    let sessions = JSON.parse(localStorage.getItem('sessionsList')) || [];

    sessions.push(timeString);

    localStorage.setItem('sessionsList', JSON.stringify(sessions));
});

//______________________________________________________________________________________________________________________________
//#Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const container = document.createElement('div');
container.style.margin = '20px';

const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Введіть вагу в кг';
input.style.padding = '8px';
input.style.marginRight = '10px';

const result = document.createElement('span');
result.textContent = '0 фунтів';

input.addEventListener('input', function() {
    const kg = parseFloat(this.value);
        const pounds = (kg * 2.20462).toFixed(2);
        result.textContent = `${pounds} фунтів`;
});

container.appendChild(input);
container.appendChild(result);
document.body.appendChild(container);

//______________________________________________________________________________________________________________________________

//#RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName, objToAdd) {
//     let array = JSON.parse(localStorage.getItem(arrayName)) || [];
//     array.push(objToAdd);
//     localStorage.setItem(arrayName, JSON.stringify(array));
// }
//______________________________________________________________________________________________________________________________

//#kUSgFqWY
//
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

// const table = document.createElement('table');
// document.body.appendChild(table);
//
// const tableGeneratorForms = document.forms['tableGeneratorForms'];
//
// tableGeneratorForms.onsubmit = function (e) {
//     e.preventDefault();
//     const rows = +this.lines.value
//     const cols = +this.cells.value
//     const content = this.data.value
//     console.log(rows, cols, content);
//
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td');
//             td.textContent = content;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }

//______________________________________________________________________________________________________________________________
//#bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.createElement('div');
    document.body.appendChild(priceElement);

    const now = Date.now();
    const lastUpdate = localStorage.getItem('lastUpdate');
    let price = parseInt(localStorage.getItem('price') || '100');

    if (!lastUpdate || (now - lastUpdate > 10000)) {
        price += 10;
        localStorage.setItem('price', price);
        localStorage.setItem('lastUpdate', now);
    }

    priceElement.textContent = `${price}грн`;
});

//________________________________________________________________________________________________________________________
//#NKB0tgWIK1G
//
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

// const items = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
//
// let page = 0;
// const perPage = 10;
//
// const paginationBox = document.createElement('div');
// document.body.appendChild(paginationBox);
//
// const prevBtn = document.createElement('button');
// prevBtn.textContent = 'Prev';
// const nextBtn = document.createElement('button');
// nextBtn.textContent = 'Next';
// document.body.append(prevBtn, nextBtn);
//
// function render() {
//     paginationBox.innerHTML = '';
//     const start = page * perPage;
//     const end = start + perPage;
//     items.slice(start, end).forEach(item => {
//         const div = document.createElement('div');
//         div.textContent = item;
//         paginationBox.appendChild(div);
//     });
// }
//
// prevBtn.onclick = () => {
//     if (page > 0) {
//         page--;
//         render();
//     }
// };
//
// nextBtn.onclick = () => {
//     if ((page + 1) * perPage < items.length) {
//         page++;
//         render();
//     }
// };
//
// render();
//
//
// nextBtn.onclick = () => {
//     if ((page + 1) * perPage < items.length) {
//         page++;
//         render();
//     }
// };
//
// render();
