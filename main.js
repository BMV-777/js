// let num1 = 10;
// let num2 = 12;
// console.log(num1, num2);
// [num1, num2] = [num2, num1];
// console.log(num1, num2);
// var sum = [12, 45, 2, 4, 73, 30];

// const { bind } = require("lodash");

// const { get } = require("lodash");

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

// const username = 'Mango';
// const user = 'Jerd';

// const poli = {
//   usernee777: username,
// }

// console.log(poli.user);

// const frinds = [
//   { name: "Poli", online: false },
//   { name: "Jon", online: true },
//   { name: "Meri", online: false },
//   { name: "Gari", online: true },
// ];

// const getFrensaName = (allName) => {
//   const friendsOnlain = [];

//   for (const friend of allName) {
//     console.log(friend.online);
//     if (!friend.online) {
//       friendsOnlain.push(friend);

//       friend.sergh = 555;
//     }
//   }
//  return friendsOnlain;
// };
// console.table(getFrensaName(frinds));

// const getFrensaName = (allName) => {

//   const names = [];

//   for (const frend of allName) {
//     console.log(frend.name)
//     names.push(frend.name);
//   }
//   return names;
// }
// console.log(getFrensaName(frinds));

// const getFrensaName = (allFrends, allName) => {

//   for (let frend of allFrends) {

//     if (frend.name === allName) {
//       return ` ${allName}: Нашли!!`;
//     }

//   }

//   return `Не нашли :( , ${allName}`;
// }

// console.log(getFrensaName(frends, "Poli"))
// console.log(getFrensaName(frends, "nod"));

// const number = [{ a: 1  },{ b: 2 }, { c:3 } ];

// const [a, b, c] = number;

// console.log(a)

// const playList = {
//   name: 'fresbi',
//   treck: ['frnds', 'ferri', 'geri'],
//   countri: 3,
// };

// const { name, treck, countri, tottal=10 } = playList;

// console.log(tottal)

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// // const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const string = 'Welcome to Ukraine';
// const strAre = string.split('').reverse().join('');

// console.log(strAre)
// const stringName = "javascript";

// const user =stringName.split('');
// console.log(user)

//  const title = 'The lend 10 Hapi And';

// const total = title.toUpperCase().split('')

// console.log(total)

// const auters = {
//   gren: 3,
//   red: 4,
//   blue: 5,
//   white: 1,
// }

// const entri = Object.entries(auters);

// for (const [name,user] of entri) {

//   console.log(name, user)
// }

//

// const cart = {
//   item: [],
//   getItems() {
//     return this.item;
//   },
//   add(product) {
//     for (const items of this.item) {
//       // console.log(items);
//       if (items.name === product.name) {
//         items.quantiti += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantiti: 1,
//     };

//     this.item.push(newProduct);
//   },
//   remove(productName) {
//     const { item } = this;

//     for (let i = 0; i < item.length; i += 1) {
//       const item = this.item[i];

//       if (productName === item.name) {
//         console.log("Наши это продукт:", productName);
//         console.log("индекс:", i);
//         this.item.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.item = [];
//   },
//   countTotalPrice() {
//     const { item } = this;
//     let total = 0;

//     for (const { price, quantiti } of item) {
//       total += price * quantiti;
//     }
//     return total;
//   },
//   increaseQuntity(productName) {
//     for (let i = 0; i < this.item.length; i += 1) {
//       if (productName === this.item[i].name) {
//         productName = this.item[i].quantiti += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (let i = 0; i < this.item.length; i += 1) {
//       if (productName === this.item[i].name) {
//         productName = this.item[i].quantiti -= 1;
//       }
//     }
//   },
// };

// const propName = "value";
// const user = {
//   age: 25,
//   [propName]: "Grin dey",
// };

// console.log(user.value);

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "thml",
//   premium: true,
// };

// user.mode = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(user);

//-------------Object.keys--Object.entries--

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// / const entri = Object.entries(auters);

// for (const [name,user] of entri) {

//   console.log(name, user)
// }

// const key = Object.entries(user);

// for (const [name, value] of key) {
//   console.log(name , value);
// }

// for (let i = 0; i < key.length; i += 1) {
//   console.log(key[i]);
// }

//--------------555555---------//

// let sum = 0;
// const salaries = {
//   // Johan: 100,
//   // Anna: 160,
//   // Pete: 130,
// };

// const values = Object.values(salaries);

// for (let i = 0; i < values.length; i += 1) {
//   sum += values[i];
//   // console.log(sum);
//   // return sum;
// }
// console.log(values);
// console.log("sum:", sum);

// for (const value of values) {
//   sum += value;
// }
// console.log("sum:", sum);

// const strones = [
//   { name: "Изумруд", price: 1300, quntity: 4 },
//   { name: "Бриллиант", price: 1300, quntity: 4 },
//   { name: "Сапфир", price: 400, quntity: 2 },
//   { name: "Щебень", price: 200, quntity: 4 },
// ];

// const calcTotalPrice = (strones, stroneNane) => {
//   for (const stron of strones) {
//     if (stron.name === stroneNane) {
//       return stron.price * stron.quntity;
//     }
//   }
//   return 0;
// };

// // calcTotalPrice(4 );
// console.log(calcTotalPrice(strones, "Сапфир"));
// console.log(calcTotalPrice(strones, "Щебень"));

// console.log(calcTotalPrice(strones, "Иffff"));

//------------forEach-----------//

// const ara = [1, 10, 13];

// for (const sum of ara) {
//   console.log(sum);
// }

// for (let i = 0; i < ara.length; i += 1) {
//   console.log(ara[i]);
// }

// ara.forEach((item) => console.log(item));

//-------------------------------------//

//
// const transition = {
//   id: 0,
//   name: "Meti",
//   fruds: ["apple", "bananas", "solt"],
// };

// const tags = transition.fruds[transition.fruds.length - 1];

// console.log(tags);

// let a = 2;
// let b = 5;
// console.log(a, b);
// let tem = a;
// a = b;
// b = tem;

// console.log(a, b);

// let x = 2;
// let y = 5;
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);

//------------Object---------//

// const transformUserName = ({ ferstName, lastName, ...user }) => {
//   return {
//     ...user,
//     fullName: `${ferstName} ${lastName}`,
//   };
// };

// console.log(
//   transformUserName({
//     id: 1,
//     ferstName: "Min",
//     lastName: "Poli",
//     email: "borenkovmv@gmail.com",
//     friendConter: 10,
//   })
// );

// console.log(
//   transformUserName({
//     id: 2,
//     ferstName: "Djin",
//     lastName: "Cross",
//     email: "borenkovmv@gmail.com",
//     friendConter: 20,
//   })
// );

//----------------callback  --------------//

// const doMath = (a, b, callback) => {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = (x, y) => {
//   return x + y;
// };

// const minus = (x, y) => {
//   return x - y;
// };

// doMath(5, 2, add);
// doMath(5, 2, function (x, y) {
//   return x - y;
// });
// var fn;
// function foo() {
//   var a = 2;

//   const baz = () => {
//     console.log(a);
//   };
//   fn = baz;
// }

// const bar = (fn) => {
//   return fn();
// };
// foo();
// bar();

// function wait(message) {
//   setInterval(() => {
//     console.log(message);
//   }, 1000);
// }

// wait("hi");

// let a = 2;
// (IIFF = () => {
//   console.log(a);
// })();

// for (let i = 0; i <= 5; i += 1) {
//   (() => {
//     let j = i;
//     setTimeout(() => {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

// const doCool = () => {
//   let something = "cool";
//   let another = [1, 2, 3];

//   function doSomething() {
//     console.log(something);
//   }
//   const doAnother = () => {
//     console.log(another.join(" ! "));
//   };
//   return {
//     doSomething: doSomething,
//     doAnother: doAnother,
//   };
// };

// const foo = doCool();
// foo.doSomething();
// foo.doAnother();

// var foo = (function CoolModule(id) {
//   function change() {
//     // modifying the public API
//     publicAPI.identify = identify2;
//   }

//   function identify1() {
//     console.log(id);
//   }

//   function identify2() {
//     console.log(id.toUpperCase());
//   }

//   var publicAPI = {
//     change: change,
//     identify: identify1,
//   };

//   return publicAPI;
// })("foo module");

// foo.identify(); // foo module
// // foo.change();
// foo.identify();
// const add = () => {
//   console.log("Кликнул раз!!");
// };

// const bottonRef = document.querySelector(".js-button");
// bottonRef.addEventListener("click", add);

// const filter = (array, test) => {
//   const arrayMasiv = [];

//   for (const el of array) {
//     const pass = test(el);
//     if (pass) {
//       arrayMasiv.push(el);
//     }
//   }
//   return arrayMasiv;
// };

// const callback = (value) => {
//   return value <= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback);

// const frut = [
//   { name: "banan", quantiti: 100, isOnlain: false },
//   { name: "aple", quantiti: 150, isOnlain: true },
//   { name: "duni", quantiti: 200, isOnlain: false },
//   { name: "cheri", quantiti: 175, isOnlain: true },
// ];

// const frutTotal = (frutes) => {
//   return frutes.isOnlain === false;
// };

// const r1 = filter(frut, frutTotal);

// console.log(r1);

//----------замыкание---------//

