import{V as w,b as O}from"./index-b3e64b24.js";import{V as Y}from"./index-c2a72551.js";import{V as z}from"./index-1a3985ea.js";import{o as I,h as T,m as L,c as R,a0 as E,a as $}from"./use-translate-1e5abec2.js";import{u as G}from"./use-lock-scroll-754fcce9.js";import{u as W}from"./use-touch-d246739c.js";import{u as j}from"./use-sync-prop-ref-a0e25dfc.js";import{A as U,y as b,D as y,u as q,e as a,o as V,c as J,w as i,C as e,a as K,F as Q,b as X,d as p,t as D}from"./vue-libs-dcfba01b.js";import{c as k}from"./closest-17b2cc6c.js";import{c as A,b as Z,t as P,w as tt}from"./with-install-042fcf0c.js";import"./use-id-2757e8c9.js";import"./use-expose-b1360ec6.js";import"./use-route-dfd2aa0a.js";import"./index-e07826a4.js";import"./index-60762718.js";import"./on-popup-reopen-f7cdcc35.js";import"./use-refs-041b217f.js";import"./index-38154fce.js";import"./constant-ee6e27d7.js";import"./interceptor-4f864b39.js";import"./index-c6749099.js";const et={height:A(0),anchors:Z(),duration:A(.2),contentDraggable:P,lockScroll:P,safeAreaInsetBottom:P},[at,_]=R("floating-panel"),H=.2,nt=U({name:at,props:et,emits:["heightChange","update:height"],setup(n,{emit:d,slots:r}){const h=b(),s=b(),o=j(()=>+n.height,t=>d("update:height",t)),l=y(()=>({min:n.anchors[0]??100,max:n.anchors[n.anchors.length-1]??Math.round(I.value*.6)})),c=y(()=>n.anchors.length>=2?n.anchors:[l.value.min,l.value.max]),x=b(!1),B=y(()=>({height:T(l.value.max),transform:`translateY(calc(100% + ${T(-o.value)}))`,transition:x.value?"none":`transform ${n.duration}s`})),F=t=>{const u=Math.abs(t),{min:g,max:m}=l.value;return u>m?-(m+(u-m)*H):u<g?-(g-(g-u)*H):t};let f;const v=W(),M=t=>{v.start(t),x.value=!0,f=-o.value},N=t=>{var m;v.move(t);const u=t.target;if(s.value===u||(m=s.value)!=null&&m.contains(u)){if(!n.contentDraggable)return;if(-f<l.value.max)t.cancelable&&t.preventDefault(),t.stopPropagation();else if(!(s.value.scrollTop<=0&&v.deltaY.value>0))return}const g=v.deltaY.value+f;o.value=-F(g)},C=()=>{x.value=!1,o.value=k(c.value,o.value),o.value!==-f&&d("heightChange",{height:o.value})};return q(l,()=>{o.value=k(c.value,o.value)},{immediate:!0}),G(h,()=>n.lockScroll),L("touchmove",N,{target:h}),()=>{var t;return a("div",{class:[_(),{"van-safe-area-bottom":n.safeAreaInsetBottom}],ref:h,style:B.value,onTouchstartPassive:M,onTouchend:C,onTouchcancel:C},[a("div",{class:_("header")},[a("div",{class:_("header-bar")},null)]),a("div",{class:_("content"),ref:s},[(t=r.default)==null?void 0:t.call(r)])])}}}),ot=tt(nt),S=ot,rt={style:{"text-align":"center",padding:"15px"}},lt={style:{"text-align":"center",padding:"15px"}},Vt=U({__name:"index",setup(n){const{height:d}=E(),r=$({"zh-CN":{customAnchors:"自定义锚点",headDragOnly:"仅头部拖拽",panelShowHeight:"面板显示高度",contentUnDrag:"内容不可拖拽"},"en-US":{customAnchors:"Custom Anchors",headDragOnly:"Head Drag Only",panelShowHeight:"Panel Show Height",contentUnDrag:"Content cannot be dragged"}}),h=[100,Math.round(.4*d.value),Math.round(.7*d.value)],s=b(h[0]);return(o,l)=>(V(),J(e(O),null,{default:i(()=>[a(e(w),{title:e(r)("basicUsage")},{default:i(()=>[a(e(S),null,{default:i(()=>[a(e(z),null,{default:i(()=>[(V(),K(Q,null,X(26,c=>a(e(Y),{key:c,title:String.fromCharCode(c+64),size:"large"},null,8,["title"])),64))]),_:1})]),_:1})]),_:1},8,["title"]),a(e(w),{title:e(r)("customAnchors")},{default:i(()=>[a(e(S),{height:s.value,"onUpdate:height":l[0]||(l[0]=c=>s.value=c),anchors:h},{default:i(()=>[p("div",rt,[p("p",null,D(e(r)("panelShowHeight"))+" "+D(s.value.toFixed(0))+" px",1)])]),_:1},8,["height"])]),_:1},8,["title"]),a(e(w),{title:e(r)("headDragOnly")},{default:i(()=>[a(e(S),{"content-draggable":!1},{default:i(()=>[p("div",lt,[p("p",null,D(e(r)("contentUnDrag")),1)])]),_:1})]),_:1},8,["title"])]),_:1}))}});export{Vt as default};
