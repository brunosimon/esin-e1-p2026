const popinOpeners = document.querySelectorAll('.popin-opener')
const popins = document.querySelectorAll('.popin')

for(const popin of popins)
{
    const close = popin.querySelector('.close')
    
    close.addEventListener('click', function()
    {
        popin.classList.remove('is-open')
    })
}

// Loop over all popinOpeners
for(const popinOpener of popinOpeners)
{
    // Listen to clicks on each popin opener
    popinOpener.addEventListener('click', function()
    {
        // Get the "target" attribute
        const target = popinOpener.getAttribute('target')

        // Loop over all popins
        for(const popin of popins)
        {
            // Test if the popin has the same class as target
            // and add the "is-open" class
            if(popin.classList.contains(target))
            {
                popin.classList.add('is-open')
            }
        }
    })
}

window.addEventListener('keydown', function(event)
{
    if(event.code === 'Escape')
    {
        for(const popin of popins)
            popin.classList.remove('is-open')
    }
})
