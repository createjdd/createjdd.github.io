import{A as K,y as b,r as k,o as v,a as w,e as u,w as V,C as e,Z as r,c as f,F as $}from"./vue-libs-19c20d28.js";import{V as m}from"./index-1e4f5137.js";import{V as T}from"./index-01839907.js";import{V as a}from"./index-dc2b3c8a.js";import{a as B}from"./use-translate-71d4880c.js";import{s as y}from"./function-call-e2d4e58d.js";import"./use-route-751feeeb.js";import"./index-1ea87eb6.js";import"./index-8bc2514f.js";import"./with-install-560d59bf.js";import"./use-id-09c3f4cb.js";import"./use-expose-80cfd2b2.js";import"./constant-ee6e27d7.js";import"./use-touch-4e22f945.js";import"./index-2b75ebd8.js";import"./mount-component-b555bf78.js";import"./index-f6ff4ff7.js";import"./use-lock-scroll-01f1fb06.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./index-cd342d67.js";import"./interceptor-07dc6e0f.js";const L=K({__name:"index",setup(h){const n=B({"zh-CN":{close:"完成",input:"输入",title:"键盘标题",button1:"弹出默认键盘",button2:"弹出带右侧栏的键盘",button3:"弹出身份证号键盘",button4:"弹出带标题的键盘",button5:"弹出配置多个按键的键盘",button6:"弹出配置随机数字的键盘",bindValue:"双向绑定",clickToInput:"点此输入",extraKey:"左下角按键内容",multiExtraKey:"配置多个按键",randomKeyOrder:"随机数字键盘"},"en-US":{close:"Close",input:"Input",title:"Keyboard Title",button1:"Show Default Keyboard",button2:"Show Keyboard With Sidebar",button3:"Show IdNumber Keyboard",button4:"Show Keyboard With Title",button5:"Show Keyboard With Multiple ExtraKey",button6:"Show Keyboard With Random Key Order",bindValue:"Bind Value",clickToInput:"Click To Input",extraKey:"IdNumber Keyboard",multiExtraKey:"Multiple ExtraKey",randomKeyOrder:"Random Key Order"}}),d=b(""),o=b("default"),i=p=>y(`${n("input")}: ${p}`),s=()=>y(n("delete"));return(p,t)=>{const x=k("demo-block");return v(),w($,null,[u(x,{card:""},{default:V(()=>[u(e(m),{"is-link":"",title:e(n)("button1"),onTouchstart:t[0]||(t[0]=r(l=>o.value="default",["stop"]))},null,8,["title"]),u(e(m),{"is-link":"",title:e(n)("button2"),onTouchstart:t[1]||(t[1]=r(l=>o.value="custom",["stop"]))},null,8,["title"]),u(e(m),{"is-link":"",title:e(n)("button3"),onTouchstart:t[2]||(t[2]=r(l=>o.value="extraKey",["stop"]))},null,8,["title"]),u(e(m),{"is-link":"",title:e(n)("button4"),onTouchstart:t[3]||(t[3]=r(l=>o.value="title",["stop"]))},null,8,["title"]),u(e(m),{"is-link":"",title:e(n)("button5"),onTouchstart:t[4]||(t[4]=r(l=>o.value="multiExtraKey",["stop"]))},null,8,["title"]),u(e(m),{"is-link":"",title:e(n)("button6"),onTouchstart:t[5]||(t[5]=r(l=>o.value="randomKeyOrder",["stop"]))},null,8,["title"]),u(e(T),{modelValue:d.value,"onUpdate:modelValue":t[6]||(t[6]=l=>d.value=l),readonly:"",clickable:"",label:e(n)("bindValue"),placeholder:e(n)("clickToInput"),onTouchstart:t[7]||(t[7]=r(l=>o.value="bindValue",["stop"]))},null,8,["modelValue","label","placeholder"])]),_:1}),u(e(a),{show:o.value==="default",onBlur:t[8]||(t[8]=l=>o.value=""),onInput:i,onDelete:s},null,8,["show"]),u(e(a),{show:o.value==="custom","close-button-text":e(n)("close"),theme:"custom","extra-key":".",onBlur:t[9]||(t[9]=l=>o.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text"]),u(e(a),{show:o.value==="extraKey","close-button-text":e(n)("close"),"extra-key":"X",onBlur:t[10]||(t[10]=l=>o.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text"]),u(e(a),{show:o.value==="title","close-button-text":e(n)("close"),title:e(n)("title"),"extra-key":".",onBlur:t[11]||(t[11]=l=>o.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text","title"]),u(e(a),{show:o.value==="multiExtraKey","close-button-text":e(n)("close"),theme:"custom","extra-key":["00","."],onBlur:t[12]||(t[12]=l=>o.value=""),onInput:i,onDelete:s},null,8,["show","close-button-text","extra-key"]),(v(),f(e(a),{key:0,show:o.value==="randomKeyOrder","random-key-order":"",onBlur:t[13]||(t[13]=l=>o.value=""),onInput:i,onDelete:s},null,8,["show"])),u(e(a),{modelValue:d.value,"onUpdate:modelValue":t[14]||(t[14]=l=>d.value=l),show:o.value==="bindValue",maxlength:"6",onBlur:t[15]||(t[15]=l=>o.value="")},null,8,["modelValue","show"])],64)}}});export{L as default};