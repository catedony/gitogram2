(function(){"use strict";var e={3340:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t,n,r,a,i){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(u)}var i={name:"App"},u=n(7477);const s=(0,u.Z)(i,[["render",a]]);var c=s,d=n(2483);function f(e,t){return(0,o.wg)(),(0,o.iD)("h1",null,"Page not found")}const l={},p=(0,u.Z)(l,[["render",f]]);var m=p;const h=()=>Promise.all([n.e(314),n.e(283)]).then(n.bind(n,8427)),g=()=>Promise.all([n.e(314),n.e(270)]).then(n.bind(n,8119));var v=[{path:"/",component:h},{path:"/stories:initialSlide",name:"stories",component:g},{path:"/:pathMatch(.*)*",component:m}],b=(0,d.p7)({history:(0,d.PO)(),routes:v}),y=n(65),w=n(7222),k=(0,y.MT)({modules:{repositories:w.Z}});const j=(0,r.ri)(c);j.use(k),j.use(b),j.mount("#app")},7222:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(70);const o=r.Z.create({baseURL:"https://api.github.com"}),a=({url:e,method:t="get",data:n={},headers:r={}})=>o({url:e,method:t,data:n,headers:r}),i=e=>e<10?`0${e}`:e,u=()=>{const e=new URLSearchParams,t=6048e5,n=new Date(Date.now()-t),r=[n.getFullYear(),i(n.getMonth()+1),i(n.getDate())].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("per_page",10),e.append("q",`language:javascript created:>${r}`),a({url:`/search/repositories?${e}`})},s=({repo:e,owner:t})=>{const n="application/vnd.github.v3.html+json";return a({url:`/repos/${t}/${e}/readme`,headers:{accept:n}})};var c={namespaced:!0,state:{data:null,isLoading:!1,error:!1},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},mutations:{setRepositories(e,t){e.data=t},setLoading(e,t){e.isLoading=t},setError(e,t){e.error=t},setReadme(e,t){e.data=e.data.map((e=>(t.id===e.id&&(e.content=t.content),e)))}},actions:{async fetchRepositories({commit:e}){try{e("setLoading",!0);const{data:{items:t}}=await u(),n=t.map((({id:e,name:t,description:n,...r})=>({id:e,name:t,author:r.owner.login,avatarUrl:r.owner.avatar_url,description:n,forksCount:r.forks_count,starsCount:r.stargazers_count})));e("setRepositories",n)}catch(t){console.error(t),e("setError",t.message)}finally{e("setLoading",!1)}},async fetchReadme({commit:e,getters:t},{id:n,repo:r,owner:o}){const a=t.getRepoById(n);if(void 0===a.content)try{const{data:t}=await s({owner:o,repo:r});e("setReadme",{id:n,content:t})}catch(i){console.log(i)}}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{270:"6f1b35e9",283:"a2911ef4",314:"8071f39a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{270:"bf14373e",283:"122adf22"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gitogram:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var f=c[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/gitogram2/dist/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={270:1,283:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var d=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3340)}));r=n.O(r)})();
//# sourceMappingURL=app.e50e1944.js.map