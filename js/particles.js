// boton
const night = document.querySelector(".night__day")

const bg = document.querySelector(".night")
const button = document.querySelector('.night__day')
const desing = document.querySelector('.desing')
const textField = document.querySelector('.ans')
const input = document.querySelectorAll('.oli')

night.addEventListener('click', () => {
    bg.classList.toggle('night')
    button.classList.toggle('day')
    desing.classList.toggle('white')
    textField.classList.toggle('white')
    textField.classList.toggle('day')
    input.classList.toggle('white')
})