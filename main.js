// let num1 = 10;
// let num2 = 12;
// console.log(num1, num2);
// [num1, num2] = [num2, num1];
// console.log(num1, num2);
// var sum = [12, 45, 2, 4, 73, 30];

// sum.sort(function (a, b) {
//   return a - b;
// });
// console.log(sum);

// let a = [1234];
// let b = [1234];

// console.log(a === b);
// b = a;
// console.log(a === b);

// arr = [1, 2, 3, 4, 5, 6, 7]; //Инициализируем массивы
// tempDates = [6, 7, 8];

// tempDates.forEach((elem) => arr.push(elem)); // Добавляем каждый элемент из массива 1 в массив 2
// arr = [...new Set(arr)]; // Оставляем в массиве только уникальные значения

// console.log(arr);

// let a = 10;
// let b = 15;
// let c = 20;
// c = b = a;

// console.log(c);

//  let one = 10.1233;

// one = Number.parseFloat(one);
// one = Number.parseInt(one);

// console.log(one)
// console.log(one);
// one = Number(one.toFixed(4));
//  console.log(one)

// const colors = ['tomato', 'teal', 'orange', 'green', 'blue'];

// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor=color

// const brand = "SamSung";

// let one =brand[0] + brand.slice(1).toLocaleLowerCase();
// console.log(one)

// if (true) {
//   var a = 5;
// }

// console.log(a)

// const mainSalari = 600;
// const maxSalari = 5000;
// const pipol = 3;
// total = 0;

// for (i = 0; i <= pipol; i += 1){
//  const salari = Math.round(Math.random() * (maxSalari - mainSalari) - mainSalari)
  
//   console.log(`Зарплата - ${i} = ${salari}`)
  
//   total += salari;
// }
// console.log(total)

// const min = 5;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1){
//   if (i % 2 !== 0) {
//     console.log('не четные: ', i);
//     continue;
//   }
  
//   console.log('четные: ', i);
  
//   total += i;
// }

//  console.log('total ',total)

// let balance = 10000;
// const payment = 2000;

// console.log(`На вашем балансе ${balance}`)

// if (payment <= balance) {
//   console.log(`Вы совершили покупку`);

//   balance -= payment;
  
//   console.log(` на вашем счету ${balance}`);
  
// }
// let totalSen = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSen >= 100 && totalSen < 1000) {
//   console.log('Бронзовая скидка 2%');
//   discount =0.02
// } else if (totalSen >= 1000 && totalSen < 2000) {
//  console.log("Серебряный партнер 5%");
//  discount = 0.05;
// } else if (totalSen >= 5000 ) {
//  console.log("Золотой партнер 10%");
//  discount = 0.1;
// }

// totalSen -= payment * discount;

// console.log(`Потрачино: ${payment} дискона на: ${discount * 100}%`)

// totalSen += payment
// console.log(`${totalSen}`)

// let num = "I love JS!";
// let sum = num.slice(5);
// console.log(sum)

// let user = prompt("Какое официальное назание Js?");

//  if(user === '') {
//   alert('Напишите ответ!!!');
// }else if (user === 'ECMAScript') {
//   alert("Это правильно!!!");
// } else {
//   alert("Вы незнаете ответ!!!");
// }

// let a = 40;
// let b = 180;
// let result;

// if (a > 100 && b > 100) {

//   if (a > b) {
//     result= a;
//   } else if (a < b) {
//     result = b;
//   }
// } else {
//   result =  b + 512;
// }

// console.log(result)

// let link = "https://mu-site.com/about";

// // if (!link.endsWith('/') && link.includes('mu-site')) {
// // link += '/'
// // }
//  link.endsWith("/") && link.includes("mu-site") ? link+='/' : ''

// console.log(link)

// link = hours = 5;

// if (hours < 17) {
//  console.log("Pending")
// } else if (hours >= 17 && hours <= 24) {
//  console.log("Expires");
// } else {
//  console.log("Overdue")
// }

// hours < 17 ? ""

// let user = prompt("Ведите логин");
// console.log('user', user)


// if (user === "Админ") {
//   const password = prompt('пароль');
//   console.log("password", password);
  
  
// if (password === "Я админ") {
//   console.log("Здраствуйте!!");
// } else {
//   console.log("Не верный пароль!!!");
// }
  
// } else {
// if (!user || user === null) {
//   console.log("Отмена");
// } else {
//   console.log("Я вас незнаю!!!");
// }

// }


