import{c as p,b as P,E as b,e as G,u as v,p as _}from"./use-translate.7b7055b3.js";import{n as h,b as E,t as O,w as S}from"./with-install.a0877b0b.js";import{u as f}from"./use-expose.77504c28.js";import{A as k,x,e as V,D as y,B as A}from"./vue-libs.d5ee895a.js";import{c as B,C as w}from"./Checker.9f33de2f.js";const[g,D]=p("checkbox-group"),K={max:h,disabled:Boolean,iconSize:h,direction:String,modelValue:E(),checkedColor:String},C=Symbol(g),X=k({name:g,props:K,emits:["change","update:modelValue"],setup(a,{emit:r,slots:u}){const{children:c,linkChildren:i}=P(C),l=e=>r("update:modelValue",e),d=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:t,skipDisabled:s}=e,n=c.filter(o=>o.props.bindGroup?o.props.disabled&&s?o.checked.value:t!=null?t:!o.checked.value:!1).map(o=>o.name);l(n)};return x(()=>a.modelValue,e=>r("change",e)),f({toggleAll:d}),b(()=>a.modelValue),i({props:a,updateValue:l}),()=>{var e;return V("div",{class:D([a.direction])},[(e=u.default)==null?void 0:e.call(u)])}}}),[N,$]=p("checkbox"),z=G({},B,{bindGroup:O}),F=k({name:N,props:z,emits:["change","update:modelValue"],setup(a,{emit:r,slots:u}){const{parent:c}=v(C),i=e=>{const{name:t}=a,{max:s,modelValue:m}=c.props,n=m.slice();if(e)!(s&&n.length>=s)&&!n.includes(t)&&(n.push(t),a.bindGroup&&c.updateValue(n));else{const o=n.indexOf(t);o!==-1&&(n.splice(o,1),a.bindGroup&&c.updateValue(n))}},l=y(()=>c&&a.bindGroup?c.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),d=(e=!l.value)=>{c&&a.bindGroup?i(e):r("update:modelValue",e)};return x(()=>a.modelValue,e=>r("change",e)),f({toggle:d,props:a,checked:l}),b(()=>a.modelValue),()=>V(w,A({bem:$,role:"checkbox",parent:c,checked:l.value,onToggle:d},a),_(u,["default","icon"]))}}),Y=S(F);export{Y as C,X as _};