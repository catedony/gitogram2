(function(){"use strict";var e={6012:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(3396);const o={class:"avatar"},a=["src"];function s(e,t,n,s,i,l){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("img",{src:n.src,alt:"Avatar"},null,8,a)])}var i={name:"Avatar",props:{src:{type:String,default:"ProfilePic.png"}}},l=n(7477);const c=(0,l.Z)(i,[["render",s],["__scopeId","data-v-98ae5730"]]);var u=c},2066:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3396);const o={class:"topline"},a={key:0,class:"content"};function s(e,t,n,s,i,l){const c=(0,r.up)("Logo");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",o,[(0,r.WI)(e.$slots,"topline",{},(()=>[(0,r.Wm)(c)]),!0)]),e.$slots.content?((0,r.wg)(),(0,r.iD)("div",a,[(0,r.WI)(e.$slots,"content",{},void 0,!0)])):(0,r.kq)("",!0)])}var i=n(5978),l={name:"Header",components:{Logo:i.Z}},c=n(7477);const u=(0,c.Z)(l,[["render",s],["__scopeId","data-v-e495ca44"]]);var d=u},5978:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3396);const o=(0,r._)("img",{alt:"Gitogram",src:"Gitogram.svg"},null,-1);function a(e,t){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(n,{to:"/"},{default:(0,r.w5)((()=>[o])),_:1})}var s=n(7477);const i={},l=(0,s.Z)(i,[["render",a]]);var c=l},7171:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3396);const o={class:"icon"},a={class:"avatar"},s={class:"icon"};function i(e,t,n,i,l,c){const u=(0,r.up)("Icon"),d=(0,r.up)("Avatar");return(0,r.wg)(),(0,r.iD)("ul",null,[(0,r._)("li",o,[(0,r.Wm)(u,{name:"home"})]),(0,r._)("li",a,[(0,r.Wm)(d,{class:"avatar",src:e.user?.avatar_url},null,8,["src"])]),(0,r._)("li",s,[(0,r.Wm)(u,{name:"logout",onClick:e.logout},null,8,["onClick"])])])}var l=n(6012),c=n(6292),u=n(65),d={name:"Topline",components:{Avatar:l.Z,Icon:c.Z},computed:{...(0,u.rn)({user:e=>e.auth.data})},methods:{...(0,u.nv)({logout:"auth/logout"})}},p=n(7477);const g=(0,p.Z)(d,[["render",i],["__scopeId","data-v-5c3aaac5"]]);var f=g},6292:function(e,t,n){n.d(t,{Z:function(){return me}});var r=n(3396);function o(e,t,n,o,a,s){return(0,r.wg)(),(0,r.j4)((0,r.LL)(n.name))}const a={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s=(0,r._)("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),i=[s];function l(e,t){return(0,r.wg)(),(0,r.iD)("svg",a,i)}var c=n(7477);const u={},d=(0,c.Z)(u,[["render",l]]);var p=d;const g={preserveAspectRatio:"none",viewBox:"0 0 26 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f=(0,r._)("path",{d:"M13 0.942731V8.625L13.0007 9.25621L22.3025 9.255L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4813 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z",fill:"currentColor"},null,-1),v=[f];function C(e,t){return(0,r.wg)(),(0,r.iD)("svg",g,v)}const m={},h=(0,c.Z)(m,[["render",C]]);var w=h;const L={preserveAspectRatio:"none",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_=(0,r._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"currentColor"},null,-1),y=[_];function b(e,t){return(0,r.wg)(),(0,r.iD)("svg",L,y)}const Z={},k=(0,c.Z)(Z,[["render",b]]);var D=k;const R={preserveAspectRatio:"none",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I=(0,r._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"currentColor"},null,-1),A=[I];function O(e,t){return(0,r.wg)(),(0,r.iD)("svg",R,A)}const S={},j=(0,c.Z)(S,[["render",O]]);var H=j;const V={preserveAspectRatio:"none",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M=(0,r._)("path",{d:"M0.200408 0.739665C0.48226 0.436132 0.956809 0.418556 1.26034 0.700408L5 4.22652L8.73967 0.700408C9.0432 0.418556 9.51775 0.436132 9.7996 0.739665C10.0815 1.0432 10.0639 1.51775 9.76034 1.7996L5.51034 5.7996C5.22258 6.0668 4.77743 6.0668 4.48967 5.7996L0.239665 1.7996C-0.0638681 1.51775 -0.081444 1.0432 0.200408 0.739665Z",fill:"currentColor"},null,-1),x=[M];function $(e,t){return(0,r.wg)(),(0,r.iD)("svg",V,x)}const F={},T=(0,c.Z)(F,[["render",$]]);var E=T;const W={preserveAspectRatio:"none",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B=(0,r._)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"currentColor"},null,-1),q=[B];function U(e,t){return(0,r.wg)(),(0,r.iD)("svg",W,q)}const z={},P=(0,c.Z)(z,[["render",U]]);var N=P;const Y={preserveAspectRatio:"none",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=(0,r._)("path",{d:"M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z",fill:"currentColor"},null,-1),K=[G];function Q(e,t){return(0,r.wg)(),(0,r.iD)("svg",Y,K)}const J={},X=(0,c.Z)(J,[["render",Q]]);var ee=X;const te={preserveAspectRatio:"none",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=(0,r._)("path",{d:"M11.2777 0.561221L11.4319 0.694353L18.7668 8.02919L18.9131 8.20146C19.2594 8.68441 19.2549 9.34124 18.8998 9.81971L18.7666 9.97393L11.4305 17.3073L11.2762 17.4404C10.7379 17.8397 9.97398 17.7951 9.48592 17.3069C8.99785 16.8186 8.95362 16.0547 9.35312 15.5165L9.48629 15.3623L14.4734 10.375H2.20837L2.0218 10.3624C1.41167 10.2796 0.928696 9.79667 0.845925 9.18654L0.833374 8.99996L0.845925 8.81338C0.928696 8.20325 1.41167 7.72028 2.0218 7.63751L2.20837 7.62496H14.4734L9.48739 2.6389L9.34111 2.46665C8.99486 1.98378 8.99924 1.32705 9.35426 0.848571L9.48739 0.694353L9.65964 0.548072C10.1425 0.201816 10.7992 0.206199 11.2777 0.561221Z",fill:"currentColor"},null,-1),re=[ne];function oe(e,t){return(0,r.wg)(),(0,r.iD)("svg",te,re)}const ae={},se=(0,c.Z)(ae,[["render",oe]]);var ie=se;const le={preserveAspectRatio:"none",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ce=(0,r._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0.727051C5.64625 0.727051 0.5 5.8733 0.5 12.227C0.5 17.3158 3.79187 21.6139 8.36312 23.1377C8.93812 23.2383 9.15375 22.8933 9.15375 22.5914C9.15375 22.3183 9.13938 21.4127 9.13938 20.4495C6.25 20.9814 5.5025 19.7452 5.2725 19.0983C5.14313 18.7677 4.5825 17.747 4.09375 17.4739C3.69125 17.2583 3.11625 16.7264 4.07938 16.712C4.985 16.6977 5.63188 17.5458 5.8475 17.8908C6.8825 19.6302 8.53563 19.1414 9.19688 18.8396C9.2975 18.0921 9.59938 17.5889 9.93 17.3014C7.37125 17.0139 4.6975 16.022 4.6975 11.6233C4.6975 10.3727 5.14312 9.33768 5.87625 8.53267C5.76125 8.24517 5.35875 7.06643 5.99125 5.48518C5.99125 5.48518 6.95438 5.1833 9.15375 6.66393C10.0738 6.40518 11.0513 6.2758 12.0288 6.2758C13.0063 6.2758 13.9838 6.40518 14.9038 6.66393C17.1031 5.16893 18.0662 5.48518 18.0662 5.48518C18.6987 7.06643 18.2962 8.24517 18.1812 8.53267C18.9144 9.33768 19.36 10.3583 19.36 11.6233C19.36 16.0364 16.6719 17.0139 14.1131 17.3014C14.53 17.6608 14.8894 18.3508 14.8894 19.4289C14.8894 20.967 14.875 22.2033 14.875 22.5914C14.875 22.8933 15.0906 23.2527 15.6656 23.1377C20.2081 21.6139 23.5 17.3014 23.5 12.227C23.5 5.8733 18.3538 0.727051 12 0.727051Z",fill:"currentColor"},null,-1),ue=[ce];function de(e,t){return(0,r.wg)(),(0,r.iD)("svg",le,ue)}const pe={},ge=(0,c.Z)(pe,[["render",de]]);var fe=ge,ve={name:"Icon",components:{Home:p,Logout:w,Star:D,Fork:H,Toggler:E,Close:N,ArrowLeft:ee,ArrowRight:ie,Github:fe},props:{name:{type:String,required:!0,validator(e){return["home","logout","star","fork","toggler","close","arrowLeft","arrowRight","github"].includes(e)}}}};const Ce=(0,c.Z)(ve,[["render",o]]);var me=Ce},5363:function(e,t,n){n.d(t,{$:function(){return a},O:function(){return s}});var r=n(70);const o=r.Z.create({baseURL:"https://api.github.com"}),a=({url:e,method:t="get",data:n={},headers:r={}})=>o({url:e,method:t,data:n,headers:r}),s=({url:e,method:t="get",data:n={},headers:r={}})=>o({url:e,method:t,data:n,headers:{Authorization:`token ${localStorage.getItem("token")}`}})},3599:function(e,t,n){n.d(t,{L:function(){return a},i:function(){return s}});var r=n(70),o=n(5363);const a=async({clientId:e,code:t,clientSecret:n})=>await r.Z.post("https://webdev-api.loftschool.com/github",{clientId:e,code:t,clientSecret:n}),s=()=>(0,o.O)({url:"/user",headers:{Authorization:`token ${localStorage.getItem("token")}`}})},6443:function(e,t,n){n.d(t,{GF:function(){return s},SK:function(){return o},dQ:function(){return a}});var r=n(5363);const o=({owner:e,repo:t})=>(0,r.O)({url:`/user/starred/${e}/${t}`,method:"put"}),a=({owner:e,repo:t})=>(0,r.O)({url:`/user/starred/${e}/${t}`,method:"delete",headers:{accept:"application/vnd.github.v3.html+json"}}),s=()=>(0,r.O)({url:"/user/starred"})},9017:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t,n,r,a,s){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i)}var s={name:"App"},i=n(7477);const l=(0,i.Z)(s,[["render",a]]);var c=l,u=n(2483);function d(e,t){return(0,o.wg)(),(0,o.iD)("h1",null,"Page not found")}const p={},g=(0,i.Z)(p,[["render",d]]);var f=g,v=n(7139);const C={class:"top"},m={class:"avatars"},h={key:0},w={key:1};function L(e,t,n,r,a,s){const i=(0,o.up)("Logo"),l=(0,o.up)("Topline"),c=(0,o.up)("Avatar"),u=(0,o.up)("router-link"),d=(0,o.up)("Header"),p=(0,o.up)("RepositoryList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(d,{class:"header"},{topline:(0,o.w5)((()=>[(0,o._)("div",C,[(0,o.Wm)(i),(0,o.Wm)(l)])])),content:(0,o.w5)((()=>[(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.data,(e=>((0,o.wg)(),(0,o.j4)(u,{class:"avatar-link",to:{name:"storiesInitialSlide",params:{initialSlide:e.id}},key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"avatar",src:e.avatarUrl},null,8,["src"])])),_:2},1032,["to"])))),128))])])),_:1}),e.isLoading?((0,o.wg)(),(0,o.iD)("div",h,"Загрузка...")):e.error?((0,o.wg)(),(0,o.iD)("div",w,(0,v.zw)(e.error),1)):(0,o.kq)("",!0),e.data?((0,o.wg)(),(0,o.j4)(p,{key:2,reps:s.reps,class:"list"},null,8,["reps"])):(0,o.kq)("",!0)],64)}var _=n(2066),y=n(5978),b=n(7171),Z=n(6012);function k(e,t,n,r,a,s){const i=(0,o.up)("RepositoryDescription"),l=(0,o.up)("RepositoryItem");return(0,o.wg)(),(0,o.iD)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.reps,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id},[(0,o.Wm)(l,{rep:e},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{rep:e},null,8,["rep"])])),_:2},1032,["rep"])])))),128))])}const D={class:"repository"},R={class:"user"},I={class:"user__name"},A={key:1,class:"error"},O={key:0,class:"no-issues"},S={class:"issues"},j={class:"issue__author"},H=["innerHTML"];function V(e,t,n,a,s,i){const l=(0,o.up)("Avatar"),c=(0,o.up)("Toggler"),u=(0,o.up)("Loader");return(0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("div",R,[(0,o.Wm)(l,{class:"user__avatar",src:n.rep.avatarUrl},null,8,["src"]),(0,o._)("span",I,(0,v.zw)(n.rep.author),1)]),(0,o.WI)(e.$slots,"default",{},void 0,!0),(0,o.Wm)(c,{onToggle:t[0]||(t[0]=e=>s.issuesVisible=!s.issuesVisible),isOpen:s.issuesVisible},{default:(0,o.w5)((()=>[s.issuesVisible?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Uk)("Hide issues")],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Uk)("View issues")],64))])),_:1},8,["isOpen"]),s.loading?(0,o.wy)(((0,o.wg)(),(0,o.j4)(u,{key:0,class:"loader"},null,512)),[[r.F8,s.issuesVisible]]):s.error?((0,o.wg)(),(0,o.iD)("div",A,(0,v.zw)(s.error),1)):((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[0===s.issues.length&&s.issuesVisible?((0,o.wg)(),(0,o.iD)("div",O,"No issues")):(0,o.kq)("",!0),(0,o.wy)((0,o._)("ul",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.issues,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"issue",key:e.id},[(0,o._)("div",j,(0,v.zw)(e.user.login),1),(0,o._)("div",{innerHTML:e.body_html},null,8,H)])))),128))],512),[[r.F8,s.issuesVisible]])],64))])}function M(e,t,n,r,a,s){const i=(0,o.up)("Icon");return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=t=>e.$emit("toggle")),class:"toggler"},[(0,o.WI)(e.$slots,"default",{},void 0,!0),(0,o._)("span",null,[(0,o.Wm)(i,{name:"toggler",class:(0,v.C_)(["toggler__icon",{isOpen:n.isOpen}])},null,8,["class"])])])}var x=n(6292),$={name:"Toggler",components:{Icon:x.Z},props:{isOpen:{type:Boolean,required:!0}}};const F=(0,i.Z)($,[["render",M],["__scopeId","data-v-20fa15b6"]]);var T=F;const E=e=>((0,o.dD)("data-v-381d0601"),e=e(),(0,o.Cn)(),e),W={class:"loader"},B=E((()=>(0,o._)("li",{class:"loader-item"},null,-1))),q=E((()=>(0,o._)("li",{class:"loader-item"},null,-1))),U=E((()=>(0,o._)("li",{class:"loader-item"},null,-1))),z=[B,q,U];function P(e,t,n,r,a,s){return(0,o.wg)(),(0,o.iD)("ul",W,z)}var N={name:"Loader"};const Y=(0,i.Z)(N,[["render",P],["__scopeId","data-v-381d0601"]]);var G=Y,K=n(5363);const Q=e=>e<10?`0${e}`:e,J=()=>{const e=new URLSearchParams,t=6048e5,n=new Date(Date.now()-t),r=[n.getFullYear(),Q(n.getMonth()+1),Q(n.getDate())].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("per_page",10),e.append("q",`language:javascript created:>${r}`),(0,K.$)({url:`/search/repositories?${e}`})},X=({repo:e,owner:t})=>{const n="application/vnd.github.v3.html+json";return(0,K.$)({url:`/repos/${t}/${e}/issues`,headers:{accept:n}})};var ee={name:"RepositoryList",components:{Avatar:Z.Z,Toggler:T,Loader:G},props:{rep:{type:Object,required:!0}},data(){return{issuesVisible:!1,issues:null,loading:!0,error:""}},watch:{async issuesVisible(e){if(!0===e&&!this.issues){this.loading=!0;try{const{data:e}=await X({owner:this.rep.author,repo:this.rep.name});this.issues=e}catch(t){this.error=t.message,console.log(t)}finally{this.loading=!1}}}}};const te=(0,i.Z)(ee,[["render",V],["__scopeId","data-v-f3d3c570"]]);var ne=te;const re=e=>((0,o.dD)("data-v-e078c834"),e=e(),(0,o.Cn)(),e),oe={class:"description"},ae={class:"description__title"},se={class:"buttons"},ie={class:"buttons__stars buttons__section"},le=re((()=>(0,o._)("span",null,"Star",-1))),ce={class:"buttons__count"},ue={class:"buttons__fork buttons__section"},de={class:"buttons__icon"},pe=re((()=>(0,o._)("span",null,"Fork",-1))),ge={class:"buttons__count"};function fe(e,t,n,r,a,s){const i=(0,o.up)("Icon");return(0,o.wg)(),(0,o.iD)("div",oe,[(0,o._)("h2",ae,(0,v.zw)(n.rep.name),1),(0,o._)("p",null,(0,v.zw)(n.rep.description),1),(0,o._)("div",se,[(0,o._)("div",ie,[(0,o._)("button",null,[(0,o.Wm)(i,{name:"star",class:"buttons__icon"}),le]),(0,o._)("div",ce,(0,v.zw)(n.rep.starsCount),1)]),(0,o._)("div",ue,[(0,o._)("button",null,[(0,o._)("span",de,[(0,o.Wm)(i,{name:"fork"})]),pe]),(0,o._)("div",ge,(0,v.zw)(n.rep.forksCount),1)])])])}var ve={name:"RepositoryDescription",components:{Icon:x.Z},props:{rep:{type:Object,required:!0}}};const Ce=(0,i.Z)(ve,[["render",fe],["__scopeId","data-v-e078c834"]]);var me=Ce,he={name:"RepositoryList",props:{reps:{type:Array,required:!0}},data(){return{}},components:{RepositoryItem:ne,RepositoryDescription:me}};const we=(0,i.Z)(he,[["render",k],["__scopeId","data-v-cfa3cd1c"]]);var Le=we,_e=n(65),ye={name:"Feeds",components:{Header:_.Z,Logo:y.Z,Avatar:Z.Z,Topline:b.Z,RepositoryList:Le},computed:{...(0,_e.rn)({data:e=>e.repositories.data,isLoading:e=>e.repositories.isLoading,error:e=>e.repositories.error}),reps(){return this.data}},async created(){await this.fetchUserData(),this.data||await this.fetchRepositories()},methods:{...(0,_e.nv)({fetchRepositories:"repositories/fetchRepositories",fetchUserData:"auth/fetchUserData"})}};const be=(0,i.Z)(ye,[["render",L],["__scopeId","data-v-8e6d666a"]]);var Ze=be;const ke=()=>n.e(867).then(n.bind(n,4867)),De=()=>n.e(411).then(n.bind(n,1411)),Re=()=>n.e(573).then(n.bind(n,3573));var Ie=[{path:"/",name:"home",component:Ze},{path:"/stories",name:"stories",component:ke,children:[{path:"/stories/:initialSlide",name:"storiesInitialSlide",component:ke}]},{path:"/auth",name:"auth",component:De},{path:"/following",name:"following",component:Re},{path:"/:pathMatch(.*)*",component:f}],Ae=n(3599);const Oe=(0,u.p7)({history:(0,u.r5)(),base:"/dist/",routes:Ie});var Se=Oe;Oe.beforeEach((async(e,t,n)=>{const r="auth"===e.name;try{const e=await(0,Ae.i)();if(n(r?{name:"home"}:null),401===e.status)throw new Error}catch(o){n(r?null:{name:"auth"})}}));const je=({repo:e,owner:t})=>{const n="application/vnd.github.v3.html+json";return(0,K.$)({url:`/repos/${t}/${e}/readme`,headers:{accept:n}})};var He=n(6443),Ve={namespaced:!0,state:{data:null,isLoading:!1,error:!1},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},mutations:{setRepositories(e,t){e.data=t.map((e=>e))},setLoading(e,t){e.isLoading=t},setError(e,t){e.error=t},setReadme(e,t){e.data=e.data.map((e=>(t.id===e.id&&(e.content=t.content),e)))},setFollowing(e,t){e.data=e.data.map((e=>(e.id===t.id&&(e.following={...e.following,...t.data}),console.log(e),e)))}},actions:{async fetchRepositories({commit:e}){try{e("setLoading",!0);const{data:{items:t}}=await J(),n=await(0,He.GF)();console.log(n.data);const r=t.map((({id:e,name:t,description:r,...o})=>({id:e,name:t,author:o.owner.login,avatarUrl:o.owner.avatar_url,description:r,forksCount:o.forks_count,starsCount:o.stargazers_count,following:{error:"",loading:!1,status:n.data.some((t=>t.id===e))}})));e("setRepositories",r)}catch(t){console.error(t),e("setError",t.message)}finally{e("setLoading",!1)}},async fetchReadme({commit:e,getters:t},{id:n,repo:r,owner:o}){const a=t.getRepoById(n);if(void 0===a.content)try{const{data:t}=await je({owner:o,repo:r});e("setReadme",{id:n,content:t})}catch(s){console.log(s)}},async starRepo({commit:e,getters:t},n){const{name:r,author:o}=t.getRepoById(n);e("setFollowing",{id:n,data:{status:!1,loading:!0,error:""}});try{await(0,He.SK)({owner:o,repo:r}),e("setFollowing",{id:n,data:{status:!0}})}catch(a){e("setFollowing",{id:n,data:{status:!1,error:a.message}})}finally{e("setFollowing",{id:n,data:{loading:!1}})}},async unstarRepo({commit:e,getters:t},n){console.log(t.getRepoById(n));const{name:r,author:o}=t.getRepoById(n);e("setFollowing",{id:n,data:{status:!0,loading:!0,error:""}});try{await(0,He.dQ)({owner:o,repo:r}),e("setFollowing",{id:n,data:{status:!1}})}catch(a){e("setFollowing",{id:n,data:{status:!0,error:a.message}})}finally{e("setFollowing",{id:n,data:{loading:!1}})}}}},Me={namespaced:!0,state:{data:null,isLoading:!1,error:!1},mutations:{setData(e,t){e.data=t},setLoading(e,t){e.isLoading=t},setError(e,t){e.error=t}},actions:{async fetchUserData({commit:e}){try{e("setLoading",!0);const{data:t}=await(0,Ae.i)();e("setData",t)}catch(t){console.error(t),e("setError",t.message)}finally{e("setLoading",!1)}},logout(){localStorage.removeItem("token"),window.location.reload()}}},xe={namespaced:!0,state:{data:null,isLoading:!1,error:!1},mutations:{setRepositories(e,t){e.data=t},setLoading(e,t){e.isLoading=t},setError(e,t){e.error=t}},actions:{async fetchStarredRepos({commit:e}){try{e("setLoading",!0);const{data:t}=await(0,He.GF)();console.log(t),e("setRepositories",t)}catch(t){console.error(t),e("setError",t.message)}finally{e("setLoading",!1)}}}},$e=(0,_e.MT)({modules:{repositories:Ve,auth:Me,starred:xe}});const Fe=(0,r.ri)(c);Fe.use($e),Fe.use(Se),Fe.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{411:"336fd75d",573:"795351f1",867:"7b8ea741"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{411:"1a2223f1",573:"8afe1802",867:"45868650"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gitogram:";n.l=function(r,o,a,s){if(e[r])e[r].push(o);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/gitogram2/dist/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var s=n.miniCssF(r),i=n.p+s;if(t(s,i))return o();e(r,i,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={411:1,573:1,867:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(t),i=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var u=l(n)}for(t&&t(r);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9017)}));r=n.O(r)})();
//# sourceMappingURL=app.26c9d4fd.js.map