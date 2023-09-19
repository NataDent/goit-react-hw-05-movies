/*! For license information please see 184.2ef2e787.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[184,256],{958:function(t,e,r){r.r(e),r.d(e,{default:function(){return N}});var n,o,i,a,c,s,l,u,f=r(861),h=r(439),p=r(256),d=r(689),v=r(168),g=r(87),y=r(867),m=y.ZP.div(n||(n=(0,v.Z)(["\n  padding: 0 16px;\n"]))),x=(0,y.ZP)(g.OL)(o||(o=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  font-family: 'Roboto';\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.3;\n  width: 160px;\n  min-height: 48px;\n  margin-right: auto;\n  margin-bottom: 20px;\n  color: #ffffff;\n  background: #be5edc;\n  border-color: #ffffff;\n  border-radius: 5px;\n  text-decoration: none;\n  text-align: center;\n  &:hover,\n  &:focus {\n    border: none;\n    cursor: pointer;\n    transform: translateY(5%) scale(1.05);\n  }\n"]))),w=y.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),b=y.ZP.h1(a||(a=(0,v.Z)(["\n  display: block;\n  color: #be5edc;\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 auto;\n"]))),j=y.ZP.h3(c||(c=(0,v.Z)(["\n  display: block;\n  color: #be5edc;\n  font-size: 20px;\n  font-weight: 600;\n"]))),L=y.ZP.h4(s||(s=(0,v.Z)(["\n  display: block;\n  color: #be5edc;\n  font-size: 16px;\n  font-weight: 600;\n"]))),_=y.ZP.div(l||(l=(0,v.Z)(["\n  display: block;\n"]))),k=y.ZP.ul(u||(u=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  margin: 20px auto;\n"]))),E=r(184),Z=function(t){var e,r,n,o=t.id,i=t.poster_path,a=t.original_title,c=t.vote_average,s=t.overview,l=t.genres,u=void 0===l?[]:l,f=(0,d.TH)(),h=i?"".concat("https://image.tmdb.org/t/p/w500").concat(i):(0,E.jsx)(p.default,{});return(0,E.jsxs)(m,{children:[(0,E.jsx)(x,{to:null!==(e=null===f||void 0===f||null===(r=f.state)||void 0===r||null===(n=r.from)||void 0===n?void 0:n.pathname)&&void 0!==e?e:"/",children:"Go Back"}),(0,E.jsxs)(w,{children:[(0,E.jsx)("img",{src:h,alt:a}),(0,E.jsxs)("div",{children:[(0,E.jsx)(b,{children:a}),(0,E.jsxs)("p",{children:["User Score: ",10*Math.round(c),"%"]}),(0,E.jsx)(j,{children:"Overview"}),(0,E.jsx)("p",{children:s}),(0,E.jsx)(L,{children:"Genres"}),(0,E.jsxs)("p",{children:[u.map((function(t){return t.name})).join(", "),"."]})]})]}),(0,E.jsxs)(_,{children:[(0,E.jsx)(j,{children:"Additional information"}),(0,E.jsxs)(k,{children:[(0,E.jsx)(g.rU,{children:(0,E.jsx)(g.rU,{to:"cast",state:{from:f},children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(g.rU,{to:"reviews",state:{from:f},children:"Reviews"})})]})]}),(0,E.jsx)(d.j3,{})]},o)},O=r(791),P=r(26);function G(){G=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var h="suspendedStart",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var x={};l(x,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(N([])));b&&b!==r&&n.call(b,a)&&(x=b);var j=m.prototype=g.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=E(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function E(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(_.prototype),l(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),l(j,s,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var N=function(){var t=(0,O.useState)(null),e=(0,h.Z)(t,2),r=e[0],n=e[1],o=(0,d.UO)().movieId;if((0,O.useEffect)((function(){var t;!function(){(t=t||(0,f.Z)(G().mark((function t(){var e;return G().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,P.FL)(o);case 3:e=t.sent,n(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}(o)}),[o]),r){var i=r.id,a=r.poster_path,c=r.original_title,s=r.vote_average,l=r.overview,u=r.genres;return(0,E.jsx)("div",{children:(0,E.jsx)(Z,{id:i,poster_path:a,original_title:c,vote_average:s,overview:l,genres:u})})}}},256:function(t,e,r){r.r(e);var n,o=r(168),i=r(867),a=r(184),c=i.ZP.div(n||(n=(0,o.Z)(["\n  display: block;\n  width: auto;\n  height: auto;\n"])));e.default=function(){return(0,a.jsx)(c,{children:(0,a.jsx)("img",{src:"https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=800&ext=jpg&uid=R116879206&ga=GA1.2.491591425.1694955071&semt=ais",alt:"Page not found"})})}}}]);
//# sourceMappingURL=184.2ef2e787.chunk.js.map