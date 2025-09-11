const display = document.getElementById('calc-display');
let currentInput = '0';

function updateDisplay() {
  display.value = currentInput;
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      if (currentInput === '0') currentInput = value;
      else currentInput += value;
    }

    if (action) {
      if (action === 'clear') currentInput = '0';
      if (action === 'sign') currentInput = String(-parseFloat(currentInput));
      if (action === 'percent') currentInput = String(parseFloat(currentInput) / 100);
      if (action === 'equals') {
        try {
          currentInput = String(eval(currentInput));
        } catch {
          currentInput = 'Error';
        }
      }
    }
    updateDisplay();
  });
});
updateDisplay();
