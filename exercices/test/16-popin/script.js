const popinOpener = document.querySelector('.popin-opener')
const popin = document.querySelector('.popin')
const close = popin.querySelector('.close')

popinOpener.addEventListener('click', () =>
{
    popin.classList.add('active')
})

close.addEventListener('click', () =>
{
    popin.classList.remove('active')
})

document.addEventListener('keydown', (event) =>
{
    if(event.key === 'Escape')
    {
        popin.classList.remove('active')
    }
})