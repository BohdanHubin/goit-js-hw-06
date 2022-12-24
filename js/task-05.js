const inputRef = document.querySelector(`#name-input`)
const spanRef = document.querySelector(`#name-output`)

inputRef.addEventListener(`input`, inputText)

function inputText(event) {
    event.currentTarget.value
    ? (spanRef.textContent = event.currentTarget.value)
    : (spanRef.textContent = "Anonimus");
}