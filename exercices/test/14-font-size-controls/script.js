const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')
const text = document.querySelector('.text')
let fontSize = 16

buttonMore.addEventListener('click', () =>
{
    fontSize = Math.round(fontSize * 1.2)

    if(fontSize > 30)
        fontSize = 30
    
    text.style.fontSize = `${fontSize}px`
})

buttonLess.addEventListener('click', () =>
{
    fontSize = Math.round(fontSize / 1.2)

    if(fontSize < 10)
        fontSize = 10

    text.style.fontSize = `${fontSize}px`
})

