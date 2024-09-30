"use strict";(self.webpackChunkniso_careers=self.webpackChunkniso_careers||[]).push([[998],{998:(e,t,i)=>{i.r(t),i.d(t,{default:()=>K});var n=i(5043),a=i(8964),l=i(9748),r=i(2019),o=i(436),s=i(8139),d=i.n(s);const c=function(){const e=Object.assign({},arguments.length<=0?void 0:arguments[0]);for(let t=1;t<arguments.length;t++){const i=t<0||arguments.length<=t?void 0:arguments[t];i&&Object.keys(i).forEach((t=>{const n=i[t];void 0!==n&&(e[t]=n)}))}return e};var m=i(4320),g=i(5296),p=i(4633),u=i(9122),h=i(8821),$=i(9598),f=i(4327),y=i(1686);const v=n.createContext({});v.Consumer;var x=i(2701),S=i(227),b=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const k=n.forwardRef(((e,t)=>{const{prefixCls:i,children:a,actions:l,extra:r,styles:o,className:s,classNames:c,colStyle:m}=e,p=b(e,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:u,itemLayout:h}=(0,n.useContext)(v),{getPrefixCls:$,list:f}=(0,n.useContext)(g.QO),y=e=>{var t,i;return d()(null===(i=null===(t=null===f||void 0===f?void 0:f.item)||void 0===t?void 0:t.classNames)||void 0===i?void 0:i[e],null===c||void 0===c?void 0:c[e])},k=e=>{var t,i;return Object.assign(Object.assign({},null===(i=null===(t=null===f||void 0===f?void 0:f.item)||void 0===t?void 0:t.styles)||void 0===i?void 0:i[e]),null===o||void 0===o?void 0:o[e])},A=$("list",i),C=l&&l.length>0&&n.createElement("ul",{className:d()(`${A}-item-action`,y("actions")),key:"actions",style:k("actions")},l.map(((e,t)=>n.createElement("li",{key:`${A}-item-action-${t}`},e,t!==l.length-1&&n.createElement("em",{className:`${A}-item-action-split`}))))),j=u?"div":"li",E=n.createElement(j,Object.assign({},p,u?{}:{ref:t},{className:d()(`${A}-item`,{[`${A}-item-no-flex`]:!("vertical"===h?r:!(()=>{let e=!1;return n.Children.forEach(a,(t=>{"string"===typeof t&&(e=!0)})),e&&n.Children.count(a)>1})())},s)}),"vertical"===h&&r?[n.createElement("div",{className:`${A}-item-main`,key:"content"},a,C),n.createElement("div",{className:d()(`${A}-item-extra`,y("extra")),key:"extra",style:k("extra")},r)]:[a,C,(0,x.Ob)(r,{key:"extra"})]);return u?n.createElement(S.A,{ref:t,flex:1,style:m},E):E})),A=k;A.Meta=e=>{var{prefixCls:t,className:i,avatar:a,title:l,description:r}=e,o=b(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:s}=(0,n.useContext)(g.QO),c=s("list",t),m=d()(`${c}-item-meta`,i),p=n.createElement("div",{className:`${c}-item-meta-content`},l&&n.createElement("h4",{className:`${c}-item-meta-title`},l),r&&n.createElement("div",{className:`${c}-item-meta-description`},r));return n.createElement("div",Object.assign({},o,{className:m}),a&&n.createElement("div",{className:`${c}-item-meta-avatar`},a),(l||r)&&p)};const C=A;var j=i(3944),E=i(4414),z=i(8855),O=i(8446);const w=e=>{const{listBorderedCls:t,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:l,itemPaddingLG:r,marginLG:o,borderRadiusLG:s}=e;return{[t]:{border:`${(0,j.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:s,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${(0,j.zA)(a)} ${(0,j.zA)(o)}`}},[`${t}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:l}},[`${t}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:r}}}},N=e=>{const{componentCls:t,screenSM:i,screenMD:n,marginLG:a,marginSM:l,margin:r}=e;return{[`@media screen and (max-width:${n}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:l}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${(0,j.zA)(r)}`}}}}}},P=e=>{const{componentCls:t,antCls:i,controlHeight:n,minHeight:a,paddingSM:l,marginLG:r,padding:o,itemPadding:s,colorPrimary:d,itemPaddingSM:c,itemPaddingLG:m,paddingXS:g,margin:p,colorText:u,colorTextDescription:h,motionDurationSlow:$,lineWidth:f,headerBg:y,footerBg:v,emptyTextPadding:x,metaMarginBottom:S,avatarMarginRight:b,titleMarginBottom:k,descriptionFontSize:A}=e;return{[t]:Object.assign(Object.assign({},(0,E.dF)(e)),{position:"relative","*":{outline:"none"},[`${t}-header`]:{background:y},[`${t}-footer`]:{background:v},[`${t}-header, ${t}-footer`]:{paddingBlock:l},[`${t}-pagination`]:{marginBlockStart:r,[`${i}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:s,color:u,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:b},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:u},[`${t}-item-meta-title`]:{margin:`0 0 ${(0,j.zA)(e.marginXXS)} 0`,color:u,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:u,transition:`all ${$}`,"&:hover":{color:d}}},[`${t}-item-meta-description`]:{color:h,fontSize:A,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${(0,j.zA)(g)}`,color:h,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:f,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${(0,j.zA)(o)} 0`,color:h,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:x,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${i}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:p,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:r},[`${t}-item-meta`]:{marginBlockEnd:S,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:k,color:u,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:o,marginInlineStart:"auto","> li":{padding:`0 ${(0,j.zA)(o)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${(0,j.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${(0,j.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${(0,j.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${i}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${(0,j.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:m},[`${t}-sm ${t}-item`]:{padding:c},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},B=(0,z.OF)("List",(e=>{const t=(0,O.oX)(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[P(t),w(t),N(t)]}),(e=>({contentWidth:220,itemPadding:`${(0,j.zA)(e.paddingContentVertical)} 0`,itemPaddingSM:`${(0,j.zA)(e.paddingContentVerticalSM)} ${(0,j.zA)(e.paddingContentHorizontal)}`,itemPaddingLG:`${(0,j.zA)(e.paddingContentVerticalLG)} ${(0,j.zA)(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize})));var I=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};function M(e,t){var{pagination:i=!1,prefixCls:a,bordered:l=!1,split:r=!0,className:s,rootClassName:x,style:S,children:b,itemLayout:k,loadMore:A,grid:C,dataSource:j=[],size:E,header:z,footer:O,loading:w=!1,rowKey:N,renderItem:P,locale:M}=e,L=I(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const H=i&&"object"===typeof i?i:{},[T,G]=n.useState(H.defaultCurrent||1),[W,F]=n.useState(H.defaultPageSize||10),{getPrefixCls:X,renderEmpty:R,direction:V,list:q}=n.useContext(g.QO),D=e=>(t,n)=>{var a;G(t),F(n),i&&(null===(a=null===i||void 0===i?void 0:i[e])||void 0===a||a.call(i,t,n))},J=D("onChange"),K=D("onShowSizeChange"),Q=X("list",a),[Z,_,U]=B(Q);let Y=w;"boolean"===typeof Y&&(Y={spinning:Y});const ee=!!(null===Y||void 0===Y?void 0:Y.spinning);let te="";switch((0,u.A)(E)){case"large":te="lg";break;case"small":te="sm"}const ie=d()(Q,{[`${Q}-vertical`]:"vertical"===k,[`${Q}-${te}`]:te,[`${Q}-split`]:r,[`${Q}-bordered`]:l,[`${Q}-loading`]:ee,[`${Q}-grid`]:!!C,[`${Q}-something-after-last-item`]:!!(A||i||O),[`${Q}-rtl`]:"rtl"===V},null===q||void 0===q?void 0:q.className,s,x,_,U),ne=c({current:1,total:0},{total:j.length,current:T,pageSize:W},i||{}),ae=Math.ceil(ne.total/ne.pageSize);ne.current>ae&&(ne.current=ae);const le=i&&n.createElement("div",{className:d()(`${Q}-pagination`)},n.createElement(f.A,Object.assign({align:"end"},ne,{onChange:J,onShowSizeChange:K})));let re=(0,o.A)(j);i&&j.length>(ne.current-1)*ne.pageSize&&(re=(0,o.A)(j).splice((ne.current-1)*ne.pageSize,ne.pageSize));const oe=Object.keys(C||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),se=(0,$.A)(oe),de=n.useMemo((()=>{for(let e=0;e<m.ye.length;e+=1){const t=m.ye[e];if(se[t])return t}}),[se]),ce=n.useMemo((()=>{if(!C)return;const e=de&&C[de]?C[de]:C.column;return e?{width:100/e+"%",maxWidth:100/e+"%"}:void 0}),[JSON.stringify(C),de]);let me=ee&&n.createElement("div",{style:{minHeight:53}});if(re.length>0){const e=re.map(((e,t)=>((e,t)=>{if(!P)return null;let i;return i="function"===typeof N?N(e):N?e[N]:e.key,i||(i=`list-item-${t}`),n.createElement(n.Fragment,{key:i},P(e,t))})(e,t)));me=C?n.createElement(h.A,{gutter:C.gutter},n.Children.map(e,(e=>n.createElement("div",{key:null===e||void 0===e?void 0:e.key,style:ce},e)))):n.createElement("ul",{className:`${Q}-items`},e)}else b||ee||(me=n.createElement("div",{className:`${Q}-empty-text`},(null===M||void 0===M?void 0:M.emptyText)||(null===R||void 0===R?void 0:R("List"))||n.createElement(p.A,{componentName:"List"})));const ge=ne.position||"bottom",pe=n.useMemo((()=>({grid:C,itemLayout:k})),[JSON.stringify(C),k]);return Z(n.createElement(v.Provider,{value:pe},n.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},null===q||void 0===q?void 0:q.style),S),className:ie},L),("top"===ge||"both"===ge)&&le,z&&n.createElement("div",{className:`${Q}-header`},z),n.createElement(y.A,Object.assign({},Y),me,b),O&&n.createElement("div",{className:`${Q}-footer`},O),A||("bottom"===ge||"both"===ge)&&le)))}const L=n.forwardRef(M);L.Item=C;const H=L;var T=i(2581),G=i(3188),W=i(2918),F=i(5444),X=i(574),R=i(8797),V=i(3216),q=i(3401),D=i(579);const{Content:J}=a.A,K=()=>{const[e,t]=(0,n.useState)([]),[i,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!1),[c]=l.A.useForm(),[m,g]=(0,n.useState)(null),p=(0,V.Zp)();(0,n.useEffect)((()=>{const e=(0,R.hg)(X.j,(e=>{e?t([{uid:e.uid,email:e.email}]):p("/login")}));return()=>e()}),[p]);return(0,D.jsxs)(a.A,{className:"site-layout",children:[(0,D.jsx)("title",{children:"Th\xf4ng tin t\xe0i kho\u1ea3n NISO"}),(0,D.jsx)(J,{children:(0,D.jsx)("div",{className:"site-layout-background",children:(0,D.jsx)(H,{grid:{gutter:16,column:1},dataSource:e,renderItem:e=>(0,D.jsx)(H.Item,{children:(0,D.jsxs)(T.A,{title:e.email,style:{width:"100%"},children:[(0,D.jsx)(G.Ay,{style:{marginBottom:"10px",width:"100%"},onClick:()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;g(e),e&&c.setFieldsValue({email:e.email,password:"",currentPassword:""}),d(!0)}(e),children:"\u0110\u1ed5i m\u1eadt kh\u1ea9u"}),(0,D.jsx)(G.Ay,{style:{width:"100%"},onClick:()=>(e=>{g(e),o(!0)})(e),children:"G\u1eedi Email \u0110\u1eb7t L\u1ea1i M\u1eadt Kh\u1ea9u"})]})})})})}),(0,D.jsx)(W.A,{title:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",visible:s,onCancel:()=>{d(!1),g(null),c.resetFields()},footer:null,children:(0,D.jsxs)(l.A,{form:c,onFinish:async e=>{const{email:i,password:n,currentPassword:a}=e;try{const e=X.j.currentUser;if(e){const l=R.IX.credential(e.email,a);await(0,R.kZ)(e,l),i!==e.email&&await(0,R.Ww)(e,i),n&&await(0,R.f3)(e,n),r.Ay.success("C\u1eadp nh\u1eadt ng\u01b0\u1eddi d\xf9ng th\xe0nh c\xf4ng"),t((t=>t.map((t=>t.uid===e.uid?{...t,email:i}:t)))),d(!1),c.resetFields()}}catch(l){console.error("Error updating user:",l),l.code,r.Ay.error("M\u1eadt kh\u1ea9u hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\xfang")}},layout:"vertical",children:[(0,D.jsx)(l.A.Item,{name:"email",label:"Email",rules:[{required:!0,type:"email",message:"Vui l\xf2ng nh\u1eadp email h\u1ee3p l\u1ec7!"}],children:(0,D.jsx)(F.A,{disabled:!0})}),(0,D.jsx)(l.A.Item,{name:"currentPassword",label:"M\u1eadt kh\u1ea9u hi\u1ec7n t\u1ea1i",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u hi\u1ec7n t\u1ea1i!"}],children:(0,D.jsx)(F.A.Password,{})}),(0,D.jsx)(l.A.Item,{name:"password",label:"M\u1eadt kh\u1ea9u m\u1edbi",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u m\u1edbi!"}],children:(0,D.jsx)(F.A.Password,{})}),(0,D.jsx)(l.A.Item,{children:(0,D.jsx)(G.Ay,{type:"primary",htmlType:"submit",children:"C\u1eadp nh\u1eadt"})})]})}),(0,D.jsx)(W.A,{title:"\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u",visible:i,onCancel:()=>{o(!1),g(null)},onOk:async()=>{try{await(0,R.J1)(X.j,m.email),q.oR.success("\u0110\xe3 g\u1eedi email \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),o(!1)}catch(e){console.error("L\u1ed7i khi g\u1eedi email \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u:",e),r.Ay.error("L\u1ed7i khi g\u1eedi email")}},okText:"G\u1eedi Email",cancelText:"H\u1ee7y",children:(0,D.jsxs)("p",{children:["Ch\xfang t\xf4i s\u1ebd g\u1eedi cho b\u1ea1n m\u1ed9t email v\xe0o ",null===m||void 0===m?void 0:m.email," \u0111\u1ec3 \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u."]})})]})}}}]);
//# sourceMappingURL=998.8085c892.chunk.js.map