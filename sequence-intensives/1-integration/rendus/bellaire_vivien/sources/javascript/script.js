const buttons = document.querySelectorAll('.section-2 .button')
const contents = document.querySelectorAll('.section-2 .content')

for(const button of buttons)
{
    button.addEventListener(
        'click',
        function()
        {
            for(const content of contents)
            {
                if(content.classList.contains(button.dataset.content))
                {
                    content.classList.add('visible')
                }
                else
                {
                    content.classList.remove('visible')
                }
            }
        }
    )
}

