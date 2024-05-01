let display = document.getElementById('display');
let history = '';

function appendToDisplay(value) {
  display.value += value;
  history += value;
}

function clearDisplay() {
  display.value = '';
  history = '';
}

function undo() {
  display.value = display.value.slice(0, -1);
  history = history.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = 'Error';
  }
}
