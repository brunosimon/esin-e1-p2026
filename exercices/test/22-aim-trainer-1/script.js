const aimTrainerElement = document.querySelector('.aim-trainer')
const startElement = document.querySelector('.start')

let startTime = null

const start = () =>
{
    startElement.style.display = 'none'
    startTime = Date.now()

    for(let i = 0; i < 10; i++)
    {
        const targetElement = document.createElement('div')
        targetElement.classList.add('target')
        targetElement.style.left = `${Math.random() * 100}%`
        targetElement.style.top = `${Math.random() * 100}%`
        aimTrainerElement.append(targetElement)

        targetElement.addEventListener('mouseenter', () =>
        {
            aimTrainerElement.removeChild(targetElement)

            if(aimTrainerElement.children.length === 0)
            {
                const elapsedTime = Date.now() - startTime
                const formatedElapsedTime = (elapsedTime / 1000).toFixed(3)

                startElement.textContent = `${formatedElapsedTime}s`
                startElement.style.display = 'block'
            }
        })
    }
}

startElement.addEventListener('click', start)