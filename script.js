//your code here

// select the elements we need to change
const app = document.getElementById('app');
const button = document.getElementById('swap');

function swapTheme() {
  // toggle the class on the app element
  app.classList.toggle('night');
  
  // toggle the text and class on the button element
  if (app.classList.contains('night')) {
    button.textContent = 'Switch to Day Mode';
    button.classList.remove('button_night');
    button.classList.add('button_day');
  } else {
    button.textContent = 'Switch to Night Mode';
    button.classList.remove('button_day');
    button.classList.add('button_night');
  }
}

// add an event listener to the button element
button.addEventListener('click', swapTheme);
