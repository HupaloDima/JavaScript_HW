//#XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(1, 'Vasia', 'Gornickiy', 'Gornickiy@gmail.com', +'380380548568');


//________________________________________________________________________________________
//#2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
let users = [
    new User(1, 'Vasia', 'Gornickiy', 'Gornickiy@gmail.com', +'380380548568'),
    new User(3, 'dfdsfsdf', 'Gornickiy', 'Gornickiy@gmail.com', +'380380548568'),
    new User(2, 'fsdfdsf', 'Gornickiy', 'Gornickiy@gmail.com', +'380380548568'),
    new User(4, 'Vagfdgdffassia', 'Gornickiy', 'Gornickiy@gmail.com', +'380380548568'),
]
// let filteredUsers = users.filter(value => {
//     return value.id % 2 === 0;
// });
// console.log(filteredUsers);
//________________________________________________________________________________________
//#pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedUsers = users.sort((a, b) => a.id - b.id);
// console.log(sortedUsers);
//________________________________________________________________________________________
// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let client = [
    new Client(1, 'Vasia', 'sdsfdsfsdf', 'fsfsdf@gmail.com', +'380380548568', ['tv', 'phone']),
    new Client(2, 'Petia', 'sdsfdsfsdf', 'fsfsdf@gmail.com', +'380380548568', ['tv', 'phone', 'laptop']),
    new Client(3, 'Roma', 'sdsfdsfsdf', 'fsfsdf@gmail.com', +'380380548568', ['tv', 'phone']),
]
// console.log(client);
//________________________________________________________________________________________
//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

// let sortedClients = client.sort((a, b) => a.order.length - b.order.length);
// console.log(sortedClients);
//________________________________________________________________________________________
//#vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume
//     this.drive = () => console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     this.info = function () {
//         for (const item in this) {
//             console.log(item, this[item])
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     this.changeYear= function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// const car = new Car ('dsds', 'dsdsd', 2004, 320, 400);
// console.log(car);


//________________________________________________________________________________________
//#5kla3yMpgp
//
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car


// class Car {
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.model = model
//         this.producer = producer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engineVolume = engineVolume
//
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//
//     info() {
//         for (const item in this) {
//             console.log(item, this[item])
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
// const car = new Car ('dsds', 'dsdsd', 2004, 320, 400);
// console.log(car);

//________________________________________________________________________________________


// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// function Prince(name, age, slipper) {
//     this.name = name;
//     this.age = age;
//     this.slipper = slipper;
// }
//
// let cinderellaList = [
//     new Cinderella('Olia', 22, 36),
//     new Cinderella('Ulia', 28, 38),
//     new Cinderella('Oksana', 33, 35),
//     new Cinderella('Solomia', 25, 33),
//     new Cinderella('Bogdana', 27, 34),
// ]
// const prince = new Prince('Gerald', 33, 35);
//
// const theCinderella = cinderellaList.find(cind => cind.footSize === prince.slipper)
// prince.wife = theCinderella;
//
// console.log(prince);
//__________________________________________________________________________________________________
//#gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             callback(this[i], i, this);
//         }
//     }
// };
//
// [1,22,343].myForEach((el, i) => {
//     console.log(el);
// });
