const canvas = document.querySelector('.js-canvas')
canvas.width = 800
canvas.height = 600

const context = canvas.getContext('2d')

context.beginPath()

context.moveTo(50, 50)
context.lineTo(200, 200)
context.lineTo(50, 200)
context.lineTo(100, 250)
context.closePath()

context.stroke()