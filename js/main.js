$(document).ready(function(){

    // skills-counter
    var isAnimated = false;
    var counters = $('.progress_value');
    var counter = [];
    var circleProgress = document.querySelectorAll('.skills-item');

    for (i = 0; i < counters.length; i++) {
        counter[i] = +counters[i].dataset.value;
    }

    var count = function(start, value, id) {
        setInterval(() => {
            if (start < value) {
                start++;
                counters[id].innerHTML = start + `<span>%</span>`;
            }
        }, 50);
    }

    // function counter
    function startCounter() {
        var offsetTop = $('.skills-wrapper').offset().top;
        if (isAnimated === false && $(window).scrollTop() + 900 > offsetTop) {
            for (j = 0; j < counters.length; j++) {
                count(0, counter[j], j);
            }
            for (i = 0; i < circleProgress.length; i++) {
                circleProgress[i].classList.add("active_animation");
            }
            isAnimated = true;
        }
    }
    // event
    $(window).scroll(startCounter);
    // end counter


    $('.mobile-menu').click(function(){
        $('.header-menu ul').slideToggle(500);
    });


    $('.accordion').on('click', '.accordion-control', function(e) {
        e.preventDefault();
        $(this).next('.accordion-panel').not(':animated').slideToggle();
        $(this).find('.accordion-status').toggleClass('icon-minus open-icon');
        $(this).toggleClass('open-title');
      });


// MAIN SLIDER
      $('.slider').slick({
        speed: 500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
        {
            breakpoint: 1140,
            settings: {
                dots: true
            }
        }
        ]
    });
// END MAIN SLIDER

// END SECOND SLIDER
$('.client-slider').slick({
    dots: true,
    arrows: false,
});
// END SECOND SLIDER


});
