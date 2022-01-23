const number = document.querySelectorAll(".number");

const operation = document.querySelectorAll(".operation");

// Refer clear, delete, input, equal
const AC = document.getElementById("clear");
const DEL = document.getElementById("delete");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const inputResult = document.getElementById("input__result");

const equalPressed = false;

let inputValue = "";
let result = null;
haveDOT = false;

number.forEach((number) => {
  number.addEventListener("click", () => {
    input.value += number.value;
    inputValue = parseFloat(input.value);
    console.log(typeof inputValue);
  });
});

operation.forEach((operation) => {
  operation.addEventListener("click", () => {
    if (!input.value) {
      return;
    }

    haveDOT = false;
    inputValue += operation.value;
    result = inputValue;
    let r = parseFloat(result);
    console.log(result);
    console.log(r);

    console.log(typeof result);
  });
});

DEL.addEventListener("click", () => {
  input.value = "";
  inputResult.value = "";
});

equal.addEventListener("click", () => {
  let result = 0;
  result = input.value;
  console.log(typeof result);
  inputResult.value = result;
});
