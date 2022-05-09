const canvas = document.querySelector('.confetti-canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () =>
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

const myConfetti = confetti.create(canvas)

window.addEventListener('mousemove', (event) =>
{
    myConfetti({
        spread: 120,
        startVelocity: 10,
        particleCount: 3,
        origin:
        {
            x: event.clientX / window.innerWidth,
            y: event.clientY / window.innerHeight
        }
    })
})