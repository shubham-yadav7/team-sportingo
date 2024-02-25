if(document.querySelector('.banner-slider')){
    new Splide('.banner-slider',{
        perPage: 1,
        perMove: 1,
        type: 'loop',
        arrows: false,
        direction: 'ltr',
        height   : '710px',
        autoplay: true,
        interval: 4000,
        wheel: false,
        speed: 2000,
        breakpoints: {
            576: {
                direction: 'ltr',
                height: '500px'
            },
            991: {
                height: '600px'
            },
            1200: {
                height: '700px'
            }
        }
    }).mount();
}


document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
    });
});

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.side-nav').classList.toggle('opened')
})

if(document.querySelector('.services-slider')){
    new Splide('.services-slider', {
        perPage:4,
        perMove: 1,
        gap: '30px',
        arrows: false,
        padding: { left: 300 },
        autoplay: true,
        interval: 4000,
        speed: 2000,
        breakpoints: {
            1800: {
                padding: { left: 200 },
            },
            1600: {
                padding: { left: 50 },
                gap: '20px',
            },
            1200: {
                perPage:3,
            },
            768: {
                perPage:2,
            },
            576: {
                perPage:1,
                padding: { left: 0 },
            }
        }
    }).mount();
}

