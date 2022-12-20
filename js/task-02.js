const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`#ingredients`);

ingredients.forEach(function (title) {
  const itemEl = document.createElement("li");
  itemEl.textContent = title;
  itemEl.classList = `item`;
  
  ingredientsEl.append(itemEl)
})