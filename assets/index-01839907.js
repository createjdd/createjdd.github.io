import{z as me,A as he,f as be,v as ye,B as Ie,u as ve,C as Se,m as Ce,c as Ve,e as xe,i as v,D as H,E as ke,l as L,h as K,F as Ee}from"./use-translate-71d4880c.js";import{C as Me,c as we}from"./index-1e4f5137.js";import{u as Te}from"./use-id-09c3f4cb.js";import{u as Ae}from"./use-expose-80cfd2b2.js";import{I as P}from"./index-1ea87eb6.js";import{A as Le,H as Pe,y as B,D as S,P as Be,u as Re,q as E,M as Fe,e as u,B as ze,g as De}from"./vue-libs-19c20d28.js";import{n as F,m as M,u as Ne,c as Oe,w as We}from"./with-install-560d59bf.js";import{F as _e}from"./constant-ee6e27d7.js";function J(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function $e(e,i){if(J(e)){if(i.required)return!1;if(i.validateEmpty===!1)return!0}return!(i.pattern&&!i.pattern.test(String(e)))}function je(e,i){return new Promise(l=>{const d=i.validator(e,i);if(ye(d)){d.then(l);return}l(d)})}function U(e,i){const{message:l}=i;return Ie(l)?l(e,i):l||""}function qe({target:e}){e.composing=!0}function Y({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function He(e,i){const l=me();e.style.height="auto";let d=e.scrollHeight;if(be(i)){const{maxHeight:r,minHeight:c}=i;r!==void 0&&(d=Math.min(d,r)),c!==void 0&&(d=Math.max(d,c))}d&&(e.style.height=`${d}px`,he(l))}function Ke(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function y(e){return[...e].length}function R(e,i){return[...e].slice(0,i).join("")}const[Ue,m]=Ve("field"),Ye={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:F,formatter:Function,clearIcon:M("clear"),modelValue:Oe(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,spellcheck:{type:Boolean,default:null},clearTrigger:M("focus"),formatTrigger:M("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Je=xe({},we,Ye,{rows:F,type:M("text"),rules:Array,autosize:[Boolean,Object],labelWidth:F,labelClass:Ne,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),Ge=Le({name:Ue,props:Je,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:i,slots:l}){const d=Te(),r=Pe({status:"unvalidated",focused:!1,validateMessage:""}),c=B(),z=B(),w=B(),{parent:h}=ve(_e),I=()=>String(e.modelValue??""),f=t=>{if(v(e[t]))return e[t];if(h&&v(h.props[t]))return h.props[t]},G=S(()=>{const t=f("readonly");if(e.clearable&&!t){const n=I()!=="",a=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return n&&a}return!1}),D=S(()=>w.value&&l.input?w.value():e.modelValue),Q=t=>t.reduce((n,a)=>n.then(()=>{if(r.status==="failed")return;let{value:o}=D;if(a.formatter&&(o=a.formatter(o,a)),!$e(o,a)){r.status="failed",r.validateMessage=U(o,a);return}if(a.validator)return J(o)&&a.validateEmpty===!1?void 0:je(o,a).then(s=>{s&&typeof s=="string"?(r.status="failed",r.validateMessage=s):s===!1&&(r.status="failed",r.validateMessage=U(o,a))})}),Promise.resolve()),C=()=>{r.status="unvalidated",r.validateMessage=""},N=()=>i("endValidate",{status:r.status,message:r.validateMessage}),O=(t=e.rules)=>new Promise(n=>{C(),t?(i("startValidate"),Q(t).then(()=>{r.status==="failed"?(n({name:e.name,message:r.validateMessage}),N()):(r.status="passed",n(),N())})):n()}),T=t=>{if(h&&e.rules){const{validateTrigger:n}=h.props,a=H(n).includes(t),o=e.rules.filter(s=>s.trigger?H(s.trigger).includes(t):a);o.length&&O(o)}},X=t=>{var a;const{maxlength:n}=e;if(v(n)&&y(t)>+n){const o=I();if(o&&y(o)===+n)return o;const s=(a=c.value)==null?void 0:a.selectionEnd;if(r.focused&&s){const g=[...t],b=g.length-+n;return g.splice(s-b,b),g.join("")}return R(t,+n)}return t},V=(t,n="onChange")=>{const a=t;t=X(t);const o=y(a)-y(t);if(e.type==="number"||e.type==="digit"){const g=e.type==="number";t=ke(t,g,g)}let s=0;if(e.formatter&&n===e.formatTrigger){const{formatter:g,maxlength:b}=e;if(t=g(t),v(b)&&y(t)>+b&&(t=R(t,+b)),c.value&&r.focused){const{selectionEnd:k}=c.value,q=R(a,k);s=y(g(q))-y(q)}}if(c.value&&c.value.value!==t)if(r.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=t,v(g)&&v(b)){const k=y(t);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,k),Math.min(b,k))}}else c.value.value=t;t!==e.modelValue&&i("update:modelValue",t)},Z=t=>{t.target.composing||V(t.target.value)},A=()=>{var t;return(t=c.value)==null?void 0:t.blur()},W=()=>{var t;return(t=c.value)==null?void 0:t.focus()},x=()=>{const t=c.value;e.type==="textarea"&&e.autosize&&t&&He(t,e.autosize)},p=t=>{r.focused=!0,i("focus",t),E(x),f("readonly")&&A()},ee=t=>{r.focused=!1,V(I(),"onBlur"),i("blur",t),!f("readonly")&&(T("onBlur"),E(x),Ee())},_=t=>i("clickInput",t),te=t=>i("clickLeftIcon",t),ne=t=>i("clickRightIcon",t),ae=t=>{L(t),i("update:modelValue",""),i("clear",t)},$=S(()=>{if(typeof e.error=="boolean")return e.error;if(h&&h.props.showError&&r.status==="failed")return!0}),ie=S(()=>{const t=f("labelWidth"),n=f("labelAlign");if(t&&n!=="top")return{width:K(t)}}),re=t=>{t.keyCode===13&&(!(h&&h.props.submitOnEnter)&&e.type!=="textarea"&&L(t),e.type==="search"&&A()),i("keypress",t)},j=()=>e.id||`${d}-input`,le=()=>r.status,oe=()=>{const t=m("control",[f("inputAlign"),{error:$.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return u("div",{class:t,onClick:_},[l.input()]);const n={id:j(),ref:c,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${d}-label`:void 0,onBlur:ee,onFocus:p,onInput:Z,onClick:_,onChange:Y,onKeypress:re,onCompositionend:Y,onCompositionstart:qe};return e.type==="textarea"?u("textarea",n,null):u("input",ze(Ke(e.type),n),null)},se=()=>{const t=l["left-icon"];if(e.leftIcon||t)return u("div",{class:m("left-icon"),onClick:te},[t?t():u(P,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ce=()=>{const t=l["right-icon"];if(e.rightIcon||t)return u("div",{class:m("right-icon"),onClick:ne},[t?t():u(P,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ue=()=>{if(e.showWordLimit&&e.maxlength){const t=y(I());return u("div",{class:m("word-limit")},[u("span",{class:m("word-num")},[t]),De("/"),e.maxlength])}},de=()=>{if(h&&h.props.showErrorMessage===!1)return;const t=e.errorMessage||r.validateMessage;if(t){const n=l["error-message"],a=f("errorMessageAlign");return u("div",{class:m("error-message",a)},[n?n({message:t}):t])}},fe=()=>{const t=f("labelWidth"),n=f("labelAlign"),a=f("colon")?":":"";if(l.label)return[l.label(),a];if(e.label)return u("label",{id:`${d}-label`,for:l.input?void 0:j(),onClick:o=>{L(o),W()},style:n==="top"&&t?{width:K(t)}:void 0},[e.label+a])},ge=()=>[u("div",{class:m("body")},[oe(),G.value&&u(P,{ref:z,name:e.clearIcon,class:m("clear")},null),ce(),l.button&&u("div",{class:m("button")},[l.button()])]),ue(),de()];return Ae({blur:A,focus:W,validate:O,formValue:D,resetValidation:C,getValidationStatus:le}),Be(Se,{customValue:w,resetValidation:C,validateWithTrigger:T}),Re(()=>e.modelValue,()=>{V(I()),C(),T("onChange"),E(x)}),Fe(()=>{V(I(),e.formatTrigger),E(x)}),Ce("touchstart",ae,{target:S(()=>{var t;return(t=z.value)==null?void 0:t.$el})}),()=>{const t=f("disabled"),n=f("labelAlign"),a=se(),o=()=>{const s=fe();return n==="top"?[a,s].filter(Boolean):s||[]};return u(Me,{size:e.size,class:m({error:$.value,disabled:t,[`label-${n}`]:n}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[n,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:a&&n!=="top"?()=>a:null,title:o,value:ge,extra:l.extra})}}}),Qe=We(Ge),rt=Qe;export{Qe as F,rt as V,Ye as f};