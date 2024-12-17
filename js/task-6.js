function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputInfo = document.querySelector('input');
const box = document.querySelector('#boxes');

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const boxCreate = document.createElement('div'); // Створюємо новий div
    const size = 30 + i * 10;
    boxCreate.style.width = `${size}px`;
    boxCreate.style.height = `${size}px`;
    boxCreate.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(boxCreate); // Додаємо новий блок до контейнера
  }
  box.appendChild(fragment);
}

function deleteBoxes() {
  const boxConteiner = document.getElementById('boxes');
  boxConteiner.innerHTML = '';
}

btnCreate.addEventListener('click', () => {
  const amount = Number(inputInfo.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputInfo.value = '';
});
btnDestroy.addEventListener('click', deleteBoxes);
