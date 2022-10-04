const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль');
});
const fAlert = document.querySelector('#alert');
fAlert.addEventListener('click', () => {
  alert(
    'Служит для вывода модального окна с этим сообщением и приостанавливает выполнение скрипта до нажатия кнопки "Закрыть"'
  );
});
const fPrompt = document.querySelector('#prompt');
fPrompt.addEventListener('click', () => {
  var name = prompt(
    'Cлужит для вывода модального окна с этим сообщением, поля ввода и кнопок "Продолжить" и "Отмена". Например, введите Ваше имя:',
    ''
  );
  alert(`Ваше имя - ${name}`);
});
