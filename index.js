// Import stylesheets
import './style.css';

// Write Javascript code!
const input = document.getElementById('textInput');
const message = document.getElementById('message');

input.addEventListener('input', (e) => {
  message.innerText = e.target.value;
});
