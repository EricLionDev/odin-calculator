let displayValue = "";
let savedValue = "";
let operator = "";
let displayContainer = document.getElementById("display");

function nextInput(str) {
  if (str === ".") {
    if (!displayValue.includes(str)) {
      console.log("string has no period");
      displayValue += str;
      displayContainer.innerHTML = displayValue;
      return;
    } else {
      console.log("has a period");
      return;
    }
  }
  displayValue += str;
  displayContainer.innerHTML = displayValue;
}

function makeNegative() {
  if (displayValue.charAt(0) !== "-") {
    displayValue = "-" + displayValue;
    displayContainer.innerHTML = displayValue;
    console.log(displayValue);
  } else {
    displayValue = displayValue.substring(1);
    displayContainer.innerHTML = displayValue;
  }
}
function runOperation() {
  if (displayValue !== "0") {
    if (operator === "+") {
      displayValue = parseFloat(savedValue) + parseFloat(displayValue);
      displayValue = displayValue.toFixed(4);
      displayValue = displayValue.toString();
      displayContainer.innerHTML = displayValue;
    } else if (operator === "-") {
      displayValue = parseFloat(savedValue) - parseFloat(displayValue);
      displayValue = displayValue.toFixed(4);
      displayValue = displayValue.toString();
      displayContainer.innerHTML = displayValue;
    } else if (operator === "*") {
      displayValue = parseFloat(savedValue) * parseFloat(displayValue);
      displayValue = displayValue.toFixed(4);
      displayValue = displayValue.toString();
      displayContainer.innerHTML = displayValue;
    } else if (operator === "/") {
      displayValue = parseFloat(savedValue) / parseFloat(displayValue);
      displayValue = displayValue.toFixed(4);
      displayValue = displayValue.toString();
      displayContainer.innerHTML = displayValue;
    }
  } else {
    clear__all();
    displayContainer.innerHTML = "no";
  }
  console.log("saved value: " + savedValue);
  console.log("Display value: " + displayValue);
}

function selectOperator(str) {
  if (savedValue === "") {
    operator = str;
    savedValue = displayValue;
    displayContainer.innerHTML = savedValue;
    displayValue = "";
    console.log("no saved value");
  } else {
    console.log("has saved value, operating");
    runOperation();
    operator = str;
    savedValue = displayValue;
    displayValue = "";
    displayContainer.innerHTML = savedValue;
  }
}

function clear__all() {
  displayValue = "";
  savedValue = "";
  operator = "";
  displayContainer.innerHTML = "0";
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  displayContainer.innerHTML = displayValue;
}