// const myShef = (name) => {
//   const myBludo = (dash) => {
//     console.log(`${name} готовит ${dash}`);
//   };
//   return myBludo;
// };

// const mango = myShef("Mango");

// mango("котлеты");

// const geri = myShef("Geri");

// geri("smuzi");

// const rounder = (plase) => {
//   return function (number) {
//     return Number(number.toFixed(plase));
//   };
// };

// const r1 = rounder(2);
// const r2 = rounder(3);

// console.log(r1(2.4444));
// console.log(r2(5.4444));

// const praisMani = (eneble, salerius) => {
//   let salary = salerius;

//   const add = (amount) => {
//     salary += amount;
//   };

//   return {
//     laur(amount) {
//       if (amount > 1000) {
//         console.log("Ты офигел?");
//       }
//       add(amount);
//     },
//     minus(amount) {
//       salary -= amount;
//     },
//     getCurent() {
//       console.log(`Тикущая зарплата  ${eneble} - ${salary}`);
//     },
//   };
// };

// const meneger = praisMani("Mango", 5000);

// meneger.getCurent();
// meneger.minus(1000);

// meneger.getCurent();

// meneger.laur(1000000);
// meneger.getCurent();
// const total = title.toLowerCase().split(" ").join("-");
// const strin = "Hello I am is frontend";

// const user = strin.split("").reverse().join("");
// console.log(user);

// const showThis = () => {
//   console.log("thus in showThis: ", this);
// };

// // showThis();

// const user = { name: "Mango" };
// user.context = showThis;

// user.context();
// console.log(user);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const numCjen = numbers.filter((num) => num <= 3);
// console.log(numCjen);

// const User = (...name) => {
//   // this.name = name;
//   console.log(...name);
// };

// console.log(User("Mango"));

// const frutis = frut.forEach((number, index, array) => {
//   console.log(number.name);
// });

// console.table(frutis);
// const sorting = frut
//   .filter((num) => num.isOnlain)
//   .sort((sorName, sortQuntiti) => sorName.quantiti + sortQuntiti.quantiti);

// console.table(sorting);

// const number = [1, 2, 3, 4, 5];
// const user = {
//   name: "mango",
//   fullname: "Feri",
//   age: 20,
// };

// const intres = Object.entries(user);

// for (const [name, value] of intres) {
//   console.log(name + ":", value);
// }
// const numbe = number.forEach((num) => console.log(num));

// for (let i = 0; i < number.length; i += 1) {
//   console.log(i);
// }

// for (const num of number) {
//   console.log(num);
// }

//-------------- map--------//

// const igrock = "play-3";

// const num = frut.map((nums) => {
//   console.log(nums);
//   if (igrock === nums.id) {
//     console.log("Мы нашли его!!");

//     return {
//       ...nums,
//       quantiti: nums.quantiti + 100,
//     };
//   }
// });
// const num = frut.map((nums) =>
//   igrock === nums.id ? { ...nums, quantiti: nums.quantiti + 100 } : nums
// );
// console.table(num);

//-------------------find && fillter ------------//

// const frut = [
//   { id: "play-1", name: "banan", quantiti: 100, isOnlain: false },
//   { id: "play-2", name: "aple", quantiti: 150, isOnlain: true },
//   { id: "play-3", name: "duni", quantiti: 200, isOnlain: false },
//   { id: "play-4", name: "cheri", quantiti: 175, isOnlain: true },
// ];

// console.table(frut);

// const igrock = "play-3";

// const filterNumber = number.find((num) => num === 300);
// const filterNumber = number.filter((num) => num < 5 || num > 30);

// const filterNumber = frut.filter((num) => !num.isOnlain);

// const numbers = [1, 2, 3, 4, 10];

// const numbersTotal = numbers.filter((num) => num > 4);
// let total = 0;

// for (const el of numbers) {
//   total += el;
// }

// console.log(total);

//-------------reduce --------------//

// const numbers = [5, 10, 15, 20, 25];

// const reduse = numbers.reduce((acc, number) => {
//   console.log("acc", acc);
//   console.log("number", number);
//   return acc + number;
// }, 0);
// console.log(reduse);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const total = Object.values(salary).reduce((acc, saly) => {
//   return acc + saly;
// }, 0);

// console.log(total);

// const totalfrut = frut.reduce((total, quntiti) => {
//   return total + quntiti.quntiti * quntiti.price;
// }, 0);

// console.log(totalfrut);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "node.js"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 3, tags: ["js", "node.js", "css"] },
//   { id: "003", likes: 4, tags: ["js", "node.js", "react"] },
// ];

// const reduser = tweets.reduce((acc, next) => {
//   return [...acc, ...next.tags];
// }, []);

// const totalTags = reduser.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(totalTags);

//-------делет вместе map && flat   flatMapp   разглаживет масив----//

// const teetsTags = tweets.flatMap((t) => t.tags);
// console.log(teetsTags);

//-------------------------------//

// const totalTweets = tweets.reduce((tag, grup) => {
//   return [...tag, ...grup.tags];
// }, []);

// console.log(totalTweets);

// const totalSar = totalTweets.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;
//   return acc;
// }, {});
// const totalSar = totalTweets.reduce((acc, tag) => {
//   console.log(acc);

//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(totalSar);

// const user = {
//   name: "mango",
// };

// const key = "name";
// console.log(user[key]);

//----------------sort----------------//

// const numbers = [1, 5, 7, 9, 8, 2, 3];

// const numberSort = numbers.sort((sort, nextSort) => {
//   return sort - nextSort;
// });
// const numberRest = [...numbers].sort((sort, nextSprt) => {
//   return nextSprt - sort;
// });
// const numberRes = [...numbers].sort((a, b) => a - b);
// console.log(numberRest);
// console.log(numberRes);

// const frut = [
//   { label: "banan", quntiti: 50, price: 2, isOnlain: false },
//   { label: "duni", quntiti: 50, price: 1, isOnlain: true },
//   { label: "apple", quntiti: 50, price: 3, isOnlain: false },
//   { label: "cheri", quntiti: 50, price: 5, isOnlain: true },
// ];

// const sortFrut = frut
//   .filter((frutis) => !frutis.isOnlain)
//   .sort((a, b) => a.price - b.price);
// console.table(sortFrut);
// const soertFrut = [...frut].sort((sort, nextSort) => {
//   const result = sort.label[0] > nextSort.label[0];
//   if (result) {
//     return 1;
//   }
//   if (!result) {
//     return -1;
//   }
// });

// console.log(soertFrut);

//--------------разглаживаем масив-----------//

// const numbers = [1, [2, [4]], [[3], 5], [[[9]]]];

// console.log(numbers.flat(3));

// console.log(_.flattenDeep(numbers));

//---------------------------------//

// function duplicate(n) {
//   return [[n], [n]];
// }

// // _.flatMap(numbers, duplicate);
// console.log(_.flatMap([[1], [2]], duplicate));

// const user = {
//   name: "mango",
//   floer: {
//     city: "Lviv",
//   },
// };

// console.log(user?.floer?.city);

// console.log(_.flat([1, 2], [3, 4]));

// const numbers = [10, 10, 10, 10];

// const totalNumbers = numbers.reduce((num, sum) => {
//   return num + sum;
// }, 0);

// console.log(totalNumbers);

// const frut = [
//   { label: "banan", quntiti: 150, price: 2, isOnlain: false },
//   { label: "duni", quntiti: 50, price: 1, isOnlain: true },
//   { label: "apple", quntiti: 250, price: 3, isOnlain: false },
//   { label: "cheri", quntiti: 100, price: 5, isOnlain: true },
// ];

// console.log(_.flatMap(frut, (play) => play.isOnlain));

// const user = frut.filter((a) => a.price > 2).sort((a, b) => b.price - a.price );
// console.log(user);
// const filterNumber = number.find((num) => num === 300);
// const filterNumber = number.filter((num) => num < 5 || num > 30);

// const filterNumber = frut.filter((num) => !num.isOnlain);

// const logProduct = (product) => {
//   console.log(product);
// };

// const callbac = (newproduct, callback) => {
//   callback({
//     id: Date.now(),
//     ...newproduct,
//   });
// const newProduct = {
//   id: Date.now(),
//   ...newproduct,
// };
// collback(newProduct);
// };

// const logTotalPrice = (product) => {
//   return console.log((product = product.price * product.quntity));
// };

// logProduct({ name: "apple", price: 30, quntity: 3 });
// logTotalPrice({ name: "apple", price: 30, quntity: 3 }, logTotalPrice);
// callbac({ name: "apple", price: 30, quntity: 3 }, logProduct);

//----------------------------//

// const each = (array, callback) => {
//   const newArray = [];

//   for (const value of array) {
//     // const newValue = callback(value);

//     newArray.push(callback(value));
//   }
//   return newArray;
// };

// console.log(
//   each([2, 4, 6, 8], function (value) {
//     return value * 2;
//   })
// );

// console.log(each([2, 4, 6, 8], (value) => value - 10));

//---------------------//

// const logUser = (items) => {
//   items.forEach((item, indx) => {
//     console.log(`${indx + 1} - ${item}`);
//   });
// };

// logUser(["mango", "Grendy", "Mark"]);
// logUser(["apple", "duni", "bananas"]);

// const printContctsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phonesList = phones.split(",");

