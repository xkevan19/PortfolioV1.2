// main Page background slider
$('.main_image_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 3000,
    fade: true,
    autoplay: true,
    arrows: false
})


// Dark Light Mode Button
function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode',) === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
}
const checkbox = document.getElementById("toggle");
document.getElementsByClassName("toggle");
if (checkbox) {
    checkbox.addEventListener('change', () => {
        darkmode();
    });
}
function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    if (localStorage.getItem('darkmode') === 'true') {
        document.body.classList.add("dark-theme");
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}


// portfolio pages Tab buttons
const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        all_content.forEach(content => { content.classList.remove('active') });
        all_content[index].classList.add('active');
    })
})


// Testimonial slider
$(function () {
    $('.testimonial_slider').slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '<span class="prev-arrow"><img src="assets/img/pre-arrow.svg"></span>',
        nextArrow: '<span class="next-arrow"><img src="assets/img/next-arrow.svg"></span>',
    });
});


// news slider
$(function () {
    $('.slider2').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 1250,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: false,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            }
        }
        ]
    });
});

// like heart Button
let icon = document.querySelector('ion-icon');
if (icon !== null) {
    icon.onclick = function () {
        icon.classList.toggle('active');
    }
};

// like heart button counter
var likes = $('.open_likes_count');
(function addLikes() {
    if (!likes.hasClass('liked')) {
        $('.open_likes').one("click", function () {
            likes.text(+likes.text() + 1).addClass('liked');
            addLikes();
        });
    }
    else {
        $('.open_likes').one("click", function () {
            ;
            likes.text(likes.text() - 1).removeClass('liked');
            addLikes();
        });
    }
}());


// Bottom To Top Button
window.addEventListener('scroll', function () {
    var button = document.querySelector('.bottom-top-button');
    if (window.pageYOffset > 100) {
        button.style.display = 'block';

    } else {
        button.style.display = 'none';
    }
});

document.querySelector('.bottom-top-button').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Responsive menu 
$(function () {
    $('.m-menu__checkbox').change(function () {
        $("#wrapper").toggleClass("wrapper_Class");
    });
});

$(".navbar-collapse li a").click(function () {
    $('.wrapper.wrapper_Class').removeClass('wrapper_Class');
});

// icons move on mouse 
document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

// Video Play Button
$('#play-video').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe src="https://www.youtube.com/embed/XlqASr2WvXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) { close_video(); }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

// CURSOR
function initTrion() {
    $("a,button").on({
        mouseenter: function () {
            $(".element-item").addClass("elem_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("elem_hover");
        }
    });
    $("#portfolio_horizontal_container").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_hover");
        }
    });
    $("#portfolio_horizontal").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_hover");
        }
    });
    $("#portfolio_horizontal2").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_hover");
        }
    });

}


var a = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
    }
};
trueMobile = a.any();
if (null == trueMobile) {
    $(function () {
        $.coretemp({
            reloadbox: "#wrapper",
            outDuration: 1200,
            inDuration: 100
        });
        readyFunctions();
        $(document).on({
            ksctbCallback: function () {
                readyFunctions();
            }
        });
    });
    function readyFunctions() {
        initTrion();
    }
}
if (trueMobile) {
    $(document).ready(function () {
        initTrion();
    });

    $("html, body").animate({
        scrollTop: 0
    }, 1);
}
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

if ($(".element-item").length > 0) {
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
    var ratio = 0.15;
    var active = false;
    var ball = document.querySelector('.element-item');
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
    }
    TweenMax.ticker.addEventListener("tick", updatePosition);
    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenMax.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
}

// About counter
var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset()?.top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

            {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                        //alert('finished');
                }

            });
        });
        counted = 1;
    }

});



// Pricing Section Breadcome
$(".btn-toggle-show").click(toggleText(".inner-content"));

function toggleText(element) {
    return function (e) {
        $(this).parent().find(element).slideToggle(300);
        $(this).parent().find(element).toggleClass("para-hide");
        $(this).find("i").toggleClass("rotate");
    }
}

// Pricing Section Breadcome2
$(".btn-toggle-show2").click(toggleText(".inner-content2"));

function toggleText(element) {
    return function (e) {
        $(this).parent().find(element).slideToggle(300);
        $(this).parent().find(element).toggleClass("para-hide2");
        $(this).find("i").toggleClass("rotate2");
    }
}

// Preloader
$(document).ready(function () {
    setTimeout(function () {
        $('#container').addClass('loaded');
        if ($('#container').hasClass('loaded')) {
            $('#preloader').delay(1000).queue(function () {
                $(this).remove();
            });
        }
    }, 1500);
});


// Skill Bar Code
$(window).scroll(function () {
    var hT = $('.progressbar').offset()?.top,
    hH = $('.progressbar').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
        jQuery('.progress-bar').each(function () {
            jQuery(this).find('.progress-content').animate({
                width: jQuery(this).attr('data-percentage')
            }, 1500);

            jQuery(this).find('.progress-number-mark').animate(
                { left: jQuery(this).attr('data-percentage') },
                {
                    duration: 1500,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        jQuery(this).find('.percent-bar').html(data + '%');
                    }
                });
        });
    }
});
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

