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

//---------------------filter------------//

const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JS" },
  { label: "React" },
  { label: "Next.js" },
  { label: "Mobix" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "Vue" },
  { label: "Angular" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

const sciluList = (items) => {
  return items.map((list) => `<li>${list.label}</li>`).join("");
};

refs.input.addEventListener("input", onChange);

const mapList = sciluList(tech);

population(mapList);

function onChange(e) {
  const filter = e.target.value.toLowerCase();

  const filterItems = tech.filter((t) =>
    t.label.toLowerCase().includes(filter)
  );

  const onGrupCgeng = sciluList(filterItems);

  population(onGrupCgeng);
}

function population(markup) {
  refs.list.innerHTML = markup;
}
