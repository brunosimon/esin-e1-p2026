const miniGallery = document.querySelector('.js-mini-gallery')
const largeImage = miniGallery.querySelector('.js-large-image')
const thumbnails = miniGallery.querySelectorAll('.js-thumbnail')

for(const thumbnail of thumbnails)
{
    thumbnail.addEventListener('click', (event) =>
    {
        event.preventDefault()
        
        const href = thumbnail.getAttribute('href')
        largeImage.setAttribute('src', href)
    })
}