// const menu = document.querySelector('.menu')
const menuTrigger = document.querySelector('.menu-trigger')

menuTrigger.addEventListener('click', function()
{
    if(document.body.classList.contains('menu-visible'))
        document.body.classList.remove('menu-visible')
    else
        document.body.classList.add('menu-visible')
})

window.addEventListener('keydown', function(event)
{
    if(event.code === 'Escape')
        document.body.classList.remove('menu-visible')
})
