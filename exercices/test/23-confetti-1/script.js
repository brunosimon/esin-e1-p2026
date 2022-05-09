const canvasElement = document.querySelector('.confetti-canvas')
canvasElement.width = window.innerWidth
canvasElement.height = window.innerHeight

const myConfetti = confetti.create(canvasElement, { useWorker: false })

window.addEventListener('mousemove', (event) =>
{
    myConfetti({
        particleCount: 3,
        spread: 40,
        startVelocity: 10,
        gravity: 0.5,
        origin:
        {
            x: event.clientX / window.innerWidth,
            y: event.clientY / window.innerHeight
        }
    })
})