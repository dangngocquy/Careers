"use strict";(self.webpackChunkniso_careers=self.webpackChunkniso_careers||[]).push([[935],{5935:(e,n,i)=>{i.r(n),i.d(n,{default:()=>w});var s=i(5043),t=i(5472),l=i(574),a=i(6784),c=i(5284),r=i(8588),h=i(6383),o=i(2462),d=i(3722),x=i(5388),m=i(7534),u=i(6178),j=i.n(u),p=i(3216),g=i(3488),y=i.n(g),C=i(4999),A=i.n(C),v=i(8575),b=i(3188),f=i(8677),N=i(6720),T=i(3617),k=i(579);const{Option:Y}=v.A,w=()=>{const[e,n]=(0,s.useState)([]),[i,u]=(0,s.useState)({totalApplications:0,savedApplications:0,approvedApplications:0,applicationsToday:0}),[g,C]=(0,s.useState)("week"),[w,D]=(0,s.useState)({}),[V,_]=(0,s.useState)(window.innerWidth<768),[H,S]=(0,s.useState)(!1),[M,I]=(0,s.useState)("day"),[O,P]=(0,s.useState)(0),G=(0,p.Zp)();(0,s.useEffect)((()=>{const e=()=>{_(window.innerWidth<768)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const B=(0,s.useCallback)((e=>{const n={week:j()().startOf("week"),month:j()().startOf("month"),year:j()().startOf("year")}[g];return e.filter((e=>j()(e.NgayGuiCV,"DD/MM/YYYY").isSameOrAfter(n)))}),[g]),E=(0,s.useCallback)((e=>{const n=B(e),i=n.map((e=>j()(e.NgayGuiCV,"DD/MM/YYYY").format("DD/MM/YYYY"))),s=n.map((()=>1)),t=n.map((e=>e.PheDuyet?1:0));D({title:{text:"T\u1ed5ng \u0111\u01a1n \u1ee9ng tuy\u1ec3n v\xe0 \u0110\u01a1n \u0111\xe3 x\xe1c nh\u1eadn"},xAxis:{categories:i},yAxis:{title:{text:"S\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n"}},series:[{name:"T\u1ed5ng \u0111\u01a1n \u1ee9ng tuy\u1ec3n",data:s},{name:"\u0110\u01a1n \u0111\xe3 x\xe1c nh\u1eadn",data:t}]})}),[B]);(0,s.useEffect)((()=>{(async()=>{const e=(0,t.H9)(l.db,"DemTruyCap","stats"),n=await(0,t.x7)(e);if(n.exists()){const e=n.data(),i=j()().format("DD/MM/YYYY");let s=0;switch(M){case"day":s=e.count[e.date.indexOf(i)]||0;break;case"week":s=e.date.reduce(((n,i,s)=>j()(i,"DD/MM/YYYY").isSame(j()(),"week")?n+e.count[s]:n),0);break;case"month":s=e.date.reduce(((n,i,s)=>j()(i,"DD/MM/YYYY").isSame(j()(),"month")?n+e.count[s]:n),0);break;case"year":s=e.date.reduce(((n,i,s)=>j()(i,"DD/MM/YYYY").isSame(j()(),"year")?n+e.count[s]:n),0);break;default:s=0}P(s)}})()}),[M]);const Z=e=>{I(e)};(0,s.useEffect)((()=>{(async()=>{try{const e=(0,t.P)((0,t.rJ)(l.db,"CV")),i=await(0,t.GG)(e),s=i.docs.map((e=>({id:e.id,...e.data()}))).sort(((e,n)=>j()(n.NgayGuiCV,"DD/MM/YYYY").valueOf()-j()(e.NgayGuiCV,"DD/MM/YYYY").valueOf()));n(s),L(s),E(s)}catch(e){console.error("Error fetching CV data: ",e)}})()}),[g,E]);const L=e=>{const n=j()().format("DD/MM/YYYY");u({totalApplications:e.length,savedApplications:e.filter((e=>e.LuuHoSo)).length,approvedApplications:e.filter((e=>e.PheDuyet)).length,applicationsToday:e.filter((e=>e.NgayGuiCV===n)).length})},K=()=>(0,k.jsxs)("div",{className:"row mb-4",children:[(0,k.jsx)("div",{className:"col",children:(0,k.jsx)(a.A,{className:"text-center",children:(0,k.jsxs)(c.A,{children:[(0,k.jsx)(r.A,{children:"T\u1ed5ng \u0111\u01a1n \u1ee9ng tuy\u1ec3n"}),(0,k.jsx)(h.A,{children:i.totalApplications}),(0,k.jsx)(b.Ay,{type:"link",onClick:()=>G("/auth/ho-so-ung-tuyen"),icon:(0,k.jsx)(N.YZR,{}),children:"Xem t\u1ea5t c\u1ea3"})]})})}),(0,k.jsx)("div",{className:"col",children:(0,k.jsx)(a.A,{className:"text-center",children:(0,k.jsxs)(c.A,{children:[(0,k.jsx)(r.A,{children:"\u0110\u01a1n \u0111\xe3 l\u01b0u"}),(0,k.jsx)(h.A,{children:i.savedApplications}),(0,k.jsx)(b.Ay,{type:"link",onClick:()=>G("/auth/ho-so-da-luu"),icon:(0,k.jsx)(N.YZR,{}),children:"Xem t\u1ea5t c\u1ea3"})]})})}),(0,k.jsx)("div",{className:"col",children:(0,k.jsx)(a.A,{className:"text-center",children:(0,k.jsxs)(c.A,{children:[(0,k.jsx)(r.A,{children:"\u0110\u01a1n \u0111\xe3 x\xe1c nh\u1eadn"}),(0,k.jsx)(h.A,{children:i.approvedApplications}),(0,k.jsx)(b.Ay,{type:"link",icon:(0,k.jsx)(N.YZR,{}),children:"Xem t\u1ea5t c\u1ea3"})]})})}),(0,k.jsx)("div",{className:"col",children:(0,k.jsx)(a.A,{className:"text-center",children:(0,k.jsxs)(c.A,{children:[(0,k.jsx)(r.A,{children:"T\u1ed5ng \u0111\u01a1n trong ng\xe0y"}),(0,k.jsx)(h.A,{children:i.applicationsToday}),(0,k.jsx)(b.Ay,{type:"link",icon:(0,k.jsx)(N.YZR,{}),children:"Xem t\u1ea5t c\u1ea3"})]})})}),(0,k.jsx)("div",{className:"col",children:(0,k.jsx)(a.A,{className:"text-center",children:(0,k.jsxs)(c.A,{children:[(0,k.jsx)(r.A,{children:"T\u1ed5ng l\u01b0\u1ee3t truy c\u1eadp"}),(0,k.jsx)(h.A,{children:O}),(0,k.jsxs)(v.A,{defaultValue:"day",style:{width:120},onChange:Z,children:[(0,k.jsx)(Y,{value:"day",children:"Trong ng\xe0y"}),(0,k.jsx)(Y,{value:"week",children:"Trong tu\u1ea7n"}),(0,k.jsx)(Y,{value:"month",children:"Trong th\xe1ng"}),(0,k.jsx)(Y,{value:"year",children:"Trong n\u0103m"})]})]})})})]});return(0,k.jsxs)("div",{children:[V?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b.Ay,{type:"primary",onClick:()=>{S(!0)},style:{marginBottom:16},children:"Hi\u1ec3n th\u1ecb Th\u1ed1ng k\xea"}),(0,k.jsx)(f.A,{title:"Th\u1ed1ng k\xea \u1ee9ng tuy\u1ec3n",placement:"right",closable:!0,onClose:()=>{S(!1)},visible:H,children:K()})]}):K(),(0,k.jsxs)(a.A,{className:"mt-4",children:[(0,k.jsxs)(a.A.Header,{children:["\u0110\u01a1n \u1ee9ng tuy\u1ec3n g\u1ea7n \u0111\xe2y ",(0,k.jsx)(b.Ay,{type:"link",onClick:()=>G("/auth/ho-so-ung-tuyen"),icon:(0,k.jsx)(N.YZR,{}),children:"Xem t\u1ea5t c\u1ea3"})]}),e.slice(0,5).map((e=>(0,k.jsxs)("div",{className:"job-list__item",children:[(0,k.jsx)("div",{className:"job-list__item-unit job-list__item-unit--"+("store"===e.Khoiungtuyen?"store":"office"),children:"store"===e.Khoiungtuyen?"Kh\u1ed1i c\u1eeda h\xe0ng":"Kh\u1ed1i v\u0103n ph\xf2ng"}),(0,k.jsxs)("div",{className:"job-list__item-body",children:[(0,k.jsxs)("div",{className:"job-list__item-left",children:[(0,k.jsx)("div",{className:"job-list__item-name",children:e.Vitriungtuyen}),(0,k.jsxs)("div",{className:"job-list__item-left-info",children:[(0,k.jsx)("span",{className:"mr-2",children:(0,k.jsx)(d.A,{})}),(0,k.jsx)("span",{children:e.HoTen})]}),(0,k.jsxs)("div",{className:"job-list__item-left-info",children:[(0,k.jsx)("span",{className:"mr-2",children:(0,k.jsx)(x.A,{})}),(0,k.jsx)("span",{children:e.Email})]}),(0,k.jsxs)("div",{className:"job-list__item-left-info",children:[(0,k.jsx)("span",{className:"mr-2",children:(0,k.jsx)(m.A,{})}),(0,k.jsx)("span",{children:e.SoDienThoai})]}),(0,k.jsxs)("div",{className:"job-list__item-mb-deadline",children:[(0,k.jsx)("span",{className:"mr-2",children:(0,k.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,k.jsx)("path",{d:"M12.6668 2.66667H11.3335V2C11.3335 1.82319 11.2633 1.65362 11.1382 1.5286C11.0132 1.40357 10.8436 1.33334 10.6668 1.33334C10.49 1.33334 10.3204 1.40357 10.1954 1.5286C10.0704 1.65362 10.0002 1.82319 10.0002 2V2.66667H6.00016V2C6.00016 1.82319 5.92992 1.65362 5.8049 1.5286C5.67988 1.40357 5.51031 1.33334 5.3335 1.33334C5.15669 1.33334 4.98712 1.40357 4.86209 1.5286C4.73707 1.65362 4.66683 1.82319 4.66683 2V2.66667H3.3335C2.80306 2.66667 2.29436 2.87738 1.91928 3.25246C1.54421 3.62753 1.3335 4.13624 1.3335 4.66667V12.6667C1.3335 13.1971 1.54421 13.7058 1.91928 14.0809C2.29436 14.456 2.80306 14.6667 3.3335 14.6667H12.6668C13.1973 14.6667 13.706 14.456 14.081 14.0809C14.4561 13.7058 14.6668 13.1971 14.6668 12.6667V4.66667C14.6668 4.13624 14.4561 3.62753 14.081 3.25246C13.706 2.87738 13.1973 2.66667 12.6668 2.66667ZM13.3335 12.6667C13.3335 12.8435 13.2633 13.0131 13.1382 13.1381C13.0132 13.2631 12.8436 13.3333 12.6668 13.3333H3.3335C3.15669 13.3333 2.98712 13.2631 2.86209 13.1381C2.73707 13.0131 2.66683 12.8435 2.66683 12.6667V8H13.3335V12.6667ZM13.3335 6.66667H2.66683V4.66667C2.66683 4.48986 2.73707 4.32029 2.86209 4.19526C2.98712 4.07024 3.15669 4 3.3335 4H4.66683V4.66667C4.66683 4.84348 4.73707 5.01305 4.86209 5.13807C4.98712 5.2631 5.15669 5.33334 5.3335 5.33334C5.51031 5.33334 5.67988 5.2631 5.8049 5.13807C5.92992 5.01305 6.00016 4.84348 6.00016 4.66667V4H10.0002V4.66667C10.0002 4.84348 10.0704 5.01305 10.1954 5.13807C10.3204 5.2631 10.49 5.33334 10.6668 5.33334C10.8436 5.33334 11.0132 5.2631 11.1382 5.13807C11.2633 5.01305 11.3335 4.84348 11.3335 4.66667V4H12.6668C12.8436 4 13.0132 4.07024 13.1382 4.19526C13.2633 4.32029 13.3335 4.48986 13.3335 4.66667V6.66667Z",fill:"#333333"})})}),(0,k.jsxs)("span",{children:["Ng\xe0y g\u1eedi CV ",e.NgayGuiCV]})]}),(0,k.jsx)("div",{className:"job-list__item-mb-deadline",children:(0,k.jsx)(T.A,{cv:e})})]}),(0,k.jsxs)("div",{className:"job-list__item-right",children:[(0,k.jsxs)("div",{className:"job-list__item-deadline",children:["Ng\xe0y g\u1eedi CV ",e.NgayGuiCV]}),(0,k.jsx)(T.A,{cv:e})]})]})]})))]}),(0,k.jsxs)(o.A.Group,{className:"mb-3",style:{marginTop:15},children:[(0,k.jsx)(o.A.Label,{children:"Ph\xe2n t\xedch theo"}),(0,k.jsxs)(o.A.Control,{as:"select",value:g,onChange:e=>{C(e.target.value)},children:[(0,k.jsx)("option",{value:"week",children:"Trong tu\u1ea7n"}),(0,k.jsx)("option",{value:"month",children:"Trong th\xe1ng"}),(0,k.jsx)("option",{value:"year",children:"Trong n\u0103m"})]})]}),(0,k.jsx)(A(),{highcharts:y(),options:w})]})}},3617:(e,n,i)=>{i.d(n,{A:()=>C});var s=i(5043),t=i(7727),l=i(2019),a=i(3188),c=i(8677),r=i(2761),h=i(3072),o=i(2581),d=i(2751),x=i(3722),m=i(5472),u=i(574),j=i(3401),p=i(579);const{Title:g,Text:y}=t.A,C=e=>{let{cv:n,onUpdate:i}=e;const[t,C]=(0,s.useState)(!1),[A,v]=(0,s.useState)(!1),[b,f]=(0,s.useState)(!1),[N,T]=(0,s.useState)(n.PheDuyet),[k,Y]=(0,s.useState)(n.TuChoi),[w,D]=(0,s.useState)(!1);(0,s.useEffect)((()=>{T(n.PheDuyet),Y(n.TuChoi)}),[n.PheDuyet,n.TuChoi]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Ay,{type:"primary",onClick:()=>C(!0),children:"Xem h\u1ed3 s\u01a1 \u1ee9ng vi\xean"}),(0,p.jsxs)(c.A,{title:`H\u1ed3 s\u01a1 \u1ee9ng vi\xean: ${n.HoTen}`,placement:"right",onClose:()=>C(!1),open:t,width:720,children:[(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,p.jsx)(r.A,{size:64,src:n.Hinhdaidien,icon:!n.Hinhdaidien&&(0,p.jsx)(x.A,{})}),(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{level:2,style:{marginBottom:5},children:n.HoTen}),(0,p.jsx)(y,{children:n.Vitriungtuyen})]})]}),(0,p.jsx)("div",{class:"apply-form__group-body--line"}),(0,p.jsxs)(h.A,{title:"Th\xf4ng tin c\xe1 nh\xe2n",column:window.innerWidth<768?1:2,children:[(0,p.jsx)(h.A.Item,{label:"Email",children:n.Email}),(0,p.jsx)(h.A.Item,{label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",children:n.SoDienThoai}),(0,p.jsx)(h.A.Item,{label:"Ng\xe0y sinh",children:n.Ngaysinh}),(0,p.jsx)(h.A.Item,{label:"CMND/CCCD",children:n.CMND}),(0,p.jsx)(h.A.Item,{label:"Gi\u1edbi t\xednh",children:n.GioiTinh}),(0,p.jsxs)(h.A.Item,{label:"Chi\u1ec1u cao",children:[n.ChieuCao," cm"]}),(0,p.jsxs)(h.A.Item,{label:"C\xe2n n\u1eb7ng",children:[n.CanNang," kg"]})]}),(0,p.jsxs)(h.A,{title:"Th\xf4ng tin chung",column:1,children:[(0,p.jsx)(h.A.Item,{label:"\u0110\u1ecba ch\u1ec9",children:`${n.Diachi}, ${n.Phuongxa}, ${n.Quanhuyen}, ${n.City}`}),(0,p.jsx)(h.A.Item,{label:"Thu nh\u1eadp mong mu\u1ed1n",children:n.Thunhapmongmuon}),(0,p.jsx)(h.A.Item,{label:"Kinh nghi\u1ec7m",children:n.Kinhnghiem}),(0,p.jsx)(h.A.Item,{label:"Ng\xe0y g\u1eedi CV",children:n.NgayGuiCV})]}),(0,p.jsx)("div",{class:"apply-form__group-body--line"}),(0,p.jsx)("div",{children:n.KinhNghiemLamViec&&Object.entries(n.KinhNghiemLamViec).map((e=>{let[n,i]=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{level:3,children:"Kinh nghi\u1ec7m l\xe0m vi\u1ec7c"}),(0,p.jsxs)(o.A,{style:{marginBottom:"16px"},children:[(0,p.jsx)(o.A.Meta,{title:i.ViTriDamNhiem,description:i.CongTyDoanhNghiep}),(0,p.jsxs)(y,{type:"secondary",children:[i.TuNgay," - ",i.DangLamViec?"Hi\u1ec7n t\u1ea1i":i.DenNgay]}),(0,p.jsx)("p",{children:i.MoTaCongViec})]},n),(0,p.jsx)("div",{class:"apply-form__group-body--line"})]})}))}),(0,p.jsxs)(h.A,{title:"Th\xf4ng tin kh\xe1c",column:window.innerWidth<768?1:2,children:[(0,p.jsx)(h.A.Item,{label:"Thu nh\u1eadp mong mu\u1ed1n",labelStyle:{width:"200px"},children:n.Thunhapmongmuon}),(0,p.jsx)(h.A.Item,{label:"B\u1ea1n c\xf3 s\u1eb5n s\xe0ng l\xe0m vi\u1ec7c xoay ca kh\xf4ng? (Ca s\xe1ng, ca t\u1ed1i)",labelStyle:{width:"200px"},children:n.Cauhoi1}),(0,p.jsx)(h.A.Item,{label:"B\u1ea1n c\xf3 th\u1ec3 l\xe0m vi\u1ec7c v\xe0o c\xe1c ng\xe0y L\u1ec5/T\u1ebft kh\xf4ng?",labelStyle:{width:"200px"},children:n.Cauhoi2}),(0,p.jsx)(h.A.Item,{label:"B\u1ea1n c\xf3 s\u1eb5n s\xe0ng l\xe0m vi\u1ec7c cu\u1ed1i tu\u1ea7n kh\xf4ng?",labelStyle:{width:"200px"},children:n.Cauhoi3}),(0,p.jsx)(h.A.Item,{label:"B\u1ea1n c\xf3 s\u1eb5n s\xe0ng l\xe0m vi\u1ec7c ca t\u1ed1i kh\xf4ng?",labelStyle:{width:"200px"},children:n.Cauhoi4})]})]}),(0,p.jsx)("div",{class:"apply-form__group-body--line"}),(0,p.jsxs)("div",{style:{display:"flex",gap:"16px",marginTop:"16px"},children:[(0,p.jsx)(a.Ay,{type:"primary",onClick:()=>v(!0),disabled:N,children:N?"\u0110\xe3 ph\xea duy\u1ec7t":"Ph\xea duy\u1ec7t h\u1ed3 s\u01a1"}),(0,p.jsx)(a.Ay,{type:"default",onClick:()=>f(!0),disabled:k,children:k?"\u0110\xe3 t\u1eeb ch\u1ed1i":"T\u1eeb ch\u1ed1i h\u1ed3 s\u01a1"})]})]}),(0,p.jsx)(d.A,{title:"X\xe1c nh\u1eadn ph\xea duy\u1ec7t",open:A,onOk:async()=>{D(!0);try{const e=(0,m.H9)(u.db,"CV",n.id);await(0,m.mZ)(e,{PheDuyet:!0,TuChoi:!1}),T(!0),Y(!1),j.oR.success("H\u1ed3 s\u01a1 \u0111\xe3 \u0111\u01b0\u1ee3c ph\xea duy\u1ec7t.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),i&&i(n.id,!0,!1)}catch(e){console.error("Error approving CV: ",e),l.Ay.error("C\xf3 l\u1ed7i x\u1ea3y ra khi ph\xea duy\u1ec7t h\u1ed3 s\u01a1")}finally{D(!1),v(!1)}},onCancel:()=>v(!1),okText:"Ph\xea duy\u1ec7t",cancelText:"H\u1ee7y",confirmLoading:w,children:(0,p.jsx)("p",{children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n ph\xea duy\u1ec7t h\u1ed3 s\u01a1 n\xe0y kh\xf4ng?"})}),(0,p.jsx)(d.A,{title:"X\xe1c nh\u1eadn t\u1eeb ch\u1ed1i",open:b,onOk:async()=>{D(!0);try{const e=(0,m.H9)(u.db,"CV",n.id);await(0,m.mZ)(e,{PheDuyet:!1,TuChoi:!0}),T(!1),Y(!0),j.oR.success("H\u1ed3 s\u01a1 \u0111\xe3 b\u1ecb t\u1eeb ch\u1ed1i.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),i&&i(n.id,!1,!0)}catch(e){console.error("Error rejecting CV: ",e),l.Ay.error("C\xf3 l\u1ed7i x\u1ea3y ra khi t\u1eeb ch\u1ed1i h\u1ed3 s\u01a1")}finally{D(!1),f(!1)}},onCancel:()=>f(!1),okText:"T\u1eeb ch\u1ed1i",cancelText:"H\u1ee7y",confirmLoading:w,children:(0,p.jsx)("p",{children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n t\u1eeb ch\u1ed1i h\u1ed3 s\u01a1 n\xe0y kh\xf4ng?"})})]})}}}]);
//# sourceMappingURL=935.8dfdc720.chunk.js.map