//   nameList.forEach((name, indx) => console.log(`${name}: ${phonesList[indx]}`));
// };

// printContctsInfo({
//   names: "Geri, GEri, Meri, Frinds",
//   phones: "89052311120, 8908889999, 999999999,777777777 ",
// });

// const calculateAveragel = (...array) => {
//   let total = 0;

//   array.forEach((value) => {
//     total += value;
//   });

// for (let i = 0; i < array.length; i += 1) {
//   total += array[i];
// }

//   return total / array.length;
// };

// console.log(calculateAveragel(1, 2, 3, 4)); //2.5
// console.log(calculateAveragel(14, 8, 2)); //8
// console.log(calculateAveragel(27, 43, 2, 8, 36)); //23/2

// const fn = (...numbers) => {
// let total = [];
// const numbers = [1, 2, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     console.log("Четные: ", numbers[i]);
//   } else if (numbers[i] % 2 !== 0) {
//     console.log("не Четные: ", numbers[i]);
//   }
// }

// return total;
// };

// console.log(fn([1, 2, 4, 6, 7, 8]));

// const fn = (item) => {
//   const newArray = [];

//   item.forEach((value) => {
//     if (value % 2 !== 0) {
//       newArray.push(value * 2);
//     }
//   });
//   return newArray;
// };

// const fn1 = (items) =>
//   items.reduce((acc, item) => (item % 2 === 0 ? [...acc, item * 2] : acc), []);

// console.log(fn([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(fn1([10, 13, 12]));

// const pizzaPalsce = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSechin, onErorre) {
//     if (this.pizzas.includes(pizzaName)) {
//       onSechin(pizzaName);
//     } else {
//       onErorre(pizzaName);
//     }
//   },
// };

// function makePizza(pizzaName) {
//   console.log(`Yor order id accepted. Cooking pizza ${pizzaName}`);
// }

// function onOrderErorr(error) {
//   console.log(`Erorr! ${error}`);
// }

// pizzaPalsce.order("Smokes", makePizza, onOrderErorr);
// pizzaPalsce.order("Four meats", makePizza, onOrderErorr);
// pizzaPalsce.order("Big Mike", makePizza, onOrderErorr);
// pizzaPalsce.order("Vienna", makePizza, onOrderErorr);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "node.js"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 3, tags: ["js", "node.js", "css"] },
//   { id: "003", likes: 4, tags: ["js", "node.js", "react"] },
// ];

// const getName = tweets.reduce((tweet, item) => {
//   // tweet.push(...item.tags);
//   return [...tweet, ...item.tags];
// }, []);

// const user = getName.reduce((acc, tags) => {
//   return {
//     ...acc,
//     [tags]: acc[tags] ? acc[tags] + 1 : 1,
//   };
// }, {});

// const fatTags = (acc, { tags }) => [...acc, ...tags];

// const result = tweets.reduce(fatTags, []).reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(result);

// var obj = {
//   count: 0,
//   cool: function () {
//     var self = this;

//     if (self.count < 1) {
//       setTimeout(function timer() {
//         self.count++;
//         console.log("красива?");
//       }, 100);
//     }
//   },
// };
// obj.cool();

// var obj = {
//   count: 0,
//   cool: function () {
//     if (this.count < 1) {
//       setTimeout(
//         function timer() {
//           this.count++;
//           console.log("ёщё красивее?");
//         }.bind(this),
//         100
//       );
//     }
//   },
// };
// obj.cool();

//---------------Пирамида с чисел-------------//

// for (var i = 1; i <= 29; ++i) {
//   for (var j = 1; j <= i; ++j) document.write(" " + j + " ");
//   document.write("<br>");
// }

//-----------------------------------//
// import { cars } from "./car.js";
// console.log(...cars);

// const detModels = (cars) => cars.map(({ model }) => model);

// console.table(detModels(cars));

// const filterByPrice = (cars, threshold) =>
//   cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * threshold,
//   }));
// console.table(filterByPrice(cars, 0.2));
// console.table(filterByPrice(cars, 0.4));

// const filterByPrice = (cars, threshold) => {
//   return cars
//     .filter((car) => car.price >= threshold)
//     .sort((a, b) => b.price - a.price);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// const filterByPrice = (cars) => cars.filter((car) => !car.onSale);

// console.table(filterByPrice(cars));
// console.table(filterByPrice(cars));

// const filterByPrice = (cars, type) => cars.filter((car) => car.type == type);

// console.table(filterByPrice(cars, "suv"));
// console.table(filterByPrice(cars, "sedan"));

// const filterByPrice = (cars, model) =>
//   cars.find(({ model: carModal }) => carModal === model);

// console.log(filterByPrice(cars, "lanos"));
// console.table(filterByPrice(cars, "crv"));

// const sortByPrice = (cars) =>
//   [...cars].sort((car, ind) => car.amount - ind.amount);

// console.table(sortByPrice(cars));
// console.table(sortByPrice(cars));

// const sortByPrice1 = (cars) =>
//   [...cars].sort((car, ind) => ind.amount - car.amount);

// console.table(sortByPrice1(cars));
// console.table(sortByPrice1(cars));

//---------------localeCompare-------------//

// const sortByPrice = (cars, order) =>
//   [...cars].sort((car1, car2) =>
//     order === "desc"
//       ? car2.model.localeCompare(car1.model)
//       : car1.model.localeCompare(car2.model)
//   );

// console.table(sortByPrice(cars, "abc"));
// console.table(sortByPrice(cars, "desc"));

// const reduceByPrice = (cars) => cars.reduce((car, ind) => car + ind.amount, 0);

// console.log(reduceByPrice(cars));

//  const getName = tweets.reduce((tweet, item) => {
//   // tweet.push(...item.tags);
//   return [...tweet, ...item.tags];
// }, []);

// const getModelsOnSele = (cars) => {
//   return cars.reduce(
//     (acc, { onSale, model }) => (!onSale ? [...acc, model] : acc),
//     []
//   );
// return cars.filter((item) => !item.onSale).map(({ model }) => model);
// .sort((car1, car2) => car2.price - car1.price);
// .reduce((acc, idx) => acc + idx.amount, 0)
// .filter((item) => item.onSale)
// .sort((car1, car2) => car2.price - car1.price)
// };

// console.table(getModelsOnSele(cars));

// const totalSalaryPrise = (cars) =>
//   cars
//     .filter(({ onSale }) => onSale)
//     .sort((car1, car2) => car2.price - car1.price);
// // .map(({ model }) => model);

// console.table(totalSalaryPrise(cars));

//-------------реверс слов в двух экзепляре ----------//

// const str = "Hello I veri god...";
// const user = str.split("").reverse().join("").split(" ").reverse().join(" ");

// console.log(user);
// const world = (text) =>
//   text
//     .split(" ")
//     .map((world) => world.split("").reverse().join(""))
//     .join(" ");

// const world1 = (text) =>
//   text.split("").reverse().join("").split(" ").reverse().join(" ");

// console.log(world(str));
// console.log(world1(str));

//-----------------this--------------------------//

// const myshout = function (color) {
//   console.log("this=>", this);
//   this.color = color;
// };

// const hat = {
//   color: "red",
// };

// myshout.call(hat, "blue");
// myshout.apply(hat, ["teal"]);

// console.log(hat);
// console.log(hat);

// (function () {
//   console.log("hello");
// })();

// decrementBtn.textContent = "23233";
// const counter = {
//   value: 0,
//   increment() {
//     console.log("this => ", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("this =>", this);
//     this.value -= 1;
//   },
// };

// const incrementBtn = document.querySelector(".js-increment");
// const dicrementBtn = document.querySelector(".js-decrement");
// const valueTotal = document.querySelector(".js-value");

// incrementBtn.addEventListener("click", function () {
//   counter.increment();

//   valueTotal.textContent = counter.value;
// });

// dicrementBtn.addEventListener("click", function () {
//   counter.decrement();

//   valueTotal.textContent = counter.value;
// });

// const incrementBtn = document.querySelector(".js-increment");
// const decrementBtn = document.querySelector(".js-decrement");
// const valueTotal = document.querySelector(".js-value");

// incrementBtn.addEventListener("click", function () {
//   counter.increment();
//   valueTotal.textContent = counter.value;
// });

// const remuve = () => {
//   counter.decrement();
//   valueTotal.textContent = counter.value;
// };

// decrementBtn.addEventListener("click", remuve);

//--------Object.create------------//

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);

// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 4;

// console.log("dcdc", objA);

// const Car = function ({ name, model, price } = {}) {
//   (this.name = name), (this.model = model), (this.price = price);
// };

// Car.prototype.syHi = function () {
//   console.log("Hello");
// };

// Car.prototype.chengPrice = function (newprice) {
//   this.price = this.price - newprice * 0.2;
// };

// console.log(Car.prototype);

// const car1 = new Car({
//   name: "BMV",
//   model: "X-7",
//   price: 12000,
// });

// console.log(car1);
// car1.syHi("dfdsf");
// car1.chengPrice(12000);
// console.log(car1);

// const user = {
//   name: "mango",
//   age: 33,
// };

// const mango = Object.keys(user);
// for (const el of mango) {
//   console.log(el);
// }

// for (const [name, age] of mango) {
//   console.log(name, age);
// }

