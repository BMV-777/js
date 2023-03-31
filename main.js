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

const friends = ['Vika', 'I', "Yra", "Veronika"];
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

 const logins = ["freedom", "food", "hom", "geri"];

const findLogin = function (allLogin, setLogin) {
  
  // for (const login of allLogin) {
  //   if (login === setLogin) {
  //     return `Пользователь ${setLogin} найден`
  //   }
  // }
  
  // return `Пользователь ${setLogin} не найден`;
  
  return allLogin.includes(setLogin)
    ? `Пользователь ${setLogin} найден`
    : `Пользователь ${setLogin} не найден`;

}


console.log(findLogin(logins, 'freedom'));
console.log(findLogin(logins, 'lint'));
console.log(findLogin(logins, "hom"));
console.log(findLogin(logins, "vergun"));