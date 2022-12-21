const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`#ingredients`);

ingredients.forEach(title => {
  const itemEl = document.createElement("li");
  itemEl.textContent = title;
  itemEl.classList = `item`;
  
  ingredientsEl.append(itemEl)
})