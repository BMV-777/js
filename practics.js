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

///----------------------2---------------///

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

//--------------------3 revers---------------//

// const string = 'Welcome to Ukraine';
// const str = string.split('');
// const strAry = str.reverse().join('');

// for (let i = 0; i < str.length; i += 1){
//  console.log(str[i].split().reverse().join(''))
// }

// console.log(strAry)

//---------------4 cards ---------------//
//  const cards = {
//   items: [],
//   getItems() {
//    return this.items
//   },
//   add(product) {

//     for (let item of this.items) {
//       if (item.name === product.name) {
//         item.quantiti += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantiti: 1,
//     };

//     this.items.push(newProduct);

//   },
//   remove(productName) {

//     for (let i = 0; i < this.items.length; i += 1) {
//       if (this.items[i].name === productName) {
//          this.items.splice(i, 1);
//       }
//     }

//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     const { items } = this;

//     for (let { price, quantiti } of items) {

//       total += price * quantiti;
//     }
//     return total
//   },
//   increaseQuntity(productName) {

//     for (let i = 0; i < this.items.length; i += 1){
//       if (productName === this.items[i].name) {
//         productName = this.items[i].quantiti += 1;
//       }
//     }

//   },
//   decreaseQuantity(productName) {
//       for (let i = 0; i < this.items.length; i += 1) {
//         if (productName === this.items[i].name) {
//           productName = this.items[i].quantiti -= 1;
//         }
//       }
//   }
// }

// cards.add({ name: "bananes", price: 50 });
// cards.add({ name: "bananes", price: 50 });
// cards.add({ name: "bananes", price: 50 });
// cards.add({ name: "apple", price: 100 });
// cards.add({ name: "apple", price: 50 });

//  console.table(cards.getItems());

// console.log("Total:", cards.countTotalPrice());

// cards.remove("apple");

//    console.table(cards.getItems());

//  console.log("Total:", cards.countTotalPrice());

// cards.clear();

//  console.log(cards.getItems());

// console.log("Total:", cart.countTotalPrice());

//  cards.increaseQuntity("apple");
//  cards.increaseQuntity("apple");

// console.table(cards.getItems());

// cards.decreaseQuantity("apple");
// cards.decreaseQuantity("apple");
// console.table(cards.getItems());

//---------------transaction------//

// const Transction = {
//   DEPOS const acount = {
//   balance: 0,

//   transactions: [],

//   createTransaction(amount, type) {
//     return {
//       id: Date(),
//       amount,
//       type,
//     };
//   },

//   diposit(amount) {
//     this.balance += amount;

//     this.transactions.unshift(
//       this.createTransaction(amount, Transction.DEPOSIT)
//     );
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const transition of this.transactions) {
//       if (transition.id === id) {
//         return transition;
//       }
//     }
//   },

//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },

//   withdrow(amount) {
//     if (amount > this.balance) {
//       console.log("Недостаточно средст для снятие!!!");
//     }
//     this.balance -= amount;
//     const newTransactions = this.createTransaction(amount, Transction.WITHDROW);
//     this.transactions.unshift(newTransactions);
//   },
// };

// acount.diposit(100);
// acount.diposit(200);
// acount.diposit(300);
// acount.diposit(400);

// console.log(acount.getBalance());

// acount.withdrow(100);
// acount.withdrow(400);

// console.log(acount.getTransactionDetails(3));

// console.log(acount.transactions);
// console.log(acount.getBalance());

// console.log(acount.getTransactionTotal(Transction.DEPOSIT));
// console.log(acount.getTransactionTotal(Transction.WITHDROW));
