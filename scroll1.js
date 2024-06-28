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

window.addEventListener('scroll', function () {
    var element = document.getElementById('animateElement3');
    var elementRect = element.getBoundingClientRect();
    var elementTop = elementRect.top + window.scrollY;
    var elementHeight = elementRect.height;
    var windowHeight = window.innerHeight;
    
    if (window.scrollY >= 2000 && window.scrollY <= 2300) {
        element.classList.add('shake-animation');
        element.style.transform = 'rotate(0deg)'

    }else if (lastScrollY < this.scrollY) {
        // スクロールダウン
        element.style.transform = 'rotate(7deg)';
        element.classList.remove('shake-animation');

    } else if(lastScrollY > this.scrollY) {
        // スクロールアップ
        element.style.transform = 'rotate(-8deg)';
        element.classList.remove('shake-animation');
    }else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY = scrollY;
    
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

    } else if(1300 < this.window.scrollY) {
        // スクロールアップ
        element.style.transform = 'rotate(8deg)';
        element.classList.remove('shake-animation');
    }else {
        element.classList.remove('shake-animation');
        element.style.transform = 'rotate(0deg)';
    }
    lastScrollY = scrollY;
});
