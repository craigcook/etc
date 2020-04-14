/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

(function() {
    'use strict';

    var Utils = {};

    // Replace Google Play links on Android devices to let them open the marketplace app
    Utils.initMobileDownloadLinks = function() {
        if (site.platform === 'android') {
            var playLinks = document.querySelectorAll('a[href^="https://play.google.com/store/apps/"]');
            for (var i = 0; i < playLinks.length; ++i) {
                var playLink = playLinks[i];
                var oldHref = playLink.getAttribute('href');
                var newHref = oldHref.replace('https://play.google.com/store/apps/', 'market://');
                playLink.setAttribute('href', newHref);
            }
        }
    };

    // Bug 1264843: link to China build of Fx4A, for display within Fx China repack
    Utils.maybeSwitchToDistDownloadLinks = function(client) {
        if (!client.distribution || client.distribution === 'default') {
            return;
        }

        var distribution = client.distribution.toLowerCase();
        var links = document.querySelectorAll('a[data-' + distribution + '-link]');
        var images = document.querySelectorAll('img[data-' + distribution + '-link]');
        for (var i = 0; i < links.length; i++) {
            var distributionLink = links[i].getAttribute('data-' + distribution + '-link');
            links[i].setAttribute('href', distributionLink);
        }
        for (var j = 0; j < images.length; j++) {
            var distributionSrc = images[j].getAttribute('data-' + distribution + '-link');
            images[j].setAttribute('src', distributionSrc);
        }
    };

    // client-side redirects (handy for testing)
    Utils.doRedirect = function(destination) {
        if (destination) {
            window.location.href = destination;
        }
    };

    // Create text translation function using #strings element.
    // TODO: Move to docs
    // In order to use it, you need a block string_data bit inside your template,
    // then, each key name needs to be preceded by data- as this uses data attributes
    // to work. After this, you can access all strings defined inside the
    // string_data block in JS using Mozilla.Utils.trans('key-of-string'); Thank @mkelly
    var _strings = document.getElementById('strings');
    Utils.trans = function(stringId) {
        if (_strings) {
            return _strings.getAttribute('data-' + stringId);
        } else {
            return undefined;
        }
    };

    window.Mozilla.Utils = Utils;

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global Spinner */

$(function () {
    'use strict';

    /*
     * Expand footer email form on input focus or submit if details aren't visible
     */
    function initFooterEmailForm () {
        var $submitButton = $('.footer-newsletter-form input[type=submit]');
        var $formDetails = $('.footer-newsletter-form #form-details');
        var $formDetailsSecondary = $('.footer-newsletter-form .form-details');

        function footerEmailFormShowDetails() {
            if (!$formDetails.is(':visible')) {
                $formDetails.slideDown('normal');
                $formDetailsSecondary.slideDown('normal');
            }
        }

        $('.footer-newsletter-form').on('focus', 'select, input', footerEmailFormShowDetails);

        $submitButton.on('click', function (e) {
            if (!$formDetails.is(':visible')) {
                e.preventDefault();
                footerEmailFormShowDetails();
            }
        });
    }

    initFooterEmailForm();

    /*
     * Get the newsletter name for tracking in GA
     * @param jQuery form object
     */
    function getNewsletterName ($form) {
        var $input = $form.children('input[name=newsletters]');

        // If there's a name=newsletter input field, we can get the newsletter
        // from that. If not, assume we've got one of the forms that subscribes
        // to the foundation newsletter.
        if ($input.length === 0) {
            return 'Registered for Firefox Updates';
        }
        return $input.val();
    }

    /*
     * Standard newsletter form uses ajax submission
     */
    $('#newsletter-form').on('submit', function (e) {
        e.preventDefault();

        var $self = $(this);
        var $errors = $('#footer-email-errors');
        var $errorlist = $errors.find('ul.errorlist');
        var $submitbutton = $('#footer_email_submit');
        var $spinnerTarget = $('#newsletter-spinner');
        var spinnerColor = '#000'; // default to black

        // look for custom spinner color
        if ($self.data('spinner-color')) {
            spinnerColor = $self.data('spinner-color');
        }

        var spinner = new Spinner({
            lines: 12, // The number of lines to draw
            length: 4, // The length of each line
            width: 2, // The line thickness
            radius: 4, // The radius of the inner circle
            corners: 0, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: spinnerColor, // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: true // Whether to use hardware acceleration
        });

        $errors.hide();
        $errorlist.empty();

        // have to collect data before disabling inputs
        var formData = $self.serialize();
        disableForm();

        $.ajax($self.attr('action'), {
            'method': 'post',
            'data': formData,
            'dataType': 'json'
        }).done(function (data) {
            if (data.success) {
                var $thanks = $('#newsletter-form-thankyou');
                var formHeight = $self.css('height');

                // set the min-height of the thank you message
                // to the height of the form to stop page height
                // jumping on success
                $thanks.css('min-height', formHeight);
                $self.hide();

                // enableForm to cancel interval and enable form elements.
                // if page is refreshed and form elements are disabled,
                // they will be disabled after refresh.
                enableForm();

                // show the thank you message
                $thanks.show();

                // track signup in GA

                var newsletter = getNewsletterName($self);
                window.dataLayer.push({
                    'event': 'newsletter-signup-success',
                    'newsletter': newsletter
                });

            } else if (data.errors) {
                for (var i = 0; i < data.errors.length; i++) {
                    $errorlist.append('<li>' + data.errors[i] + '</li>');
                }
                $errors.show();
                enableForm();
            }
        }).fail(function () {
            // shouldn't need l10n. This should almost never happen.
            $errorlist.append('<li>An unknown error occurred. Please try again later</li>');
            $errors.show();
            enableForm();
        });

        function disableForm() {
            $self.addClass('loading');
            $self.find('input,select').prop('disabled', true);
            $submitbutton.addClass('insensitive');
            spinner.spin($spinnerTarget.show()[0]);
        }

        function enableForm() {
            $self.removeClass('loading');
            $self.find('input,select').prop('disabled', false);
            $submitbutton.removeClass('insensitive');
            spinner.stop();
            $spinnerTarget.hide();
        }
    });
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

(function() {
    'use strict';

    /**
     * Provide information on the user's browsing environment, including the platform and browser details.
     *
     * @namespace
     * @see {@link https://developer.mozilla.org/en-US/docs/Gecko_user_agent_string_reference}
     */
    var Client = {};
    var FxALastSupported = 40; // the FxAccounts team provided this number in bug 1457004#c21 they don't want to support anything beneath it

    /**
     * Detect whether the user's browser is Firefox on any platform. This includes WebKit-based Firefox for iOS.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @return {Boolean} result
     */
    Client._isFirefox = function (ua) {
        ua = ua || navigator.userAgent;

        return /\s(Firefox|FxiOS)/.test(ua) && !Client._isLikeFirefox(ua);
    };

    /**
     * Detect whether the user's browser is Firefox for Windows, OS X or Linux.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @return {Boolean} result
     */
    Client._isFirefoxDesktop = function (ua) {
        ua = ua || navigator.userAgent;

        return /\sFirefox/.test(ua) && !/Mobile|Tablet|Fennec/.test(ua) && !Client._isLikeFirefox(ua);
    };

    /**
     * Detect whether the user's browser is Firefox for Android.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @return {Boolean} result
     */
    Client._isFirefoxAndroid = function (ua) {
        ua = ua || navigator.userAgent;

        return /\sFirefox/.test(ua) && /Android/.test(ua);
    };

    /**
     * Detect whether the user's browser is Firefox for iOS.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @return {Boolean} result
     */
    Client._isFirefoxiOS = function (ua) {
        ua = ua || navigator.userAgent;

        return /FxiOS/.test(ua);
    };

    /**
     * Detect whether the user's browser is the Browser app on Firefox OS.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @param  {String} pf - browser's platform name, navigator.platform is used if not specified
     * @return {Boolean} result
     */
    Client._isFirefoxFxOS = function (ua, pf) {
        ua = ua || navigator.userAgent;
        pf = (pf === '') ? '' : pf || navigator.platform;

        return /Firefox/.test(ua) && pf === '';
    };

    /**
     * Detect whether the user's browser is Gecko-based. Used on the plugincheck page to support all Gecko browsers.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @return {Boolean} result
     */
    Client._isLikeFirefox = function (ua) {
        ua = ua || navigator.userAgent;

        return /Iceweasel|IceCat|SeaMonkey|Camino|like Firefox/i.test(ua);
    };

    /**
     * Get the user's Firefox version number. '0' will be returned on Firefox for iOS and non-Firefox browsers.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @return {String} version number
     */
    Client._getFirefoxVersion = function (ua) {
        ua = ua || navigator.userAgent;

        var matches = /Firefox\/(\d+(?:\.\d+){1,2})/.exec(ua);

        return (matches && !Client._isLikeFirefox(ua)) ? matches[1] : '0';
    };

    /**
     * Get the user's Firefox major version number. 0 will be returned on Firefox for iOS and non-Firefox browsers.
     *
     * @private
     * @param  {String} ua - browser's user agent string, navigator.userAgent is used if not specified
     * @return {Number} major version number in integer
     */
    Client._getFirefoxMajorVersion = function (ua) {
        return parseInt(Client._getFirefoxVersion(ua), 10);
    };

    /**
     * Determine if user version is up to date with latest version from product details.
     *
     * @private
     * @param  {Boolean} strict - if false compare the major version number only.
     * @param  {Array} userVerArr - the user version number.
     * @param  {Array} latestVerArr - the latest version number from product details.
     * @return {Boolean} true if user version number is equal to or greater than product details version.
     */
    Client._compareVersion = function (strict, userVerArr, latestVerArr) {
        var currentUserNumber = 0;
        var currentLatestNumber = 0;
        var isUpToDate = false;

        // Make sure both latest and user array lengths match.
        while (latestVerArr.length < userVerArr.length) {
            latestVerArr.push('0');
        }
        while (userVerArr.length < latestVerArr.length) {
            userVerArr.push('0');
        }

        // Only check the major version in non-strict comparison mode.
        if (!strict) {
            latestVerArr.length = 1;
        }

        // Step through the array from product details and compare to the user array.
        for (var j = 0; j < latestVerArr.length; j++) {
            currentUserNumber = Number(userVerArr[j]);
            currentLatestNumber = Number(latestVerArr[j]);

            if (currentUserNumber < currentLatestNumber) {
                isUpToDate = false;
                break;
            } else if (currentUserNumber > currentLatestNumber) {
                isUpToDate = true;
                break;
            } else {
                isUpToDate = true;
            }
        }

        return isUpToDate;
    };

    /**
     * Detect whether the user's Firefox is up to date or outdated. This data is mainly used for security notifications.
     *
     * @private
     * @param  {Boolean} strict - whether the minor and patch-level version numbers should be compared. Default: true
     * @param  {Boolean} isESR - whether the Firefox update channel is ESR. Default: false
     * @param  {String}  userVer - browser's version number
     * @return {Boolean} result
     */
    Client._isFirefoxUpToDate = function (strict, isESR, userVer) {
        strict = strict === undefined ? true : strict;
        isESR = isESR === undefined ? false : isESR;
        userVer = userVer === undefined ? Client._getFirefoxVersion() : userVer;

        var html = document.documentElement;

        if (!html.getAttribute('data-esr-versions') || !html.getAttribute('data-latest-firefox')) {
            return false;
        }

        var versions = isESR ? html.getAttribute('data-esr-versions').split(' ') : [html.getAttribute('data-latest-firefox')];
        var userVerArr = userVer.match(/^(\d+(?:\.\d+){1,2})/)[1].split('.');
        var isUpToDate = false;

        // Sort product details version so we compare the newer version first
        versions.sort(function(a, b) { return parseFloat(a) < parseFloat(b); });

        // Compare each latest version in product details to the user version.
        for (var i = 0; i < versions.length; i++) {
            var latestVerArr = versions[i].split('.');

            isUpToDate = Client._compareVersion(strict, userVerArr, latestVerArr);

            if (isUpToDate) {
                break;
            }
        }

        return isUpToDate;
    };

    /**
     * Determine if a client version number is at least a specific number of major releases old.
     * @param {String} clientVer - Client version number "58.0a1", "56.0".
     * @param {Number} majorVer - Number of major versions old a client considered 'out of date' should be.
     * @param {String} latestVer - Current latest release version number.
     * @return {Boolean}
     */
    Client.isFirefoxOutOfDate = function(clientVer, majorVer, latestVer) {
        var clientVersion = parseInt(clientVer, 10);
        var latestVersion = typeof latestVer === 'undefined' ? parseInt(document.documentElement.getAttribute('data-latest-firefox'), 10) : parseInt(latestVer, 10);
        var majorVersions = Math.max(parseInt(majorVer, 10), 1); // majorVersions must be at least 1.

        if (isNaN(latestVersion) || isNaN(clientVersion) || isNaN(majorVersions)) {
            return false;
        }

        return clientVersion <= latestVersion - majorVersions;
    };

    /**
     * Determine if a /whatsnew or /firstrun page is at least a specific number of major releases old.
     * @param {Number} majorVer - Number of major versions old a client considered 'out of date' should be.
     * @param {String} pathName - Version number URL pathname e.g. '/firefox/56.0.1/'.
     * @param {String} latestVer - Current latest release version number.
     * @return {Boolean}
     */
    Client.isFirefoxURLOutOfDate = function(majorVer, pathName, latestVer) {
        var path = typeof pathName === 'undefined' ? window.location.pathname : pathName;
        var urlVersion =  /firefox\/(\d+(?:\.\d+)?\.\da?\d?)/.exec(path);
        var version = urlVersion ? parseInt(urlVersion[1], 10) : null;
        var latestVersion = typeof latestVer === 'undefined' ? parseInt(document.documentElement.getAttribute('data-latest-firefox'), 10) : parseInt(latestVer, 10);
        var majorVersions = Math.max(parseInt(majorVer, 10), 1); // majorVersions must be at least 1.

        if (version && latestVersion && (version <= latestVersion - majorVersions)) {
            return true;
        }

        return false;
    };

    /**
     * Use the async mozUITour API of Firefox to retrieve the user's browser info, including the update channel and
     * accurate, patch-level version number. This API is available on Firefox 35 and later. See
     * http://bedrock.readthedocs.org/en/latest/uitour.html for details.
     *
     * @param  {Function} callback - callback function to be executed with the Firefox details
     * @return {None}
     */
    Client.getFirefoxDetails = function (callback) {
        // Fire the callback function immediately if cache exists
        if (Client.FirefoxDetails) {
            callback(Client.FirefoxDetails);

            return;
        }

        var callbackID = Math.random().toString(36).replace(/[^a-z]+/g, '');

        var listener = function (event) {
            if (!event.detail || !event.detail.data || event.detail.callbackID !== callbackID) {
                return;
            }

            window.clearTimeout(timer);
            onRetrieved(true, event.detail.data.version, event.detail.data.defaultUpdateChannel, event.detail.data.distribution);
        };

        var onRetrieved = function (accurate, version, channel, distribution) {
            document.removeEventListener('mozUITourResponse', listener, false);

            var isESR = channel === 'esr';
            var isUpToDate = Client._isFirefoxUpToDate(accurate, accurate ? isESR : false, version);
            var details = Client.FirefoxDetails = {
                'accurate': accurate,
                'version': version,
                'channel': channel,
                'distribution': distribution,
                'isUpToDate': isUpToDate,
                'isESR': isESR
            };

            callback(details);
        };

        // Prepare fallback function in case the API doesn't work
        var userVer = Client._getFirefoxVersion();
        var fallback = function () { onRetrieved(false, userVer, 'release', undefined); };

        // If Firefox is old or for Android, call the fallback function immediately because the API is not implemented
        if (parseFloat(userVer) < 35 || Client._isFirefoxAndroid()) {
            fallback();

            return;
        }

        // Fire the fallback function in .4 seconds
        var timer = window.setTimeout(fallback, 400);

        // Trigger the API
        document.addEventListener('mozUITourResponse', listener, false);
        document.dispatchEvent(new CustomEvent('mozUITour', {
            'bubbles': true,
            'detail': {
                'action': 'getConfiguration',
                'data': { 'configuration': 'appinfo', 'callbackID': callbackID }
            }
        }));
    };

    /**
     * Use the async mozUITour API of Firefox to retrieve the user's FxA info. See
     * http://bedrock.readthedocs.org/en/latest/uitour.html for details.
     *
     * FxA was previously branded as Sync.
     *
     * The various states here are... complicated
     * This is the intention:
     *     - firefox: true if Firefox
     *     - legacy: true if older than FxALastSupported
     *     - mobile: false | android | ios
     *     - setup: true if Fx >= 29 and logged into FxA
     *     - desktopDevices & mobileDevices
     *          - if logged in and Fx >= 50: the number of linked devices
     *          - if logged in and Fx < 50 && Fx > 29: 'unknown'
     *          - if logged out or Fx < 29 or not Fx: false
     * Notes:
     * - Fx < 50 has FxA and UITour support but the API does not return device counts
     * - Fx < FxALastSupported accounts.firefox.com does not work
     *     - FxALastSupported is supplied by the FxA team
     *     - these versions are still capable of logging in through the browser
     *     - differentiated because we generally do not give these versions the FxA calls to action (eg. "Create an Account")
     * - Fx < 29 the mozUITour API is not available, though the user may still be logged in
     * - If you're curious, "sync" began with Fx 4.
     *
     * @param  {Function} callback - callback function to be executed with the FxA details
     * @return {None}
     */
    Client.getFxaDetails = function (callback) {
        // Fire the callback function immediately if FxaDetails are already defined
        if (Client.FxaDetails) {
            callback(Client.FxaDetails);

            return;
        }
        // set up the object with default values of false
        var details = {
            'firefox': false,
            'legacy': false,
            'mobile': false,
            'setup': false,
            'desktopDevices': false,
            'mobileDevices': false
        };

        // override object values as we get more information
        if(Client.isFirefoxAndroid) {
            details.firefox = true;
            details.mobile = 'android';
            returnFxaDetails();
        } else if (Client.isFirefoxiOS) {
            details.firefox = true;
            details.mobile = 'ios';
            returnFxaDetails();
        } else if(Client.isFirefoxDesktop) {
            details.firefox = true;
            // firefox desktop
            var userVer = Client._getFirefoxVersion();
            if(parseFloat(userVer) < 29) {
                // UITour not supported
                details.legacy = true;
            } else {
                // UITour supported
                // still note if it's older than accounts.firefox.com supports
                if (parseFloat(userVer) < FxALastSupported) {
                    details.legacy = true;
                }

                // callbackID to make sure we're responding to our request
                var callbackID = Math.random().toString(36).replace(/[^a-z]+/g, '');

                // UITour API response event handler, checks for callbackID
                var listener = function (event) {
                    if (!event.detail || !event.detail.data || event.detail.callbackID !== callbackID) {
                        return;
                    }
                    window.clearTimeout(timer);
                    document.removeEventListener('mozUITourResponse', listener, false);

                    // device counts
                    // device counts are only available in Fx50+, fallback 'unknown' if not detectable
                    details.setup = Object.prototype.hasOwnProperty.call(event.detail.data, 'setup') ? event.detail.data.setup : 'unknown';
                    details.desktopDevices = Object.prototype.hasOwnProperty.call(event.detail.data, 'desktopDevices') ? event.detail.data.desktopDevices : 'unknown';
                    details.mobileDevices = Object.prototype.hasOwnProperty.call(event.detail.data, 'mobileDevices') ? event.detail.data.mobileDevices : 'unknown';

                    returnFxaDetails();
                };

                // Trigger the UITour API and start listening for the reponse
                document.addEventListener('mozUITourResponse', listener, false);
                document.dispatchEvent(new CustomEvent('mozUITour', {
                    'bubbles': true,
                    'detail': {
                        'action': 'getConfiguration',
                        'data': { 'configuration': 'sync', 'callbackID': callbackID }
                    }
                }));
            }
        }

        function returnFxaDetails() {
            window.clearTimeout(timer);
            Client.FxaDetails = details;
            callback(details);
        }

        // Fire the fallback function in .4 seconds
        var timer = window.setTimeout(returnFxaDetails, 400);
    };


    // Append static properties for faster access
    Client.isFirefox = Client._isFirefox();
    Client.isFirefoxDesktop = Client._isFirefoxDesktop();
    Client.isFirefoxAndroid = Client._isFirefoxAndroid();
    Client.isFirefoxiOS = Client._isFirefoxiOS();
    Client.isFirefoxFxOS = Client._isFirefoxFxOS();
    Client.isLikeFirefox = Client._isLikeFirefox();
    Client.FirefoxVersion = Client._getFirefoxVersion();
    Client.FirefoxMajorVersion = Client._getFirefoxMajorVersion();

    // Append platform info as well for convenience
    Client.platform = window.site.platform;
    Client.isMobile = /^(android|ios|fxos)$/.test(Client.platform);
    Client.isDesktop = !Client.isMobile;

    window.Mozilla.Client = Client;

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*
 * A lightweight classList API polyfill (thanks MDN!)
 * https://developer.mozilla.org/docs/Web/API/Element/classList
 */
(function() {
    'use strict';

    // helpers
    var regExp = function(name) {
        return new RegExp('(^| )'+ name +'( |$)');
    };
    var forEach = function(list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };

    // class list object with basic methods
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.setAttribute('class', this.element.className + ' ' + name);
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.setAttribute('class', this.element.className.replace(regExp(name), ''));
            }, this);
        },
        toggle: function(name) {
            return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        // bonus..
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    if (typeof Element !== 'undefined' && !('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }

    // replace() support for others
    if (window.DOMTokenList && DOMTokenList.prototype.replace === null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

(function() {
    'use strict';

    window.Mozilla.run = function(callback) {
        var isModernBrowser = window.site && window.site.isModernBrowser;

        if (isModernBrowser && typeof callback === 'function') {
            callback();
        }
    };
})(window.Mozilla);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function(doc) {
    'use strict';

    var Supports = {};

    /**
    * matchMedia
    * @return {Boolean} boolean value for if the browser supports matchMedia
    */
    Supports.matchMedia = (function() {
        return typeof window.matchMedia !== 'undefined' && window.matchMedia('all').addListener;
    }());

    /**
    * classList
    * @return {Boolean} boolean value for if the browser supports classList
    */
    Supports.classList = (function() {
        return 'classList' in document.createElement('div');
    }());

    /**
     * details
     * @return {Boolean} boolean value for if the browser supports the details/summary elements
     * - feature detection for HTML5 detail/summary support
     * - https://mathiasbynens.be/notes/html5-details-jquery#comment-35
     */
    Supports.details = (function() {
        var el = doc.createElement('details');
        var fake;
        var root;
        var diff;
        if (!('open' in el)) {
            return false;
        }
        root = doc.body || (function() {
            var de = doc.documentElement;
            fake = true;
            return de.insertBefore(doc.createElement('body'), de.firstElementChild || de.firstChild);
        }());
        el.innerHTML = '<summary>a</summary>b';
        el.style.display = 'block';
        root.appendChild(el);
        diff = el.offsetHeight;
        el.open = true;
        diff = diff !== el.offsetHeight;
        root.removeChild(el);
        if (fake) {
            root.parentNode.removeChild(root);
        }
        return diff;
    }());

    window.Mzp.Supports = Supports;
})(document);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var Utils = {};

    // matches() vendorfill, used by nextUntil
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    /**
     * nextUntil
     * @param {Object} el - Element that you want to get the siblings of
     * @param {String} selector - Selector of the element you want to stop collecting siblings before
     * @param {String} filter - Selector to filter results if you only want siblings matching this pattern
     * @return {Array} - an array of HTML elements
     * - https://gomakethings.com/how-to-get-all-sibling-elements-until-a-match-is-found-with-vanilla-javascript/
     */
    Utils.nextUntil = function (el, selector, filter) {
        // Setup siblings array
        var siblings = [];

        // Get the next sibling element
        el = el.nextElementSibling;

        // As long as a sibling exists
        while (el) {

            // If we've reached our match, bail
            if (el.matches(selector)) {
                break;
            }

            // If filtering by a selector, check if the sibling matches
            if (filter && !el.matches(filter)) {
                el = el.nextElementSibling;
                continue;
            }

            // Otherwise, push it to the siblings array
            siblings.push(el);

            // Get the next sibling element
            el = el.nextElementSibling;
        }

        return siblings;
    };

    window.Mzp.Utils = Utils;
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function(Mzp) {
    'use strict';

    var Menu = {};
    var _menuOpen = false;
    var _hoverTimeout;
    var _hoverTimeoutDelay = 150;
    var _mqWideNav;
    var _wideBreakpoint = '768px';

    var _options = {
        onMenuOpen: null,
        onMenuClose: null,
        onMenuButtonClose: null
    };

    /**
     * Opens a menu panel.
     * @param {Object} el - DOM element (`.mzp-c-menu-category.mzp-js-expandable`)
     * @param {Boolean} animate - show animation when menu panel opens.
     */
    Menu.open = function(el, animate) {
        if (animate) {
            el.classList.add('mzp-is-animated');
        }

        el.classList.add('mzp-is-selected');

        _menuOpen = true; // For checking menu state on keyup.

        el.querySelector('.mzp-c-menu-title').setAttribute('aria-expanded', true);

        if (typeof _options.onMenuOpen === 'function') {
            _options.onMenuOpen(el);
        }
    };

    /**
     * Closes all currently open menu panels.
     * Note: on small screens more than one menu can be open at the same time.
     */
    Menu.close = function() {
        var current = document.querySelectorAll('.mzp-c-menu-category.mzp-is-selected');

        for (var i = 0; i < current.length; i++) {
            // The following classes must be removed in the correct order
            // to work around a bug in bedrock's classList polyfill for IE9.
            // https://github.com/mozilla/bedrock/issues/6221 :/
            current[i].classList.remove('mzp-is-selected');
            current[i].classList.remove('mzp-is-animated');

            current[i].querySelector('.mzp-c-menu-title').setAttribute('aria-expanded', false);
        }

        _menuOpen = false; // For checking menu state on keyup.

        if (typeof _options.onMenuClose === 'function' && current.length > 0) {
            _options.onMenuClose();
        }

        return current.length > 0;
    };

    Menu.onDocumentKeyUp = function(e) {
        if (e.keyCode === 27 && _menuOpen) {
            Menu.close();
        }
    };

    /**
     * Menu panel close button `click` event handler.
     * @param {Object} e - Event object.
     */
    Menu.onCloseButtonClick = function(e) {
        e.preventDefault();

        if (typeof _options.onMenuButtonClose === 'function') {
            _options.onMenuButtonClose();
        }

        Menu.close();
    };

    /**
     * Toggles the open/closed state of a menu panel.
     * @param {Object} el - DOM element (`.mzp-c-menu-category.mzp-js-expandable`)
     */
    Menu.toggle = function(el) {
        var state = el.classList.contains('mzp-is-selected') ? true : false;

        if (!state) {
            Menu.open(el);
        } else {
            // The following classes must be removed in the correct order
            // to work around a bug in bedrock's classList polyfill for IE9.
            // https://github.com/mozilla/bedrock/issues/6221 :/
            el.classList.remove('mzp-is-selected');
            el.classList.remove('mzp-is-animated');
            el.querySelector('.mzp-c-menu-title').setAttribute('aria-expanded', false);

            if (typeof _options.onMenuClose === 'function') {
                _options.onMenuClose();
            }
        }
    };

    /**
     * Menu `mouseenter` event handler.
     * Opens the menu only when hover intent is shown.
     * Animates only if a menu panel is not already open.
     * @param {Object} e - Event object.
     */
    Menu.onMouseEnter = function(e) {
        clearTimeout(_hoverTimeout);

        _hoverTimeout = setTimeout(function() {
            var current = Menu.close();
            var animate = current ? false: true;

            Menu.open(e.target, animate);
        }, _hoverTimeoutDelay);
    };

    /**
     * Menu `mouseleave` event handler.
     * Closes the menu only when hover intent is shown.
     */
    Menu.onMouseLeave = function() {
        clearTimeout(_hoverTimeout);

        _hoverTimeout = setTimeout(function() {
            Menu.close();
        }, _hoverTimeoutDelay);
    };

    /**
     * Menu `focusout` event handler.
     * Closes the menu when focus moves to an alement outside of the currently open panel.
     */
    Menu.onFocusOut = function() {
        var self = this;

        /**
         * After an element loses focus, `document.activeElement` will always be `body` before
         * moving to the next element. A `setTimeout` of `0` circumvents this issue as it
         * re-queues the JavaScript to run at the end of the current excecution.
         */
        setTimeout(function() {
            // If the menu is open and the newly focused element is not a child, then call close().
            if (!self.contains(document.activeElement) && self.classList.contains('mzp-is-selected')) {
                Menu.close();
            }
        }, 0);
    };

    /**
     * Menu link `click` event handler for wide viewports.
     * Closes any currently open menu panels before opening the selected one.
     * @param {Object} e - Event object.
     */
    Menu.onClickWide = function(e) {
        e.preventDefault();
        Menu.close();
        Menu.open(e.target.parentNode);
    };

    /**
     * Menu link `click` event handler for small viewports.
     * Toggles the currently selected menu open open/close state.
     * @param {Object} e - Event object.
     */
    Menu.onClickSmall = function(e) {
        e.preventDefault();
        Menu.toggle(e.target.parentNode);
    };

    /**
     * Convenience function for checking `matchMedia` state.
     * @return {Boolean}
     */
    Menu.isWideViewport = function() {
        return _mqWideNav.matches;
    };

    /**
     * Toggle desktop/mobile navigation using `matchMedia` event handler.
     */
    Menu.handleState = function() {
        _mqWideNav = matchMedia('(min-width: ' + _wideBreakpoint + ')');

        _mqWideNav.addListener(function(mq) {
            Menu.close();

            if (mq.matches) {
                Menu.unbindEventsSmall();
                Menu.bindEventsWide();
            } else {
                Menu.unbindEventsWide();
                Menu.bindEventsSmall();
            }
        });

        if (Menu.isWideViewport()) {
            Menu.bindEventsWide();
        } else {
            Menu.bindEventsSmall();
        }
    };

    /**
     * Bind events for wide viewports.
     */
    Menu.bindEventsWide = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable');
        var link;
        var close;

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('mouseenter', Menu.onMouseEnter, false);
            items[i].addEventListener('mouseleave', Menu.onMouseLeave, false);
            items[i].addEventListener('focusout', Menu.onFocusOut, false);

            link = items[i].querySelector('.mzp-c-menu-title');
            link.addEventListener('click', Menu.onClickWide, false);

            close = items[i].querySelector('.mzp-c-menu-button-close');
            close.addEventListener('click', Menu.onCloseButtonClick, false);
        }

        // close with escape key
        document.addEventListener('keyup', Menu.onDocumentKeyUp, false);
    };

    /**
     * Unbind events for wide viewports.
     */
    Menu.unbindEventsWide = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable');
        var link;
        var close;

        for (var i = 0; i < items.length; i++) {
            items[i].removeEventListener('mouseenter', Menu.onMouseEnter, false);
            items[i].removeEventListener('mouseleave', Menu.onMouseLeave, false);
            items[i].removeEventListener('focusout', Menu.onFocusOut, false);

            link = items[i].querySelector('.mzp-c-menu-title');
            link.removeEventListener('click', Menu.onClickWide, false);

            close = items[i].querySelector('.mzp-c-menu-button-close');
            close.removeEventListener('click', Menu.onCloseButtonClick, false);
        }

        document.removeEventListener('keyup', Menu.onDocumentKeyUp, false);
    };

    /**
     * Bind events for small viewports.
     */
    Menu.bindEventsSmall = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', Menu.onClickSmall, false);
        }
    };

    /**
     * Unbind events for small viewports.
     */
    Menu.unbindEventsSmall = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].removeEventListener('click', Menu.onClickSmall, false);
        }
    };

    /**
     * Set initial ARIA menu panel states.
     */
    Menu.setAria = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', false);
        }
    };

    /**
     * Enhances the menu for 1st class JS support.
     */
    Menu.enhanceJS = function() {
        var menu = document.querySelectorAll('.mzp-c-menu');

        for (var i = 0; i < menu.length; i++) {
            menu[i].classList.remove('mzp-is-basic');
            menu[i].classList.add('mzp-is-enhanced');
        }
    };

    /**
     * Basic feature detect for 1st class menu JS support.
     */
    Menu.isSupported = function() {
        if (typeof Mzp.Supports !== 'undefined') {
            return Mzp.Supports.matchMedia && Mzp.Supports.classList;
        } else {
            return false;
        }
    };

    /**
     * Initialise menu.
     * @param {Object} options - configurable options.
     */
    Menu.init = function(options) {
        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    _options[i] = options[i];
                }
            }
        }

        if (Menu.isSupported()) {
            Menu.handleState();
            Menu.setAria();
            Menu.enhanceJS();
        }
    };

    window.Mzp.Menu = Menu;

})(window.Mzp);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var Navigation = {};
    var navItemsLists;
    var _options = {
        onNavOpen: null,
        onNavClose: null
    };

    /**
     * Event handler for navigation menu button `click` events.
     */
    Navigation.onClick = function(e) {
        var thisNavItemList = e.target.parentNode.querySelector('.mzp-c-navigation-items');

        e.preventDefault();

        // Update button state
        e.target.classList.toggle('mzp-is-active');

        // Update menu state
        thisNavItemList.classList.toggle('mzp-is-open');

        // Update aria-expended state on menu.
        var expanded = thisNavItemList.classList.contains('mzp-is-open') ? true : false;
        thisNavItemList.setAttribute('aria-expanded', expanded);

        if (expanded) {
            if (typeof _options.onNavOpen === 'function') {
                _options.onNavOpen(thisNavItemList);
            }
        } else {
            if (typeof _options.onNavClose === 'function') {
                _options.onNavClose(thisNavItemList);
            }
        }
    };

    /**
     * Set initial ARIA navigation states.
     */
    Navigation.setAria = function() {
        for (var i = 0; i < navItemsLists.length; i++) {
            navItemsLists[i].setAttribute('aria-expanded', false);
        }
    };

    /**
     * Bind navigation event handlers.
     */
    Navigation.bindEvents = function() {
        navItemsLists = document.querySelectorAll('.mzp-c-navigation-items');
        if (navItemsLists.length > 0) {
            var navButtons = document.querySelectorAll('.mzp-c-navigation-menu-button');
            for (var i = 0; i < navButtons.length; i++) {
                navButtons[i].addEventListener('click', Navigation.onClick, false);
            }
            Navigation.setAria();
        }
    };

    /**
     * Initialise menu.
     * @param {Object} options - configurable options.
     */
    Navigation.init = function(options) {
        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    _options[i] = options[i];
                }
            }
        }

        Navigation.bindEvents();
    };

    window.Mzp.Navigation = Navigation;

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Initialize Protocol Navigation.
 */
