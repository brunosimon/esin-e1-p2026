const playerElement = document.querySelector('.player')
let x = 0
let y = 0
let isUpPressed = false
let isRightPressed = false
let isDownPressed = false
let isLeftPressed = false

document.addEventListener('keydown', (event) =>
{
    if(event.code === 'ArrowRight')
    {
        isRightPressed = true
    }
    else if(event.code === 'ArrowLeft')
    {
        isLeftPressed = true
    }
    else if(event.code === 'ArrowUp')
    {
        isUpPressed = true
    }
    else if(event.code === 'ArrowDown')
    {
        isDownPressed = true
    }
})

document.addEventListener('keyup', (event) =>
{
    if(event.code === 'ArrowRight')
    {
        isRightPressed = false
    }
    else if(event.code === 'ArrowLeft')
    {
        isLeftPressed = false
    }
    else if(event.code === 'ArrowUp')
    {
        isUpPressed = false
    }
    else if(event.code === 'ArrowDown')
    {
        isDownPressed = false
    }
})

let previousTime = Date.now()

const tick = () =>
{
    const time = Date.now()
    const deltaTime = time - previousTime
    previousTime = time

    const speed = deltaTime * 0.2
    
    if(isRightPressed)
        x += speed
    if(isLeftPressed)
        x -= speed
    if(isUpPressed)
        y -= speed
    if(isDownPressed)
        y += speed

    playerElement.style.transform = `translate(${x}px, ${y}px)`

    window.requestAnimationFrame(tick)
}

tick()