// mango.forEach((item) => console.log(item.toString()));

// console.log(mango);

// class Car {
//   static description = "Hello my car!!";

//   static info(obj) {
//     console.log("🚀 ~ file: main.js:2025 ~ Car ~ info ~ info:", obj);
//   }

//   #test = "test";

//   pricemoFrencomani = 555;

//   constructor({ name, model, price } = {}) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//     this.pricemoFrencomani = this.pricemoFrencomani;
//   }

//   modelName(newModel) {
//     this.model = newModel;
//   }

//   priceTotal(newPrice) {
//     this.price = this.price - newPrice * 0.2;
//   }
// }

// const modelCar = new Car({
//   name: "BMV",
//   model: "Q-7",
//   price: 21000,
// });
// modelCar.priceTotal(21000);
// console.log(modelCar);

// Car.info(modelCar);
// console.log(Car.info(modelCar));

// class Hero {
//   constructor({ name = "hero", xp = 0 } = 0) {
//     this.name = name;
//     this.xp = xp;
//   }

//   getXp(amout) {
//     console.log(`${this.name} получакт ${amout}`);
//     this.xp += amout;
//   }
// }

// class Meri extends Hero {
//   constructor({ spired, ...restTols }) {
//     super({ ...restTols });

//     this.spired = spired;
//   }

//   atacc() {
//     console.log(`${this.name} отакует ${this.spired}`);
//   }
// }

// const mango = new Meri({ name: "Gringo", xp: 1000, spired: "Aлибардо" });

// mango.getXp(2000);
// mango.atacc();

// console.log(mango);

// class Klaus extends Hero {
//   constructor({ splitt = [], ...restPrice } = {}) {
//     super({ ...restPrice });

//     this.splitt = splitt;
//   }

//   cast() {
//     console.log(`${this.name} кастует`);
//   }
// }

// const poli = new Klaus({ name: "Tor", xp: 500, splitt: ["freebol"] });
// console.log(poli);

// function saHi(a, b) {
//   console.log(this, a + b);
// }

// const mango = { name: "Mango1" };
// const man1 = { name: "Mango2" };
// const obj = { name: "Mango3" };

// const f1 = saHi.call(mango, 1, 1);
// const f2 = saHi.apply(mango, [1, 1]);
// const f3 = saHi.bind(mango, 1, 1);

// setTimeout(f1, 3000);
// setTimeout(f2, 3000);
// setTimeout(f3, 3000);

// saHi.call(man1, 1, 1);
// saHi.apply(obj, [1, 1]);
// console.log(saHi.apply(man2, 2, 2));

// function sayHello(a, b) {
//   console.log(this, a + b);
// }

// const obj1 = { name: "Mango" };
// const obj2 = { name: "Mango2" };

// function fn1(count, callback) {
//   return function () {
//     callback.apply(count, arguments);
//   };
// }

// const fn = fn1(obj1, sayHello);

// fn(1, 1);

// setTimeout(fn, 2000);

// sayHello.call(obj1);
// sayHello.call(obj2);

// const sayHi = function (a, b) {
//   console.log(this, a + b);
// };

// const obj = { name: "Mango" };

// // sayHi.call(obj);

// function f1(count, callback) {
//   return function () {
//     callback.apply(count, arguments);
//   };
// }

// const user = f1(obj, sayHi);
// user(1, 1);

// const chopShop = {
//   stones: [
//     { name: "Enerals", price: 1300, quantity: 4 },
//     { name: "Dimand", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Enerals")); //5200
// console.log(chopShop.calcTotalPrice("Dimand")); //8100
// console.log(chopShop.calcTotalPrice("Sapphire")); //9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// const calculator = {
//   reand(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator);
// calculator.reand(10, 2);
// console.log(calculator.add());
// console.log(calculator.mult());

// const arry = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
// console.log(JSON.stringify(arry));
// const ensert = Array.from(new Set(arry));

// const arr1 = arry.filter((value, indx, count) => count.indexOf(value) === indx);

// console.log(ensert);
// console.log(arr1);

