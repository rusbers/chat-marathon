function t(t){return t&&t.__esModule?t.default:t}const e={MESSAGES_HISTORY:document.querySelector(".messages"),MESSAGE_INPUT:document.getElementById("form__input"),FORMS:{SEND_MESSAGE:document.querySelector(".message-field__form"),AUTHENTIFICATION:document.querySelector(".authorization-form"),AUTHENTIFICATION_CODE:document.querySelector(".authorization-code-form"),SETTING_NAME:document.querySelector(".name-form")},CONTROLS:{SETTINGS:document.querySelector(".btn--settings"),AUTHORIZATION:document.querySelector(".btn--authorization")},MODAL:{COLLECTION:document.querySelectorAll(".modal"),SETTINGS:document.querySelector(".modal-settings"),AUTHENTIFICATION:document.querySelector(".modal-authorization"),AUTHENTIFICATION_CODE:document.querySelector(".modal-authorization-code"),CLOSE_BTN:document.querySelectorAll(".close-modal")},TEMPLATES:{MESSAGE:document.getElementById("message-template")}},n="modal",r="modal--hide",a="input",o="message--user",i={WRONG_HTTP_STATUS:"Неверный статус",USER_NAME:"Неверное имя пользователя"},u="Выйти";function s(t){t.closest(`.${n}`).classList.add(r)}function c(t){t.reset()}new Map([[e.CONTROLS.SETTINGS,e.MODAL.SETTINGS],[e.CONTROLS.AUTHORIZATION,e.MODAL.AUTHENTIFICATION]]).forEach(((t,e)=>{e.addEventListener("click",(function(){t.classList.toggle(r)}))})),e.MODAL.CLOSE_BTN.forEach((t=>{t.addEventListener("click",(function(){e.MODAL.COLLECTION.forEach((t=>{t.classList.remove(r),t.classList.add(r)}))}))}));var d={};async function l(e,n,r){return await fetch(e,{method:n,headers:{Accept:"application/json","Content-Type":"application/json;charset=utf-8",Authorization:`Bearer ${t(d).get("token")}`},body:JSON.stringify(r)})}function h(t){return t.status>=200&&t.status<=299}d=function(){function t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function e(n,r){function a(e,a,o){if("undefined"!=typeof document){"number"==typeof(o=t({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var u in o)o[u]&&(i+="; "+u,!0!==o[u]&&(i+="="+o[u].split(";")[0]));return document.cookie=e+"="+n.write(a,e)+i}}function o(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var e=document.cookie?document.cookie.split("; "):[],r={},a=0;a<e.length;a++){var o=e[a].split("="),i=o.slice(1).join("=");try{var u=decodeURIComponent(o[0]);if(r[u]=n.read(i,u),t===u)break}catch(t){}}return t?r[t]:r}}return Object.create({set:a,get:o,remove:function(e,n){a(e,"",t({},n,{expires:-1}))},withAttributes:function(n){return e(this.converter,t({},this.attributes,n))},withConverter:function(n){return e(t({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return e({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}();const f="https://mighty-cove-31255.herokuapp.com/api/user",m="https://mighty-cove-31255.herokuapp.com/api/messages",g="ws://mighty-cove-31255.herokuapp.com/websockets?";function w(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function v(t){return w(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function T(t){w(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function y(t){if(w(1,arguments),!v(t)&&"number"!=typeof t)return!1;var e=T(t);return!isNaN(Number(e))}var b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},p=function(t,e,n){var r,a=b[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function S(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var C={date:S({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:S({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:S({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},M={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function E(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function O(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?U(s,(function(t){return t.test(u)})):N(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(u.length);return{value:i,rest:d}}}function N(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function U(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var D,x={code:"en-US",formatDistance:p,formatLong:C,formatRelative:function(t,e,n,r){return M[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:E({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:E({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:E({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:E({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:E({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(D={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(D.matchPattern);if(!n)return null;var r=n[0],a=t.match(D.parsePattern);if(!a)return null;var o=D.valueCallback?D.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:O({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:O({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:O({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:O({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function A(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function k(t,e){w(2,arguments);var n=T(t).getTime(),r=A(e);return new Date(n+r)}function P(t,e){w(2,arguments);var n=A(e);return k(t,-n)}function I(t){w(1,arguments);var e=1,n=T(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function L(t){w(1,arguments);var e=T(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=I(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=I(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function W(t){w(1,arguments);var e=L(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=I(n);return r}function H(t,e){w(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:A(a),i=null==n.weekStartsOn?o:A(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=T(t),s=u.getUTCDay(),c=(s<i?7:0)+s-i;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function Y(t,e){w(1,arguments);var n=T(t),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:A(i),s=null==a.firstWeekContainsDate?u:A(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=H(c,e),l=new Date(0);l.setUTCFullYear(r,0,s),l.setUTCHours(0,0,0,0);var h=H(l,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function q(t,e){w(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:A(a),i=null==n.firstWeekContainsDate?o:A(n.firstWeekContainsDate),u=Y(t,e),s=new Date(0);s.setUTCFullYear(u,0,i),s.setUTCHours(0,0,0,0);var c=H(s,e);return c}function R(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var F={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return R("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):R(n+1,2)},d:function(t,e){return R(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return R(t.getUTCHours()%12||12,e.length)},H:function(t,e){return R(t.getUTCHours(),e.length)},m:function(t,e){return R(t.getUTCMinutes(),e.length)},s:function(t,e){return R(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return R(Math.floor(r*Math.pow(10,n-3)),e.length)}},_="midnight",G="noon",j="morning",z="afternoon",B="evening",Q="night";function X(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+R(o,2)}function J(t,e){return t%60==0?(t>0?"-":"+")+R(Math.abs(t)/60,2):$(t,e)}function $(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+R(Math.floor(a/60),2)+n+R(a%60,2)}var Z={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return F.y(t,e)},Y:function(t,e,n,r){var a=Y(t,r),o=a>0?a:1-a;return"YY"===e?R(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):R(o,e.length)},R:function(t,e){return R(L(t),e.length)},u:function(t,e){return R(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return R(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return R(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return F.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return R(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){w(1,arguments);var n=T(t),r=H(n,e).getTime()-q(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):R(a,e.length)},I:function(t,e,n){var r=function(t){w(1,arguments);var e=T(t),n=I(e).getTime()-W(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):R(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):F.d(t,e)},D:function(t,e,n){var r=function(t){w(1,arguments);var e=T(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):R(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return R(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return R(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return R(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?G:0===a?_:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?B:a>=12?z:a>=4?j:Q,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return F.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):F.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):R(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):R(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):F.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):F.s(t,e)},S:function(t,e){return F.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return J(a);case"XXXX":case"XX":return $(a);default:return $(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return J(a);case"xxxx":case"xx":return $(a);default:return $(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(a,":");default:return"GMT"+$(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(a,":");default:return"GMT"+$(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return R(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return R((r._originalDate||t).getTime(),e.length)}};function V(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function K(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var tt={p:K,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return V(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",V(a,e)).replace("{{time}}",K(o,e))}};function et(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var nt=["D","DD"],rt=["YY","YYYY"];function at(t){return-1!==nt.indexOf(t)}function ot(t){return-1!==rt.indexOf(t)}function it(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,dt=/''/g,lt=/[a-zA-Z]/;function ht(t){return t.match(ct)[1].replace(dt,"'")}function ft(t){return t.querySelector(a).value}function mt(t){this.messageWrapper=t.querySelector(".message"),this.messageContent=t.querySelector(".text"),this.userName=t.querySelector(".username"),this.messageTime=t.querySelector(".time")}function gt(e,n){n.user.email===t(d).get("mail")&&e.messageWrapper.classList.add(o),e.messageContent.textContent=n.text,e.userName.textContent=n.user.name,e.messageTime.textContent=function(t,e,n){w(2,arguments);var r=String(e),a=n||{},o=a.locale||x,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:A(i),s=null==a.firstWeekContainsDate?u:A(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:A(c),l=null==a.weekStartsOn?d:A(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var h=T(t);if(!y(h))throw new RangeError("Invalid time value");var f=et(h),m=P(h,f),g={firstWeekContainsDate:s,weekStartsOn:l,locale:o,_originalDate:h};return r.match(st).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,tt[e])(t,o.formatLong,g):t})).join("").match(ut).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ht(n);var i=Z[r];if(i)return!a.useAdditionalWeekYearTokens&&ot(n)&&it(n,e,t),!a.useAdditionalDayOfYearTokens&&at(n)&&it(n,e,t),i(m,n,o.localize,g);if(r.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(n.createdAt),"HH:mm")}function wt(t){const n=e.TEMPLATES.MESSAGE.content.cloneNode(!0);gt(new mt(n),t),e.MESSAGES_HISTORY.append(n),e.MESSAGES_HISTORY.scrollTop=e.MESSAGES_HISTORY.scrollHeight}async function vt(){(await async function(){try{const t=await l(m,"GET");if(!h(t))throw i.WRONG_HTTP_STATUS;return await t.json()}catch(t){return void console.log(t)}}()).messages.slice(-5).forEach((t=>{wt(t)}))}document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=t(d).get("token");if(!n)return;e.CONTROLS.AUTHORIZATION.textContent=u;const r=new WebSocket(`${g}${n}`);r.addEventListener("open",(function(){e.FORMS.SEND_MESSAGE.addEventListener("submit",(function(){!function(t,e){const n=ft(e);t.send(JSON.stringify({text:n})),c(e)}(r,this)}))})),r.addEventListener("message",(function(t){wt(JSON.parse(t.data))}))}(),vt()})),e.FORMS.AUTHENTIFICATION.addEventListener("submit",(async function(){const t=ft(this);if(!t)return;const e={email:t};Cookies.set("mail",t);try{if(!h(await l(f,"POST",e)))throw i.WRONG_HTTP_STATUS;s(this),UI_ELEMENTS.MODAL.AUTHENTIFICATION_CODE.classList.remove(r),UI_ELEMENTS.CONTROLS.AUTHORIZATION.textContent=u}catch(t){return void console.log(t)}finally{c(this)}})),e.FORMS.AUTHENTIFICATION_CODE.addEventListener("submit",(function(){const t=ft(this);t&&(Cookies.set("token",t),c(this),s(this))})),e.FORMS.SETTING_NAME.addEventListener("submit",(async function(){const t=ft(this),e={name:t};if(!t)throw i.USER_NAME;try{if(!h(await l(f,"PATCH",e)))throw i.WRONG_HTTP_STATUS;s(this)}catch(t){return void console.log(t)}finally{c(this)}}));
//# sourceMappingURL=index.52c6519f.js.map
