const imageGeneratorElement = document.querySelector('.js-image-generator')
const countElement = imageGeneratorElement.querySelector('.js-count')
const widthElement = imageGeneratorElement.querySelector('.js-width')
const heightElement = imageGeneratorElement.querySelector('.js-height')
const generateElement = imageGeneratorElement.querySelector('.js-generate')
const imagesElement = imageGeneratorElement.querySelector('.js-images')

generateElement.addEventListener('click', () =>
{
    const count = parseInt(countElement.value)
    const width = parseInt(widthElement.value)
    const height = parseInt(heightElement.value)

    // imagesElement.innerHTML = ''
    // imagesElement.textContent = ''
    while(imagesElement.children.length)
    {
        imagesElement.removeChild(imagesElement.lastChild)
    }
    
    for(let i = 0; i < count; i++)
    {
        const url = `https://picsum.photos/${width}/${height}?random=${i}`
        const image = document.createElement('img')
        image.src = url

        imagesElement.append(image)
    }
})