//#I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

// function square(aNum, bNum) {
//     return aNum * bNum;
// }
//
// console.log(square(6, 12));

//___________________________________________________________________________________________

//#ETGAxbEn8l
// 
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

// function roundSquare(radius) {
//     return Math.PI * radius * radius;
// }
//
// console.log(roundSquare(5));

//___________________________________________________________________________________________
//#Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

// function squareCilinder(radius, height) {
//     return 2 * Math.PI * radius * height
// }
//
// console.log(squareCilinder(5, 20));

//___________________________________________________________________________________________
//#SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент

// function foobar(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
//
// }

// let arr = [1, 2, 3, 4, 5, 6];
// foobar(arr)
//___________________________________________________________________________________________
//#59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
// function paragraphCreator(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraphCreator("fsdfsdnjfds")
//___________________________________________________________________________________________
//#hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

// function listCreator(text) {
//     document.write(`
//     <Ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`);
//
// }
//
// listCreator('fdffdfdf');

//___________________________________________________________________________________________
//#0Kxco1edSN
// 
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// function foobar(text, counter) {
//     document.write('<ul>')
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
//
// foobar('Fantasy', 100)
// //___________________________________________________________________________________________
//#gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

// function primitiveElements(...args) {
//     document.write('<ul>')
//     for (let arg of args) {
//         document.write('<li>' + arg + '</li>')
//     }
//     document.write('</ul>')
// }
//
// primitiveElements(1, 'dss', true);

// //___________________________________________________________________________________________
//#bovDJDTIjt
// 
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , 
// та виводить їх в документ. Для кожного об’єкту окремий блок.

// function foobar(users) {
//     for (let user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
//
// }
// foobar([{id:1, name:'John', age:33}])
// foobar([{id:2, name:'John', age:36}])
// foobar([{id:3, name:'John', age:23}])

// //___________________________________________________________________________________________
//#pghbnSB
// 
// – створити функцію яка повертає найменьше число з масиву
// function minArrNum(number) {
//     let min = number[0];
//     for (const numberElement of number) {
//         if (numberElement < min) {
//             min = numberElement;
//         }
//     }
//     return min;
// }
//
// console.log(minArrNum([5, 3, 22, 2]));

// //___________________________________________________________________________________________
//#EKRNVPM
//
// – створити функцію sum(arr),
// яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// console.log(sum([3, 4, 1]));

// //___________________________________________________________________________________________
//#kpsbSQCt2Lf
// 
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// 
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//     arr[index2] = temp;
//
//     return arr;
// }
//
// console.log(swap([11,22,33,44],0,1));

// //___________________________________________________________________________________________

//#mkGDenYnNjn.html
//
//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
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



