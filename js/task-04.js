const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector(`#value`);
let counterValue = 0;



decrementBtn.addEventListener(`click`, decrementBtnClick)  

incrementBtn.addEventListener(`click`, incrementBtnClick)  

function decrementBtnClick() {
     counterValue -=1;
    return valueRef.textContent = counterValue;
}
function incrementBtnClick() {
     counterValue +=1;
    return valueRef.textContent = counterValue;
}