// let num = 5.75
// let sum = Math.round(num)
// console.log(sum)

// const friends = ['Ura', "Gru", "Yuli", "Muli"];

// for (let i = 0; i < friends.length - 1; i += 1){
  // friends[i]
//   friends[i] += "/"
// }

// for (let friend of friends) {
//   friend += "-1";
// }

  // console.table(friends)


//----------masiv------///

// const number = [20, 50, 100, 38, 15, 150];
// let max = Math.min(...number)
// console.log(max);
// let total = 0;

// for (let i = 0; i < number.length; i += 1){

//   total += number[i]
 
// }

// console.log("Total:", total);


// for (const value of number) {
//   total += value
// }


// for (let i = 0; i < number.length; i += 1){
// number[i]= Math.round(number[i] * 1.1)
// }

// console.log("Total:", number);

// const number = [20, 50, 100,6,7,9,1, 38, 15, 150];
// let total = 0;

// for (let i = 0; i < number.length; i += 1){
//   if (number[i] % 2 === 0) {
    
//   console.log("Четные:",number[i])
//   } else {
//   console.log("Не четные:", number[i])
//   }
//  total += number[i]
// }

// console.log('Total:', total)

// const numbers = [20, 50, 100,  7, 9,  38, 15, 150];

// let total = numbers[0];


// for (const number of numbers) {

//   if (number < total) {
//    total = number
//   }
// }

// console.log(total)

// const friends = ['Vika', 'I', "Yra", "Veronika"];
// let string = '';

// for (const friend of friends) {
//   string += friend + ','
// }

// string = string.slice(0, string.length - 1);

// friends.join('-$');
// let string = friends.join('-$-')
// const string = 'JaVaScript';
// let letters = string.split("");
// let invertedString = '';

// for (const letter of letters) {

  // if (letter === letter.toLowerCase()) {
  //   console.log("Эта буква в нижнем регистре", letter);
    
  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log("Эта буква в верхнем регистре",  "- " + letter );
    
  //   invertedString += letter.toLowerCase()
  // }
  
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();

// }



// console.log(invertedString);

// const title = 'The lend 10 Hapi And';

// const total = title.toLowerCase().split(' ').join('-')

// console.log(total)

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// let numbers = array1.concat(array2)

// for (const number  of numbers) {
//   total += number
// }

// console.log(total)

// let a= [2, 3];
// let b = [4, 5];



// console.log(String([a, b] = [b, a]))

//----------function-------------//git

// const colculatertotal = function (item) {
  
//   let total = 0;
  
//   for (sum of item) {
  
//    total += sum
//   }

//   return total;
// }

// console.log(colculatertotal([1, 3, 5]));

//  const logins = ["freedom", "food", "hom", "geri"];

// const findLogin = function (allLogin, setLogin) {
  
  // for (const login of allLogin) {
  //   if (login === setLogin) {
  //     return `Пользователь ${setLogin} найден`
  //   }
  // }
  
  // return `Пользователь ${setLogin} не найден`;
  
//   return allLogin.includes(setLogin)
//     ? `Пользователь ${setLogin} найден`
//     : `Пользователь ${setLogin} не найден`;

// }


// console.log(findLogin(logins, 'freedom'));
// console.log(findLogin(logins, 'lint'));
// console.log(findLogin(logins, "hom"));
// console.log(findLogin(logins, "vergun"));


// function fn(string) {
//  console.log(string.includes(1));
// }

// fn('1');

// const number = [2, 3, 5, 7, -2];
// const arr = [1, 2, 3];
// const max = Math.min(...arr);

// console.log(max);

// const user = ('free', 'Fghkk', 'gfrtrt')

// console.log(user.split(' '))

// const add = function (,b,c){
//   console.log(,b,c)
// }

// console.log(add(1,2,3))



// const filterNumber = function (are, ...args) {
  
//   const sum = [];
  
//   for (const element of are) {
//     if (args.includes(element)) {
//       sum.push(element)
//     }
//   }
//   return sum;
// }

// console.log(filterNumber([2, 40, 30, 50], 10, 12, 2, 30));
// console.log(filterNumber([4, 40, 30, 50], 10, 12, 4, 50));
// console.log(filterNumber([200, 40, 35, 50], 10, 12, 200, 35));


// function updateLight(current) {
//   switch (current) {
//     case "green":
//       console.log("yellow");
//       break;
//     case "yellow":
//       console.log("red");
//       break;
//     case "red":
//       console.log("green");
//       break;
//     default:
//       console.log("Sorry");
//   }
// }


