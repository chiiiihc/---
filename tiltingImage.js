
const stickySections = [...document.querySelectorAll('.sticky_wrap2')]

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i])
        console.log(window.sc)
    }

    const element = document.querySelector(".speech");
    const scrollY = window.scrollY;
    if (3300 < scrollY) {

        const a = scrollY - 3300
        element.style.opacity = 0;
        if (a > 0) {
            element.style.opacity += a * 0.003
        }

    } else {
        element.style.opacity = 0
    }
})// Tilting the image
const img = document.getElementById('tiltingImage');
if (scrollY > lastScrollY) {
    // Scrolling down
    img.style.transform = 'rotate(10deg)';
} else {
    // Scrolling up
    img.style.transform = 'rotate(-10deg)';
}
lastScrollY = scrollY;

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.horizontal_scroll2');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}