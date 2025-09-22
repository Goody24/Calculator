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


/* 🌙 Dark Mode Toggle */
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});


// Load preference on page load
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  }
});