//     console.log(updateLight("green"), "yellow");
//     console.log(updateLight("yellow"), "red");
//     console.log(updateLight("red"), "green");


// function hoopCount(n) {
//   return `${n}` > 10 ? '' : '';
// }


// console.log(hoopCount(3), "Great, now move on to tricks");
// console.log(hoopCount(10), "Keep at it until you get it");

// function setAlarm(employed, vacation){
//   if (employed | vacation) {
//    console.log('work')
//   }
// }

// console.log((true, true), false, "Should be false.");

// function doubleChar(str) {
//   return [...str].map((s) => s.repeat(3)).join("");
// }

// console.log(doubleChar("abcd"));

// const english = 'Welcome';
// const czech = 'Vitejte';
// const danish = 'Velkomst';
// const dutch = 'Welkom';
// const estonian = 'Tere tulemast';
// const finnish = 'Tervetuloa';
// const flemish = 'Welgekomen';
// const french = 'Bienvenue';
// const german = 'Willkommen';
// const irish = 'Failte';
// const italian = 'Benvenuto';
// const latvian = 'Gaidits';
// const lithuanian = 'Laukiamas';
// const polish = 'Witamy';
// const spanish = 'Bienvenido';
// const swedish = 'Valkommen';
// const welsh = 'Croeso';

// function greet(language = 'english') {
// 	switch (language) {
//     case "english":
//       console.log(
//         `${english}, "Your function should have returned ${english}. Try again.`
//       );
//       break;
//     case "czech":
//       console.log(
//         `${czech}, "Your function should have returned ${czech}. Try again.`
//       );
//       break;
//     case "danish":
//       console.log(
//         `${danish}, "Your function should have returned ${danish}. Try again.`
//       );
//       break;
//     case "dutch":
//       console.log(
//         `${dutch}, "Your function should have returned ${dutch}. Try again.`
//       );
//       break;
//     case "estonian":
//       console.log(
//         `${estonian}, "Your function should have returned ${estonian}. Try again.`
//       );
//       break;
//     case "finnish":
//       console.log(
//         `${finnish}, "Your function should have returned ${finnish}. Try again.`
//       );
//       break;
//     case "flemish":
//       console.log(
//         `${flemish}, "Your function should have returned ${flemish}. Try again.`
//       );
//       break;
//     case "french":
//       console.log(
//         `${french}, "Your function should have returned ${french}. Try again.`
//       );
//       break;
//     case "german":
//       console.log(
//         `${german}, "Your function should have returned ${german}. Try again.`
//       );
//       break;
//     case "irish":
//       console.log(
//         `${irish}, "Your function should have returned ${irish}. Try again.`
//       );
//       break;
//     case "italian":
//       console.log(
//         `${italian}, "Your function should have returned ${italian}. Try again.`
//       );
//       break;
//     case "latvian":
//       console.log(
//         `${latvian}, "Your function should have returned ${latvian}. Try again.`
//       );
//       break;
//     case "lithuanian":
//       console.log(
//         `${lithuanian}, "Your function should have returned ${lithuanian}. Try again.`
//       );
//       break;
//     case "polish":
//       console.log(
//         `${polish}, "Your function should have returned ${polish}. Try again.`
//       );
//       break;
//     case "spanish":
//       console.log(
//         `${spanish}, "Your function should have returned ${spanish}. Try again.`
//       );
//       break;
//     case "swedish":
//       console.log(
//         `${swedish}, "Your function should have returned ${swedish}. Try again.`
//       );
//       break;
//     case "welsh":
//       console.log(
//         `${welsh}, "Your function should have returned ${welsh}. Try again.`
//       );
//       break;
//     case "IP_ADDRESS_INVALID":
//     case  "IP_ADDRESS_NOT_FOUND":
//     case  "IP_ADDRESS_REQUIRED":
//       console.log(
//         'Welcome, "Your function should have returned Welcome. Try again.'
//       );
//       break;
//     default:
//       console.log("Not " + language + '.');
//   }
// }

// console.log(greet("IP_ADDRESS_NOT_FOUND"));

// const number = [1, 2, 3, 4];
// const ar1 = [...number, 5,6,7,8];
// console.log(number);
// console.log(ar1);

// const music = ['jazz', 'rock', 'pops'];

// console.log(music[music.length-1])



// const string = 'Welcome to Ukraine';
// const strAre = string.split('').reverse().join('');

// console.log(strAre)

