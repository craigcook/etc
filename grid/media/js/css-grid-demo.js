/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.

 Portions based on http://blog.gospodarets.com/native_smooth_scrolling/
*/

if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

Mozilla.smoothScroll = (function() {
    'use strict';

    var _smoothScroll;
    var $htmlBody;

    var _init = function(unitTest) {
        var hasSmoothScroll;

        // try to use native smooth scrolling
        if (unitTest) {
            hasSmoothScroll = (unitTest === 'native') ? true : false;
        } else {
            hasSmoothScroll = 'scrollBehavior' in document.documentElement.style;
        }

        // use native smooth scrolling
        if (hasSmoothScroll) {
            _smoothScroll = function(opts) {
                window.scrollTo(opts);
            };
        // otherwise, use jQuery if it's available
        } else if (window.jQuery) {
            $htmlBody = $('html, body');

            _smoothScroll = function(opts) {
                $htmlBody.animate({
                    scrollTop: opts.top,
                    scrollLeft: opts.left
                }, 400);
            };
        // default to regular ol' jump scrolling
        } else {
            _smoothScroll = function(opts) {
                window.scrollTo(opts.top, opts.left);
            };
        }
    };

    /*
    userOpts: object of params (required):
        behavior: type of scrolling. (default: 'smooth')
        top: number of pixels from the top to scroll. (default: 0)
        left: number of pixels from the left to scroll. (default: 0)

    At least one of the two axes (top, left) should be specified.
    */
    return function(userOpts) {
        // set up defaults
        var opts = {
            behavior: userOpts.behavior || 'smooth',
            top: userOpts.top || 0,
            left: userOpts.left || 0
        };

        // lazy load behavior detection
        if (typeof _smoothScroll !== 'function' || userOpts.unitTest) {
            _init(userOpts.unitTest);
        }

        _smoothScroll(opts);
    };
})();

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();

/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global Waypoint */
/* eslint no-unused-vars: [2, { "varsIgnorePattern": "[wW]aypoint" }] */


