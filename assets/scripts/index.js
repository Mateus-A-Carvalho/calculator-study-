let equal_pressed = 0;

function toggleDarkMode() {
  document.html.classList.toogle("dark-theme");
}

const changeBtnTheme = document.querySelector("#change-theme");
changeBtnTheme.addEventListener("change", () => {
  toggleDarkMode();
});

const button_input = document.querySelectorAll(".input-button") // Selecting all buttons, excluding AC and DEL buttons.

const input = document.getElementById("input")
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")
const erase = document.getElementById("erase")

window.onload = () => {
  input.value = ``;
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

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;

  try {
    let solution = eval(inp_val);
    if(Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch(err) {
    alert(`Invalid Input! Try again.`)
  }
}
)

clear.addEventListener("click", () => {
  input.value = ``;
})

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
})
