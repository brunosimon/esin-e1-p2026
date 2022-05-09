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

/**
 * Boucing
 */
const tick = () =>
{
    const time = Date.now()
    let y = time * 0.003
    y = Math.sin(y)
    y *= 200
    y = - Math.abs(y)

    box.style.transform = `translateY(${y}px)`

    window.requestAnimationFrame(tick)
}

tick()