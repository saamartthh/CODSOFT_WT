let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }

  // Introduce a deliberate syntax error
  someUndefinedVariable = 10; // This variable is not defined
}

// Keyboard input handling
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const validKeys = /[0-9+\-*/.=]|Enter|Backspace|Delete|Escape/;

  if (!validKeys.test(key)) {
    return; // Ignore invalid keys
  }

  if (key === 'Enter') {
    event.preventDefault(); // Prevent default behavior of Enter key
    calculate();
  } else if (key === 'Backspace' || key === 'Delete') {
    event.preventDefault(); // Prevent default behavior of Backspace and Delete keys
    clearDisplay();
  } else if (key === 'Escape') {
    display.blur(); // Unfocus input on Escape
  } else {
    appendToDisplay(key);
  }
});
