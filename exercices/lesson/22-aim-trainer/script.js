// Get all elements
const aimTrainerElement = document.querySelector('.aim-trainer')
const targetsElement = aimTrainerElement.querySelector('.targets')
const startElement = aimTrainerElement.querySelector('.start')

// Sound
const hitSound = document.createElement('audio')
hitSound.src = 'sounds/bruno.mp3'

// Create a start function
const start = () =>
{
    // Hide start element
    startElement.style.display = 'none'

    // Save time start
    const timeStart = Date.now()

    // Do a loop to create targets
    for(let i = 0; i < 10; i++)
    {
        // Create and position target element
        const targetElement = document.createElement('div')
        targetElement.classList.add('target')
        targetElement.style.top = Math.random() * 100 + '%'
        targetElement.style.left = Math.random() * 100 + '%'
        targetsElement.append(targetElement)

        // Listen to mouseenter event
        targetElement.addEventListener('mouseenter', () =>
        {
            // Delete target
            // targetsElement.removeChild(targetElement)
            targetElement.remove()

            // Play sound
            hitSound.currentTime = 0
            hitSound.play()

            // Game over
            if(targetsElement.children.length === 0)
            {
                // Show start element
                startElement.style.display = 'block'

                // Calculate elapsed time
                const timeEnd = Date.now()
                const timeElapsed = timeEnd - timeStart
                const timeElapsedFormated = timeElapsed / 1000 + 's'

                startElement.innerHTML = 'RESTART<br>' + timeElapsedFormated
            }
        })
    }
}

startElement.addEventListener('click', start)
