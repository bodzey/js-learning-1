const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiceClasses()

        slide.classList.add('active')
    })
}

function clearActiceClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}