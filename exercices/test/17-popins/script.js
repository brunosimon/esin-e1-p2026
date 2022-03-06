const popinOpeners = document.querySelectorAll('.popin-opener')
const popins = [...document.querySelectorAll('.popin')]

for(const popin of popins)
{
    const close = popin.querySelector('.close')
    close.addEventListener('click', () =>
    {
        popin.classList.remove('active')
    })
}

for(const popinOpener of popinOpeners)
{
    popinOpener.addEventListener('click', () =>
    {
        const targetPopin = popinOpener.dataset.targetPopin

        for(const popin of popins)
        {
            if(popin.classList.contains(targetPopin))
            {
                popin.classList.add('active')
            }
        }
    })
}

document.addEventListener('keydown', (event) =>
{
    if(event.key === 'Escape')
    {
        for(const popin of popins)
        {
            popin.classList.remove('active')
        }
    }
})