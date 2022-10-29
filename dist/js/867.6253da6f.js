"use strict";(self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[]).push([[867],{475:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(3396),a=i(7139);const s={key:0,class:"spinner"};function o(e,t,i,o,l,r){const d=(0,n.up)("Spinner");return(0,n.wg)(),(0,n.iD)("button",{onClick:t[0]||(t[0]=t=>e.$emit("click")),class:(0,a.C_)({loading:i.loading,disabled:i.disabled})},[i.loading?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(d,{sm:""})])):(0,n.WI)(e.$slots,"default",{key:1},void 0,!0)],2)}var l=i(163),r={name:"BaseButton",emits:["click"],props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},components:{Spinner:l.Z}},d=i(7477);const c=(0,d.Z)(r,[["render",o],["__scopeId","data-v-3eaa82ff"]]);var u=c},163:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(3396),a=i(7139);function s(e,t,i,s,o,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["spinner",{sm:i.sm}])},null,2)}var o={name:"Spinner",props:{sm:{type:Boolean,default:!1}}},l=i(7477);const r=(0,l.Z)(o,[["render",s],["__scopeId","data-v-36c14ba7"]]);var d=r},4867:function(e,t,i){i.r(t),i.d(t,{default:function(){return ie}});var n=i(3396);const a=e=>((0,n.dD)("data-v-bc17d392"),e=e(),(0,n.Cn)(),e),s={class:"stories"},o=a((()=>(0,n._)("img",{alt:"Gitogram",src:"GitogramWhite.png"},null,-1))),l={class:"content"};function r(e,t,i,a,r,d){const c=(0,n.up)("router-link"),u=(0,n.up)("Icon"),p=(0,n.up)("Header"),h=(0,n.up)("Slider");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(p,{class:"header"},{topline:(0,n.w5)((()=>[(0,n.Wm)(c,{to:{name:"home"}},{default:(0,n.w5)((()=>[o])),_:1}),(0,n.Wm)(c,{to:{name:"home"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{name:"close",class:"icon"})])),_:1})])),_:1}),(0,n._)("div",l,[(0,n.Wm)(h,{initialSlide:+e.$route.params.initialSlide},null,8,["initialSlide"])])])}var d=i(2066),c=i(6292);const u={class:"slider"},p={class:"slider-list",ref:"slider"};function h(e,t,i,a,s,o){const l=(0,n.up)("Slide");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("ul",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.data,((t,i)=>((0,n.wg)(),(0,n.iD)("li",{ref_for:!0,ref:"slide",class:"slider-item",key:t.id},[(0,n.Wm)(l,{data:o.getData(t),active:s.slideIndex===i,onNextSlide:e=>o.handleSlide(i+1),onPrevSlide:e=>o.handleSlide(i-1),onProgressFinish:e=>o.handleSlide(i+1),onFollow:e.starRepo,onUnfollow:e.unstarRepo,btnsShown:o.activeBtns,loading:s.loading&&i===s.slideIndex},null,8,["data","active","onNextSlide","onPrevSlide","onProgressFinish","onFollow","onUnfollow","btnsShown","loading"])])))),128))],512)])}var v=i(7139);const m={class:"header"},g={class:"content"},f=["innerHTML"],w={class:"footer"};function y(e,t,i,a,s,o){const l=(0,n.up)("Progress"),r=(0,n.up)("AvatarWithTitle"),d=(0,n.up)("Spinner"),c=(0,n.up)("Placeholder"),u=(0,n.up)("BaseButton"),p=(0,n.up)("Icon");return(0,n.wg)(),(0,n.iD)("div",{class:(0,v.C_)(["slide",{active:i.active}])},[(0,n._)("div",m,[(0,n.Wm)(l,{seconds:20,active:s.activeProgress,onFinish:t[0]||(t[0]=t=>e.$emit("progressFinish"))},null,8,["active"]),(0,n.Wm)(r,{src:i.data.userAvatar,title:i.data.username,class:"avatar"},null,8,["src","title"])]),(0,n._)("div",g,[i.loading?((0,n.wg)(),(0,n.j4)(d,{key:0,class:"loader"})):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[i.data.content?.length?((0,n.wg)(),(0,n.iD)("p",{key:0,innerHTML:i.data.content},null,8,f)):((0,n.wg)(),(0,n.j4)(c,{key:1,paragraphs:2}))],64))]),(0,n._)("div",w,[(0,n.Wm)(u,{loading:i.data.following.loading,onClick:t[1]||(t[1]=t=>e.$emit(i.data.following.status?"unfollow":"follow",i.data.id))},{default:(0,n.w5)((()=>[i.data.following.status?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" Unfollow ")],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)(" Follow ")],64))])),_:1},8,["loading"])]),i.active?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[i.btnsShown.includes("prev")?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[2]||(t[2]=t=>e.$emit("prevSlide")),class:"btn btn-prev"},[(0,n.Wm)(p,{class:"icon",name:"arrowLeft"})])):(0,n.kq)("",!0),i.btnsShown.includes("next")?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:t[3]||(t[3]=t=>e.$emit("nextSlide")),class:"btn btn-next"},[(0,n.Wm)(p,{class:"icon",name:"arrowRight"})])):(0,n.kq)("",!0)],64)):(0,n.kq)("",!0)],2)}const S={class:"avatar-with-title"},_={class:"title"};function b(e,t,i,a,s,o){const l=(0,n.up)("Avatar");return(0,n.wg)(),(0,n.iD)("div",S,[(0,n.Wm)(l,{class:"avatar",src:i.src},null,8,["src"]),(0,n._)("span",_,(0,v.zw)(i.title),1)])}var k=i(6012),D={name:"AvatarWithTitle",components:{Avatar:k.Z},props:{src:{type:String,required:!0},title:{type:String,required:!0}}},I=i(7477);const x=(0,I.Z)(D,[["render",b],["__scopeId","data-v-bd865748"]]);var P=x;const B={class:"progress"};function W(e,t,i,a,s,o){return(0,n.wg)(),(0,n.iD)("div",B,[(0,n._)("div",{ref:"filler",style:(0,v.j5)(s.style),class:"filler"},null,4)])}var Z={name:"Progress",props:{seconds:{type:Number,required:!0},active:{type:Boolean,default:!0}},emits:["finish"],data(){return{style:{}}},mounted(){this.active&&setTimeout((()=>{this.style={width:"100%",transition:"all "+this.seconds+"s"}}),0),this.$refs.filler.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.filler.removeEventListener("transitionend",this.emitOnFinish)},watch:{active(e){e?setTimeout((()=>{this.style={width:"100%",transition:"all "+this.seconds+"s"}}),0):this.style={width:"0%"}}},methods:{emitOnFinish(){this.$emit("finish")}}};const R=(0,I.Z)(Z,[["render",W],["__scopeId","data-v-51a0f445"]]);var C=R;const F=e=>((0,n.dD)("data-v-02a2b61a"),e=e(),(0,n.Cn)(),e),$={class:"placeholder"},A=F((()=>(0,n._)("div",{class:"img"},null,-1))),H=F((()=>(0,n._)("div",{class:"line line1"},null,-1))),T=F((()=>(0,n._)("div",{class:"line line2"},null,-1))),q=[H,T];function U(e,t,i,a,s,o){return(0,n.wg)(),(0,n.iD)("div",$,[A,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.paragraphs,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"paragraph",key:e},q)))),128))])}var Y={name:"Placeholder",props:{paragraphs:{type:Number,default:1}}};const L=(0,I.Z)(Y,[["render",U],["__scopeId","data-v-02a2b61a"]]);var N=L,j=i(163),O=i(475),E={name:"Slide",components:{AvatarWithTitle:P,Progress:C,Placeholder:N,Spinner:j.Z,Icon:c.Z,BaseButton:O.Z},emits:["progressFinish","nextSlide","prevSlide","follow"],props:{data:{type:Object,required:!0},active:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},btnsShown:{type:Array,default:()=>["next","prev"],validator(e){return e.every((e=>"next"===e||"prev"===e))}}},data(){return{activeProgress:!1}},mounted(){setTimeout((()=>{this.activeProgress=this.active}),0)},watch:{active(e){this.activeProgress=e}}};const G=(0,I.Z)(E,[["render",y],["__scopeId","data-v-34677ebe"]]);var K=G,M=i(65);const{mapState:V,mapActions:z}=(0,M._p)("repositories");var X={name:"Slider",components:{Slide:K},props:{initialSlide:{type:Number}},data(){return{slideIndex:0,slidePosition:0,loading:!1,showBtns:!0}},computed:{...V(["data"]),activeBtns(){return!1===this.showBtns?[]:0===this.slideIndex?["next"]:this.slideIndex===this.data.length-1?["prev"]:["prev","next"]}},async mounted(){if(this.data||await this.fetchRepositories(),this.initialSlide){const e=this.data.findIndex((e=>e.id===this.initialSlide));this.handleSlide(e)}await this.loadReadme()},methods:{...z(["fetchRepositories","fetchReadme","starRepo","unstarRepo"]),getData(e){return{id:e.id,userAvatar:e.avatarUrl,username:e.author,content:e.content,following:e.following}},async fetchReadmeForActiveSlide(){const{id:e,author:t,name:i}=this.data[this.slideIndex];await this.fetchReadme({id:e,repo:i,owner:t})},async loadReadme(){this.loading=!0,this.showBtns=!1;try{await this.fetchReadmeForActiveSlide()}catch(e){console.error(e)}finally{this.loading=!1,this.showBtns=!0}},moveSlider(e){const{slide:t,slider:i}=this.$refs,n=parseInt(getComputedStyle(t[e]).getPropertyValue("width"),10),a=parseInt(getComputedStyle(t[e]).getPropertyValue("margin-right"),10);this.slideIndex=e,this.slidePosition=-(n+a)*this.slideIndex,i.style.transform=`translateX(${this.slidePosition}px)`},async handleSlide(e){this.moveSlider(e),await this.loadReadme()}}};const J=(0,I.Z)(X,[["render",h],["__scopeId","data-v-9c199668"]]);var Q=J,ee={name:"Stories",components:{Header:d.Z,Icon:c.Z,Slider:Q}};const te=(0,I.Z)(ee,[["render",r],["__scopeId","data-v-bc17d392"]]);var ie=te}}]);
//# sourceMappingURL=867.6253da6f.js.map