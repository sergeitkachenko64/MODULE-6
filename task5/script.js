const inp = document.querySelector('input');
const btn = document.querySelector('button');
const duplicateField = document.querySelector('#duplicateField');

inp.addEventListener('keyup', (event) => {
  duplicateField.textContent = event.target.value;
});

btn.addEventListener('click', (event) => {
  console.log(inp.value);
  inp.value = '';
  duplicateField.textContent = this.value; // или
  // duplicateField.textContent = '';
  event.preventDefault();
});
