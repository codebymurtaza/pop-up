// javaScript

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
 popup.style.display = 'block';
})
popup.addEventListener('click', () => {
 popup.style.display = 'none';
})
close.addEventListener('click', () => {
 popup.style.display = 'none';
})