$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const sidebar = () => {
    let sidbarele = document.querySelector('.sidebar')
    let sideotherside = document.querySelector('.sideotherside')
    if (sidbarele.style.display=="none") {
        sideotherside.classList.toggle('col-lg-10')
        sidbarele.style.display ="flex"
    }
    else{
        sideotherside.classList.toggle('col-lg-10')
        sidbarele.style.display ="none"
    }
} 