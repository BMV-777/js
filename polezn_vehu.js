//------------найти уникальній єлемент----//

// const arry = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];

// const ensert = Array.from(new Set(arry));

// const arr1 = arry.filter((value, indx, count) => count.indexOf(value) === indx);

// console.log(ensert);
// console.log(arr1);

//--------------замыкание(clouser) && IIFF------------------//

for (var i = 1; i < 5; i += 1) {
  (function fn(x) {
    setTimeout(() => {
      console.log(x);
    }, 100);
  })(i);
}