(function($) {
    'use strict';

    var $document = $(document);
    var $html = $(document.documentElement);
    var utils = Mozilla.Utils;

    var $gridVideo = $('#grid-video');
    var frameSrc = $gridVideo.data('frameSrc');

    var featureQueriesSupported = typeof CSS !== 'undefined' && typeof CSS.supports !== 'undefined';

    if (window.Mozilla.Client.isFirefox) {
        if (featureQueriesSupported && CSS.supports('display', 'grid')) {
            $html.addClass('firefox-has-grid');
        } else {
            $html.addClass('old-firefox');
            $gridVideo.attr('src', frameSrc);
        }
    } else {
        $html.addClass('not-firefox');
        $gridVideo.attr('src', frameSrc);
    }

    if (window.Mozilla.Client.isMobile) {
        $html.addClass('not-desktop');
    }


    var tallMode = false;

    if (typeof matchMedia !== 'undefined') {
        // Check window height
        var queryTall = matchMedia('(min-height: 650px)');
        if (queryTall.matches) {
            tallMode = true;
        } else {
            tallMode = false;
        }

        queryTall.addListener(function(mq) {
            if (mq.matches) {
                tallMode = true;
            } else {
                tallMode = false;
            }
        });
    }


    // Scroll smoothly to the linked section
    $document.on('click', '#page-nav .page-nav-menu a[href^="#"]', function(e) {
        e.preventDefault();
        // Extract the target element's ID from the link's href.
        var elem = $(this).attr('href').replace(/.*?(#.*)/g, '$1');
        var offset = $(elem).offset().top;

        Mozilla.smoothScroll({
            top: offset
        });
    });


    // Switch demo styles
    $document.on('click', '.demo-controls .example-switch', function() {
        var demoId = $(this).parents('.demo-section').attr('id');
        var demo = $('#' + demoId);
        var switches = $(this).parents('.demo-controls').find('.example-switch');
        var newClass = $(this).data('example-class');

        demo.removeClass('example-1 example-2 example-3').addClass(newClass);
        switches.removeClass('active');
        $(this).addClass('active');

        window.dataLayer.push({
            'eAction': 'button click', // action
            'eLabel': demoId + ' - ' + newClass, // label
            'event': 'in-page-interaction'
        });
    });


    // Set up the sticky download bar
    var $fxdownload = $('#download-firefox');
    var buttonClose = '<button type="button" class="close" title="'+ utils.trans('global-close') +'">'+ utils.trans('global-close') +'</button>';

    // If the bar exists and the window is tall
    if (tallMode) {
        // Initiate the sticky download bar
        initStickyBar();

        // Unstick the download bar when we reach the footer
        var unstickBarWaypoint = new Waypoint({
            element: $('#colophon'),
            offset: '102%',
            handler: function(direction) {
                if ((direction === 'down') && (!$html.hasClass('download-closed'))) {
                    $fxdownload.removeClass('stuck').removeAttr('style').find('.close').remove();
                } else if ((direction === 'up') && (!$html.hasClass('download-closed'))) {
                    $fxdownload.addClass('stuck').append(buttonClose);
                    initUnstickBar();
                }
            }
        });
    }

    // Show the sticky download bar
    function initStickyBar() {
        setTimeout(function() {
            $fxdownload.addClass('stuck').append(buttonClose).css({ bottom: '-' + $fxdownload.height() + 'px' }).animate({ bottom: '0' }, 750);
            initUnstickBar();
        }, 500);
    }

    // Dismiss the sticky download bar
    function initUnstickBar() {
        $('#download-firefox button.close').on('click', function() {
            $fxdownload.animate({ bottom: '-' + $fxdownload.height() + 'px' }, 500, function() {
                $fxdownload.removeClass('stuck').removeAttr('style').find('.close').remove();
            });

            // A class lets us check if the bar was dismissed on purpose
            // so we don't show it again during scrolling
            $html.addClass('download-closed');
        });
    }

    // Count right clicks
    $(document).on('click', function(e) {
        if (e.button === 2) {
            window.dataLayer.push({
                'eAction': 'click',
                'eLabel': 'Right click',
                'event': 'in-page-interaction'
            });
        }
    });

})(window.jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2Jhc2UvbW96aWxsYS1zbW9vdGhzY3JvbGwuanMiLCJqcy9saWJzL2pxdWVyeS53YXlwb2ludHMubWluLmpzIiwianMvbGlicy9qcXVlcnkud2F5cG9pbnRzLXN0aWNreS5taW4uanMiLCJqcy9tb3pvcmcvZGV2ZWxvcGVyL2Nzcy1ncmlkLWRlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvQlVORExFUy9jc3MtZ3JpZC1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuIFBvcnRpb25zIGJhc2VkIG9uIGh0dHA6Ly9ibG9nLmdvc3BvZGFyZXRzLmNvbS9uYXRpdmVfc21vb3RoX3Njcm9sbGluZy9cbiovXG5cbmlmICh0eXBlb2Ygd2luZG93Lk1vemlsbGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1vemlsbGEgPSB7fTtcbn1cblxuTW96aWxsYS5zbW9vdGhTY3JvbGwgPSAoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIF9zbW9vdGhTY3JvbGw7XG4gICAgdmFyICRodG1sQm9keTtcblxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKHVuaXRUZXN0KSB7XG4gICAgICAgIHZhciBoYXNTbW9vdGhTY3JvbGw7XG5cbiAgICAgICAgLy8gdHJ5IHRvIHVzZSBuYXRpdmUgc21vb3RoIHNjcm9sbGluZ1xuICAgICAgICBpZiAodW5pdFRlc3QpIHtcbiAgICAgICAgICAgIGhhc1Ntb290aFNjcm9sbCA9ICh1bml0VGVzdCA9PT0gJ25hdGl2ZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFzU21vb3RoU2Nyb2xsID0gJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1c2UgbmF0aXZlIHNtb290aCBzY3JvbGxpbmdcbiAgICAgICAgaWYgKGhhc1Ntb290aFNjcm9sbCkge1xuICAgICAgICAgICAgX3Ntb290aFNjcm9sbCA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAvLyBvdGhlcndpc2UsIHVzZSBqUXVlcnkgaWYgaXQncyBhdmFpbGFibGVcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgICAgICAkaHRtbEJvZHkgPSAkKCdodG1sLCBib2R5Jyk7XG5cbiAgICAgICAgICAgIF9zbW9vdGhTY3JvbGwgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAgICAgJGh0bWxCb2R5LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9wdHMudG9wLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBvcHRzLmxlZnRcbiAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgLy8gZGVmYXVsdCB0byByZWd1bGFyIG9sJyBqdW1wIHNjcm9sbGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Ntb290aFNjcm9sbCA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0cy50b3AsIG9wdHMubGVmdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgdXNlck9wdHM6IG9iamVjdCBvZiBwYXJhbXMgKHJlcXVpcmVkKTpcbiAgICAgICAgYmVoYXZpb3I6IHR5cGUgb2Ygc2Nyb2xsaW5nLiAoZGVmYXVsdDogJ3Ntb290aCcpXG4gICAgICAgIHRvcDogbnVtYmVyIG9mIHBpeGVscyBmcm9tIHRoZSB0b3AgdG8gc2Nyb2xsLiAoZGVmYXVsdDogMClcbiAgICAgICAgbGVmdDogbnVtYmVyIG9mIHBpeGVscyBmcm9tIHRoZSBsZWZ0IHRvIHNjcm9sbC4gKGRlZmF1bHQ6IDApXG5cbiAgICBBdCBsZWFzdCBvbmUgb2YgdGhlIHR3byBheGVzICh0b3AsIGxlZnQpIHNob3VsZCBiZSBzcGVjaWZpZWQuXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24odXNlck9wdHMpIHtcbiAgICAgICAgLy8gc2V0IHVwIGRlZmF1bHRzXG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgYmVoYXZpb3I6IHVzZXJPcHRzLmJlaGF2aW9yIHx8ICdzbW9vdGgnLFxuICAgICAgICAgICAgdG9wOiB1c2VyT3B0cy50b3AgfHwgMCxcbiAgICAgICAgICAgIGxlZnQ6IHVzZXJPcHRzLmxlZnQgfHwgMFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGxhenkgbG9hZCBiZWhhdmlvciBkZXRlY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBfc21vb3RoU2Nyb2xsICE9PSAnZnVuY3Rpb24nIHx8IHVzZXJPcHRzLnVuaXRUZXN0KSB7XG4gICAgICAgICAgICBfaW5pdCh1c2VyT3B0cy51bml0VGVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBfc21vb3RoU2Nyb2xsKG9wdHMpO1xuICAgIH07XG59KSgpO1xuIiwiLyohXG5XYXlwb2ludHMgLSA0LjAuMVxuQ29weXJpZ2h0IMKpIDIwMTEtMjAxNiBDYWxlYiBUcm91Z2h0b25cbkxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbmh0dHBzOi8vZ2l0aHViLmNvbS9pbWFrZXdlYnRoaW5ncy93YXlwb2ludHMvYmxvYi9tYXN0ZXIvbGljZW5zZXMudHh0XG4qL1xuIWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChvKXtpZighbyl0aHJvdyBuZXcgRXJyb3IoXCJObyBvcHRpb25zIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvclwiKTtpZighby5lbGVtZW50KXRocm93IG5ldyBFcnJvcihcIk5vIGVsZW1lbnQgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvclwiKTtpZighby5oYW5kbGVyKXRocm93IG5ldyBFcnJvcihcIk5vIGhhbmRsZXIgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvclwiKTt0aGlzLmtleT1cIndheXBvaW50LVwiK2UsdGhpcy5vcHRpb25zPXQuQWRhcHRlci5leHRlbmQoe30sdC5kZWZhdWx0cyxvKSx0aGlzLmVsZW1lbnQ9dGhpcy5vcHRpb25zLmVsZW1lbnQsdGhpcy5hZGFwdGVyPW5ldyB0LkFkYXB0ZXIodGhpcy5lbGVtZW50KSx0aGlzLmNhbGxiYWNrPW8uaGFuZGxlcix0aGlzLmF4aXM9dGhpcy5vcHRpb25zLmhvcml6b250YWw/XCJob3Jpem9udGFsXCI6XCJ2ZXJ0aWNhbFwiLHRoaXMuZW5hYmxlZD10aGlzLm9wdGlvbnMuZW5hYmxlZCx0aGlzLnRyaWdnZXJQb2ludD1udWxsLHRoaXMuZ3JvdXA9dC5Hcm91cC5maW5kT3JDcmVhdGUoe25hbWU6dGhpcy5vcHRpb25zLmdyb3VwLGF4aXM6dGhpcy5heGlzfSksdGhpcy5jb250ZXh0PXQuQ29udGV4dC5maW5kT3JDcmVhdGVCeUVsZW1lbnQodGhpcy5vcHRpb25zLmNvbnRleHQpLHQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XSYmKHRoaXMub3B0aW9ucy5vZmZzZXQ9dC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdKSx0aGlzLmdyb3VwLmFkZCh0aGlzKSx0aGlzLmNvbnRleHQuYWRkKHRoaXMpLGlbdGhpcy5rZXldPXRoaXMsZSs9MX12YXIgZT0wLGk9e307dC5wcm90b3R5cGUucXVldWVUcmlnZ2VyPWZ1bmN0aW9uKHQpe3RoaXMuZ3JvdXAucXVldWVUcmlnZ2VyKHRoaXMsdCl9LHQucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCl7dGhpcy5lbmFibGVkJiZ0aGlzLmNhbGxiYWNrJiZ0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMsdCl9LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNvbnRleHQucmVtb3ZlKHRoaXMpLHRoaXMuZ3JvdXAucmVtb3ZlKHRoaXMpLGRlbGV0ZSBpW3RoaXMua2V5XX0sdC5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuYWJsZWQ9ITEsdGhpc30sdC5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dC5yZWZyZXNoKCksdGhpcy5lbmFibGVkPSEwLHRoaXN9LHQucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ncm91cC5uZXh0KHRoaXMpfSx0LnByb3RvdHlwZS5wcmV2aW91cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdyb3VwLnByZXZpb3VzKHRoaXMpfSx0Lmludm9rZUFsbD1mdW5jdGlvbih0KXt2YXIgZT1bXTtmb3IodmFyIG8gaW4gaSllLnB1c2goaVtvXSk7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtyPm47bisrKWVbbl1bdF0oKX0sdC5kZXN0cm95QWxsPWZ1bmN0aW9uKCl7dC5pbnZva2VBbGwoXCJkZXN0cm95XCIpfSx0LmRpc2FibGVBbGw9ZnVuY3Rpb24oKXt0Lmludm9rZUFsbChcImRpc2FibGVcIil9LHQuZW5hYmxlQWxsPWZ1bmN0aW9uKCl7dC5Db250ZXh0LnJlZnJlc2hBbGwoKTtmb3IodmFyIGUgaW4gaSlpW2VdLmVuYWJsZWQ9ITA7cmV0dXJuIHRoaXN9LHQucmVmcmVzaEFsbD1mdW5jdGlvbigpe3QuQ29udGV4dC5yZWZyZXNoQWxsKCl9LHQudmlld3BvcnRIZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmlubmVySGVpZ2h0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fSx0LnZpZXdwb3J0V2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRofSx0LmFkYXB0ZXJzPVtdLHQuZGVmYXVsdHM9e2NvbnRleHQ6d2luZG93LGNvbnRpbnVvdXM6ITAsZW5hYmxlZDohMCxncm91cDpcImRlZmF1bHRcIixob3Jpem9udGFsOiExLG9mZnNldDowfSx0Lm9mZnNldEFsaWFzZXM9e1wiYm90dG9tLWluLXZpZXdcIjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHQuaW5uZXJIZWlnaHQoKS10aGlzLmFkYXB0ZXIub3V0ZXJIZWlnaHQoKX0sXCJyaWdodC1pbi12aWV3XCI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0LmlubmVyV2lkdGgoKS10aGlzLmFkYXB0ZXIub3V0ZXJXaWR0aCgpfX0sd2luZG93LldheXBvaW50PXR9KCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3dpbmRvdy5zZXRUaW1lb3V0KHQsMWUzLzYwKX1mdW5jdGlvbiBlKHQpe3RoaXMuZWxlbWVudD10LHRoaXMuQWRhcHRlcj1uLkFkYXB0ZXIsdGhpcy5hZGFwdGVyPW5ldyB0aGlzLkFkYXB0ZXIodCksdGhpcy5rZXk9XCJ3YXlwb2ludC1jb250ZXh0LVwiK2ksdGhpcy5kaWRTY3JvbGw9ITEsdGhpcy5kaWRSZXNpemU9ITEsdGhpcy5vbGRTY3JvbGw9e3g6dGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSx5OnRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKX0sdGhpcy53YXlwb2ludHM9e3ZlcnRpY2FsOnt9LGhvcml6b250YWw6e319LHQud2F5cG9pbnRDb250ZXh0S2V5PXRoaXMua2V5LG9bdC53YXlwb2ludENvbnRleHRLZXldPXRoaXMsaSs9MSxuLndpbmRvd0NvbnRleHR8fChuLndpbmRvd0NvbnRleHQ9ITAsbi53aW5kb3dDb250ZXh0PW5ldyBlKHdpbmRvdykpLHRoaXMuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcigpLHRoaXMuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcigpfXZhciBpPTAsbz17fSxuPXdpbmRvdy5XYXlwb2ludCxyPXdpbmRvdy5vbmxvYWQ7ZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQub3B0aW9ucy5ob3Jpem9udGFsP1wiaG9yaXpvbnRhbFwiOlwidmVydGljYWxcIjt0aGlzLndheXBvaW50c1tlXVt0LmtleV09dCx0aGlzLnJlZnJlc2goKX0sZS5wcm90b3R5cGUuY2hlY2tFbXB0eT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLmhvcml6b250YWwpLGU9dGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMudmVydGljYWwpLGk9dGhpcy5lbGVtZW50PT10aGlzLmVsZW1lbnQud2luZG93O3QmJmUmJiFpJiYodGhpcy5hZGFwdGVyLm9mZihcIi53YXlwb2ludHNcIiksZGVsZXRlIG9bdGhpcy5rZXldKX0sZS5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtlLmhhbmRsZVJlc2l6ZSgpLGUuZGlkUmVzaXplPSExfXZhciBlPXRoaXM7dGhpcy5hZGFwdGVyLm9uKFwicmVzaXplLndheXBvaW50c1wiLGZ1bmN0aW9uKCl7ZS5kaWRSZXNpemV8fChlLmRpZFJlc2l6ZT0hMCxuLnJlcXVlc3RBbmltYXRpb25GcmFtZSh0KSl9KX0sZS5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtlLmhhbmRsZVNjcm9sbCgpLGUuZGlkU2Nyb2xsPSExfXZhciBlPXRoaXM7dGhpcy5hZGFwdGVyLm9uKFwic2Nyb2xsLndheXBvaW50c1wiLGZ1bmN0aW9uKCl7KCFlLmRpZFNjcm9sbHx8bi5pc1RvdWNoKSYmKGUuZGlkU2Nyb2xsPSEwLG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpKX0pfSxlLnByb3RvdHlwZS5oYW5kbGVSZXNpemU9ZnVuY3Rpb24oKXtuLkNvbnRleHQucmVmcmVzaEFsbCgpfSxlLnByb3RvdHlwZS5oYW5kbGVTY3JvbGw9ZnVuY3Rpb24oKXt2YXIgdD17fSxlPXtob3Jpem9udGFsOntuZXdTY3JvbGw6dGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueCxmb3J3YXJkOlwicmlnaHRcIixiYWNrd2FyZDpcImxlZnRcIn0sdmVydGljYWw6e25ld1Njcm9sbDp0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKCksb2xkU2Nyb2xsOnRoaXMub2xkU2Nyb2xsLnksZm9yd2FyZDpcImRvd25cIixiYWNrd2FyZDpcInVwXCJ9fTtmb3IodmFyIGkgaW4gZSl7dmFyIG89ZVtpXSxuPW8ubmV3U2Nyb2xsPm8ub2xkU2Nyb2xsLHI9bj9vLmZvcndhcmQ6by5iYWNrd2FyZDtmb3IodmFyIHMgaW4gdGhpcy53YXlwb2ludHNbaV0pe3ZhciBhPXRoaXMud2F5cG9pbnRzW2ldW3NdO2lmKG51bGwhPT1hLnRyaWdnZXJQb2ludCl7dmFyIGw9by5vbGRTY3JvbGw8YS50cmlnZ2VyUG9pbnQsaD1vLm5ld1Njcm9sbD49YS50cmlnZ2VyUG9pbnQscD1sJiZoLHU9IWwmJiFoOyhwfHx1KSYmKGEucXVldWVUcmlnZ2VyKHIpLHRbYS5ncm91cC5pZF09YS5ncm91cCl9fX1mb3IodmFyIGMgaW4gdCl0W2NdLmZsdXNoVHJpZ2dlcnMoKTt0aGlzLm9sZFNjcm9sbD17eDplLmhvcml6b250YWwubmV3U2Nyb2xsLHk6ZS52ZXJ0aWNhbC5uZXdTY3JvbGx9fSxlLnByb3RvdHlwZS5pbm5lckhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQ9PXRoaXMuZWxlbWVudC53aW5kb3c/bi52aWV3cG9ydEhlaWdodCgpOnRoaXMuYWRhcHRlci5pbm5lckhlaWdodCgpfSxlLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCl7ZGVsZXRlIHRoaXMud2F5cG9pbnRzW3QuYXhpc11bdC5rZXldLHRoaXMuY2hlY2tFbXB0eSgpfSxlLnByb3RvdHlwZS5pbm5lcldpZHRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudD09dGhpcy5lbGVtZW50LndpbmRvdz9uLnZpZXdwb3J0V2lkdGgoKTp0aGlzLmFkYXB0ZXIuaW5uZXJXaWR0aCgpfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIHQ9W107Zm9yKHZhciBlIGluIHRoaXMud2F5cG9pbnRzKWZvcih2YXIgaSBpbiB0aGlzLndheXBvaW50c1tlXSl0LnB1c2godGhpcy53YXlwb2ludHNbZV1baV0pO2Zvcih2YXIgbz0wLG49dC5sZW5ndGg7bj5vO28rKyl0W29dLmRlc3Ryb3koKX0sZS5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5lbGVtZW50PT10aGlzLmVsZW1lbnQud2luZG93LGk9ZT92b2lkIDA6dGhpcy5hZGFwdGVyLm9mZnNldCgpLG89e307dGhpcy5oYW5kbGVTY3JvbGwoKSx0PXtob3Jpem9udGFsOntjb250ZXh0T2Zmc2V0OmU/MDppLmxlZnQsY29udGV4dFNjcm9sbDplPzA6dGhpcy5vbGRTY3JvbGwueCxjb250ZXh0RGltZW5zaW9uOnRoaXMuaW5uZXJXaWR0aCgpLG9sZFNjcm9sbDp0aGlzLm9sZFNjcm9sbC54LGZvcndhcmQ6XCJyaWdodFwiLGJhY2t3YXJkOlwibGVmdFwiLG9mZnNldFByb3A6XCJsZWZ0XCJ9LHZlcnRpY2FsOntjb250ZXh0T2Zmc2V0OmU/MDppLnRvcCxjb250ZXh0U2Nyb2xsOmU/MDp0aGlzLm9sZFNjcm9sbC55LGNvbnRleHREaW1lbnNpb246dGhpcy5pbm5lckhlaWdodCgpLG9sZFNjcm9sbDp0aGlzLm9sZFNjcm9sbC55LGZvcndhcmQ6XCJkb3duXCIsYmFja3dhcmQ6XCJ1cFwiLG9mZnNldFByb3A6XCJ0b3BcIn19O2Zvcih2YXIgciBpbiB0KXt2YXIgcz10W3JdO2Zvcih2YXIgYSBpbiB0aGlzLndheXBvaW50c1tyXSl7dmFyIGwsaCxwLHUsYyxkPXRoaXMud2F5cG9pbnRzW3JdW2FdLGY9ZC5vcHRpb25zLm9mZnNldCx3PWQudHJpZ2dlclBvaW50LHk9MCxnPW51bGw9PXc7ZC5lbGVtZW50IT09ZC5lbGVtZW50LndpbmRvdyYmKHk9ZC5hZGFwdGVyLm9mZnNldCgpW3Mub2Zmc2V0UHJvcF0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGY/Zj1mLmFwcGx5KGQpOlwic3RyaW5nXCI9PXR5cGVvZiBmJiYoZj1wYXJzZUZsb2F0KGYpLGQub3B0aW9ucy5vZmZzZXQuaW5kZXhPZihcIiVcIik+LTEmJihmPU1hdGguY2VpbChzLmNvbnRleHREaW1lbnNpb24qZi8xMDApKSksbD1zLmNvbnRleHRTY3JvbGwtcy5jb250ZXh0T2Zmc2V0LGQudHJpZ2dlclBvaW50PU1hdGguZmxvb3IoeStsLWYpLGg9dzxzLm9sZFNjcm9sbCxwPWQudHJpZ2dlclBvaW50Pj1zLm9sZFNjcm9sbCx1PWgmJnAsYz0haCYmIXAsIWcmJnU/KGQucXVldWVUcmlnZ2VyKHMuYmFja3dhcmQpLG9bZC5ncm91cC5pZF09ZC5ncm91cCk6IWcmJmM/KGQucXVldWVUcmlnZ2VyKHMuZm9yd2FyZCksb1tkLmdyb3VwLmlkXT1kLmdyb3VwKTpnJiZzLm9sZFNjcm9sbD49ZC50cmlnZ2VyUG9pbnQmJihkLnF1ZXVlVHJpZ2dlcihzLmZvcndhcmQpLG9bZC5ncm91cC5pZF09ZC5ncm91cCl9fXJldHVybiBuLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2Zvcih2YXIgdCBpbiBvKW9bdF0uZmx1c2hUcmlnZ2VycygpfSksdGhpc30sZS5maW5kT3JDcmVhdGVCeUVsZW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuZmluZEJ5RWxlbWVudCh0KXx8bmV3IGUodCl9LGUucmVmcmVzaEFsbD1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiBvKW9bdF0ucmVmcmVzaCgpfSxlLmZpbmRCeUVsZW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIG9bdC53YXlwb2ludENvbnRleHRLZXldfSx3aW5kb3cub25sb2FkPWZ1bmN0aW9uKCl7ciYmcigpLGUucmVmcmVzaEFsbCgpfSxuLnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihlKXt2YXIgaT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0O2kuY2FsbCh3aW5kb3csZSl9LG4uQ29udGV4dD1lfSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpe3JldHVybiB0LnRyaWdnZXJQb2ludC1lLnRyaWdnZXJQb2ludH1mdW5jdGlvbiBlKHQsZSl7cmV0dXJuIGUudHJpZ2dlclBvaW50LXQudHJpZ2dlclBvaW50fWZ1bmN0aW9uIGkodCl7dGhpcy5uYW1lPXQubmFtZSx0aGlzLmF4aXM9dC5heGlzLHRoaXMuaWQ9dGhpcy5uYW1lK1wiLVwiK3RoaXMuYXhpcyx0aGlzLndheXBvaW50cz1bXSx0aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpLG9bdGhpcy5heGlzXVt0aGlzLm5hbWVdPXRoaXN9dmFyIG89e3ZlcnRpY2FsOnt9LGhvcml6b250YWw6e319LG49d2luZG93LldheXBvaW50O2kucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt0aGlzLndheXBvaW50cy5wdXNoKHQpfSxpLnByb3RvdHlwZS5jbGVhclRyaWdnZXJRdWV1ZXM9ZnVuY3Rpb24oKXt0aGlzLnRyaWdnZXJRdWV1ZXM9e3VwOltdLGRvd246W10sbGVmdDpbXSxyaWdodDpbXX19LGkucHJvdG90eXBlLmZsdXNoVHJpZ2dlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIGkgaW4gdGhpcy50cmlnZ2VyUXVldWVzKXt2YXIgbz10aGlzLnRyaWdnZXJRdWV1ZXNbaV0sbj1cInVwXCI9PT1pfHxcImxlZnRcIj09PWk7by5zb3J0KG4/ZTp0KTtmb3IodmFyIHI9MCxzPW8ubGVuZ3RoO3M+cjtyKz0xKXt2YXIgYT1vW3JdOyhhLm9wdGlvbnMuY29udGludW91c3x8cj09PW8ubGVuZ3RoLTEpJiZhLnRyaWdnZXIoW2ldKX19dGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKX0saS5wcm90b3R5cGUubmV4dD1mdW5jdGlvbihlKXt0aGlzLndheXBvaW50cy5zb3J0KHQpO3ZhciBpPW4uQWRhcHRlci5pbkFycmF5KGUsdGhpcy53YXlwb2ludHMpLG89aT09PXRoaXMud2F5cG9pbnRzLmxlbmd0aC0xO3JldHVybiBvP251bGw6dGhpcy53YXlwb2ludHNbaSsxXX0saS5wcm90b3R5cGUucHJldmlvdXM9ZnVuY3Rpb24oZSl7dGhpcy53YXlwb2ludHMuc29ydCh0KTt2YXIgaT1uLkFkYXB0ZXIuaW5BcnJheShlLHRoaXMud2F5cG9pbnRzKTtyZXR1cm4gaT90aGlzLndheXBvaW50c1tpLTFdOm51bGx9LGkucHJvdG90eXBlLnF1ZXVlVHJpZ2dlcj1mdW5jdGlvbih0LGUpe3RoaXMudHJpZ2dlclF1ZXVlc1tlXS5wdXNoKHQpfSxpLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9bi5BZGFwdGVyLmluQXJyYXkodCx0aGlzLndheXBvaW50cyk7ZT4tMSYmdGhpcy53YXlwb2ludHMuc3BsaWNlKGUsMSl9LGkucHJvdG90eXBlLmZpcnN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMud2F5cG9pbnRzWzBdfSxpLnByb3RvdHlwZS5sYXN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMud2F5cG9pbnRzW3RoaXMud2F5cG9pbnRzLmxlbmd0aC0xXX0saS5maW5kT3JDcmVhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIG9bdC5heGlzXVt0Lm5hbWVdfHxuZXcgaSh0KX0sbi5Hcm91cD1pfSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXt0aGlzLiRlbGVtZW50PWUodCl9dmFyIGU9d2luZG93LmpRdWVyeSxpPXdpbmRvdy5XYXlwb2ludDtlLmVhY2goW1wiaW5uZXJIZWlnaHRcIixcImlubmVyV2lkdGhcIixcIm9mZlwiLFwib2Zmc2V0XCIsXCJvblwiLFwib3V0ZXJIZWlnaHRcIixcIm91dGVyV2lkdGhcIixcInNjcm9sbExlZnRcIixcInNjcm9sbFRvcFwiXSxmdW5jdGlvbihlLGkpe3QucHJvdG90eXBlW2ldPWZ1bmN0aW9uKCl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtyZXR1cm4gdGhpcy4kZWxlbWVudFtpXS5hcHBseSh0aGlzLiRlbGVtZW50LHQpfX0pLGUuZWFjaChbXCJleHRlbmRcIixcImluQXJyYXlcIixcImlzRW1wdHlPYmplY3RcIl0sZnVuY3Rpb24oaSxvKXt0W29dPWVbb119KSxpLmFkYXB0ZXJzLnB1c2goe25hbWU6XCJqcXVlcnlcIixBZGFwdGVyOnR9KSxpLkFkYXB0ZXI9dH0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGk9W10sbz1hcmd1bWVudHNbMF07cmV0dXJuIHQuaXNGdW5jdGlvbihhcmd1bWVudHNbMF0pJiYobz10LmV4dGVuZCh7fSxhcmd1bWVudHNbMV0pLG8uaGFuZGxlcj1hcmd1bWVudHNbMF0pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBuPXQuZXh0ZW5kKHt9LG8se2VsZW1lbnQ6dGhpc30pO1wic3RyaW5nXCI9PXR5cGVvZiBuLmNvbnRleHQmJihuLmNvbnRleHQ9dCh0aGlzKS5jbG9zZXN0KG4uY29udGV4dClbMF0pLGkucHVzaChuZXcgZShuKSl9KSxpfX12YXIgZT13aW5kb3cuV2F5cG9pbnQ7d2luZG93LmpRdWVyeSYmKHdpbmRvdy5qUXVlcnkuZm4ud2F5cG9pbnQ9dCh3aW5kb3cualF1ZXJ5KSksd2luZG93LlplcHRvJiYod2luZG93LlplcHRvLmZuLndheXBvaW50PXQod2luZG93LlplcHRvKSl9KCk7XG4iLCIvKiFcbldheXBvaW50cyBTdGlja3kgRWxlbWVudCBTaG9ydGN1dCAtIDQuMC4xXG5Db3B5cmlnaHQgwqkgMjAxMS0yMDE2IENhbGViIFRyb3VnaHRvblxuTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuaHR0cHM6Ly9naXRodWIuY29tL2ltYWtld2VidGhpbmdzL3dheXBvaW50cy9ibG9iL21hc3Rlci9saWNlbnNlcy50eHRcbiovXG4hZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHMpe3RoaXMub3B0aW9ucz1lLmV4dGVuZCh7fSxpLmRlZmF1bHRzLHQuZGVmYXVsdHMscyksdGhpcy5lbGVtZW50PXRoaXMub3B0aW9ucy5lbGVtZW50LHRoaXMuJGVsZW1lbnQ9ZSh0aGlzLmVsZW1lbnQpLHRoaXMuY3JlYXRlV3JhcHBlcigpLHRoaXMuY3JlYXRlV2F5cG9pbnQoKX12YXIgZT13aW5kb3cualF1ZXJ5LGk9d2luZG93LldheXBvaW50O3QucHJvdG90eXBlLmNyZWF0ZVdheXBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLmhhbmRsZXI7dGhpcy53YXlwb2ludD1uZXcgaShlLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMse2VsZW1lbnQ6dGhpcy53cmFwcGVyLGhhbmRsZXI6ZS5wcm94eShmdW5jdGlvbihlKXt2YXIgaT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLmluZGV4T2YoZSk+LTEscz1pP3RoaXMuJGVsZW1lbnQub3V0ZXJIZWlnaHQoITApOlwiXCI7dGhpcy4kd3JhcHBlci5oZWlnaHQocyksdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuc3R1Y2tDbGFzcyxpKSx0JiZ0LmNhbGwodGhpcyxlKX0sdGhpcyl9KSl9LHQucHJvdG90eXBlLmNyZWF0ZVdyYXBwZXI9ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMud3JhcHBlciYmdGhpcy4kZWxlbWVudC53cmFwKHRoaXMub3B0aW9ucy53cmFwcGVyKSx0aGlzLiR3cmFwcGVyPXRoaXMuJGVsZW1lbnQucGFyZW50KCksdGhpcy53cmFwcGVyPXRoaXMuJHdyYXBwZXJbMF19LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnBhcmVudCgpWzBdPT09dGhpcy53cmFwcGVyJiYodGhpcy53YXlwb2ludC5kZXN0cm95KCksdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc3R1Y2tDbGFzcyksdGhpcy5vcHRpb25zLndyYXBwZXImJnRoaXMuJGVsZW1lbnQudW53cmFwKCkpfSx0LmRlZmF1bHRzPXt3cmFwcGVyOic8ZGl2IGNsYXNzPVwic3RpY2t5LXdyYXBwZXJcIiAvPicsc3R1Y2tDbGFzczpcInN0dWNrXCIsZGlyZWN0aW9uOlwiZG93biByaWdodFwifSxpLlN0aWNreT10fSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4qIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8qIGdsb2JhbCBXYXlwb2ludCAqL1xuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiW3dXXWF5cG9pbnRcIiB9XSAqL1xuXG5cbihmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICAgIHZhciAkaHRtbCA9ICQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB2YXIgdXRpbHMgPSBNb3ppbGxhLlV0aWxzO1xuXG4gICAgdmFyICRncmlkVmlkZW8gPSAkKCcjZ3JpZC12aWRlbycpO1xuICAgIHZhciBmcmFtZVNyYyA9ICRncmlkVmlkZW8uZGF0YSgnZnJhbWVTcmMnKTtcblxuICAgIHZhciBmZWF0dXJlUXVlcmllc1N1cHBvcnRlZCA9IHR5cGVvZiBDU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgaWYgKHdpbmRvdy5Nb3ppbGxhLkNsaWVudC5pc0ZpcmVmb3gpIHtcbiAgICAgICAgaWYgKGZlYXR1cmVRdWVyaWVzU3VwcG9ydGVkICYmIENTUy5zdXBwb3J0cygnZGlzcGxheScsICdncmlkJykpIHtcbiAgICAgICAgICAgICRodG1sLmFkZENsYXNzKCdmaXJlZm94LWhhcy1ncmlkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaHRtbC5hZGRDbGFzcygnb2xkLWZpcmVmb3gnKTtcbiAgICAgICAgICAgICRncmlkVmlkZW8uYXR0cignc3JjJywgZnJhbWVTcmMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGh0bWwuYWRkQ2xhc3MoJ25vdC1maXJlZm94Jyk7XG4gICAgICAgICRncmlkVmlkZW8uYXR0cignc3JjJywgZnJhbWVTcmMpO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuTW96aWxsYS5DbGllbnQuaXNNb2JpbGUpIHtcbiAgICAgICAgJGh0bWwuYWRkQ2xhc3MoJ25vdC1kZXNrdG9wJyk7XG4gICAgfVxuXG5cbiAgICB2YXIgdGFsbE1vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgbWF0Y2hNZWRpYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gQ2hlY2sgd2luZG93IGhlaWdodFxuICAgICAgICB2YXIgcXVlcnlUYWxsID0gbWF0Y2hNZWRpYSgnKG1pbi1oZWlnaHQ6IDY1MHB4KScpO1xuICAgICAgICBpZiAocXVlcnlUYWxsLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRhbGxNb2RlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhbGxNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBxdWVyeVRhbGwuYWRkTGlzdGVuZXIoZnVuY3Rpb24obXEpIHtcbiAgICAgICAgICAgIGlmIChtcS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdGFsbE1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWxsTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIFNjcm9sbCBzbW9vdGhseSB0byB0aGUgbGlua2VkIHNlY3Rpb25cbiAgICAkZG9jdW1lbnQub24oJ2NsaWNrJywgJyNwYWdlLW5hdiAucGFnZS1uYXYtbWVudSBhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBFeHRyYWN0IHRoZSB0YXJnZXQgZWxlbWVudCdzIElEIGZyb20gdGhlIGxpbmsncyBocmVmLlxuICAgICAgICB2YXIgZWxlbSA9ICQodGhpcykuYXR0cignaHJlZicpLnJlcGxhY2UoLy4qPygjLiopL2csICckMScpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gJChlbGVtKS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgTW96aWxsYS5zbW9vdGhTY3JvbGwoe1xuICAgICAgICAgICAgdG9wOiBvZmZzZXRcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuICAgIC8vIFN3aXRjaCBkZW1vIHN0eWxlc1xuICAgICRkb2N1bWVudC5vbignY2xpY2snLCAnLmRlbW8tY29udHJvbHMgLmV4YW1wbGUtc3dpdGNoJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZW1vSWQgPSAkKHRoaXMpLnBhcmVudHMoJy5kZW1vLXNlY3Rpb24nKS5hdHRyKCdpZCcpO1xuICAgICAgICB2YXIgZGVtbyA9ICQoJyMnICsgZGVtb0lkKTtcbiAgICAgICAgdmFyIHN3aXRjaGVzID0gJCh0aGlzKS5wYXJlbnRzKCcuZGVtby1jb250cm9scycpLmZpbmQoJy5leGFtcGxlLXN3aXRjaCcpO1xuICAgICAgICB2YXIgbmV3Q2xhc3MgPSAkKHRoaXMpLmRhdGEoJ2V4YW1wbGUtY2xhc3MnKTtcblxuICAgICAgICBkZW1vLnJlbW92ZUNsYXNzKCdleGFtcGxlLTEgZXhhbXBsZS0yIGV4YW1wbGUtMycpLmFkZENsYXNzKG5ld0NsYXNzKTtcbiAgICAgICAgc3dpdGNoZXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICAgICAgICAgICAgJ2VBY3Rpb24nOiAnYnV0dG9uIGNsaWNrJywgLy8gYWN0aW9uXG4gICAgICAgICAgICAnZUxhYmVsJzogZGVtb0lkICsgJyAtICcgKyBuZXdDbGFzcywgLy8gbGFiZWxcbiAgICAgICAgICAgICdldmVudCc6ICdpbi1wYWdlLWludGVyYWN0aW9uJ1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgLy8gU2V0IHVwIHRoZSBzdGlja3kgZG93bmxvYWQgYmFyXG4gICAgdmFyICRmeGRvd25sb2FkID0gJCgnI2Rvd25sb2FkLWZpcmVmb3gnKTtcbiAgICB2YXIgYnV0dG9uQ2xvc2UgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIHRpdGxlPVwiJysgdXRpbHMudHJhbnMoJ2dsb2JhbC1jbG9zZScpICsnXCI+JysgdXRpbHMudHJhbnMoJ2dsb2JhbC1jbG9zZScpICsnPC9idXR0b24+JztcblxuICAgIC8vIElmIHRoZSBiYXIgZXhpc3RzIGFuZCB0aGUgd2luZG93IGlzIHRhbGxcbiAgICBpZiAodGFsbE1vZGUpIHtcbiAgICAgICAgLy8gSW5pdGlhdGUgdGhlIHN0aWNreSBkb3dubG9hZCBiYXJcbiAgICAgICAgaW5pdFN0aWNreUJhcigpO1xuXG4gICAgICAgIC8vIFVuc3RpY2sgdGhlIGRvd25sb2FkIGJhciB3aGVuIHdlIHJlYWNoIHRoZSBmb290ZXJcbiAgICAgICAgdmFyIHVuc3RpY2tCYXJXYXlwb2ludCA9IG5ldyBXYXlwb2ludCh7XG4gICAgICAgICAgICBlbGVtZW50OiAkKCcjY29sb3Bob24nKSxcbiAgICAgICAgICAgIG9mZnNldDogJzEwMiUnLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKChkaXJlY3Rpb24gPT09ICdkb3duJykgJiYgKCEkaHRtbC5oYXNDbGFzcygnZG93bmxvYWQtY2xvc2VkJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICRmeGRvd25sb2FkLnJlbW92ZUNsYXNzKCdzdHVjaycpLnJlbW92ZUF0dHIoJ3N0eWxlJykuZmluZCgnLmNsb3NlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZGlyZWN0aW9uID09PSAndXAnKSAmJiAoISRodG1sLmhhc0NsYXNzKCdkb3dubG9hZC1jbG9zZWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZ4ZG93bmxvYWQuYWRkQ2xhc3MoJ3N0dWNrJykuYXBwZW5kKGJ1dHRvbkNsb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFVuc3RpY2tCYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNob3cgdGhlIHN0aWNreSBkb3dubG9hZCBiYXJcbiAgICBmdW5jdGlvbiBpbml0U3RpY2t5QmFyKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGZ4ZG93bmxvYWQuYWRkQ2xhc3MoJ3N0dWNrJykuYXBwZW5kKGJ1dHRvbkNsb3NlKS5jc3MoeyBib3R0b206ICctJyArICRmeGRvd25sb2FkLmhlaWdodCgpICsgJ3B4JyB9KS5hbmltYXRlKHsgYm90dG9tOiAnMCcgfSwgNzUwKTtcbiAgICAgICAgICAgIGluaXRVbnN0aWNrQmFyKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgLy8gRGlzbWlzcyB0aGUgc3RpY2t5IGRvd25sb2FkIGJhclxuICAgIGZ1bmN0aW9uIGluaXRVbnN0aWNrQmFyKCkge1xuICAgICAgICAkKCcjZG93bmxvYWQtZmlyZWZveCBidXR0b24uY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRmeGRvd25sb2FkLmFuaW1hdGUoeyBib3R0b206ICctJyArICRmeGRvd25sb2FkLmhlaWdodCgpICsgJ3B4JyB9LCA1MDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICRmeGRvd25sb2FkLnJlbW92ZUNsYXNzKCdzdHVjaycpLnJlbW92ZUF0dHIoJ3N0eWxlJykuZmluZCgnLmNsb3NlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQSBjbGFzcyBsZXRzIHVzIGNoZWNrIGlmIHRoZSBiYXIgd2FzIGRpc21pc3NlZCBvbiBwdXJwb3NlXG4gICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBzaG93IGl0IGFnYWluIGR1cmluZyBzY3JvbGxpbmdcbiAgICAgICAgICAgICRodG1sLmFkZENsYXNzKCdkb3dubG9hZC1jbG9zZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ291bnQgcmlnaHQgY2xpY2tzXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgJ2VBY3Rpb24nOiAnY2xpY2snLFxuICAgICAgICAgICAgICAgICdlTGFiZWwnOiAnUmlnaHQgY2xpY2snLFxuICAgICAgICAgICAgICAgICdldmVudCc6ICdpbi1wYWdlLWludGVyYWN0aW9uJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkod2luZG93LmpRdWVyeSk7XG4iXX0=
