//console.log('works!');
/* DOM */
const $Cowntdown = document.getElementById('Cowntdown');
const $btnIncrement = document.getElementById('btnIncrement');
const $btnDecrement = document.getElementById('btnDecrement');

let Cowntdown = 0;

$Cowntdown.textContent = Cowntdown;

function increment() {
    Cowntdown++;
  $Cowntdown.textContent = Cowntdown;
}

function decrement() {
  Cowntdown--;
  $Cowntdown.textContent = Cowntdown;
}

document.addEventListener('DOMContentLoaded', () => {
  $btnIncrement.addEventListener('click', () => {
    increment();
    if (Cowntdown > 0) {
      $Cowntdown.classList.remove('red');
      $Cowntdown.classList.add('blue');
    }
    if (Cowntdown === 0) {
      $Cowntdown.classList.remove('red');
      $Cowntdown.classList.remove('blue');
    }
  });
  $btnDecrement.addEventListener('click', () => {
    decrement();
    if (Cowntdown < 0) {
      $Cowntdown.classList.remove('blue');
      $Cowntdown.classList.add('red');
    }
    if (Cowntdown === 0) {
      $Cowntdown.classList.remove('red');
      $Cowntdown.classList.remove('blue');
    }
  });
});