// const langs = ['puton', 'js', 'c++', 'haskel', 'php', 'rubi'];

// for (let i = 0; i < langs.length; i += 1){
//   for (let j = i + 1; j > langs.length; j += 1){
    
//     if (langs[i][0] > langs[j][0]) {
//       const tmp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = tmp;
//     }
//   }
// }

// console.log(langs)

// const numbers = [1, 44, 54, 67, 2, 8];

// console.log(Math.min(1, 44, 54, 67, 2, -8))
// let min = numbers[0];
// let max = numbers[0] ;

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
//    if (number > max) {
//      max = number;
//   }
// }

// console.log(min)
//  console.log(max)

// const string = 'Welcome to Ukraine';
// const str = string.split('');
// const strAry = str.reverse().join('');

// for (let i = 0; i < str.length; i += 1){
//  console.log(str[i].split().reverse().join(''))
// }


// console.log(strAry)

// youtube.com/watch?v=Xwo5mVxDql

// const min = 5;
// const max = 13;

// const sum = [2, 5, 6, 8, 10, 20, 23, 44, 31];
// let total = 0;

// for (let i = 0; i < sum.length; i += 1){
//   if (sum[i] % 2 === 0) {
//     console.log("четные: ", sum[i]);
//   }
    
  // } else {
  //   console.log("Не четные: ", sum[i])
  // }
//  total += sum[i];
   
// }

// console.log(total)


// const number = [20, 50, 100,6,7,9,1, 38, 15, 150];
// let total = 0;

// for (let i = 0; i < number.length; i += 1){
//   if (number[i] % 2 === 0) {
    
//   console.log("Четные:",number[i])
//   } else {
//   console.log("Не четные:", number[i])
//   }
//  total += number[i]
// }

// console.log('Total:', total)

// const fn = (arr) =>
//   arr.map((el) => {
//     const item = document.createElement("div");
//     item.textContent = el;

//     return item;
//   });

// console.log(fn(["html", "css", "js", "react"]));

// const a = b || c ? b + c : b - c;
// const a = b || c : b + c ? b - c;
// const a != b || c ? b + c : b - c;

// console.log(a)

// function diamont(arr) {
// const [a,b] = arr.split(' ')

//   return a * b;
// }

// console.log(diamont('8 11'))


// const frut =(array) =>{
// array.forEach((element, index) => {
//   console.log(`${index + 1} - ${element}`)
// });
// }

// frut(['mango', 'fango', 'banan']);
// frut(["inter", "printer", "dog"]);

// function printCountacts(names, phones) {
//   const arreyname = names.split(',');
//   const arreyphone = phones.split(',');
  
//   const printCounter = ((name,index) => {
//    console.log(`${name} - ${arreyphone[index]}`);
//   })
  
//   arreyname.forEach(printCounter)
  
  // arreyname.forEach((name,index) => {
  //   console.log(`${name} - ${arreyphone[index]}`);
  // });

// }

// printCountacts('Jon,Mony,Gren', '7777778,7777777,7777779');

// function findLargestNumber(numbers) {

//   let max = numbers[0];
  
//   for (const counter of numbers) {
//     if (counter > max) {
//       max = counter;
//     }
//   }
//   return max
// }

// const findLargestNumber = (numbers) => Math.min(...numbers)

// console.log(findLargestNumber([2, 5, 10, -1, 45, 94]));
// console.log(findLargestNumber([49, 15, 110, 1, 45, 94]));


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourses = (cours) => {
//   if (courses.includes(cours)) {
//     console.log('Увас уже есть такой курс')
//     return;
//   }
//     courses.push(cours);
// }

// const removeCoures = (cours) => {
//   const indx =courses.indexOf(cours);
//   if (indx === -1) {
//     console.log('Курс с таким именем не найден');
//     return;
//   }
  
//   courses.splice(indx,1)
// }

// const updateCourses = (oldCurses, newCourses) => {
//   const indx = courses.indexOf(oldCurses);
//   if (indx === -1) {
//     console.log("Курс с таким именем  найден");
//     return;
//   }

//   courses.splice(indx, 1, newCourses);
// };

// addCourses('Express');
// console.log(courses);
// addCourses('CSS');

// removeCoures('React');
// console.log(courses)
// removeCoures('Vue');

// updateCourses('Express', 'NestJs');
// console.log(courses);
// updateCourses("Express", 'NestJs');


const username = 'Mango';
const user = 'Jerd';

const poli = {
  usernee777: username,
}


console.log(poli.A)