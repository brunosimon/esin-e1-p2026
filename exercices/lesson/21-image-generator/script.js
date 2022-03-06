const $container = document.querySelector('.image-generator')
const $form = $container.querySelector('.form')
const $count = $container.querySelector('.count')
const $width = $container.querySelector('.width')
const $height = $container.querySelector('.height')
const $generate = $container.querySelector('.generate')
const $images = $container.querySelector('.images')

const generate = (event) =>
{
    event.preventDefault()

    $images.textContent = ''

    // while($images.children.length > 0)
    //     $images.removeChild($images.lastChild)
    
    const count = parseInt($count.value)
    const width = parseInt($width.value)
    const height = parseInt($height.value)

    for(let i = 0; i < count; i++)
    {
        const url = `https://picsum.photos/${width}/${height}?random=${Math.random()}`

        const $image = document.createElement('img')
        $image.setAttribute('src', url)
        $images.append($image)
    }
}

$form.addEventListener('submit', generate)