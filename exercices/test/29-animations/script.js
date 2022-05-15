const box = document.querySelector('.box')

/**
 * With the animation API
 */
// box.animate(
//     [
//         { transform: 'translateX(0px)' },
//         { transform: 'translateX(300px)' }
//     ],
//     {
//         duration: 1000,
//         delay: 2000,
//         iterations: Infinity,
//         direction: 'alternate'
//     }
// )

// /**
//  * With RAF
//  */
// let elapsedTime = 0

// const tick = () =>
// {
//     elapsedTime++

//     box.style.transform = `translateX(${elapsedTime}px)`

//     window.requestAnimationFrame(tick)
// }

// tick()

// /**
//  * With RAF
//  * Time based
//  */
// const startTime = Date.now()
// const tick = () =>
// {
//     const time = Date.now()
//     const elapsedTime = time - startTime

//     box.style.transform = `translateX(${elapsedTime}px)`

//     window.requestAnimationFrame(tick)
// }

// tick()

// /**
//  * With RAF
//  * Boucing
//  */
// const tick = () =>
// {
//     const time = Date.now()
//     let y = time * 0.003
//     y = Math.sin(y)
//     y *= 200
//     y = - Math.abs(y)

//     box.style.transform = `translateY(${y}px)`

//     window.requestAnimationFrame(tick)
// }

// tick()


/**
 * With library
 */
// gsap.to(
//     '.box',
//     {
//         x: 400,
//         duration: 2,
//         delay: 0.5,
//         ease: 'power4.inOut',
//         onComplete: () =>
//         {
//             console.log('complete')
//         }
//     }
// )

const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true
})

timeline.to(
    box,
    {
        x: 400,
        duration: 1,
        // delay: 0.5,
        ease: 'power4.inOut',
        onComplete: () =>
        {
            console.log('complete')
        }
    }
)

timeline.to(
    box,
    {
        x: -500,
        y: 200,
        duration: 1,
        // delay: 0.5,
        ease: 'power4.inOut',
        onComplete: () =>
        {
            console.log('complete')
        }
    }
)
