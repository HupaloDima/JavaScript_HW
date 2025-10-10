//#I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square =  (a, b) => a * b;
// console.log(square(2, 3));

//____________________________________________________________________________________________
//#ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
// let roundSquare = radius => Math.PI * radius * radius;
// console.log(roundSquare(7));
//____________________________________________________________________________________________
//#Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// let squareCilinder = (radius, height) => 2 * Math.PI * radius * height
// console.log(squareCilinder(5, 20));
//____________________________________________________________________________________________
//#SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
// let foobar = array => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// foobar([1, 2, 3]);
//____________________________________________________________________________________________
//#59g0IsA
//
// – створити функцію, яка створює параграф з текстом.
// Текст задати через аргумент
// let paragraphCreator = (text) => document.write(`<p>${text}</p>`);
// paragraphCreator("Hello, World!");
//____________________________________________________________________________________________
//#hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listCreator = text => {
//     document.write(`
//     <Ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`);
// }
// listCreator('sdsdsds')
//____________________________________________________________________________________________
//#0Kxco1edSN
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let foobar= (text, counter)=> {
//     document.write('<ul>')
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// foobar('Fantasy', 100)
//____________________________________________________________________________________________
//#gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let primitiveElements = (...args) => {
//     document.write('<ul>')
//     for (let arg of args) {
//         document.write('<li>' + arg + '</li>')
//     }
//     document.write('</ul>')
// }
//
// primitiveElements(1, 'dss', true);
//____________________________________________________________________________________________
//#bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
// let foobar = (users) =>{
//     for (let user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
//
// }
// foobar([{id:1, name:'John', age:33}])
// foobar([{id:2, name:'John', age:36}])
// foobar([{id:3, name:'John', age:23}])
//____________________________________________________________________________________________
//#pghbnSB
// – створити функцію, яка повертає найменше число з масиву
// let minArrNum = number => {
//     let min = number[0];
//     for (const numberElement of number) {
//         if (numberElement < min) {
//             min = numberElement;
//         }
//     }
//     return min;
// }
// console.log(minArrNum([5, 3, 22, 2]));
//____________________________________________________________________________________________
//#EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum = arr => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(sum([3, 4, 1]));
// ____________________________________________________________________________________________
//#kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index2] = temp;
//
//     return arr;
// }
// console.log(swap([11,22,33,44],0,1));
// ____________________________________________________________________________________________
//#mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             return sumUAH / currencyValues[i].value;
//         }
//     }
//     return null;
// }
//
// console.log(exchange(10000,
//     [
//         {currency: 'USD', value: 25},
//         {currency: 'EUR', value: 42}
//     ], 'USD'));