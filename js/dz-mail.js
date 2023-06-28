//-------------1----------------//
// const ulItemRef = document.querySelectorAll(".item");

// ulItemRef.forEach((element) => {
//   const ulEl = element.querySelector("h2");

//   const liEl = element.querySelectorAll("li");

//   console.log(`Category: ${ulEl.textContent}`);
//   console.log(`Elements: ${liEl.length}`);
// });

//-------------2-----------------//
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const list = document.querySelector("#ingredients");

// const ingredientEl = ingredients.map((option) => {
//   const liEl = document.createElement("li");
//   liEl.classList.add("item");
//   liEl.textContent = option;

//   return liEl;
// });

// list.append(...ingredientEl);

// console.log(ingredients);

//--------------------3------------------//
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const listEl = document.querySelector(".gallery");

// listEl.classList.add("curen_list");

// const element = images
//   .map(
//     (img) =>
//       `<li class='item'><img src=${img.url} alt =${img.alt} width='280'></li>`
//   )
//   .join("");

// listEl.insertAdjacentHTML("beforebegin", element);

// console.log(element);

//--------------------------------4----------------------//
