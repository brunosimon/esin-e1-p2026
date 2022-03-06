const popinOpener = document.querySelector('.popin-opener')
const popin = document.querySelector('.popin')
const close = popin.querySelector('.close')

popinOpener.addEventListener('click', function()
{
    popin.classList.add('is-open')
})

close.addEventListener('click', function()
{
    popin.classList.remove('is-open')
})

window.addEventListener('keydown', function(event)
{
    if(event.key === 'p')
    {
        popin.classList.add('is-open')
    }
    if(event.key === 'Escape')
    {
        popin.classList.remove('is-open')
    }
})