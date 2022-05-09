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
    const x = event.clientX / window.innerWidth
    const y = event.clientY / window.innerHeight

    myConfetti({
        particleCount: 3,
        startVelocity: 10,
        spread: 100,
        colors: ['#bada55', '#bb00ff'],
        origin:
        {
            x: x,
            y: y
        }
    })
})
