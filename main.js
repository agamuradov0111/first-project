const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('.change-color-all-card');
const greenColorHash = 'blue'
const blackColorHash = 'black'

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

const firstProductCards = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('.change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
firstProductCards.style.backgroundColor = blackColorHash

})

const openGoogleButton = document.querySelector('.open-google');

openGoogleButton.addEventListener('click', openGoogle, () => {
  window.open('https://google.com')
})

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google');
  if (answer === true) {
  window.open('https://google.com')
  } else {
    return;
  }
}

const openConsoleButton = document.querySelector('.open-console-log');
openConsoleButton.addEventListener('click', ()  => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  console.log(message)

}

const titletext = document.querySelector('.catalog__title')
titletext.addEventListener('mouseenter', () => {
  console.log(titletext.textContent)
})

const changeColorButton = document.querySelector('.change-color-button')
changeColorButton.classList.add('button-green')

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('button-red')
})