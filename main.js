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

let balance = 10000;
const payment = 2000;

console.log(`На вашем балансе ${balance}`)

if (payment <= balance) {
  console.log(`Вы совершили покупку`);

  balance -= payment;
  
  console.log(` на вашем счету ${balance}`);
  
} 
