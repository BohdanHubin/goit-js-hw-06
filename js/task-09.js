function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const textColorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textColorValue.textContent = bodyRef.style.backgroundColor
}