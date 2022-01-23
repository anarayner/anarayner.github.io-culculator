// Refer all buttons exclude AC and DEL
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");

// Refer clear, delete, input, equal
const AC = document.getElementById("clear");
const DEL = document.getElementById("delete");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const inputResult = document.getElementById("input__result");
const dot = document.getElementById("dot");

let dotPressed = false;
let operationPressed = false;

window.onload = () => {
  input.value = "";
};

// Access eacn button using fotEach
number.forEach((number) => {
  number.addEventListener("click", () => {
    //display value for each button
    input.value += number.value;
    operationPressed = false;
  });
});

operation.forEach((operation) => {
  operation.addEventListener("click", () => {
    console.log(dotPressed, operationPressed);
    if (operationPressed) {
      swal("Oops!", "Something went wrong!", "error");
      return;
    }

    //display value for each button
    operationPressed = true;
    input.value += operation.value;
    dotPressed = false;
  });
});

equal.addEventListener("click", () => {
  let inputValue = input.value;
  try {
    // evaluate user's input
    let result = eval(inputValue);
    // true for natural numbers and false for decimals
    if (Number.isInteger(result)) {
      inputResult.value = result;
      input.value = "";
    } else {
      input.value = result.toFixed(2);
    }
  } catch (e) {
    swal("Oops!", "Something went wrong!", "error");
  }
});

dot.addEventListener("click", (dot) => {
  let last = input.value.slice(-1);

  console.log(dotPressed, operationPressed);
  if (last == "." || dotPressed || operationPressed) {
    swal("Oops!", "Something went wrong!", "error");
    return;
  }
  dotPressed = true;
  input.value += ".";
});

DEL.addEventListener("click", () => {
  input.value = "";
});
