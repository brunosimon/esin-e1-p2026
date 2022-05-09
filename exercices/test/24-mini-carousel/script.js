const carousel = {}
carousel.container = document.querySelector('.js-mini-gallery')
carousel.mover = carousel.container.querySelector('.js-mover')
carousel.thumbnails = [...carousel.container.querySelectorAll('.js-thumbnail')]

carousel.goTo = (index) =>
{
    const x = - index * 600
    carousel.mover.style.transform = `translateX(${x}px)`
}

for(const thumbnail of carousel.thumbnails)
{
    const index = carousel.thumbnails.indexOf(thumbnail)
    
    thumbnail.addEventListener('click', (event) =>
    {
        event.preventDefault()
        carousel.goTo(index)
    })
}