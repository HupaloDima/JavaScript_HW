//#8Nmt60ZT
//
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

//
// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.backgroundColor = 'red';
// block.style.color = 'white';
// block.style.fontSize = '20px';
// block.textContent = 'Hello, I am a block!'; // Added text to make it visible
//
// let clonedBlock = block.cloneNode(true); // true means deep clone
//
// document.body.appendChild(block);
// document.body.appendChild(clonedBlock);

//________________________________________________________________________________________________

//#OPLI89c9G
//
// – Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let ul = document.createElement('ul');
// for (const item of array) {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li)
// }
// document.body.appendChild(ul);

//________________________________________________________________________________________________

//#jeBqHV525U5
// 
// – Є масив
// 
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
// // Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.textContent = `${course.title} - ${course.monthDuration} months`;
//     document.body.appendChild(div);
// }

//________________________________________________________________________________________________
//#Kx1xgoKy8
//
// – Є масив
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу,
// // та <p class=’description’> з monthDuration елементу.
// //
// // Завдання робити через цикли.
//
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let heading = document.createElement('h1');
//     heading.classList.add('heading');
//     heading.textContent = course.title;
//     let description = document.createElement('p');
//     description.classList.add('description');
//     description.textContent = `Duration: ${course.monthDuration} months`;
//     div.appendChild(heading);
//     div.appendChild(description);
//     document.body.appendChild(div);
// }



//________________________________________________________________________________________________

//– Є масив coursesArray котрий лежить в arrays.js
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

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
// for (const course of coursesArray) {
//     const card = document.createElement('div');
//
//     const title = document.createElement('h2');
//     title.textContent = course.title;
//     card.appendChild(title);
//
//     const duration = document.createElement('div');
//     duration.textContent = `Duration: ${course.monthDuration} months (${course.hourDuration} hours)`;
//     card.appendChild(duration);
//
//     const modulesTitle = document.createElement('h3');
//     modulesTitle.textContent = 'Modules:';
//     card.appendChild(modulesTitle);
//
//     const modulesList = document.createElement('ul');
//     course.modules.forEach(module => {
//         const moduleItem = document.createElement('li');
//         moduleItem.textContent = module;
//         modulesList.appendChild(moduleItem);
//     });
//
//     card.appendChild(modulesList);
//     document.body.appendChild(card);
// }