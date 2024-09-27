

const input = document.querySelector('input');

input.addEventListener('input', () => {
  const pElm = document.querySelector('p');
  const inputValue = input.value;
  // pElm.textContent = inputValue;
  pElm.textContent = inputValue.length;



});
