const box = document.querySelector('.box')

/**
 * With the animation API
 */
// box.addEventListener('click', () =>
// {
//     box.animate(
//         [
//             { backgroundColor: 'red' },
//             { backgroundColor: 'blue' }
//         ],
//         {
//             duration: 3000
//         }
//     )
// })

/**
 * With request animation frame
 */
// let angle = 0
// const tick = () =>
// {
//     angle = angle + 1
//     box.style.transform = `rotate(${angle}deg)`

//     window.requestAnimationFrame(tick)
// }

// tick()

/**
 * With request animation frame
 */
// let angle = 0
// let previousTime = Date.now()
// const tick = () =>
// {
//     const currentTime = Date.now()
//     const deltaTime = currentTime - previousTime
//     previousTime = currentTime

//     angle = angle + deltaTime / 10
//     box.style.transform = `rotate(${angle}deg)`

//     window.requestAnimationFrame(tick)
// }

// tick()


/**
 * With GSAP
 */
// gsap.to(
//     box,
//     {
//         x: 300,
//         y: 100,
//         rotate: 45,
//         duration: 2,
//         delay: 1,
//         ease: 'bounce.out'
//     }
// )

const timeline = gsap.timeline({
    repeat: 2,
    yoyo: true
})

timeline.to(
    box,
    {
        x: 300,
        y: 100,
        rotate: 45,
        duration: 2,
        ease: 'bounce.out'
    }
)

timeline.to(
    box,
    {
        x: -300,
        y: 100,
        rotate: 180,
        duration: 3,
        ease: 'bounce.out'
    }
)