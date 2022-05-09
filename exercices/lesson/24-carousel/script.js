const carousel = {}

// Retrieve all elements
carousel.elements = {}
carousel.elements.container = document.querySelector('.js-carousel')
carousel.elements.mover = carousel.elements.container.querySelector('.js-mover')
carousel.elements.thumbnails = [...carousel.elements.container.querySelectorAll('.js-thumbnail')]

// Go to method
carousel.goTo = (index) =>
{
    const x = - index * 600
    carousel.elements.mover.style.transform = `translateX(${x}px)`
}

for(const thumbnail of carousel.elements.thumbnails)
{
    thumbnail.addEventListener('click', (event) =>
    {
        event.preventDefault()

        const index = carousel.elements.thumbnails.indexOf(thumbnail)
        carousel.goTo(index)
    })
}

