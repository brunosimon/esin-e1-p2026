const title = document.querySelector('.title')
let isHover = false

title.addEventListener('mouseenter', () =>
{
    isHover = true
})

title.addEventListener('mouseleave', () =>
{
    isHover = false
})

window.setInterval(() =>
{
    if(isHover)
    {
        title.style.color = `hsl(${Math.random() * 360}deg, 100%, 50%)`
    }
}, 100)