function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChange = document.querySelector('.change-color');
const bodyChange = document.body;
const colorChange = document.querySelector('.color');
btnChange.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyChange.style.backgroundColor = randomColor;
  colorChange.textContent = randomColor;
});
