const title = document.querySelector('.title')
let isHover = false

title.addEventListener('mouseenter', function()
{
    isHover = true
})

title.addEventListener('mouseleave', function()
{
    isHover = false
    title.style.color = 'black'
})

function changeTitleColor()
{
    if(isHover == true)
    {
        const hue = Math.random() * 360
        title.style.color = `hsl(${hue}deg, 100%, 50%)`
    }
}

window.setInterval(changeTitleColor, 100)
