const container = document.querySelector('.font-size-controls')
const lessButton = container.querySelector('.button.less')
const moreButton = container.querySelector('.button.more')
const text = container.querySelector('.text')
let fontSize = 16

lessButton.addEventListener('click', function()
{
    fontSize = Math.max(fontSize - 2, 10)

    text.style.fontSize = fontSize + 'px'
})

moreButton.addEventListener('click', function()
{
    fontSize = Math.min(fontSize + 2, 20)

    text.style.fontSize = fontSize + 'px'
})
