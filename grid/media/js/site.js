/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function () {
    'use strict';
    window.site = {
        getPlatform: function (ua, pf) {
            // Firefox OS navigator.platform is an empty string, which equates to a falsey value in JS
            // Ths means we must use an ugly ternary statement here to make testing easier.
            pf = (pf === '') ? '' : pf || navigator.platform;
            ua = ua || navigator.userAgent;

            if (/Win(16|9[x58]|NT( [1234]| 5\.0| [^0-9]|[^ -]|$))/.test(ua) ||
                    /Windows ([MC]E|9[x58]|3\.1|4\.10|NT( [1234]\D| 5\.0| [^0-9]|[^ ]|$))/.test(ua) ||
                    /Windows_95/.test(ua)) {
                /**
                 * Officially unsupported platforms are Windows 95, 98, ME, NT 4.x, 2000
                 * These regular expressions match:
                 *  - Win16
                 *  - Win9x
                 *  - Win95
                 *  - Win98
                 *  - WinNT (not followed by version or followed by version <= 5)
                 *  - Windows ME
                 *  - Windows CE
                 *  - Windows 9x
                 *  - Windows 95
                 *  - Windows 98
                 *  - Windows 3.1
                 *  - Windows 4.10
                 *  - Windows NT (not followed by version or followed by version <= 5)
                 *  - Windows_95
                 */
                return 'oldwin';
            }
            if (pf.indexOf('Win32') !== -1 ||
                    pf.indexOf('Win64') !== -1) {
                return 'windows';
            }
            if (/android/i.test(ua)) {
                return 'android';
            }
            if (/linux/i.test(pf) || /linux/i.test(ua)) {
                return 'linux';
            }
            if (pf.indexOf('MacPPC') !== -1) {
                return 'oldmac';
            }
            if (/Mac OS X 10.[0-8]\D/.test(ua)) {
                return 'oldmac';
            }
            if (pf.indexOf('iPhone') !== -1 ||
                    pf.indexOf('iPad') !== -1 ||
                    pf.indexOf('iPod') !== -1 ||
                    pf.indexOf('MacIntel') !== -1 && 'standalone' in navigator) {
                return 'ios';
            }
            if (ua.indexOf('Mac OS X') !== -1) {
                return 'osx';
            }
            if (ua.indexOf('MSIE 5.2') !== -1) {
                return 'oldmac';
            }
            if (pf.indexOf('Mac') !== -1) {
                return 'oldmac';
            }
            if (pf === '' && /Firefox/.test(ua)) {
                return 'fxos';
            }

            return 'other';
        },

        getPlatformVersion: function (ua) {
            ua = ua || navigator.userAgent;

            // On OS X, Safari and Chrome have underscores instead of dots
            var match = ua.match(/Windows NT (\d+\.\d+)/) ||
                        ua.match(/Mac OS X (\d+[._]\d+)/) ||
                        ua.match(/Android (\d+\.\d+)/);

            return match ? match[1].replace('_', '.') : undefined;
        },

        getArchType: function (ua, pf) {
            pf = (pf === '') ? '' : pf || navigator.platform;
            ua = ua || navigator.userAgent;

            var re;

            // Windows RT and Windows Phone using ARMv7
            if (/Windows/.test(ua) && /ARM/.test(ua)) {
                return 'armv7';
            }

            // IE-specific property
            if (navigator.cpuClass) {
                return navigator.cpuClass.toLowerCase();
            }

            // ARM
            re = /armv\d+/i;
            if (re.test(pf) || re.test(ua)) {
                return RegExp.lastMatch.toLowerCase();
            }

            // ARMv8 64-bit
            if (/aarch64/.test(pf)) {
                return 'armv8';
            }

            // PowerPC
            re = /PowerPC|PPC/i;
            if (re.test(pf) || re.test(ua)) {
                return 'ppc';
            }

            // We can't detect the type info. It's probably x86 but unsure.
            // For example, iOS may be running on ARM-based Apple A7 processor
            return 'x86';
        },

        getArchSize: function (ua, pf) {
            pf = (pf === '') ? '' : pf || navigator.platform;
            ua = ua || navigator.userAgent;

            var re = /x64|x86_64|Win64|WOW64|aarch64/i;
            if (re.test(pf) || re.test(ua)) {
                return 64;
            }

            // We can't detect the bit info. It's probably 32 but unsure.
            // For example, OS X may be running on 64-bit Core i7 processor
            return 32;
        },

        // Universal feature detect to deliver graded browser support (targets IE 11 and above).
        cutsTheMustard: function () {
            return 'classList' in document.createElement('div') && 'MutationObserver' in window;
        },

        platform: 'other',
        platformVersion: undefined,
        archType: 'x64',
        archSize: 32
    };
    (function () {
        var h = document.documentElement;

        // if other than 'windows', immediately replace the platform classname on the html-element
        // to avoid lots of flickering
        var platform = window.site.platform = window.site.getPlatform();
        var version = window.site.platformVersion = window.site.getPlatformVersion();
        var _version = version ? parseFloat(version) : 0;

        if (platform === 'windows') {
            // Add class to allow Windows XP/Vista users to download Firefox 52 ESR, though these
            // legacy platforms are now officially unsupported
            if (_version >= 5.1 && _version <= 6) {
                h.className += ' xpvista';
            }

            // Add class to support downloading Firefox for Windows 64-bit on Windows 7 and later
            if (_version >= 6.1) {
                h.className += ' win7up';
            }
        } else {
            h.className = h.className.replace('windows', platform);
        }

        // Add class to reflect the microprocessor architecture info
        var archType = window.site.archType = window.site.getArchType();
        var archSize = window.site.archSize = window.site.getArchSize();
        var isARM = archType.match(/armv(\d+)/);

        if (archType !== 'x86') {
            h.className = h.className.replace('x86', archType);

            if (isARM) {
                h.className += ' arm';

                // Add class to support downloading Firefox for Android on ARMv7 and later
                if (parseFloat(isARM[1]) >= 7) {
                    h.className += ' armv7up';
                }
            }
        }
        if (archSize === 64) {
            h.className += ' x64';
        }

        // Add class to reflect if user agent is Firefox. Cherry-picked from mozilla-client.js.
        var isFirefox = /\s(Firefox|FxiOS)/.test(navigator.userAgent) && !/Iceweasel|IceCat|SeaMonkey|Camino|like Firefox/i.test(navigator.userAgent);

        if (isFirefox) {
            h.className += ' is-firefox';
        }

        // Add class to reflect browsers that get 1st class JS & CSS support.
        var isModernBrowser = window.site.isModernBrowser = window.site.cutsTheMustard();

        if (isModernBrowser) {
            h.className += ' is-modern-browser';
        }

        // Add class to reflect javascript availability for CSS
        h.className = h.className.replace(/\bno-js\b/, 'js');
    })();
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

/**
 * Returns true or false based on whether doNotTrack is enabled. It also takes into account the
 * anomalies, such as !bugzilla 887703, which effect versions of Fx 31 and lower. It also handles
 * IE versions on Windows 7, 8 and 8.1, where the DNT implementation does not honor the spec.
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1217896 for more details
 * @params {string} [dnt] - An optional mock doNotTrack string to ease unit testing.
 * @params {string} [ua] - An optional mock userAgent string to ease unit testing.
 * @returns {boolean} true if enabled else false
 */
Mozilla.dntEnabled = function(dnt, ua) {
    'use strict';

    // for old version of IE we need to use the msDoNotTrack property of navigator
    // on newer versions, and newer platforms, this is doNotTrack but, on the window object
    // Safari also exposes the property on the window object.
    var dntStatus = dnt || navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    var userAgent = ua || navigator.userAgent;

    // List of Windows versions known to not implement DNT according to the standard.
    var anomalousWinVersions = ['Windows NT 6.1', 'Windows NT 6.2', 'Windows NT 6.3'];

    var fxMatch = userAgent.match(/Firefox\/(\d+)/);
    var ieRegEx = /MSIE|Trident/i;
    var isIE = ieRegEx.test(userAgent);
    // Matches from Windows up to the first occurance of ; un-greedily
    // http://www.regexr.com/3c2el
    var platform = userAgent.match(/Windows.+?(?=;)/g);

    // With old versions of IE, DNT did not exist so we simply return false;
    if (isIE && typeof Array.prototype.indexOf !== 'function') {
        return false;
    } else if (fxMatch && parseInt(fxMatch[1], 10) < 32) {
        // Can't say for sure if it is 1 or 0, due to Fx bug 887703
        dntStatus = 'Unspecified';
    } else if (isIE && platform && anomalousWinVersions.indexOf(platform.toString()) !== -1) {
        // default is on, which does not honor the specification
        dntStatus = 'Unspecified';
    } else {
        // sets dntStatus to Disabled or Enabled based on the value returned by the browser.
        // If dntStatus is undefined, it will be set to Unspecified
        dntStatus = { '0': 'Disabled', '1': 'Enabled' }[dntStatus] || 'Unspecified';
    }

    return dntStatus === 'Enabled' ? true : false;
};

/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #1 - September 4, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * Mozilla.Cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * Mozilla.Cookies.getItem(name)
|*|  * Mozilla.Cookies.removeItem(name[, path[, domain]])
|*|  * Mozilla.Cookies.hasItem(name)
|*|  * Mozilla.Cookies.keys()
|*|
\*/

// create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

Mozilla.Cookies = {
    getItem: function (sKey) {
        'use strict';
        if (!sKey) { return null; }
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        'use strict';
        if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = '';
        if (vEnd) {
            switch (vEnd.constructor) {
            case Number:
                sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                break;
            case String:
                sExpires = '; expires=' + vEnd;
                break;
            case Date:
                sExpires = '; expires=' + vEnd.toUTCString();
                break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        'use strict';
        if (!this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
        return true;
    },
    hasItem: function (sKey) {
        'use strict';
        if (!sKey) { return false; }
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    },
    keys: function () {
        'use strict';
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    },
    enabled: function() {
        'use strict';
        /**
         * Cookies feature detect lifted from Modernizr
         * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
         *
         * navigator.cookieEnabled cannot detect custom or nuanced cookie blocking
         * configurations. For example, when blocking cookies via the Advanced
         * Privacy Settings in IE9, it always returns true. And there have been
         * issues in the past with site-specific exceptions.
         * Don't rely on it.

         * try..catch because in some situations `document.cookie` is exposed but throws a
         * SecurityError if you try to access it; e.g. documents created from data URIs
         * or in sandboxed iframes (depending on flags/context)
         */
        try {
            // Create cookie
            document.cookie = 'cookietest=1';
            var ret = document.cookie.indexOf('cookietest=') !== -1;
            // Delete cookie
            document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
            return ret;
        }
        catch (e) {
            return false;
        }
    }
};

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

(function(Mozilla) {
    'use strict';

    // init dataLayer object
    var dataLayer = window.dataLayer = window.dataLayer || [];
    var Analytics = {};

    /** Returns page ID used in Event Category for GA events tracked on page.
    * @param {String} path - URL path name fallback if page ID does not exist.
    * @return {String} GTM page ID.
    */
    Analytics.getPageId = function(path) {
        var pageId = document.getElementsByTagName('html')[0].getAttribute('data-gtm-page-id');
        var pathName = path ? path : document.location.pathname;

        return pageId ? pageId : pathName.replace(/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/, '/');
    };

    Analytics.getTrafficCopReferrer = function() {
        var referrer;

        // if referrer cookie exists, store the value and remove the cookie
        if (Mozilla.Cookies && Mozilla.Cookies.hasItem('mozilla-traffic-cop-original-referrer')) {
            referrer = Mozilla.Cookies.getItem('mozilla-traffic-cop-original-referrer');

            // referrer shouldn't persist
            Mozilla.Cookies.removeItem('mozilla-traffic-cop-original-referrer');
        }

        return referrer;
    };

    Analytics.buildDataObject = function() {
        var dataObj = {
            'event': 'page-id-loaded',
            'pageId': Analytics.getPageId()
        };

        var referrer = Analytics.getTrafficCopReferrer();

        // if original referrer exists, pass it to GTM
        if (referrer) {
            // Traffic Cop sets the referrer to 'direct' if document.referer is empty
            // prior to the redirect, so this value will either be a URL or the string 'direct'.
            dataObj.customReferrer = referrer;
        }

        return dataObj;
    };

    // Push page ID into dataLayer so it's ready when GTM container loads.
    dataLayer.push(Analytics.buildDataObject());

    Mozilla.Analytics = Analytics;
})(window.Mozilla);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2Jhc2Uvc2l0ZS5qcyIsImpzL2Jhc2UvZG50LWhlbHBlci5qcyIsImpzL2Jhc2UvbW96aWxsYS1jb29raWUtaGVscGVyLmpzIiwianMvYmFzZS9jb3JlLWRhdGFsYXllci1wYWdlLWlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL0JVTkRMRVMvc2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHdpbmRvdy5zaXRlID0ge1xuICAgICAgICBnZXRQbGF0Zm9ybTogZnVuY3Rpb24gKHVhLCBwZikge1xuICAgICAgICAgICAgLy8gRmlyZWZveCBPUyBuYXZpZ2F0b3IucGxhdGZvcm0gaXMgYW4gZW1wdHkgc3RyaW5nLCB3aGljaCBlcXVhdGVzIHRvIGEgZmFsc2V5IHZhbHVlIGluIEpTXG4gICAgICAgICAgICAvLyBUaHMgbWVhbnMgd2UgbXVzdCB1c2UgYW4gdWdseSB0ZXJuYXJ5IHN0YXRlbWVudCBoZXJlIHRvIG1ha2UgdGVzdGluZyBlYXNpZXIuXG4gICAgICAgICAgICBwZiA9IChwZiA9PT0gJycpID8gJycgOiBwZiB8fCBuYXZpZ2F0b3IucGxhdGZvcm07XG4gICAgICAgICAgICB1YSA9IHVhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgICAgICAgIGlmICgvV2luKDE2fDlbeDU4XXxOVCggWzEyMzRdfCA1XFwuMHwgW14wLTldfFteIC1dfCQpKS8udGVzdCh1YSkgfHxcbiAgICAgICAgICAgICAgICAgICAgL1dpbmRvd3MgKFtNQ11FfDlbeDU4XXwzXFwuMXw0XFwuMTB8TlQoIFsxMjM0XVxcRHwgNVxcLjB8IFteMC05XXxbXiBdfCQpKS8udGVzdCh1YSkgfHxcbiAgICAgICAgICAgICAgICAgICAgL1dpbmRvd3NfOTUvLnRlc3QodWEpKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogT2ZmaWNpYWxseSB1bnN1cHBvcnRlZCBwbGF0Zm9ybXMgYXJlIFdpbmRvd3MgOTUsIDk4LCBNRSwgTlQgNC54LCAyMDAwXG4gICAgICAgICAgICAgICAgICogVGhlc2UgcmVndWxhciBleHByZXNzaW9ucyBtYXRjaDpcbiAgICAgICAgICAgICAgICAgKiAgLSBXaW4xNlxuICAgICAgICAgICAgICAgICAqICAtIFdpbjl4XG4gICAgICAgICAgICAgICAgICogIC0gV2luOTVcbiAgICAgICAgICAgICAgICAgKiAgLSBXaW45OFxuICAgICAgICAgICAgICAgICAqICAtIFdpbk5UIChub3QgZm9sbG93ZWQgYnkgdmVyc2lvbiBvciBmb2xsb3dlZCBieSB2ZXJzaW9uIDw9IDUpXG4gICAgICAgICAgICAgICAgICogIC0gV2luZG93cyBNRVxuICAgICAgICAgICAgICAgICAqICAtIFdpbmRvd3MgQ0VcbiAgICAgICAgICAgICAgICAgKiAgLSBXaW5kb3dzIDl4XG4gICAgICAgICAgICAgICAgICogIC0gV2luZG93cyA5NVxuICAgICAgICAgICAgICAgICAqICAtIFdpbmRvd3MgOThcbiAgICAgICAgICAgICAgICAgKiAgLSBXaW5kb3dzIDMuMVxuICAgICAgICAgICAgICAgICAqICAtIFdpbmRvd3MgNC4xMFxuICAgICAgICAgICAgICAgICAqICAtIFdpbmRvd3MgTlQgKG5vdCBmb2xsb3dlZCBieSB2ZXJzaW9uIG9yIGZvbGxvd2VkIGJ5IHZlcnNpb24gPD0gNSlcbiAgICAgICAgICAgICAgICAgKiAgLSBXaW5kb3dzXzk1XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvbGR3aW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBmLmluZGV4T2YoJ1dpbjMyJykgIT09IC0xIHx8XG4gICAgICAgICAgICAgICAgICAgIHBmLmluZGV4T2YoJ1dpbjY0JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd3aW5kb3dzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvYW5kcm9pZC9pLnRlc3QodWEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhbmRyb2lkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvbGludXgvaS50ZXN0KHBmKSB8fCAvbGludXgvaS50ZXN0KHVhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbGludXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBmLmluZGV4T2YoJ01hY1BQQycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb2xkbWFjJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvTWFjIE9TIFggMTAuWzAtOF1cXEQvLnRlc3QodWEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdvbGRtYWMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBmLmluZGV4T2YoJ2lQaG9uZScpICE9PSAtMSB8fFxuICAgICAgICAgICAgICAgICAgICBwZi5pbmRleE9mKCdpUGFkJykgIT09IC0xIHx8XG4gICAgICAgICAgICAgICAgICAgIHBmLmluZGV4T2YoJ2lQb2QnKSAhPT0gLTEgfHxcbiAgICAgICAgICAgICAgICAgICAgcGYuaW5kZXhPZignTWFjSW50ZWwnKSAhPT0gLTEgJiYgJ3N0YW5kYWxvbmUnIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaW9zJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKCdNYWMgT1MgWCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb3N4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKCdNU0lFIDUuMicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb2xkbWFjJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwZi5pbmRleE9mKCdNYWMnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29sZG1hYyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGYgPT09ICcnICYmIC9GaXJlZm94Ly50ZXN0KHVhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZnhvcyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFBsYXRmb3JtVmVyc2lvbjogZnVuY3Rpb24gKHVhKSB7XG4gICAgICAgICAgICB1YSA9IHVhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgICAgICAgIC8vIE9uIE9TIFgsIFNhZmFyaSBhbmQgQ2hyb21lIGhhdmUgdW5kZXJzY29yZXMgaW5zdGVhZCBvZiBkb3RzXG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSB1YS5tYXRjaCgvV2luZG93cyBOVCAoXFxkK1xcLlxcZCspLykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVhLm1hdGNoKC9NYWMgT1MgWCAoXFxkK1suX11cXGQrKS8pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB1YS5tYXRjaCgvQW5kcm9pZCAoXFxkK1xcLlxcZCspLyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnJlcGxhY2UoJ18nLCAnLicpIDogdW5kZWZpbmVkO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEFyY2hUeXBlOiBmdW5jdGlvbiAodWEsIHBmKSB7XG4gICAgICAgICAgICBwZiA9IChwZiA9PT0gJycpID8gJycgOiBwZiB8fCBuYXZpZ2F0b3IucGxhdGZvcm07XG4gICAgICAgICAgICB1YSA9IHVhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgICAgICAgIHZhciByZTtcblxuICAgICAgICAgICAgLy8gV2luZG93cyBSVCBhbmQgV2luZG93cyBQaG9uZSB1c2luZyBBUk12N1xuICAgICAgICAgICAgaWYgKC9XaW5kb3dzLy50ZXN0KHVhKSAmJiAvQVJNLy50ZXN0KHVhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYXJtdjcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJRS1zcGVjaWZpYyBwcm9wZXJ0eVxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5jcHVDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY3B1Q2xhc3MudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQVJNXG4gICAgICAgICAgICByZSA9IC9hcm12XFxkKy9pO1xuICAgICAgICAgICAgaWYgKHJlLnRlc3QocGYpIHx8IHJlLnRlc3QodWEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZ0V4cC5sYXN0TWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQVJNdjggNjQtYml0XG4gICAgICAgICAgICBpZiAoL2FhcmNoNjQvLnRlc3QocGYpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhcm12OCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBvd2VyUENcbiAgICAgICAgICAgIHJlID0gL1Bvd2VyUEN8UFBDL2k7XG4gICAgICAgICAgICBpZiAocmUudGVzdChwZikgfHwgcmUudGVzdCh1YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BwYyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdlIGNhbid0IGRldGVjdCB0aGUgdHlwZSBpbmZvLiBJdCdzIHByb2JhYmx5IHg4NiBidXQgdW5zdXJlLlxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlPUyBtYXkgYmUgcnVubmluZyBvbiBBUk0tYmFzZWQgQXBwbGUgQTcgcHJvY2Vzc29yXG4gICAgICAgICAgICByZXR1cm4gJ3g4Nic7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0QXJjaFNpemU6IGZ1bmN0aW9uICh1YSwgcGYpIHtcbiAgICAgICAgICAgIHBmID0gKHBmID09PSAnJykgPyAnJyA6IHBmIHx8IG5hdmlnYXRvci5wbGF0Zm9ybTtcbiAgICAgICAgICAgIHVhID0gdWEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgICAgICAgICAgdmFyIHJlID0gL3g2NHx4ODZfNjR8V2luNjR8V09XNjR8YWFyY2g2NC9pO1xuICAgICAgICAgICAgaWYgKHJlLnRlc3QocGYpIHx8IHJlLnRlc3QodWEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDY0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBkZXRlY3QgdGhlIGJpdCBpbmZvLiBJdCdzIHByb2JhYmx5IDMyIGJ1dCB1bnN1cmUuXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgT1MgWCBtYXkgYmUgcnVubmluZyBvbiA2NC1iaXQgQ29yZSBpNyBwcm9jZXNzb3JcbiAgICAgICAgICAgIHJldHVybiAzMjtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBVbml2ZXJzYWwgZmVhdHVyZSBkZXRlY3QgdG8gZGVsaXZlciBncmFkZWQgYnJvd3NlciBzdXBwb3J0ICh0YXJnZXRzIElFIDExIGFuZCBhYm92ZSkuXG4gICAgICAgIGN1dHNUaGVNdXN0YXJkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdztcbiAgICAgICAgfSxcblxuICAgICAgICBwbGF0Zm9ybTogJ290aGVyJyxcbiAgICAgICAgcGxhdGZvcm1WZXJzaW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGFyY2hUeXBlOiAneDY0JyxcbiAgICAgICAgYXJjaFNpemU6IDMyXG4gICAgfTtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAvLyBpZiBvdGhlciB0aGFuICd3aW5kb3dzJywgaW1tZWRpYXRlbHkgcmVwbGFjZSB0aGUgcGxhdGZvcm0gY2xhc3NuYW1lIG9uIHRoZSBodG1sLWVsZW1lbnRcbiAgICAgICAgLy8gdG8gYXZvaWQgbG90cyBvZiBmbGlja2VyaW5nXG4gICAgICAgIHZhciBwbGF0Zm9ybSA9IHdpbmRvdy5zaXRlLnBsYXRmb3JtID0gd2luZG93LnNpdGUuZ2V0UGxhdGZvcm0oKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSB3aW5kb3cuc2l0ZS5wbGF0Zm9ybVZlcnNpb24gPSB3aW5kb3cuc2l0ZS5nZXRQbGF0Zm9ybVZlcnNpb24oKTtcbiAgICAgICAgdmFyIF92ZXJzaW9uID0gdmVyc2lvbiA/IHBhcnNlRmxvYXQodmVyc2lvbikgOiAwO1xuXG4gICAgICAgIGlmIChwbGF0Zm9ybSA9PT0gJ3dpbmRvd3MnKSB7XG4gICAgICAgICAgICAvLyBBZGQgY2xhc3MgdG8gYWxsb3cgV2luZG93cyBYUC9WaXN0YSB1c2VycyB0byBkb3dubG9hZCBGaXJlZm94IDUyIEVTUiwgdGhvdWdoIHRoZXNlXG4gICAgICAgICAgICAvLyBsZWdhY3kgcGxhdGZvcm1zIGFyZSBub3cgb2ZmaWNpYWxseSB1bnN1cHBvcnRlZFxuICAgICAgICAgICAgaWYgKF92ZXJzaW9uID49IDUuMSAmJiBfdmVyc2lvbiA8PSA2KSB7XG4gICAgICAgICAgICAgICAgaC5jbGFzc05hbWUgKz0gJyB4cHZpc3RhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHN1cHBvcnQgZG93bmxvYWRpbmcgRmlyZWZveCBmb3IgV2luZG93cyA2NC1iaXQgb24gV2luZG93cyA3IGFuZCBsYXRlclxuICAgICAgICAgICAgaWYgKF92ZXJzaW9uID49IDYuMSkge1xuICAgICAgICAgICAgICAgIGguY2xhc3NOYW1lICs9ICcgd2luN3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGguY2xhc3NOYW1lID0gaC5jbGFzc05hbWUucmVwbGFjZSgnd2luZG93cycsIHBsYXRmb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBjbGFzcyB0byByZWZsZWN0IHRoZSBtaWNyb3Byb2Nlc3NvciBhcmNoaXRlY3R1cmUgaW5mb1xuICAgICAgICB2YXIgYXJjaFR5cGUgPSB3aW5kb3cuc2l0ZS5hcmNoVHlwZSA9IHdpbmRvdy5zaXRlLmdldEFyY2hUeXBlKCk7XG4gICAgICAgIHZhciBhcmNoU2l6ZSA9IHdpbmRvdy5zaXRlLmFyY2hTaXplID0gd2luZG93LnNpdGUuZ2V0QXJjaFNpemUoKTtcbiAgICAgICAgdmFyIGlzQVJNID0gYXJjaFR5cGUubWF0Y2goL2FybXYoXFxkKykvKTtcblxuICAgICAgICBpZiAoYXJjaFR5cGUgIT09ICd4ODYnKSB7XG4gICAgICAgICAgICBoLmNsYXNzTmFtZSA9IGguY2xhc3NOYW1lLnJlcGxhY2UoJ3g4NicsIGFyY2hUeXBlKTtcblxuICAgICAgICAgICAgaWYgKGlzQVJNKSB7XG4gICAgICAgICAgICAgICAgaC5jbGFzc05hbWUgKz0gJyBhcm0nO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHN1cHBvcnQgZG93bmxvYWRpbmcgRmlyZWZveCBmb3IgQW5kcm9pZCBvbiBBUk12NyBhbmQgbGF0ZXJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdChpc0FSTVsxXSkgPj0gNykge1xuICAgICAgICAgICAgICAgICAgICBoLmNsYXNzTmFtZSArPSAnIGFybXY3dXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJjaFNpemUgPT09IDY0KSB7XG4gICAgICAgICAgICBoLmNsYXNzTmFtZSArPSAnIHg2NCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gcmVmbGVjdCBpZiB1c2VyIGFnZW50IGlzIEZpcmVmb3guIENoZXJyeS1waWNrZWQgZnJvbSBtb3ppbGxhLWNsaWVudC5qcy5cbiAgICAgICAgdmFyIGlzRmlyZWZveCA9IC9cXHMoRmlyZWZveHxGeGlPUykvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9JY2V3ZWFzZWx8SWNlQ2F0fFNlYU1vbmtleXxDYW1pbm98bGlrZSBGaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICAgICAgICBoLmNsYXNzTmFtZSArPSAnIGlzLWZpcmVmb3gnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHJlZmxlY3QgYnJvd3NlcnMgdGhhdCBnZXQgMXN0IGNsYXNzIEpTICYgQ1NTIHN1cHBvcnQuXG4gICAgICAgIHZhciBpc01vZGVybkJyb3dzZXIgPSB3aW5kb3cuc2l0ZS5pc01vZGVybkJyb3dzZXIgPSB3aW5kb3cuc2l0ZS5jdXRzVGhlTXVzdGFyZCgpO1xuXG4gICAgICAgIGlmIChpc01vZGVybkJyb3dzZXIpIHtcbiAgICAgICAgICAgIGguY2xhc3NOYW1lICs9ICcgaXMtbW9kZXJuLWJyb3dzZXInO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHJlZmxlY3QgamF2YXNjcmlwdCBhdmFpbGFiaWxpdHkgZm9yIENTU1xuICAgICAgICBoLmNsYXNzTmFtZSA9IGguY2xhc3NOYW1lLnJlcGxhY2UoL1xcYm5vLWpzXFxiLywgJ2pzJyk7XG4gICAgfSkoKTtcbn0pKCk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4qIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLy8gY3JlYXRlIG5hbWVzcGFjZVxuaWYgKHR5cGVvZiB3aW5kb3cuTW96aWxsYSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTW96aWxsYSA9IHt9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBvciBmYWxzZSBiYXNlZCBvbiB3aGV0aGVyIGRvTm90VHJhY2sgaXMgZW5hYmxlZC4gSXQgYWxzbyB0YWtlcyBpbnRvIGFjY291bnQgdGhlXG4gKiBhbm9tYWxpZXMsIHN1Y2ggYXMgIWJ1Z3ppbGxhIDg4NzcwMywgd2hpY2ggZWZmZWN0IHZlcnNpb25zIG9mIEZ4IDMxIGFuZCBsb3dlci4gSXQgYWxzbyBoYW5kbGVzXG4gKiBJRSB2ZXJzaW9ucyBvbiBXaW5kb3dzIDcsIDggYW5kIDguMSwgd2hlcmUgdGhlIEROVCBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBob25vciB0aGUgc3BlYy5cbiAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIxNzg5NiBmb3IgbW9yZSBkZXRhaWxzXG4gKiBAcGFyYW1zIHtzdHJpbmd9IFtkbnRdIC0gQW4gb3B0aW9uYWwgbW9jayBkb05vdFRyYWNrIHN0cmluZyB0byBlYXNlIHVuaXQgdGVzdGluZy5cbiAqIEBwYXJhbXMge3N0cmluZ30gW3VhXSAtIEFuIG9wdGlvbmFsIG1vY2sgdXNlckFnZW50IHN0cmluZyB0byBlYXNlIHVuaXQgdGVzdGluZy5cbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGVuYWJsZWQgZWxzZSBmYWxzZVxuICovXG5Nb3ppbGxhLmRudEVuYWJsZWQgPSBmdW5jdGlvbihkbnQsIHVhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gZm9yIG9sZCB2ZXJzaW9uIG9mIElFIHdlIG5lZWQgdG8gdXNlIHRoZSBtc0RvTm90VHJhY2sgcHJvcGVydHkgb2YgbmF2aWdhdG9yXG4gICAgLy8gb24gbmV3ZXIgdmVyc2lvbnMsIGFuZCBuZXdlciBwbGF0Zm9ybXMsIHRoaXMgaXMgZG9Ob3RUcmFjayBidXQsIG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4gICAgLy8gU2FmYXJpIGFsc28gZXhwb3NlcyB0aGUgcHJvcGVydHkgb24gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdmFyIGRudFN0YXR1cyA9IGRudCB8fCBuYXZpZ2F0b3IuZG9Ob3RUcmFjayB8fCB3aW5kb3cuZG9Ob3RUcmFjayB8fCBuYXZpZ2F0b3IubXNEb05vdFRyYWNrO1xuICAgIHZhciB1c2VyQWdlbnQgPSB1YSB8fCBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgLy8gTGlzdCBvZiBXaW5kb3dzIHZlcnNpb25zIGtub3duIHRvIG5vdCBpbXBsZW1lbnQgRE5UIGFjY29yZGluZyB0byB0aGUgc3RhbmRhcmQuXG4gICAgdmFyIGFub21hbG91c1dpblZlcnNpb25zID0gWydXaW5kb3dzIE5UIDYuMScsICdXaW5kb3dzIE5UIDYuMicsICdXaW5kb3dzIE5UIDYuMyddO1xuXG4gICAgdmFyIGZ4TWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0ZpcmVmb3hcXC8oXFxkKykvKTtcbiAgICB2YXIgaWVSZWdFeCA9IC9NU0lFfFRyaWRlbnQvaTtcbiAgICB2YXIgaXNJRSA9IGllUmVnRXgudGVzdCh1c2VyQWdlbnQpO1xuICAgIC8vIE1hdGNoZXMgZnJvbSBXaW5kb3dzIHVwIHRvIHRoZSBmaXJzdCBvY2N1cmFuY2Ugb2YgOyB1bi1ncmVlZGlseVxuICAgIC8vIGh0dHA6Ly93d3cucmVnZXhyLmNvbS8zYzJlbFxuICAgIHZhciBwbGF0Zm9ybSA9IHVzZXJBZ2VudC5tYXRjaCgvV2luZG93cy4rPyg/PTspL2cpO1xuXG4gICAgLy8gV2l0aCBvbGQgdmVyc2lvbnMgb2YgSUUsIEROVCBkaWQgbm90IGV4aXN0IHNvIHdlIHNpbXBseSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGlzSUUgJiYgdHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGZ4TWF0Y2ggJiYgcGFyc2VJbnQoZnhNYXRjaFsxXSwgMTApIDwgMzIpIHtcbiAgICAgICAgLy8gQ2FuJ3Qgc2F5IGZvciBzdXJlIGlmIGl0IGlzIDEgb3IgMCwgZHVlIHRvIEZ4IGJ1ZyA4ODc3MDNcbiAgICAgICAgZG50U3RhdHVzID0gJ1Vuc3BlY2lmaWVkJztcbiAgICB9IGVsc2UgaWYgKGlzSUUgJiYgcGxhdGZvcm0gJiYgYW5vbWFsb3VzV2luVmVyc2lvbnMuaW5kZXhPZihwbGF0Zm9ybS50b1N0cmluZygpKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gZGVmYXVsdCBpcyBvbiwgd2hpY2ggZG9lcyBub3QgaG9ub3IgdGhlIHNwZWNpZmljYXRpb25cbiAgICAgICAgZG50U3RhdHVzID0gJ1Vuc3BlY2lmaWVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZXRzIGRudFN0YXR1cyB0byBEaXNhYmxlZCBvciBFbmFibGVkIGJhc2VkIG9uIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgYnJvd3Nlci5cbiAgICAgICAgLy8gSWYgZG50U3RhdHVzIGlzIHVuZGVmaW5lZCwgaXQgd2lsbCBiZSBzZXQgdG8gVW5zcGVjaWZpZWRcbiAgICAgICAgZG50U3RhdHVzID0geyAnMCc6ICdEaXNhYmxlZCcsICcxJzogJ0VuYWJsZWQnIH1bZG50U3RhdHVzXSB8fCAnVW5zcGVjaWZpZWQnO1xuICAgIH1cblxuICAgIHJldHVybiBkbnRTdGF0dXMgPT09ICdFbmFibGVkJyA/IHRydWUgOiBmYWxzZTtcbn07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4qIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLypcXFxufCp8XG58KnwgIDo6IGNvb2tpZXMuanMgOjpcbnwqfFxufCp8ICBBIGNvbXBsZXRlIGNvb2tpZXMgcmVhZGVyL3dyaXRlciBmcmFtZXdvcmsgd2l0aCBmdWxsIHVuaWNvZGUgc3VwcG9ydC5cbnwqfFxufCp8ICBSZXZpc2lvbiAjMSAtIFNlcHRlbWJlciA0LCAyMDE0XG58KnxcbnwqfCAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2RvY3VtZW50LmNvb2tpZVxufCp8ICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9Vc2VyOmZ1c2lvbmNoZXNzXG58KnxcbnwqfCAgVGhpcyBmcmFtZXdvcmsgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIEdOVSBQdWJsaWMgTGljZW5zZSwgdmVyc2lvbiAzIG9yIGxhdGVyLlxufCp8ICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTMuMC1zdGFuZGFsb25lLmh0bWxcbnwqfFxufCp8ICBTeW50YXhlczpcbnwqfFxufCp8ICAqIE1vemlsbGEuQ29va2llcy5zZXRJdGVtKG5hbWUsIHZhbHVlWywgZW5kWywgcGF0aFssIGRvbWFpblssIHNlY3VyZV1dXV0pXG58KnwgICogTW96aWxsYS5Db29raWVzLmdldEl0ZW0obmFtZSlcbnwqfCAgKiBNb3ppbGxhLkNvb2tpZXMucmVtb3ZlSXRlbShuYW1lWywgcGF0aFssIGRvbWFpbl1dKVxufCp8ICAqIE1vemlsbGEuQ29va2llcy5oYXNJdGVtKG5hbWUpXG58KnwgICogTW96aWxsYS5Db29raWVzLmtleXMoKVxufCp8XG5cXCovXG5cbi8vIGNyZWF0ZSBuYW1lc3BhY2VcbmlmICh0eXBlb2Ygd2luZG93Lk1vemlsbGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1vemlsbGEgPSB7fTtcbn1cblxuTW96aWxsYS5Db29raWVzID0ge1xuICAgIGdldEl0ZW06IGZ1bmN0aW9uIChzS2V5KSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKCFzS2V5KSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cCgnKD86KD86XnwuKjspXFxcXHMqJyArIGVuY29kZVVSSUNvbXBvbmVudChzS2V5KS5yZXBsYWNlKC9bLS4rKl0vZywgJ1xcXFwkJicpICsgJ1xcXFxzKlxcXFw9XFxcXHMqKFteO10qKS4qJCl8Xi4qJCcpLCAnJDEnKSkgfHwgbnVsbDtcbiAgICB9LFxuICAgIHNldEl0ZW06IGZ1bmN0aW9uIChzS2V5LCBzVmFsdWUsIHZFbmQsIHNQYXRoLCBzRG9tYWluLCBiU2VjdXJlKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKCFzS2V5IHx8IC9eKD86ZXhwaXJlc3xtYXgtYWdlfHBhdGh8ZG9tYWlufHNlY3VyZSkkL2kudGVzdChzS2V5KSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgdmFyIHNFeHBpcmVzID0gJyc7XG4gICAgICAgIGlmICh2RW5kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHZFbmQuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gdkVuZCA9PT0gSW5maW5pdHkgPyAnOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMjM6NTk6NTkgR01UJyA6ICc7IG1heC1hZ2U9JyArIHZFbmQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcbiAgICAgICAgICAgICAgICBzRXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIHZFbmQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGU6XG4gICAgICAgICAgICAgICAgc0V4cGlyZXMgPSAnOyBleHBpcmVzPScgKyB2RW5kLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNWYWx1ZSkgKyBzRXhwaXJlcyArIChzRG9tYWluID8gJzsgZG9tYWluPScgKyBzRG9tYWluIDogJycpICsgKHNQYXRoID8gJzsgcGF0aD0nICsgc1BhdGggOiAnJykgKyAoYlNlY3VyZSA/ICc7IHNlY3VyZScgOiAnJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gKHNLZXksIHNQYXRoLCBzRG9tYWluKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKCF0aGlzLmhhc0l0ZW0oc0tleSkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChzS2V5KSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJyArIChzRG9tYWluID8gJzsgZG9tYWluPScgKyBzRG9tYWluIDogJycpICsgKHNQYXRoID8gJzsgcGF0aD0nICsgc1BhdGggOiAnJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaGFzSXRlbTogZnVuY3Rpb24gKHNLZXkpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBpZiAoIXNLZXkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHJldHVybiAobmV3IFJlZ0V4cCgnKD86Xnw7XFxcXHMqKScgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvWy0uKypdL2csICdcXFxcJCYnKSArICdcXFxccypcXFxcPScpKS50ZXN0KGRvY3VtZW50LmNvb2tpZSk7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgdmFyIGFLZXlzID0gZG9jdW1lbnQuY29va2llLnJlcGxhY2UoLygoPzpefFxccyo7KVtePV0rKSg/PTt8JCl8Xlxccyp8XFxzKig/Oj1bXjtdKik/KD86XFwxfCQpL2csICcnKS5zcGxpdCgvXFxzKig/Oj1bXjtdKik/O1xccyovKTtcbiAgICAgICAgZm9yICh2YXIgbkxlbiA9IGFLZXlzLmxlbmd0aCwgbklkeCA9IDA7IG5JZHggPCBuTGVuOyBuSWR4KyspIHsgYUtleXNbbklkeF0gPSBkZWNvZGVVUklDb21wb25lbnQoYUtleXNbbklkeF0pOyB9XG4gICAgICAgIHJldHVybiBhS2V5cztcbiAgICB9LFxuICAgIGVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb29raWVzIGZlYXR1cmUgZGV0ZWN0IGxpZnRlZCBmcm9tIE1vZGVybml6clxuICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29va2llcy5qc1xuICAgICAgICAgKlxuICAgICAgICAgKiBuYXZpZ2F0b3IuY29va2llRW5hYmxlZCBjYW5ub3QgZGV0ZWN0IGN1c3RvbSBvciBudWFuY2VkIGNvb2tpZSBibG9ja2luZ1xuICAgICAgICAgKiBjb25maWd1cmF0aW9ucy4gRm9yIGV4YW1wbGUsIHdoZW4gYmxvY2tpbmcgY29va2llcyB2aWEgdGhlIEFkdmFuY2VkXG4gICAgICAgICAqIFByaXZhY3kgU2V0dGluZ3MgaW4gSUU5LCBpdCBhbHdheXMgcmV0dXJucyB0cnVlLiBBbmQgdGhlcmUgaGF2ZSBiZWVuXG4gICAgICAgICAqIGlzc3VlcyBpbiB0aGUgcGFzdCB3aXRoIHNpdGUtc3BlY2lmaWMgZXhjZXB0aW9ucy5cbiAgICAgICAgICogRG9uJ3QgcmVseSBvbiBpdC5cblxuICAgICAgICAgKiB0cnkuLmNhdGNoIGJlY2F1c2UgaW4gc29tZSBzaXR1YXRpb25zIGBkb2N1bWVudC5jb29raWVgIGlzIGV4cG9zZWQgYnV0IHRocm93cyBhXG4gICAgICAgICAqIFNlY3VyaXR5RXJyb3IgaWYgeW91IHRyeSB0byBhY2Nlc3MgaXQ7IGUuZy4gZG9jdW1lbnRzIGNyZWF0ZWQgZnJvbSBkYXRhIFVSSXNcbiAgICAgICAgICogb3IgaW4gc2FuZGJveGVkIGlmcmFtZXMgKGRlcGVuZGluZyBvbiBmbGFncy9jb250ZXh0KVxuICAgICAgICAgKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBjb29raWVcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdjb29raWV0ZXN0PTEnO1xuICAgICAgICAgICAgdmFyIHJldCA9IGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKCdjb29raWV0ZXN0PScpICE9PSAtMTtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBjb29raWVcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdjb29raWV0ZXN0PTE7IGV4cGlyZXM9VGh1LCAwMS1KYW4tMTk3MCAwMDowMDowMSBHTVQnO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmlmICh0eXBlb2Ygd2luZG93Lk1vemlsbGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1vemlsbGEgPSB7fTtcbn1cblxuKGZ1bmN0aW9uKE1vemlsbGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyBpbml0IGRhdGFMYXllciBvYmplY3RcbiAgICB2YXIgZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgdmFyIEFuYWx5dGljcyA9IHt9O1xuXG4gICAgLyoqIFJldHVybnMgcGFnZSBJRCB1c2VkIGluIEV2ZW50IENhdGVnb3J5IGZvciBHQSBldmVudHMgdHJhY2tlZCBvbiBwYWdlLlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGggLSBVUkwgcGF0aCBuYW1lIGZhbGxiYWNrIGlmIHBhZ2UgSUQgZG9lcyBub3QgZXhpc3QuXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9IEdUTSBwYWdlIElELlxuICAgICovXG4gICAgQW5hbHl0aWNzLmdldFBhZ2VJZCA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgdmFyIHBhZ2VJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWd0bS1wYWdlLWlkJyk7XG4gICAgICAgIHZhciBwYXRoTmFtZSA9IHBhdGggPyBwYXRoIDogZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VJZCA/IHBhZ2VJZCA6IHBhdGhOYW1lLnJlcGxhY2UoL14oXFwvXFx3ezJ9LVxcd3syfVxcL3xcXC9cXHd7MiwzfVxcLykvLCAnLycpO1xuICAgIH07XG5cbiAgICBBbmFseXRpY3MuZ2V0VHJhZmZpY0NvcFJlZmVycmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWZlcnJlcjtcblxuICAgICAgICAvLyBpZiByZWZlcnJlciBjb29raWUgZXhpc3RzLCBzdG9yZSB0aGUgdmFsdWUgYW5kIHJlbW92ZSB0aGUgY29va2llXG4gICAgICAgIGlmIChNb3ppbGxhLkNvb2tpZXMgJiYgTW96aWxsYS5Db29raWVzLmhhc0l0ZW0oJ21vemlsbGEtdHJhZmZpYy1jb3Atb3JpZ2luYWwtcmVmZXJyZXInKSkge1xuICAgICAgICAgICAgcmVmZXJyZXIgPSBNb3ppbGxhLkNvb2tpZXMuZ2V0SXRlbSgnbW96aWxsYS10cmFmZmljLWNvcC1vcmlnaW5hbC1yZWZlcnJlcicpO1xuXG4gICAgICAgICAgICAvLyByZWZlcnJlciBzaG91bGRuJ3QgcGVyc2lzdFxuICAgICAgICAgICAgTW96aWxsYS5Db29raWVzLnJlbW92ZUl0ZW0oJ21vemlsbGEtdHJhZmZpYy1jb3Atb3JpZ2luYWwtcmVmZXJyZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZlcnJlcjtcbiAgICB9O1xuXG4gICAgQW5hbHl0aWNzLmJ1aWxkRGF0YU9iamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YU9iaiA9IHtcbiAgICAgICAgICAgICdldmVudCc6ICdwYWdlLWlkLWxvYWRlZCcsXG4gICAgICAgICAgICAncGFnZUlkJzogQW5hbHl0aWNzLmdldFBhZ2VJZCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlZmVycmVyID0gQW5hbHl0aWNzLmdldFRyYWZmaWNDb3BSZWZlcnJlcigpO1xuXG4gICAgICAgIC8vIGlmIG9yaWdpbmFsIHJlZmVycmVyIGV4aXN0cywgcGFzcyBpdCB0byBHVE1cbiAgICAgICAgaWYgKHJlZmVycmVyKSB7XG4gICAgICAgICAgICAvLyBUcmFmZmljIENvcCBzZXRzIHRoZSByZWZlcnJlciB0byAnZGlyZWN0JyBpZiBkb2N1bWVudC5yZWZlcmVyIGlzIGVtcHR5XG4gICAgICAgICAgICAvLyBwcmlvciB0byB0aGUgcmVkaXJlY3QsIHNvIHRoaXMgdmFsdWUgd2lsbCBlaXRoZXIgYmUgYSBVUkwgb3IgdGhlIHN0cmluZyAnZGlyZWN0Jy5cbiAgICAgICAgICAgIGRhdGFPYmouY3VzdG9tUmVmZXJyZXIgPSByZWZlcnJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhT2JqO1xuICAgIH07XG5cbiAgICAvLyBQdXNoIHBhZ2UgSUQgaW50byBkYXRhTGF5ZXIgc28gaXQncyByZWFkeSB3aGVuIEdUTSBjb250YWluZXIgbG9hZHMuXG4gICAgZGF0YUxheWVyLnB1c2goQW5hbHl0aWNzLmJ1aWxkRGF0YU9iamVjdCgpKTtcblxuICAgIE1vemlsbGEuQW5hbHl0aWNzID0gQW5hbHl0aWNzO1xufSkod2luZG93Lk1vemlsbGEpO1xuIl19
