const inputRef = document.querySelector(`#name-input`)
const spanRef = document.querySelector(`#name-output`)

inputRef.addEventListener(`input`, (event) => {

event.currentTarget.value
    ? (spanRef.textContent = event.currentTarget.value)
    : (spanRef.textContent = "Anonimus");    
})


// другий варіант 
 // if (event.currentTarget.value === ``) {
    //     return spanRef.textContent = `Anonymous`;
    // }

    // if (event)
    // {return spanRef.textContent = event.currentTarget.value}