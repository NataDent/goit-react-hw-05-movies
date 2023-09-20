/*! For license information please see 485.612cb0c9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485,256],{924:function(t,e,n){n.d(e,{s:function(){return k}});var r,o,i,a,c,u,l=n(168),s=n(87),h=n(867),f=h.ZP.ul(r||(r=(0,l.Z)(["\n  text-decoration: none;\n  display: grid;\n  width: 396px;\n  grid-template-columns: repeat(auto-fill, min(300px));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 48px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media (min-width: 712px) {\n    width: 712px;\n  }\n  @media (min-width: 1028px) {\n    width: 1028px;\n  }\n  @media (min-width: 1344px) {\n    width: 1344px;\n  }\n  @media (min-width: 1660px) {\n    width: 1660px;\n  }\n"]))),p=(0,h.ZP)(s.OL)(o||(o=(0,l.Z)(["\n  color: black;\n\n  text-decoration: none;\n  &:hover {\n    color: #be5edc;\n  }\n"]))),d=h.ZP.li(i||(i=(0,l.Z)(["\n  width: 300px;\n  background: #fff;\n  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);\n  margin: 0.5em;\n  border-radius: 20px;\n  transition: transform 250ms linear;\n  display: inline-block;\n  display: table-caption;\n  text-decoration: none;\n  &:hover {\n    cursor: pointer;\n\n    transform: scale(1.05);\n    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);\n  }\n"]))),g=h.ZP.h2(a||(a=(0,l.Z)(["\n  /* display: block; */\n  font-size: large;\n  font-weight: 600;\n  padding: 16px;\n  min-height: 80px;\n  line-height: 1.3;\n  text-align: center;\n"]))),v=h.ZP.img(c||(c=(0,l.Z)(["\n  display: block;\n  width: 100%;\n  height: auto;\n  /* object-fit: cover; */\n"]))),y=n(689),m=n(256),x=n(881),w=n(184),b=h.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),j=function(){return(0,w.jsx)(b,{children:(0,w.jsx)(x.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})},L=n(771),k=function(t){var e=t.movies,n=t.LoadMore,r=(0,y.TH)();return(0,w.jsx)(w.Fragment,{children:e.length>0&&(0,w.jsx)(L.Z,{dataLength:e.length,next:n,hasMore:!0,loader:(0,w.jsx)(j,{loading:!0},0),endMessage:(0,w.jsx)("p",{style:{textAlign:"center"},children:(0,w.jsx)("b",{children:"Yay! You have seen it all"})}),children:(0,w.jsx)(f,{children:e.map((function(t){var e=t.id,n=t.title,o=t.backdrop_path,i=o?"".concat("https://image.tmdb.org/t/p/w500").concat(o):(0,w.jsx)(m.default,{});return(0,w.jsx)(d,{children:(0,w.jsxs)(p,{to:"/movies/".concat(e),state:{from:r},children:[(0,w.jsx)(v,{src:i,alt:n,width:"300px",height:"450px"}),(0,w.jsx)(g,{children:n})]})},e)}))})})})}},485:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,o,i,a=n(861),c=n(439),u=n(924),l=n(791),s=n(26),h=n(168),f=n(867),p=f.ZP.section(r||(r=(0,h.Z)(["\n padding: 0 8px;\n"]))),d=f.ZP.div(o||(o=(0,h.Z)(["\npadding: 16px 0;\n"]))),g=f.ZP.h2(i||(i=(0,h.Z)(["\n  font-size: 36px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  text-align: center;\n"]))),v=n(184);function y(){y=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new G(r||[]);return o(a,"_invoke",{value:Z(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",p="executing",d="completed",g={};function v(){}function m(){}function x(){}var w={};l(w,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(T([])));j&&j!==n&&r.call(j,a)&&(w=j);var L=x.prototype=v.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function Z(e,n,r){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=_(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=h(e,n,r);if("normal"===l.type){if(o=r.done?d:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function _(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},k(E.prototype),l(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),l(L,u,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}var m=function(){var t=(0,l.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],o=(0,l.useState)(1),i=(0,c.Z)(o,2),h=i[0],f=i[1];return(0,l.useEffect)((function(){var t;!function(){(t=t||(0,a.Z)(y().mark((function t(){var e,n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Oh)(h);case 3:e=t.sent,n=e.results,r(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}()}),[h]),(0,v.jsx)(p,{children:(0,v.jsxs)(d,{children:[(0,v.jsx)(g,{children:"Trending today"}),(0,v.jsx)(u.s,{movies:n,loadMore:function(){f((function(t){return t+1}))}})]})})}},256:function(t,e,n){n.r(e);var r,o=n(168),i=n(867),a=n(184),c=i.ZP.div(r||(r=(0,o.Z)(["\n  display: block;\n  width: auto;\n  height: auto;\n"])));e.default=function(){return(0,a.jsx)(c,{children:(0,a.jsx)("img",{src:"https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=800&ext=jpg&uid=R116879206&ga=GA1.2.491591425.1694955071&semt=ais",alt:"Page not found"})})}}}]);
//# sourceMappingURL=485.612cb0c9.chunk.js.map