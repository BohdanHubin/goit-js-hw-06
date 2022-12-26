const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector(`#ingredients`);

const ingridientEl = ingredients.map(ingridient => {
  let itemEl = document.createElement("li");
  itemEl.textContent = ingridient;
  itemEl.classList = `item`;
  return itemEl;
})
  
ingredientsRef.append(...ingridientEl)