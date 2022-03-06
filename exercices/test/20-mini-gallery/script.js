const gallery = document.querySelector('.js-mini-gallery')
const thumbnails = gallery.querySelectorAll('.js-thumbnail')
const largeImage = gallery.querySelector('.js-large-image')

largeImage.src = thumbnails[0].href

for(const thumbnail of thumbnails)
{
    thumbnail.addEventListener('click', (event) =>
    {
        event.preventDefault()
        largeImage.src = thumbnail.href
    })
}