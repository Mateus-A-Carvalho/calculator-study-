let equal_pressed = 0;

const button_input = document.querySelectorAll("input-button") // Selecting all buttons, excluding AC and DEL buttons.

const input = document.getElementById("input")
const clear = document.getElementById("clear")
const equal = document.getElementById("equal")
const erase = document.getElementById("erase")

window.onload = () => {
  input.value = '';
}

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    
    input.value += button_class.value;
  })
})