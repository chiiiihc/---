const stickySections = [...document.querySelectorAll('.sticky_wrap2')];
let lastScrollY = window.scrollY;

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
    }

    const element = document.querySelector(".speech");
    const scrollY = window.scrollY;
    if (3300 < scrollY) {
        const a = scrollY - 3300;
        element.style.opacity = 0;
        if (a > 0) {
            element.style.opacity += a * 0.003;
        }
    } else {
        element.style.opacity = 0;
    }
    console.log(window.scrollY)

    // // 画像の傾き
    // const img = document.getElementById('tiltingImage');
    // if (scrollY > lastScrollY) {
    //     // スクロールダウン
    //     img.style.transform = 'rotate(10deg)';
    // } else {
    //     // スクロールアップ
    //     img.style.transform = 'rotate(-10deg)';
    // }
    // lastScrollY = scrollY;

});

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.horizontal_scroll2');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}

let lastScrollY4 = window.scrollY;
window.addEventListener('scroll', function () {
    var element = document.getElementById('animateElement0');
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top + window.scrollY;
    var elementHeight = elementRect.height;
    var windowHeight = window.innerHeight;

    if (window.scrollY >= 700 && window.scrollY <= 900) {
        element.classList.add('shake-animation');
        element.style.transform = 'rotate(0deg)'
        console.log('a')
    } else if (lastScrollY4 < this.scrollY) {
        // スクロールダウン
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(8deg)'
    } else if (lastScrollY4 > this.scrollY) {
        // スクロールアップ
        ;
        element.classList.remove('shake-animation');
    } else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY4 = scrollY;

});

window.addEventListener('scroll', function () {

    var element = document.getElementById('animateElement3');
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top + window.scrollY;
    var elementHeight = elementRect.height;
    var windowHeight = window.innerHeight;

    if (window.scrollY >= 2000 && window.scrollY <= 2300) {
        element.classList.add('shake-animation');
        element.style.transform = 'rotate(0deg)'

    } else if (lastScrollY < this.scrollY) {
        // スクロールダウン
        element.style.transform = 'rotate(7deg)';
        element.classList.remove('shake-animation');

    } else if (lastScrollY > this.scrollY) {
        // スクロールアップ
        element.style.transform = 'rotate(-8deg)';
        element.classList.remove('shake-animation');
    } else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY = scrollY;

});

let lastScrollY1 = window.scrollY;
window.addEventListener('scroll', function () {
    var element = document.getElementById('animateElement4');
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top + window.scrollY;
    var elementHeight = elementRect.height;
    var windowHeight = window.innerHeight;

    if (window.scrollY >= 2500 && window.scrollY <= 2800) {
        element.classList.add('shake-animation');
        element.style.transform = 'rotate(0deg)'
        console.log('a')
    } else if (lastScrollY1 < this.scrollY) {
        // スクロールダウン

        element.style.transform = 'rotate(7deg)';
        element.classList.remove('shake-animation');

    } else if (lastScrollY1 > this.scrollY) {
        // スクロールアップ
        element.style.transform = 'rotate(-8deg)';
        element.classList.remove('shake-animation');
    } else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY1 = scrollY;

});

let lastScrollY2 = window.scrollY;
window.addEventListener('scroll', function () {
    var element = document.getElementById('animateElement5');
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top + window.scrollY;
    var elementHeight = elementRect.height;
    var windowHeight = window.innerHeight;

    if (window.scrollY >= 3000 && window.scrollY <= 3200) {
        element.classList.add('shake-animation');
        element.style.transform = 'rotate(0deg)'
        console.log('a')
    } else if (lastScrollY2 < this.scrollY) {
        // スクロールダウン

        element.style.transform = 'rotate(7deg)';
        element.classList.remove('shake-animation');

    } else if (lastScrollY2 > this.scrollY) {
        // スクロールアップ
        element.style.transform = 'rotate(-8deg)';
        element.classList.remove('shake-animation');
    } else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY2 = scrollY;

});

let lastScrollY3 = window.scrollY;
window.addEventListener('scroll', function () {
    var element = document.getElementById('animateElement6');
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top + window.scrollY;
    var elementHeight = elementRect.height;
    var windowHeight = window.innerHeight;

    if (window.scrollY >= 3400 && window.scrollY <= 3600) {
        element.classList.add('shake-animation');
        element.style.transform = 'rotate(0deg)'
        console.log('a')
    } else if (lastScrollY3 < this.scrollY) {
        // スクロールダウン
        element.classList.remove('shake-animation');

    } else if (lastScrollY3 > this.scrollY) {
        // スクロールアップ
        element.style.transform = 'rotate(-8deg)';
        element.classList.remove('shake-animation');
    } else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY3 = scrollY;

});


window.addEventListener('scroll', function () {
    var element = document.getElementById('animateElement2');
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top + window.scrollY;
    var elementHeight = elementRect.height;
    var windowHeight = window.innerHeight;


    if (window.scrollY >= 900 && window.scrollY <= 1200) {
        element.classList.add('shake-animation');
        element.style.transform = 'rotate(0deg)'

        // }else if (lastScrollY < this.window.scrollY) {
        //     // スクロールダウン
        //     element.style.transform = 'rotate(7deg)';
        //     element.classList.remove('shake-animation');

    } else if (1300 < this.window.scrollY) {
        // スクロールアップ
        element.style.transform = 'rotate(8deg)';
        element.classList.remove('shake-animation');
    } else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY = scrollY;
});

// document.addEventListener('scroll', function () {
//     const title = document.querySelector('.title');
//     const font = document.querySelector('.font');
//     const komadori = document.querySelector('.komadori');
//     const img = document.querySelector('.katame img');

//     // Calculate scroll position
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.body.scrollHeight;

//     // Determine the percentage of the page scrolled
//     const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;

//     // Update the styles based on scroll position

//     if (window.scrollY >= 800) {
//         title.style.top = 0;
//         title.style.opacity = 0.1;
//     } else if (windowHeight <= 800) {
//         title.style.top = 100;
//     }else {
//         title.style.opacity = 1 - scrollPercent / 100;
//         title.style.top = 0;
//     }
//     font.style.transform = `scale(${1 - scrollPercent / 100 + 0.3})`;
//     komadori.style.transform = `scale(${1 - scrollPercent / 100 + 0.3})`;
//     img.style.transform = `scale(${1 - scrollPercent / 100 + 0.3})`;
// });
document.addEventListener('DOMContentLoaded', () => {
    const page1Sections = [...document.querySelectorAll('.page1')];
    const element = document.querySelector(".title");

    window.addEventListener('scroll', (e) => {
        for (let i = 0; i < page1Sections.length; i++) {
            transform(page1Sections[i]);
        }

        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        //Calculate scroll position
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        // Determine the percentage of the page scrolled
        const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
        if (scrollY > 700 && scrollY < 3900) {
            const a = scrollY - 500;
            element.style.opacity = 1 - a * 0.003;
            if (element.style.opacity < 0.6) {
                element.style.opacity = 0.6;
                element.style.transform = `scale(0.5)`;
                element.style.transform =`translateY(${Math.max(-350,-a * 0.9)}px) scale(${Math.max(0.7, 1 - a * 0.001)})`;


            }

        } else if (scrollY < 700) {
            // element.style.transform = 'translateY(0px)';
            element.style.transform = `translateY(${-(scrollY * 0.3)}px)`;
            element.style.opacity = 1 + scrollY * 0.003;

        } else {
            element.style.opacity = 0;
            element.style.transform = 'translateY(0px)';
        }
    });

    function transform(section) {
        // Additional transformations for the section if needed
    }
});