(function() {
    'use strict';

    if (typeof Mzp === 'undefined' || typeof Mzp.Menu === 'undefined' || typeof Mzp.Navigation === 'undefined') {
        return;
    }

    var hasMediaQueries = typeof window.matchMedia !== 'undefined';

    function onImageLoad(e) {
        e.target.removeAttribute('data-src');
        e.target.removeAttribute('data-srcset');
    }

    function handleOnMenuOpen(el) {
        if (!hasMediaQueries || !window.matchMedia('(min-width: 768px)').matches) {
            return;
        }

        var cardImage = el.querySelector('.mzp-c-card-image');

        if (cardImage) {
            var newSrc = cardImage.getAttribute('data-src');

            if (newSrc) {
                var newSrcSet = cardImage.getAttribute('data-srcset');

                if (newSrcSet) {
                    cardImage.srcset = newSrcSet;
                }

                cardImage.src = newSrc;
                cardImage.onload = onImageLoad;
            }

        }
    }

    function initFxAButton() {
        if (typeof Mozilla.Client === 'undefined') {
            return false;
        }

        var nav = document.querySelector('.mzp-c-navigation');
        var fxaButton = document.querySelector('.mzp-c-navigation .c-navigation-fxa-cta');

        // User should be on Firefox desktop, nav should be present on page, and the FxA button should exist.
        if (!Mozilla.Client.isFirefoxDesktop || !nav || !fxaButton) {
            return false;
        }

        // Button is hidden from most locales for now so make sure it exists before we mess with it.
        if (fxaButton) {
            var fxaButtonAltHref = fxaButton.getAttribute('data-alt-href');

            // Update the button if user is signed in
            Mozilla.Client.getFxaDetails(function(details) {
                if (details.setup) {
                    nav.classList.add('fxa-signed-in');
                    fxaButton.href = fxaButtonAltHref;
                }
            });
        }
    }

    initFxAButton();

    Mzp.Menu.init({
        onMenuOpen: handleOnMenuOpen
    });

    Mzp.Navigation.init();
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var LangSwitcher = {};

    /**
     * Returns URL pathname with preceded by a new page locale.
     * Assumes first path immediately after hostname is the page locale.
     * @param {Object} Location interface
     * @param {String} Newly selected language code e.g. `de`
     * @return {String} pathname e.g. `/de/firefox/`
     */
    LangSwitcher.switchPath = function(location, newLang) {
        var parts = location.pathname.slice(1).split('/');
        var currentLang = '/' + parts[0] + '/';

        // check that first path is a valid lang code.
        if (!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(currentLang)) {
            return false;
        }

        var urlpath = parts.slice(1).join('/');
        return '/' + newLang + '/' + urlpath + location.search;
    };

    /**
     * Redirect page to destination URL if valid
     * @param {String} destination
     */
    LangSwitcher.doRedirect = function(destination) {
        if (destination) {
            window.location.href = destination;
        }
    };

    /**
     * Initialize footer lang switcher.
     * @param {function} Custom callback for analytics.
     */
    LangSwitcher.init = function(callback) {
        var language = document.querySelectorAll('.mzp-js-language-switcher-select');

        for (var i = 0; i < language.length; i++) {
            language[i].setAttribute('data-previous-language', language[i].value);

            language[i].addEventListener('change', function(e) {
                var newLanguage = e.target.value;
                var previousLanguage = e.target.getAttribute('data-previous-language');

                // support custom callback for page analytics.
                if (typeof callback === 'function') {
                    callback(previousLanguage, newLanguage);
                }

                LangSwitcher.doRedirect(LangSwitcher.switchPath(window.location, newLanguage));
            }, false);
        }

    };

    window.Mzp.LangSwitcher = LangSwitcher;

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Initialize Protocol language switcher.
 */
(function() {
    'use strict';

    if (typeof Mzp === 'undefined' || typeof Mzp.LangSwitcher === 'undefined') {
        return;
    }

    Mzp.LangSwitcher.init(function(previousLanguage, newLanguage) {
        window.dataLayer.push({
            'event': 'change-language',
            'languageSelected': newLanguage,
            'previousLanguage': previousLanguage
        });
    });
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function(doc, Mzp) {
    'use strict';

    var Details = {};
    var _count = 0;

    Details.isSupported = function() {
        if (typeof Mzp.Supports !== 'undefined' && typeof Mzp.Utils !== 'undefined') {
            return Mzp.Supports.classList;
        } else {
            return false;
        }
    };

    /**
     * open
     * @param {String} id - id of the container to open
     * @param {Object} options - configurable options
     */
    Details.open = function(id, options) {
        var control = doc.querySelector('[aria-controls=' + id + ']');
        var details = doc.getElementById(id);
        control.setAttribute('aria-expanded', true);
        details.setAttribute('aria-hidden', false);
        details.classList.remove('is-closed');
        if (typeof options.onDetailsOpen === 'function') {
            options.onDetailsOpen(details);
        }
    };

    /**
     * close
     * @param {String} id - id of the container to close
     * @param {Object} options - configurable options
     */
    Details.close = function(id, options) {
        var control = doc.querySelector('[aria-controls=' + id + ']');
        var details = doc.getElementById(id);
        control.setAttribute('aria-expanded', false);
        details.setAttribute('aria-hidden', true);
        details.classList.add('is-closed');
        if (typeof options.onDetailsClose === 'function') {
            options.onDetailsClose(details);
        }
    };

    /**
     * toggle
     * @param {String} id - id of the container to toggle
     * @param {Object} options - configurable options
     */
    Details.toggle = function(id, options) {
        var details = doc.getElementById(id);
        var isClosed = details.getAttribute('aria-hidden');

        if (isClosed === 'true') {
            Details.open(id, options);
        } else {
            Details.close(id, options);
        }
    };

    /**
     * handleControlActivation
     * @param {Event} e - event to handle
     * @param {Object} options - configurable options
     */
    Details.handleControlActivation = function(e, options) {
        var control = e.target;
        var id = control.getAttribute('aria-controls');
        Details.toggle(id, options);
    };

    /**
     * initItem
     * @param {Object} el - Element to place the control inside of
     * @param {String} selector - Selector for all control wrappers
     * - assumes every sibling until the next control is associated with the control
     * @param {Object} options - configurable options
     */
    Details.initItem = function(el, selector, options) {
        var summary = el;
        var control = doc.createElement('button');
        var details;
        var parent = summary.parentNode;
        var summarySiblings;

        // if it's already been initalized, don't do it again
        if (summary.querySelectorAll('button').length !== 0) {
            return;
        }

        // Expand
        // siblings of the summary, until next summary
        summarySiblings = Mzp.Utils.nextUntil(summary, selector);

        // look to see if all children are already in a wrapper we can use
        if (summarySiblings.length === 1) {
            details = summarySiblings[0];
        } else if (summarySiblings.length > 1){
            details = doc.createElement('div');
            summarySiblings.forEach(function(sibling) {
                details.appendChild(sibling);
            });
            summary.parentNode.insertBefore(details, summary.nextSibling);
        } else {
            // no children were found, something is probably wrong, let's stop here
            return;
        }

        // add class to parent to indicate js initialized
        parent.classList.add('is-details');

        // add class to content wrapper
        details.classList.add('mzp-js-details-wrapper');

        // look for existing ID to use
        if(!details.id) {
            // if details already has ID, use that, if not assign one using the selector minus all not-letters
            var unique = selector.replace(/[^a-zA-Z]+/g, '');
            details.id = 'expand-' + unique + '-'+ _count;
            _count += 1;
        }

        // close by default
        // TODO: add support for open attribute
        details.setAttribute('aria-hidden', true);
        details.classList.add('is-closed');

        // Control
        control.setAttribute('type', 'button');
        // add aria-controls
        control.setAttribute('aria-controls', details.id);
        // add aria-expanded
        control.setAttribute('aria-expanded', false);
        // add listener
        control.addEventListener('click', function(e) {
            Details.handleControlActivation(e, options);
        }, false);
        // copy the summary's contents into the control
        var summaryChildren = Array.prototype.slice.call(summary.childNodes);
        summaryChildren.forEach(function(child) {
            control.appendChild(child);
        });
        // append control element
        summary.appendChild(control);
        summary.classList.add('is-summary');
    };

    /**
     * destroyItem
     * @param {Object} el - Element the control was placed inside of
     * - does not attempt to remove the details wrapper
     */
    Details.destroyItem = function(el) {
        var summary = el;
        var parent = summary.parentNode;
        var details = summary.nextElementSibling;
        var control = summary.querySelector('button');

        // if it's already been destroyed, don't do it again
        if (summary.querySelectorAll('button').length === 0) {
            return;
        }

        parent.classList.remove('is-details');
        details.removeAttribute('aria-hidden');
        details.classList.remove('is-closed');
        // move control's contents back to summary
        var controlChildren = Array.prototype.slice.call(control.childNodes);
        controlChildren.forEach(function(child) {
            summary.appendChild(child);
        });
        summary.removeChild(control);
        summary.classList.remove('is-summary');
    };

    /**
     * Init
     * @param {Object} selector - CSS selector matching "summary" elements
     * @param {Object} options - configurable options
         - passed in to the init function and passed around from there
         example:
         var testOptions = {
             onDetailsOpen : myDetailsOpenCallback(),
             onDetailsClose : function(){ //anonymous callback }
         };
     */
    Details.init = function(selector, options) {
        if (!Details.isSupported()) {
            return;
        }
        if (typeof options === 'undefined') {
            options = {};
        }

        var summaries = doc.querySelectorAll(selector);
        // loop through controls on the page and init them one at a time
        for (var i = 0; i < summaries.length; i++) {
            Details.initItem(summaries[i], selector, options);
        }
    };

    /**
     * Destroy
     * @param {Object} selector - CSS selector matching "summary" elements
     * @param {Object} options - configurable options
     */
    Details.destroy = function(selector, options) {
        var summaries = doc.querySelectorAll(selector, options);
        // loop through controls on the page and destroy them one at a time
        for (var i = 0; i < summaries.length; i++) {
            Details.destroyItem(summaries[i], selector, options);
        }
    };

    // check if details is supported, if not, init this as a polyfill
    if (typeof Mzp.Supports !== 'undefined') {
        // not supported, add support
        if(!Mzp.Supports.details) {
            Details.init('summary');
        }
    }

    // init generic class indicating headings should be made into open/close componenet
    Details.init('.mzp-c-details > h2');
    Details.init('.mzp-c-details > h3');
    Details.init('.mzp-c-details > h4');
    Details.init('.mzp-c-details > h5');
    Details.init('.mzp-c-details > h6');

    Mzp.Details = Details;

})(document, window.Mzp);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // check we have global variable
    if (typeof window.Mzp !== 'undefined') {
        var Mzp = window.Mzp;
        var footerHeadings = '.mzp-c-footer-sections .mzp-c-footer-heading';

        // check we have global Supports and Details library
        if (typeof Mzp.Supports !== 'undefined' && typeof Mzp.Details !== 'undefined') {

            // check browser supports matchMedia
            if(Mzp.Supports.matchMedia) {
                var _mqWide = matchMedia('(max-width: 479px)');

                // initialize details if screen is small
                if (_mqWide.matches) {
                    Mzp.Details.init(footerHeadings);
                }

                // remove details if screen is big
                _mqWide.addListener(function(mq) {
                    if (mq.matches) {
                        Mzp.Details.init(footerHeadings);
                    } else {
                        Mzp.Details.destroy(footerHeadings);
                    }
                });
            }
        }
    }
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * General DOM ready handler applied to all pages in base template.
 */
(function($) {
    'use strict';

    // page must be loaded and ready before onWindowLoad fires
    var loaded = false;
    var ready = false;

    function onWindowLoad() {
        $('html').addClass('loaded');
    }

    $(document).ready(function() {

        var client = Mozilla.Client;
        var utils = Mozilla.Utils;

        utils.initMobileDownloadLinks();

        /* Bug 1264843: In partner distribution of desktop Firefox, switch the
        downloads to corresponding partner build of Firefox for Android. */
        if (client.isFirefoxDesktop) {
            client.getFirefoxDetails(utils.maybeSwitchToDistDownloadLinks);
        }

        // if window.load happened already, fire onWindowLoad
        if (loaded) {
            onWindowLoad();
        }

        // note that document.ready happened to inform window.load
        ready = true;
    });

    $(window).on('load', function () {
        // if document.ready happened already, fire onWindowLoad
        if (ready) {
            onWindowLoad();
        }

        // note that window.load happened in case document.ready hasn't
        // finished yet
        loaded = true;
    });
})(window.jQuery);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
* Utility class for core dataLayer object to track contextual user and page data
*/

if (typeof window.Mozilla.Analytics === 'undefined') {
    window.Mozilla.Analytics = {};
}

(function() {
    'use strict';

    var analytics = Mozilla.Analytics;
    var isModernBrowser = 'querySelector' in document && 'querySelectorAll' in document;

    /** Returns whether page has download button.
    * @param {String} path - URL path name fallback if page ID does not exist.
    * @return {String} string.
    */
    analytics.pageHasDownload = function() {
        if (!isModernBrowser) {
            return 'false';
        }
        return document.querySelector('[data-download-os]') !== null ? 'true' : 'false';
    };

    /** Returns whether page has video.
    * @param {String} path - URL path name fallback if page ID does not exist.
    * @return {String} string.
    */
    analytics.pageHasVideo = function() {
        if (!isModernBrowser) {
            return 'false';
        }
        return (document.querySelector('video') !== null || document.querySelector('iframe[src^="https://www.youtube"]') !== null) ? 'true' : 'false';
    };

    /** Returns page version.
    * @param {String} path - URL path name fallback if page ID does not exist.
    * @return {String} version number from URL.
    */
    analytics.getPageVersion = function(path) {
        var pathName = path ? path : document.location.pathname;
        var versionResults = /firefox\/(\d+(?:\.\d+)?\.\da?\d?)/.exec(pathName);

        return versionResults ? versionResults[1] : null;
    };

    /** Returns latest Fx version.
    * @return {String} latest Fx version.
    */
    analytics.getLatestFxVersion = function() {
        return document.getElementsByTagName('html')[0].getAttribute('data-latest-firefox');
    };

    /** Returns true if user is running Windows 10 in S mode.
    * @param {String} ua - User Agent string.
    * @return {Boolean}.
    */
    analytics.isWin10S = function(ua) {
        ua = ua || navigator.userAgent;

        var isEdge = ua.indexOf('Edge') > -1;

        if (!isEdge) {
            return false;
        }

        try {
            var mode = JSON.parse(window.external.getHostEnvironmentValue('os-mode'));
            if (mode && mode['os-mode'] === '2') {
                return true;
            }
            return false;
        } catch(e) {
            return false;
        }
    };

    /** Returns an object containing GA-formatted FxA details
    * The specs for this are a combination of:
    * - https://bugzilla.mozilla.org/show_bug.cgi?id=1457024#c33
    * - https://bugzilla.mozilla.org/show_bug.cgi?id=1457004#c22
    * Our implmentation it might deviate from the spec where there was conflicting info in the spec.
    *
    * Data arrives from Client.getFxaDetails as an object, see getFxaDetails for details.
    *
    * @param {Object} FxaDetails - object of FxA details returned by getFxaDetails
    * @return {Object} FxA details formatted for GA
    */
    analytics.formatFxaDetails = function(FxaDetails) {
        // start with empty object
        var formatted = {};

        if (FxaDetails.firefox === true) {
            // only add FxA account details if this is Fx, otherwise their segment is just 'Not Firefox'
            if (FxaDetails.mobile) {
                // Firefox Mobile
                formatted.FxASegment = 'Firefox Mobile';
            } else {
                // Firefox Desktop
                if (FxaDetails.setup) {
                    // set FxALogin
                    formatted.FxALogin = true;
                    // set FxASegment with default value, to be refined
                    formatted.FxASegment = 'Logged in';
                    // Change FxASegment to Legacy if this is an old browser
                    if (FxaDetails.legacy === true) {
                        formatted.FxASegment = 'Legacy Firefox';
                    }

                    // variables to compare to determine the segments
                    var mobileSync = false;
                    var desktopSync = false;
                    var desktopMultiSync = false;

                    // set FxAMobileSync
                    if (FxaDetails.mobileDevices > 0) {
                        formatted.FxAMobileSync = true;
                        mobileSync = true;
                    } else if (FxaDetails.mobileDevices === 0) {
                        formatted.FxAMobileSync = false;
                    } else {
                        formatted.FxAMobileSync = 'unknown';
                    }

                    // set FxAMultiDesktopSync
                    if (FxaDetails.desktopDevices > 1) {
                        formatted.FxAMultiDesktopSync = true;
                        desktopMultiSync = true;
                    } else if (FxaDetails.desktopDevices === 1) {
                        formatted.FxAMultiDesktopSync = false;
                        desktopSync = true;
                    } else if (FxaDetails.desktopDevices === 0){
                        formatted.FxAMultiDesktopSync = false;
                    } else {
                        formatted.FxAMultiDesktopSync = 'unknown';
                    }

                    // refine FxASegment based on device syncing
                    if (desktopMultiSync && mobileSync) {
                        formatted.FxASegment = 'Multi-Desktop and Mobile Sync';
                    } else if (desktopSync && mobileSync) {
                        formatted.FxASegment = 'Desktop and Mobile Sync';
                    } else if (desktopMultiSync) {
                        formatted.FxASegment = 'Multi-Desktop Sync';
                    }

                } else {
                    // Not logged into FxA
                    if (FxaDetails.legacy === true) {
                        // too old to support UITour or FxA, or pre FxASegment and logged out
                        formatted.FxASegment = 'Legacy Firefox';
                        formatted.FxALogin = 'unknown';
                    } else {
                        // not too old, just logged out
                        formatted.FxASegment = 'Not logged in';
                        formatted.FxALogin = false;
                    }
                }
            }
        } else {
            formatted.FxASegment = 'Not Firefox';
        }
        return formatted;
    };

    /** Monkey patch for dataLayer.push
    *   Adds href stripped of locale to link click objects when pushed to the dataLayer,
    *   also removes protocol and host if same as parent page from href.
    */
    analytics.updateDataLayerPush = function(host) {
        var dataLayer = window.dataLayer = window.dataLayer || [];
        var hostname = host || document.location.hostname;

        dataLayer.defaultPush = dataLayer.push;
        dataLayer.push = function() {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i].event === 'gtm.linkClick') {
                    var element = arguments[i]['gtm.element'];
                    var href = element.href;

                    if (element.hostname === hostname) {
                        // remove host and locale from internal links
                        var path = href.replace(/^(?:https?:\/\/)(?:[^/])*/, '');
                        var locale = path.match(/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/);

                        path = locale ? path.replace(locale[0], '/') : path;
                        arguments[i].newClickHref = path;
                    } else {
                        arguments[i].newClickHref = href;
                    }

                    dataLayer.defaultPush(arguments[i]);
                } else {
                    dataLayer.defaultPush(arguments[i]);
                }
            }
        };
    };

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// init core dataLayer object and push into dataLayer
$(function() {
    'use strict';

    var analytics = Mozilla.Analytics;
    var client = Mozilla.Client;
    var dataLayer = window.dataLayer = window.dataLayer || [];
    var firefoxDetailsComplete = false;
    var fxaDetailsComplete = false;

    function sendCoreDataLayer() {
        var dataLayerCore = {
            'event': 'core-datalayer-loaded',
            'pageHasDownload': analytics.pageHasDownload(),
            'pageHasVideo': analytics.pageHasVideo(),
            'pageVersion': analytics.getPageVersion(),
            // white listed for www.mozill.org, will always return false on other domains
            'testPilotUser': 'testpilotAddon' in navigator ? 'true' : 'false',
            'releaseWindowVersion': analytics.getLatestFxVersion(),
            'win10SUser': analytics.isWin10S()
        };

        dataLayer.push(dataLayerCore);
    }

    function checkSendCoreDataLayer() {
        if (firefoxDetailsComplete && fxaDetailsComplete) {
            sendCoreDataLayer();
        }
    }

    client.getFxaDetails(function(details) {
        dataLayer.push(analytics.formatFxaDetails(details));
        fxaDetailsComplete = true;
        checkSendCoreDataLayer();
    });

    if (client.isFirefoxDesktop || client.isFirefoxAndroid) {
        client.getFirefoxDetails(function(details) {
            dataLayer.push(details);
            firefoxDetailsComplete = true;
            checkSendCoreDataLayer();
        });
    } else {
        firefoxDetailsComplete = true;
        checkSendCoreDataLayer();
    }

    analytics.updateDataLayerPush();
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // Retrieve search params as a object for easier access
    // This is a simple version of https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    var _SearchParams = function (search) {
        search = search || location.search || '';

        this.params = _SearchParams.queryStringToObject(search);
    };

    // takes an object of key/value pairs and converts it to a querystring, e.g.
    // key1=val1&key2=val2&key3=val3 etc
    _SearchParams.objectToQueryString = function (obj) {
        var searchStrings = [];

        for (var param in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, param)) {
                searchStrings.push([encodeURIComponent(param), encodeURIComponent(obj[param])].join('='));
            }
        }

        return searchStrings.join('&');
    };

    // takes a querystring and converts it to an object of key/value pairs
    _SearchParams.queryStringToObject = function (qs) {
        var params = {};
        qs = qs.match(/^\??(.*)/)[1];
        qs = qs ? qs.split(/[&;]/m) : [];

        for (var i = 0; i < qs.length; i++) {
            var param = qs[i].split('=');

            var key = param[0];
            var value = param[1];

            params[key] = !isNaN(value) ? parseFloat(value) : value;
        }

        return params;
    };

    _SearchParams.prototype.get = function (key) {
        return this.params[key];
    };

    _SearchParams.prototype.set = function (key, value) {
        this.params[key] = !isNaN(value) ? parseFloat(value) : value;
    };

    _SearchParams.prototype.has = function (key) {
        return key in this.params;
    };

    _SearchParams.prototype.remove = function (key) {
        delete this.params[key];
    };

    _SearchParams.prototype.toString = function () {
        return _SearchParams.objectToQueryString(this.params);
    };

    _SearchParams.prototype.utmParams = function() {
        var utms = {};
        var params = this.params;

        for (var param in params){
            if (Object.prototype.hasOwnProperty.call(params, param)) {
                if (param.indexOf('utm_') === 0) {
                    utms[param] = params[param];
                }
            }
        }

        return utms;
    };

    _SearchParams.prototype.utmParamsFxA = function(pathname) {
        pathname = pathname || window.location.pathname || '';

        var utms = this.utmParams();

        /* eslint-disable camelcase */

        // set to default value if not specified in URL
        if (!utms.utm_campaign) {
            // utm_* values will be encoded on the product side, so no need to
            // pre-emptively encode here
            utms.utm_campaign = 'page referral - not part of a campaign';
        }

        // remove locale from pathname and store result in utm_content
        // e.g. https://www.mozilla.org/it/firefox/sync/?foo=bar should
        // have utm_content value of /firefox/sync/.
        var matches = pathname.match(/\/[\w-]+(\/.*)$/);

        if (matches && matches.length > 1) {
            // no need to encode - will be done on product side
            utms.utm_content = matches[1];
        }

        /* eslint-enable camelcase */

        // ensure all values are strings, as no numeric values are allowed
        // into UITour.showFirefoxAccounts
        Object.keys(utms).forEach(function(key) {
            utms[key] = utms[key].toString();
        });

        return utms;
    };

    window._SearchParams = _SearchParams;

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // Remove a given paramater from a URL query string
    // Taken from https://stackoverflow.com/questions/16941104/remove-a-parameter-to-the-url-with-javascript
    function removeParam(key, sourceURL) {
        var rtn = sourceURL.split('?')[0];
        var param;
        var paramsArray = [];
        var queryString = (sourceURL.indexOf('?') !== -1) ? sourceURL.split('?')[1] : '';

        if (queryString !== '') {
            paramsArray = queryString.split('&');
            for (var i = paramsArray.length - 1; i >= 0; i -= 1) {
                param = paramsArray[i].split('=')[0];
                if (param === key) {
                    paramsArray.splice(i, 1);
                }
            }
            rtn = rtn + '?' + paramsArray.join('&');
        }
        return rtn;
    }

    // Sync is Firefox only so remove the Sync params for non-Firefoxes
    if (!Mozilla.Client.isFirefox) {
        var fxaSigninLink = document.querySelectorAll('.fxa-signin > a');
        var fxaSigninURI;
        var revisedFxaSigninURI;
        var finalFxaSigninURI;

        for (var i = 0; i < fxaSigninLink.length; i++) {
            fxaSigninURI = fxaSigninLink[i].href;

            // First remove the context param
            revisedFxaSigninURI = removeParam('context', fxaSigninURI);

            // Then remove the service param
            finalFxaSigninURI = removeParam('service', revisedFxaSigninURI);

            // Set the link
            fxaSigninLink[i].href = finalFxaSigninURI;
        }
    }
})();


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

