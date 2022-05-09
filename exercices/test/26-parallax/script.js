const $hero = document.querySelector('.hero')
const $heroLayers = $hero.querySelectorAll('.layer')
const $heroImages = $hero.querySelectorAll('img')

// Lazy loading
for(const $image of $heroImages)
{
    if($image.complete)
    {
        $image.classList.add('is-loaded')
    }
    else
    {
        $image.addEventListener('load', () =>
        {
            $image.classList.add('is-loaded')
        })
    }
}

// Cursor parallax
window.addEventListener('mousemove', (event) =>
{
    const mouseX = event.clientX
    const mouseY = event.clientY

    const ratioX = mouseX / window.innerWidth - 0.5
    const ratioY = mouseY / window.innerHeight - 0.5

    let i = 0
    for(const $image of $heroImages)
    {
        const translateX = - ratioX * 10 * i
        const translateY = - ratioY * 10 * i
        $image.style.transform = `translate(${translateX}px, ${translateY}px)`

        i++
    }
})

// Scroll parallax
window.addEventListener('scroll', () =>
{
    const scroll = window.scrollY
    
    let i = 0
    for(const $layer of $heroLayers)
    {
        const translateY = scroll * (1 - i / 8)
        $layer.style.transform = `translateY(${translateY}px)`

        i++
    }
})