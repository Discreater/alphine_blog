import"./MDCSlot.8c747c9f.js";import _ from"./ButtonLink.b2f6885e.js";import f from"./Terminal.388acdb7.js";import m from"./VideoPlayer.901b9a9c.js";import{r as n}from"./slot.1fe9bfcb.js";import{d as y,b as o,c as a,e as s,f as r,F as h,X as c,w as k,D as i,t as d,a5 as v,k as $}from"./entry.7eab823c.js";import"./index.018a1ccb.js";const B={class:"block-hero"},w={class:"layout"},g={class:"content"},H={key:0,class:"announce"},S={class:"title"},q={class:"description"},V={key:1,class:"extra"},b={class:"actions"},x=["href"],A={class:"support"},C=y({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,N)=>{const l=_,u=f,p=m;return o(),a("section",B,[s("div",w,[s("div",g,[t.$slots.announce?(o(),a("p",H,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):r("",!0),s("h1",S,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",q,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),a("div",V,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):r("",!0),s("div",b,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),a(h,{key:1},[e.cta?(o(),c(l,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(o(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,x)):r("",!0)],64))])]),s("div",A,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}});const P=$(C,[["__scopeId","data-v-7932cffa"]]);export{P as default};
