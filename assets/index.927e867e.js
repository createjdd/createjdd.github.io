import{c as v,e as d,w as C,a as B}from"./use-translate.d2900b8c.js";import{w as S}from"./with-install.19a35764.js";import{C as D}from"./index.bbd81525.js";import{F as w}from"./index.ae023657.js";import{F as b}from"./index.1879fbb7.js";import{B as _}from"./index.8e37fe56.js";import{S as E}from"./index.fd5fe6e1.js";import{z as h,H as x,u as V,e as a,C as y,r as k,o as F,c as T,w as L,B as u}from"./vue-libs.b44bc779.js";import{T as g}from"./function-call.509e41a7.js";import"./use-route.82f2be69.js";import"./index.b70c9b40.js";import"./constant.80c6de18.js";import"./use-expose.c942d5f8.js";import"./use-id.46df47b7.js";import"./index.4e4daaac.js";import"./mount-component.f3744995.js";import"./index.e6e790ed.js";import"./interceptor.f0c85874.js";import"./use-touch.04ca7093.js";import"./use-lazy-render.f712e85e.js";import"./on-popup-reopen.138c77eb.js";import"./index.d46e53a8.js";const[U,s,n]=v("contact-edit"),m={tel:"",name:""},A={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:C}},I=h({name:U,props:A,emits:["save","delete","change-default"],setup(t,{emit:l}){const e=x(d({},m,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"danger",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(E,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,size:24,onChange:o=>l("change-default",o)},null),r=()=>{if(t.showSetDefault)return a(D,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return V(()=>t.contactInfo,o=>d(e,m,o)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),N=S(I),z=N,se=h({__name:"index",setup(t){const l=B({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({tel:"",name:""}),i=()=>g(l("save")),c=()=>g(l("delete"));return(f,p)=>{const r=k("demo-block");return F(),T(r,{title:u(l)("basicUsage")},{default:L(()=>[a(u(z),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{se as default};