(function () {
    'use strict';

    var UtmUrl = {};

    var whitelist = [
        'https://accounts.firefox.com/',
        'https://monitor.firefox.com/',
        'https://getpocket.com/',
        'https://latest.dev.lcip.org/'
    ];

    /**
     * Returns the hostname for a given URL.
     * @param {String} url.
     * @returns {String} hostname.
     */
    UtmUrl.getHostName = function(url) {
        var matches = url.match(/^https?:\/\/(?:[^/?#]+)(?:[/?#]|$)/i);
        return matches && matches[0];
    };

    /**
     * Fetch and validate utm params from the page URL for FxA referral.
     * https://mozilla.github.io/application-services/docs/accounts/metrics.html#descriptions-of-metrics-related-query-parameters
     * @returns {Object} if both utm_source and utm_campaign are valid, else {null}.
     */
    UtmUrl.getAttributionData = function (params) {
        var allowedChars = /^[\w/.%-]+$/;
        var finalParams = {};
        var utms = ['utm_source', 'utm_campaign', 'utm_content', 'utm_term', 'utm_medium'];

        for (var i = 0; i < utms.length; i++) {
            var utm = utms[i];
            if (Object.prototype.hasOwnProperty.call(params, utm)) {
                var param = decodeURIComponent(params[utm]);
                if ((allowedChars).test(param)) {
                    finalParams[utm] = param;
                }
            }
        }

        // Both utm_source and utm_campaign are considered required, so only pass on referral data if they exist.
        if (Object.prototype.hasOwnProperty.call(finalParams, 'utm_source') && Object.prototype.hasOwnProperty.call(finalParams, 'utm_campaign')) {
            return finalParams;
        }

        return null;
    };

    /**
     * Append an object of UTM parameters to a given URL.
     * Object parameters will erase all existing UTM parameters, whether present or not.
     * @param {String} URL to append parameters to.
     * @param {Object} data object consisting of one or more parameters.
     * @returns {String} URL containing updated parameters.
     */
    UtmUrl.appendToDownloadURL = function (url, data) {
        var finalParams;
        var linkParams;

        if (url.indexOf('?') > 0) {
            linkParams = window._SearchParams.queryStringToObject(url.split('?')[1]);

            // If the URL query string has existing UTM parameters then remove them,
            // as we don't want to muddle data from different campaign sources.
            var utms = ['utm_source', 'utm_campaign', 'utm_content', 'utm_term', 'utm_medium'];
            for (var i = 0; i < utms.length; i++) {
                var utm = utms[i];
                if (Object.prototype.hasOwnProperty.call(linkParams, utm)) {
                    delete linkParams[utm];
                }
            }

            finalParams = Object.assign(linkParams, data);
        } else {
            finalParams = data;
        }

        return url.split('?')[0] + '?' + window._SearchParams.objectToQueryString(finalParams);
    };

    /**
     * If there are valid utm params on the page URL, query the
     * DOM and update Firefox Account links with the new utm data
     */
    UtmUrl.init = function (urlParams) {
        var params = UtmUrl.getAttributionData(urlParams);
        var ctaLinks = document.getElementsByClassName('js-fxa-cta-link');

        // If there are no utm params on the page, do nothing.
        if (!params) {
            return;
        }

        // feature detect support for object modification.
        if (typeof Object.assign !== 'function') {
            return;
        }

        for (var i = 0; i < ctaLinks.length; i++) {
            // get the link off the element
            var oldAccountsLink =  ctaLinks[i].hasAttribute('href') ? ctaLinks[i].href : null ;

            if (oldAccountsLink) {
                var hostName = UtmUrl.getHostName(oldAccountsLink);
                // check if link is in the FxA referral whitelist.
                if (hostName && whitelist.indexOf(hostName) !== -1) {
                    // get the China repack link, so that can be updated too
                    var oldMozillaOnlineLink = ctaLinks[i].getAttribute('data-mozillaonline-link');

                    // append our new UTM param data to create new FxA links.
                    var newAccountsLink = UtmUrl.appendToDownloadURL(oldAccountsLink, params);

                    // set the FxA button to use the new link.
                    ctaLinks[i].href = newAccountsLink;

                    // also handle mozilla-online links for FxA China Repack.
                    if (oldMozillaOnlineLink) {
                        var newMozillaOnlineLink = UtmUrl.appendToDownloadURL(oldMozillaOnlineLink, params);
                        ctaLinks[i].setAttribute('data-mozillaonline-link', newMozillaOnlineLink);
                    }
                }
            }
        }
    };

    window.Mozilla.UtmUrl = UtmUrl;
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function () {
    'use strict';

    var urlParams = new window._SearchParams().utmParams();

    // Track external UTM referrals for Firefox Accounts related CTAs.
    Mozilla.UtmUrl.init(urlParams);
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2xpYnMvanF1ZXJ5LTMuNC4xLm1pbi5qcyIsImpzL2xpYnMvc3Bpbi5taW4uanMiLCJqcy9iYXNlL21vemlsbGEtdXRpbHMuanMiLCJqcy9uZXdzbGV0dGVyL2Zvcm0uanMiLCJqcy9iYXNlL21vemlsbGEtY2xpZW50LmpzIiwianMvYmFzZS9jbGFzcy1saXN0LXBvbHlmaWxsLmpzIiwianMvYmFzZS9tb3ppbGxhLXJ1bi5qcyIsInByb3RvY29sL2pzL3Byb3RvY29sLXN1cHBvcnRzLmpzIiwicHJvdG9jb2wvanMvcHJvdG9jb2wtdXRpbHMuanMiLCJwcm90b2NvbC9qcy9wcm90b2NvbC1tZW51LmpzIiwicHJvdG9jb2wvanMvcHJvdG9jb2wtbmF2aWdhdGlvbi5qcyIsImpzL2Jhc2UvcHJvdG9jb2wvaW5pdC1uYXZpZ2F0aW9uLmpzIiwicHJvdG9jb2wvanMvcHJvdG9jb2wtbGFuZy1zd2l0Y2hlci5qcyIsImpzL2Jhc2UvcHJvdG9jb2wvaW5pdC1sYW5nLXN3aXRjaGVyLmpzIiwicHJvdG9jb2wvanMvcHJvdG9jb2wtZGV0YWlscy5qcyIsInByb3RvY29sL2pzL3Byb3RvY29sLWZvb3Rlci5qcyIsImpzL2Jhc2UvYmFzZS1wYWdlLWluaXQuanMiLCJqcy9iYXNlL2NvcmUtZGF0YWxheWVyLmpzIiwianMvYmFzZS9jb3JlLWRhdGFsYXllci1pbml0LmpzIiwianMvYmFzZS9zZWFyY2gtcGFyYW1zLmpzIiwianMvYmFzZS9tb3ppbGxhLWZ4YS1zaWduLWluLWxpbmsuanMiLCJqcy9iYXNlL2Z4YS11dG0tcmVmZXJyYWwuanMiLCJqcy9iYXNlL2Z4YS11dG0tcmVmZXJyYWwtaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL0JVTkRMRVMvY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2My40LjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIHQoZSl9OnQoZSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oQyxlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxFPUMuZG9jdW1lbnQscj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yscz10LnNsaWNlLGc9dC5jb25jYXQsdT10LnB1c2gsaT10LmluZGV4T2Ysbj17fSxvPW4udG9TdHJpbmcsdj1uLmhhc093blByb3BlcnR5LGE9di50b1N0cmluZyxsPWEuY2FsbChPYmplY3QpLHk9e30sbT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcIm51bWJlclwiIT10eXBlb2YgZS5ub2RlVHlwZX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxjPXt0eXBlOiEwLHNyYzohMCxub25jZTohMCxub01vZHVsZTohMH07ZnVuY3Rpb24gYihlLHQsbil7dmFyIHIsaSxvPShuPW58fEUpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoby50ZXh0PWUsdClmb3IociBpbiBjKShpPXRbcl18fHQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShyKSkmJm8uc2V0QXR0cmlidXRlKHIsaSk7bi5oZWFkLmFwcGVuZENoaWxkKG8pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyl9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bltvLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfXZhciBmPVwiMy40LjFcIixrPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBrLmZuLmluaXQoZSx0KX0scD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7ZnVuY3Rpb24gZChlKXt2YXIgdD0hIWUmJlwibGVuZ3RoXCJpbiBlJiZlLmxlbmd0aCxuPXcoZSk7cmV0dXJuIW0oZSkmJiF4KGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiYwPHQmJnQtMSBpbiBlKX1rLmZuPWsucHJvdG90eXBlPXtqcXVlcnk6Zixjb25zdHJ1Y3RvcjprLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gcy5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/cy5jYWxsKHRoaXMpOmU8MD90aGlzW2UrdGhpcy5sZW5ndGhdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD1rLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdH0sZWFjaDpmdW5jdGlvbihlKXtyZXR1cm4gay5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soay5tYXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiBuLmNhbGwoZSx0LGUpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhzLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjaygwPD1uJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOnUsc29ydDp0LnNvcnQsc3BsaWNlOnQuc3BsaWNlfSxrLmV4dGVuZD1rLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixyLGksbyxhPWFyZ3VtZW50c1swXXx8e30scz0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksXCJvYmplY3RcIj09dHlwZW9mIGF8fG0oYSl8fChhPXt9KSxzPT09dSYmKGE9dGhpcyxzLS0pO3M8dTtzKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW3NdKSlmb3IodCBpbiBlKXI9ZVt0XSxcIl9fcHJvdG9fX1wiIT09dCYmYSE9PXImJihsJiZyJiYoay5pc1BsYWluT2JqZWN0KHIpfHwoaT1BcnJheS5pc0FycmF5KHIpKSk/KG49YVt0XSxvPWkmJiFBcnJheS5pc0FycmF5KG4pP1tdOml8fGsuaXNQbGFpbk9iamVjdChuKT9uOnt9LGk9ITEsYVt0XT1rLmV4dGVuZChsLG8scikpOnZvaWQgMCE9PXImJihhW3RdPXIpKTtyZXR1cm4gYX0say5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoZitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1vLmNhbGwoZSkpJiYoISh0PXIoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZhLmNhbGwobik9PT1sKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUsdCl7YihlLHtub25jZTp0JiZ0Lm5vbmNlfSl9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYoZChlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UocCxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihkKE9iamVjdChlKSk/ay5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYoZChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZy5hcHBseShbXSxhKX0sZ3VpZDoxLHN1cHBvcnQ6eX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKGsuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLGsuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bltcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7dmFyIGg9ZnVuY3Rpb24obil7dmFyIGUsZCxiLG8saSxoLGYsZyx3LHUsbCxULEMsYSxFLHYscyxjLHksaz1cInNpenpsZVwiKzEqbmV3IERhdGUsbT1uLmRvY3VtZW50LFM9MCxyPTAscD11ZSgpLHg9dWUoKSxOPXVlKCksQT11ZSgpLEQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihsPSEwKSwwfSxqPXt9Lmhhc093blByb3BlcnR5LHQ9W10scT10LnBvcCxMPXQucHVzaCxIPXQucHVzaCxPPXQuc2xpY2UsUD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsVz1cIlxcXFxbXCIrTStcIiooXCIrSStcIikoPzpcIitNK1wiKihbKl4kfCF+XT89KVwiK00rXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitJK1wiKSl8KVwiK00rXCIqXFxcXF1cIiwkPVwiOihcIitJK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitXK1wiKSopfC4qKVxcXFwpfClcIixGPW5ldyBSZWdFeHAoTStcIitcIixcImdcIiksQj1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxfPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksej1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksVT1uZXcgUmVnRXhwKE0rXCJ8PlwiKSxYPW5ldyBSZWdFeHAoJCksVj1uZXcgUmVnRXhwKFwiXlwiK0krXCIkXCIpLEc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitJK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0krXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitJK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1cpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiKyQpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitSK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vSFRNTCQvaSxRPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksSj0vXmhcXGQkL2ksSz0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sZWU9L1srfl0vLHRlPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitNK1wiP3woXCIrTStcIil8LilcIixcImlnXCIpLG5lPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1cIjB4XCIrdC02NTUzNjtyZXR1cm4gciE9cnx8bj90OnI8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKHIrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTB8NTUyOTYsMTAyMyZyfDU2MzIwKX0scmU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csaWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sb2U9ZnVuY3Rpb24oKXtUKCl9LGFlPWJlKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmXCJmaWVsZHNldFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtILmFwcGx5KHQ9Ty5jYWxsKG0uY2hpbGROb2RlcyksbS5jaGlsZE5vZGVzKSx0W20uY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGUpe0g9e2FwcGx5OnQubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7TC5hcHBseShlLE8uY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5sZW5ndGgscj0wO3doaWxlKGVbbisrXT10W3IrK10pO2UubGVuZ3RoPW4tMX19fWZ1bmN0aW9uIHNlKHQsZSxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGY9ZSYmZS5vd25lckRvY3VtZW50LHA9ZT9lLm5vZGVUeXBlOjk7aWYobj1ufHxbXSxcInN0cmluZ1wiIT10eXBlb2YgdHx8IXR8fDEhPT1wJiY5IT09cCYmMTEhPT1wKXJldHVybiBuO2lmKCFyJiYoKGU/ZS5vd25lckRvY3VtZW50fHxlOm0pIT09QyYmVChlKSxlPWV8fEMsRSkpe2lmKDExIT09cCYmKHU9Wi5leGVjKHQpKSlpZihpPXVbMV0pe2lmKDk9PT1wKXtpZighKGE9ZS5nZXRFbGVtZW50QnlJZChpKSkpcmV0dXJuIG47aWYoYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2UgaWYoZiYmKGE9Zi5nZXRFbGVtZW50QnlJZChpKSkmJnkoZSxhKSYmYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2V7aWYodVsyXSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLG47aWYoKGk9dVszXSkmJmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSxufWlmKGQucXNhJiYhQVt0K1wiIFwiXSYmKCF2fHwhdi50ZXN0KHQpKSYmKDEhPT1wfHxcIm9iamVjdFwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7aWYoYz10LGY9ZSwxPT09cCYmVS50ZXN0KHQpKXsocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9ayksbz0obD1oKHQpKS5sZW5ndGg7d2hpbGUoby0tKWxbb109XCIjXCIrcytcIiBcIit4ZShsW29dKTtjPWwuam9pbihcIixcIiksZj1lZS50ZXN0KHQpJiZ5ZShlLnBhcmVudE5vZGUpfHxlfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtBKHQsITApfWZpbmFsbHl7cz09PWsmJmUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gZyh0LnJlcGxhY2UoQixcIiQxXCIpLGUsbixyKX1mdW5jdGlvbiB1ZSgpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKHQsbil7cmV0dXJuIHIucHVzaCh0K1wiIFwiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCtcIiBcIl09bn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIGVba109ITAsZX1mdW5jdGlvbiBjZShlKXt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBmZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB2ZShhKXtyZXR1cm4gbGUoZnVuY3Rpb24obyl7cmV0dXJuIG89K28sbGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPXJbaV1dJiYoZVtuXT0hKHRbbl09ZVtuXSkpfSl9KX1mdW5jdGlvbiB5ZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9Zm9yKGUgaW4gZD1zZS5zdXBwb3J0PXt9LGk9c2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5uYW1lc3BhY2VVUkksbj0oZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIVkudGVzdCh0fHxuJiZuLm5vZGVOYW1lfHxcIkhUTUxcIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOm07cmV0dXJuIHIhPT1DJiY5PT09ci5ub2RlVHlwZSYmci5kb2N1bWVudEVsZW1lbnQmJihhPShDPXIpLmRvY3VtZW50RWxlbWVudCxFPSFpKEMpLG0hPT1DJiYobj1DLmRlZmF1bHRWaWV3KSYmbi50b3AhPT1uJiYobi5hZGRFdmVudExpc3RlbmVyP24uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLG9lLCExKTpuLmF0dGFjaEV2ZW50JiZuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixvZSkpLGQuYXR0cmlidXRlcz1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksZC5nZXRFbGVtZW50c0J5VGFnTmFtZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChDLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Sy50ZXN0KEMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksZC5nZXRCeUlkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmlkPWssIUMuZ2V0RWxlbWVudHNCeU5hbWV8fCFDLmdldEVsZW1lbnRzQnlOYW1lKGspLmxlbmd0aH0pLGQuZ2V0QnlJZD8oYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgbj1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGIuZmluZC5UQUc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6ZC5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxiLmZpbmQuQ0xBU1M9ZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJkUpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx2PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZShmdW5jdGlvbihlKXthLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitrK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIraytcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmdi5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitSK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK2srXCItXVwiKS5sZW5ndGh8fHYucHVzaChcIn49XCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8di5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitrK1wiKypcIikubGVuZ3RofHx2LnB1c2goXCIuIy4rWyt+XVwiKX0pLGNlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmdi5wdXNoKFwibmFtZVwiK00rXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEuYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx2LnB1c2goXCIsLio6XCIpfSkpLChkLm1hdGNoZXNTZWxlY3Rvcj1LLnRlc3QoYz1hLm1hdGNoZXN8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmNlKGZ1bmN0aW9uKGUpe2QuZGlzY29ubmVjdGVkTWF0Y2g9Yy5jYWxsKGUsXCIqXCIpLGMuY2FsbChlLFwiW3MhPScnXTp4XCIpLHMucHVzaChcIiE9XCIsJCl9KSx2PXYubGVuZ3RoJiZuZXcgUmVnRXhwKHYuam9pbihcInxcIikpLHM9cy5sZW5ndGgmJm5ldyBSZWdFeHAocy5qb2luKFwifFwiKSksdD1LLnRlc3QoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikseT10fHxLLnRlc3QoYS5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLHI9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09cnx8ISghcnx8MSE9PXIubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKHIpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxEPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBufHwoMSYobj0oZS5vd25lckRvY3VtZW50fHxlKT09PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09PUN8fGUub3duZXJEb2N1bWVudD09PW0mJnkobSxlKT8tMTp0PT09Q3x8dC5vd25lckRvY3VtZW50PT09bSYmeShtLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09PUM/LTE6dD09PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09PW0/LTE6c1tyXT09PW0/MTowfSksQ30sc2UubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBzZShlLG51bGwsbnVsbCx0KX0sc2UubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoKGUub3duZXJEb2N1bWVudHx8ZSkhPT1DJiZUKGUpLGQubWF0Y2hlc1NlbGVjdG9yJiZFJiYhQVt0K1wiIFwiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF2fHwhdi50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe0EodCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1DJiZUKGUpLHkoZSx0KX0sc2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT09QyYmVChlKTt2YXIgbj1iLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxyPW4mJmouY2FsbChiLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9uKGUsdCwhRSk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1yP3I6ZC5hdHRyaWJ1dGVzfHwhRT9lLmdldEF0dHJpYnV0ZSh0KToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9LHNlLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHJlLGllKX0sc2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KEQpLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1vKHQpO3JldHVybiBufSwoYj1zZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpsZSxtYXRjaDpHLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKHRlLG5lKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKHRlLG5lKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9aChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1wW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoRixcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHYpe3ZhciB5PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXY/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD15IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHkpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD1cIm9ubHlcIj09PWgmJiF1JiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYodT1bbT9jLmZpcnN0Q2hpbGQ6Yy5sYXN0Q2hpbGRdLG0mJnApe2Q9KHM9KHI9KGk9KG89KGE9Yylba118fChhW2tdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PVMmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO3doaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKDE9PT1hLm5vZGVUeXBlJiYrK2QmJmE9PT1lKXtpW2hdPVtTLHMsZF07YnJlYWt9fWVsc2UgaWYocCYmKGQ9cz0ocj0oaT0obz0oYT1lKVtrXXx8KGFba109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09UyYmclsxXSksITE9PT1kKXdoaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKCh4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpJiYrK2QmJihwJiYoKGk9KG89YVtrXXx8KGFba109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXT1bUyxkXSksYT09PWUpKWJyZWFrO3JldHVybihkLT12KT09PWd8fGQlZz09MCYmMDw9ZC9nfX19LFBTRVVETzpmdW5jdGlvbihlLG8pe3ZhciB0LGE9Yi5wc2V1ZG9zW2VdfHxiLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBhW2tdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLFwiXCIsb10sYi5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/bGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoZSxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249UChlLHJbaV0pXT0hKHRbbl09cltpXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKGZ1bmN0aW9uKGUpe3ZhciByPVtdLGk9W10scz1mKGUucmVwbGFjZShCLFwiJDFcIikpO3JldHVybiBzW2tdP2xlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKGk9b1thXSkmJihlW2FdPSEodFthXT1pKSl9KTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHJbMF09ZSxzKHIsbnVsbCxuLGkpLHJbMF09bnVsbCwhaS5wb3AoKX19KSxoYXM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiAwPHNlKHQsZSkubGVuZ3RofX0pLGNvbnRhaW5zOmxlKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSksbGFuZzpsZShmdW5jdGlvbihuKXtyZXR1cm4gVi50ZXN0KG58fFwiXCIpfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK24pLG49bi5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGUpe3ZhciB0O2Rve2lmKHQ9RT9lLmxhbmc6ZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rXCItXCIpfXdoaWxlKChlPWUucGFyZW50Tm9kZSkmJjE9PT1lLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6dmUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnZlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTp2ZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0OnQ8bj90Om47MDw9LS1yOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9Yi5wc2V1ZG9zLmVxLHtyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSliLnBzZXVkb3NbZV09ZGUoZSk7Zm9yKGUgaW57c3VibWl0OiEwLHJlc2V0OiEwfSliLnBzZXVkb3NbZV09aGUoZSk7ZnVuY3Rpb24gbWUoKXt9ZnVuY3Rpb24geGUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGJlKHMsZSx0KXt2YXIgdT1lLmRpcixsPWUubmV4dCxjPWx8fHUsZj10JiZcInBhcmVudE5vZGVcIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bUyxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW2tdfHwoZVtrXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PVMmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcsdix5LGUpe3JldHVybiB2JiYhdltrXSYmKHY9Q2UodikpLHkmJiF5W2tdJiYoeT1DZSh5LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8XCIqXCIsbi5ub2RlVHlwZT9bbl06bixbXSksZj0hZHx8IWUmJmg/YzpUZShjLHMsZCxuLHIpLHA9Zz95fHwoZT9kOmx8fHYpP1tdOnQ6ZjtpZihnJiZnKGYscCxuLHIpLHYpe2k9VGUocCx1KSx2KGksW10sbixyKSxvPWkubGVuZ3RoO3doaWxlKG8tLSkoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKX1pZihlKXtpZih5fHxkKXtpZih5KXtpPVtdLG89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiZpLnB1c2goZltvXT1hKTt5KG51bGwscD1bXSxpLHIpfW89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiYtMTwoaT15P1AoZSxhKTpzW29dKSYmKGVbaV09ISh0W2ldPWEpKX19ZWxzZSBwPVRlKHA9PT10P3Auc3BsaWNlKGwscC5sZW5ndGgpOnApLHk/eShudWxsLHQscCxyKTpILmFwcGx5KHQscCl9KX1mdW5jdGlvbiBFZShlKXtmb3IodmFyIGksdCxuLHI9ZS5sZW5ndGgsbz1iLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1vfHxiLnJlbGF0aXZlW1wiIFwiXSxzPW8/MTowLHU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSxhLCEwKSxsPWJlKGZ1bmN0aW9uKGUpe3JldHVybi0xPFAoaSxlKX0sYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW2tdKXtmb3Iobj0rK3M7bjxyO24rKylpZihiLnJlbGF0aXZlW2Vbbl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKEIsXCIkMVwiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2E9ZSxzPVtdLHU9Yi5wcmVGaWx0ZXI7d2hpbGUoYSl7Zm9yKG8gaW4gbiYmIShyPV8uZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSkscy5wdXNoKGk9W10pKSxuPSExLChyPXouZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoQixcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKSxiLmZpbHRlcikhKHI9R1tvXS5leGVjKGEpKXx8dVtvXSYmIShyPXVbb10ocikpfHwobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6byxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP3NlLmVycm9yKGUpOngoZSxzKS5zbGljZSgwKX0sZj1zZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4sdix5LG0seCxyLGk9W10sbz1bXSxhPU5bZStcIiBcIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPUVlKHRbbl0pKVtrXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPU4oZSwodj1vLG09MDwoeT1pKS5sZW5ndGgseD0wPHYubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9XCIwXCIsYz1lJiZbXSxmPVtdLHA9dyxkPWV8fHgmJmIuZmluZC5UQUcoXCIqXCIsaSksaD1TKz1udWxsPT1wPzE6TWF0aC5yYW5kb20oKXx8LjEsZz1kLmxlbmd0aDtmb3IoaSYmKHc9dD09PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2E9MCx0fHxvLm93bmVyRG9jdW1lbnQ9PT1DfHwoVChvKSxuPSFFKTt3aGlsZShzPXZbYSsrXSlpZihzKG8sdHx8QyxuKSl7ci5wdXNoKG8pO2JyZWFrfWkmJihTPWgpfW0mJigobz0hcyYmbykmJnUtLSxlJiZjLnB1c2gobykpfWlmKHUrPWwsbSYmbCE9PXUpe2E9MDt3aGlsZShzPXlbYSsrXSlzKGMsZix0LG4pO2lmKGUpe2lmKDA8dSl3aGlsZShsLS0pY1tsXXx8ZltsXXx8KGZbbF09cS5jYWxsKHIpKTtmPVRlKGYpfUguYXBwbHkocixmKSxpJiYhZSYmMDxmLmxlbmd0aCYmMTx1K3kubGVuZ3RoJiZzZS51bmlxdWVTb3J0KHIpfXJldHVybiBpJiYoUz1oLHc9cCksY30sbT9sZShyKTpyKSkpLnNlbGVjdG9yPWV9cmV0dXJuIGF9LGc9c2Uuc2VsZWN0PWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLGM9IXImJmgoZT1sLnNlbGVjdG9yfHxlKTtpZihuPW58fFtdLDE9PT1jLmxlbmd0aCl7aWYoMjwobz1jWzBdPWNbMF0uc2xpY2UoMCkpLmxlbmd0aCYmXCJJRFwiPT09KGE9b1swXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJkUmJmIucmVsYXRpdmVbb1sxXS50eXBlXSl7aWYoISh0PShiLmZpbmQuSUQoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLHQpfHxbXSlbMF0pKXJldHVybiBuO2wmJih0PXQucGFyZW50Tm9kZSksZT1lLnNsaWNlKG8uc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Ry5uZWVkc0NvbnRleHQudGVzdChlKT8wOm8ubGVuZ3RoO3doaWxlKGktLSl7aWYoYT1vW2ldLGIucmVsYXRpdmVbcz1hLnR5cGVdKWJyZWFrO2lmKCh1PWIuZmluZFtzXSkmJihyPXUoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLGVlLnRlc3Qob1swXS50eXBlKSYmeWUodC5wYXJlbnROb2RlKXx8dCkpKXtpZihvLnNwbGljZShpLDEpLCEoZT1yLmxlbmd0aCYmeGUobykpKXJldHVybiBILmFwcGx5KG4sciksbjticmVha319fXJldHVybihsfHxmKGUsYykpKHIsdCwhRSxuLCF0fHxlZS50ZXN0KGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSxufSxkLnNvcnRTdGFibGU9ay5zcGxpdChcIlwiKS5zb3J0KEQpLmpvaW4oXCJcIik9PT1rLGQuZGV0ZWN0RHVwbGljYXRlcz0hIWwsVCgpLGQuc29ydERldGFjaGVkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiAxJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oQy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8ZmUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LFwidHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpPzE6Mil9KSxkLmF0dHJpYnV0ZXMmJmNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxmZShcInZhbHVlXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuJiZcImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGUuZGVmYXVsdFZhbHVlfSksY2UoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8ZmUoUixmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoIW4pcmV0dXJuITA9PT1lW3RdP3QudG9Mb3dlckNhc2UoKToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9KSxzZX0oQyk7ay5maW5kPWgsay5leHByPWguc2VsZWN0b3JzLGsuZXhwcltcIjpcIl09ay5leHByLnBzZXVkb3Msay51bmlxdWVTb3J0PWsudW5pcXVlPWgudW5pcXVlU29ydCxrLnRleHQ9aC5nZXRUZXh0LGsuaXNYTUxEb2M9aC5pc1hNTCxrLmNvbnRhaW5zPWguY29udGFpbnMsay5lc2NhcGVTZWxlY3Rvcj1oLmVzY2FwZTt2YXIgVD1mdW5jdGlvbihlLHQsbil7dmFyIHI9W10saT12b2lkIDAhPT1uO3doaWxlKChlPWVbdF0pJiY5IT09ZS5ub2RlVHlwZSlpZigxPT09ZS5ub2RlVHlwZSl7aWYoaSYmayhlKS5pcyhuKSlicmVhaztyLnB1c2goZSl9cmV0dXJuIHJ9LFM9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W107ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59LE49ay5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBBKGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX12YXIgRD0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaTtmdW5jdGlvbiBqKGUsbixyKXtyZXR1cm4gbShuKT9rLmdyZXAoZSxmdW5jdGlvbihlLHQpe3JldHVybiEhbi5jYWxsKGUsdCxlKSE9PXJ9KTpuLm5vZGVUeXBlP2suZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09biE9PXJ9KTpcInN0cmluZ1wiIT10eXBlb2Ygbj9rLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4tMTxpLmNhbGwobixlKSE9PXJ9KTprLmZpbHRlcihuLGUscil9ay5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRbMF07cmV0dXJuIG4mJihlPVwiOm5vdChcIitlK1wiKVwiKSwxPT09dC5sZW5ndGgmJjE9PT1yLm5vZGVUeXBlP2suZmluZC5tYXRjaGVzU2VsZWN0b3IocixlKT9bcl06W106ay5maW5kLm1hdGNoZXMoZSxrLmdyZXAodCxmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KSl9LGsuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj10aGlzLmxlbmd0aCxpPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHRoaXMucHVzaFN0YWNrKGsoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDt0PHI7dCsrKWlmKGsuY29udGFpbnMoaVt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj10aGlzLnB1c2hTdGFjayhbXSksdD0wO3Q8cjt0Kyspay5maW5kKGUsaVt0XSxuKTtyZXR1cm4gMTxyP2sudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGoodGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGoodGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIWoodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmTi50ZXN0KGUpP2soZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgcSxMPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvOyhrLmZuLmluaXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoIWUpcmV0dXJuIHRoaXM7aWYobj1ufHxxLFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZighKHI9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJjM8PWUubGVuZ3RoP1tudWxsLGUsbnVsbF06TC5leGVjKGUpKXx8IXJbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihyWzFdKXtpZih0PXQgaW5zdGFuY2VvZiBrP3RbMF06dCxrLm1lcmdlKHRoaXMsay5wYXJzZUhUTUwoclsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDpFLCEwKSksRC50ZXN0KHJbMV0pJiZrLmlzUGxhaW5PYmplY3QodCkpZm9yKHIgaW4gdCltKHRoaXNbcl0pP3RoaXNbcl0odFtyXSk6dGhpcy5hdHRyKHIsdFtyXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGk9RS5nZXRFbGVtZW50QnlJZChyWzJdKSkmJih0aGlzWzBdPWksdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6bShlKT92b2lkIDAhPT1uLnJlYWR5P24ucmVhZHkoZSk6ZShrKTprLm1ha2VBcnJheShlLHRoaXMpfSkucHJvdG90eXBlPWsuZm4scT1rKEUpO3ZhciBIPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLE89e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ZnVuY3Rpb24gUChlLHQpe3doaWxlKChlPWVbdF0pJiYxIT09ZS5ub2RlVHlwZSk7cmV0dXJuIGV9ay5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihlKXt2YXIgdD1rKGUsdGhpcyksbj10Lmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPG47ZSsrKWlmKGsuY29udGFpbnModGhpcyx0W2VdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dGhpcy5sZW5ndGgsbz1bXSxhPVwic3RyaW5nXCIhPXR5cGVvZiBlJiZrKGUpO2lmKCFOLnRlc3QoZSkpZm9yKDtyPGk7cisrKWZvcihuPXRoaXNbcl07biYmbiE9PXQ7bj1uLnBhcmVudE5vZGUpaWYobi5ub2RlVHlwZTwxMSYmKGE/LTE8YS5pbmRleChuKToxPT09bi5ub2RlVHlwZSYmay5maW5kLm1hdGNoZXNTZWxlY3RvcihuLGUpKSl7by5wdXNoKG4pO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjaygxPG8ubGVuZ3RoP2sudW5pcXVlU29ydChvKTpvKX0saW5kZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5jYWxsKGsoZSksdGhpc1swXSk6aS5jYWxsKHRoaXMsZS5qcXVlcnk/ZVswXTplKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnB1c2hTdGFjayhrLnVuaXF1ZVNvcnQoay5tZXJnZSh0aGlzLmdldCgpLGsoZSx0KSkpKX0sYWRkQmFjazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09ZT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSl9fSksay5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiYxMSE9PXQubm9kZVR5cGU/dDpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBUKGUsXCJwYXJlbnROb2RlXCIsbil9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFAoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGUpe3JldHVybiBQKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoZSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFQoZSxcIm5leHRTaWJsaW5nXCIsbil9LHByZXZVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFQoZSxcInByZXZpb3VzU2libGluZ1wiLG4pfSxzaWJsaW5nczpmdW5jdGlvbihlKXtyZXR1cm4gUygoZS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlKX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7cmV0dXJuIFMoZS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuY29udGVudERvY3VtZW50P2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxrLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24ocixpKXtrLmZuW3JdPWZ1bmN0aW9uKGUsdCl7dmFyIG49ay5tYXAodGhpcyxpLGUpO3JldHVyblwiVW50aWxcIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ay5maWx0ZXIodCxuKSksMTx0aGlzLmxlbmd0aCYmKE9bcl18fGsudW5pcXVlU29ydChuKSxILnRlc3QocikmJm4ucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUj0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gTShlKXtyZXR1cm4gZX1mdW5jdGlvbiBJKGUpe3Rocm93IGV9ZnVuY3Rpb24gVyhlLHQsbixyKXt2YXIgaTt0cnl7ZSYmbShpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZtKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19ay5DYWxsYmFja3M9ZnVuY3Rpb24ocil7dmFyIGUsbjtyPVwic3RyaW5nXCI9PXR5cGVvZiByPyhlPXIsbj17fSxrLmVhY2goZS5tYXRjaChSKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6ay5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXTpcIlwiKX0sZj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIHMmJih0JiYhaSYmKGw9cy5sZW5ndGgtMSx1LnB1c2godCkpLGZ1bmN0aW9uIG4oZSl7ay5lYWNoKGUsZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pfShhcmd1bWVudHMpLHQmJiFpJiZjKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBrLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoLTE8KG49ay5pbkFycmF5KHQscyxuKSkpcy5zcGxpY2UobiwxKSxuPD1sJiZsLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/LTE8ay5pbkFycmF5KGUscyk6MDxzLmxlbmd0aH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHM9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHM9dD1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFhfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiBhfHwodD1bZSwodD10fHxbXSkuc2xpY2U/dC5zbGljZSgpOnRdLHUucHVzaCh0KSxpfHxjKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW99fTtyZXR1cm4gZn0say5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciBvPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsay5DYWxsYmFja3MoXCJtZW1vcnlcIiksay5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLGsuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksay5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsay5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxrLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixhPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gYS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHM7cmV0dXJuIGsuRGVmZXJyZWQoZnVuY3Rpb24ocil7ay5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oZnVuY3Rpb24oKXt2YXIgZT1uJiZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZtKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3Moci5ub3RpZnkpLmRvbmUoci5yZXNvbHZlKS5mYWlsKHIucmVqZWN0KTpyW3RbMF0rXCJXaXRoXCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO3Q9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxNLHMpLGwodSxvLEkscykpOih1KyssdC5jYWxsKGUsbCh1LG8sTSxzKSxsKHUsbyxJLHMpLGwodSxvLE0sby5ub3RpZnlXaXRoKSkpOihhIT09TSYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7ay5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZrLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1JJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihrLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1rLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gay5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6TSxlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6TSkpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpJKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/ay5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gay5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pLGEucHJvbWlzZShzKSxlJiZlLmNhbGwocyxzKSxzfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgsdD1uLHI9QXJyYXkodCksaT1zLmNhbGwoYXJndW1lbnRzKSxvPWsuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyW3RdPXRoaXMsaVt0XT0xPGFyZ3VtZW50cy5sZW5ndGg/cy5jYWxsKGFyZ3VtZW50cyk6ZSwtLW58fG8ucmVzb2x2ZVdpdGgocixpKX19O2lmKG48PTEmJihXKGUsby5kb25lKGEodCkpLnJlc29sdmUsby5yZWplY3QsIW4pLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pVyhpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgJD0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztrLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiYkLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlLm1lc3NhZ2UsZS5zdGFjayx0KX0say5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihlKXtDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlfSl9O3ZhciBGPWsuRGVmZXJyZWQoKTtmdW5jdGlvbiBCKCl7RS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSxrLnJlYWR5KCl9ay5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7ay5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LGsuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1rLnJlYWR5V2FpdDprLmlzUmVhZHkpfHwoay5pc1JlYWR5PSEwKSE9PWUmJjA8LS1rLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChFLFtrXSl9fSksay5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1FLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KGsucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpKTt2YXIgXz1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbilfKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoayhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSx6PS9eLW1zLS8sVT0vLShbYS16XSkvZztmdW5jdGlvbiBYKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBWKGUpe3JldHVybiBlLnJlcGxhY2UoeixcIm1zLVwiKS5yZXBsYWNlKFUsWCl9dmFyIEc9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBZKCl7dGhpcy5leHBhbmRvPWsuZXhwYW5kbytZLnVpZCsrfVkudWlkPTEsWS5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sRyhlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtWKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1YocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bVih0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChWKToodD1WKHQpKWluIHI/W3RdOnQubWF0Y2goUil8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxrLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFrLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgUT1uZXcgWSxKPW5ldyBZLEs9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFo9L1tBLVpdL2c7ZnVuY3Rpb24gZWUoZSx0LG4pe3ZhciByLGk7aWYodm9pZCAwPT09biYmMT09PWUubm9kZVR5cGUpaWYocj1cImRhdGEtXCIrdC5yZXBsYWNlKFosXCItJCZcIikudG9Mb3dlckNhc2UoKSxcInN0cmluZ1wiPT10eXBlb2Yobj1lLmdldEF0dHJpYnV0ZShyKSkpe3RyeXtuPVwidHJ1ZVwiPT09KGk9bil8fFwiZmFsc2VcIiE9PWkmJihcIm51bGxcIj09PWk/bnVsbDppPT09K2krXCJcIj8raTpLLnRlc3QoaSk/SlNPTi5wYXJzZShpKTppKX1jYXRjaChlKXt9Si5zZXQoZSx0LG4pfWVsc2Ugbj12b2lkIDA7cmV0dXJuIG59ay5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIEouaGFzRGF0YShlKXx8US5oYXNEYXRhKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gSi5hY2Nlc3MoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7Si5yZW1vdmUoZSx0KX0sX2RhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7US5yZW1vdmUoZSx0KX19KSxrLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihuLGUpe3ZhciB0LHIsaSxvPXRoaXNbMF0sYT1vJiZvLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09bil7aWYodGhpcy5sZW5ndGgmJihpPUouZ2V0KG8pLDE9PT1vLm5vZGVUeXBlJiYhUS5nZXQobyxcImhhc0RhdGFBdHRyc1wiKSkpe3Q9YS5sZW5ndGg7d2hpbGUodC0tKWFbdF0mJjA9PT0ocj1hW3RdLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSYmKHI9VihyLnNsaWNlKDUpKSxlZShvLHIsaVtyXSkpO1Euc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Si5zZXQodGhpcyxuKX0pOl8odGhpcyxmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1KLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PWVlKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe0ouc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtKLnJlbW92ZSh0aGlzLGUpfSl9fSksay5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPVEuZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9US5hY2Nlc3MoZSx0LGsubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49ay5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1rLl9xdWV1ZUhvb2tzKGUsdCk7XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7ay5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gUS5nZXQoZSxuKXx8US5hY2Nlc3MoZSxuLHtlbXB0eTprLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1EucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksay5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiZnhcIixlLS0pLGFyZ3VtZW50cy5sZW5ndGg8ZT9rLnF1ZXVlKHRoaXNbMF0sdCk6dm9pZCAwPT09bj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWsucXVldWUodGhpcyx0LG4pO2suX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJmsuZGVxdWV1ZSh0aGlzLHQpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2suZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPWsuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1RLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIHRlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxuZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIit0ZStcIikoW2EteiVdKikkXCIsXCJpXCIpLHJlPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxpZT1FLmRvY3VtZW50RWxlbWVudCxvZT1mdW5jdGlvbihlKXtyZXR1cm4gay5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9LGFlPXtjb21wb3NlZDohMH07aWUuZ2V0Um9vdE5vZGUmJihvZT1mdW5jdGlvbihlKXtyZXR1cm4gay5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fGUuZ2V0Um9vdE5vZGUoYWUpPT09ZS5vd25lckRvY3VtZW50fSk7dmFyIHNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZvZShlKSYmXCJub25lXCI9PT1rLmNzcyhlLFwiZGlzcGxheVwiKX0sdWU9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhPXt9O2ZvcihvIGluIHQpYVtvXT1lLnN0eWxlW29dLGUuc3R5bGVbb109dFtvXTtmb3IobyBpbiBpPW4uYXBwbHkoZSxyfHxbXSksdCllLnN0eWxlW29dPWFbb107cmV0dXJuIGl9O2Z1bmN0aW9uIGxlKGUsdCxuLHIpe3ZhciBpLG8sYT0yMCxzPXI/ZnVuY3Rpb24oKXtyZXR1cm4gci5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gay5jc3MoZSx0LFwiXCIpfSx1PXMoKSxsPW4mJm5bM118fChrLmNzc051bWJlclt0XT9cIlwiOlwicHhcIiksYz1lLm5vZGVUeXBlJiYoay5jc3NOdW1iZXJbdF18fFwicHhcIiE9PWwmJit1KSYmbmUuZXhlYyhrLmNzcyhlLHQpKTtpZihjJiZjWzNdIT09bCl7dS89MixsPWx8fGNbM10sYz0rdXx8MTt3aGlsZShhLS0pay5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLGsuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgY2U9e307ZnVuY3Rpb24gZmUoZSx0KXtmb3IodmFyIG4scixpLG8sYSxzLHUsbD1bXSxjPTAsZj1lLmxlbmd0aDtjPGY7YysrKShyPWVbY10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYobFtjXT1RLmdldChyLFwiZGlzcGxheVwiKXx8bnVsbCxsW2NdfHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZzZShyKSYmKGxbY109KHU9YT1vPXZvaWQgMCxhPShpPXIpLm93bmVyRG9jdW1lbnQscz1pLm5vZGVOYW1lLCh1PWNlW3NdKXx8KG89YS5ib2R5LmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudChzKSksdT1rLmNzcyhvLFwiZGlzcGxheVwiKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyksXCJub25lXCI9PT11JiYodT1cImJsb2NrXCIpLGNlW3NdPXUpKSkpOlwibm9uZVwiIT09biYmKGxbY109XCJub25lXCIsUS5zZXQocixcImRpc3BsYXlcIixuKSkpO2ZvcihjPTA7YzxmO2MrKyludWxsIT1sW2NdJiYoZVtjXS5zdHlsZS5kaXNwbGF5PWxbY10pO3JldHVybiBlfWsuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGZlKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGZlKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7c2UodGhpcyk/ayh0aGlzKS5zaG93KCk6ayh0aGlzKS5oaWRlKCl9KX19KTt2YXIgcGU9L14oPzpjaGVja2JveHxyYWRpbykkL2ksZGU9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pLGhlPS9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksZ2U9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB2ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZBKGUsdCk/ay5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB5ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylRLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxRLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9Z2Uub3B0Z3JvdXA9Z2Uub3B0aW9uLGdlLnRib2R5PWdlLnRmb290PWdlLmNvbGdyb3VwPWdlLmNhcHRpb249Z2UudGhlYWQsZ2UudGg9Z2UudGQ7dmFyIG1lLHhlLGJlPS88fCYjP1xcdys7LztmdW5jdGlvbiB3ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT13KG8pKWsubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKGJlLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0ray5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO2subWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJi0xPGsuaW5BcnJheShvLHIpKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9b2UobyksYT12ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnllKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn1tZT1FLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLCh4ZT1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIikseGUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSx4ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLG1lLmFwcGVuZENoaWxkKHhlKSx5LmNoZWNrQ2xvbmU9bWUuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLG1lLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix5Lm5vQ2xvbmVDaGVja2VkPSEhbWUuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO3ZhciBUZT0vXmtleS8sQ2U9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLEVlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24ga2UoKXtyZXR1cm4hMH1mdW5jdGlvbiBTZSgpe3JldHVybiExfWZ1bmN0aW9uIE5lKGUsdCl7cmV0dXJuIGU9PT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gRS5hY3RpdmVFbGVtZW50fWNhdGNoKGUpe319KCk9PShcImZvY3VzXCI9PT10KX1mdW5jdGlvbiBBZShlLHQsbixyLGksbyl7dmFyIGEscztpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7Zm9yKHMgaW5cInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXZvaWQgMCksdClBZShlLHMsbixyLHRbc10sbyk7cmV0dXJuIGV9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj12b2lkIDApOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dm9pZCAwKTooaT1yLHI9bixuPXZvaWQgMCkpLCExPT09aSlpPVNlO2Vsc2UgaWYoIWkpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYoYT1pLChpPWZ1bmN0aW9uKGUpe3JldHVybiBrKCkub2ZmKGUpLGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1hLmd1aWR8fChhLmd1aWQ9ay5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXtrLmV2ZW50LmFkZCh0aGlzLHQsaSxyLG4pfSl9ZnVuY3Rpb24gRGUoZSxpLG8pe28/KFEuc2V0KGUsaSwhMSksay5ldmVudC5hZGQoZSxpLHtuYW1lc3BhY2U6ITEsaGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgdCxuLHI9US5nZXQodGhpcyxpKTtpZigxJmUuaXNUcmlnZ2VyJiZ0aGlzW2ldKXtpZihyLmxlbmd0aCkoay5ldmVudC5zcGVjaWFsW2ldfHx7fSkuZGVsZWdhdGVUeXBlJiZlLnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgaWYocj1zLmNhbGwoYXJndW1lbnRzKSxRLnNldCh0aGlzLGksciksdD1vKHRoaXMsaSksdGhpc1tpXSgpLHIhPT0obj1RLmdldCh0aGlzLGkpKXx8dD9RLnNldCh0aGlzLGksITEpOm49e30sciE9PW4pcmV0dXJuIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLG4udmFsdWV9ZWxzZSByLmxlbmd0aCYmKFEuc2V0KHRoaXMsaSx7dmFsdWU6ay5ldmVudC50cmlnZ2VyKGsuZXh0ZW5kKHJbMF0say5FdmVudC5wcm90b3R5cGUpLHIuc2xpY2UoMSksdGhpcyl9KSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKX19KSk6dm9pZCAwPT09US5nZXQoZSxpKSYmay5ldmVudC5hZGQoZSxpLGtlKX1rLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVEuZ2V0KHQpO2lmKHYpe24uaGFuZGxlciYmKG49KG89bikuaGFuZGxlcixpPW8uc2VsZWN0b3IpLGkmJmsuZmluZC5tYXRjaGVzU2VsZWN0b3IoaWUsaSksbi5ndWlkfHwobi5ndWlkPWsuZ3VpZCsrKSwodT12LmV2ZW50cyl8fCh1PXYuZXZlbnRzPXt9KSwoYT12LmhhbmRsZSl8fChhPXYuaGFuZGxlPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBrJiZrLmV2ZW50LnRyaWdnZXJlZCE9PWUudHlwZT9rLmV2ZW50LmRpc3BhdGNoLmFwcGx5KHQsYXJndW1lbnRzKTp2b2lkIDB9KSxsPShlPShlfHxcIlwiKS5tYXRjaChSKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWQ9Zz0ocz1FZS5leGVjKGVbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj1rLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1rLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9ay5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmay5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbCh0LHIsaCxhKXx8dC5hZGRFdmVudExpc3RlbmVyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKHQsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLGsuZXZlbnQuZ2xvYmFsW2RdPSEwKX19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1RLmhhc0RhdGEoZSkmJlEuZ2V0KGUpO2lmKHYmJih1PXYuZXZlbnRzKSl7bD0odD0odHx8XCJcIikubWF0Y2goUil8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihkPWc9KHM9RWUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zj1rLmV2ZW50LnNwZWNpYWxbZF18fHt9LHA9dVtkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkXXx8W10scz1zWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHYuaGFuZGxlKXx8ay5yZW1vdmVFdmVudChlLGQsdi5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpay5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtrLmlzRW1wdHlPYmplY3QodSkmJlEucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHM9ay5ldmVudC5maXgoZSksdT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksbD0oUS5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW3MudHlwZV18fFtdLGM9ay5ldmVudC5zcGVjaWFsW3MudHlwZV18fHt9O2Zvcih1WzBdPXMsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspdVt0XT1hcmd1bWVudHNbdF07aWYocy5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHMpKXthPWsuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHMsbCksdD0wO3doaWxlKChpPWFbdCsrXSkmJiFzLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3MuY3VycmVudFRhcmdldD1pLmVsZW0sbj0wO3doaWxlKChvPWkuaGFuZGxlcnNbbisrXSkmJiFzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpcy5ybmFtZXNwYWNlJiYhMSE9PW8ubmFtZXNwYWNlJiYhcy5ybmFtZXNwYWNlLnRlc3Qoby5uYW1lc3BhY2UpfHwocy5oYW5kbGVPYmo9byxzLmRhdGE9by5kYXRhLHZvaWQgMCE9PShyPSgoay5ldmVudC5zcGVjaWFsW28ub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxvLmhhbmRsZXIpLmFwcGx5KGkuZWxlbSx1KSkmJiExPT09KHMucmVzdWx0PXIpJiYocy5wcmV2ZW50RGVmYXVsdCgpLHMuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyxzKSxzLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0Py0xPGsoaSx0aGlzKS5pbmRleChsKTprLmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoay5FdmVudC5wcm90b3R5cGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Om0oZSk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGUodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFt0XX0sc2V0OmZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW2suZXhwYW5kb10/ZTpuZXcgay5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOntzZXR1cDpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZEZSh0LFwiY2xpY2tcIixrZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmRGUodCxcImNsaWNrXCIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmUS5nZXQodCxcImNsaWNrXCIpfHxBKHQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LGsucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LGsuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBrLkV2ZW50KSlyZXR1cm4gbmV3IGsuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT9rZTpTZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZrLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbay5leHBhbmRvXT0hMH0say5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmsuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOlNlLGlzUHJvcGFnYXRpb25TdG9wcGVkOlNlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOlNlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPWtlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWtlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1rZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0say5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNvZGU6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5idXR0b247cmV0dXJuIG51bGw9PWUud2hpY2gmJlRlLnRlc3QoZS50eXBlKT9udWxsIT1lLmNoYXJDb2RlP2UuY2hhckNvZGU6ZS5rZXlDb2RlOiFlLndoaWNoJiZ2b2lkIDAhPT10JiZDZS50ZXN0KGUudHlwZSk/MSZ0PzE6MiZ0PzM6NCZ0PzI6MDplLndoaWNofX0say5ldmVudC5hZGRQcm9wKSxrLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe2suZXZlbnQuc3BlY2lhbFtlXT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gRGUodGhpcyxlLE5lKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBEZSh0aGlzLGUpLCEwfSxkZWxlZ2F0ZVR5cGU6dH19KSxrLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSxpKXtrLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTppLGJpbmRUeXBlOmksaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZS5yZWxhdGVkVGFyZ2V0LHI9ZS5oYW5kbGVPYmo7cmV0dXJuIG4mJihuPT09dGhpc3x8ay5jb250YWlucyh0aGlzLG4pKXx8KGUudHlwZT1yLm9yaWdUeXBlLHQ9ci5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9aSksdH19fSksay5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBBZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIEFlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLGsoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPVNlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtrLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBqZT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxxZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxMZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLEhlPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBPZShlLHQpe3JldHVybiBBKGUsXCJ0YWJsZVwiKSYmQSgxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKSYmayhlKS5jaGlsZHJlbihcInRib2R5XCIpWzBdfHxlfWZ1bmN0aW9uIFBlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIFJlKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBNZShlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw7aWYoMT09PXQubm9kZVR5cGUpe2lmKFEuaGFzRGF0YShlKSYmKG89US5hY2Nlc3MoZSksYT1RLnNldCh0LG8pLGw9by5ldmVudHMpKWZvcihpIGluIGRlbGV0ZSBhLmhhbmRsZSxhLmV2ZW50cz17fSxsKWZvcihuPTAscj1sW2ldLmxlbmd0aDtuPHI7bisrKWsuZXZlbnQuYWRkKHQsaSxsW2ldW25dKTtKLmhhc0RhdGEoZSkmJihzPUouYWNjZXNzKGUpLHU9ay5leHRlbmQoe30scyksSi5zZXQodCx1KSl9fWZ1bmN0aW9uIEllKG4scixpLG8pe3I9Zy5hcHBseShbXSxyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYheS5jaGVja0Nsb25lJiZMZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksSWUodCxyLGksbyl9KTtpZihmJiYodD0oZT13ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9ay5tYXAodmUoZSxcInNjcmlwdFwiKSxQZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9ay5jbG9uZSh1LCEwLCEwKSxzJiZrLm1lcmdlKGEsdmUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsay5tYXAoYSxSZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVEuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZrLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/ay5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJmsuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9KTpiKHUudGV4dENvbnRlbnQucmVwbGFjZShIZSxcIlwiKSx1LGwpKX1yZXR1cm4gbn1mdW5jdGlvbiBXZShlLHQsbil7Zm9yKHZhciByLGk9dD9rLmZpbHRlcih0LGUpOmUsbz0wO251bGwhPShyPWlbb10pO28rKylufHwxIT09ci5ub2RlVHlwZXx8ay5jbGVhbkRhdGEodmUocikpLHIucGFyZW50Tm9kZSYmKG4mJm9lKHIpJiZ5ZSh2ZShyLFwic2NyaXB0XCIpKSxyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocikpO3JldHVybiBlfWsuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoamUsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPW9lKGUpO2lmKCEoeS5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8ay5pc1hNTERvYyhlKSkpZm9yKGE9dmUoYykscj0wLGk9KG89dmUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHZlKGUpLGE9YXx8dmUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylNZShvW3JdLGFbcl0pO2Vsc2UgTWUoZSxjKTtyZXR1cm4gMDwoYT12ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnllKGEsIWYmJnZlKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9ay5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoRyhuKSl7aWYodD1uW1EuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/ay5ldmVudC5yZW1vdmUobixyKTprLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltRLmV4cGFuZG9dPXZvaWQgMH1uW0ouZXhwYW5kb10mJihuW0ouZXhwYW5kb109dm9pZCAwKX19fSksay5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gV2UodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBXZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBfKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/ay50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEllKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxPZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSWUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PU9lKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSWUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSWUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKGsuY2xlYW5EYXRhKHZlKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBrLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBfKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhcWUudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9ay5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKGsuY2xlYW5EYXRhKHZlKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIEllKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtrLmluQXJyYXkodGhpcyxuKTwwJiYoay5jbGVhbkRhdGEodmUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxrLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtrLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9ayhlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxrKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyICRlPW5ldyBSZWdFeHAoXCJeKFwiK3RlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLEZlPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sQmU9bmV3IFJlZ0V4cChyZS5qb2luKFwifFwiKSxcImlcIik7ZnVuY3Rpb24gX2UoZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5zdHlsZTtyZXR1cm4obj1ufHxGZShlKSkmJihcIlwiIT09KGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdKXx8b2UoZSl8fChhPWsuc3R5bGUoZSx0KSksIXkucGl4ZWxCb3hTdHlsZXMoKSYmJGUudGVzdChhKSYmQmUudGVzdCh0KSYmKHI9cy53aWR0aCxpPXMubWluV2lkdGgsbz1zLm1heFdpZHRoLHMubWluV2lkdGg9cy5tYXhXaWR0aD1zLndpZHRoPWEsYT1uLndpZHRoLHMud2lkdGg9cixzLm1pbldpZHRoPWkscy5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hK1wiXCI6YX1mdW5jdGlvbiB6ZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2lmKHUpe3Muc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIix1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIsaWUuYXBwZW5kQ2hpbGQocykuYXBwZW5kQ2hpbGQodSk7dmFyIGU9Qy5nZXRDb21wdXRlZFN0eWxlKHUpO249XCIxJVwiIT09ZS50b3AsYT0xMj09PXQoZS5tYXJnaW5MZWZ0KSx1LnN0eWxlLnJpZ2h0PVwiNjAlXCIsbz0zNj09PXQoZS5yaWdodCkscj0zNj09PXQoZS53aWR0aCksdS5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsaT0xMj09PXQodS5vZmZzZXRXaWR0aC8zKSxpZS5yZW1vdmVDaGlsZChzKSx1PW51bGx9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIG4scixpLG8sYSxzPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSx1PUUuY3JlYXRlRWxlbWVudChcImRpdlwiKTt1LnN0eWxlJiYodS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsdS5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIseS5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09dS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxrLmV4dGVuZCh5LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksYX0sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX19KSl9KCk7dmFyIFVlPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxYZT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsVmU9e307ZnVuY3Rpb24gR2UoZSl7dmFyIHQ9ay5jc3NQcm9wc1tlXXx8VmVbZV07cmV0dXJuIHR8fChlIGluIFhlP2U6VmVbZV09ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1VZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPVVlW25dK3QpaW4gWGUpcmV0dXJuIGV9KGUpfHxlKX12YXIgWWU9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFFlPS9eLS0vLEplPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxLZT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9O2Z1bmN0aW9uIFplKGUsdCxuKXt2YXIgcj1uZS5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsyXS0obnx8MCkpKyhyWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gZXQoZSx0LG4scixpLG8pe3ZhciBhPVwid2lkdGhcIj09PXQ/MTowLHM9MCx1PTA7aWYobj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpXCJtYXJnaW5cIj09PW4mJih1Kz1rLmNzcyhlLG4rcmVbYV0sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKHUtPWsuY3NzKGUsXCJwYWRkaW5nXCIrcmVbYV0sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYodS09ay5jc3MoZSxcImJvcmRlclwiK3JlW2FdK1wiV2lkdGhcIiwhMCxpKSkpOih1Kz1rLmNzcyhlLFwicGFkZGluZ1wiK3JlW2FdLCEwLGkpLFwicGFkZGluZ1wiIT09bj91Kz1rLmNzcyhlLFwiYm9yZGVyXCIrcmVbYV0rXCJXaWR0aFwiLCEwLGkpOnMrPWsuY3NzKGUsXCJib3JkZXJcIityZVthXStcIldpZHRoXCIsITAsaSkpO3JldHVybiFyJiYwPD1vJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1vLXUtcy0uNSkpfHwwKSx1fWZ1bmN0aW9uIHR0KGUsdCxuKXt2YXIgcj1GZShlKSxpPSgheS5ib3hTaXppbmdSZWxpYWJsZSgpfHxuKSYmXCJib3JkZXItYm94XCI9PT1rLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksbz1pLGE9X2UoZSx0LHIpLHM9XCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtpZigkZS50ZXN0KGEpKXtpZighbilyZXR1cm4gYTthPVwiYXV0b1wifXJldHVybigheS5ib3hTaXppbmdSZWxpYWJsZSgpJiZpfHxcImF1dG9cIj09PWF8fCFwYXJzZUZsb2F0KGEpJiZcImlubGluZVwiPT09ay5jc3MoZSxcImRpc3BsYXlcIiwhMSxyKSkmJmUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihpPVwiYm9yZGVyLWJveFwiPT09ay5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLChvPXMgaW4gZSkmJihhPWVbc10pKSwoYT1wYXJzZUZsb2F0KGEpfHwwKStldChlLHQsbnx8KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksbyxyLGEpK1wicHhcIn1mdW5jdGlvbiBudChlLHQsbixyLGkpe3JldHVybiBuZXcgbnQucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1rLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPV9lKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGdyaWRBcmVhOiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTdGFydDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9Vih0KSx1PVFlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PUdlKHMpKSxhPWsuY3NzSG9va3NbdF18fGsuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmXCJnZXRcImluIGEmJnZvaWQgMCE9PShpPWEuZ2V0KGUsITEscikpP2k6bFt0XTtcInN0cmluZ1wiPT09KG89dHlwZW9mIG4pJiYoaT1uZS5leGVjKG4pKSYmaVsxXSYmKG49bGUoZSx0LGkpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09biYmKFwibnVtYmVyXCIhPT1vfHx1fHwobis9aSYmaVszXXx8KGsuY3NzTnVtYmVyW3NdP1wiXCI6XCJweFwiKSkseS5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLGEmJlwic2V0XCJpbiBhJiZ2b2lkIDA9PT0obj1hLnNldChlLG4scikpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9Vih0KTtyZXR1cm4gUWUudGVzdCh0KXx8KHQ9R2UocykpLChhPWsuY3NzSG9va3NbdF18fGsuY3NzSG9va3Nbc10pJiZcImdldFwiaW4gYSYmKGk9YS5nZXQoZSwhMCxuKSksdm9pZCAwPT09aSYmKGk9X2UoZSx0LHIpKSxcIm5vcm1hbFwiPT09aSYmdCBpbiBLZSYmKGk9S2VbdF0pLFwiXCI9PT1ufHxuPyhvPXBhcnNlRmxvYXQoaSksITA9PT1ufHxpc0Zpbml0ZShvKT9vfHwwOmkpOml9fSksay5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSx1KXtrLmNzc0hvb2tzW3VdPXtnZXQ6ZnVuY3Rpb24oZSx0LG4pe2lmKHQpcmV0dXJuIVllLnRlc3Qoay5jc3MoZSxcImRpc3BsYXlcIikpfHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoP3R0KGUsdSxuKTp1ZShlLEplLGZ1bmN0aW9uKCl7cmV0dXJuIHR0KGUsdSxuKX0pfSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9RmUoZSksbz0heS5zY3JvbGxib3hTaXplKCkmJlwiYWJzb2x1dGVcIj09PWkucG9zaXRpb24sYT0ob3x8bikmJlwiYm9yZGVyLWJveFwiPT09ay5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLHM9bj9ldChlLHUsbixhLGkpOjA7cmV0dXJuIGEmJm8mJihzLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3VbMF0udG9VcHBlckNhc2UoKSt1LnNsaWNlKDEpXS1wYXJzZUZsb2F0KGlbdV0pLWV0KGUsdSxcImJvcmRlclwiLCExLGkpLS41KSkscyYmKHI9bmUuZXhlYyh0KSkmJlwicHhcIiE9PShyWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt1XT10LHQ9ay5jc3MoZSx1KSksWmUoMCx0LHMpfX19KSxrLmNzc0hvb2tzLm1hcmdpbkxlZnQ9emUoeS5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KF9lKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LXVlKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLGsuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGksbyl7ay5jc3NIb29rc1tpK29dPXtleHBhbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj17fSxyPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIgXCIpOltlXTt0PDQ7dCsrKW5baStyZVt0XStvXT1yW3RdfHxyW3QtMl18fHJbMF07cmV0dXJuIG59fSxcIm1hcmdpblwiIT09aSYmKGsuY3NzSG9va3NbaStvXS5zZXQ9WmUpfSksay5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiBfKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9RmUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09ay5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP2suc3R5bGUoZSx0LG4pOmsuY3NzKGUsdCl9LGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfX0pLCgoay5Ud2Vlbj1udCkucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpudCxpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxrLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KGsuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9bnQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOm50LnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPW50LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD1rLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6bnQucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0pLmluaXQucHJvdG90eXBlPW50LnByb3RvdHlwZSwobnQucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9ay5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXtrLmZ4LnN0ZXBbZS5wcm9wXT9rLmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHwhay5jc3NIb29rc1tlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbR2UoZS5wcm9wKV0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6ay5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0pLnNjcm9sbFRvcD1udC5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxrLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0say5meD1udC5wcm90b3R5cGUuaW5pdCxrLmZ4LnN0ZXA9e307dmFyIHJ0LGl0LG90LGF0LHN0PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyx1dD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGx0KCl7aXQmJighMT09PUUuaGlkZGVuJiZDLnJlcXVlc3RBbmltYXRpb25GcmFtZT9DLnJlcXVlc3RBbmltYXRpb25GcmFtZShsdCk6Qy5zZXRUaW1lb3V0KGx0LGsuZnguaW50ZXJ2YWwpLGsuZngudGljaygpKX1mdW5jdGlvbiBjdCgpe3JldHVybiBDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtydD12b2lkIDB9KSxydD1EYXRlLm5vdygpfWZ1bmN0aW9uIGZ0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1yZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gcHQoZSx0LG4pe2Zvcih2YXIgcixpPShkdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChkdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGR0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWR0LnByZWZpbHRlcnMubGVuZ3RoLHM9ay5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4hMTtmb3IodmFyIGU9cnR8fGN0KCksdD1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tZSksbj0xLSh0L2wuZHVyYXRpb258fDApLHI9MCxpPWwudHdlZW5zLmxlbmd0aDtyPGk7cisrKWwudHdlZW5zW3JdLnJ1bihuKTtyZXR1cm4gcy5ub3RpZnlXaXRoKG8sW2wsbix0XSksbjwxJiZpP3Q6KGl8fHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06byxwcm9wczprLmV4dGVuZCh7fSxlKSxvcHRzOmsuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzprLmVhc2luZy5fZGVmYXVsdH0sdCksb3JpZ2luYWxQcm9wZXJ0aWVzOmUsb3JpZ2luYWxPcHRpb25zOnQsc3RhcnRUaW1lOnJ0fHxjdCgpLGR1cmF0aW9uOnQuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGUsdCl7dmFyIG49ay5Ud2VlbihvLGwub3B0cyxlLHQsbC5vcHRzLnNwZWNpYWxFYXNpbmdbZV18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKG4pLG59LHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWU/bC50d2VlbnMubGVuZ3RoOjA7aWYoYSlyZXR1cm4gdGhpcztmb3IoYT0hMDt0PG47dCsrKWwudHdlZW5zW3RdLnJ1bigxKTtyZXR1cm4gZT8ocy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsLGVdKSk6cy5yZWplY3RXaXRoKG8sW2wsZV0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcighZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYoaT10W3I9VihuKV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT1rLmNzc0hvb2tzW3JdKSYmXCJleHBhbmRcImluIGEpZm9yKG4gaW4gbz1hLmV4cGFuZChvKSxkZWxldGUgZVtyXSxvKW4gaW4gZXx8KGVbbl09b1tuXSx0W25dPWkpO2Vsc2UgdFtyXT1pfShjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTtyPGk7cisrKWlmKG49ZHQucHJlZmlsdGVyc1tyXS5jYWxsKGwsbyxjLGwub3B0cykpcmV0dXJuIG0obi5zdG9wKSYmKGsuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD1uLnN0b3AuYmluZChuKSksbjtyZXR1cm4gay5tYXAoYyxwdCxsKSxtKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKG8sbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyksay5meC50aW1lcihrLmV4dGVuZCh1LHtlbGVtOm8sYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfWsuQW5pbWF0aW9uPWsuZXh0ZW5kKGR0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBsZShuLmVsZW0sZSxuZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe20oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChSKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0sZHQudHdlZW5lcnNbbl09ZHQudHdlZW5lcnNbbl18fFtdLGR0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmc2UoZSksdj1RLmdldChlLFwiZnhzaG93XCIpO2ZvcihyIGluIG4ucXVldWV8fChudWxsPT0oYT1rLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihhLnVucXVldWVkPTAscz1hLmVtcHR5LmZpcmUsYS5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7YS51bnF1ZXVlZHx8cygpfSksYS51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXthLnVucXVldWVkLS0say5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pfSkpLHQpaWYoaT10W3JdLHN0LnRlc3QoaSkpe2lmKGRlbGV0ZSB0W3JdLG89b3x8XCJ0b2dnbGVcIj09PWksaT09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1pfHwhdnx8dm9pZCAwPT09dltyXSljb250aW51ZTtnPSEwfWRbcl09diYmdltyXXx8ay5zdHlsZShlLHIpfWlmKCh1PSFrLmlzRW1wdHlPYmplY3QodCkpfHwhay5pc0VtcHR5T2JqZWN0KGQpKWZvcihyIGluIGYmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9diYmdi5kaXNwbGF5KSYmKGw9US5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9ay5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGZlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz1rLmNzcyhlLFwiZGlzcGxheVwiKSxmZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09ay5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMSxkKXV8fCh2P1wiaGlkZGVuXCJpbiB2JiYoZz12LmhpZGRlbik6dj1RLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih2LmhpZGRlbj0hZyksZyYmZmUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtmb3IociBpbiBnfHxmZShbZV0pLFEucmVtb3ZlKGUsXCJmeHNob3dcIiksZClrLnN0eWxlKGUscixkW3JdKX0pKSx1PXB0KGc/dltyXTowLHIscCksciBpbiB2fHwodltyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfV0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9kdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6ZHQucHJlZmlsdGVycy5wdXNoKGUpfX0pLGsuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP2suZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8bShlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhbSh0KSYmdH07cmV0dXJuIGsuZngub2ZmP3IuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2Ygci5kdXJhdGlvbiYmKHIuZHVyYXRpb24gaW4gay5meC5zcGVlZHM/ci5kdXJhdGlvbj1rLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpyLmR1cmF0aW9uPWsuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1yLnF1ZXVlJiYhMCE9PXIucXVldWV8fChyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bShyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmay5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LGsuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKHNlKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPWsuaXNFbXB0eU9iamVjdCh0KSxvPWsuc3BlZWQoZSxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgZT1kdCh0aGlzLGsuZXh0ZW5kKHt9LHQpLG8pOyhpfHxRLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmZS5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oaSxlLG8pe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBpJiYobz1lLGU9aSxpPXZvaWQgMCksZSYmITEhPT1pJiZ0aGlzLnF1ZXVlKGl8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ITAsdD1udWxsIT1pJiZpK1wicXVldWVIb29rc1wiLG49ay50aW1lcnMscj1RLmdldCh0aGlzKTtpZih0KXJbdF0mJnJbdF0uc3RvcCYmYShyW3RdKTtlbHNlIGZvcih0IGluIHIpclt0XSYmclt0XS5zdG9wJiZ1dC50ZXN0KHQpJiZhKHJbdF0pO2Zvcih0PW4ubGVuZ3RoO3QtLTspblt0XS5lbGVtIT09dGhpc3x8bnVsbCE9aSYmblt0XS5xdWV1ZSE9PWl8fChuW3RdLmFuaW0uc3RvcChvKSxlPSExLG4uc3BsaWNlKHQsMSkpOyFlJiZvfHxrLmRlcXVldWUodGhpcyxpKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuITEhPT1hJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQ9US5nZXQodGhpcyksbj10W2ErXCJxdWV1ZVwiXSxyPXRbYStcInF1ZXVlSG9va3NcIl0saT1rLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsay5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KX19KSxrLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUscil7dmFyIGk9ay5mbltyXTtrLmZuW3JdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP2kuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShmdChyLCEwKSxlLHQsbil9fSksay5lYWNoKHtzbGlkZURvd246ZnQoXCJzaG93XCIpLHNsaWRlVXA6ZnQoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmZ0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSxyKXtrLmZuW2VdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5hbmltYXRlKHIsZSx0LG4pfX0pLGsudGltZXJzPVtdLGsuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPWsudGltZXJzO2ZvcihydD1EYXRlLm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fGsuZnguc3RvcCgpLHJ0PXZvaWQgMH0say5meC50aW1lcj1mdW5jdGlvbihlKXtrLnRpbWVycy5wdXNoKGUpLGsuZnguc3RhcnQoKX0say5meC5pbnRlcnZhbD0xMyxrLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7aXR8fChpdD0hMCxsdCgpKX0say5meC5zdG9wPWZ1bmN0aW9uKCl7aXQ9bnVsbH0say5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0say5mbi5kZWxheT1mdW5jdGlvbihyLGUpe3JldHVybiByPWsuZngmJmsuZnguc3BlZWRzW3JdfHxyLGU9ZXx8XCJmeFwiLHRoaXMucXVldWUoZSxmdW5jdGlvbihlLHQpe3ZhciBuPUMuc2V0VGltZW91dChlLHIpO3Quc3RvcD1mdW5jdGlvbigpe0MuY2xlYXJUaW1lb3V0KG4pfX0pfSxvdD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhdD1FLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxvdC50eXBlPVwiY2hlY2tib3hcIix5LmNoZWNrT249XCJcIiE9PW90LnZhbHVlLHkub3B0U2VsZWN0ZWQ9YXQuc2VsZWN0ZWQsKG90PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZT1cInRcIixvdC50eXBlPVwicmFkaW9cIix5LnJhZGlvVmFsdWU9XCJ0XCI9PT1vdC52YWx1ZTt2YXIgaHQsZ3Q9ay5leHByLmF0dHJIYW5kbGU7ay5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gXyh0aGlzLGsuYXR0cixlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ay5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSxrLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/ay5wcm9wKGUsdCxuKTooMT09PW8mJmsuaXNYTUxEb2MoZSl8fChpPWsuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChrLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP2h0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBrLnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPWsuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZigheS5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZBKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUik7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSksaHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P2sucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LGsuZWFjaChrLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgYT1ndFt0XXx8ay5maW5kLmF0dHI7Z3RbdF09ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIG58fChpPWd0W29dLGd0W29dPXIscj1udWxsIT1hKGUsdCxuKT9vOm51bGwsZ3Rbb109aSkscn19KTt2YXIgdnQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSx5dD0vXig/OmF8YXJlYSkkL2k7ZnVuY3Rpb24gbXQoZSl7cmV0dXJuKGUubWF0Y2goUil8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB4dChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24gYnQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmZS5tYXRjaChSKXx8W119ay5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gXyh0aGlzLGsucHJvcCxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbay5wcm9wRml4W2VdfHxlXX0pfX0pLGsuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmay5pc1hNTERvYyhlKXx8KHQ9ay5wcm9wRml4W3RdfHx0LGk9ay5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD1rLmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6dnQudGVzdChlLm5vZGVOYW1lKXx8eXQudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSx5Lm9wdFNlbGVjdGVkfHwoay5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLGsuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtrLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksay5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7ayh0aGlzKS5hZGRDbGFzcyh0LmNhbGwodGhpcyxlLHh0KHRoaXMpKSl9KTtpZigoZT1idCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9eHQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrbXQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSlyLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKHIrPW8rXCIgXCIpO2khPT0ocz1tdChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtrKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUseHQodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKChlPWJ0KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT14dChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIittdChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXdoaWxlKC0xPHIuaW5kZXhPZihcIiBcIitvK1wiIFwiKSlyPXIucmVwbGFjZShcIiBcIitvK1wiIFwiLFwiIFwiKTtpIT09KHM9bXQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGksdCl7dmFyIG89dHlwZW9mIGksYT1cInN0cmluZ1wiPT09b3x8QXJyYXkuaXNBcnJheShpKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJmE/dD90aGlzLmFkZENsYXNzKGkpOnRoaXMucmVtb3ZlQ2xhc3MoaSk6bShpKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7ayh0aGlzKS50b2dnbGVDbGFzcyhpLmNhbGwodGhpcyxlLHh0KHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7aWYoYSl7dD0wLG49ayh0aGlzKSxyPWJ0KGkpO3doaWxlKGU9clt0KytdKW4uaGFzQ2xhc3MoZSk/bi5yZW1vdmVDbGFzcyhlKTpuLmFkZENsYXNzKGUpfWVsc2Ugdm9pZCAwIT09aSYmXCJib29sZWFuXCIhPT1vfHwoKGU9eHQodGhpcykpJiZRLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGUpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZXx8ITE9PT1pP1wiXCI6US5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIittdCh4dChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHd0PS9cXHIvZztrLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsayh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9ay5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1rLnZhbEhvb2tzW3RoaXMudHlwZV18fGsudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9ay52YWxIb29rc1t0LnR5cGVdfHxrLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh3dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksay5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1rLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDptdChrLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1rKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89ay5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPGsuaW5BcnJheShrLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxrLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7ay52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPGsuaW5BcnJheShrKGUpLnZhbCgpLHQpfX0seS5jaGVja09ufHwoay52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx5LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIFR0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxDdD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtrLmV4dGVuZChrLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD12LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD12LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIVR0LnRlc3QoZCtrLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbay5leHBhbmRvXT9lOm5ldyBrLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTprLm1ha2VBcnJheSh0LFtlXSksYz1rLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxUdC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFEuZ2V0KG8sXCJldmVudHNcIil8fHt9KVtlLnR5cGVdJiZRLmdldChvLFwiaGFuZGxlXCIpKSYmbC5hcHBseShvLHQpLChsPXUmJm9bdV0pJiZsLmFwcGx5JiZHKG8pJiYoZS5yZXN1bHQ9bC5hcHBseShvLHQpLCExPT09ZS5yZXN1bHQmJmUucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGUudHlwZT1kLHJ8fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fGMuX2RlZmF1bHQmJiExIT09Yy5fZGVmYXVsdC5hcHBseShwLnBvcCgpLHQpfHwhRyhuKXx8dSYmbShuW2RdKSYmIXgobikmJigoYT1uW3VdKSYmKG5bdV09bnVsbCksay5ldmVudC50cmlnZ2VyZWQ9ZCxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYuYWRkRXZlbnRMaXN0ZW5lcihkLEN0KSxuW2RdKCksZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCxDdCksay5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGEmJihuW3VdPWEpKSxlLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1rLmV4dGVuZChuZXcgay5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTtrLmV2ZW50LnRyaWdnZXIocixudWxsLHQpfX0pLGsuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2suZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIGsuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSkseS5mb2N1c2lufHxrLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihuLHIpe3ZhciBpPWZ1bmN0aW9uKGUpe2suZXZlbnQuc2ltdWxhdGUocixlLnRhcmdldCxrLmV2ZW50LmZpeChlKSl9O2suZXZlbnQuc3BlY2lhbFtyXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsdD1RLmFjY2VzcyhlLHIpO3R8fGUuYWRkRXZlbnRMaXN0ZW5lcihuLGksITApLFEuYWNjZXNzKGUsciwodHx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHQ9US5hY2Nlc3MoZSxyKS0xO3Q/US5hY2Nlc3MoZSxyLHQpOihlLnJlbW92ZUV2ZW50TGlzdGVuZXIobixpLCEwKSxRLnJlbW92ZShlLHIpKX19fSk7dmFyIEV0PUMubG9jYXRpb24sa3Q9RGF0ZS5ub3coKSxTdD0vXFw/LztrLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDt0cnl7dD0obmV3IEMuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfWNhdGNoKGUpe3Q9dm9pZCAwfXJldHVybiB0JiYhdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8ay5lcnJvcihcIkludmFsaWQgWE1MOiBcIitlKSx0fTt2YXIgTnQ9L1xcW1xcXSQvLEF0PS9cXHI/XFxuL2csRHQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLGp0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBxdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKWsuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8TnQudGVzdChuKT9pKG4sdCk6cXQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpcXQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1rLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhay5pc1BsYWluT2JqZWN0KGUpKWsuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpcXQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LGsuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gay5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPWsucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/ay5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhayh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmanQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUR0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPWsodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP2subWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShBdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKEF0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBMdD0vJTIwL2csSHQ9LyMuKiQvLE90PS8oWz8mXSlfPVteJl0qLyxQdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLFJ0PS9eKD86R0VUfEhFQUQpJC8sTXQ9L15cXC9cXC8vLEl0PXt9LFd0PXt9LCR0PVwiKi9cIi5jb25jYXQoXCIqXCIpLEZ0PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gQnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFIpfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uIF90KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PVd0O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsay5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24genQoZSx0KXt2YXIgbixyLGk9ay5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmay5leHRlbmQoITAsZSxyKSxlfUZ0LmhyZWY9RXQuaHJlZixrLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6RXQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KEV0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjokdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6ay5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/enQoenQoZSxrLmFqYXhTZXR0aW5ncyksdCk6enQoay5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6QnQoSXQpLGFqYXhUcmFuc3BvcnQ6QnQoV3QpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx2PWsuYWpheFNldHVwKHt9LHQpLHk9di5jb250ZXh0fHx2LG09di5jb250ZXh0JiYoeS5ub2RlVHlwZXx8eS5qcXVlcnkpP2soeSk6ay5ldmVudCx4PWsuRGVmZXJyZWQoKSxiPWsuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz12LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1QdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHYubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHYudXJsPSgoZXx8di51cmx8fEV0LmhyZWYpK1wiXCIpLnJlcGxhY2UoTXQsRXQucHJvdG9jb2wrXCIvL1wiKSx2LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8di5tZXRob2R8fHYudHlwZSx2LmRhdGFUeXBlcz0odi5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUil8fFtcIlwiXSxudWxsPT12LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj12LnVybCxyLmhyZWY9ci5ocmVmLHYuY3Jvc3NEb21haW49RnQucHJvdG9jb2wrXCIvL1wiK0Z0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt2LmNyb3NzRG9tYWluPSEwfX1pZih2LmRhdGEmJnYucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB2LmRhdGEmJih2LmRhdGE9ay5wYXJhbSh2LmRhdGEsdi50cmFkaXRpb25hbCkpLF90KEl0LHYsdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9ay5ldmVudCYmdi5nbG9iYWwpJiYwPT1rLmFjdGl2ZSsrJiZrLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksdi50eXBlPXYudHlwZS50b1VwcGVyQ2FzZSgpLHYuaGFzQ29udGVudD0hUnQudGVzdCh2LnR5cGUpLGY9di51cmwucmVwbGFjZShIdCxcIlwiKSx2Lmhhc0NvbnRlbnQ/di5kYXRhJiZ2LnByb2Nlc3NEYXRhJiYwPT09KHYuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih2LmRhdGE9di5kYXRhLnJlcGxhY2UoTHQsXCIrXCIpKToobz12LnVybC5zbGljZShmLmxlbmd0aCksdi5kYXRhJiYodi5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHYuZGF0YSkmJihmKz0oU3QudGVzdChmKT9cIiZcIjpcIj9cIikrdi5kYXRhLGRlbGV0ZSB2LmRhdGEpLCExPT09di5jYWNoZSYmKGY9Zi5yZXBsYWNlKE90LFwiJDFcIiksbz0oU3QudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK2t0Kysrbyksdi51cmw9ZitvKSx2LmlmTW9kaWZpZWQmJihrLmxhc3RNb2RpZmllZFtmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixrLmxhc3RNb2RpZmllZFtmXSksay5ldGFnW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsay5ldGFnW2ZdKSksKHYuZGF0YSYmdi5oYXNDb250ZW50JiYhMSE9PXYuY29udGVudFR5cGV8fHQuY29udGVudFR5cGUpJiZULnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIix2LmNvbnRlbnRUeXBlKSxULnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIix2LmRhdGFUeXBlc1swXSYmdi5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXT92LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PXYuZGF0YVR5cGVzWzBdP1wiLCBcIiskdCtcIjsgcT0wLjAxXCI6XCJcIik6di5hY2NlcHRzW1wiKlwiXSksdi5oZWFkZXJzKVQuc2V0UmVxdWVzdEhlYWRlcihpLHYuaGVhZGVyc1tpXSk7aWYodi5iZWZvcmVTZW5kJiYoITE9PT12LmJlZm9yZVNlbmQuY2FsbCh5LFQsdil8fGgpKXJldHVybiBULmFib3J0KCk7aWYodT1cImFib3J0XCIsYi5hZGQodi5jb21wbGV0ZSksVC5kb25lKHYuc3VjY2VzcyksVC5mYWlsKHYuZXJyb3IpLGM9X3QoV3Qsdix0LFQpKXtpZihULnJlYWR5U3RhdGU9MSxnJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtULHZdKSxoKXJldHVybiBUO3YuYXN5bmMmJjA8di50aW1lb3V0JiYoZD1DLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtULmFib3J0KFwidGltZW91dFwiKX0sdi50aW1lb3V0KSk7dHJ5e2g9ITEsYy5zZW5kKGEsbCl9Y2F0Y2goZSl7aWYoaCl0aHJvdyBlO2woLTEsZSl9fWVsc2UgbCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBsKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD10O2h8fChoPSEwLGQmJkMuY2xlYXJUaW1lb3V0KGQpLGM9dm9pZCAwLHA9cnx8XCJcIixULnJlYWR5U3RhdGU9MDxlPzQ6MCxpPTIwMDw9ZSYmZTwzMDB8fDMwND09PWUsbiYmKHM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5jb250ZW50cyx1PWUuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09dVswXSl1LnNoaWZ0KCksdm9pZCAwPT09ciYmKHI9ZS5taW1lVHlwZXx8dC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaStcIiBcIit1WzBdXSl7bz1pO2JyZWFrfWF8fChhPWkpfW89b3x8YX1pZihvKXJldHVybiBvIT09dVswXSYmdS51bnNoaWZ0KG8pLG5bb119KHYsVCxuKSkscz1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKFwiKlwiPT09bylvPXU7ZWxzZSBpZihcIipcIiE9PXUmJnUhPT1vKXtpZighKGE9bFt1K1wiIFwiK29dfHxsW1wiKiBcIitvXSkpZm9yKGkgaW4gbClpZigocz1pLnNwbGl0KFwiIFwiKSlbMV09PT1vJiYoYT1sW3UrXCIgXCIrc1swXV18fGxbXCIqIFwiK3NbMF1dKSl7ITA9PT1hP2E9bFtpXTohMCE9PWxbaV0mJihvPXNbMF0sYy51bnNoaWZ0KHNbMV0pKTticmVha31pZighMCE9PWEpaWYoYSYmZVtcInRocm93c1wiXSl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fSh2LHMsVCxpKSxpPyh2LmlmTW9kaWZpZWQmJigodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkmJihrLmxhc3RNb2RpZmllZFtmXT11KSwodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSkmJihrLmV0YWdbZl09dSkpLDIwND09PWV8fFwiSEVBRFwiPT09di50eXBlP2w9XCJub2NvbnRlbnRcIjozMDQ9PT1lP2w9XCJub3Rtb2RpZmllZFwiOihsPXMuc3RhdGUsbz1zLmRhdGEsaT0hKGE9cy5lcnJvcikpKTooYT1sLCFlJiZsfHwobD1cImVycm9yXCIsZTwwJiYoZT0wKSkpLFQuc3RhdHVzPWUsVC5zdGF0dXNUZXh0PSh0fHxsKStcIlwiLGk/eC5yZXNvbHZlV2l0aCh5LFtvLGwsVF0pOngucmVqZWN0V2l0aCh5LFtULGwsYV0pLFQuc3RhdHVzQ29kZSh3KSx3PXZvaWQgMCxnJiZtLnRyaWdnZXIoaT9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbVCx2LGk/bzphXSksYi5maXJlV2l0aCh5LFtULGxdKSxnJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW1Qsdl0pLC0tay5hY3RpdmV8fGsuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIFR9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBrLmdldChlLHQsbixcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiBrLmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLGsuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSxpKXtrW2ldPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBtKHQpJiYocj1yfHxuLG49dCx0PXZvaWQgMCksay5hamF4KGsuZXh0ZW5kKHt1cmw6ZSx0eXBlOmksZGF0YVR5cGU6cixkYXRhOnQsc3VjY2VzczpufSxrLmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSxrLl9ldmFsVXJsPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGsuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7ay5nbG9iYWxFdmFsKGUsdCl9fSl9LGsuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYobShlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PWsoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaChmdW5jdGlvbihlKXtrKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcyxlKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1rKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pfSx3cmFwOmZ1bmN0aW9uKHQpe3ZhciBuPW0odCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtrKHRoaXMpLndyYXBBbGwobj90LmNhbGwodGhpcyxlKTp0KX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe2sodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksay5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiFrLmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSxrLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiEhKGUub2Zmc2V0V2lkdGh8fGUub2Zmc2V0SGVpZ2h0fHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0say5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgQy5YTUxIdHRwUmVxdWVzdH1jYXRjaChlKXt9fTt2YXIgVXQ9ezA6MjAwLDEyMjM6MjA0fSxYdD1rLmFqYXhTZXR0aW5ncy54aHIoKTt5LmNvcnM9ISFYdCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFh0LHkuYWpheD1YdD0hIVh0LGsuYWpheFRyYW5zcG9ydChmdW5jdGlvbihpKXt2YXIgbyxhO2lmKHkuY29yc3x8WHQmJiFpLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnhocigpO2lmKHIub3BlbihpLnR5cGUsaS51cmwsaS5hc3luYyxpLnVzZXJuYW1lLGkucGFzc3dvcmQpLGkueGhyRmllbGRzKWZvcihuIGluIGkueGhyRmllbGRzKXJbbl09aS54aHJGaWVsZHNbbl07Zm9yKG4gaW4gaS5taW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUoaS5taW1lVHlwZSksaS5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpLGUpci5zZXRSZXF1ZXN0SGVhZGVyKG4sZVtuXSk7bz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtvJiYobz1hPXIub25sb2FkPXIub25lcnJvcj1yLm9uYWJvcnQ9ci5vbnRpbWVvdXQ9ci5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3IuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiByLnN0YXR1cz90KDAsXCJlcnJvclwiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChVdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCxcInRleHRcIiE9PShyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oXCJlcnJvclwiKSx2b2lkIDAhPT1yLm9uYWJvcnQ/ci5vbmFib3J0PWE6ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiZDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtvJiZhKCl9KX0sbz1vKFwiYWJvcnRcIik7dHJ5e3Iuc2VuZChpLmhhc0NvbnRlbnQmJmkuZGF0YXx8bnVsbCl9Y2F0Y2goZSl7aWYobyl0aHJvdyBlfX0sYWJvcnQ6ZnVuY3Rpb24oKXtvJiZvKCl9fX0pLGsuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXtlLmNyb3NzRG9tYWluJiYoZS5jb250ZW50cy5zY3JpcHQ9ITEpfSksay5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGsuZ2xvYmFsRXZhbChlKSxlfX19KSxrLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pLGsuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKG4pe3ZhciByLGk7aWYobi5jcm9zc0RvbWFpbnx8bi5zY3JpcHRBdHRycylyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3I9ayhcIjxzY3JpcHQ+XCIpLmF0dHIobi5zY3JpcHRBdHRyc3x8e30pLnByb3Aoe2NoYXJzZXQ6bi5zY3JpcHRDaGFyc2V0LHNyYzpuLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGk9ZnVuY3Rpb24oZSl7ci5yZW1vdmUoKSxpPW51bGwsZSYmdChcImVycm9yXCI9PT1lLnR5cGU/NDA0OjIwMCxlLnR5cGUpfSksRS5oZWFkLmFwcGVuZENoaWxkKHJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2kmJmkoKX19fSk7dmFyIFZ0LEd0PVtdLFl0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87ay5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9R3QucG9wKCl8fGsuZXhwYW5kbytcIl9cIitrdCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksay5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT0hMSE9PWUuanNvbnAmJihZdC50ZXN0KGUudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmWXQudGVzdChlLmRhdGEpJiZcImRhdGFcIik7aWYoYXx8XCJqc29ucFwiPT09ZS5kYXRhVHlwZXNbMF0pcmV0dXJuIHI9ZS5qc29ucENhbGxiYWNrPW0oZS5qc29ucENhbGxiYWNrKT9lLmpzb25wQ2FsbGJhY2soKTplLmpzb25wQ2FsbGJhY2ssYT9lW2FdPWVbYV0ucmVwbGFjZShZdCxcIiQxXCIrcik6ITEhPT1lLmpzb25wJiYoZS51cmwrPShTdC50ZXN0KGUudXJsKT9cIiZcIjpcIj9cIikrZS5qc29ucCtcIj1cIityKSxlLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBvfHxrLmVycm9yKHIrXCIgd2FzIG5vdCBjYWxsZWRcIiksb1swXX0sZS5kYXRhVHlwZXNbMF09XCJqc29uXCIsaT1DW3JdLENbcl09ZnVuY3Rpb24oKXtvPWFyZ3VtZW50c30sbi5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1pP2soQykucmVtb3ZlUHJvcChyKTpDW3JdPWksZVtyXSYmKGUuanNvbnBDYWxsYmFjaz10Lmpzb25wQ2FsbGJhY2ssR3QucHVzaChyKSksbyYmbShpKSYmaShvWzBdKSxvPWk9dm9pZCAwfSksXCJzY3JpcHRcIn0pLHkuY3JlYXRlSFRNTERvY3VtZW50PSgoVnQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keSkuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09VnQuY2hpbGROb2Rlcy5sZW5ndGgpLGsucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT9bXTooXCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHR8fCh5LmNyZWF0ZUhUTUxEb2N1bWVudD8oKHI9KHQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikpLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKS5ocmVmPUUubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQocikpOnQ9RSksbz0hbiYmW10sKGk9RC5leGVjKGUpKT9bdC5jcmVhdGVFbGVtZW50KGlbMV0pXTooaT13ZShbZV0sdCxvKSxvJiZvLmxlbmd0aCYmayhvKS5yZW1vdmUoKSxrLm1lcmdlKFtdLGkuY2hpbGROb2RlcykpKTt2YXIgcixpLG99LGsuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZihcIiBcIik7cmV0dXJuLTE8cyYmKHI9bXQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLG0odCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSwwPGEubGVuZ3RoJiZrLmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLGEuaHRtbChyP2soXCI8ZGl2PlwiKS5hcHBlbmQoay5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSxrLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe2suZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxrLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbih0KXtyZXR1cm4gay5ncmVwKGsudGltZXJzLGZ1bmN0aW9uKGUpe3JldHVybiB0PT09ZS5lbGVtfSkubGVuZ3RofSxrLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD1rLmNzcyhlLFwicG9zaXRpb25cIiksYz1rKGUpLGY9e307XCJzdGF0aWNcIj09PWwmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIikscz1jLm9mZnNldCgpLG89ay5jc3MoZSxcInRvcFwiKSx1PWsuY3NzKGUsXCJsZWZ0XCIpLChcImFic29sdXRlXCI9PT1sfHxcImZpeGVkXCI9PT1sKSYmLTE8KG8rdSkuaW5kZXhPZihcImF1dG9cIik/KGE9KHI9Yy5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxtKHQpJiYodD10LmNhbGwoZSxuLGsuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihmLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihmLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGYpOmMuY3NzKGYpfX0say5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbih0KXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2sub2Zmc2V0LnNldE9mZnNldCh0aGlzLHQsZSl9KTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PWsuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1yLm93bmVyRG9jdW1lbnQsZT1yLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT1rLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PXImJjE9PT1lLm5vZGVUeXBlJiYoKGk9ayhlKS5vZmZzZXQoKSkudG9wKz1rLmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksaS5sZWZ0Kz1rLmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLWsuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtaS5sZWZ0LWsuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT1rLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8aWV9KX19KSxrLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKHQsaSl7dmFyIG89XCJwYWdlWU9mZnNldFwiPT09aTtrLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiBfKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKHgoZSk/cj1lOjk9PT1lLm5vZGVUeXBlJiYocj1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1uKXJldHVybiByP3JbaV06ZVt0XTtyP3Iuc2Nyb2xsVG8obz9yLnBhZ2VYT2Zmc2V0Om4sbz9uOnIucGFnZVlPZmZzZXQpOmVbdF09bn0sdCxlLGFyZ3VtZW50cy5sZW5ndGgpfX0pLGsuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtrLmNzc0hvb2tzW25dPXplKHkucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9X2UoZSxuKSwkZS50ZXN0KHQpP2soZSkucG9zaXRpb24oKVtuXStcInB4XCI6dH0pfSksay5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEscyl7ay5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6cyxcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihyLG8pe2suZm5bb109ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxpPXJ8fCghMD09PWV8fCEwPT09dD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBfKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO3JldHVybiB4KGUpPzA9PT1vLmluZGV4T2YoXCJvdXRlclwiKT9lW1wiaW5uZXJcIithXTplLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1lLm5vZGVUeXBlPyhyPWUuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGUuYm9keVtcInNjcm9sbFwiK2FdLHJbXCJzY3JvbGxcIithXSxlLmJvZHlbXCJvZmZzZXRcIithXSxyW1wib2Zmc2V0XCIrYV0scltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09bj9rLmNzcyhlLHQsaSk6ay5zdHlsZShlLHQsbixpKX0scyxuP2U6dm9pZCAwLG4pfX0pfSksay5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLG4pe2suZm5bbl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMDxhcmd1bWVudHMubGVuZ3RoP3RoaXMub24obixudWxsLGUsdCk6dGhpcy50cmlnZ2VyKG4pfX0pLGsuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX19KSxrLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfX0pLGsucHJveHk9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9biksbShlKSlyZXR1cm4gcj1zLmNhbGwoYXJndW1lbnRzLDIpLChpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodHx8dGhpcyxyLmNvbmNhdChzLmNhbGwoYXJndW1lbnRzKSkpfSkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHxrLmd1aWQrKyxpfSxrLmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP2sucmVhZHlXYWl0Kys6ay5yZWFkeSghMCl9LGsuaXNBcnJheT1BcnJheS5pc0FycmF5LGsucGFyc2VKU09OPUpTT04ucGFyc2Usay5ub2RlTmFtZT1BLGsuaXNGdW5jdGlvbj1tLGsuaXNXaW5kb3c9eCxrLmNhbWVsQ2FzZT1WLGsudHlwZT13LGsubm93PURhdGUubm93LGsuaXNOdW1lcmljPWZ1bmN0aW9uKGUpe3ZhciB0PWsudHlwZShlKTtyZXR1cm4oXCJudW1iZXJcIj09PXR8fFwic3RyaW5nXCI9PT10KSYmIWlzTmFOKGUtcGFyc2VGbG9hdChlKSl9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4ga30pO3ZhciBRdD1DLmpRdWVyeSxKdD1DLiQ7cmV0dXJuIGsubm9Db25mbGljdD1mdW5jdGlvbihlKXtyZXR1cm4gQy4kPT09ayYmKEMuJD1KdCksZSYmQy5qUXVlcnk9PT1rJiYoQy5qUXVlcnk9UXQpLGt9LGV8fChDLmpRdWVyeT1DLiQ9ayksa30pO1xuIiwiLy9mZ25hc3MuZ2l0aHViLmNvbS9zcGluLmpzI3YyLjAuMVxuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoYik6YS5TcGlubmVyPWIoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGEoYSxiKXt2YXIgYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXx8XCJkaXZcIik7Zm9yKGMgaW4gYilkW2NdPWJbY107cmV0dXJuIGR9ZnVuY3Rpb24gYihhKXtmb3IodmFyIGI9MSxjPWFyZ3VtZW50cy5sZW5ndGg7Yz5iO2IrKylhLmFwcGVuZENoaWxkKGFyZ3VtZW50c1tiXSk7cmV0dXJuIGF9ZnVuY3Rpb24gYyhhLGIsYyxkKXt2YXIgZT1bXCJvcGFjaXR5XCIsYix+figxMDAqYSksYyxkXS5qb2luKFwiLVwiKSxmPS4wMStjL2QqMTAwLGc9TWF0aC5tYXgoMS0oMS1hKS9iKigxMDAtZiksYSksaD1qLnN1YnN0cmluZygwLGouaW5kZXhPZihcIkFuaW1hdGlvblwiKSkudG9Mb3dlckNhc2UoKSxpPWgmJlwiLVwiK2grXCItXCJ8fFwiXCI7cmV0dXJuIGxbZV18fChtLmluc2VydFJ1bGUoXCJAXCIraStcImtleWZyYW1lcyBcIitlK1wiezAle29wYWNpdHk6XCIrZytcIn1cIitmK1wiJXtvcGFjaXR5OlwiK2ErXCJ9XCIrKGYrLjAxKStcIiV7b3BhY2l0eToxfVwiKyhmK2IpJTEwMCtcIiV7b3BhY2l0eTpcIithK1wifTEwMCV7b3BhY2l0eTpcIitnK1wifX1cIixtLmNzc1J1bGVzLmxlbmd0aCksbFtlXT0xKSxlfWZ1bmN0aW9uIGQoYSxiKXt2YXIgYyxkLGU9YS5zdHlsZTtmb3IoYj1iLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksZD0wO2Q8ay5sZW5ndGg7ZCsrKWlmKGM9a1tkXStiLHZvaWQgMCE9PWVbY10pcmV0dXJuIGM7cmV0dXJuIHZvaWQgMCE9PWVbYl0/Yjp2b2lkIDB9ZnVuY3Rpb24gZShhLGIpe2Zvcih2YXIgYyBpbiBiKWEuc3R5bGVbZChhLGMpfHxjXT1iW2NdO3JldHVybiBhfWZ1bmN0aW9uIGYoYSl7Zm9yKHZhciBiPTE7Yjxhcmd1bWVudHMubGVuZ3RoO2IrKyl7dmFyIGM9YXJndW1lbnRzW2JdO2Zvcih2YXIgZCBpbiBjKXZvaWQgMD09PWFbZF0mJihhW2RdPWNbZF0pfXJldHVybiBhfWZ1bmN0aW9uIGcoYSxiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYT9hOmFbYiVhLmxlbmd0aF19ZnVuY3Rpb24gaChhKXt0aGlzLm9wdHM9ZihhfHx7fSxoLmRlZmF1bHRzLG4pfWZ1bmN0aW9uIGkoKXtmdW5jdGlvbiBjKGIsYyl7cmV0dXJuIGEoXCI8XCIrYisnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInNwaW4tdm1sXCI+JyxjKX1tLmFkZFJ1bGUoXCIuc3Bpbi12bWxcIixcImJlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpXCIpLGgucHJvdG90eXBlLmxpbmVzPWZ1bmN0aW9uKGEsZCl7ZnVuY3Rpb24gZigpe3JldHVybiBlKGMoXCJncm91cFwiLHtjb29yZHNpemU6aytcIiBcIitrLGNvb3Jkb3JpZ2luOi1qK1wiIFwiKy1qfSkse3dpZHRoOmssaGVpZ2h0Omt9KX1mdW5jdGlvbiBoKGEsaCxpKXtiKG0sYihlKGYoKSx7cm90YXRpb246MzYwL2QubGluZXMqYStcImRlZ1wiLGxlZnQ6fn5ofSksYihlKGMoXCJyb3VuZHJlY3RcIix7YXJjc2l6ZTpkLmNvcm5lcnN9KSx7d2lkdGg6aixoZWlnaHQ6ZC53aWR0aCxsZWZ0OmQucmFkaXVzLHRvcDotZC53aWR0aD4+MSxmaWx0ZXI6aX0pLGMoXCJmaWxsXCIse2NvbG9yOmcoZC5jb2xvcixhKSxvcGFjaXR5OmQub3BhY2l0eX0pLGMoXCJzdHJva2VcIix7b3BhY2l0eTowfSkpKSl9dmFyIGksaj1kLmxlbmd0aCtkLndpZHRoLGs9MipqLGw9MiotKGQud2lkdGgrZC5sZW5ndGgpK1wicHhcIixtPWUoZigpLHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOmwsbGVmdDpsfSk7aWYoZC5zaGFkb3cpZm9yKGk9MTtpPD1kLmxpbmVzO2krKyloKGksLTIsXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmx1cihwaXhlbHJhZGl1cz0yLG1ha2VzaGFkb3c9MSxzaGFkb3dvcGFjaXR5PS4zKVwiKTtmb3IoaT0xO2k8PWQubGluZXM7aSsrKWgoaSk7cmV0dXJuIGIoYSxtKX0saC5wcm90b3R5cGUub3BhY2l0eT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLmZpcnN0Q2hpbGQ7ZD1kLnNoYWRvdyYmZC5saW5lc3x8MCxlJiZiK2Q8ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZS5jaGlsZE5vZGVzW2IrZF0sZT1lJiZlLmZpcnN0Q2hpbGQsZT1lJiZlLmZpcnN0Q2hpbGQsZSYmKGUub3BhY2l0eT1jKSl9fXZhciBqLGs9W1wid2Via2l0XCIsXCJNb3pcIixcIm1zXCIsXCJPXCJdLGw9e30sbT1mdW5jdGlvbigpe3ZhciBjPWEoXCJzdHlsZVwiLHt0eXBlOlwidGV4dC9jc3NcIn0pO3JldHVybiBiKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxjKSxjLnNoZWV0fHxjLnN0eWxlU2hlZXR9KCksbj17bGluZXM6MTIsbGVuZ3RoOjcsd2lkdGg6NSxyYWRpdXM6MTAscm90YXRlOjAsY29ybmVyczoxLGNvbG9yOlwiIzAwMFwiLGRpcmVjdGlvbjoxLHNwZWVkOjEsdHJhaWw6MTAwLG9wYWNpdHk6LjI1LGZwczoyMCx6SW5kZXg6MmU5LGNsYXNzTmFtZTpcInNwaW5uZXJcIix0b3A6XCI1MCVcIixsZWZ0OlwiNTAlXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifTtoLmRlZmF1bHRzPXt9LGYoaC5wcm90b3R5cGUse3NwaW46ZnVuY3Rpb24oYil7dGhpcy5zdG9wKCk7e3ZhciBjPXRoaXMsZD1jLm9wdHMsZj1jLmVsPWUoYSgwLHtjbGFzc05hbWU6ZC5jbGFzc05hbWV9KSx7cG9zaXRpb246ZC5wb3NpdGlvbix3aWR0aDowLHpJbmRleDpkLnpJbmRleH0pO2QucmFkaXVzK2QubGVuZ3RoK2Qud2lkdGh9aWYoZShmLHtsZWZ0OmQubGVmdCx0b3A6ZC50b3B9KSxiJiZiLmluc2VydEJlZm9yZShmLGIuZmlyc3RDaGlsZHx8bnVsbCksZi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJwcm9ncmVzc2JhclwiKSxjLmxpbmVzKGYsYy5vcHRzKSwhail7dmFyIGcsaD0wLGk9KGQubGluZXMtMSkqKDEtZC5kaXJlY3Rpb24pLzIsaz1kLmZwcyxsPWsvZC5zcGVlZCxtPSgxLWQub3BhY2l0eSkvKGwqZC50cmFpbC8xMDApLG49bC9kLmxpbmVzOyFmdW5jdGlvbiBvKCl7aCsrO2Zvcih2YXIgYT0wO2E8ZC5saW5lczthKyspZz1NYXRoLm1heCgxLShoKyhkLmxpbmVzLWEpKm4pJWwqbSxkLm9wYWNpdHkpLGMub3BhY2l0eShmLGEqZC5kaXJlY3Rpb24raSxnLGQpO2MudGltZW91dD1jLmVsJiZzZXRUaW1lb3V0KG8sfn4oMWUzL2spKX0oKX1yZXR1cm4gY30sc3RvcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZWw7cmV0dXJuIGEmJihjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KSxhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKSx0aGlzLmVsPXZvaWQgMCksdGhpc30sbGluZXM6ZnVuY3Rpb24oZCxmKXtmdW5jdGlvbiBoKGIsYyl7cmV0dXJuIGUoYSgpLHtwb3NpdGlvbjpcImFic29sdXRlXCIsd2lkdGg6Zi5sZW5ndGgrZi53aWR0aCtcInB4XCIsaGVpZ2h0OmYud2lkdGgrXCJweFwiLGJhY2tncm91bmQ6Yixib3hTaGFkb3c6Yyx0cmFuc2Zvcm1PcmlnaW46XCJsZWZ0XCIsdHJhbnNmb3JtOlwicm90YXRlKFwiK35+KDM2MC9mLmxpbmVzKmsrZi5yb3RhdGUpK1wiZGVnKSB0cmFuc2xhdGUoXCIrZi5yYWRpdXMrXCJweCwwKVwiLGJvcmRlclJhZGl1czooZi5jb3JuZXJzKmYud2lkdGg+PjEpK1wicHhcIn0pfWZvcih2YXIgaSxrPTAsbD0oZi5saW5lcy0xKSooMS1mLmRpcmVjdGlvbikvMjtrPGYubGluZXM7aysrKWk9ZShhKCkse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6MSt+KGYud2lkdGgvMikrXCJweFwiLHRyYW5zZm9ybTpmLmh3YWNjZWw/XCJ0cmFuc2xhdGUzZCgwLDAsMClcIjpcIlwiLG9wYWNpdHk6Zi5vcGFjaXR5LGFuaW1hdGlvbjpqJiZjKGYub3BhY2l0eSxmLnRyYWlsLGwraypmLmRpcmVjdGlvbixmLmxpbmVzKStcIiBcIisxL2Yuc3BlZWQrXCJzIGxpbmVhciBpbmZpbml0ZVwifSksZi5zaGFkb3cmJmIoaSxlKGgoXCIjMDAwXCIsXCIwIDAgNHB4ICMwMDBcIikse3RvcDpcIjJweFwifSkpLGIoZCxiKGksaChnKGYuY29sb3IsayksXCIwIDAgMXB4IHJnYmEoMCwwLDAsLjEpXCIpKSk7cmV0dXJuIGR9LG9wYWNpdHk6ZnVuY3Rpb24oYSxiLGMpe2I8YS5jaGlsZE5vZGVzLmxlbmd0aCYmKGEuY2hpbGROb2Rlc1tiXS5zdHlsZS5vcGFjaXR5PWMpfX0pO3ZhciBvPWUoYShcImdyb3VwXCIpLHtiZWhhdmlvcjpcInVybCgjZGVmYXVsdCNWTUwpXCJ9KTtyZXR1cm4hZChvLFwidHJhbnNmb3JtXCIpJiZvLmFkaj9pKCk6aj1kKG8sXCJhbmltYXRpb25cIiksaH0pOyIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8vIENyZWF0ZSBuYW1lc3BhY2VcbmlmICh0eXBlb2Ygd2luZG93Lk1vemlsbGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1vemlsbGEgPSB7fTtcbn1cblxuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBVdGlscyA9IHt9O1xuXG4gICAgLy8gUmVwbGFjZSBHb29nbGUgUGxheSBsaW5rcyBvbiBBbmRyb2lkIGRldmljZXMgdG8gbGV0IHRoZW0gb3BlbiB0aGUgbWFya2V0cGxhY2UgYXBwXG4gICAgVXRpbHMuaW5pdE1vYmlsZURvd25sb2FkTGlua3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNpdGUucGxhdGZvcm0gPT09ICdhbmRyb2lkJykge1xuICAgICAgICAgICAgdmFyIHBsYXlMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL1wiXScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGF5TGlua3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGxheUxpbmsgPSBwbGF5TGlua3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIG9sZEhyZWYgPSBwbGF5TGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3SHJlZiA9IG9sZEhyZWYucmVwbGFjZSgnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy8nLCAnbWFya2V0Oi8vJyk7XG4gICAgICAgICAgICAgICAgcGxheUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbmV3SHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQnVnIDEyNjQ4NDM6IGxpbmsgdG8gQ2hpbmEgYnVpbGQgb2YgRng0QSwgZm9yIGRpc3BsYXkgd2l0aGluIEZ4IENoaW5hIHJlcGFja1xuICAgIFV0aWxzLm1heWJlU3dpdGNoVG9EaXN0RG93bmxvYWRMaW5rcyA9IGZ1bmN0aW9uKGNsaWVudCkge1xuICAgICAgICBpZiAoIWNsaWVudC5kaXN0cmlidXRpb24gfHwgY2xpZW50LmRpc3RyaWJ1dGlvbiA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlzdHJpYnV0aW9uID0gY2xpZW50LmRpc3RyaWJ1dGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2RhdGEtJyArIGRpc3RyaWJ1dGlvbiArICctbGlua10nKTtcbiAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLScgKyBkaXN0cmlidXRpb24gKyAnLWxpbmtdJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkaXN0cmlidXRpb25MaW5rID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBkaXN0cmlidXRpb24gKyAnLWxpbmsnKTtcbiAgICAgICAgICAgIGxpbmtzW2ldLnNldEF0dHJpYnV0ZSgnaHJlZicsIGRpc3RyaWJ1dGlvbkxpbmspO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaW1hZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgZGlzdHJpYnV0aW9uU3JjID0gaW1hZ2VzW2pdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgZGlzdHJpYnV0aW9uICsgJy1saW5rJyk7XG4gICAgICAgICAgICBpbWFnZXNbal0uc2V0QXR0cmlidXRlKCdzcmMnLCBkaXN0cmlidXRpb25TcmMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNsaWVudC1zaWRlIHJlZGlyZWN0cyAoaGFuZHkgZm9yIHRlc3RpbmcpXG4gICAgVXRpbHMuZG9SZWRpcmVjdCA9IGZ1bmN0aW9uKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgdGV4dCB0cmFuc2xhdGlvbiBmdW5jdGlvbiB1c2luZyAjc3RyaW5ncyBlbGVtZW50LlxuICAgIC8vIFRPRE86IE1vdmUgdG8gZG9jc1xuICAgIC8vIEluIG9yZGVyIHRvIHVzZSBpdCwgeW91IG5lZWQgYSBibG9jayBzdHJpbmdfZGF0YSBiaXQgaW5zaWRlIHlvdXIgdGVtcGxhdGUsXG4gICAgLy8gdGhlbiwgZWFjaCBrZXkgbmFtZSBuZWVkcyB0byBiZSBwcmVjZWRlZCBieSBkYXRhLSBhcyB0aGlzIHVzZXMgZGF0YSBhdHRyaWJ1dGVzXG4gICAgLy8gdG8gd29yay4gQWZ0ZXIgdGhpcywgeW91IGNhbiBhY2Nlc3MgYWxsIHN0cmluZ3MgZGVmaW5lZCBpbnNpZGUgdGhlXG4gICAgLy8gc3RyaW5nX2RhdGEgYmxvY2sgaW4gSlMgdXNpbmcgTW96aWxsYS5VdGlscy50cmFucygna2V5LW9mLXN0cmluZycpOyBUaGFuayBAbWtlbGx5XG4gICAgdmFyIF9zdHJpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmluZ3MnKTtcbiAgICBVdGlscy50cmFucyA9IGZ1bmN0aW9uKHN0cmluZ0lkKSB7XG4gICAgICAgIGlmIChfc3RyaW5ncykge1xuICAgICAgICAgICAgcmV0dXJuIF9zdHJpbmdzLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgc3RyaW5nSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuTW96aWxsYS5VdGlscyA9IFV0aWxzO1xuXG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyogZ2xvYmFsIFNwaW5uZXIgKi9cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLypcbiAgICAgKiBFeHBhbmQgZm9vdGVyIGVtYWlsIGZvcm0gb24gaW5wdXQgZm9jdXMgb3Igc3VibWl0IGlmIGRldGFpbHMgYXJlbid0IHZpc2libGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbml0Rm9vdGVyRW1haWxGb3JtICgpIHtcbiAgICAgICAgdmFyICRzdWJtaXRCdXR0b24gPSAkKCcuZm9vdGVyLW5ld3NsZXR0ZXItZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0nKTtcbiAgICAgICAgdmFyICRmb3JtRGV0YWlscyA9ICQoJy5mb290ZXItbmV3c2xldHRlci1mb3JtICNmb3JtLWRldGFpbHMnKTtcbiAgICAgICAgdmFyICRmb3JtRGV0YWlsc1NlY29uZGFyeSA9ICQoJy5mb290ZXItbmV3c2xldHRlci1mb3JtIC5mb3JtLWRldGFpbHMnKTtcblxuICAgICAgICBmdW5jdGlvbiBmb290ZXJFbWFpbEZvcm1TaG93RGV0YWlscygpIHtcbiAgICAgICAgICAgIGlmICghJGZvcm1EZXRhaWxzLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgJGZvcm1EZXRhaWxzLnNsaWRlRG93bignbm9ybWFsJyk7XG4gICAgICAgICAgICAgICAgJGZvcm1EZXRhaWxzU2Vjb25kYXJ5LnNsaWRlRG93bignbm9ybWFsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuZm9vdGVyLW5ld3NsZXR0ZXItZm9ybScpLm9uKCdmb2N1cycsICdzZWxlY3QsIGlucHV0JywgZm9vdGVyRW1haWxGb3JtU2hvd0RldGFpbHMpO1xuXG4gICAgICAgICRzdWJtaXRCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICghJGZvcm1EZXRhaWxzLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGZvb3RlckVtYWlsRm9ybVNob3dEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRGb290ZXJFbWFpbEZvcm0oKTtcblxuICAgIC8qXG4gICAgICogR2V0IHRoZSBuZXdzbGV0dGVyIG5hbWUgZm9yIHRyYWNraW5nIGluIEdBXG4gICAgICogQHBhcmFtIGpRdWVyeSBmb3JtIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE5ld3NsZXR0ZXJOYW1lICgkZm9ybSkge1xuICAgICAgICB2YXIgJGlucHV0ID0gJGZvcm0uY2hpbGRyZW4oJ2lucHV0W25hbWU9bmV3c2xldHRlcnNdJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIG5hbWU9bmV3c2xldHRlciBpbnB1dCBmaWVsZCwgd2UgY2FuIGdldCB0aGUgbmV3c2xldHRlclxuICAgICAgICAvLyBmcm9tIHRoYXQuIElmIG5vdCwgYXNzdW1lIHdlJ3ZlIGdvdCBvbmUgb2YgdGhlIGZvcm1zIHRoYXQgc3Vic2NyaWJlc1xuICAgICAgICAvLyB0byB0aGUgZm91bmRhdGlvbiBuZXdzbGV0dGVyLlxuICAgICAgICBpZiAoJGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICdSZWdpc3RlcmVkIGZvciBGaXJlZm94IFVwZGF0ZXMnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkaW5wdXQudmFsKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTdGFuZGFyZCBuZXdzbGV0dGVyIGZvcm0gdXNlcyBhamF4IHN1Ym1pc3Npb25cbiAgICAgKi9cbiAgICAkKCcjbmV3c2xldHRlci1mb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgJGVycm9ycyA9ICQoJyNmb290ZXItZW1haWwtZXJyb3JzJyk7XG4gICAgICAgIHZhciAkZXJyb3JsaXN0ID0gJGVycm9ycy5maW5kKCd1bC5lcnJvcmxpc3QnKTtcbiAgICAgICAgdmFyICRzdWJtaXRidXR0b24gPSAkKCcjZm9vdGVyX2VtYWlsX3N1Ym1pdCcpO1xuICAgICAgICB2YXIgJHNwaW5uZXJUYXJnZXQgPSAkKCcjbmV3c2xldHRlci1zcGlubmVyJyk7XG4gICAgICAgIHZhciBzcGlubmVyQ29sb3IgPSAnIzAwMCc7IC8vIGRlZmF1bHQgdG8gYmxhY2tcblxuICAgICAgICAvLyBsb29rIGZvciBjdXN0b20gc3Bpbm5lciBjb2xvclxuICAgICAgICBpZiAoJHNlbGYuZGF0YSgnc3Bpbm5lci1jb2xvcicpKSB7XG4gICAgICAgICAgICBzcGlubmVyQ29sb3IgPSAkc2VsZi5kYXRhKCdzcGlubmVyLWNvbG9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3Bpbm5lciA9IG5ldyBTcGlubmVyKHtcbiAgICAgICAgICAgIGxpbmVzOiAxMiwgLy8gVGhlIG51bWJlciBvZiBsaW5lcyB0byBkcmF3XG4gICAgICAgICAgICBsZW5ndGg6IDQsIC8vIFRoZSBsZW5ndGggb2YgZWFjaCBsaW5lXG4gICAgICAgICAgICB3aWR0aDogMiwgLy8gVGhlIGxpbmUgdGhpY2tuZXNzXG4gICAgICAgICAgICByYWRpdXM6IDQsIC8vIFRoZSByYWRpdXMgb2YgdGhlIGlubmVyIGNpcmNsZVxuICAgICAgICAgICAgY29ybmVyczogMCwgLy8gQ29ybmVyIHJvdW5kbmVzcyAoMC4uMSlcbiAgICAgICAgICAgIHJvdGF0ZTogMCwgLy8gVGhlIHJvdGF0aW9uIG9mZnNldFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAxLCAvLyAxOiBjbG9ja3dpc2UsIC0xOiBjb3VudGVyY2xvY2t3aXNlXG4gICAgICAgICAgICBjb2xvcjogc3Bpbm5lckNvbG9yLCAvLyAjcmdiIG9yICNycmdnYmIgb3IgYXJyYXkgb2YgY29sb3JzXG4gICAgICAgICAgICBzcGVlZDogMSwgLy8gUm91bmRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIHRyYWlsOiA2MCwgLy8gQWZ0ZXJnbG93IHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIHNoYWRvdzogZmFsc2UsIC8vIFdoZXRoZXIgdG8gcmVuZGVyIGEgc2hhZG93XG4gICAgICAgICAgICBod2FjY2VsOiB0cnVlIC8vIFdoZXRoZXIgdG8gdXNlIGhhcmR3YXJlIGFjY2VsZXJhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICAkZXJyb3JzLmhpZGUoKTtcbiAgICAgICAgJGVycm9ybGlzdC5lbXB0eSgpO1xuXG4gICAgICAgIC8vIGhhdmUgdG8gY29sbGVjdCBkYXRhIGJlZm9yZSBkaXNhYmxpbmcgaW5wdXRzXG4gICAgICAgIHZhciBmb3JtRGF0YSA9ICRzZWxmLnNlcmlhbGl6ZSgpO1xuICAgICAgICBkaXNhYmxlRm9ybSgpO1xuXG4gICAgICAgICQuYWpheCgkc2VsZi5hdHRyKCdhY3Rpb24nKSwge1xuICAgICAgICAgICAgJ21ldGhvZCc6ICdwb3N0JyxcbiAgICAgICAgICAgICdkYXRhJzogZm9ybURhdGEsXG4gICAgICAgICAgICAnZGF0YVR5cGUnOiAnanNvbidcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHZhciAkdGhhbmtzID0gJCgnI25ld3NsZXR0ZXItZm9ybS10aGFua3lvdScpO1xuICAgICAgICAgICAgICAgIHZhciBmb3JtSGVpZ2h0ID0gJHNlbGYuY3NzKCdoZWlnaHQnKTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbWluLWhlaWdodCBvZiB0aGUgdGhhbmsgeW91IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgaGVpZ2h0IG9mIHRoZSBmb3JtIHRvIHN0b3AgcGFnZSBoZWlnaHRcbiAgICAgICAgICAgICAgICAvLyBqdW1waW5nIG9uIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICAkdGhhbmtzLmNzcygnbWluLWhlaWdodCcsIGZvcm1IZWlnaHQpO1xuICAgICAgICAgICAgICAgICRzZWxmLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIGVuYWJsZUZvcm0gdG8gY2FuY2VsIGludGVydmFsIGFuZCBlbmFibGUgZm9ybSBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAvLyBpZiBwYWdlIGlzIHJlZnJlc2hlZCBhbmQgZm9ybSBlbGVtZW50cyBhcmUgZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgLy8gdGhleSB3aWxsIGJlIGRpc2FibGVkIGFmdGVyIHJlZnJlc2guXG4gICAgICAgICAgICAgICAgZW5hYmxlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgdGhhbmsgeW91IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAkdGhhbmtzLnNob3coKTtcblxuICAgICAgICAgICAgICAgIC8vIHRyYWNrIHNpZ251cCBpbiBHQVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld3NsZXR0ZXIgPSBnZXROZXdzbGV0dGVyTmFtZSgkc2VsZik7XG4gICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogJ25ld3NsZXR0ZXItc2lnbnVwLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAnbmV3c2xldHRlcic6IG5ld3NsZXR0ZXJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmVycm9ycykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5lcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgJGVycm9ybGlzdC5hcHBlbmQoJzxsaT4nICsgZGF0YS5lcnJvcnNbaV0gKyAnPC9saT4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGVycm9ycy5zaG93KCk7XG4gICAgICAgICAgICAgICAgZW5hYmxlRm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHNob3VsZG4ndCBuZWVkIGwxMG4uIFRoaXMgc2hvdWxkIGFsbW9zdCBuZXZlciBoYXBwZW4uXG4gICAgICAgICAgICAkZXJyb3JsaXN0LmFwcGVuZCgnPGxpPkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXI8L2xpPicpO1xuICAgICAgICAgICAgJGVycm9ycy5zaG93KCk7XG4gICAgICAgICAgICBlbmFibGVGb3JtKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVGb3JtKCkge1xuICAgICAgICAgICAgJHNlbGYuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICRzZWxmLmZpbmQoJ2lucHV0LHNlbGVjdCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAkc3VibWl0YnV0dG9uLmFkZENsYXNzKCdpbnNlbnNpdGl2ZScpO1xuICAgICAgICAgICAgc3Bpbm5lci5zcGluKCRzcGlubmVyVGFyZ2V0LnNob3coKVswXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBlbmFibGVGb3JtKCkge1xuICAgICAgICAgICAgJHNlbGYucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICRzZWxmLmZpbmQoJ2lucHV0LHNlbGVjdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJHN1Ym1pdGJ1dHRvbi5yZW1vdmVDbGFzcygnaW5zZW5zaXRpdmUnKTtcbiAgICAgICAgICAgIHNwaW5uZXIuc3RvcCgpO1xuICAgICAgICAgICAgJHNwaW5uZXJUYXJnZXQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8vIENyZWF0ZSBuYW1lc3BhY2VcbmlmICh0eXBlb2Ygd2luZG93Lk1vemlsbGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1vemlsbGEgPSB7fTtcbn1cblxuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgaW5mb3JtYXRpb24gb24gdGhlIHVzZXIncyBicm93c2luZyBlbnZpcm9ubWVudCwgaW5jbHVkaW5nIHRoZSBwbGF0Zm9ybSBhbmQgYnJvd3NlciBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvR2Vja29fdXNlcl9hZ2VudF9zdHJpbmdfcmVmZXJlbmNlfVxuICAgICAqL1xuICAgIHZhciBDbGllbnQgPSB7fTtcbiAgICB2YXIgRnhBTGFzdFN1cHBvcnRlZCA9IDQwOyAvLyB0aGUgRnhBY2NvdW50cyB0ZWFtIHByb3ZpZGVkIHRoaXMgbnVtYmVyIGluIGJ1ZyAxNDU3MDA0I2MyMSB0aGV5IGRvbid0IHdhbnQgdG8gc3VwcG9ydCBhbnl0aGluZyBiZW5lYXRoIGl0XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3Qgd2hldGhlciB0aGUgdXNlcidzIGJyb3dzZXIgaXMgRmlyZWZveCBvbiBhbnkgcGxhdGZvcm0uIFRoaXMgaW5jbHVkZXMgV2ViS2l0LWJhc2VkIEZpcmVmb3ggZm9yIGlPUy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1YSAtIGJyb3dzZXIncyB1c2VyIGFnZW50IHN0cmluZywgbmF2aWdhdG9yLnVzZXJBZ2VudCBpcyB1c2VkIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHRcbiAgICAgKi9cbiAgICBDbGllbnQuX2lzRmlyZWZveCA9IGZ1bmN0aW9uICh1YSkge1xuICAgICAgICB1YSA9IHVhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgICAgcmV0dXJuIC9cXHMoRmlyZWZveHxGeGlPUykvLnRlc3QodWEpICYmICFDbGllbnQuX2lzTGlrZUZpcmVmb3godWEpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3Qgd2hldGhlciB0aGUgdXNlcidzIGJyb3dzZXIgaXMgRmlyZWZveCBmb3IgV2luZG93cywgT1MgWCBvciBMaW51eC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSB1YSAtIGJyb3dzZXIncyB1c2VyIGFnZW50IHN0cmluZywgbmF2aWdhdG9yLnVzZXJBZ2VudCBpcyB1c2VkIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHRcbiAgICAgKi9cbiAgICBDbGllbnQuX2lzRmlyZWZveERlc2t0b3AgPSBmdW5jdGlvbiAodWEpIHtcbiAgICAgICAgdWEgPSB1YSB8fCBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgICAgIHJldHVybiAvXFxzRmlyZWZveC8udGVzdCh1YSkgJiYgIS9Nb2JpbGV8VGFibGV0fEZlbm5lYy8udGVzdCh1YSkgJiYgIUNsaWVudC5faXNMaWtlRmlyZWZveCh1YSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCB3aGV0aGVyIHRoZSB1c2VyJ3MgYnJvd3NlciBpcyBGaXJlZm94IGZvciBBbmRyb2lkLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVhIC0gYnJvd3NlcidzIHVzZXIgYWdlbnQgc3RyaW5nLCBuYXZpZ2F0b3IudXNlckFnZW50IGlzIHVzZWQgaWYgbm90IHNwZWNpZmllZFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICAgICAqL1xuICAgIENsaWVudC5faXNGaXJlZm94QW5kcm9pZCA9IGZ1bmN0aW9uICh1YSkge1xuICAgICAgICB1YSA9IHVhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgICAgcmV0dXJuIC9cXHNGaXJlZm94Ly50ZXN0KHVhKSAmJiAvQW5kcm9pZC8udGVzdCh1YSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCB3aGV0aGVyIHRoZSB1c2VyJ3MgYnJvd3NlciBpcyBGaXJlZm94IGZvciBpT1MuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdWEgLSBicm93c2VyJ3MgdXNlciBhZ2VudCBzdHJpbmcsIG5hdmlnYXRvci51c2VyQWdlbnQgaXMgdXNlZCBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gICAgICovXG4gICAgQ2xpZW50Ll9pc0ZpcmVmb3hpT1MgPSBmdW5jdGlvbiAodWEpIHtcbiAgICAgICAgdWEgPSB1YSB8fCBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgICAgIHJldHVybiAvRnhpT1MvLnRlc3QodWEpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3Qgd2hldGhlciB0aGUgdXNlcidzIGJyb3dzZXIgaXMgdGhlIEJyb3dzZXIgYXBwIG9uIEZpcmVmb3ggT1MuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdWEgLSBicm93c2VyJ3MgdXNlciBhZ2VudCBzdHJpbmcsIG5hdmlnYXRvci51c2VyQWdlbnQgaXMgdXNlZCBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBwZiAtIGJyb3dzZXIncyBwbGF0Zm9ybSBuYW1lLCBuYXZpZ2F0b3IucGxhdGZvcm0gaXMgdXNlZCBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0XG4gICAgICovXG4gICAgQ2xpZW50Ll9pc0ZpcmVmb3hGeE9TID0gZnVuY3Rpb24gKHVhLCBwZikge1xuICAgICAgICB1YSA9IHVhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgIHBmID0gKHBmID09PSAnJykgPyAnJyA6IHBmIHx8IG5hdmlnYXRvci5wbGF0Zm9ybTtcblxuICAgICAgICByZXR1cm4gL0ZpcmVmb3gvLnRlc3QodWEpICYmIHBmID09PSAnJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IHdoZXRoZXIgdGhlIHVzZXIncyBicm93c2VyIGlzIEdlY2tvLWJhc2VkLiBVc2VkIG9uIHRoZSBwbHVnaW5jaGVjayBwYWdlIHRvIHN1cHBvcnQgYWxsIEdlY2tvIGJyb3dzZXJzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVhIC0gYnJvd3NlcidzIHVzZXIgYWdlbnQgc3RyaW5nLCBuYXZpZ2F0b3IudXNlckFnZW50IGlzIHVzZWQgaWYgbm90IHNwZWNpZmllZFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICAgICAqL1xuICAgIENsaWVudC5faXNMaWtlRmlyZWZveCA9IGZ1bmN0aW9uICh1YSkge1xuICAgICAgICB1YSA9IHVhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICAgICAgcmV0dXJuIC9JY2V3ZWFzZWx8SWNlQ2F0fFNlYU1vbmtleXxDYW1pbm98bGlrZSBGaXJlZm94L2kudGVzdCh1YSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdXNlcidzIEZpcmVmb3ggdmVyc2lvbiBudW1iZXIuICcwJyB3aWxsIGJlIHJldHVybmVkIG9uIEZpcmVmb3ggZm9yIGlPUyBhbmQgbm9uLUZpcmVmb3ggYnJvd3NlcnMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdWEgLSBicm93c2VyJ3MgdXNlciBhZ2VudCBzdHJpbmcsIG5hdmlnYXRvci51c2VyQWdlbnQgaXMgdXNlZCBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICogQHJldHVybiB7U3RyaW5nfSB2ZXJzaW9uIG51bWJlclxuICAgICAqL1xuICAgIENsaWVudC5fZ2V0RmlyZWZveFZlcnNpb24gPSBmdW5jdGlvbiAodWEpIHtcbiAgICAgICAgdWEgPSB1YSB8fCBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgICAgIHZhciBtYXRjaGVzID0gL0ZpcmVmb3hcXC8oXFxkKyg/OlxcLlxcZCspezEsMn0pLy5leGVjKHVhKTtcblxuICAgICAgICByZXR1cm4gKG1hdGNoZXMgJiYgIUNsaWVudC5faXNMaWtlRmlyZWZveCh1YSkpID8gbWF0Y2hlc1sxXSA6ICcwJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyJ3MgRmlyZWZveCBtYWpvciB2ZXJzaW9uIG51bWJlci4gMCB3aWxsIGJlIHJldHVybmVkIG9uIEZpcmVmb3ggZm9yIGlPUyBhbmQgbm9uLUZpcmVmb3ggYnJvd3NlcnMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdWEgLSBicm93c2VyJ3MgdXNlciBhZ2VudCBzdHJpbmcsIG5hdmlnYXRvci51c2VyQWdlbnQgaXMgdXNlZCBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBtYWpvciB2ZXJzaW9uIG51bWJlciBpbiBpbnRlZ2VyXG4gICAgICovXG4gICAgQ2xpZW50Ll9nZXRGaXJlZm94TWFqb3JWZXJzaW9uID0gZnVuY3Rpb24gKHVhKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChDbGllbnQuX2dldEZpcmVmb3hWZXJzaW9uKHVhKSwgMTApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgdXNlciB2ZXJzaW9uIGlzIHVwIHRvIGRhdGUgd2l0aCBsYXRlc3QgdmVyc2lvbiBmcm9tIHByb2R1Y3QgZGV0YWlscy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gc3RyaWN0IC0gaWYgZmFsc2UgY29tcGFyZSB0aGUgbWFqb3IgdmVyc2lvbiBudW1iZXIgb25seS5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gdXNlclZlckFyciAtIHRoZSB1c2VyIHZlcnNpb24gbnVtYmVyLlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBsYXRlc3RWZXJBcnIgLSB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyIGZyb20gcHJvZHVjdCBkZXRhaWxzLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdXNlciB2ZXJzaW9uIG51bWJlciBpcyBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gcHJvZHVjdCBkZXRhaWxzIHZlcnNpb24uXG4gICAgICovXG4gICAgQ2xpZW50Ll9jb21wYXJlVmVyc2lvbiA9IGZ1bmN0aW9uIChzdHJpY3QsIHVzZXJWZXJBcnIsIGxhdGVzdFZlckFycikge1xuICAgICAgICB2YXIgY3VycmVudFVzZXJOdW1iZXIgPSAwO1xuICAgICAgICB2YXIgY3VycmVudExhdGVzdE51bWJlciA9IDA7XG4gICAgICAgIHZhciBpc1VwVG9EYXRlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGJvdGggbGF0ZXN0IGFuZCB1c2VyIGFycmF5IGxlbmd0aHMgbWF0Y2guXG4gICAgICAgIHdoaWxlIChsYXRlc3RWZXJBcnIubGVuZ3RoIDwgdXNlclZlckFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxhdGVzdFZlckFyci5wdXNoKCcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHVzZXJWZXJBcnIubGVuZ3RoIDwgbGF0ZXN0VmVyQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgdXNlclZlckFyci5wdXNoKCcwJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmx5IGNoZWNrIHRoZSBtYWpvciB2ZXJzaW9uIGluIG5vbi1zdHJpY3QgY29tcGFyaXNvbiBtb2RlLlxuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgbGF0ZXN0VmVyQXJyLmxlbmd0aCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGVwIHRocm91Z2ggdGhlIGFycmF5IGZyb20gcHJvZHVjdCBkZXRhaWxzIGFuZCBjb21wYXJlIHRvIHRoZSB1c2VyIGFycmF5LlxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxhdGVzdFZlckFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY3VycmVudFVzZXJOdW1iZXIgPSBOdW1iZXIodXNlclZlckFycltqXSk7XG4gICAgICAgICAgICBjdXJyZW50TGF0ZXN0TnVtYmVyID0gTnVtYmVyKGxhdGVzdFZlckFycltqXSk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50VXNlck51bWJlciA8IGN1cnJlbnRMYXRlc3ROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpc1VwVG9EYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRVc2VyTnVtYmVyID4gY3VycmVudExhdGVzdE51bWJlcikge1xuICAgICAgICAgICAgICAgIGlzVXBUb0RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1VwVG9EYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc1VwVG9EYXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3Qgd2hldGhlciB0aGUgdXNlcidzIEZpcmVmb3ggaXMgdXAgdG8gZGF0ZSBvciBvdXRkYXRlZC4gVGhpcyBkYXRhIGlzIG1haW5seSB1c2VkIGZvciBzZWN1cml0eSBub3RpZmljYXRpb25zLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBzdHJpY3QgLSB3aGV0aGVyIHRoZSBtaW5vciBhbmQgcGF0Y2gtbGV2ZWwgdmVyc2lvbiBudW1iZXJzIHNob3VsZCBiZSBjb21wYXJlZC4gRGVmYXVsdDogdHJ1ZVxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzRVNSIC0gd2hldGhlciB0aGUgRmlyZWZveCB1cGRhdGUgY2hhbm5lbCBpcyBFU1IuIERlZmF1bHQ6IGZhbHNlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgdXNlclZlciAtIGJyb3dzZXIncyB2ZXJzaW9uIG51bWJlclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdFxuICAgICAqL1xuICAgIENsaWVudC5faXNGaXJlZm94VXBUb0RhdGUgPSBmdW5jdGlvbiAoc3RyaWN0LCBpc0VTUiwgdXNlclZlcikge1xuICAgICAgICBzdHJpY3QgPSBzdHJpY3QgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzdHJpY3Q7XG4gICAgICAgIGlzRVNSID0gaXNFU1IgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogaXNFU1I7XG4gICAgICAgIHVzZXJWZXIgPSB1c2VyVmVyID09PSB1bmRlZmluZWQgPyBDbGllbnQuX2dldEZpcmVmb3hWZXJzaW9uKCkgOiB1c2VyVmVyO1xuXG4gICAgICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIGlmICghaHRtbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyLXZlcnNpb25zJykgfHwgIWh0bWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhdGVzdC1maXJlZm94JykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2ZXJzaW9ucyA9IGlzRVNSID8gaHRtbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXNyLXZlcnNpb25zJykuc3BsaXQoJyAnKSA6IFtodG1sLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRlc3QtZmlyZWZveCcpXTtcbiAgICAgICAgdmFyIHVzZXJWZXJBcnIgPSB1c2VyVmVyLm1hdGNoKC9eKFxcZCsoPzpcXC5cXGQrKXsxLDJ9KS8pWzFdLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBpc1VwVG9EYXRlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU29ydCBwcm9kdWN0IGRldGFpbHMgdmVyc2lvbiBzbyB3ZSBjb21wYXJlIHRoZSBuZXdlciB2ZXJzaW9uIGZpcnN0XG4gICAgICAgIHZlcnNpb25zLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gcGFyc2VGbG9hdChhKSA8IHBhcnNlRmxvYXQoYik7IH0pO1xuXG4gICAgICAgIC8vIENvbXBhcmUgZWFjaCBsYXRlc3QgdmVyc2lvbiBpbiBwcm9kdWN0IGRldGFpbHMgdG8gdGhlIHVzZXIgdmVyc2lvbi5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxhdGVzdFZlckFyciA9IHZlcnNpb25zW2ldLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIGlzVXBUb0RhdGUgPSBDbGllbnQuX2NvbXBhcmVWZXJzaW9uKHN0cmljdCwgdXNlclZlckFyciwgbGF0ZXN0VmVyQXJyKTtcblxuICAgICAgICAgICAgaWYgKGlzVXBUb0RhdGUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc1VwVG9EYXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSBjbGllbnQgdmVyc2lvbiBudW1iZXIgaXMgYXQgbGVhc3QgYSBzcGVjaWZpYyBudW1iZXIgb2YgbWFqb3IgcmVsZWFzZXMgb2xkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGllbnRWZXIgLSBDbGllbnQgdmVyc2lvbiBudW1iZXIgXCI1OC4wYTFcIiwgXCI1Ni4wXCIuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1ham9yVmVyIC0gTnVtYmVyIG9mIG1ham9yIHZlcnNpb25zIG9sZCBhIGNsaWVudCBjb25zaWRlcmVkICdvdXQgb2YgZGF0ZScgc2hvdWxkIGJlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYXRlc3RWZXIgLSBDdXJyZW50IGxhdGVzdCByZWxlYXNlIHZlcnNpb24gbnVtYmVyLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgQ2xpZW50LmlzRmlyZWZveE91dE9mRGF0ZSA9IGZ1bmN0aW9uKGNsaWVudFZlciwgbWFqb3JWZXIsIGxhdGVzdFZlcikge1xuICAgICAgICB2YXIgY2xpZW50VmVyc2lvbiA9IHBhcnNlSW50KGNsaWVudFZlciwgMTApO1xuICAgICAgICB2YXIgbGF0ZXN0VmVyc2lvbiA9IHR5cGVvZiBsYXRlc3RWZXIgPT09ICd1bmRlZmluZWQnID8gcGFyc2VJbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRlc3QtZmlyZWZveCcpLCAxMCkgOiBwYXJzZUludChsYXRlc3RWZXIsIDEwKTtcbiAgICAgICAgdmFyIG1ham9yVmVyc2lvbnMgPSBNYXRoLm1heChwYXJzZUludChtYWpvclZlciwgMTApLCAxKTsgLy8gbWFqb3JWZXJzaW9ucyBtdXN0IGJlIGF0IGxlYXN0IDEuXG5cbiAgICAgICAgaWYgKGlzTmFOKGxhdGVzdFZlcnNpb24pIHx8IGlzTmFOKGNsaWVudFZlcnNpb24pIHx8IGlzTmFOKG1ham9yVmVyc2lvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xpZW50VmVyc2lvbiA8PSBsYXRlc3RWZXJzaW9uIC0gbWFqb3JWZXJzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIGEgL3doYXRzbmV3IG9yIC9maXJzdHJ1biBwYWdlIGlzIGF0IGxlYXN0IGEgc3BlY2lmaWMgbnVtYmVyIG9mIG1ham9yIHJlbGVhc2VzIG9sZC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWFqb3JWZXIgLSBOdW1iZXIgb2YgbWFqb3IgdmVyc2lvbnMgb2xkIGEgY2xpZW50IGNvbnNpZGVyZWQgJ291dCBvZiBkYXRlJyBzaG91bGQgYmUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhOYW1lIC0gVmVyc2lvbiBudW1iZXIgVVJMIHBhdGhuYW1lIGUuZy4gJy9maXJlZm94LzU2LjAuMS8nLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYXRlc3RWZXIgLSBDdXJyZW50IGxhdGVzdCByZWxlYXNlIHZlcnNpb24gbnVtYmVyLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgQ2xpZW50LmlzRmlyZWZveFVSTE91dE9mRGF0ZSA9IGZ1bmN0aW9uKG1ham9yVmVyLCBwYXRoTmFtZSwgbGF0ZXN0VmVyKSB7XG4gICAgICAgIHZhciBwYXRoID0gdHlwZW9mIHBhdGhOYW1lID09PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA6IHBhdGhOYW1lO1xuICAgICAgICB2YXIgdXJsVmVyc2lvbiA9ICAvZmlyZWZveFxcLyhcXGQrKD86XFwuXFxkKyk/XFwuXFxkYT9cXGQ/KS8uZXhlYyhwYXRoKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSB1cmxWZXJzaW9uID8gcGFyc2VJbnQodXJsVmVyc2lvblsxXSwgMTApIDogbnVsbDtcbiAgICAgICAgdmFyIGxhdGVzdFZlcnNpb24gPSB0eXBlb2YgbGF0ZXN0VmVyID09PSAndW5kZWZpbmVkJyA/IHBhcnNlSW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF0ZXN0LWZpcmVmb3gnKSwgMTApIDogcGFyc2VJbnQobGF0ZXN0VmVyLCAxMCk7XG4gICAgICAgIHZhciBtYWpvclZlcnNpb25zID0gTWF0aC5tYXgocGFyc2VJbnQobWFqb3JWZXIsIDEwKSwgMSk7IC8vIG1ham9yVmVyc2lvbnMgbXVzdCBiZSBhdCBsZWFzdCAxLlxuXG4gICAgICAgIGlmICh2ZXJzaW9uICYmIGxhdGVzdFZlcnNpb24gJiYgKHZlcnNpb24gPD0gbGF0ZXN0VmVyc2lvbiAtIG1ham9yVmVyc2lvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBhc3luYyBtb3pVSVRvdXIgQVBJIG9mIEZpcmVmb3ggdG8gcmV0cmlldmUgdGhlIHVzZXIncyBicm93c2VyIGluZm8sIGluY2x1ZGluZyB0aGUgdXBkYXRlIGNoYW5uZWwgYW5kXG4gICAgICogYWNjdXJhdGUsIHBhdGNoLWxldmVsIHZlcnNpb24gbnVtYmVyLiBUaGlzIEFQSSBpcyBhdmFpbGFibGUgb24gRmlyZWZveCAzNSBhbmQgbGF0ZXIuIFNlZVxuICAgICAqIGh0dHA6Ly9iZWRyb2NrLnJlYWR0aGVkb2NzLm9yZy9lbi9sYXRlc3QvdWl0b3VyLmh0bWwgZm9yIGRldGFpbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aXRoIHRoZSBGaXJlZm94IGRldGFpbHNcbiAgICAgKiBAcmV0dXJuIHtOb25lfVxuICAgICAqL1xuICAgIENsaWVudC5nZXRGaXJlZm94RGV0YWlscyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyBGaXJlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbW1lZGlhdGVseSBpZiBjYWNoZSBleGlzdHNcbiAgICAgICAgaWYgKENsaWVudC5GaXJlZm94RGV0YWlscykge1xuICAgICAgICAgICAgY2FsbGJhY2soQ2xpZW50LkZpcmVmb3hEZXRhaWxzKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKTtcblxuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghZXZlbnQuZGV0YWlsIHx8ICFldmVudC5kZXRhaWwuZGF0YSB8fCBldmVudC5kZXRhaWwuY2FsbGJhY2tJRCAhPT0gY2FsbGJhY2tJRCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICBvblJldHJpZXZlZCh0cnVlLCBldmVudC5kZXRhaWwuZGF0YS52ZXJzaW9uLCBldmVudC5kZXRhaWwuZGF0YS5kZWZhdWx0VXBkYXRlQ2hhbm5lbCwgZXZlbnQuZGV0YWlsLmRhdGEuZGlzdHJpYnV0aW9uKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25SZXRyaWV2ZWQgPSBmdW5jdGlvbiAoYWNjdXJhdGUsIHZlcnNpb24sIGNoYW5uZWwsIGRpc3RyaWJ1dGlvbikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW96VUlUb3VyUmVzcG9uc2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgaXNFU1IgPSBjaGFubmVsID09PSAnZXNyJztcbiAgICAgICAgICAgIHZhciBpc1VwVG9EYXRlID0gQ2xpZW50Ll9pc0ZpcmVmb3hVcFRvRGF0ZShhY2N1cmF0ZSwgYWNjdXJhdGUgPyBpc0VTUiA6IGZhbHNlLCB2ZXJzaW9uKTtcbiAgICAgICAgICAgIHZhciBkZXRhaWxzID0gQ2xpZW50LkZpcmVmb3hEZXRhaWxzID0ge1xuICAgICAgICAgICAgICAgICdhY2N1cmF0ZSc6IGFjY3VyYXRlLFxuICAgICAgICAgICAgICAgICd2ZXJzaW9uJzogdmVyc2lvbixcbiAgICAgICAgICAgICAgICAnY2hhbm5lbCc6IGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgJ2Rpc3RyaWJ1dGlvbic6IGRpc3RyaWJ1dGlvbixcbiAgICAgICAgICAgICAgICAnaXNVcFRvRGF0ZSc6IGlzVXBUb0RhdGUsXG4gICAgICAgICAgICAgICAgJ2lzRVNSJzogaXNFU1JcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKGRldGFpbHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByZXBhcmUgZmFsbGJhY2sgZnVuY3Rpb24gaW4gY2FzZSB0aGUgQVBJIGRvZXNuJ3Qgd29ya1xuICAgICAgICB2YXIgdXNlclZlciA9IENsaWVudC5fZ2V0RmlyZWZveFZlcnNpb24oKTtcbiAgICAgICAgdmFyIGZhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBvblJldHJpZXZlZChmYWxzZSwgdXNlclZlciwgJ3JlbGVhc2UnLCB1bmRlZmluZWQpOyB9O1xuXG4gICAgICAgIC8vIElmIEZpcmVmb3ggaXMgb2xkIG9yIGZvciBBbmRyb2lkLCBjYWxsIHRoZSBmYWxsYmFjayBmdW5jdGlvbiBpbW1lZGlhdGVseSBiZWNhdXNlIHRoZSBBUEkgaXMgbm90IGltcGxlbWVudGVkXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHVzZXJWZXIpIDwgMzUgfHwgQ2xpZW50Ll9pc0ZpcmVmb3hBbmRyb2lkKCkpIHtcbiAgICAgICAgICAgIGZhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgdGhlIGZhbGxiYWNrIGZ1bmN0aW9uIGluIC40IHNlY29uZHNcbiAgICAgICAgdmFyIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZmFsbGJhY2ssIDQwMCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgQVBJXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21velVJVG91clJlc3BvbnNlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ21velVJVG91cicsIHtcbiAgICAgICAgICAgICdidWJibGVzJzogdHJ1ZSxcbiAgICAgICAgICAgICdkZXRhaWwnOiB7XG4gICAgICAgICAgICAgICAgJ2FjdGlvbic6ICdnZXRDb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAnZGF0YSc6IHsgJ2NvbmZpZ3VyYXRpb24nOiAnYXBwaW5mbycsICdjYWxsYmFja0lEJzogY2FsbGJhY2tJRCB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBhc3luYyBtb3pVSVRvdXIgQVBJIG9mIEZpcmVmb3ggdG8gcmV0cmlldmUgdGhlIHVzZXIncyBGeEEgaW5mby4gU2VlXG4gICAgICogaHR0cDovL2JlZHJvY2sucmVhZHRoZWRvY3Mub3JnL2VuL2xhdGVzdC91aXRvdXIuaHRtbCBmb3IgZGV0YWlscy5cbiAgICAgKlxuICAgICAqIEZ4QSB3YXMgcHJldmlvdXNseSBicmFuZGVkIGFzIFN5bmMuXG4gICAgICpcbiAgICAgKiBUaGUgdmFyaW91cyBzdGF0ZXMgaGVyZSBhcmUuLi4gY29tcGxpY2F0ZWRcbiAgICAgKiBUaGlzIGlzIHRoZSBpbnRlbnRpb246XG4gICAgICogICAgIC0gZmlyZWZveDogdHJ1ZSBpZiBGaXJlZm94XG4gICAgICogICAgIC0gbGVnYWN5OiB0cnVlIGlmIG9sZGVyIHRoYW4gRnhBTGFzdFN1cHBvcnRlZFxuICAgICAqICAgICAtIG1vYmlsZTogZmFsc2UgfCBhbmRyb2lkIHwgaW9zXG4gICAgICogICAgIC0gc2V0dXA6IHRydWUgaWYgRnggPj0gMjkgYW5kIGxvZ2dlZCBpbnRvIEZ4QVxuICAgICAqICAgICAtIGRlc2t0b3BEZXZpY2VzICYgbW9iaWxlRGV2aWNlc1xuICAgICAqICAgICAgICAgIC0gaWYgbG9nZ2VkIGluIGFuZCBGeCA+PSA1MDogdGhlIG51bWJlciBvZiBsaW5rZWQgZGV2aWNlc1xuICAgICAqICAgICAgICAgIC0gaWYgbG9nZ2VkIGluIGFuZCBGeCA8IDUwICYmIEZ4ID4gMjk6ICd1bmtub3duJ1xuICAgICAqICAgICAgICAgIC0gaWYgbG9nZ2VkIG91dCBvciBGeCA8IDI5IG9yIG5vdCBGeDogZmFsc2VcbiAgICAgKiBOb3RlczpcbiAgICAgKiAtIEZ4IDwgNTAgaGFzIEZ4QSBhbmQgVUlUb3VyIHN1cHBvcnQgYnV0IHRoZSBBUEkgZG9lcyBub3QgcmV0dXJuIGRldmljZSBjb3VudHNcbiAgICAgKiAtIEZ4IDwgRnhBTGFzdFN1cHBvcnRlZCBhY2NvdW50cy5maXJlZm94LmNvbSBkb2VzIG5vdCB3b3JrXG4gICAgICogICAgIC0gRnhBTGFzdFN1cHBvcnRlZCBpcyBzdXBwbGllZCBieSB0aGUgRnhBIHRlYW1cbiAgICAgKiAgICAgLSB0aGVzZSB2ZXJzaW9ucyBhcmUgc3RpbGwgY2FwYWJsZSBvZiBsb2dnaW5nIGluIHRocm91Z2ggdGhlIGJyb3dzZXJcbiAgICAgKiAgICAgLSBkaWZmZXJlbnRpYXRlZCBiZWNhdXNlIHdlIGdlbmVyYWxseSBkbyBub3QgZ2l2ZSB0aGVzZSB2ZXJzaW9ucyB0aGUgRnhBIGNhbGxzIHRvIGFjdGlvbiAoZWcuIFwiQ3JlYXRlIGFuIEFjY291bnRcIilcbiAgICAgKiAtIEZ4IDwgMjkgdGhlIG1velVJVG91ciBBUEkgaXMgbm90IGF2YWlsYWJsZSwgdGhvdWdoIHRoZSB1c2VyIG1heSBzdGlsbCBiZSBsb2dnZWQgaW5cbiAgICAgKiAtIElmIHlvdSdyZSBjdXJpb3VzLCBcInN5bmNcIiBiZWdhbiB3aXRoIEZ4IDQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aXRoIHRoZSBGeEEgZGV0YWlsc1xuICAgICAqIEByZXR1cm4ge05vbmV9XG4gICAgICovXG4gICAgQ2xpZW50LmdldEZ4YURldGFpbHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gRmlyZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaW1tZWRpYXRlbHkgaWYgRnhhRGV0YWlscyBhcmUgYWxyZWFkeSBkZWZpbmVkXG4gICAgICAgIGlmIChDbGllbnQuRnhhRGV0YWlscykge1xuICAgICAgICAgICAgY2FsbGJhY2soQ2xpZW50LkZ4YURldGFpbHMpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IHVwIHRoZSBvYmplY3Qgd2l0aCBkZWZhdWx0IHZhbHVlcyBvZiBmYWxzZVxuICAgICAgICB2YXIgZGV0YWlscyA9IHtcbiAgICAgICAgICAgICdmaXJlZm94JzogZmFsc2UsXG4gICAgICAgICAgICAnbGVnYWN5JzogZmFsc2UsXG4gICAgICAgICAgICAnbW9iaWxlJzogZmFsc2UsXG4gICAgICAgICAgICAnc2V0dXAnOiBmYWxzZSxcbiAgICAgICAgICAgICdkZXNrdG9wRGV2aWNlcyc6IGZhbHNlLFxuICAgICAgICAgICAgJ21vYmlsZURldmljZXMnOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIG92ZXJyaWRlIG9iamVjdCB2YWx1ZXMgYXMgd2UgZ2V0IG1vcmUgaW5mb3JtYXRpb25cbiAgICAgICAgaWYoQ2xpZW50LmlzRmlyZWZveEFuZHJvaWQpIHtcbiAgICAgICAgICAgIGRldGFpbHMuZmlyZWZveCA9IHRydWU7XG4gICAgICAgICAgICBkZXRhaWxzLm1vYmlsZSA9ICdhbmRyb2lkJztcbiAgICAgICAgICAgIHJldHVybkZ4YURldGFpbHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChDbGllbnQuaXNGaXJlZm94aU9TKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmZpcmVmb3ggPSB0cnVlO1xuICAgICAgICAgICAgZGV0YWlscy5tb2JpbGUgPSAnaW9zJztcbiAgICAgICAgICAgIHJldHVybkZ4YURldGFpbHMoKTtcbiAgICAgICAgfSBlbHNlIGlmKENsaWVudC5pc0ZpcmVmb3hEZXNrdG9wKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmZpcmVmb3ggPSB0cnVlO1xuICAgICAgICAgICAgLy8gZmlyZWZveCBkZXNrdG9wXG4gICAgICAgICAgICB2YXIgdXNlclZlciA9IENsaWVudC5fZ2V0RmlyZWZveFZlcnNpb24oKTtcbiAgICAgICAgICAgIGlmKHBhcnNlRmxvYXQodXNlclZlcikgPCAyOSkge1xuICAgICAgICAgICAgICAgIC8vIFVJVG91ciBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgZGV0YWlscy5sZWdhY3kgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVSVRvdXIgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgLy8gc3RpbGwgbm90ZSBpZiBpdCdzIG9sZGVyIHRoYW4gYWNjb3VudHMuZmlyZWZveC5jb20gc3VwcG9ydHNcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdCh1c2VyVmVyKSA8IEZ4QUxhc3RTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5sZWdhY3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrSUQgdG8gbWFrZSBzdXJlIHdlJ3JlIHJlc3BvbmRpbmcgdG8gb3VyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tJRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpO1xuXG4gICAgICAgICAgICAgICAgLy8gVUlUb3VyIEFQSSByZXNwb25zZSBldmVudCBoYW5kbGVyLCBjaGVja3MgZm9yIGNhbGxiYWNrSURcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudC5kZXRhaWwgfHwgIWV2ZW50LmRldGFpbC5kYXRhIHx8IGV2ZW50LmRldGFpbC5jYWxsYmFja0lEICE9PSBjYWxsYmFja0lEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21velVJVG91clJlc3BvbnNlJywgbGlzdGVuZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXZpY2UgY291bnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIGRldmljZSBjb3VudHMgYXJlIG9ubHkgYXZhaWxhYmxlIGluIEZ4NTArLCBmYWxsYmFjayAndW5rbm93bicgaWYgbm90IGRldGVjdGFibGVcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5zZXR1cCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChldmVudC5kZXRhaWwuZGF0YSwgJ3NldHVwJykgPyBldmVudC5kZXRhaWwuZGF0YS5zZXR1cCA6ICd1bmtub3duJztcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5kZXNrdG9wRGV2aWNlcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChldmVudC5kZXRhaWwuZGF0YSwgJ2Rlc2t0b3BEZXZpY2VzJykgPyBldmVudC5kZXRhaWwuZGF0YS5kZXNrdG9wRGV2aWNlcyA6ICd1bmtub3duJztcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5tb2JpbGVEZXZpY2VzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV2ZW50LmRldGFpbC5kYXRhLCAnbW9iaWxlRGV2aWNlcycpID8gZXZlbnQuZGV0YWlsLmRhdGEubW9iaWxlRGV2aWNlcyA6ICd1bmtub3duJztcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm5GeGFEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIFVJVG91ciBBUEkgYW5kIHN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIHJlcG9uc2VcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pVSVRvdXJSZXNwb25zZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ21velVJVG91cicsIHtcbiAgICAgICAgICAgICAgICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnZGV0YWlsJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbic6ICdnZXRDb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogeyAnY29uZmlndXJhdGlvbic6ICdzeW5jJywgJ2NhbGxiYWNrSUQnOiBjYWxsYmFja0lEIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJldHVybkZ4YURldGFpbHMoKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIENsaWVudC5GeGFEZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgICAgIGNhbGxiYWNrKGRldGFpbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSB0aGUgZmFsbGJhY2sgZnVuY3Rpb24gaW4gLjQgc2Vjb25kc1xuICAgICAgICB2YXIgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChyZXR1cm5GeGFEZXRhaWxzLCA0MDApO1xuICAgIH07XG5cblxuICAgIC8vIEFwcGVuZCBzdGF0aWMgcHJvcGVydGllcyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgIENsaWVudC5pc0ZpcmVmb3ggPSBDbGllbnQuX2lzRmlyZWZveCgpO1xuICAgIENsaWVudC5pc0ZpcmVmb3hEZXNrdG9wID0gQ2xpZW50Ll9pc0ZpcmVmb3hEZXNrdG9wKCk7XG4gICAgQ2xpZW50LmlzRmlyZWZveEFuZHJvaWQgPSBDbGllbnQuX2lzRmlyZWZveEFuZHJvaWQoKTtcbiAgICBDbGllbnQuaXNGaXJlZm94aU9TID0gQ2xpZW50Ll9pc0ZpcmVmb3hpT1MoKTtcbiAgICBDbGllbnQuaXNGaXJlZm94RnhPUyA9IENsaWVudC5faXNGaXJlZm94RnhPUygpO1xuICAgIENsaWVudC5pc0xpa2VGaXJlZm94ID0gQ2xpZW50Ll9pc0xpa2VGaXJlZm94KCk7XG4gICAgQ2xpZW50LkZpcmVmb3hWZXJzaW9uID0gQ2xpZW50Ll9nZXRGaXJlZm94VmVyc2lvbigpO1xuICAgIENsaWVudC5GaXJlZm94TWFqb3JWZXJzaW9uID0gQ2xpZW50Ll9nZXRGaXJlZm94TWFqb3JWZXJzaW9uKCk7XG5cbiAgICAvLyBBcHBlbmQgcGxhdGZvcm0gaW5mbyBhcyB3ZWxsIGZvciBjb252ZW5pZW5jZVxuICAgIENsaWVudC5wbGF0Zm9ybSA9IHdpbmRvdy5zaXRlLnBsYXRmb3JtO1xuICAgIENsaWVudC5pc01vYmlsZSA9IC9eKGFuZHJvaWR8aW9zfGZ4b3MpJC8udGVzdChDbGllbnQucGxhdGZvcm0pO1xuICAgIENsaWVudC5pc0Rlc2t0b3AgPSAhQ2xpZW50LmlzTW9iaWxlO1xuXG4gICAgd2luZG93Lk1vemlsbGEuQ2xpZW50ID0gQ2xpZW50O1xuXG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLypcbiAqIEEgbGlnaHR3ZWlnaHQgY2xhc3NMaXN0IEFQSSBwb2x5ZmlsbCAodGhhbmtzIE1ETiEpXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3RcbiAqL1xuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIGhlbHBlcnNcbiAgICB2YXIgcmVnRXhwID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknKyBuYW1lICsnKCB8JCknKTtcbiAgICB9O1xuICAgIHZhciBmb3JFYWNoID0gZnVuY3Rpb24obGlzdCwgZm4sIHNjb3BlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm4uY2FsbChzY29wZSwgbGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gY2xhc3MgbGlzdCBvYmplY3Qgd2l0aCBiYXNpYyBtZXRob2RzXG4gICAgZnVuY3Rpb24gQ2xhc3NMaXN0KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBDbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICAgICAgICBhZGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yRWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29udGFpbnMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3JFYWNoKGFyZ3VtZW50cywgZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5lbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlZ0V4cChuYW1lKSwgJycpKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKG5hbWUpID8gKHRoaXMucmVtb3ZlKG5hbWUpLCBmYWxzZSkgOiAodGhpcy5hZGQobmFtZSksIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZ0V4cChuYW1lKS50ZXN0KHRoaXMuZWxlbWVudC5jbGFzc05hbWUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBib251cy4uXG4gICAgICAgIHJlcGxhY2U6IGZ1bmN0aW9uKG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKG9sZE5hbWUpLCB0aGlzLmFkZChuZXdOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBJRTgvOSwgU2FmYXJpXG4gICAgaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhKCdjbGFzc0xpc3QnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdjbGFzc0xpc3QnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2xhc3NMaXN0KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlKCkgc3VwcG9ydCBmb3Igb3RoZXJzXG4gICAgaWYgKHdpbmRvdy5ET01Ub2tlbkxpc3QgJiYgRE9NVG9rZW5MaXN0LnByb3RvdHlwZS5yZXBsYWNlID09PSBudWxsKSB7XG4gICAgICAgIERPTVRva2VuTGlzdC5wcm90b3R5cGUucmVwbGFjZSA9IENsYXNzTGlzdC5wcm90b3R5cGUucmVwbGFjZTtcbiAgICB9XG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLy8gQ3JlYXRlIG5hbWVzcGFjZVxuaWYgKHR5cGVvZiB3aW5kb3cuTW96aWxsYSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTW96aWxsYSA9IHt9O1xufVxuXG4oZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgd2luZG93Lk1vemlsbGEucnVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGlzTW9kZXJuQnJvd3NlciA9IHdpbmRvdy5zaXRlICYmIHdpbmRvdy5zaXRlLmlzTW9kZXJuQnJvd3NlcjtcblxuICAgICAgICBpZiAoaXNNb2Rlcm5Ccm93c2VyICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59KSh3aW5kb3cuTW96aWxsYSk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5cbi8vIGNyZWF0ZSBuYW1lc3BhY2VcbmlmICh0eXBlb2YgTXpwID09PSAndW5kZWZpbmVkJykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJsb2NrLXNjb3BlZC12YXJcbiAgICB2YXIgTXpwID0ge307XG59XG5cbihmdW5jdGlvbihkb2MpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgU3VwcG9ydHMgPSB7fTtcblxuICAgIC8qKlxuICAgICogbWF0Y2hNZWRpYVxuICAgICogQHJldHVybiB7Qm9vbGVhbn0gYm9vbGVhbiB2YWx1ZSBmb3IgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgbWF0Y2hNZWRpYVxuICAgICovXG4gICAgU3VwcG9ydHMubWF0Y2hNZWRpYSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cubWF0Y2hNZWRpYSAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm1hdGNoTWVkaWEoJ2FsbCcpLmFkZExpc3RlbmVyO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAqIGNsYXNzTGlzdFxuICAgICogQHJldHVybiB7Qm9vbGVhbn0gYm9vbGVhbiB2YWx1ZSBmb3IgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgY2xhc3NMaXN0XG4gICAgKi9cbiAgICBTdXBwb3J0cy5jbGFzc0xpc3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogZGV0YWlsc1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IGJvb2xlYW4gdmFsdWUgZm9yIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBkZXRhaWxzL3N1bW1hcnkgZWxlbWVudHNcbiAgICAgKiAtIGZlYXR1cmUgZGV0ZWN0aW9uIGZvciBIVE1MNSBkZXRhaWwvc3VtbWFyeSBzdXBwb3J0XG4gICAgICogLSBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvaHRtbDUtZGV0YWlscy1qcXVlcnkjY29tbWVudC0zNVxuICAgICAqL1xuICAgIFN1cHBvcnRzLmRldGFpbHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkZXRhaWxzJyk7XG4gICAgICAgIHZhciBmYWtlO1xuICAgICAgICB2YXIgcm9vdDtcbiAgICAgICAgdmFyIGRpZmY7XG4gICAgICAgIGlmICghKCdvcGVuJyBpbiBlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByb290ID0gZG9jLmJvZHkgfHwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRlID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIGZha2UgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlLmluc2VydEJlZm9yZShkb2MuY3JlYXRlRWxlbWVudCgnYm9keScpLCBkZS5maXJzdEVsZW1lbnRDaGlsZCB8fCBkZS5maXJzdENoaWxkKTtcbiAgICAgICAgfSgpKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gJzxzdW1tYXJ5PmE8L3N1bW1hcnk+Yic7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZGlmZiA9IGVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgZWwub3BlbiA9IHRydWU7XG4gICAgICAgIGRpZmYgPSBkaWZmICE9PSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHJvb3QucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICBpZiAoZmFrZSkge1xuICAgICAgICAgICAgcm9vdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaWZmO1xuICAgIH0oKSk7XG5cbiAgICB3aW5kb3cuTXpwLlN1cHBvcnRzID0gU3VwcG9ydHM7XG59KShkb2N1bWVudCk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5cbi8vIGNyZWF0ZSBuYW1lc3BhY2VcbmlmICh0eXBlb2YgTXpwID09PSAndW5kZWZpbmVkJykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJsb2NrLXNjb3BlZC12YXJcbiAgICB2YXIgTXpwID0ge307XG59XG5cbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgVXRpbHMgPSB7fTtcblxuICAgIC8vIG1hdGNoZXMoKSB2ZW5kb3JmaWxsLCB1c2VkIGJ5IG5leHRVbnRpbFxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG5leHRVbnRpbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIEVsZW1lbnQgdGhhdCB5b3Ugd2FudCB0byBnZXQgdGhlIHNpYmxpbmdzIG9mXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIC0gU2VsZWN0b3Igb2YgdGhlIGVsZW1lbnQgeW91IHdhbnQgdG8gc3RvcCBjb2xsZWN0aW5nIHNpYmxpbmdzIGJlZm9yZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWx0ZXIgLSBTZWxlY3RvciB0byBmaWx0ZXIgcmVzdWx0cyBpZiB5b3Ugb25seSB3YW50IHNpYmxpbmdzIG1hdGNoaW5nIHRoaXMgcGF0dGVyblxuICAgICAqIEByZXR1cm4ge0FycmF5fSAtIGFuIGFycmF5IG9mIEhUTUwgZWxlbWVudHNcbiAgICAgKiAtIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tZ2V0LWFsbC1zaWJsaW5nLWVsZW1lbnRzLXVudGlsLWEtbWF0Y2gtaXMtZm91bmQtd2l0aC12YW5pbGxhLWphdmFzY3JpcHQvXG4gICAgICovXG4gICAgVXRpbHMubmV4dFVudGlsID0gZnVuY3Rpb24gKGVsLCBzZWxlY3RvciwgZmlsdGVyKSB7XG4gICAgICAgIC8vIFNldHVwIHNpYmxpbmdzIGFycmF5XG4gICAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xuXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcbiAgICAgICAgZWwgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgLy8gQXMgbG9uZyBhcyBhIHNpYmxpbmcgZXhpc3RzXG4gICAgICAgIHdoaWxlIChlbCkge1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIG91ciBtYXRjaCwgYmFpbFxuICAgICAgICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGZpbHRlcmluZyBieSBhIHNlbGVjdG9yLCBjaGVjayBpZiB0aGUgc2libGluZyBtYXRjaGVzXG4gICAgICAgICAgICBpZiAoZmlsdGVyICYmICFlbC5tYXRjaGVzKGZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBwdXNoIGl0IHRvIHRoZSBzaWJsaW5ncyBhcnJheVxuICAgICAgICAgICAgc2libGluZ3MucHVzaChlbCk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcbiAgICAgICAgICAgIGVsID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xuICAgIH07XG5cbiAgICB3aW5kb3cuTXpwLlV0aWxzID0gVXRpbHM7XG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLy8gY3JlYXRlIG5hbWVzcGFjZVxuaWYgKHR5cGVvZiBNenAgPT09ICd1bmRlZmluZWQnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmxvY2stc2NvcGVkLXZhclxuICAgIHZhciBNenAgPSB7fTtcbn1cblxuKGZ1bmN0aW9uKE16cCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBNZW51ID0ge307XG4gICAgdmFyIF9tZW51T3BlbiA9IGZhbHNlO1xuICAgIHZhciBfaG92ZXJUaW1lb3V0O1xuICAgIHZhciBfaG92ZXJUaW1lb3V0RGVsYXkgPSAxNTA7XG4gICAgdmFyIF9tcVdpZGVOYXY7XG4gICAgdmFyIF93aWRlQnJlYWtwb2ludCA9ICc3NjhweCc7XG5cbiAgICB2YXIgX29wdGlvbnMgPSB7XG4gICAgICAgIG9uTWVudU9wZW46IG51bGwsXG4gICAgICAgIG9uTWVudUNsb3NlOiBudWxsLFxuICAgICAgICBvbk1lbnVCdXR0b25DbG9zZTogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhIG1lbnUgcGFuZWwuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsIC0gRE9NIGVsZW1lbnQgKGAubXpwLWMtbWVudS1jYXRlZ29yeS5tenAtanMtZXhwYW5kYWJsZWApXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBhbmltYXRlIC0gc2hvdyBhbmltYXRpb24gd2hlbiBtZW51IHBhbmVsIG9wZW5zLlxuICAgICAqL1xuICAgIE1lbnUub3BlbiA9IGZ1bmN0aW9uKGVsLCBhbmltYXRlKSB7XG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdtenAtaXMtYW5pbWF0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ216cC1pcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIF9tZW51T3BlbiA9IHRydWU7IC8vIEZvciBjaGVja2luZyBtZW51IHN0YXRlIG9uIGtleXVwLlxuXG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5tenAtYy1tZW51LXRpdGxlJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfb3B0aW9ucy5vbk1lbnVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfb3B0aW9ucy5vbk1lbnVPcGVuKGVsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgYWxsIGN1cnJlbnRseSBvcGVuIG1lbnUgcGFuZWxzLlxuICAgICAqIE5vdGU6IG9uIHNtYWxsIHNjcmVlbnMgbW9yZSB0aGFuIG9uZSBtZW51IGNhbiBiZSBvcGVuIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICovXG4gICAgTWVudS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tenAtYy1tZW51LWNhdGVnb3J5Lm16cC1pcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIG11c3QgYmUgcmVtb3ZlZCBpbiB0aGUgY29ycmVjdCBvcmRlclxuICAgICAgICAgICAgLy8gdG8gd29yayBhcm91bmQgYSBidWcgaW4gYmVkcm9jaydzIGNsYXNzTGlzdCBwb2x5ZmlsbCBmb3IgSUU5LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvYmVkcm9jay9pc3N1ZXMvNjIyMSA6L1xuICAgICAgICAgICAgY3VycmVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdtenAtaXMtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnbXpwLWlzLWFuaW1hdGVkJyk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRbaV0ucXVlcnlTZWxlY3RvcignLm16cC1jLW1lbnUtdGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfbWVudU9wZW4gPSBmYWxzZTsgLy8gRm9yIGNoZWNraW5nIG1lbnUgc3RhdGUgb24ga2V5dXAuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBfb3B0aW9ucy5vbk1lbnVDbG9zZSA9PT0gJ2Z1bmN0aW9uJyAmJiBjdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9vcHRpb25zLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudC5sZW5ndGggPiAwO1xuICAgIH07XG5cbiAgICBNZW51Lm9uRG9jdW1lbnRLZXlVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgX21lbnVPcGVuKSB7XG4gICAgICAgICAgICBNZW51LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWVudSBwYW5lbCBjbG9zZSBidXR0b24gYGNsaWNrYCBldmVudCBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0LlxuICAgICAqL1xuICAgIE1lbnUub25DbG9zZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfb3B0aW9ucy5vbk1lbnVCdXR0b25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX29wdGlvbnMub25NZW51QnV0dG9uQ2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE1lbnUuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgb3Blbi9jbG9zZWQgc3RhdGUgb2YgYSBtZW51IHBhbmVsLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIERPTSBlbGVtZW50IChgLm16cC1jLW1lbnUtY2F0ZWdvcnkubXpwLWpzLWV4cGFuZGFibGVgKVxuICAgICAqL1xuICAgIE1lbnUudG9nZ2xlID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtenAtaXMtc2VsZWN0ZWQnKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBNZW51Lm9wZW4oZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIG11c3QgYmUgcmVtb3ZlZCBpbiB0aGUgY29ycmVjdCBvcmRlclxuICAgICAgICAgICAgLy8gdG8gd29yayBhcm91bmQgYSBidWcgaW4gYmVkcm9jaydzIGNsYXNzTGlzdCBwb2x5ZmlsbCBmb3IgSUU5LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvYmVkcm9jay9pc3N1ZXMvNjIyMSA6L1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnbXpwLWlzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdtenAtaXMtYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5tenAtYy1tZW51LXRpdGxlJykuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIF9vcHRpb25zLm9uTWVudUNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgX29wdGlvbnMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNZW51IGBtb3VzZWVudGVyYCBldmVudCBoYW5kbGVyLlxuICAgICAqIE9wZW5zIHRoZSBtZW51IG9ubHkgd2hlbiBob3ZlciBpbnRlbnQgaXMgc2hvd24uXG4gICAgICogQW5pbWF0ZXMgb25seSBpZiBhIG1lbnUgcGFuZWwgaXMgbm90IGFscmVhZHkgb3Blbi5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZSAtIEV2ZW50IG9iamVjdC5cbiAgICAgKi9cbiAgICBNZW51Lm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF9ob3ZlclRpbWVvdXQpO1xuXG4gICAgICAgIF9ob3ZlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBNZW51LmNsb3NlKCk7XG4gICAgICAgICAgICB2YXIgYW5pbWF0ZSA9IGN1cnJlbnQgPyBmYWxzZTogdHJ1ZTtcblxuICAgICAgICAgICAgTWVudS5vcGVuKGUudGFyZ2V0LCBhbmltYXRlKTtcbiAgICAgICAgfSwgX2hvdmVyVGltZW91dERlbGF5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWVudSBgbW91c2VsZWF2ZWAgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBDbG9zZXMgdGhlIG1lbnUgb25seSB3aGVuIGhvdmVyIGludGVudCBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBNZW51Lm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoX2hvdmVyVGltZW91dCk7XG5cbiAgICAgICAgX2hvdmVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBNZW51LmNsb3NlKCk7XG4gICAgICAgIH0sIF9ob3ZlclRpbWVvdXREZWxheSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1lbnUgYGZvY3Vzb3V0YCBldmVudCBoYW5kbGVyLlxuICAgICAqIENsb3NlcyB0aGUgbWVudSB3aGVuIGZvY3VzIG1vdmVzIHRvIGFuIGFsZW1lbnQgb3V0c2lkZSBvZiB0aGUgY3VycmVudGx5IG9wZW4gcGFuZWwuXG4gICAgICovXG4gICAgTWVudS5vbkZvY3VzT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWZ0ZXIgYW4gZWxlbWVudCBsb3NlcyBmb2N1cywgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIHdpbGwgYWx3YXlzIGJlIGBib2R5YCBiZWZvcmVcbiAgICAgICAgICogbW92aW5nIHRvIHRoZSBuZXh0IGVsZW1lbnQuIEEgYHNldFRpbWVvdXRgIG9mIGAwYCBjaXJjdW12ZW50cyB0aGlzIGlzc3VlIGFzIGl0XG4gICAgICAgICAqIHJlLXF1ZXVlcyB0aGUgSmF2YVNjcmlwdCB0byBydW4gYXQgdGhlIGVuZCBvZiB0aGUgY3VycmVudCBleGNlY3V0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBtZW51IGlzIG9wZW4gYW5kIHRoZSBuZXdseSBmb2N1c2VkIGVsZW1lbnQgaXMgbm90IGEgY2hpbGQsIHRoZW4gY2FsbCBjbG9zZSgpLlxuICAgICAgICAgICAgaWYgKCFzZWxmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICYmIHNlbGYuY2xhc3NMaXN0LmNvbnRhaW5zKCdtenAtaXMtc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIE1lbnUuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1lbnUgbGluayBgY2xpY2tgIGV2ZW50IGhhbmRsZXIgZm9yIHdpZGUgdmlld3BvcnRzLlxuICAgICAqIENsb3NlcyBhbnkgY3VycmVudGx5IG9wZW4gbWVudSBwYW5lbHMgYmVmb3JlIG9wZW5pbmcgdGhlIHNlbGVjdGVkIG9uZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZSAtIEV2ZW50IG9iamVjdC5cbiAgICAgKi9cbiAgICBNZW51Lm9uQ2xpY2tXaWRlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIE1lbnUuY2xvc2UoKTtcbiAgICAgICAgTWVudS5vcGVuKGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNZW51IGxpbmsgYGNsaWNrYCBldmVudCBoYW5kbGVyIGZvciBzbWFsbCB2aWV3cG9ydHMuXG4gICAgICogVG9nZ2xlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1lbnUgb3BlbiBvcGVuL2Nsb3NlIHN0YXRlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIC0gRXZlbnQgb2JqZWN0LlxuICAgICAqL1xuICAgIE1lbnUub25DbGlja1NtYWxsID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIE1lbnUudG9nZ2xlKGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgYG1hdGNoTWVkaWFgIHN0YXRlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgTWVudS5pc1dpZGVWaWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX21xV2lkZU5hdi5tYXRjaGVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgZGVza3RvcC9tb2JpbGUgbmF2aWdhdGlvbiB1c2luZyBgbWF0Y2hNZWRpYWAgZXZlbnQgaGFuZGxlci5cbiAgICAgKi9cbiAgICBNZW51LmhhbmRsZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIF9tcVdpZGVOYXYgPSBtYXRjaE1lZGlhKCcobWluLXdpZHRoOiAnICsgX3dpZGVCcmVha3BvaW50ICsgJyknKTtcblxuICAgICAgICBfbXFXaWRlTmF2LmFkZExpc3RlbmVyKGZ1bmN0aW9uKG1xKSB7XG4gICAgICAgICAgICBNZW51LmNsb3NlKCk7XG5cbiAgICAgICAgICAgIGlmIChtcS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgTWVudS51bmJpbmRFdmVudHNTbWFsbCgpO1xuICAgICAgICAgICAgICAgIE1lbnUuYmluZEV2ZW50c1dpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTWVudS51bmJpbmRFdmVudHNXaWRlKCk7XG4gICAgICAgICAgICAgICAgTWVudS5iaW5kRXZlbnRzU21hbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKE1lbnUuaXNXaWRlVmlld3BvcnQoKSkge1xuICAgICAgICAgICAgTWVudS5iaW5kRXZlbnRzV2lkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTWVudS5iaW5kRXZlbnRzU21hbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50cyBmb3Igd2lkZSB2aWV3cG9ydHMuXG4gICAgICovXG4gICAgTWVudS5iaW5kRXZlbnRzV2lkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXpwLWMtbWVudS1jYXRlZ29yeS5tenAtanMtZXhwYW5kYWJsZScpO1xuICAgICAgICB2YXIgbGluaztcbiAgICAgICAgdmFyIGNsb3NlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBNZW51Lm9uTW91c2VFbnRlciwgZmFsc2UpO1xuICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIE1lbnUub25Nb3VzZUxlYXZlLCBmYWxzZSk7XG4gICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIE1lbnUub25Gb2N1c091dCwgZmFsc2UpO1xuXG4gICAgICAgICAgICBsaW5rID0gaXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLm16cC1jLW1lbnUtdGl0bGUnKTtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNZW51Lm9uQ2xpY2tXaWRlLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNsb3NlID0gaXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLm16cC1jLW1lbnUtYnV0dG9uLWNsb3NlJyk7XG4gICAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1lbnUub25DbG9zZUJ1dHRvbkNsaWNrLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSB3aXRoIGVzY2FwZSBrZXlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBNZW51Lm9uRG9jdW1lbnRLZXlVcCwgZmFsc2UpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmQgZXZlbnRzIGZvciB3aWRlIHZpZXdwb3J0cy5cbiAgICAgKi9cbiAgICBNZW51LnVuYmluZEV2ZW50c1dpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm16cC1jLW1lbnUtY2F0ZWdvcnkubXpwLWpzLWV4cGFuZGFibGUnKTtcbiAgICAgICAgdmFyIGxpbms7XG4gICAgICAgIHZhciBjbG9zZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgTWVudS5vbk1vdXNlRW50ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBNZW51Lm9uTW91c2VMZWF2ZSwgZmFsc2UpO1xuICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBNZW51Lm9uRm9jdXNPdXQsIGZhbHNlKTtcblxuICAgICAgICAgICAgbGluayA9IGl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5tenAtYy1tZW51LXRpdGxlJyk7XG4gICAgICAgICAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTWVudS5vbkNsaWNrV2lkZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICBjbG9zZSA9IGl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5tenAtYy1tZW51LWJ1dHRvbi1jbG9zZScpO1xuICAgICAgICAgICAgY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNZW51Lm9uQ2xvc2VCdXR0b25DbGljaywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBNZW51Lm9uRG9jdW1lbnRLZXlVcCwgZmFsc2UpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50cyBmb3Igc21hbGwgdmlld3BvcnRzLlxuICAgICAqL1xuICAgIE1lbnUuYmluZEV2ZW50c1NtYWxsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tenAtYy1tZW51LWNhdGVnb3J5Lm16cC1qcy1leHBhbmRhYmxlIC5tenAtYy1tZW51LXRpdGxlJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNZW51Lm9uQ2xpY2tTbWFsbCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVuYmluZCBldmVudHMgZm9yIHNtYWxsIHZpZXdwb3J0cy5cbiAgICAgKi9cbiAgICBNZW51LnVuYmluZEV2ZW50c1NtYWxsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tenAtYy1tZW51LWNhdGVnb3J5Lm16cC1qcy1leHBhbmRhYmxlIC5tenAtYy1tZW51LXRpdGxlJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNZW51Lm9uQ2xpY2tTbWFsbCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCBpbml0aWFsIEFSSUEgbWVudSBwYW5lbCBzdGF0ZXMuXG4gICAgICovXG4gICAgTWVudS5zZXRBcmlhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tenAtYy1tZW51LWNhdGVnb3J5Lm16cC1qcy1leHBhbmRhYmxlIC5tenAtYy1tZW51LXRpdGxlJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuaGFuY2VzIHRoZSBtZW51IGZvciAxc3QgY2xhc3MgSlMgc3VwcG9ydC5cbiAgICAgKi9cbiAgICBNZW51LmVuaGFuY2VKUyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tenAtYy1tZW51Jyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtZW51W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ216cC1pcy1iYXNpYycpO1xuICAgICAgICAgICAgbWVudVtpXS5jbGFzc0xpc3QuYWRkKCdtenAtaXMtZW5oYW5jZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCYXNpYyBmZWF0dXJlIGRldGVjdCBmb3IgMXN0IGNsYXNzIG1lbnUgSlMgc3VwcG9ydC5cbiAgICAgKi9cbiAgICBNZW51LmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2YgTXpwLlN1cHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIE16cC5TdXBwb3J0cy5tYXRjaE1lZGlhICYmIE16cC5TdXBwb3J0cy5jbGFzc0xpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSBtZW51LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhYmxlIG9wdGlvbnMuXG4gICAgICovXG4gICAgTWVudS5pbml0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1lbnUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgTWVudS5oYW5kbGVTdGF0ZSgpO1xuICAgICAgICAgICAgTWVudS5zZXRBcmlhKCk7XG4gICAgICAgICAgICBNZW51LmVuaGFuY2VKUygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5NenAuTWVudSA9IE1lbnU7XG5cbn0pKHdpbmRvdy5NenApO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLy8gY3JlYXRlIG5hbWVzcGFjZVxuaWYgKHR5cGVvZiBNenAgPT09ICd1bmRlZmluZWQnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmxvY2stc2NvcGVkLXZhclxuICAgIHZhciBNenAgPSB7fTtcbn1cblxuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBOYXZpZ2F0aW9uID0ge307XG4gICAgdmFyIG5hdkl0ZW1zTGlzdHM7XG4gICAgdmFyIF9vcHRpb25zID0ge1xuICAgICAgICBvbk5hdk9wZW46IG51bGwsXG4gICAgICAgIG9uTmF2Q2xvc2U6IG51bGxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgbmF2aWdhdGlvbiBtZW51IGJ1dHRvbiBgY2xpY2tgIGV2ZW50cy5cbiAgICAgKi9cbiAgICBOYXZpZ2F0aW9uLm9uQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciB0aGlzTmF2SXRlbUxpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5tenAtYy1uYXZpZ2F0aW9uLWl0ZW1zJyk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBidXR0b24gc3RhdGVcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbXpwLWlzLWFjdGl2ZScpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBtZW51IHN0YXRlXG4gICAgICAgIHRoaXNOYXZJdGVtTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdtenAtaXMtb3BlbicpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBhcmlhLWV4cGVuZGVkIHN0YXRlIG9uIG1lbnUuXG4gICAgICAgIHZhciBleHBhbmRlZCA9IHRoaXNOYXZJdGVtTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ216cC1pcy1vcGVuJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXNOYXZJdGVtTGlzdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCk7XG5cbiAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIF9vcHRpb25zLm9uTmF2T3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF9vcHRpb25zLm9uTmF2T3Blbih0aGlzTmF2SXRlbUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfb3B0aW9ucy5vbk5hdkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgX29wdGlvbnMub25OYXZDbG9zZSh0aGlzTmF2SXRlbUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCBpbml0aWFsIEFSSUEgbmF2aWdhdGlvbiBzdGF0ZXMuXG4gICAgICovXG4gICAgTmF2aWdhdGlvbi5zZXRBcmlhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF2SXRlbXNMaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmF2SXRlbXNMaXN0c1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQmluZCBuYXZpZ2F0aW9uIGV2ZW50IGhhbmRsZXJzLlxuICAgICAqL1xuICAgIE5hdmlnYXRpb24uYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZJdGVtc0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm16cC1jLW5hdmlnYXRpb24taXRlbXMnKTtcbiAgICAgICAgaWYgKG5hdkl0ZW1zTGlzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXpwLWMtbmF2aWdhdGlvbi1tZW51LWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXZCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmF2QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE5hdmlnYXRpb24ub25DbGljaywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTmF2aWdhdGlvbi5zZXRBcmlhKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSBtZW51LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhYmxlIG9wdGlvbnMuXG4gICAgICovXG4gICAgTmF2aWdhdGlvbi5pbml0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBfb3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgTmF2aWdhdGlvbi5iaW5kRXZlbnRzKCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5NenAuTmF2aWdhdGlvbiA9IE5hdmlnYXRpb247XG5cbn0pKCk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiAqIEluaXRpYWxpemUgUHJvdG9jb2wgTmF2aWdhdGlvbi5cbiAqL1xuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2YgTXpwID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgTXpwLk1lbnUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBNenAuTmF2aWdhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoYXNNZWRpYVF1ZXJpZXMgPSB0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgZnVuY3Rpb24gb25JbWFnZUxvYWQoZSkge1xuICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVPbk1lbnVPcGVuKGVsKSB7XG4gICAgICAgIGlmICghaGFzTWVkaWFRdWVyaWVzIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhcmRJbWFnZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tenAtYy1jYXJkLWltYWdlJyk7XG5cbiAgICAgICAgaWYgKGNhcmRJbWFnZSkge1xuICAgICAgICAgICAgdmFyIG5ld1NyYyA9IGNhcmRJbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG5cbiAgICAgICAgICAgIGlmIChuZXdTcmMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3JjU2V0ID0gY2FyZEltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXdTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlLnNyY3NldCA9IG5ld1NyY1NldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXJkSW1hZ2Uuc3JjID0gbmV3U3JjO1xuICAgICAgICAgICAgICAgIGNhcmRJbWFnZS5vbmxvYWQgPSBvbkltYWdlTG9hZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEZ4QUJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBNb3ppbGxhLkNsaWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXpwLWMtbmF2aWdhdGlvbicpO1xuICAgICAgICB2YXIgZnhhQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm16cC1jLW5hdmlnYXRpb24gLmMtbmF2aWdhdGlvbi1meGEtY3RhJyk7XG5cbiAgICAgICAgLy8gVXNlciBzaG91bGQgYmUgb24gRmlyZWZveCBkZXNrdG9wLCBuYXYgc2hvdWxkIGJlIHByZXNlbnQgb24gcGFnZSwgYW5kIHRoZSBGeEEgYnV0dG9uIHNob3VsZCBleGlzdC5cbiAgICAgICAgaWYgKCFNb3ppbGxhLkNsaWVudC5pc0ZpcmVmb3hEZXNrdG9wIHx8ICFuYXYgfHwgIWZ4YUJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnV0dG9uIGlzIGhpZGRlbiBmcm9tIG1vc3QgbG9jYWxlcyBmb3Igbm93IHNvIG1ha2Ugc3VyZSBpdCBleGlzdHMgYmVmb3JlIHdlIG1lc3Mgd2l0aCBpdC5cbiAgICAgICAgaWYgKGZ4YUJ1dHRvbikge1xuICAgICAgICAgICAgdmFyIGZ4YUJ1dHRvbkFsdEhyZWYgPSBmeGFCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWFsdC1ocmVmJyk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYnV0dG9uIGlmIHVzZXIgaXMgc2lnbmVkIGluXG4gICAgICAgICAgICBNb3ppbGxhLkNsaWVudC5nZXRGeGFEZXRhaWxzKGZ1bmN0aW9uKGRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWlscy5zZXR1cCkge1xuICAgICAgICAgICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZnhhLXNpZ25lZC1pbicpO1xuICAgICAgICAgICAgICAgICAgICBmeGFCdXR0b24uaHJlZiA9IGZ4YUJ1dHRvbkFsdEhyZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RnhBQnV0dG9uKCk7XG5cbiAgICBNenAuTWVudS5pbml0KHtcbiAgICAgICAgb25NZW51T3BlbjogaGFuZGxlT25NZW51T3BlblxuICAgIH0pO1xuXG4gICAgTXpwLk5hdmlnYXRpb24uaW5pdCgpO1xufSkoKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8vIGNyZWF0ZSBuYW1lc3BhY2VcbmlmICh0eXBlb2YgTXpwID09PSAndW5kZWZpbmVkJykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJsb2NrLXNjb3BlZC12YXJcbiAgICB2YXIgTXpwID0ge307XG59XG5cbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgTGFuZ1N3aXRjaGVyID0ge307XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIFVSTCBwYXRobmFtZSB3aXRoIHByZWNlZGVkIGJ5IGEgbmV3IHBhZ2UgbG9jYWxlLlxuICAgICAqIEFzc3VtZXMgZmlyc3QgcGF0aCBpbW1lZGlhdGVseSBhZnRlciBob3N0bmFtZSBpcyB0aGUgcGFnZSBsb2NhbGUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IExvY2F0aW9uIGludGVyZmFjZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBOZXdseSBzZWxlY3RlZCBsYW5ndWFnZSBjb2RlIGUuZy4gYGRlYFxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcGF0aG5hbWUgZS5nLiBgL2RlL2ZpcmVmb3gvYFxuICAgICAqL1xuICAgIExhbmdTd2l0Y2hlci5zd2l0Y2hQYXRoID0gZnVuY3Rpb24obG9jYXRpb24sIG5ld0xhbmcpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoJy8nKTtcbiAgICAgICAgdmFyIGN1cnJlbnRMYW5nID0gJy8nICsgcGFydHNbMF0gKyAnLyc7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCBmaXJzdCBwYXRoIGlzIGEgdmFsaWQgbGFuZyBjb2RlLlxuICAgICAgICBpZiAoIS9eKFxcL1xcd3syfS1cXHd7Mn1cXC98XFwvXFx3ezIsM31cXC8pLy50ZXN0KGN1cnJlbnRMYW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybHBhdGggPSBwYXJ0cy5zbGljZSgxKS5qb2luKCcvJyk7XG4gICAgICAgIHJldHVybiAnLycgKyBuZXdMYW5nICsgJy8nICsgdXJscGF0aCArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgcGFnZSB0byBkZXN0aW5hdGlvbiBVUkwgaWYgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdGluYXRpb25cbiAgICAgKi9cbiAgICBMYW5nU3dpdGNoZXIuZG9SZWRpcmVjdCA9IGZ1bmN0aW9uKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGZvb3RlciBsYW5nIHN3aXRjaGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IEN1c3RvbSBjYWxsYmFjayBmb3IgYW5hbHl0aWNzLlxuICAgICAqL1xuICAgIExhbmdTd2l0Y2hlci5pbml0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm16cC1qcy1sYW5ndWFnZS1zd2l0Y2hlci1zZWxlY3QnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhbmd1YWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsYW5ndWFnZVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtbGFuZ3VhZ2UnLCBsYW5ndWFnZVtpXS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGxhbmd1YWdlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3TGFuZ3VhZ2UgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNMYW5ndWFnZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1sYW5ndWFnZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3VwcG9ydCBjdXN0b20gY2FsbGJhY2sgZm9yIHBhZ2UgYW5hbHl0aWNzLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJldmlvdXNMYW5ndWFnZSwgbmV3TGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIExhbmdTd2l0Y2hlci5kb1JlZGlyZWN0KExhbmdTd2l0Y2hlci5zd2l0Y2hQYXRoKHdpbmRvdy5sb2NhdGlvbiwgbmV3TGFuZ3VhZ2UpKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHdpbmRvdy5NenAuTGFuZ1N3aXRjaGVyID0gTGFuZ1N3aXRjaGVyO1xuXG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyoqXG4gKiBJbml0aWFsaXplIFByb3RvY29sIGxhbmd1YWdlIHN3aXRjaGVyLlxuICovXG4oZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBNenAgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBNenAuTGFuZ1N3aXRjaGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgTXpwLkxhbmdTd2l0Y2hlci5pbml0KGZ1bmN0aW9uKHByZXZpb3VzTGFuZ3VhZ2UsIG5ld0xhbmd1YWdlKSB7XG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XG4gICAgICAgICAgICAnZXZlbnQnOiAnY2hhbmdlLWxhbmd1YWdlJyxcbiAgICAgICAgICAgICdsYW5ndWFnZVNlbGVjdGVkJzogbmV3TGFuZ3VhZ2UsXG4gICAgICAgICAgICAncHJldmlvdXNMYW5ndWFnZSc6IHByZXZpb3VzTGFuZ3VhZ2VcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuXG4vLyBjcmVhdGUgbmFtZXNwYWNlXG5pZiAodHlwZW9mIE16cCA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBibG9jay1zY29wZWQtdmFyXG4gICAgdmFyIE16cCA9IHt9O1xufVxuXG4oZnVuY3Rpb24oZG9jLCBNenApIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgRGV0YWlscyA9IHt9O1xuICAgIHZhciBfY291bnQgPSAwO1xuXG4gICAgRGV0YWlscy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIE16cC5TdXBwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE16cC5VdGlscyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBNenAuU3VwcG9ydHMuY2xhc3NMaXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG9wZW5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBpZCBvZiB0aGUgY29udGFpbmVyIHRvIG9wZW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICovXG4gICAgRGV0YWlscy5vcGVuID0gZnVuY3Rpb24oaWQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbnRyb2wgPSBkb2MucXVlcnlTZWxlY3RvcignW2FyaWEtY29udHJvbHM9JyArIGlkICsgJ10nKTtcbiAgICAgICAgdmFyIGRldGFpbHMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBjb250cm9sLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY2xvc2VkJyk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkRldGFpbHNPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uRGV0YWlsc09wZW4oZGV0YWlscyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogY2xvc2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBpZCBvZiB0aGUgY29udGFpbmVyIHRvIGNsb3NlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqL1xuICAgIERldGFpbHMuY2xvc2UgPSBmdW5jdGlvbihpZCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgY29udHJvbCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdbYXJpYS1jb250cm9scz0nICsgaWQgKyAnXScpO1xuICAgICAgICB2YXIgZGV0YWlscyA9IGRvYy5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdpcy1jbG9zZWQnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uRGV0YWlsc0Nsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uRGV0YWlsc0Nsb3NlKGRldGFpbHMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRvZ2dsZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIGlkIG9mIHRoZSBjb250YWluZXIgdG8gdG9nZ2xlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqL1xuICAgIERldGFpbHMudG9nZ2xlID0gZnVuY3Rpb24oaWQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRldGFpbHMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB2YXIgaXNDbG9zZWQgPSBkZXRhaWxzLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblxuICAgICAgICBpZiAoaXNDbG9zZWQgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgRGV0YWlscy5vcGVuKGlkLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERldGFpbHMuY2xvc2UoaWQsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGhhbmRsZUNvbnRyb2xBY3RpdmF0aW9uXG4gICAgICogQHBhcmFtIHtFdmVudH0gZSAtIGV2ZW50IHRvIGhhbmRsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBEZXRhaWxzLmhhbmRsZUNvbnRyb2xBY3RpdmF0aW9uID0gZnVuY3Rpb24oZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgY29udHJvbCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgaWQgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgICBEZXRhaWxzLnRvZ2dsZShpZCwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGluaXRJdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsIC0gRWxlbWVudCB0byBwbGFjZSB0aGUgY29udHJvbCBpbnNpZGUgb2ZcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgLSBTZWxlY3RvciBmb3IgYWxsIGNvbnRyb2wgd3JhcHBlcnNcbiAgICAgKiAtIGFzc3VtZXMgZXZlcnkgc2libGluZyB1bnRpbCB0aGUgbmV4dCBjb250cm9sIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJvbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBEZXRhaWxzLmluaXRJdGVtID0gZnVuY3Rpb24oZWwsIHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBzdW1tYXJ5ID0gZWw7XG4gICAgICAgIHZhciBjb250cm9sID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB2YXIgZGV0YWlscztcbiAgICAgICAgdmFyIHBhcmVudCA9IHN1bW1hcnkucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHN1bW1hcnlTaWJsaW5ncztcblxuICAgICAgICAvLyBpZiBpdCdzIGFscmVhZHkgYmVlbiBpbml0YWxpemVkLCBkb24ndCBkbyBpdCBhZ2FpblxuICAgICAgICBpZiAoc3VtbWFyeS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4cGFuZFxuICAgICAgICAvLyBzaWJsaW5ncyBvZiB0aGUgc3VtbWFyeSwgdW50aWwgbmV4dCBzdW1tYXJ5XG4gICAgICAgIHN1bW1hcnlTaWJsaW5ncyA9IE16cC5VdGlscy5uZXh0VW50aWwoc3VtbWFyeSwgc2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIGxvb2sgdG8gc2VlIGlmIGFsbCBjaGlsZHJlbiBhcmUgYWxyZWFkeSBpbiBhIHdyYXBwZXIgd2UgY2FuIHVzZVxuICAgICAgICBpZiAoc3VtbWFyeVNpYmxpbmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgZGV0YWlscyA9IHN1bW1hcnlTaWJsaW5nc1swXTtcbiAgICAgICAgfSBlbHNlIGlmIChzdW1tYXJ5U2libGluZ3MubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICBkZXRhaWxzID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3VtbWFyeVNpYmxpbmdzLmZvckVhY2goZnVuY3Rpb24oc2libGluZykge1xuICAgICAgICAgICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoc2libGluZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN1bW1hcnkucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGV0YWlscywgc3VtbWFyeS5uZXh0U2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBjaGlsZHJlbiB3ZXJlIGZvdW5kLCBzb21ldGhpbmcgaXMgcHJvYmFibHkgd3JvbmcsIGxldCdzIHN0b3AgaGVyZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGNsYXNzIHRvIHBhcmVudCB0byBpbmRpY2F0ZSBqcyBpbml0aWFsaXplZFxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaXMtZGV0YWlscycpO1xuXG4gICAgICAgIC8vIGFkZCBjbGFzcyB0byBjb250ZW50IHdyYXBwZXJcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdtenAtanMtZGV0YWlscy13cmFwcGVyJyk7XG5cbiAgICAgICAgLy8gbG9vayBmb3IgZXhpc3RpbmcgSUQgdG8gdXNlXG4gICAgICAgIGlmKCFkZXRhaWxzLmlkKSB7XG4gICAgICAgICAgICAvLyBpZiBkZXRhaWxzIGFscmVhZHkgaGFzIElELCB1c2UgdGhhdCwgaWYgbm90IGFzc2lnbiBvbmUgdXNpbmcgdGhlIHNlbGVjdG9yIG1pbnVzIGFsbCBub3QtbGV0dGVyc1xuICAgICAgICAgICAgdmFyIHVuaXF1ZSA9IHNlbGVjdG9yLnJlcGxhY2UoL1teYS16QS1aXSsvZywgJycpO1xuICAgICAgICAgICAgZGV0YWlscy5pZCA9ICdleHBhbmQtJyArIHVuaXF1ZSArICctJysgX2NvdW50O1xuICAgICAgICAgICAgX2NvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBieSBkZWZhdWx0XG4gICAgICAgIC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBvcGVuIGF0dHJpYnV0ZVxuICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdpcy1jbG9zZWQnKTtcblxuICAgICAgICAvLyBDb250cm9sXG4gICAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAvLyBhZGQgYXJpYS1jb250cm9sc1xuICAgICAgICBjb250cm9sLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGRldGFpbHMuaWQpO1xuICAgICAgICAvLyBhZGQgYXJpYS1leHBhbmRlZFxuICAgICAgICBjb250cm9sLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgLy8gYWRkIGxpc3RlbmVyXG4gICAgICAgIGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBEZXRhaWxzLmhhbmRsZUNvbnRyb2xBY3RpdmF0aW9uKGUsIG9wdGlvbnMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIC8vIGNvcHkgdGhlIHN1bW1hcnkncyBjb250ZW50cyBpbnRvIHRoZSBjb250cm9sXG4gICAgICAgIHZhciBzdW1tYXJ5Q2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzdW1tYXJ5LmNoaWxkTm9kZXMpO1xuICAgICAgICBzdW1tYXJ5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhcHBlbmQgY29udHJvbCBlbGVtZW50XG4gICAgICAgIHN1bW1hcnkuYXBwZW5kQ2hpbGQoY29udHJvbCk7XG4gICAgICAgIHN1bW1hcnkuY2xhc3NMaXN0LmFkZCgnaXMtc3VtbWFyeScpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBkZXN0cm95SXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbCAtIEVsZW1lbnQgdGhlIGNvbnRyb2wgd2FzIHBsYWNlZCBpbnNpZGUgb2ZcbiAgICAgKiAtIGRvZXMgbm90IGF0dGVtcHQgdG8gcmVtb3ZlIHRoZSBkZXRhaWxzIHdyYXBwZXJcbiAgICAgKi9cbiAgICBEZXRhaWxzLmRlc3Ryb3lJdGVtID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIHN1bW1hcnkgPSBlbDtcbiAgICAgICAgdmFyIHBhcmVudCA9IHN1bW1hcnkucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIGRldGFpbHMgPSBzdW1tYXJ5Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgdmFyIGNvbnRyb2wgPSBzdW1tYXJ5LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG4gICAgICAgIC8vIGlmIGl0J3MgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZCwgZG9uJ3QgZG8gaXQgYWdhaW5cbiAgICAgICAgaWYgKHN1bW1hcnkucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGV0YWlscycpO1xuICAgICAgICBkZXRhaWxzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jbG9zZWQnKTtcbiAgICAgICAgLy8gbW92ZSBjb250cm9sJ3MgY29udGVudHMgYmFjayB0byBzdW1tYXJ5XG4gICAgICAgIHZhciBjb250cm9sQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250cm9sLmNoaWxkTm9kZXMpO1xuICAgICAgICBjb250cm9sQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgc3VtbWFyeS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdW1tYXJ5LnJlbW92ZUNoaWxkKGNvbnRyb2wpO1xuICAgICAgICBzdW1tYXJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1bW1hcnknKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciAtIENTUyBzZWxlY3RvciBtYXRjaGluZyBcInN1bW1hcnlcIiBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgICAgIC0gcGFzc2VkIGluIHRvIHRoZSBpbml0IGZ1bmN0aW9uIGFuZCBwYXNzZWQgYXJvdW5kIGZyb20gdGhlcmVcbiAgICAgICAgIGV4YW1wbGU6XG4gICAgICAgICB2YXIgdGVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgb25EZXRhaWxzT3BlbiA6IG15RGV0YWlsc09wZW5DYWxsYmFjaygpLFxuICAgICAgICAgICAgIG9uRGV0YWlsc0Nsb3NlIDogZnVuY3Rpb24oKXsgLy9hbm9ueW1vdXMgY2FsbGJhY2sgfVxuICAgICAgICAgfTtcbiAgICAgKi9cbiAgICBEZXRhaWxzLmluaXQgPSBmdW5jdGlvbihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIURldGFpbHMuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdW1tYXJpZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBjb250cm9scyBvbiB0aGUgcGFnZSBhbmQgaW5pdCB0aGVtIG9uZSBhdCBhIHRpbWVcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdW1tYXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIERldGFpbHMuaW5pdEl0ZW0oc3VtbWFyaWVzW2ldLCBzZWxlY3Rvciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvciAtIENTUyBzZWxlY3RvciBtYXRjaGluZyBcInN1bW1hcnlcIiBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBEZXRhaWxzLmRlc3Ryb3kgPSBmdW5jdGlvbihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc3VtbWFyaWVzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggY29udHJvbHMgb24gdGhlIHBhZ2UgYW5kIGRlc3Ryb3kgdGhlbSBvbmUgYXQgYSB0aW1lXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VtbWFyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBEZXRhaWxzLmRlc3Ryb3lJdGVtKHN1bW1hcmllc1tpXSwgc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNoZWNrIGlmIGRldGFpbHMgaXMgc3VwcG9ydGVkLCBpZiBub3QsIGluaXQgdGhpcyBhcyBhIHBvbHlmaWxsXG4gICAgaWYgKHR5cGVvZiBNenAuU3VwcG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQsIGFkZCBzdXBwb3J0XG4gICAgICAgIGlmKCFNenAuU3VwcG9ydHMuZGV0YWlscykge1xuICAgICAgICAgICAgRGV0YWlscy5pbml0KCdzdW1tYXJ5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbml0IGdlbmVyaWMgY2xhc3MgaW5kaWNhdGluZyBoZWFkaW5ncyBzaG91bGQgYmUgbWFkZSBpbnRvIG9wZW4vY2xvc2UgY29tcG9uZW5ldFxuICAgIERldGFpbHMuaW5pdCgnLm16cC1jLWRldGFpbHMgPiBoMicpO1xuICAgIERldGFpbHMuaW5pdCgnLm16cC1jLWRldGFpbHMgPiBoMycpO1xuICAgIERldGFpbHMuaW5pdCgnLm16cC1jLWRldGFpbHMgPiBoNCcpO1xuICAgIERldGFpbHMuaW5pdCgnLm16cC1jLWRldGFpbHMgPiBoNScpO1xuICAgIERldGFpbHMuaW5pdCgnLm16cC1jLWRldGFpbHMgPiBoNicpO1xuXG4gICAgTXpwLkRldGFpbHMgPSBEZXRhaWxzO1xuXG59KShkb2N1bWVudCwgd2luZG93Lk16cCk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gY2hlY2sgd2UgaGF2ZSBnbG9iYWwgdmFyaWFibGVcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5NenAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBNenAgPSB3aW5kb3cuTXpwO1xuICAgICAgICB2YXIgZm9vdGVySGVhZGluZ3MgPSAnLm16cC1jLWZvb3Rlci1zZWN0aW9ucyAubXpwLWMtZm9vdGVyLWhlYWRpbmcnO1xuXG4gICAgICAgIC8vIGNoZWNrIHdlIGhhdmUgZ2xvYmFsIFN1cHBvcnRzIGFuZCBEZXRhaWxzIGxpYnJhcnlcbiAgICAgICAgaWYgKHR5cGVvZiBNenAuU3VwcG9ydHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBNenAuRGV0YWlscyAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgLy8gY2hlY2sgYnJvd3NlciBzdXBwb3J0cyBtYXRjaE1lZGlhXG4gICAgICAgICAgICBpZihNenAuU3VwcG9ydHMubWF0Y2hNZWRpYSkge1xuICAgICAgICAgICAgICAgIHZhciBfbXFXaWRlID0gbWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDc5cHgpJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIGRldGFpbHMgaWYgc2NyZWVuIGlzIHNtYWxsXG4gICAgICAgICAgICAgICAgaWYgKF9tcVdpZGUubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICBNenAuRGV0YWlscy5pbml0KGZvb3RlckhlYWRpbmdzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZGV0YWlscyBpZiBzY3JlZW4gaXMgYmlnXG4gICAgICAgICAgICAgICAgX21xV2lkZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihtcSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgTXpwLkRldGFpbHMuaW5pdChmb290ZXJIZWFkaW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNenAuRGV0YWlscy5kZXN0cm95KGZvb3RlckhlYWRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSkoKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8qKlxuICogR2VuZXJhbCBET00gcmVhZHkgaGFuZGxlciBhcHBsaWVkIHRvIGFsbCBwYWdlcyBpbiBiYXNlIHRlbXBsYXRlLlxuICovXG4oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIHBhZ2UgbXVzdCBiZSBsb2FkZWQgYW5kIHJlYWR5IGJlZm9yZSBvbldpbmRvd0xvYWQgZmlyZXNcbiAgICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gICAgdmFyIHJlYWR5ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBvbldpbmRvd0xvYWQoKSB7XG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbG9hZGVkJyk7XG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IE1vemlsbGEuQ2xpZW50O1xuICAgICAgICB2YXIgdXRpbHMgPSBNb3ppbGxhLlV0aWxzO1xuXG4gICAgICAgIHV0aWxzLmluaXRNb2JpbGVEb3dubG9hZExpbmtzKCk7XG5cbiAgICAgICAgLyogQnVnIDEyNjQ4NDM6IEluIHBhcnRuZXIgZGlzdHJpYnV0aW9uIG9mIGRlc2t0b3AgRmlyZWZveCwgc3dpdGNoIHRoZVxuICAgICAgICBkb3dubG9hZHMgdG8gY29ycmVzcG9uZGluZyBwYXJ0bmVyIGJ1aWxkIG9mIEZpcmVmb3ggZm9yIEFuZHJvaWQuICovXG4gICAgICAgIGlmIChjbGllbnQuaXNGaXJlZm94RGVza3RvcCkge1xuICAgICAgICAgICAgY2xpZW50LmdldEZpcmVmb3hEZXRhaWxzKHV0aWxzLm1heWJlU3dpdGNoVG9EaXN0RG93bmxvYWRMaW5rcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3aW5kb3cubG9hZCBoYXBwZW5lZCBhbHJlYWR5LCBmaXJlIG9uV2luZG93TG9hZFxuICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICBvbldpbmRvd0xvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdGUgdGhhdCBkb2N1bWVudC5yZWFkeSBoYXBwZW5lZCB0byBpbmZvcm0gd2luZG93LmxvYWRcbiAgICAgICAgcmVhZHkgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpZiBkb2N1bWVudC5yZWFkeSBoYXBwZW5lZCBhbHJlYWR5LCBmaXJlIG9uV2luZG93TG9hZFxuICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgIG9uV2luZG93TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90ZSB0aGF0IHdpbmRvdy5sb2FkIGhhcHBlbmVkIGluIGNhc2UgZG9jdW1lbnQucmVhZHkgaGFzbid0XG4gICAgICAgIC8vIGZpbmlzaGVkIHlldFxuICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xufSkod2luZG93LmpRdWVyeSk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKipcbiogVXRpbGl0eSBjbGFzcyBmb3IgY29yZSBkYXRhTGF5ZXIgb2JqZWN0IHRvIHRyYWNrIGNvbnRleHR1YWwgdXNlciBhbmQgcGFnZSBkYXRhXG4qL1xuXG5pZiAodHlwZW9mIHdpbmRvdy5Nb3ppbGxhLkFuYWx5dGljcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTW96aWxsYS5BbmFseXRpY3MgPSB7fTtcbn1cblxuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBhbmFseXRpY3MgPSBNb3ppbGxhLkFuYWx5dGljcztcbiAgICB2YXIgaXNNb2Rlcm5Ccm93c2VyID0gJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50ICYmICdxdWVyeVNlbGVjdG9yQWxsJyBpbiBkb2N1bWVudDtcblxuICAgIC8qKiBSZXR1cm5zIHdoZXRoZXIgcGFnZSBoYXMgZG93bmxvYWQgYnV0dG9uLlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGggLSBVUkwgcGF0aCBuYW1lIGZhbGxiYWNrIGlmIHBhZ2UgSUQgZG9lcyBub3QgZXhpc3QuXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9IHN0cmluZy5cbiAgICAqL1xuICAgIGFuYWx5dGljcy5wYWdlSGFzRG93bmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFpc01vZGVybkJyb3dzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnZmFsc2UnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kb3dubG9hZC1vc10nKSAhPT0gbnVsbCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfTtcblxuICAgIC8qKiBSZXR1cm5zIHdoZXRoZXIgcGFnZSBoYXMgdmlkZW8uXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCAtIFVSTCBwYXRoIG5hbWUgZmFsbGJhY2sgaWYgcGFnZSBJRCBkb2VzIG5vdCBleGlzdC5cbiAgICAqIEByZXR1cm4ge1N0cmluZ30gc3RyaW5nLlxuICAgICovXG4gICAgYW5hbHl0aWNzLnBhZ2VIYXNWaWRlbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWlzTW9kZXJuQnJvd3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuICdmYWxzZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpICE9PSBudWxsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZVtzcmNePVwiaHR0cHM6Ly93d3cueW91dHViZVwiXScpICE9PSBudWxsKSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfTtcblxuICAgIC8qKiBSZXR1cm5zIHBhZ2UgdmVyc2lvbi5cbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIC0gVVJMIHBhdGggbmFtZSBmYWxsYmFjayBpZiBwYWdlIElEIGRvZXMgbm90IGV4aXN0LlxuICAgICogQHJldHVybiB7U3RyaW5nfSB2ZXJzaW9uIG51bWJlciBmcm9tIFVSTC5cbiAgICAqL1xuICAgIGFuYWx5dGljcy5nZXRQYWdlVmVyc2lvbiA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgdmFyIHBhdGhOYW1lID0gcGF0aCA/IHBhdGggOiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgdmFyIHZlcnNpb25SZXN1bHRzID0gL2ZpcmVmb3hcXC8oXFxkKyg/OlxcLlxcZCspP1xcLlxcZGE/XFxkPykvLmV4ZWMocGF0aE5hbWUpO1xuXG4gICAgICAgIHJldHVybiB2ZXJzaW9uUmVzdWx0cyA/IHZlcnNpb25SZXN1bHRzWzFdIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqIFJldHVybnMgbGF0ZXN0IEZ4IHZlcnNpb24uXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9IGxhdGVzdCBGeCB2ZXJzaW9uLlxuICAgICovXG4gICAgYW5hbHl0aWNzLmdldExhdGVzdEZ4VmVyc2lvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF0ZXN0LWZpcmVmb3gnKTtcbiAgICB9O1xuXG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB1c2VyIGlzIHJ1bm5pbmcgV2luZG93cyAxMCBpbiBTIG1vZGUuXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdWEgLSBVc2VyIEFnZW50IHN0cmluZy5cbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59LlxuICAgICovXG4gICAgYW5hbHl0aWNzLmlzV2luMTBTID0gZnVuY3Rpb24odWEpIHtcbiAgICAgICAgdWEgPSB1YSB8fCBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgICAgIHZhciBpc0VkZ2UgPSB1YS5pbmRleE9mKCdFZGdlJykgPiAtMTtcblxuICAgICAgICBpZiAoIWlzRWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBtb2RlID0gSlNPTi5wYXJzZSh3aW5kb3cuZXh0ZXJuYWwuZ2V0SG9zdEVudmlyb25tZW50VmFsdWUoJ29zLW1vZGUnKSk7XG4gICAgICAgICAgICBpZiAobW9kZSAmJiBtb2RlWydvcy1tb2RlJ10gPT09ICcyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBHQS1mb3JtYXR0ZWQgRnhBIGRldGFpbHNcbiAgICAqIFRoZSBzcGVjcyBmb3IgdGhpcyBhcmUgYSBjb21iaW5hdGlvbiBvZjpcbiAgICAqIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQ1NzAyNCNjMzNcbiAgICAqIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQ1NzAwNCNjMjJcbiAgICAqIE91ciBpbXBsbWVudGF0aW9uIGl0IG1pZ2h0IGRldmlhdGUgZnJvbSB0aGUgc3BlYyB3aGVyZSB0aGVyZSB3YXMgY29uZmxpY3RpbmcgaW5mbyBpbiB0aGUgc3BlYy5cbiAgICAqXG4gICAgKiBEYXRhIGFycml2ZXMgZnJvbSBDbGllbnQuZ2V0RnhhRGV0YWlscyBhcyBhbiBvYmplY3QsIHNlZSBnZXRGeGFEZXRhaWxzIGZvciBkZXRhaWxzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBGeGFEZXRhaWxzIC0gb2JqZWN0IG9mIEZ4QSBkZXRhaWxzIHJldHVybmVkIGJ5IGdldEZ4YURldGFpbHNcbiAgICAqIEByZXR1cm4ge09iamVjdH0gRnhBIGRldGFpbHMgZm9ybWF0dGVkIGZvciBHQVxuICAgICovXG4gICAgYW5hbHl0aWNzLmZvcm1hdEZ4YURldGFpbHMgPSBmdW5jdGlvbihGeGFEZXRhaWxzKSB7XG4gICAgICAgIC8vIHN0YXJ0IHdpdGggZW1wdHkgb2JqZWN0XG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSB7fTtcblxuICAgICAgICBpZiAoRnhhRGV0YWlscy5maXJlZm94ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBvbmx5IGFkZCBGeEEgYWNjb3VudCBkZXRhaWxzIGlmIHRoaXMgaXMgRngsIG90aGVyd2lzZSB0aGVpciBzZWdtZW50IGlzIGp1c3QgJ05vdCBGaXJlZm94J1xuICAgICAgICAgICAgaWYgKEZ4YURldGFpbHMubW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveCBNb2JpbGVcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBU2VnbWVudCA9ICdGaXJlZm94IE1vYmlsZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggRGVza3RvcFxuICAgICAgICAgICAgICAgIGlmIChGeGFEZXRhaWxzLnNldHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBGeEFMb2dpblxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBTG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgRnhBU2VnbWVudCB3aXRoIGRlZmF1bHQgdmFsdWUsIHRvIGJlIHJlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkLkZ4QVNlZ21lbnQgPSAnTG9nZ2VkIGluJztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlIEZ4QVNlZ21lbnQgdG8gTGVnYWN5IGlmIHRoaXMgaXMgYW4gb2xkIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEZ4YURldGFpbHMubGVnYWN5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBU2VnbWVudCA9ICdMZWdhY3kgRmlyZWZveCc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZXMgdG8gY29tcGFyZSB0byBkZXRlcm1pbmUgdGhlIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2JpbGVTeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNrdG9wU3luYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVza3RvcE11bHRpU3luYyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBGeEFNb2JpbGVTeW5jXG4gICAgICAgICAgICAgICAgICAgIGlmIChGeGFEZXRhaWxzLm1vYmlsZURldmljZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBTW9iaWxlU3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVTeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChGeGFEZXRhaWxzLm1vYmlsZURldmljZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZC5GeEFNb2JpbGVTeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBTW9iaWxlU3luYyA9ICd1bmtub3duJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBGeEFNdWx0aURlc2t0b3BTeW5jXG4gICAgICAgICAgICAgICAgICAgIGlmIChGeGFEZXRhaWxzLmRlc2t0b3BEZXZpY2VzID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkLkZ4QU11bHRpRGVza3RvcFN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcE11bHRpU3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoRnhhRGV0YWlscy5kZXNrdG9wRGV2aWNlcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkLkZ4QU11bHRpRGVza3RvcFN5bmMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BTeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChGeGFEZXRhaWxzLmRlc2t0b3BEZXZpY2VzID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZC5GeEFNdWx0aURlc2t0b3BTeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBTXVsdGlEZXNrdG9wU3luYyA9ICd1bmtub3duJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZmluZSBGeEFTZWdtZW50IGJhc2VkIG9uIGRldmljZSBzeW5jaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNrdG9wTXVsdGlTeW5jICYmIG1vYmlsZVN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZC5GeEFTZWdtZW50ID0gJ011bHRpLURlc2t0b3AgYW5kIE1vYmlsZSBTeW5jJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXNrdG9wU3luYyAmJiBtb2JpbGVTeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBU2VnbWVudCA9ICdEZXNrdG9wIGFuZCBNb2JpbGUgU3luYyc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVza3RvcE11bHRpU3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkLkZ4QVNlZ21lbnQgPSAnTXVsdGktRGVza3RvcCBTeW5jJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IGxvZ2dlZCBpbnRvIEZ4QVxuICAgICAgICAgICAgICAgICAgICBpZiAoRnhhRGV0YWlscy5sZWdhY3kgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvbyBvbGQgdG8gc3VwcG9ydCBVSVRvdXIgb3IgRnhBLCBvciBwcmUgRnhBU2VnbWVudCBhbmQgbG9nZ2VkIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkLkZ4QVNlZ21lbnQgPSAnTGVnYWN5IEZpcmVmb3gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkLkZ4QUxvZ2luID0gJ3Vua25vd24nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IHRvbyBvbGQsIGp1c3QgbG9nZ2VkIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkLkZ4QVNlZ21lbnQgPSAnTm90IGxvZ2dlZCBpbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQuRnhBTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZC5GeEFTZWdtZW50ID0gJ05vdCBGaXJlZm94JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkO1xuICAgIH07XG5cbiAgICAvKiogTW9ua2V5IHBhdGNoIGZvciBkYXRhTGF5ZXIucHVzaFxuICAgICogICBBZGRzIGhyZWYgc3RyaXBwZWQgb2YgbG9jYWxlIHRvIGxpbmsgY2xpY2sgb2JqZWN0cyB3aGVuIHB1c2hlZCB0byB0aGUgZGF0YUxheWVyLFxuICAgICogICBhbHNvIHJlbW92ZXMgcHJvdG9jb2wgYW5kIGhvc3QgaWYgc2FtZSBhcyBwYXJlbnQgcGFnZSBmcm9tIGhyZWYuXG4gICAgKi9cbiAgICBhbmFseXRpY3MudXBkYXRlRGF0YUxheWVyUHVzaCA9IGZ1bmN0aW9uKGhvc3QpIHtcbiAgICAgICAgdmFyIGRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICB2YXIgaG9zdG5hbWUgPSBob3N0IHx8IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lO1xuXG4gICAgICAgIGRhdGFMYXllci5kZWZhdWx0UHVzaCA9IGRhdGFMYXllci5wdXNoO1xuICAgICAgICBkYXRhTGF5ZXIucHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmV2ZW50ID09PSAnZ3RtLmxpbmtDbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBhcmd1bWVudHNbaV1bJ2d0bS5lbGVtZW50J107XG4gICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gZWxlbWVudC5ocmVmO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhvc3RuYW1lID09PSBob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGhvc3QgYW5kIGxvY2FsZSBmcm9tIGludGVybmFsIGxpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pKD86W14vXSkqLywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsZSA9IHBhdGgubWF0Y2goL14oXFwvXFx3ezJ9LVxcd3syfVxcL3xcXC9cXHd7MiwzfVxcLykvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGxvY2FsZSA/IHBhdGgucmVwbGFjZShsb2NhbGVbMF0sICcvJykgOiBwYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzW2ldLm5ld0NsaWNrSHJlZiA9IHBhdGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbaV0ubmV3Q2xpY2tIcmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYXllci5kZWZhdWx0UHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYXllci5kZWZhdWx0UHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLy8gaW5pdCBjb3JlIGRhdGFMYXllciBvYmplY3QgYW5kIHB1c2ggaW50byBkYXRhTGF5ZXJcbiQoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGFuYWx5dGljcyA9IE1vemlsbGEuQW5hbHl0aWNzO1xuICAgIHZhciBjbGllbnQgPSBNb3ppbGxhLkNsaWVudDtcbiAgICB2YXIgZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgdmFyIGZpcmVmb3hEZXRhaWxzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB2YXIgZnhhRGV0YWlsc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBzZW5kQ29yZURhdGFMYXllcigpIHtcbiAgICAgICAgdmFyIGRhdGFMYXllckNvcmUgPSB7XG4gICAgICAgICAgICAnZXZlbnQnOiAnY29yZS1kYXRhbGF5ZXItbG9hZGVkJyxcbiAgICAgICAgICAgICdwYWdlSGFzRG93bmxvYWQnOiBhbmFseXRpY3MucGFnZUhhc0Rvd25sb2FkKCksXG4gICAgICAgICAgICAncGFnZUhhc1ZpZGVvJzogYW5hbHl0aWNzLnBhZ2VIYXNWaWRlbygpLFxuICAgICAgICAgICAgJ3BhZ2VWZXJzaW9uJzogYW5hbHl0aWNzLmdldFBhZ2VWZXJzaW9uKCksXG4gICAgICAgICAgICAvLyB3aGl0ZSBsaXN0ZWQgZm9yIHd3dy5tb3ppbGwub3JnLCB3aWxsIGFsd2F5cyByZXR1cm4gZmFsc2Ugb24gb3RoZXIgZG9tYWluc1xuICAgICAgICAgICAgJ3Rlc3RQaWxvdFVzZXInOiAndGVzdHBpbG90QWRkb24nIGluIG5hdmlnYXRvciA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICAgICAncmVsZWFzZVdpbmRvd1ZlcnNpb24nOiBhbmFseXRpY3MuZ2V0TGF0ZXN0RnhWZXJzaW9uKCksXG4gICAgICAgICAgICAnd2luMTBTVXNlcic6IGFuYWx5dGljcy5pc1dpbjEwUygpXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YUxheWVyLnB1c2goZGF0YUxheWVyQ29yZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tTZW5kQ29yZURhdGFMYXllcigpIHtcbiAgICAgICAgaWYgKGZpcmVmb3hEZXRhaWxzQ29tcGxldGUgJiYgZnhhRGV0YWlsc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICBzZW5kQ29yZURhdGFMYXllcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpZW50LmdldEZ4YURldGFpbHMoZnVuY3Rpb24oZGV0YWlscykge1xuICAgICAgICBkYXRhTGF5ZXIucHVzaChhbmFseXRpY3MuZm9ybWF0RnhhRGV0YWlscyhkZXRhaWxzKSk7XG4gICAgICAgIGZ4YURldGFpbHNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNoZWNrU2VuZENvcmVEYXRhTGF5ZXIoKTtcbiAgICB9KTtcblxuICAgIGlmIChjbGllbnQuaXNGaXJlZm94RGVza3RvcCB8fCBjbGllbnQuaXNGaXJlZm94QW5kcm9pZCkge1xuICAgICAgICBjbGllbnQuZ2V0RmlyZWZveERldGFpbHMoZnVuY3Rpb24oZGV0YWlscykge1xuICAgICAgICAgICAgZGF0YUxheWVyLnB1c2goZGV0YWlscyk7XG4gICAgICAgICAgICBmaXJlZm94RGV0YWlsc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrU2VuZENvcmVEYXRhTGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmlyZWZveERldGFpbHNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNoZWNrU2VuZENvcmVEYXRhTGF5ZXIoKTtcbiAgICB9XG5cbiAgICBhbmFseXRpY3MudXBkYXRlRGF0YUxheWVyUHVzaCgpO1xufSk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gUmV0cmlldmUgc2VhcmNoIHBhcmFtcyBhcyBhIG9iamVjdCBmb3IgZWFzaWVyIGFjY2Vzc1xuICAgIC8vIFRoaXMgaXMgYSBzaW1wbGUgdmVyc2lvbiBvZiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVVJMU2VhcmNoUGFyYW1zXG4gICAgdmFyIF9TZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICAgIHNlYXJjaCA9IHNlYXJjaCB8fCBsb2NhdGlvbi5zZWFyY2ggfHwgJyc7XG5cbiAgICAgICAgdGhpcy5wYXJhbXMgPSBfU2VhcmNoUGFyYW1zLnF1ZXJ5U3RyaW5nVG9PYmplY3Qoc2VhcmNoKTtcbiAgICB9O1xuXG4gICAgLy8gdGFrZXMgYW4gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyBhbmQgY29udmVydHMgaXQgdG8gYSBxdWVyeXN0cmluZywgZS5nLlxuICAgIC8vIGtleTE9dmFsMSZrZXkyPXZhbDIma2V5Mz12YWwzIGV0Y1xuICAgIF9TZWFyY2hQYXJhbXMub2JqZWN0VG9RdWVyeVN0cmluZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIHNlYXJjaFN0cmluZ3MgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBwYXJhbSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hTdHJpbmdzLnB1c2goW2VuY29kZVVSSUNvbXBvbmVudChwYXJhbSksIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcGFyYW1dKV0uam9pbignPScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFyY2hTdHJpbmdzLmpvaW4oJyYnKTtcbiAgICB9O1xuXG4gICAgLy8gdGFrZXMgYSBxdWVyeXN0cmluZyBhbmQgY29udmVydHMgaXQgdG8gYW4gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlyc1xuICAgIF9TZWFyY2hQYXJhbXMucXVlcnlTdHJpbmdUb09iamVjdCA9IGZ1bmN0aW9uIChxcykge1xuICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgIHFzID0gcXMubWF0Y2goL15cXD8/KC4qKS8pWzFdO1xuICAgICAgICBxcyA9IHFzID8gcXMuc3BsaXQoL1smO10vbSkgOiBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBxc1tpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICB2YXIga2V5ID0gcGFyYW1bMF07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJhbVsxXTtcblxuICAgICAgICAgICAgcGFyYW1zW2tleV0gPSAhaXNOYU4odmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcblxuICAgIF9TZWFyY2hQYXJhbXMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zW2tleV07XG4gICAgfTtcblxuICAgIF9TZWFyY2hQYXJhbXMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFyYW1zW2tleV0gPSAhaXNOYU4odmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX1NlYXJjaFBhcmFtcy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5IGluIHRoaXMucGFyYW1zO1xuICAgIH07XG5cbiAgICBfU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtc1trZXldO1xuICAgIH07XG5cbiAgICBfU2VhcmNoUGFyYW1zLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9TZWFyY2hQYXJhbXMub2JqZWN0VG9RdWVyeVN0cmluZyh0aGlzLnBhcmFtcyk7XG4gICAgfTtcblxuICAgIF9TZWFyY2hQYXJhbXMucHJvdG90eXBlLnV0bVBhcmFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXRtcyA9IHt9O1xuICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXM7XG5cbiAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyYW1zLCBwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0uaW5kZXhPZigndXRtXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0bXNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRtcztcbiAgICB9O1xuXG4gICAgX1NlYXJjaFBhcmFtcy5wcm90b3R5cGUudXRtUGFyYW1zRnhBID0gZnVuY3Rpb24ocGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfHwgJyc7XG5cbiAgICAgICAgdmFyIHV0bXMgPSB0aGlzLnV0bVBhcmFtcygpO1xuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG4gICAgICAgIC8vIHNldCB0byBkZWZhdWx0IHZhbHVlIGlmIG5vdCBzcGVjaWZpZWQgaW4gVVJMXG4gICAgICAgIGlmICghdXRtcy51dG1fY2FtcGFpZ24pIHtcbiAgICAgICAgICAgIC8vIHV0bV8qIHZhbHVlcyB3aWxsIGJlIGVuY29kZWQgb24gdGhlIHByb2R1Y3Qgc2lkZSwgc28gbm8gbmVlZCB0b1xuICAgICAgICAgICAgLy8gcHJlLWVtcHRpdmVseSBlbmNvZGUgaGVyZVxuICAgICAgICAgICAgdXRtcy51dG1fY2FtcGFpZ24gPSAncGFnZSByZWZlcnJhbCAtIG5vdCBwYXJ0IG9mIGEgY2FtcGFpZ24nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGxvY2FsZSBmcm9tIHBhdGhuYW1lIGFuZCBzdG9yZSByZXN1bHQgaW4gdXRtX2NvbnRlbnRcbiAgICAgICAgLy8gZS5nLiBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9pdC9maXJlZm94L3N5bmMvP2Zvbz1iYXIgc2hvdWxkXG4gICAgICAgIC8vIGhhdmUgdXRtX2NvbnRlbnQgdmFsdWUgb2YgL2ZpcmVmb3gvc3luYy8uXG4gICAgICAgIHZhciBtYXRjaGVzID0gcGF0aG5hbWUubWF0Y2goL1xcL1tcXHctXSsoXFwvLiopJC8pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBlbmNvZGUgLSB3aWxsIGJlIGRvbmUgb24gcHJvZHVjdCBzaWRlXG4gICAgICAgICAgICB1dG1zLnV0bV9jb250ZW50ID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbiAgICAgICAgLy8gZW5zdXJlIGFsbCB2YWx1ZXMgYXJlIHN0cmluZ3MsIGFzIG5vIG51bWVyaWMgdmFsdWVzIGFyZSBhbGxvd2VkXG4gICAgICAgIC8vIGludG8gVUlUb3VyLnNob3dGaXJlZm94QWNjb3VudHNcbiAgICAgICAgT2JqZWN0LmtleXModXRtcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHV0bXNba2V5XSA9IHV0bXNba2V5XS50b1N0cmluZygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRtcztcbiAgICB9O1xuXG4gICAgd2luZG93Ll9TZWFyY2hQYXJhbXMgPSBfU2VhcmNoUGFyYW1zO1xuXG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIFJlbW92ZSBhIGdpdmVuIHBhcmFtYXRlciBmcm9tIGEgVVJMIHF1ZXJ5IHN0cmluZ1xuICAgIC8vIFRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTY5NDExMDQvcmVtb3ZlLWEtcGFyYW1ldGVyLXRvLXRoZS11cmwtd2l0aC1qYXZhc2NyaXB0XG4gICAgZnVuY3Rpb24gcmVtb3ZlUGFyYW0oa2V5LCBzb3VyY2VVUkwpIHtcbiAgICAgICAgdmFyIHJ0biA9IHNvdXJjZVVSTC5zcGxpdCgnPycpWzBdO1xuICAgICAgICB2YXIgcGFyYW07XG4gICAgICAgIHZhciBwYXJhbXNBcnJheSA9IFtdO1xuICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSAoc291cmNlVVJMLmluZGV4T2YoJz8nKSAhPT0gLTEpID8gc291cmNlVVJMLnNwbGl0KCc/JylbMV0gOiAnJztcblxuICAgICAgICBpZiAocXVlcnlTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICBwYXJhbXNBcnJheSA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcGFyYW1zQXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICBwYXJhbSA9IHBhcmFtc0FycmF5W2ldLnNwbGl0KCc9JylbMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ0biA9IHJ0biArICc/JyArIHBhcmFtc0FycmF5LmpvaW4oJyYnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnRuO1xuICAgIH1cblxuICAgIC8vIFN5bmMgaXMgRmlyZWZveCBvbmx5IHNvIHJlbW92ZSB0aGUgU3luYyBwYXJhbXMgZm9yIG5vbi1GaXJlZm94ZXNcbiAgICBpZiAoIU1vemlsbGEuQ2xpZW50LmlzRmlyZWZveCkge1xuICAgICAgICB2YXIgZnhhU2lnbmluTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5meGEtc2lnbmluID4gYScpO1xuICAgICAgICB2YXIgZnhhU2lnbmluVVJJO1xuICAgICAgICB2YXIgcmV2aXNlZEZ4YVNpZ25pblVSSTtcbiAgICAgICAgdmFyIGZpbmFsRnhhU2lnbmluVVJJO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnhhU2lnbmluTGluay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZnhhU2lnbmluVVJJID0gZnhhU2lnbmluTGlua1tpXS5ocmVmO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCByZW1vdmUgdGhlIGNvbnRleHQgcGFyYW1cbiAgICAgICAgICAgIHJldmlzZWRGeGFTaWduaW5VUkkgPSByZW1vdmVQYXJhbSgnY29udGV4dCcsIGZ4YVNpZ25pblVSSSk7XG5cbiAgICAgICAgICAgIC8vIFRoZW4gcmVtb3ZlIHRoZSBzZXJ2aWNlIHBhcmFtXG4gICAgICAgICAgICBmaW5hbEZ4YVNpZ25pblVSSSA9IHJlbW92ZVBhcmFtKCdzZXJ2aWNlJywgcmV2aXNlZEZ4YVNpZ25pblVSSSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgbGlua1xuICAgICAgICAgICAgZnhhU2lnbmluTGlua1tpXS5ocmVmID0gZmluYWxGeGFTaWduaW5VUkk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vLyBDcmVhdGUgbmFtZXNwYWNlXG5pZiAodHlwZW9mIHdpbmRvdy5Nb3ppbGxhID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5Nb3ppbGxhID0ge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFV0bVVybCA9IHt9O1xuXG4gICAgdmFyIHdoaXRlbGlzdCA9IFtcbiAgICAgICAgJ2h0dHBzOi8vYWNjb3VudHMuZmlyZWZveC5jb20vJyxcbiAgICAgICAgJ2h0dHBzOi8vbW9uaXRvci5maXJlZm94LmNvbS8nLFxuICAgICAgICAnaHR0cHM6Ly9nZXRwb2NrZXQuY29tLycsXG4gICAgICAgICdodHRwczovL2xhdGVzdC5kZXYubGNpcC5vcmcvJ1xuICAgIF07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBob3N0bmFtZSBmb3IgYSBnaXZlbiBVUkwuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVybC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBob3N0bmFtZS5cbiAgICAgKi9cbiAgICBVdG1VcmwuZ2V0SG9zdE5hbWUgPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB1cmwubWF0Y2goL15odHRwcz86XFwvXFwvKD86W14vPyNdKykoPzpbLz8jXXwkKS9pKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgJiYgbWF0Y2hlc1swXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggYW5kIHZhbGlkYXRlIHV0bSBwYXJhbXMgZnJvbSB0aGUgcGFnZSBVUkwgZm9yIEZ4QSByZWZlcnJhbC5cbiAgICAgKiBodHRwczovL21vemlsbGEuZ2l0aHViLmlvL2FwcGxpY2F0aW9uLXNlcnZpY2VzL2RvY3MvYWNjb3VudHMvbWV0cmljcy5odG1sI2Rlc2NyaXB0aW9ucy1vZi1tZXRyaWNzLXJlbGF0ZWQtcXVlcnktcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGlmIGJvdGggdXRtX3NvdXJjZSBhbmQgdXRtX2NhbXBhaWduIGFyZSB2YWxpZCwgZWxzZSB7bnVsbH0uXG4gICAgICovXG4gICAgVXRtVXJsLmdldEF0dHJpYnV0aW9uRGF0YSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFsbG93ZWRDaGFycyA9IC9eW1xcdy8uJS1dKyQvO1xuICAgICAgICB2YXIgZmluYWxQYXJhbXMgPSB7fTtcbiAgICAgICAgdmFyIHV0bXMgPSBbJ3V0bV9zb3VyY2UnLCAndXRtX2NhbXBhaWduJywgJ3V0bV9jb250ZW50JywgJ3V0bV90ZXJtJywgJ3V0bV9tZWRpdW0nXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHV0bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB1dG0gPSB1dG1zW2ldO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIHV0bSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBkZWNvZGVVUklDb21wb25lbnQocGFyYW1zW3V0bV0pO1xuICAgICAgICAgICAgICAgIGlmICgoYWxsb3dlZENoYXJzKS50ZXN0KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFBhcmFtc1t1dG1dID0gcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm90aCB1dG1fc291cmNlIGFuZCB1dG1fY2FtcGFpZ24gYXJlIGNvbnNpZGVyZWQgcmVxdWlyZWQsIHNvIG9ubHkgcGFzcyBvbiByZWZlcnJhbCBkYXRhIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmluYWxQYXJhbXMsICd1dG1fc291cmNlJykgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZpbmFsUGFyYW1zLCAndXRtX2NhbXBhaWduJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbFBhcmFtcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYW4gb2JqZWN0IG9mIFVUTSBwYXJhbWV0ZXJzIHRvIGEgZ2l2ZW4gVVJMLlxuICAgICAqIE9iamVjdCBwYXJhbWV0ZXJzIHdpbGwgZXJhc2UgYWxsIGV4aXN0aW5nIFVUTSBwYXJhbWV0ZXJzLCB3aGV0aGVyIHByZXNlbnQgb3Igbm90LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBVUkwgdG8gYXBwZW5kIHBhcmFtZXRlcnMgdG8uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgb2JqZWN0IGNvbnNpc3Rpbmcgb2Ygb25lIG9yIG1vcmUgcGFyYW1ldGVycy5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBVUkwgY29udGFpbmluZyB1cGRhdGVkIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgVXRtVXJsLmFwcGVuZFRvRG93bmxvYWRVUkwgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHZhciBmaW5hbFBhcmFtcztcbiAgICAgICAgdmFyIGxpbmtQYXJhbXM7XG5cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgPiAwKSB7XG4gICAgICAgICAgICBsaW5rUGFyYW1zID0gd2luZG93Ll9TZWFyY2hQYXJhbXMucXVlcnlTdHJpbmdUb09iamVjdCh1cmwuc3BsaXQoJz8nKVsxXSk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBVUkwgcXVlcnkgc3RyaW5nIGhhcyBleGlzdGluZyBVVE0gcGFyYW1ldGVycyB0aGVuIHJlbW92ZSB0aGVtLFxuICAgICAgICAgICAgLy8gYXMgd2UgZG9uJ3Qgd2FudCB0byBtdWRkbGUgZGF0YSBmcm9tIGRpZmZlcmVudCBjYW1wYWlnbiBzb3VyY2VzLlxuICAgICAgICAgICAgdmFyIHV0bXMgPSBbJ3V0bV9zb3VyY2UnLCAndXRtX2NhbXBhaWduJywgJ3V0bV9jb250ZW50JywgJ3V0bV90ZXJtJywgJ3V0bV9tZWRpdW0nXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXRtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB1dG0gPSB1dG1zW2ldO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGlua1BhcmFtcywgdXRtKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbGlua1BhcmFtc1t1dG1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmluYWxQYXJhbXMgPSBPYmplY3QuYXNzaWduKGxpbmtQYXJhbXMsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluYWxQYXJhbXMgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgnPycpWzBdICsgJz8nICsgd2luZG93Ll9TZWFyY2hQYXJhbXMub2JqZWN0VG9RdWVyeVN0cmluZyhmaW5hbFBhcmFtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIElmIHRoZXJlIGFyZSB2YWxpZCB1dG0gcGFyYW1zIG9uIHRoZSBwYWdlIFVSTCwgcXVlcnkgdGhlXG4gICAgICogRE9NIGFuZCB1cGRhdGUgRmlyZWZveCBBY2NvdW50IGxpbmtzIHdpdGggdGhlIG5ldyB1dG0gZGF0YVxuICAgICAqL1xuICAgIFV0bVVybC5pbml0ID0gZnVuY3Rpb24gKHVybFBhcmFtcykge1xuICAgICAgICB2YXIgcGFyYW1zID0gVXRtVXJsLmdldEF0dHJpYnV0aW9uRGF0YSh1cmxQYXJhbXMpO1xuICAgICAgICB2YXIgY3RhTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1meGEtY3RhLWxpbmsnKTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gdXRtIHBhcmFtcyBvbiB0aGUgcGFnZSwgZG8gbm90aGluZy5cbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZlYXR1cmUgZGV0ZWN0IHN1cHBvcnQgZm9yIG9iamVjdCBtb2RpZmljYXRpb24uXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdGFMaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBsaW5rIG9mZiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgdmFyIG9sZEFjY291bnRzTGluayA9ICBjdGFMaW5rc1tpXS5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSA/IGN0YUxpbmtzW2ldLmhyZWYgOiBudWxsIDtcblxuICAgICAgICAgICAgaWYgKG9sZEFjY291bnRzTGluaykge1xuICAgICAgICAgICAgICAgIHZhciBob3N0TmFtZSA9IFV0bVVybC5nZXRIb3N0TmFtZShvbGRBY2NvdW50c0xpbmspO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGxpbmsgaXMgaW4gdGhlIEZ4QSByZWZlcnJhbCB3aGl0ZWxpc3QuXG4gICAgICAgICAgICAgICAgaWYgKGhvc3ROYW1lICYmIHdoaXRlbGlzdC5pbmRleE9mKGhvc3ROYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBDaGluYSByZXBhY2sgbGluaywgc28gdGhhdCBjYW4gYmUgdXBkYXRlZCB0b29cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZE1vemlsbGFPbmxpbmVMaW5rID0gY3RhTGlua3NbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLW1vemlsbGFvbmxpbmUtbGluaycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBvdXIgbmV3IFVUTSBwYXJhbSBkYXRhIHRvIGNyZWF0ZSBuZXcgRnhBIGxpbmtzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QWNjb3VudHNMaW5rID0gVXRtVXJsLmFwcGVuZFRvRG93bmxvYWRVUkwob2xkQWNjb3VudHNMaW5rLCBwYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgRnhBIGJ1dHRvbiB0byB1c2UgdGhlIG5ldyBsaW5rLlxuICAgICAgICAgICAgICAgICAgICBjdGFMaW5rc1tpXS5ocmVmID0gbmV3QWNjb3VudHNMaW5rO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsc28gaGFuZGxlIG1vemlsbGEtb25saW5lIGxpbmtzIGZvciBGeEEgQ2hpbmEgUmVwYWNrLlxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkTW96aWxsYU9ubGluZUxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdNb3ppbGxhT25saW5lTGluayA9IFV0bVVybC5hcHBlbmRUb0Rvd25sb2FkVVJMKG9sZE1vemlsbGFPbmxpbmVMaW5rLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3RhTGlua3NbaV0uc2V0QXR0cmlidXRlKCdkYXRhLW1vemlsbGFvbmxpbmUtbGluaycsIG5ld01vemlsbGFPbmxpbmVMaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuTW96aWxsYS5VdG1VcmwgPSBVdG1Vcmw7XG59KSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdXJsUGFyYW1zID0gbmV3IHdpbmRvdy5fU2VhcmNoUGFyYW1zKCkudXRtUGFyYW1zKCk7XG5cbiAgICAvLyBUcmFjayBleHRlcm5hbCBVVE0gcmVmZXJyYWxzIGZvciBGaXJlZm94IEFjY291bnRzIHJlbGF0ZWQgQ1RBcy5cbiAgICBNb3ppbGxhLlV0bVVybC5pbml0KHVybFBhcmFtcyk7XG59KSgpO1xuIl19
