const menu = document.querySelector('.menu')
const menuTrigger = document.querySelector('.menu-trigger')

menuTrigger.addEventListener('click', () =>
{
    if(menu.classList.contains('active'))
    {
        menu.classList.remove('active')
    }
    else
    {
        menu.classList.add('active')
    }
})