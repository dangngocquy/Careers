"use strict";(self.webpackChunkniso_careers=self.webpackChunkniso_careers||[]).push([[84],{8395:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var l=t(5043),n=t(5444),i=t(9748),r=t(2019),a=t(1686),c=t(3188),o=t(6051),d=t(2918),u=t(6036),m=t(8677),h=t(1966),x=t(7407),g=t(5337),v=t(574),y=t(5472),A=t(8147),p=t(579);const{TextArea:j}=n.A,f=()=>{const[e]=i.A.useForm(),[s,t]=(0,l.useState)({title:"",content:"",logo:{url:"",title:""},coverImage1:"",coverImage2:"",footerImages:[],icons:[],addresses:[]}),[f,b]=(0,l.useState)(!0),[w,C]=(0,l.useState)(null),[$,E]=(0,l.useState)(!1),[k,I]=(0,l.useState)(!1),[L,N]=(0,l.useState)(!1),[O,S]=(0,l.useState)(null),[F,M]=(0,l.useState)(""),[z,T]=(0,l.useState)(!1),[U,H]=(0,l.useState)(!1),[R,q]=(0,l.useState)(""),[P,B]=(0,l.useState)(""),[D,G]=(0,l.useState)([]),[V,X]=(0,l.useState)([]),_=(0,l.useCallback)((async()=>{try{const s=await(0,y.GG)((0,y.rJ)(v.db,"Frontend"));if(!s.empty){const l=s.docs[0],n=l.data();t(n),C(l.id),e.setFieldsValue({title:n.title,content:n.content})}}catch(s){console.error("Error fetching data: ",s)}finally{b(!1)}}),[e]);(0,l.useEffect)((()=>{_()}),[_]);const J=async e=>{const s=(0,A.KR)(v.I,`CAREERS/CUSTOMS/${e.name}_${Date.now()}`);try{const t=await(0,A.D)(s,e);return await(0,A.qk)(t.ref)}catch(t){console.error("Error uploading image: ",t)}},K=(e,s)=>{S(e),M(s),N(!0)},Q=()=>{N(!1),S(null),M("")},W=(e,s)=>{"icon"===s?t((s=>({...s,icons:s.icons.filter(((s,t)=>t!==e))}))):"address"===s&&t((s=>({...s,addresses:s.addresses.filter(((s,t)=>t!==e))}))),r.Ay.success("Item deleted successfully")};return f?(0,p.jsx)(a.A,{size:"large"}):(0,p.jsxs)("div",{children:[(0,p.jsxs)(i.A,{form:e,onFinish:async()=>{try{const t=await e.validateFields(),l={...s,...t};if(w)await(0,y.mZ)((0,y.H9)(v.db,"Frontend",w),l),r.Ay.success("Form updated successfully");else{const e=await(0,y.gS)((0,y.rJ)(v.db,"Frontend"),l);C(e.id),r.Ay.success("Form submitted successfully")}}catch(t){console.error("Error updating/adding document: ",t),r.Ay.error("Failed to submit form")}},layout:"vertical",children:[(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)(c.Ay,{onClick:()=>T(!0),children:s.logo.url?"Edit Logo Image":"Add Logo Image"}),s.logo.url&&(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:s.logo.url,alt:"Logo",style:{width:100,marginTop:10}}),(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(h.A,{}),danger:!0,onClick:()=>{t((e=>({...e,logo:{...e.logo,url:""}}))),r.Ay.success("Logo image deleted successfully")},children:"Delete Logo Image"})]}),(0,p.jsx)(c.Ay,{onClick:()=>H(!0),style:{marginLeft:10},children:s.logo.title?"Edit Logo Title":"Add Logo Title"}),s.logo.title&&(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:s.logo.title}),(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(h.A,{}),danger:!0,onClick:()=>{t((e=>({...e,logo:{...e.logo,title:""}}))),r.Ay.success("Logo title deleted successfully")},children:"Delete Logo Title"})]})]}),(0,p.jsx)(i.A.Item,{name:"title",label:"Title",rules:[{required:!0}],children:(0,p.jsx)(n.A,{})}),(0,p.jsx)(i.A.Item,{name:"content",label:"Content",rules:[{required:!0}],children:(0,p.jsx)(j,{rows:4})}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)(c.Ay,{onClick:()=>E(!0),children:"Add Icons"}),(0,p.jsx)("div",{className:"d-flex flex-wrap mt-2",children:s.icons.map(((e,s)=>(0,p.jsxs)("div",{className:"me-2 mb-2",children:[(0,p.jsx)("img",{src:e.url,alt:e.title,style:{width:50}}),(0,p.jsx)("p",{children:e.title}),(0,p.jsxs)(o.A,{children:[(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(x.A,{}),onClick:()=>K(e,"icon")}),(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(h.A,{}),onClick:()=>W(s,"icon"),danger:!0})]})]},s)))})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)(c.Ay,{onClick:()=>I(!0),children:"Add Addresses"}),(0,p.jsx)("div",{className:"mt-2",children:s.addresses.map(((e,s)=>(0,p.jsxs)("div",{className:"mb-2",children:[(0,p.jsx)("img",{src:e.image,alt:"Address",style:{width:100}}),(0,p.jsx)("p",{children:e.content}),(0,p.jsxs)(o.A,{children:[(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(x.A,{}),onClick:()=>K(e,"address")}),(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(h.A,{}),onClick:()=>W(s,"address"),danger:!0})]})]},s)))})]}),(0,p.jsx)(i.A.Item,{children:(0,p.jsx)(c.Ay,{type:"primary",htmlType:"submit",children:w?"Update":"Submit"})})]}),(0,p.jsx)(d.A,{title:"Edit Logo Image",visible:z,onOk:async()=>{R&&(t((e=>({...e,logo:{...e.logo,url:R}}))),T(!1),q(""))},onCancel:()=>T(!1),children:(0,p.jsx)(u.A,{beforeUpload:async e=>{const s=await J(e);return q(s),!1},children:(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(g.A,{}),children:"Upload Logo Image"})})}),(0,p.jsx)(d.A,{title:"Edit Logo Title",visible:U,onOk:async()=>{P&&(t((e=>({...e,logo:{...e.logo,title:P}}))),H(!1),B(""))},onCancel:()=>H(!1),children:(0,p.jsx)(n.A,{placeholder:"Enter Logo Title",value:P,onChange:e=>B(e.target.value)})}),(0,p.jsxs)(d.A,{title:"Add Icons",visible:$,onOk:async()=>{D.length>0&&(t((e=>({...e,icons:[...e.icons,...D]}))),E(!1),G([]))},onCancel:()=>E(!1),children:[D.map(((e,s)=>(0,p.jsxs)("div",{style:{marginBottom:10},children:[(0,p.jsx)("img",{src:e.url,alt:e.title,style:{width:50,marginRight:10}}),(0,p.jsx)(n.A,{placeholder:"Icon Title",value:e.title,onChange:e=>{const t=[...D];t[s].title=e.target.value,G(t)},style:{width:200}}),(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(h.A,{}),onClick:()=>G((e=>e.filter(((e,t)=>t!==s)))),danger:!0})]},s))),(0,p.jsx)(u.A,{beforeUpload:async e=>{const s=await J(e);return G((e=>[...e,{url:s,title:""}])),!1},children:(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(g.A,{}),children:"Add Icon"})})]}),(0,p.jsxs)(d.A,{title:"Add Addresses",visible:k,onOk:async()=>{V.length>0&&(t((e=>({...e,addresses:[...e.addresses,...V]}))),I(!1),X([]))},onCancel:()=>I(!1),children:[V.map(((e,s)=>(0,p.jsxs)("div",{style:{marginBottom:10},children:[(0,p.jsx)("img",{src:e.image,alt:"Address",style:{width:100,marginRight:10}}),(0,p.jsx)(j,{placeholder:"Address Content",value:e.content,onChange:e=>{const t=[...V];t[s].content=e.target.value,X(t)},style:{width:200}}),(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(h.A,{}),onClick:()=>X((e=>e.filter(((e,t)=>t!==s)))),danger:!0})]},s))),(0,p.jsx)(u.A,{beforeUpload:async e=>{const s=await J(e);return X((e=>[...e,{image:s,content:""}])),!1},children:(0,p.jsx)(c.Ay,{icon:(0,p.jsx)(g.A,{}),children:"Add Address"})})]}),(0,p.jsx)(m.A,{title:`Edit ${F.charAt(0).toUpperCase()+F.slice(1)}`,placement:"right",closable:!1,onClose:Q,visible:L,children:O&&(0,p.jsxs)(i.A,{form:e,onFinish:async()=>{try{const s=await e.validateFields(),l=e.getFieldValue("file");let n=O.url;l&&l[0]&&(n=await J(l[0].originFileObj));const i={...s,url:n};"icon"===F?t((e=>({...e,icons:e.icons.map((e=>e===O?i:e))}))):"address"===F&&t((e=>({...e,addresses:e.addresses.map((e=>e===O?i:e))}))),Q(),r.Ay.success("Item updated successfully")}catch(s){console.error("Error updating item: ",s),r.Ay.error("Failed to update item")}},layout:"vertical",initialValues:O,children:[(0,p.jsx)(i.A.Item,{name:"title",label:"Title",rules:[{required:!0}],children:(0,p.jsx)(n.A,{})}),(0,p.jsx)(i.A.Item,{name:"file",label:"Image",valuePropName:"fileList",getValueFromEvent:e=>e&&e.fileList,children:(0,p.jsx)(u.A,{beforeUpload:()=>!1,listType:"picture-card",maxCount:1,children:(0,p.jsxs)("div",{children:[(0,p.jsx)(g.A,{}),(0,p.jsx)("div",{style:{marginTop:8},children:"Upload"})]})})}),"address"===F&&(0,p.jsx)(i.A.Item,{name:"content",label:"Content",rules:[{required:!0}],children:(0,p.jsx)(j,{rows:4})}),(0,p.jsx)(i.A.Item,{children:(0,p.jsx)(c.Ay,{type:"primary",htmlType:"submit",children:"C\u1eadp nh\u1eadt"})})]})})]})}},3390:(e,s,t)=>{t.d(s,{A:()=>c});var l=t(8168),n=t(5043);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var r=t(2172),a=function(e,s){return n.createElement(r.A,(0,l.A)({},e,{ref:s,icon:i}))};const c=n.forwardRef(a)},1966:(e,s,t)=>{t.d(s,{A:()=>c});var l=t(8168),n=t(5043);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var r=t(2172),a=function(e,s){return n.createElement(r.A,(0,l.A)({},e,{ref:s,icon:i}))};const c=n.forwardRef(a)},7407:(e,s,t)=>{t.d(s,{A:()=>c});var l=t(8168),n=t(5043);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var r=t(2172),a=function(e,s){return n.createElement(r.A,(0,l.A)({},e,{ref:s,icon:i}))};const c=n.forwardRef(a)},4210:(e,s,t)=>{t.d(s,{A:()=>n});var l=t(5043);function n(){const[,e]=l.useReducer((e=>e+1),0);return e}},4320:(e,s,t)=>{t.d(s,{Ay:()=>c,ko:()=>o,ye:()=>i});var l=t(5043),n=t(691);const i=["xxl","xl","lg","md","sm","xs"],r=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),a=e=>{const s=e,t=[].concat(i).reverse();return t.forEach(((e,l)=>{const n=e.toUpperCase(),i=`screen${n}Min`,r=`screen${n}`;if(!(s[i]<=s[r]))throw new Error(`${i}<=${r} fails : !(${s[i]}<=${s[r]})`);if(l<t.length-1){const e=`screen${n}Max`;if(!(s[r]<=s[e]))throw new Error(`${r}<=${e} fails : !(${s[r]}<=${s[e]})`);const i=`screen${t[l+1].toUpperCase()}Min`;if(!(s[e]<=s[i]))throw new Error(`${e}<=${i} fails : !(${s[e]}<=${s[i]})`)}})),e};function c(){const[,e]=(0,n.Ay)(),s=r(a(e));return l.useMemo((()=>{const e=new Map;let t=-1,l={};return{matchHandlers:{},dispatch:s=>(l=s,e.forEach((e=>e(l))),e.size>=1),subscribe(s){return e.size||this.register(),t+=1,e.set(t,s),s(l),t},unsubscribe(s){e.delete(s),e.size||this.unregister()},unregister(){Object.keys(s).forEach((e=>{const t=s[e],l=this.matchHandlers[t];null===l||void 0===l||l.mql.removeListener(null===l||void 0===l?void 0:l.listener)})),e.clear()},register(){Object.keys(s).forEach((e=>{const t=s[e],n=s=>{let{matches:t}=s;this.dispatch(Object.assign(Object.assign({},l),{[e]:t}))},i=window.matchMedia(t);i.addListener(n),this.matchHandlers[t]={mql:i,listener:n},n(i)}))},responsiveMap:s}}),[e])}const o=(e,s)=>{if(s&&"object"===typeof s)for(let t=0;t<i.length;t++){const l=i[t];if(e[l]&&void 0!==s[l])return s[l]}}},6051:(e,s,t)=>{t.d(s,{A:()=>A});var l=t(5043),n=t(8139),i=t.n(n),r=t(2149);function a(e){return["small","middle","large"].includes(e)}function c(e){return!!e&&("number"===typeof e&&!Number.isNaN(e))}var o=t(5296),d=t(5132);const u=l.createContext({latestIndex:0}),m=u.Provider,h=e=>{let{className:s,index:t,children:n,split:i,style:r}=e;const{latestIndex:a}=l.useContext(u);return null===n||void 0===n?null:l.createElement(l.Fragment,null,l.createElement("div",{className:s,style:r},n),t<a&&i&&l.createElement("span",{className:`${s}-split`},i))};var x=t(8309),g=function(e,s){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&s.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)s.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(t[l[n]]=e[l[n]])}return t};const v=l.forwardRef(((e,s)=>{var t,n,d;const{getPrefixCls:u,space:v,direction:y}=l.useContext(o.QO),{size:A=(null!==(t=null===v||void 0===v?void 0:v.size)&&void 0!==t?t:"small"),align:p,className:j,rootClassName:f,children:b,direction:w="horizontal",prefixCls:C,split:$,style:E,wrap:k=!1,classNames:I,styles:L}=e,N=g(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[O,S]=Array.isArray(A)?A:[A,A],F=a(S),M=a(O),z=c(S),T=c(O),U=(0,r.A)(b,{keepEmpty:!0}),H=void 0===p&&"horizontal"===w?"center":p,R=u("space",C),[q,P,B]=(0,x.A)(R),D=i()(R,null===v||void 0===v?void 0:v.className,P,`${R}-${w}`,{[`${R}-rtl`]:"rtl"===y,[`${R}-align-${H}`]:H,[`${R}-gap-row-${S}`]:F,[`${R}-gap-col-${O}`]:M},j,f,B),G=i()(`${R}-item`,null!==(n=null===I||void 0===I?void 0:I.item)&&void 0!==n?n:null===(d=null===v||void 0===v?void 0:v.classNames)||void 0===d?void 0:d.item);let V=0;const X=U.map(((e,s)=>{var t,n;null!==e&&void 0!==e&&(V=s);const i=(null===e||void 0===e?void 0:e.key)||`${G}-${s}`;return l.createElement(h,{className:G,key:i,index:s,split:$,style:null!==(t=null===L||void 0===L?void 0:L.item)&&void 0!==t?t:null===(n=null===v||void 0===v?void 0:v.styles)||void 0===n?void 0:n.item},e)})),_=l.useMemo((()=>({latestIndex:V})),[V]);if(0===U.length)return null;const J={};return k&&(J.flexWrap="wrap"),!M&&T&&(J.columnGap=O),!F&&z&&(J.rowGap=S),q(l.createElement("div",Object.assign({ref:s,className:D,style:Object.assign(Object.assign(Object.assign({},J),null===v||void 0===v?void 0:v.style),E)},N),l.createElement(m,{value:_},X)))})),y=v;y.Compact=d.Ay;const A=y}}]);
//# sourceMappingURL=84.442c50ab.chunk.js.map