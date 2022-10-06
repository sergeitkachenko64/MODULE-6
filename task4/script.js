const txtElement = document.querySelector('a');

txtElement.addEventListener('click', (event) => {
  event.preventDefault();
  txtElement.textContent = prompt('Введите новый текст:', '');
});
