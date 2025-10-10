// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mixedArray = [
    42,
    "hello",
    true,
    null,
    undefined,
    {name: "Dima"},
    [1, 2, 3],
    function () {
        return "Hi";
    },
    Symbol("id"),
    new Date()
];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(mixedArray[5]);
console.log(mixedArray[6]);
console.log(mixedArray[7]);
console.log(mixedArray[8]);
console.log(mixedArray[9]);

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let book1 = {title: 'A', pageCount: 100, genre: 'AA'};
let book2 = {title: 'B', pageCount: 200, genre: 'BB'};
let book3 = {title: 'C', pageCount: 300, genre: 'CC'};

// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
let booksDescription = {
    title: '',
    pageCount: 300,
    genre: '',
    authors: [
        {
            name: 'Artur',
            age: 33
        },
        {
            name: 'Denial',
            age: 31
        }
    ]
}
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: "Олег", username: "oleg123", password: "passOleg!"},
    {name: "Марія", username: "maria_k", password: "mariaSecure1"},
    {name: "Іван", username: "ivan_dev", password: "ivDev2025"},
    {name: "Наталя", username: "nata_star", password: "n@talia777"},
    {name: "Діма", username: "dima_master", password: "floorPro88"},
    {name: "Оксана", username: "oksana.art", password: "paintLove22"},
    {name: "Андрій", username: "andriy_coder", password: "codeItUp!"},
    {name: "Світлана", username: "sveta_sun", password: "sunnyDay9"},
    {name: "Тарас", username: "taras_tech", password: "technoTaras"},
    {name: "Юлія", username: "yulia.music", password: "melody_123"}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//– описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let weekTemperatures = [
    {morning: 12, day: 18, evening: 14},
    {morning: 13, day: 20, evening: 15},
    {morning: 11, day: 17, evening: 13},
    {morning: 10, day: 16, evening: 12},
    {morning: 9, day: 15, evening: 11},
    {morning: 8, day: 14, evening: 10},
    {morning: 7, day: 13, evening: 9}
];

// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log("--------------------------------------------------")

let x = 3;


if (x !== 1) {
    console.log("x - вірно");
} else {
    console.log("x - не вірно");
}

if (x !== 0) {
    console.log("x - вірно");
} else {
    console.log("x - не вірно");
}

if (x !== 3) {
    console.log("x - вірно");
} else {
    console.log("x - не вірно");
}

//#3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).
console.log("______________________________")

let time = 47;
if (time >= 0 && time < 15) {
    console.log('1 quoter')
} else if (time >= 15 && time <= 30) {
    console.log('2 quoter')
} else if (time >= 30 && time <= 45) {
    console.log('3 quoter')
} else if (time >= 45 && time <= 60) {
    console.log('4 quoter')
}

// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log("______________________________")

let day = 1;
if (day >= 0 && day <= 10) {
    console.log('1')
} else if (day > 10 && day <= 20) {
    console.log('2 ')
} else if (day > 20 && day <= 31) {
    console.log('3 ')
}

// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).



// let dayNumber = parseInt(prompt("Введіть номер дня тижня (1–7):"));
//
// switch (dayNumber) {
//     case 1:
//         console.log("Monday – план: зустріч з командою, спортзал ввечері");
//         break;
//     case 2:
//         console.log("Tuesday – план: робота над проєктом, покупки");
//         break;
//     case 3:
//         console.log("Wednesday – план: онлайн-курс, прибирання");
//         break;
//     case 4:
//         console.log("Thursday – план: дзвінки, читання технічної статті");
//         break;
//     case 5:
//         console.log("Friday – план: завершення задач, вечір з друзями");
//         break;
//     case 6:
//         console.log("Saturday – план: домашні справи, кулінарні експерименти");
//         break;
//     case 7:
//         console.log("Sunday – план: відпочинок, планування наступного тижня");
//         break;
//     default:
//         console.log("Невірний номер дня. Введіть число від 1 до 7.");
//
// }



// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
// Потрібно знайти та вивести максимальне число з тих двох .
//
// Також потрібно врахувати, коли введені рівні числа.

let firstNumber = 0;
let secondNumber = 0;

if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber) {
    console.log(secondNumber)
} else if (firstNumber === secondNumber) {
    console.log("equal")
}

// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код, який буде присвоювати змінній х значення “default”,
//  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

console.log('______________________________')

let value;
if (!value) {
    value = 'default'
}


// #awLXL6TBzg
//
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
// За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
console.log('______________________________________')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {console.log("Супер - 1")}
if (coursesAndDurationArray[1].monthDuration > 5) {console.log("Супер - 2")}
if (coursesAndDurationArray[2].monthDuration > 5) {console.log("Супер - 3")}
if (coursesAndDurationArray[3].monthDuration > 5) {console.log("Супер - 4")}
if (coursesAndDurationArray[4].monthDuration > 5) {console.log("Супер - 5")}
if (coursesAndDurationArray[5].monthDuration > 5) {console.log("Супер - 6")}