// class User {
//   constructor({
//     email: name = "Grin",
//     age = 0,
//     numberOfPost = 0,
//     topics = [],
//   } = {}) {
//     (this.email = name),
//       (this.age = age),
//       (this.numberOfPost = numberOfPost),
//       (this.topics = topics);
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPost} topics ${this.topics}`;
//   }
//   updatePostCount(value) {
//     return (this.numberOfPost += value);
//   }
// }

// const mango = new User({
//   name: "borenkovmv@gmai.com",
//   age: 24,
//   numberOfPost: 20,
//   // topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// class Storage {
//   // #name = [];
//   constructor(items = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItems(addProduct) {
//     this.items = [...this.items, addProduct];
//   }

//   removeItems(removeProduct) {
//     this.items = this.items.filter((item) => item !== removeProduct);
//   }
// }

// const storage = new Storage(["apple", "duni", "vinograd", "arbuz"]);

// console.log(storage);

// // const product = storage.getItems();

// console.table(storage.getItems());

// storage.addItems("Hineme");

// console.table(storage.getItems());

// storage.removeItems("Hineme");
// console.table(storage.getItems());

// class User {
//   #login;
//   #email;
//   constructor({ login = "ведите login", email = "@mail" } = {}) {
//     (this.#login = login), (this.#email = email);
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     return (this.#login = value);
//   }
//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     return (this.#email = value);
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@gmail.com",
// });

// console.log(mango.login);
// // console.log(mahgo.getEmail("dfff"));
// mango.login = "hdjdkdkd";
// console.log(mango.login);

// class Notes {
//   static Priority = {
//     LOW: "Low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items = [...this.items, note];
//   }

//   removeNote(text) {
//     this.items = this.items.filter((item) => item.text !== text);
//   }

//   updatePriority(text, priority) {
//     this.items = this.items.map((item) =>
//       item.text === text ? { ...item, priority } : item
//     );
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//   text: "Моя первая заметка",
//   priority: Notes.Priority.LOW,
// });
// myNotes.addNote({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });

// console.log(myNotes.items);

// myNotes.removeNote("Моя первая заметка");

// console.log(myNotes.items);

// myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// function feruchi(str) {
//   const result = str.split("").reduce((acc, later) => {
//     return {
//       ...acc,
//       [later]: acc[later] ? acc[later] + 1 : 1,
//     };
//   }, {});

//   return result;
// }

// console.log(feruchi("aaccbbnnyyrrraa"));

// (function () {
//   console.log("hi");
// })();
// setInterval(() => {
//   (function () {
//     console.log("hi");
//   })();
// }, 1000);

// const plaList = [
//   { id: 1, name: "Korn", tag: ["CSS", "HTML"] },
//   { id: 1, name: "Korn", tag: ["CSS", "Ql", "Java"] },
//   { id: 1, name: "Korn", tag: ["CSS", "HTML", "JS", "React"] },
//   { id: 1, name: "Korn", tag: ["React", "HTML", "Ql"] },
// ];

// const tagis = plaList.reduce((acc, later) => {
//   return [...acc, ...later.tag];
// }, []);

// const result = tagis.reduce((acc, next) => {
//   return {
//     ...acc,
//     [next]: acc[next] ? acc[next] + 1 : 1,
//   };
// }, {});

// console.log(result);

// for (var i = 1; i < 5; i += 1) {
//   (function fn(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 100);
//   })(i);
// }

// const title = document.createElement("h1");
// title.classList.add("list_item");
// title.textContent = "Hello Wold";

// document.body.appendChild(title);

// const navElim = document.createElement("li");
// navElim.classList.add("nav-list");

// // console.log(navElim);

// const navLink = document.createElement("a");
// navLink.classList.add("nav-linc_element");
// navLink.textContent = "Личный кабинет";
// navLink.href = "./profale";
// //  console.log(navLink);

// navElim.appendChild(navLink);
// console.log(navElim);

// const list = document.querySelector(".nav-link");

// list.insertBefore(navElim, list.firstElementChild);

// // list.appendChild(navElim);

// const images = document.createElement("img");
// images.src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS8f-JWBT33SWjrY0WBmvT4DvzM_0-m7rTg&usqp=CAU";
// images.alt = "foto";
// images.width = 400;

// list.insertBefore(images, list.firstElementChild);
// list.appendChild(images);
// import product from "./server.js";
// const product = {
//   name: "Сероприводы",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellendus, illum tempore temporibus tenetur, nemo ratione esse alias dicta, et dignissimos quod nulla rem pariatur at sunt a officiis.",
//   price: 4000,
//   available: true,
//   onSale: true,
// };
// console.log(product);

// const title = document.querySelector(".js-title");

// title.addEventListener("click", () => {
//   console.log("ki");
//   title.textContent = "frfrr";
// });

// title.innerHTML = "<a href=''>Cool</a> ";

// const list = document.querySelector(".nav");

// const cards = product.map((opt) => {
//   return {
//     name: `${opt.name}`,
//     description: `${opt.description}`,
//     price: `Цена: ${opt.price}`,
//   };
// });

// list.append(cards);

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement("article");
//   productEl.classList.add("product");

//   const tittleEl = document.createElement("h2");
//   tittleEl.textContent = name;
//   tittleEl.classList.add("product__name");

//   const descroptEl = document.createElement("p");
//   descroptEl.textContent = description;
//   descroptEl.classList.add("product__descript");

//   const priceEl = document.createElement("p");
//   priceEl.textContent = `Цена: ${price} кредитов`;
//   priceEl.classList.add("product__price");

//   productEl.append(tittleEl, descroptEl, priceEl);

//   return productEl;
// };

// const elenetEl = product.map(makeProductCard);
// list.append(...elenetEl);
// console.log(list);

// console.log(makeProductCard(product[2]));
// const productEl = document.createElement("article");
// productEl.classList.add("product");

// const tittleEl = document.createElement("h2");
// tittleEl.textContent = product.name;
// tittleEl.classList.add("product__name");

// const descroptEl = document.createElement("p");
// descroptEl.textContent = product.description;
// descroptEl.classList.add("product__descript");

// const priceEl = document.createElement("p");
// priceEl.textContent = `Цена: ${product.price} кредитов`;
// priceEl.classList.add("product__price");

// productEl.append(tittleEl, descroptEl, priceEl);

// const targetBtn = document.querySelector(".js-target-btn");
// const addListnerBtn = document.querySelector(".js-add");
// const remuveBtn = document.querySelector(".js-remuve");

// addListnerBtn.addEventListener("click", () => {
//   console.log("Подписалися");
//   targetBtn.addEventListener("click", removeListBtn);
// });

// remuveBtn.addEventListener("click", () => {
//   console.log("От писалися");
//   targetBtn.removeEventListener("click", removeListBtn);
// });

// function removeListBtn() {
//   console.log();
// }

// const refs = {
//   textBtn: document.querySelector(".js-text"),
//   nameLabel: document.querySelector(".js-button > span"),
//   checkBtn: document.querySelector(".js-checkbox"),
//   submitBtn: document.querySelector(".js-button"),
// };

// refs.textBtn.addEventListener("input", onInput);
// refs.checkBtn.addEventListener("change", onCgange);

// function onInput(e) {
//   console.log(e.currentTarget.value);
//   refs.nameLabel.textContent = e.currentTarget.value;
// }

// function onCgange(e) {
//   refs.submitBtn.disabled = !e.currentTarget.checked;
// }

// refs.textBtn.addEventListener("focus", onFocus);
// refs.textBtn.addEventListener("blur", onBluer);
// refs.textBtn.addEventListener("input", onInput);

// function onFocus() {
//   console.log("Получил фокус");
// }

// function onBluer() {
//   console.log("Потерял фокус");
// }

// function onInput(e) {
//   console.log(e.currentTarget.value);

// const textBtn = document.querySelector(".js-text");
// const nameLabel = document.querySelector(".js-button > span");
// const checkBtn = document.querySelector(".js-checkbox");
// const submitBtn = document.querySelector(".js-button");

// const refs = {
//   output: document.querySelector(".js-output"),
//   clear: document.querySelector(".js-clear"),
// };

// window.addEventListener("keydown", onClick);

// function onClick(e) {
//   console.log(e.key);
//   console.log(e.code);
// }
// window.addEventListener("keypress", keypress);
// refs.clear.addEventListener("click", onClick);

// function keypress(e) {
//   refs.output.textContent += e.key;
// }

// function onClick() {
//   refs.output.textContent = "";
// }

// const ref = {
//   text: document.querySelector(".js-text"),
//   nameLabel: document.querySelector(".js-btn > span"),
//   chekBtn: document.querySelector(".js-checkbox"),
//   buttonEl: document.querySelector(".js-btn"),
// };

// ref.text.addEventListener("input", onInput);
// ref.chekBtn.addEventListener("change", onCgange);

// function onInput(e) {
//   console.log(e.currentTarget.value);
//   ref.nameLabel.textContent = e.currentTarget.value;
// }

// function onCgange(e) {
//   console.log(e);
//   ref.buttonEl.disabled = !e.currentTarget.checked;
// }

// const ref = {
//   output: document.querySelector(".js-output"),
//   clearBtn: document.querySelector(".js-clear"),
// };

// window.addEventListener("keypress", keydaun);
// ref.clearBtn.addEventListener("click", onClick);

// function keydaun(e) {
//   console.log(e.key);
//   console.log(e.code);
//   ref.output.textContent += e.key;
//   e;
// }

// function onClick(e) {
//   ref.output.textContent = "";
// }

// function onOpenModal() {
//   window.addEventListener("keydown", onEscBtn);
//   document.body.classList.add("show-modal");
// }

// function onCloseModal() {
//   window.removeEventListener("keydown", onEscBtn);
//   document.body.classList.remove("show-modal");
// }

// function onBackdrob(e) {
//   if (e.currentTarget === e.target) {
//     onCloseModal();
//   }
// }

// function onEscBtn(e) {
//   const KEY_ESC = "Escape";
//   if (e.code === KEY_ESC) {
//     onCloseModal();
//   }
// }

//-----------------Модалка--------------//
// const refs = {
//   openModalBtn: document.querySelector(".js-button-one"),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector(".js-backdrop"),
// };
// // refs.openModalBtn.addEventListener("click", () => {
// //   console.log("click");
// // });
// refs.openModalBtn.addEventListener("click", onOpenModal);
// refs.closeModalBtn.addEventListener("click", onCloseModal);
// refs.backdrop.addEventListener("click", onBackdrob);

// function onOpenModal() {
//   window.addEventListener("keydown", keyDaun);
//   document.body.classList.add("show-modal");
// }

// function onCloseModal() {
//   window.removeEventListener("keydown", keyDaun);
//   document.body.classList.remove("show-modal");
// }

// function onBackdrob(e) {
//   console.log(e.currentTarget);
//   console.log(e.target);

//   if (e.currentTarget === e.target) {
//     onCloseModal();
//   }
// }

// function keyDaun(e) {
//   console.log(e.code);

//   const KEY_CODE = "Escape";

//   if (e.code === KEY_CODE) {
//     onCloseModal();
//   }
// }
//------------------------------------------------//
// const ref = {
//   text: document.querySelector(".text"),
//   inpBtn: document.querySelector(".checbox"),
// };

// ref.inpBtn.addEventListener("click", onClick);

// function onClick(e) {
//   console.log(e);
//   if (e.target.checked) {
//     ref.text.classList.add("sow-now");
//   } else {
//     ref.text.classList.remove("sow-now");
//   }
// }

// const user = ["Bobi", "Meri", "Geri"];
// const ul = document.createElement("ul");
// const lis = user.map((name) => {
//   const li = document.createElement("li");
//   li.textContent = name;
//   return li;
// });

// ul.append(...lis);

// document.body.appendChild(ul);

// const user = ["Bobi", "Meri", "Geri"];
// const ul = document.createElement("ul");
// const lis = user.map((name) => `<li>${name}</li>`);

// ul.insertAdjacentHTML("beforeend", lis.join(""));

// document.body.appendChild(ul);

// const refs = {
//   textAray: document.getElementById("text"),
//   buttonBn: document.querySelector("button"),
// };

// refs.buttonBn.addEventListener("click", onClick);

// function onClick() {
//   const link = document.createElement("a");
//   const text = refs.textAray.value;

//   link.setAttribute("download", "utr.text");
//   link.setAttribute(
//     "href",
//     `data:text/plain;charset=utf-8, ${encodeURIComponent(text)}`
//   );

// link.textContent = "fale";

// document.body.appendChild(link);

//   link.click();
//   // document.body.remove(link);
// }

// frames.buttonBn.addEventListener("click", onClick);

// let value = 0;

// const refs = {
//   increment: document.getElementById("increment"),
//   decrement: document.getElementById("decrement"),
// };

// function onCgenge(step) {
//   value = value + step;
//   console.log(value);
// }

// refs.increment.addEventListener("click", () => {
//   onCgenge(1);
// });

// refs.decrement.addEventListener("click", () => {
//   onCgenge(-1);
// });

// const counterEl = document.querySelector(".js-container");

// const buttonEl = document.querySelector(".js-btn");
// let labelCounter = 2;

// buttonEl.addEventListener("click", onClick);

// function onClick() {
//   const btnEl = document.createElement("button");
//   btnEl.type = "button";
//   btnEl.textContent = `Кнопка ${labelCounter}`;

//   counterEl.appendChild(btnEl);

//   labelCounter += 1;
// }

// const removeBtn = document.querySelector(".js-btn-remuve");

// removeBtn.addEventListener("click", onRemuve);

// function onRemuve() {
//   labelCounter -= 1;
// }

// const name = {
//   a: 22,
// };
// name.a = 13;

// console.log(name);

// const word0 = "Good";
// const word0translate = "Отлично";

// const word1 = "Boy";
// const word1translate = "Парень";

// const word2 = "Pragrammist";
// const word2translate = "Праграммист";

// const wordLeng = 3;

// const finishGoodMessage = "Молодец. Good test";
// const finishFalseMessage = "Молодец. папробуй еще все получится!";

// let counter = 0;

// const procentTest = 50;

// const userAnswer0 = prompt(word0);
// alert(userAnswer0 === word0translate);
// if (userAnswer0 === word0translate) {
//   counter = counter += 1;
// }

// const userAnswer1 = prompt(word1);
// alert(userAnswer1 === word1translate);
// if (userAnswer1 === word1translate) {
//   counter = counter += 1;
// }

// const userAnswer2 = prompt(word2);
// alert(userAnswer2 === word2translate);
// if (userAnswer2 === word2translate) {
//   counter = counter += 1;
// }

// const countWordleng = (counter / wordLeng) * 100;

// if (countWordleng > procentTest) {
//   alert(finishGoodMessage);
// } else {
//   alert(finishFalseMessage);
// }

// const user = {
//   name: "Boby",
//   age: 37,
// };
// const templete = `Hello ${user.name}! You are ${user.age} years old`;

// console.log(templete);

// const user = ["Boby", "Gremi", "Emmi"];

// const ul = document.createElement("ul");
// const lis = user.map((name) => `<li>${name}</li>`);

// ul.insertAdjacentHTML("beforeend", lis.join(""));

// document.body.appendChild(ul);

// const refs = {
//   textAry: document.getElementById("textArea"),
//   button: document.querySelector("button"),
// };

// const download = () => {
//   const link = document.createElement("a");
//   const text = refs.textAry.value;

//   link.setAttribute("download", "output.text");
//   link.setAttribute(
//     "href",
//     `data:text/plain;charset=utf-8, ${encodeURIComponent(text)}`
// );
// link.textContent = "file";

// document.body.appendChild(link);

//   link.click();
//   // document.body.remove(link);

//   console.log(text);
// };

// refs.button.addEventListener("click", download);

//-------------------------filter and input--------------------//

//  <label>
//       Что ищем?
//       <input type="text" id="filter" />
//     </label>
//     <ul class="js-list"></ul>

// const tech = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "JS" },
//   { label: "React" },
//   { label: "Next.js" },
//   { label: "Mobix" },
//   { label: "Redux" },
//   { label: "React Router" },
//   { label: "GraphQl" },
//   { label: "Vue" },
//   { label: "Angular" },
// ];

// const refs = {
//   list: document.querySelector(".js-list"),
//   input: document.querySelector("#filter"),
// };

// const sciluList = (items) => {
//   return items.map((list) => `<li>${list.label}</li>`).join("");
// };

// refs.input.addEventListener("input", onChange);

// const mapList = sciluList(tech);

// population(mapList);

// function onChange(e) {
//   const filter = e.target.value.toLowerCase();

//   const filterItems = tech.filter((t) =>
//     t.label.toLowerCase().includes(filter)
//   );

//   const onGrupCgeng = sciluList(filterItems);

//   population(onGrupCgeng);
// }

// function population(markup) {
//   refs.list.innerHTML = markup;
// }

//---------------------------------------------//
// import throttle from "/node_modules/lodash.throttle/index";
// _throttle = require("lodash.throttle");

// const refs = {
//   form: document.querySelector(".js-form"),
//   textarea: document.querySelector(".js-form textarea"),
// };

// refs.form.addEventListener("click", onFormSubmit);
// refs.textarea.addEventListener("input", throttle(onTextareaInput, 1000));

// const CASE_KEY = "fedbeck";

// // textPople();

// function onFormSubmit(e) {
//   e.preventDefault();

//   e.currentTarget.reset();
//   localStorage.removeItem(CASE_KEY);
// }

// function onTextareaInput(e) {
//   const messages = e.currentTarget.value;

//   localStorage.setItem(CASE_KEY, messages);
//   // localStorage.removeItem("fedbeck");
// }

// function textPople() {
//   const mesages = localStorage.getItem(CASE_KEY);

//   if (mesages) {
//     refs.textarea.value = mesages;
//   }
// }

// var expect = function (val) {
//   function toBe(val) {
//     if (val === val) {
//       return val;
//     } else {
//       return "Not Equal";
//     }
//   }
//   function notToBe(val) {
//     if (!val === val) {
//       return;
//     } else {
//       return "Equal";
//     }
//   }
// };

// let expect = function (val) {
//   let toBe = function (num, run) {
//     if (num === run) {
//       return num;
//     } else {
//       return "Not Equal";
//     }
//   };
// };

// console.log(expect().toBe());

// console.log(expect(5).toBe(5)); // true
// expect(5).notToBe(5); // throws "Equal"

// const long = "I am Long string77";

// let result = long.charAt(long.length - 1);
// let result = long.length - 1;
// let result = long.substring(5, 9);
// console.log(result);

// let favoritColor;

// favoritColor = prompt("My ferst color");

// console.log("My ferst color: " + favoritColor);

// favoritColor = prompt("My two color");

// console.log("My two color: " + favoritColor);

// const width = prompt("Enter your weight in kilograms");
// const heigth = prompt("Enter your height in meters");

// const indexMass = width / Math.pow(heigth, 2);

// const result = indexMass >= 25;

// // alert("Are you overweight?: " + result);
// if (result) {
//   alert("Yes,you BMI more than normal by " + `${Math.round(indexMass - 25)}`);
//   console.log(result);
// } else {
//   alert("No, your weight is normal ");
//   console.log(result);
// }

// const string = true;

// console.log(typeof string);

// const age = prompt("Enter you age");

// age >= 18
//   ? alert("You can buy the alcohol")
//   : alert("You can not buy the alcohol");

// if (age >= 18) {
//   alert("You can buy the alcohol");
//   console.log("You can buy the alcohol");
// } else {
//   alert("You can not buy the alcohol");
//   console.log("You can not buy the alcohol");
// }

// let serteFication = false;

// const exzemp = true;

// if (exzemp) serteFication = true;

// if (serteFication) console.log("Wow");

// console.log(Number("79"));
// console.log("79");

// const getAverage = (a, b, c) => (a + b + c) / 3;

// const dept1AverSales1 = getAverage(35467, 29842, 38501);

// const dept2AverSales1 = getAverage(70533, 50121, 33899);

// console.log(dept1AverSales1, dept2AverSales1);

// const dept1AverSales2 = getAverage(50301, 21984, 19207);

// const dept2AverSales2 = getAverage(72381, 41562, 29465);

// console.log(dept1AverSales2, dept2AverSales2);

// function printBonus(dept1AverSales, dept2AverSales) {
//   if (dept1AverSales > dept2AverSales) {
//     let bonus = dept1AverSales - dept2AverSales;
//     let sum = (bonus / dept2AverSales1) * 100;
//     if (sum >= 30) {
//       console.log(`Dep1 bonus ${sum} % `);
//     } else {
//       console.log("No bonus");
//     }
//   } else if (dept2AverSales > dept1AverSales) {
//     let bonus = dept2AverSales - dept1AverSales;
//     let sum = (bonus / dept1AverSales) * 100;
//     if (sum >= 30) {
//       console.log(`Dep2 bonus ${sum} % `);
//     } else {
//       console.log("No bonus");
//     }
//   } else {
//     console.log("No bonus");
//   }
// }

// printBonus(dept1AverSales1, dept2AverSales1);
// printBonus(dept1AverSales2, dept2AverSales2);

// const colorMix = ["red", "green", "blue"];

// console.log(colorMix.map((cur) => cur + " " + 1));

// const stringNumbers = [32, 14, 10, 3, 45];

// stringNumbers.splice(0, 0, 100);

// console.log(stringNumbers);

// console.log(stringNumbers.sort((a, b) => b - a));

// const calculateTips = (bill) => {
//   if (bill < 20) {
//     console.log(
//       `Счет ${bill} и того с 20% чаевых ${bill * 0.2} общая сумма: ${
//         bill + bill * 0.2
//       }€ `
//     );
//   } else if (bill >= 20) {
//     console.log(
//       ` Счет ${bill} и того с 15% чаевых ${bill * 0.15} %  общая сумма: ${
//         bill + bill * 0.15
//       }€ `
//     );
//   }
// };

// // calculateTips(30);

// const testDate = [11, 20, 47];

// calculateTips(testDate[0]),
//   calculateTips(testDate[1]),
//   calculateTips(testDate[2]);

// const maks = {
//   name: "Maks",
//   lastname: "Borenkov",
//   age: 37,
//   birdthYear: 1985,
//   job: "student progrsmming",
//   familyMembers: ["Katy", "Rita", "Maksim"],
//   hasDriveLicense: true,
//   getSamori: function () {
//     return `${this.name} is a ${this.age}-year old ${this.job}
//     and he has ${this.hasDriveLicense ? "a driver licen" : " no a driver licen"}
// `;
//   },
// };

// console.log(maks.getSamori());

// console.log(maks.lastname);
// const basename = "name";
// console.log(maks["last" + basename]);

// console.log(
//   `${maks.familyMembers[2]} has ${maks.familyMembers.length} family and the first on is ${maks.familyMembers[0]} `
// );

// 2 / 48;

// const width = prompt("Enter your weight in kilograms");
// const heigth = prompt("Enter your height in meters");

// const mike = {
//   name: "Mike",
//   lastname: "Black",
//   width: 79,
//   heigth: 1.71,
//   getUser: function () {
//     this.bmi = this.width / this.heigth ** 2;
//     return this.bmi;
//     // return `${this.name} width: ${this.width} kg height: ${this.heigth} m`;
//   },
// };

// const jack = {
//   name: "Jack",
//   lastname: "White",
//   width: 79,
//   heigth: 1.71,
//   getUser: function () {
//     this.bmi = this.width / this.heigth ** 2;
//     return this.bmi;
//     // return `${this.name} width: ${this.width} kg height: ${this.heigth} m`;
//   },
// };
// console.log(jack.getUser());
// console.log(jack.bmi);

// console.log(mike.getUser());
// console.log(mike.bmi);

// if (jack.bmi > mike.bmi) {
//   console.log(`${jack.name} ${jack.lastname} BMI (${jack.bmi}) and
//     ${mike.name} ${mike.lastname} BMI (${mike.bmi})`);
// } else if (mike.bmi > jack.bmi) {
//   console.log(`${mike.name} ${mike.lastname} BMI (${mike.bmi}) and
//     ${jack.name} ${jack.lastname} BMI (${jack.bmi})`);
// } else {
//   console.log(
//     `${jack.name} ${jack.lastname} and ${mike.name} ${mike.lastname}
//      equal (${mike.bmi})!  `
//   );
// }

// indexMass: function () {
//   const index = this.width / Math.pow(this.heigth, 2);
//   const result = index >= 25;
//   if (result) {
//     console.log(`${index - 25}`);
//   } else {
//     console.log("No, your weight is normal ");
//   }
// },
// };

// const indexMass = (name, fullName, width, heigth) => {
//   // console.log(name, fullName, width, heigth);
//   const index = width / Math.pow(heigth, 2);

//   const result = index >= 25;

//   if (!name || !fullName || !width || !heigth) return;

//   if (result) {
//     console.log(`${name} ${fullName} BMI (${index - 25})`);
//   } else {
//     console.log("No, your weight is normal ");
//   }
// };

// indexMass(Make.name, Make.lastname, Make["width"], Make["heigth"]);
// indexMass(Jack.name, Jack.lastname, Jack["width"], Jack["heigth"]);

// console.log(
//   Jack.width > Make.width
//     ? `${Jack.name} ${Jack.lastname} BMI (${Jack.width - Make.width}) and
//    ${Make.name} ${Make.lastname} BMI (${Make.width - Jack.width})
// `
//     : Make.width - Jack.width
// );

// if (Jack.width < Make.width) {
//   console.log(width);
//   console.log(Jack.width - Make.width);
// } else if (Make.width < Jack.width) {
//   console.log(Make.width - Jack.width);
// }

// console.log(Jack.getUser());
// console.log(Make.getUser());

// for (let i = 1; i <= 10; i += 1) {
//   console.log(`Push ups repetition ${i}`);
// }

// const birdthYear = [1985, 1987, 2014, 2017];

// const ages = [];

// for (let i = 0; i < birdthYear.length; i += 1) {
//   ages.push(2023 - birdthYear[i]);
// }

// console.log(ages.sort((a, b) => b - a));

// const calculateTips = (bill) => (bill < 20 ? bill * 0.2 : bill * 0.15);

// const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i += 1) {
//   const tip = calculateTips(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log(bills, tips, totals);

// const calculeteAvere = function (arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calculeteAvere([1, 2, 3]));
// console.log(calculeteAvere(tips));
// console.log(calculeteAvere(totals));
// 3/62

const humidities = [32, 45, 29, 19, "error", 58, 71, 47, 33, 42, 51, 49];

// function calculateMax(array) {
//   let max = array[0];
//   let min = array[0];

//   for (let i = 1; i < array.length; i += 1) {
//     const humiNiti = array[i];

//     if (typeof humiNiti !== "number") continue;
//     if (humiNiti > max) {
//       max = humiNiti;
//     }
//     if (humiNiti < min) {
//       min = humiNiti;
//     }
//   }
//   console.log(min, max);
//   return max - min;
// }

// calculateMax([1, 23, 45, 14, -2, -9, -21]);
// const amplitide = calculateMax(humidities);
// console.log(amplitide);

// const calculeteTwo = (h1, h2) => {
//   const huminiti = h1.concat(h2);
//   console.log(huminiti);

//   let max = huminiti[0];
//   let min = huminiti[0];

//   for (let i = 1; i < huminiti.length; i += 1) {
//     const hunHanter = huminiti[i];
//     if (typeof hunHanter !== "number") continue;
//     if (hunHanter > max) {
//       max = hunHanter;
//     }
//     if (hunHanter < min) {
//       min = hunHanter;
//     }
//   }

//   console.log(min, max);
//   return max - min;
// };

// const two = calculeteTwo([1, 2, 3, 4], [5, 6, 7, 8]);
// console.log(two);

// const data1 = [49, 51, 63];
// const data2 = [31, 29, 43, 58, 52];

// const printHumiditiesForecast = (array) => {
//   let str = "... ";
//   for (let i = 0; i < array.length; i += 1) {
//     str = str + `${array[i]} % humidity in ${i + 1} days ... `;
//   }

//   console.log(str.split(" ").join(" "));
// let cover = [];
// for (let i = 0; i < array.length; i += 1) {
//   let humiditi = `..${array[i]} % humidity in ${i + 1} days...`;
//   // console.log(`...${array[i]} % humidity in ${i + 1} days...`);

//   cover.push(humiditi);
// }
// console.log(cover.join(". "));
// };

// console.log("-------One variant------------");
// printHumiditiesForecast(data1);

// console.log("---------Two variant---------");

// printHumiditiesForecast(data2);
// 5 / 71;

// const foo = () => {
//   let x = 3;
//   const y = bar(5, 5);
//   x += y;
//   return x;
// };

// function bar(a1, b1) {
//   let z = 5;
//   return z;
// }

// const n = foo();

// console.log(n);

// const products = [
//   {
//     id: 1,
//     product_title: "Item 1",
//     quantity: 2,
//     price: 100.0,
//   },
//   {
//     id: 2,
//     product_title: "Item 2",
//     quantity: 3,
//     price: 300.0,
//   },
// ];
// const countTotal = (items) =>
//   items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

// console.log(countTotal());

// console.log(
//   Array(100)
//     .fill(0)
//     .map((_, i) => i + 1)
// );
// console.log(Array.from({ length: 100 }, (_, i) => i + 1));
// export function fun1() {
//   let refs = document.getElementById("one");

//   if (refs.checked) {
//     alert("he");
//     // refs.control.classList.toggle("red");
//   } else {
//     alert("no");
//   }
// }

// function fun1() {
//   var chbox;
//   chbox = document.getElementById("one");
//   if (chbox.checked) {
//     alert("Выбран");
//   } else {
//     alert("Не выбран");
//   }
// }
// let top = bill * ((procent1 + procent2) /2 /100 )
// react 97

// 6 / 95;

// const a = 1;
// fun1();

// function fun1() {
//   var b = 2;

//   fun2();
//   // console.log(b);

//   function fun2() {
//     var c = 3;

//     fun3();
//     // console.log(c);
//   }
// }

// function fun3() {
//   var d = 4;
//   console.log(a + b + c + d);
// }

// fun1();

// console.log(arySum(1, 2));

// var arySum = function (a, b) {
//   return a + b;
// };

// var techer = "Jeck";

// function CocaCola() {
//   var techer = "Rozi";

//   function asc(qestion) {
//     console.log(techer, qestion);
//   }
//   asc("Why?");
// }

// CocaCola();
// asc("???");

// const array = [1, 3, [7, 9, [8, 4]]];

// console.log(array.flat([1]));

// const array = [1, 3, [7, 9]];

// const [a, b, c, d] = array;
// console.log(a, b, c, d);

// const japanesRestaurant = {
//   name: "Banzai",
//   indexCotegori: 1,
//   location: "108 Markham Woods Rd, USA",
//   categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
//   appetizerrs: ["Seawed saled", "Tempure shrimp", "Edamame", "Sushi rice"],
//   mainMenu: ["Sushi", "Ramen", "Tempure"],

//   suhiMy() {
//     console.log(this.categories[this.indexCotegori]);
//   },
// };

// japanesRestaurant.suhiMy();

// const newMenu = [
//   "Categories :",
//   ...japanesRestaurant.categories,
//   "Appetizerrs :",
//   ...japanesRestaurant.appetizerrs,
// ];

// console.log(newMenu);
// // 7 / 107
// let y = 10;
// let x = 5;
// console.log(y, x);
// [y, x] = [x, y];

// console.log(x, y);

// function symNumbers(...num) {
//   let sum = 0;

//   for (let i = 0; i < num.length; i += 1) {
//     sum += num[i];
//   }
//   console.log(sum);
// }

// symNumbers(2, 2, 4);

// const numbers = [2, 4, 5];

// symNumbers(...numbers);
//  7 / 109;\
// const restoran = {
//   wensdeu: {
//     wen: {
//       open: 12,
//       closed: 19,
//     },
//     mon: {
//       open: 9,
//       closed: 20,
//     },
//     sat: {
//       open: 0,
//       closed: 24,
//     },
//     sun: {
//       open: 1,
//       closed: 15,
//     },
//   },

//   onRamen: function (nudel = "test", ...color) {
//     console.log(nudel);
//     console.log(color);
//   },
// };

// restoran.onRamen("Mivina", "Meat", "Chicken", "Onion");
// restoran.onRamen();

// const { sat, sun, ...arey } = restoran.wensdeu;

// console.log(sat, sun, arey);

// function sum(...nums) {
//   let total = 0;

//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }

//   console.log(total);
// }

// sum(2, 5);
// sum(2, 4, 5, 7);

// console.log(allPlayers);
// const [fieldPlayers, ern, ...gren] = [...players1];
// console.log(fieldPlayers, ern, gren);

// const game = {
//   team1: "REAL MADRID",
//   team2: "BARCELONA",

//   players: [
//     [
//       "Courtois",
//       "Vazquez",
//       "Militao",
//       "Nacho",
//       "Mendy",
//       "Casemiro",
//       "Valverde",
//       "Modrich",
//       "Kroos",
//       "Vinicius",
//       "Benzema",
//     ],
//     [
//       "Stegen",
//       "Mingueza",
//       "Araujo",
//       "Lenglet",
//       "Dest",
//       "Busquets",
//       "Jong",
//       "Alba",
//       "Messi",
//       "Pedri",
//       "Dembele",
//     ],
//   ],
//   score: "2:1",
//   scored: ["Kroos", "Benzema", "Mingueza"],
//   date: "Apr 10th, 2021",
//   odds: {
//     team1: 1.48,
//     draw: 2.53,
//     team2: 4.25,
//   },
// };

//Homwork 1

//1
// const [players1, players2] = game.players;

// console.log(players1, players2);

//2

// const [goalkeeper, ...fieldPlayers] = players1;

// console.log(goalkeeper);
// console.log(fieldPlayers);

//3

// let allPlayers = [...players1, ...players2];

// console.log(allPlayers);

//4
// const players1Total = [
//   ...players1,
//   "Marcelo",
//   "Isco",
//   "Asensio",
//   "Diaz",
//   "Odriozola",
// ];

// console.log(players1Total);

//5
// const {
//   odds: { team1, draw, team2 },
// } = game;

// console.log(team1, draw, team2);
// console.log(odds);

//6

// const printGoals = (...gamePlaers) => {
//   // console.log(gamePlaers);
//   console.log(` ${gamePlaers} ${gamePlaers.length} golls soccer`);

//   let total = 0;
//   for (let i = 0; i < `${gamePlaers.length}`; i += 1) {
//     console.log(gamePlaers[i], 1);
//   }

// let total = 0;
// for (let i = 0; i < gamePlaers.length; i += 1) {
//   console.log((total += `${gamePlaers[i]}` + gamePlaers[i]));
// }
// for (let [key, value, scored] of Object.entries(gamePlaers)) {
//   console.log(key, value, scored);
// }
// };

// function sum(...nums) {
//   let total = 0;

//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }

//   console.log(total);
// }

// printGoals("Mingueza", "Messi", "Modrich", "Nachc");

// printGoals(...game.scored);

// team1 < team2 && console.log(`${game.team1} is more likely to win`);
// team1 > team2 && console.log(`${game.team2} is more likely to win`);

//Homwork 2

// const game = {
//   team1: "REAL MADRID",
//   team2: "BARCELONA",

//   players: [
//     [
//       "Courtois",
//       "Vazquez",
//       "Militao",
//       "Nacho",
//       "Mendy",
//       "Casemiro",
//       "Valverde",
//       "Modrich",
//       "Kroos",
//       "Vinicius",
//       "Benzema",
//     ],
//     [
//       "Stegen",
//       "Mingueza",
//       "Araujo",
//       "Lenglet",
//       "Dest",
//       "Busquets",
//       "Jong",
//       "Alba",
//       "Messi",
//       "Pedri",
//       "Dembele",
//     ],
//   ],
//   score: "2:1",
//   scored: ["Kroos", "Benzema", "Mingueza", "Benzema"],
//   date: "Apr 10th, 2021",
//   odds: {
//     team1: 1.48,
//     draw: 2.53,
//     team2: 4.25,
//   },
// };

// let gollScore = { `${name}, ${number}` };

// const { team3, team4 } = game;

// console.log(team3, team4);

// {
//   /* <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>; */
// }
//1
// for (let i = 0; i < game.scored.length; i += 1) {
//   console.log("Goal ", i + 1, "-", game.scored[i]);
// // }
// for (const [index, name] of game.scored.entries()) {
//   // console.log(index, name);
//   console.log(`Goal ${index + 1} - ${name}`);
// }

//2

// let oddSum = 0;

// let odds = Object.values(game.odds);

// for (const ods of odds) {
//   // console.log(ods);
//   oddSum += ods;
// }

// let avergete = oddSum / odds.length;

// console.log(avergete);

// const calculete = (...nums) => {
//   return nums.reduce((a, b) => a + b) / nums.length;
// };

// const { team1, team2, draw } = game.odds;

// console.log(team1, team2, draw);

// console.log(calculete(team1, team2, draw));

//3

// console.log(`Rate for ${game.team1} victory: ${team1}`);
// console.log(`Rate for draw: ${draw}`);
// console.log(`Rate for ${game.team2} victory ${team2}`);

// for (const [name, odd] of Object.entries(game.odds)) {
//   // console.log(name, odd);
//   let mutabelText = name === "draw" ? "draw" : `${game[name]} victory`;
//   console.log(`Rate for ${mutabelText}: ${odd}`);
// console.log(`Rate for draw: ${game[name]}`);
// console.log(`Rate for ${game[name]} victory ${odd}`);
// }

//4

// let gollScorers = {};

// for (const play of game.scored) {
//   // gollScorers[play] = 1;
//   gollScorers[play] ? (gollScorers[play] += 1) : (gollScorers[play] = 1);
// }
// console.log(gollScorers);

// for (let [gool, name] of Object.entries(game.scored)) {
//   console.log(gool[0] < 2 ?? gool[0] + 1);
// }

// const dauses = ["mond", "tue", "wen", "sat"];

// const workinHors = {
//   [dauses[0]]: {
//     open: 12,
//     closed: 0,
//   },
//   [dauses[1]]: {
//     open: 10,
//     closed: 19,
//   },
//   [dauses[2]]: {
//     open: 9,
//     closed: 20,
//   },
//   [dauses[3]]: {
//     open: 10,
//     closed: 17,
//   },
// };

// const hors = { open: { her: 12 }, clossed: { mer: 10 } };

// const value = Object.keys(workinHors).length;

// console.log(value);

// const key = Object.keys(workinHors);
// console.log(key);

// for (let [day, { open, closed }] of Object.entries(workinHors)) {
//   console.log(day, open, closed);
// }

// const order = new Set(["Sushi", "Ramen", "Tempura", "Ramen", "Sushi"]);

// console.log(order);

// const restoran = new Map();

// restoran
//   .set("name", "Brench")
//   .set(1, ["Gren", "Mandarin", "Pepsi"])
//   .set("open", 10)
//   .set("closed", 23)
//   .set(true, "Bench is open :)")
//   .set(false, "Bench is closed :(");

// console.log(restoran.get(1));

// const curentBrench = 19;

// restoran.set(
//   curentBrench > restoran.get("open") && curentBrench < restoran.get("closed")
// );

// console.log(
//   restoran.get(
//     curentBrench > restoran.get("open") && curentBrench < restoran.get("closed")
//   )
// );

// const question = new Map([
//   ["question", "what is the most popular programming language for front-end"],
//   [1, "Jawascript"],
//   [2, "Java"],
//   [3, "Phaiten"],
//   ["Corectansver", 1],
//   [true, "Yes you win :)"],
//   [false, "You los"],
// ]);

// console.log([...question]);

// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`${key} ${value}`);
//   }
// }

// const answer = Number(prompt("Choose the option number"));

// console.log(question.get(question.get("Corectansver") === answer));

// if (answer === question.get("Corectansver")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
// const meri = new Map(Object.entries([question]));
// console.log(meri);

// console.log(question);
// console.log(Object.values([question]));

// const maping = new Map(Object.entries(question));

// console.log(maping);

const events = new Map([
  [19, "Goal"],
  [21, "Substitution"],
  [43, "Goal"],
  [56, "Substitution"],
  [69, "Yellow card"],
  [73, "Substitution"],
  [75, "Yellow card"],
  [79, "Substitution"],
  [81, "Red card"],
  [93, "Goal"],
]);

const game = {
  team1: "REAL MADRID",
  team2: "BARCELONA",
  players: [
    [
      "Courtois",
      "Vazquez",
      "Militao",
      "Nacho",
      "Mendy",
      "Casemiro",
      "Valverde",
      "Modrich",
      "Kroos",
      "Vinicius",
      "Benzema",
    ],
    [
      "Stegen",
      "Mingueza",
      "Araujo",
      "Lenglet",
      "Dest",
      "Busquets",
      "Jong",
      "Alba",
      "Messi",
      "Pedri",
      "Dembele",
    ],
  ],
  score: "2:1",
  scored: ["Kroos", "Benzema", "Mingueza"],
  date: "Apr 10th, 2021",
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

//1
const gameEvents = events;

// console.log(events);
// console.log(gameEvents);

//2
if (gameEvents.get(75) === "Yellow card") {
  events.delete(75, "Yellow card");
}

// console.log(gameEvents);
// console.log(events);

//3

const calculete = (...nums) => {
  return nums.reduce((a, b) => a + b) / (nums.length / 90);
};

const sum = gameEvents.keys();
const total = gameEvents.size;

console.log(calculete(total));

//4
for (const [key, value] of events) {
  const avter = 45;
  if (key < avter) {
    console.log(`[FERST HALF] ${key}: ${value}`);
  }
}
// 7/ 122
