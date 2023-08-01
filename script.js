const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  curValue++;
  mainTitle.textContent = curValue;
});

btnDecrement.addEventListener('click', () => {
  curValue--;
  mainTitle.textContent = curValue;
});

btnReset.addEventListener('click', () => {
  curValue = 0;
  mainTitle.textContent = curValue;
});

const mainTitle1 = document.querySelector('#title1');
let curValue1 = 0;

const btnDecrement1 = document.querySelector('#decrement1');
const btnReset1 = document.querySelector('#reset1');
const btnIncrement1 = document.querySelector('#increment1');

btnIncrement1.addEventListener('click', () => {
  curValue1++;
  mainTitle1.textContent = curValue1;
});

btnDecrement1.addEventListener('click', () => {
  curValue1--;
  mainTitle1.textContent = curValue1;
});

btnReset1.addEventListener('click', () => {
  curValue1 = 0;
  mainTitle1.textContent = curValue1;
});