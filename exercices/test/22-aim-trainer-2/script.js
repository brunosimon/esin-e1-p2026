const aimTrainerElement = document.querySelector('.aim-trainer')
const startElement = aimTrainerElement.querySelector('.start')
const targetsElement = aimTrainerElement.querySelector('.targets')

const start = () =>
{
    startElement.style.display = 'none'

    const startTime = Date.now()

    for(let i = 0; i < 10; i++)
    {
        const targetElement = document.createElement('div')
        targetElement.classList.add('target')
        targetElement.style.left = `${Math.random() * 100}%`
        targetElement.style.top = `${Math.random() * 100}%`
        targetsElement.append(targetElement)

        targetElement.addEventListener('mouseenter', () =>
        {
            targetElement.remove()

            if(targetsElement.children.length === 0)
            {
                const elapsedTime = Date.now() - startTime
                const formatedElapsedTime = elapsedTime / 1000
                
                startElement.innerHTML = `START<br>${formatedElapsedTime}s`
                startElement.style.display = 'block'
            }
        })
    }
}

startElement.addEventListener('click', start)