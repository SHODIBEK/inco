/* eslint-disable indent */
import './vendor';

var preload = document.getElementById('preloader');
var top = document.getElementById('jsanimation');
console.log(top);

window.addEventListener('load', function() {
    setTimeout(function() {
        preload.className += ' fade';
    }, 5500);

    setTimeout(function() {
        top.className += ' play';
    }, 6000);
    setTimeout(function() {
        preload.style.display = 'none';
    }, 6000);
});

$(document).ready(() => {
    let $window = $(window);
    let submenu = $('.btn-submenu');
    let productSlider = $('#product-carousel');
    let advantageSlider = $('#advantage-carousel');
    let advantageThumb = $('#advantage-thumb');
    let mobileSubmenu = $('.mobile-menu .btn-submenu');
    let mobileMenu = $('#menu');
    let advantageCarousel = $('#advantage-slider');
    let newsSlider = $('#news-slider');
    let uploadField = $('#image_uploads');
    let closePopup = $('.js-close');
    let filter = $('.js-navMobile');

    submenu.on('click', (e) => {
        e.preventDefault();
        let $this = $(e.currentTarget);
        $this.parent().toggleClass('is-open');

        $(document).mouseup((e) => {
            if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                $this.parent().removeClass('is-open');
            }
        });
    });

    function parallax() {
        $('#js-scene').mousemove(function(e) {
            parallaxIt(e, '#flask', -30);
            parallaxIt(e, '#flask-second', -100);
        });

        function parallaxIt(e, target, movement) {
            var $this = $('#js-scene');
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            TweenMax.to(target, 1, {
                x: (relX - $this.width() / 2) / $this.width() * movement,
                y: (relY - $this.height() / 2) / $this.height() * movement
            });
        }
    };

    $(window).on('load', () => {
        setTimeout(() => {
            parallax();
        }, 7000);
    });


    productSlider.owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        navText: ['<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5H1M1 7.5L7.5 1M1 7.5L7.5 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L14 7.5M14 7.5L7.5 14M14 7.5L7.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            1024: {
                items: 6,
                dots: false,
            }
        },
    });

    advantageSlider.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        center: true,
        autoplay: true,
        navText: ['<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5H1M1 7.5L7.5 1M1 7.5L7.5 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L14 7.5M14 7.5L7.5 14M14 7.5L7.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
        onInitialized: callback,
    });

    function callback(e) {
        advantageThumb.children().eq(e.page.index + 1).addClass('active');
    };

    advantageSlider.on('changed.owl.carousel', function(e) {
        advantageThumb.children().eq(e.page.index).addClass('active').siblings().removeClass('active');
    });

    mobileSubmenu.on('click', function() {
        var _this = $(this);
        _this.toggleClass('btn-yellow');
        _this.next().slideToggle();
    });

    mobileMenu.on('click', function() {
        var _this = $(this);
        _this.toggleClass('mobile-menu-btn--open');
        $('.js-menu-toggle').slideToggle();
        $('header').toggleClass('header-open');
    });

    if ($window.width() < 1024) {
        advantageCarousel.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            navText: ['<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5H1M1 7.5L7.5 1M1 7.5L7.5 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L14 7.5M14 7.5L7.5 14M14 7.5L7.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
        });

        newsSlider.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            navText: ['<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5H1M1 7.5L7.5 1M1 7.5L7.5 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 7.5L14 7.5M14 7.5L7.5 14M14 7.5L7.5 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
        });

        $window.scroll(function() {
            let e = $('table');

            if (e.length === 1) {
                $('.swipe-table').length === 0 &&
                    $('body').append(
                        '<div class="swipe-table"><span class="swipe_table"></span></div>'
                    );

                let a = e.offset();
                let t = e.innerHeight();
                let i = a.top + t;
                let s = $(window).scrollTop() + $(window).height();

                let l = a.top + (t - 100) / 2;

                i < s &&
                    ($('.swipe-table').css({
                            top: l
                        }),
                        $('.swipe-table').fadeIn('slow'),
                        setTimeout(() => {
                            $('.swipe-table').fadeOut('slow');
                        }, 2500));
            }
        });
    }
    // upload img
    uploadField.on('change', function() {
        if (this.files[0].size > 2097152) {
            this.value = '';
            $('.upload-error').css('display', 'block');
        } else {
            $(this).closest('.upload-img').css('display', 'none');
            $('.upload-done').css('display', 'block');
            $('.upload-error').css('display', 'none');
        };
    });

    closePopup.on('click', function() {
        $(this).closest('.popup').fadeOut();
    });
    jQuery(function($) {
        $(document).mouseup(function(e) {
            var div = $('.popup-wrap');
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.closest('.popup').fadeOut();
            }
        });
    });

    filter.on('click', function() {
        $('.js-mobile-toggle').slideToggle();
    });
});