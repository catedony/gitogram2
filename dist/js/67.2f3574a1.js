"use strict";(self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[]).push([[67],{5655:function(e,t,r){r.d(t,{Z:function(){return D}});var n=r(3396),a=r(7139);const o=e=>((0,n.dD)("data-v-424b5f62"),e=e(),(0,n.Cn)(),e),s={class:"top"},l={class:"main"},i={class:"col-1"},u=o((()=>(0,n._)("h2",{class:"title"},"My Profile",-1))),c={class:"user"},d={class:"user-login"},v={class:"name"},p={class:"col-2"};function w(e,t,r,o,w,g){const _=(0,n.up)("Logo"),f=(0,n.up)("Topline"),h=(0,n.up)("Header"),m=(0,n.up)("Avatar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(h,{class:"header"},{topline:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n.Wm)(_),(0,n.Wm)(f)])])),_:1}),(0,n._)("div",l,[(0,n._)("div",i,[u,(0,n._)("div",c,[(0,n._)("div",null,[(0,n.Wm)(m,{class:"user-avatar",src:o.user?.avatar_url},null,8,["src"])]),(0,n._)("div",null,[(0,n._)("div",d,(0,a.zw)(o.user?.login),1),(0,n._)("div",v,(0,a.zw)(o.user?.name),1)])])]),(0,n._)("div",p,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])])],64)}var g=r(2066),_=r(5978),f=r(7171),h=r(6012),m=r(65),k={name:"Starred",components:{Header:g.Z,Logo:_.Z,Topline:f.Z,Avatar:h.Z},setup(){const e=(0,m.oR)(),t=()=>{e.dispatch("auth/fetchUserData")};t();const r=(0,n.Fl)((()=>e.state.auth.data));return{user:r}}},y=r(7477);const Z=(0,y.Z)(k,[["render",w],["__scopeId","data-v-424b5f62"]]);var D=Z},3067:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(3396),a=r(7139);const o={class:"title repo-title"},s={key:0},l={key:1},i={key:2},u={class:"repo-owner"},c={class:"owner-login"},d={class:"owner-type"},v={class:"repo-btn"};function p(e,t,r,p,w,g){const _=(0,n.up)("Avatar"),f=(0,n.up)("ChangeOnHoverButton"),h=(0,n.up)("Profile");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n._)("h2",o,[(0,n.Uk)("Following "),(0,n._)("span",null,(0,a.zw)(p.repos?.length),1)]),p.isLoading?((0,n.wg)(),(0,n.iD)("div",s,"Loading")):p.error?((0,n.wg)(),(0,n.iD)("div",l,(0,a.zw)(p.error),1)):((0,n.wg)(),(0,n.iD)("ul",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.repos,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id,class:"repo"},[(0,n._)("div",u,[(0,n._)("div",null,[(0,n.Wm)(_,{class:"repo-avatar",src:e.owner.avatar_url},null,8,["src"])]),(0,n._)("div",null,[(0,n._)("div",c,(0,a.zw)(e.owner.login),1),(0,n._)("div",d,(0,a.zw)(e.owner.type),1)])]),(0,n._)("div",v,[(0,n.Wm)(f,{text:"Following",hoverText:"Unfollow",onClick:t=>p.unfollow(e)},null,8,["onClick"])])])))),128))]))])),_:1})}var w=r(6012),g=r(65);const _={class:"text"},f={class:"hover-text"};function h(e,t,r,o,s,l){return(0,n.wg)(),(0,n.iD)("button",null,[(0,n._)("span",_,(0,a.zw)(r.text),1),(0,n._)("span",f,(0,a.zw)(r.hoverText),1)])}var m={name:"ChangeOnHoverButton",props:{text:{type:String,default:"Follow"},hoverText:{type:String,default:"Unfollow"}}},k=r(7477);const y=(0,k.Z)(m,[["render",h],["__scopeId","data-v-331a9797"]]);var Z=y,D=r(6443),x=r(5655),z={name:"Following",components:{Avatar:w.Z,ChangeOnHoverButton:Z,Profile:x.Z},setup(){const e=(0,g.oR)(),t=()=>{e.dispatch("starred/fetchStarredRepos")};t();const r=(0,n.Fl)((()=>e.state.starred.data)),a=(0,n.Fl)((()=>e.state.starred.isLoading)),o=(0,n.Fl)((()=>e.state.starred.error)),s=async e=>{await(0,D.dQ)({owner:e.owner.login,repo:e.name}),t()};return{repos:r,isLoading:a,error:o,unfollow:s}}};const C=(0,k.Z)(z,[["render",p],["__scopeId","data-v-df8e1f70"]]);var F=C}}]);
//# sourceMappingURL=67.2f3574a1.js.map