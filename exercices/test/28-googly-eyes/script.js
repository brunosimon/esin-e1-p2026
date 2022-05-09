const eyes = document.querySelectorAll('.eye')

document.addEventListener('mousemove', (event) =>
{
    const mouseX = event.x
    const mouseY = event.y

    for(const eye of eyes)
    {
        const eyeX = eye.offsetLeft + eye.offsetWidth / 2
        const eyeY = eye.offsetTop + eye.offsetHeight / 2
        
        const deltaX = mouseX - eyeX
        const deltaY = mouseY - eyeY

        const distance = Math.hypot(deltaX, deltaY)
        const radius = Math.min(distance * 0.1, 70)
        
        const angle = Math.atan2(deltaY, deltaX);
        const pupilX = Math.cos(angle) * radius
        const pupilY = Math.sin(angle) * radius
        
        const pupil = eye.children[0]
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`
    }
})