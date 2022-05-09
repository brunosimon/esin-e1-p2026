const $hero = document.querySelector('.hero')
const $layers = $hero.querySelectorAll('.layer')
const $images = $hero.querySelectorAll('img')

// Lazy loading
for(const $image of $images)
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

// Mouse parallax
window.addEventListener('mousemove', (event) =>
{
    const ratioX = event.clientX / window.innerWidth - 0.5
    const ratioY = event.clientY / window.innerHeight - 0.5

    let index = 0
    for(const $image of $images)
    {
        const translateX = - ratioX * 10 * index
        const translateY = - ratioY * 10 * index

        $image.style.transform = `translate(${translateX}px, ${translateY}px)`
        
        index++
    }
})

// Scroll parallax
window.addEventListener('scroll', (event) =>
{
    let index = 0
    for(const $layer of $layers)
    {
        const translateY = window.scrollY * (1 - index / 8)
        $layer.style.transform = `translateY(${translateY}px)`

        index++
    }
})