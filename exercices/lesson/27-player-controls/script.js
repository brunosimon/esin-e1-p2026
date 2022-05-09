const game = document.querySelector('.game')
const player = game.querySelector('.player')
let x = 0
let y = 0
let isRightPressed = false

window.addEventListener('keydown', (event) =>
{
    if(event.code === 'ArrowRight')
        isRightPressed = true 
})

window.addEventListener('keyup', (event) =>
{
    if(event.code === 'ArrowRight')
        isRightPressed = false 
})

const tick = () =>
{
    if(isRightPressed)
        x = x + 3

    player.style.transform = `translate(${x}px, ${y}px)`

    window.requestAnimationFrame(tick)
}

tick()