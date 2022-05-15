const canvas = document.querySelector('.js-canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () =>
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

window.addEventListener('click', () =>
{
    ball.speed.x = (Math.random() - 0.5) * 30
    ball.speed.y = - 10
})

const context = canvas.getContext('2d')

const ball = {
    position:
    {
        x: 200,
        y: 200
    },
    speed:
    {
        x: 3,
        y: 0
    }
}

let previousTime = Date.now()

const loop = () =>
{
    // Time
    const currentTime = Date.now()
    const deltaTime = currentTime - previousTime
    previousTime = currentTime

    // Update ball
    ball.speed.y += 0.2

    ball.position.x += ball.speed.x
    ball.position.y += ball.speed.y

    if(ball.position.y > canvas.height - 50)
    {
        ball.position.y = canvas.height - 50
        ball.speed.y *= -0.9
    }
    if(ball.position.x > canvas.width - 50)
    {
        ball.position.x = canvas.width - 50
        ball.speed.x *= -0.9
    }
    if(ball.position.x <  50)
    {
        ball.position.x = 50
        ball.speed.x *= -0.9
    }

    // Clear
    // context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = '#ffffff'
    context.globalAlpha = 0.2
    context.fillRect(0, 0, canvas.width, canvas.height)

    // Draw ball
    context.beginPath()
    context.arc(ball.position.x, ball.position.y, 50, 0, Math.PI * 2, true)
    context.globalAlpha = 1
    context.fillStyle = 'orange'
    context.fill()

    window.requestAnimationFrame(loop)
}

loop()