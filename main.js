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

const each = (array, callback) => {
  const newArray = [];

  for (const value of array) {
    // const newValue = callback(value);

    newArray.push(callback(value));
  }
  return newArray;
};

console.log(
  each([2, 4, 6, 8], function (value) {
    return value * 2;
  })
);

console.log(each([2, 4, 6, 8], (value) => value - 10));
