!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(h,t),d?y(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=p();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function T(){var e=p(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=O(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),j="feedback-form-state";S.addEventListener("input",e(t)((function(e){var t,n=null!==(t=JSON.parse(localStorage.getItem(j)))&&void 0!==t?t:{};n[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(n))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(j))),S.reset(),localStorage.removeItem(j)})),function(){try{var e=JSON.parse(localStorage.getItem(j));Object.keys(e).forEach((function(t){S.elements.namedItem(t).value=e[t]}))}catch(e){return}}()}();
//# sourceMappingURL=03-feedback.8764f6e3.js.map