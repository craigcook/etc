;(function($) {
    'use strict';

    var $window = $(window);
    var $document = $(document);
    var $body = $('body');

    $body.addClass('js-ready');


    $('.section-how .columns').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass('visible');
        }
    }, { offset: '100%' });

    $('.section-community .stories').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass('visible');
        }
    }, { offset: '100%' });


    $('.section-history .history-slide').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass('visible');
        }
    }, { offset: '100%' });


})(window.jQuery);
