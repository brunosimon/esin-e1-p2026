const aimTrainerElement = document.querySelector('.aim-trainer')
const targetsElement = aimTrainerElement.querySelector('.targets')
const startElement = aimTrainerElement.querySelector('.start')
const sound = document.createElement('audio')
sound.src = 'sounds/click-2.mp3'

const start = () =>
{
    startElement.style.display = 'none'

    const startTime = Date.now()

    for(let i = 0; i < 10; i++)
    {
        const targetElement = document.createElement('div')
        targetElement.classList.add('target')
        targetElement.style.top = Math.random() * 100 + '%'
        targetElement.style.left = Math.random() * 100 + '%'
        targetsElement.append(targetElement)

        targetElement.addEventListener('mouseenter', () =>
        {
            // targetsElement.removeChild(targetElement)
            targetElement.remove()

            sound.currentTime = 0
            sound.play()

            if(targetsElement.children.length === 0)
            {
                const endTime = Date.now()
                const elapsedTime = endTime - startTime
                const formatedElapsedTime = elapsedTime / 1000 + 's'
                
                startElement.style.display = 'block'
                startElement.innerHTML = 'START<br>' + formatedElapsedTime
            }
        })
    }
}

startElement.addEventListener('click', start)
