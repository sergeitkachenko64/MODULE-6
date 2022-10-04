const input = document.querySelector('input');
const button = document.querySelector('button');
const duplicateField = document.querySelector('#duplicateField');

input.addEventListener('keyup', function (evt) {
  duplicateField.textContent = evt.target.value;
});

button.addEventListener('click', function () {
  console.log(input.value);
  input.value = '';
  duplicateField.textContent = this.value; // или
  // duplicateField.textContent = '';
});
