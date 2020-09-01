(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var l=this||self,aa=/^[\w+/_-]+[=]{0,2}$/,n=null;function ba(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&aa.test(a)?a:""}function ca(){}var p="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ha=Date.now;function ia(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}function q(a){return a};var r;var t=class{constructor(a,b){this.g=b===ja?a:""}},ja={};function v(a){v[" "](a);return a}v[" "]=ca;function ka(){}var la="function"==typeof Uint8Array;function ma(a,b,c){a.i=null;b||(b=[]);a.o=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||la&&d instanceof Uint8Array)){a.l=b-a.j;a.h=d;break a}}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.l)d+=a.j,a.g[d]=a.g[d]||y;else{var e=a.l+a.j;a.g[e]||(a.h=a.g[e]={});a.h[d]=a.h[d]||y}}var y=[]; 
function z(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c===y?a.g[b]=[]:c}if(a.h)return c=a.h[b],c===y?a.h[b]=[]:c}function A(a,b,c){a=z(a,b);return null==a?c:a}function B(a,b){a=z(a,b);a=null==a?a:!!a;return null==a?!1:a}function na(a){var b=oa;a.i||(a.i={});if(!a.i[1]){var c=z(a,1);c&&(a.i[1]=new b(c))}return a.i[1]};function oa(a){ma(this,a,pa)}ia(oa,ka);var pa=[28];function qa(a){ma(this,a,ra)}ia(qa,ka);var ra=[21];function C(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function D(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function E(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):sa(b,a)[0]||null);return a||null} 
function sa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var g={};for(c=d=0;a=e[c];c++){var f=a.className,h;if(h="function"==typeof f.split)h=0<=Array.prototype.indexOf.call(f.split(/\s+/),b,void 0);h&&(g[d++]=a)}g.length=d;return g}return e}function ta(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function ua(a){va();if(void 0===r){var b=null;var c=l.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:q,createScript:q,createScriptURL:q})}catch(d){l.console&&l.console.error(d.message)}r=b}else r=b}a=(b=r)?b.createScriptURL(a):a;return new t(a,ja)}var va=ca;function F(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{v(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function wa(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function H(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)}var xa=(a,b)=>{var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):H(a,b)};let I=0;var ya=(a=null)=>a&&60==a.getAttribute("data-jc")?a:document.querySelector('[data-jc="60"]'),za=()=>{if(!(.01<Math.random())){var a=(a=ya(document.currentScript))&&a.getAttribute("data-jc-version")||"unknown";xa(window,`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${a}&sample=${.01}`)}};var J=document,L=window;function Aa(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Ba(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Aa(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b}function M(a,b){if(a.classList)a.classList.add(b);else if(!Ba(a,b)){var c=Aa(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};class Ca{constructor(a){this.g=(this.serializedAttributionData=a)?new qa(a):null;this.isMutableImpression=null!=z(this.g,1)&&!!B(na(this.g),33);A(this.g,30,"");this.S=!!B(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=z(this.g,1);this.K=!!B(this.g,4);this.N=!!B(this.g,6);this.J=!!B(this.g,13);A(this.g,8,0);this.creativeIndexSuffix=1<A(this.g,8,0)?A(this.g,7,0).toString():"";this.T=!!B(this.g,17);this.P=!!B(this.g,18);this.I=!!B(this.g,14);this.B=!!B(this.g,15);this.U=!!B(this.g,31);this.O=1== 
B(this.g,9);this.openAttributionInline=1==B(this.g,10);this.isMobileDevice=!!B(this.g,12);this.R=null;this.M=(a=J.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.D=""!==this.creativeIndexSuffix)&&void 0===L.goog_multislot_cache&&(L.goog_multislot_cache={});if(this.D&&!this.M){if(a=L.goog_multislot_cache.hd,void 0===a){a=!1;var b=J.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect(); 
150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.C=a;this.u=D("abgcp"+this.creativeIndexSuffix);this.s=D("abgc"+this.creativeIndexSuffix);this.h=D("abgs"+this.creativeIndexSuffix);D("abgl"+this.creativeIndexSuffix);this.o=D("abgb"+this.creativeIndexSuffix);this.A=D("abgac"+this.creativeIndexSuffix);D("mute_panel"+this.creativeIndexSuffix);this.v=E("goog_delegate_attribution"+this.creativeIndexSuffix); 
this.isDelegateAttributionActive=!!this.v&&!!this.I&&!E("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(let d=0;d<c.length;d++){const e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.j=a;this.l=this.isDelegateAttributionActive?this.v:D("cbb"+this.creativeIndexSuffix);this.L=this.C?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.l&&Ba(this.l,"goog_dismissable_menu");this.m=null;this.F= 
0;this.i=this.isDelegateAttributionActive?this.v:this.N&&this.u?this.u:this.s;this.H=!!B(this.g,19);this.adbadgeEnabled=!!B(this.g,24);this.enableNativeJakeUi=!!B(this.g,27)}};class Da{constructor(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c}};var Ea={};var Fa=class{},Ga=class extends Fa{constructor(a,b){super();if(b!==Ea)throw Error("Bad secret");this.g=a}toString(){return this.g}};new Ga("about:blank",Ea);new Ga("about:invalid#zTSz",Ea);var Ha=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ia=!!window.google_async_iframe_id;let N=Ia&&window.parent||window;var O=(a,b)=>{a&&Ha(b,(c,d)=>{a.style[d]=c})};class Ja{constructor(a,b,c={}){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}};const La=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Ma=class{constructor(a,b){this.g=a;this.h=b}},Na=class{constructor(a,b,c,d,e){this.url=a;this.G=!!d;this.depth="number"===typeof e?e:null}};function Oa(a,b){const c={};c[a]=b;return[c]}function Pa(a,b,c,d,e){const g=[];wa(a,function(f,h){(f=Qa(f,b,c,d,e))&&g.push(h+"="+f)});return g.join(b)} 
function Qa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const g=[];for(let f=0;f<a.length;f++)g.push(Qa(a[f],b,c,d+1,e));return g.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Pa(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function P(a,b,c,d){a.g.push(b);a.h[b]=Oa(c,d)} 
function Ra(a){if(!a.j)return a.m;let b=1;for(const c in a.h)b=c.length>b?c.length:b;return a.m-a.j.length-b-a.i.length-1} 
function Sa(a,b,c,d){b=b+"//"+c+d;let e=Ra(a)-d.length;if(0>e)return"";a.g.sort(function(f,h){return f-h});d=null;c="";for(var g=0;g<a.g.length;g++){const f=a.g[g],h=a.h[f];for(let m=0;m<h.length;m++){if(!e){d=null==d?f:d;break}let k=Pa(h[m],a.i,a.o);if(k){k=c+k;if(e>=k.length){e-=k.length;b+=k;c=a.i;break}a.l&&(c=e,k[c-1]==a.i&&--c,b+=k.substr(0,c),c=a.i,e=0);d=null==d?f:d}}}g="";a.j&&null!=d&&(g=c+a.j+"="+(a.u||d));return b+g} 
class Ta{constructor(a,b,c,d,e){this.m=c||4E3;this.i=a||"&";this.o=b||",$";this.j=void 0!==d?d:"trn";this.u=e||null;this.l=!1;this.h={};this.s=0;this.g=[]}};function Ua(a,b,c,d,e){if((d?a.g:Math.random())<(e||a.i))try{let g;c instanceof Ta?g=c:(g=new Ta,wa(c,(h,m)=>{var k=g,w=k.s++;h=Oa(m,h);k.g.push(w);k.h[w]=h}));const f=Sa(g,a.m,a.j,a.l+b+"&");f&&(a.h?xa(l,f):H(l,f))}catch(g){}}class Va{constructor(a,b,c,d,e=!1){this.m=a;this.j=b;this.l=c;this.i=d;this.h=e;this.g=Math.random()}};let Q=null;var Wa=()=>{const a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ha()},Xa=()=>{const a=l.performance;return a&&a.now?a.now():null};class Ya{constructor(a,b,c,d=0,e){this.label=a;this.type=b;this.value=c;this.duration=d;this.uniqueId=Math.random();this.slotId=e}};const R=l.performance,Za=!!(R&&R.mark&&R.measure&&R.clearMarks),S=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=Za){var b;if(null===Q){Q="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(Q=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Q;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function $a(a){a&&R&&S()&&(R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class ab{constructor(a,b){this.h=[];this.i=b||l;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.h=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.g=S()||(null!=c?c:Math.random()<a)}start(a,b){if(!this.g)return null;const c=Xa()||Wa();a=new Ya(a,b,c);b=`goog_${a.label}_${a.uniqueId}_start`;R&&S()&&R.mark(b);return a}};function bb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function cb(a,b,c){let d,e;try{if(a.g&&a.g.g){e=a.g.start(b.toString(),3);d=c();var g=a.g;c=e;if(g.g&&"number"===typeof c.value){var f=Xa()||Wa();c.duration=f-c.value;var h=`goog_${c.label}_${c.uniqueId}_end`;R&&S()&&R.mark(h);!g.g||2048<g.h.length||g.h.push(c)}}else d=c()}catch(m){g=a.m;try{$a(e),g=a.o(b,new Ja(m,{message:bb(m)}),void 0,void 0)}catch(k){a.j(217,k)}if(!g)throw m;}return d}function db(a,b){var c=T;return(...d)=>cb(c,a,()=>b.apply(void 0,d))} 
class eb{constructor(a,b,c,d=null){this.l=a;this.s=b;this.m=c;this.h=null;this.o=this.j;this.g=d;this.i=!1}j(a,b,c,d,e){e=e||this.s;let g;try{const u=new Ta;u.l=!0;P(u,1,"context",a);b.error&&b.meta&&b.id||(b=new Ja(b,{message:bb(b)}));b.msg&&P(u,2,"msg",b.msg.substring(0,512));var f=b.meta||{};b=f;if(this.h)try{this.h(b)}catch(G){}if(d)try{d(b)}catch(G){}d=u;f=[f];d.g.push(3);d.h[3]=f;{{d=l;f=[];b=null;let da;do{var h=d;if(F(h)){var m=h.location.href;b=h.document&&h.document.referrer||null;da=!0}else m= 
b,b=null,da=!1;f.push(new Na(m||"",h,da));try{d=h.parent}catch(K){d=null}}while(d&&h!=d);for(let K=0,Ka=f.length-1;K<=Ka;++K)f[K].depth=Ka-K;h=l;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==f.length-1)for(m=1;m<f.length;++m){var k=f[m];k.url||(k.url=h.location.ancestorOrigins[m-1]||"",k.G=!0)}var w=f}let G=new Na(l.location.href,l,!0,!1);h=null;const ea=w.length-1;for(k=ea;0<=k;--k){var x=w[k];!h&&La.test(x.url)&&(h=x);if(x.url&&!x.G){G=x;break}}x=null;const nb=w.length&& 
w[ea].url;0!=G.depth&&nb&&(x=w[ea]);g=new Ma(G,x,h)}g.h&&P(u,4,"top",g.h.url||"");P(u,5,"url",g.g.url||"");Ua(this.l,e,u,this.i,c)}catch(u){try{Ua(this.l,e,{context:"ecmserr",rctx:a,msg:bb(u),url:g&&g.g.url},this.i,c)}catch(G){}}return this.m}};let fb,T;if(Ia&&!F(N)){let a="."+J.domain;try{for(;2<a.split(".").length&&!F(N);)J.domain=a=a.substr(a.indexOf(".")+1),N=window.parent}catch(b){}F(N)||(N=window)}const U=N,V=new ab(1,U);var gb=()=>{U.google_measure_js_timing||(V.g=!1,V.h!=V.i.google_js_reporting_queue&&(S()&&Array.prototype.forEach.call(V.h,$a,void 0),V.h.length=0))};fb=new Va("http:"===L.location.protocol?"http:":"https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01);"number"!==typeof U.google_srt&&(U.google_srt=Math.random()); 
var hb=U.google_srt;0<=hb&&1>=hb&&(fb.g=hb);T=new eb(fb,"jserror",!0,V); 
T.h=a=>{var b=L.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){c=[...c.split(","),...b];b={};for(var d=0,e=0;e<c.length;){var g=c[e++];var f=g;var h=typeof f;f="object"==h&&null!=f||"function"==h?"o"+(Object.prototype.hasOwnProperty.call(f,p)&&f[p]||(f[p]=++fa)):(typeof f).charAt(0)+f;Object.prototype.hasOwnProperty.call(b,f)||(b[f]=!0,c[d++]=g)}c.length=d;a.eid=c.join(",")}else a.eid=b.join(",")}0!==I&&(a.jc=String(I));(c=L.jerUserAgent)&&(a.useragent=c)};T.i=!0; 
"complete"==U.document.readyState?gb():V.g&&C(U,"load",()=>{gb()});var W=(a,b)=>db(a,b);function ib(a){if(a.g.j&&a.g.P){const b=na(a.g.g);b&&null!=z(b,5)&&null!=z(b,6)&&(a.i=new Da(A(b,5,""),A(b,6,""),A(b,19,"")));C(a.g.j,"click",W(452,()=>{if(!a.j&&(a.j=!0,a.i)){{var c=a.i;let d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);H(window,d)}}}))}} 
function jb(a){if(a.g.S)C(a.g.i,"click",W(365,b=>{const c=L.goog_interstitial_display;c&&(c(b),b&&(b.stopPropagation(),b.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)C(a.g.i,"click",()=>a.h());else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.l&&C(a.g.l,"click",()=>a.h()),a.g.U&&a.g.h&&C(a.g.h,"click",()=>a.h())),a.g.K)kb(a);else{C(a.g.i,"mouseover",W(367,()=>kb(a)));C(a.g.i,"mouseout",W(369,()=>lb(a,500)));C(a.g.i,"touchstart",W(368,()=>kb(a)));const b=W(370, 
()=>lb(a,4E3));C(a.g.i,"mouseup",b);C(a.g.i,"touchend",b);C(a.g.i,"touchcancel",b);a.g.j&&C(a.g.j,"click",W(371,c=>a.preventDefault(c)))}}function kb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.F=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function lb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(()=>mb(a),b)} 
function ob(a){const b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(()=>{M(b,"abgacfo")})}function mb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
class pb{constructor(a,b){this.g=a;this.h=b;this.g.T||(this.j=!1,this.i=null,!this.g.C||this.g.adbadgeEnabled||this.g.L?ib(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(O(this.g.o,a),O(this.g.h,a),O(this.g.u,b),O(this.g.s,b)):O(this.g.s,a)),jb(this),this.g.enableNativeJakeUi&&M(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(M(document.body,"goog_delegate_active"),M(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.l&&ta(this.g.l),setTimeout(()=>{M(document.body, 
"jar")},this.g.J?750:100)),this.g.B&&M(document.body,"goog_delegate_disabled"),this.g.H&&L.addEventListener("load",()=>this.h()))}preventDefault(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.F)a.preventDefault?a.preventDefault():a.returnValue=!1;else if(this.g.openAttributionInline){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openAttribution&&(window.openAttribution(b),a.preventDefault? 
a.preventDefault():a.returnValue=!1)}else this.g.O&&(b=this.g.j.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openSystemBrowser&&(window.openSystemBrowser(b),a.preventDefault?a.preventDefault():a.returnValue=!1))}};function qb(a){if(!a.g&&(a.g=!0,L.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Ca(a);new b(a)}}class rb{constructor(a,b){if(!a)throw Error("bad ctor");this.i=a;this.h=b;this.g=!1;E("goog_delegate_deferred")?void 0!==L.goog_delegate_deferred_token?qb(this):(a=()=>{qb(this)},L.goog_delegate_deferred_token=a,setTimeout(a,5E3)):qb(this)}};var sb=(a=[])=>{l.google_logging_queue||(l.google_logging_queue=[]);l.google_logging_queue.push([11,a])};class tb{constructor(){this.g=new Promise(a=>{this.h=a})}};var ub=class{constructor(){const a=new tb;this.promise=a.g;this.resolve=a.h}};function vb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new ub,b&&b());return a[5]} 
function wb(){var a=window,b=ua("https://pagead2.googlesyndication.com/pagead/js/r20200826/r20110914/abg_survey.js");return vb(a,function(){{var c=a.document;const g=c.createElement("script");var d="string"===typeof b?ua(b):b;g.src=d instanceof t&&d.constructor===t?d.g:"type_error:TrustedResourceUrl";d=g;var e;(e=d.ownerDocument&&d.ownerDocument.defaultView)&&e!=l?e=ba(e.document):(null===n&&(n=ba(l.document)),e=n);e&& 
d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(g,c)}}).promise};function xb(a){cb(T,373,()=>{mb(a.h);ob(a.h)});wb().then(b=>{b.createAttributionCard(a.g);a.g.R=b;b.expandAttributionCard()});za()}class yb{constructor(a){this.g=a;this.h=new pb(this.g,W(359,()=>xb(this)))}};I=60;function zb(a){sb([a]);new rb(yb,a)}var X=["buildAttribution"],Y=l;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===zb?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=zb;}).call(this);
