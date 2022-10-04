const txtElement = document.querySelector('a');

txtElement.addEventListener('click', (evt) => {
    txtElement.textContent = prompt('Введите новый текст:', '');
    evt.preventDefault();
  });


// event.stopPropagation();
// event.preventDefault();
