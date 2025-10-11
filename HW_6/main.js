//#dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world'
// ‘lorem ipsum'
// ‘javascript is cool'
//
// console.log("Hello World".length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);
//______________________________________________________________________________________________________________________________
//#8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world', ‘lorem ipsum', ‘javascript is cool'
// let UpperCase = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// for (const string of UpperCase) {
//     console.log(string.toUpperCase());
// }
//______________________________________________________________________________________________________________________________
//#ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD', ‘LOREM IPSUM', ‘JAVASCRIPT IS COOL'
// let LowerCase = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// for (const string of LowerCase) {
//     console.log(string.toLowerCase());
// }
//______________________________________________________________________________________________________________________________
//#0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
//______________________________________________________________________________________________________________________________
//#bfoJuse4ZzP
// – Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//    function stringToArray(str) {
//        return str.split(' ');
//    }
// console.log(stringToArray(str));
//______________________________________________________________________________________________________________________________
//#Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
// const nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let stringsArr = nums.map(num => {
//     return num.toString();
// });
// console.log(stringsArr);
//______________________________________________________________________________________________________________________________
//#5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.

// let nums = [11, 21, 3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

// function sortNums(array, direction) {
//     if (direction === 'ascending') return array.sort((a, b) => a - b);
//     if (direction === 'descending') return array.sort((a, b) => b - a);
// }
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

//______________________________________________________________________________________________________________________________
//#yo06d74c1C
// – є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// //  — відсортувати його за спаданням за monthDuration
//
// let sortedByMonthDuration = coursesAndDurationArray.sort((item1, item2) => {
//     return item1.monthDuration - item2.monthDuration;
// });
//
// console.log(sortedByMonthDuration);
// //  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// const filter = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
//
// console.log(filter);
// //  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let ArrWithId = coursesAndDurationArray.map((item, i) => {
//     item.id = i + 1;
//     return item;
// });
// console.log(ArrWithId);
//______________________________________________________________________________________________________________________________
//#4LJn7zBx
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

//
// let filteredArrWithSass = coursesArray.filter(value => value.modules.includes('sass'));
// let filteredArrWithDocker = coursesArray.filter(value => value.modules.includes('docker'));
//
// console.log(filteredArrWithSass);
// console.log(filteredArrWithDocker);
//______________________________________________________________________________________________________________________________
//#bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const deck = [];
//
// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({
//             cardSuit: suit,
//             value: value,
//             color: suit === 'diamond' || suit === 'heart' ? 'red' : 'black'
//         });
//     }
// }
// const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
// const allSixes = deck.filter(card => card.value === '6');
// const redCards = deck.filter(card => card.color === 'red');
// const diamonds = deck.filter(card => card.cardSuit === 'diamond');
// const highClubs = deck.filter(card =>
//     card.cardSuit === 'clubs' &&
//     ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
// );
// console.log('Піковий туз:', spadeAce);
// console.log('Всі шістки:', allSixes);
// console.log('Червоні карти:', redCards);
// console.log('Буби:', diamonds);
// console.log('Трефи 9+:', highClubs);


//______________________________________________________________________________________________________________________________

//#EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const deck = [];
//
// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({
//             cardSuit: suit,
//             value: value,
//             color: suit === 'diamond' || suit === 'heart' ? 'red' : 'black'
//         });
//     }
// }
// const packedBySuit = deck.reduce((acc, card) => {
//     if (card.cardSuit === 'spade') acc.spades.push(card);
//     if (card.cardSuit === 'diamond') acc.diamonds.push(card);
//     if (card.cardSuit === 'heart') acc.hearts.push(card);
//     if (card.cardSuit === 'clubs') acc.clubs.push(card);
//     return acc;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
