;(function($) {
    'use strict';

    var $window = $(window);
    var $document = $(document);
    var $body = $('body');
    var $nav = $('.nav-steps');
    var navTop = $nav.offset();
    var navHeight = $nav.height() + 30;


    $body.addClass('js-ready');


    $('.section-ask .call-manifesto').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass('visible');
        }
    }, { offset: '100%' });

    $('.section-learn').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass('visible');
        }
    }, { offset: '100%' });


    $('.section-act .feature').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass('visible');
        }
    }, { offset: '100%' });

    $('.section-discuss .call-light').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass('visible');
        }
    }, { offset: '100%' });


    // Sticky navigation
    var fixed = false;
    var didScroll = false;

    $window.scroll(function() {
        didScroll = true;
    });

    $(document).ready(function() {
        var scrollTop = $window.scrollTop();
        if ( scrollTop >= navTop.top ) {
            didScroll = true;
        }
    });

    function adjustScrollbar() {
        if (didScroll) {
            didScroll = false;
            var scrollTop = $window.scrollTop();
            if( scrollTop >= navTop.top ) {
                if(!fixed) {
                    fixed = true;
                    $nav.addClass('fixed');
                    $('.section-ask').css('padding-top', '220px');
                }
            } else {
                if(fixed) {
                    fixed = false;
                    $nav.removeClass('fixed');
                    $('.section-ask').removeAttr('style');
                }
            }
        }
    }

    // Check for an adjusted scrollbar every 100ms.
    setInterval(adjustScrollbar, 100);

    //Scroll to the linked section
    $document.on('click', '.nav-steps a[href^="#"]', function(e) {
        e.preventDefault();
        // Extract the target element's ID from the link's href.
        var elem = $(this).attr('href').replace( /.*?(#.*)/g, "$1" );
        $('html, body').animate({
            scrollTop: $(elem).offset().top - 55
        }, 1000, function() {
            $(elem).attr('tabindex','100').focus().removeAttr('tabindex');
        });
    });


})(window.jQuery);
