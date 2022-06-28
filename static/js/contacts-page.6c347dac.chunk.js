"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[141],{9376:function(e,n,t){t.d(n,{Q:function(){return o}});var r=t(6373),a="LoaderButton_wrapper__WcgzK",i=t(184),o=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(r.iT,{ariaLabel:"loading-indicator",height:24,width:24,strokeWidth:8,color:"white",secondaryColor:"white"})})}},6137:function(e,n,t){t.r(n),t.d(n,{default:function(){return je}});var r=t(4942),a=t(1413),i=t(885),o=t(2791),s=t(3044),c=t(757),l=t(1614),d=t(890),u=t(6151),m=t(4953),h=t(4554),v=t(2477),f=t(5206),p=t(2286),Z=t(3032),x=t(9434),b=t(9376),g=t(184),j=p.Z.getContacts,C=p.Z.getContactsStatus,w=/^(?=.{2,25}$)(?![' -])(?!.*[ '-]{2})[a-zA-Z\u0430-\u044f\u0410-\u042f' -]+(?<![' -])$/,k=/^\+?[0-9]?[0-9]?([0-9]{10})$/,y=function(){var e=(0,x.I0)(),n=(0,x.v9)(j),t="creating"===(0,x.v9)(C),p=(0,o.useState)({name:"",number:""}),y=(0,i.Z)(p,2),S=y[0],P=y[1],_=(0,o.useState)({name:"",number:""}),z=(0,i.Z)(_,2),A=z[0],N=z[1],M=function(e,n,t){return n.match(t)?(P((0,a.Z)((0,a.Z)({},S),{},(0,r.Z)({},e,n))),N((0,a.Z)((0,a.Z)({},A),{},(0,r.Z)({},e,""))),!0):n?(P((0,a.Z)((0,a.Z)({},S),{},(0,r.Z)({},e,n))),N((0,a.Z)((0,a.Z)({},A),{},(0,r.Z)({},e,"wrong ".concat(e)))),!1):(P((0,a.Z)((0,a.Z)({},S),{},(0,r.Z)({},e,n))),N((0,a.Z)((0,a.Z)({},A),{},(0,r.Z)({},e,"".concat(e," is required")))),!1)},I=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":M(t,r,w);break;case"number":M(t,r,k);break;default:return}};return(0,g.jsx)(l.Z,{component:"div",maxWidth:"xs",children:(0,g.jsxs)(h.Z,{sx:{marginTop:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,g.jsx)(c.Z,{})}),(0,g.jsx)(d.Z,{component:"h1",variant:"h5",children:"Contacts"}),(0,g.jsxs)(h.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r=n.find((function(e){return e.name===S.name})),a=n.find((function(e){return e.number===S.number}));if(r)f.Am.warn("Name is already in contacts.");else if(a)f.Am.warn("Number is already in contacts.");else if(M("name",S.name,w)&&M("number",S.number,k)){var i={name:S.name,number:S.number};e((0,Z.uK)(i)).unwrap().then((function(n){f.Am.success("".concat(n.name," is add in contacts.")),e((0,Z.yF)()).unwrap().then((function(){f.Am.success("Contacts updated")})).catch((function(){f.Am.error("Contacts didn't updated")})),P({name:"",number:""})})).catch((function(){f.Am.error("".concat(S.name," isn't add in contacts."))}))}},noValidate:!0,sx:{mt:3},children:[(0,g.jsx)(v.Z,{title:"Name may contain only letters, apostrophe, dash and spaces",children:(0,g.jsx)(m.Z,{margin:"normal",error:!!A.name,helperText:A.name,required:!0,fullWidth:!0,id:"name",name:"name",value:S.name,label:"Name",autoComplete:"name",onChange:I})}),(0,g.jsx)(v.Z,{title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",children:(0,g.jsx)(m.Z,{margin:"normal",error:!!A.number,helperText:A.number,required:!0,fullWidth:!0,id:"number",name:"number",value:S.number,type:"tel",label:"Number",autoComplete:"current-password",onChange:I})}),(0,g.jsx)(u.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{my:3},children:t?(0,g.jsx)(b.Q,{}):"Add Contact"})]})]})})},S=t(5861),P=t(7757),_=t.n(P),z=t(3229),A=t(501),N=t(3400),M=t(7247),I=t(168),E=t(3366),D=t(7462),F=t(8182),L=t(4419),R=t(2554),W=t(4036),T=t(1402),V=t(6934),q=t(1217);function B(e){return(0,q.Z)("MuiCircularProgress",e)}(0,t(5878).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var H,K,$,Q,G,O,U,Y,J=["className","color","disableShrink","size","style","thickness","value","variant"],X=44,ee=(0,R.F4)(G||(G=H||(H=(0,I.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),ne=(0,R.F4)(O||(O=K||(K=(0,I.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),te=(0,V.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["color".concat((0,W.Z)(t.color))]]}})((function(e){var n=e.ownerState,t=e.theme;return(0,D.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:t.transitions.create("transform")},"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,R.iv)(U||(U=$||($=(0,I.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),ee)})),re=(0,V.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,n){return n.svg}})({display:"block"}),ae=(0,V.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,n){var t=e.ownerState;return[n.circle,n["circle".concat((0,W.Z)(t.variant))],t.disableShrink&&n.circleDisableShrink]}})((function(e){var n=e.ownerState,t=e.theme;return(0,D.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var n=e.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,R.iv)(Y||(Y=Q||(Q=(0,I.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),ne)})),ie=o.forwardRef((function(e,n){var t=(0,T.Z)({props:e,name:"MuiCircularProgress"}),r=t.className,a=t.color,i=void 0===a?"primary":a,o=t.disableShrink,s=void 0!==o&&o,c=t.size,l=void 0===c?40:c,d=t.style,u=t.thickness,m=void 0===u?3.6:u,h=t.value,v=void 0===h?0:h,f=t.variant,p=void 0===f?"indeterminate":f,Z=(0,E.Z)(t,J),x=(0,D.Z)({},t,{color:i,disableShrink:s,size:l,thickness:m,value:v,variant:p}),b=function(e){var n=e.classes,t=e.variant,r=e.color,a=e.disableShrink,i={root:["root",t,"color".concat((0,W.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,W.Z)(t)),a&&"circleDisableShrink"]};return(0,L.Z)(i,B,n)}(x),j={},C={},w={};if("determinate"===p){var k=2*Math.PI*((X-m)/2);j.strokeDasharray=k.toFixed(3),w["aria-valuenow"]=Math.round(v),j.strokeDashoffset="".concat(((100-v)/100*k).toFixed(3),"px"),C.transform="rotate(-90deg)"}return(0,g.jsx)(te,(0,D.Z)({className:(0,F.Z)(b.root,r),style:(0,D.Z)({width:l,height:l},C,d),ownerState:x,ref:n,role:"progressbar"},w,Z,{children:(0,g.jsx)(re,{className:b.svg,ownerState:x,viewBox:"".concat(22," ").concat(22," ").concat(X," ").concat(X),children:(0,g.jsx)(ae,{className:b.circle,style:j,ownerState:x,cx:X,cy:X,r:(X-m)/2,fill:"none",strokeWidth:m})})}))})),oe="ContactsItem_item__teaw-",se="ContactsItem_text__llkOD",ce="ContactsItem_number__CBgn+",le="ContactsItem_wrapper__6gZUn",de=p.Z.getContactsStatus,ue=function(e){var n=e.id,t=e.name,r=e.number,a=(0,x.I0)(),s="deleting"===(0,x.v9)(de),c=(0,o.useState)(s),l=(0,i.Z)(c,2),d=l[0],u=l[1],m=function(){var e=(0,S.Z)(_().mark((function e(n){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(!0),a((0,Z.GK)(n)).unwrap().then((function(e){f.Am.success('Contact "'.concat(t,'" is deleting')),a((0,Z.yF)()).unwrap().then((function(){f.Am.success("Contacts updated")})).catch((function(){f.Am.error("Contacts didn't updated")}))})).catch((function(e){u(!1),console.log(e.message),f.Am.error('Contact "'.concat(t,'" is not deleting'))}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsxs)("li",{className:oe,children:[(0,g.jsxs)("div",{className:le,children:[(0,g.jsxs)("p",{className:se,children:[(0,g.jsx)(A.Z,{color:"primary",sx:{mr:"8px"}}),t]}),(0,g.jsxs)("p",{className:ce,children:[(0,g.jsx)(z.Z,{color:"secondary",sx:{mr:"8px"}}),r]})]}),(0,g.jsx)(N.Z,{"aria-label":"delete",size:"large",color:"error",onClick:function(){return m(n)},children:d?(0,g.jsx)(ie,{size:24,color:"error"}):(0,g.jsx)(M.Z,{fontSize:"inherit"})})]})},me=t(7006),he=t(3695),ve=t(3466),fe=t(9952),pe="ContactsList_list__mmE3Y",Ze=p.Z.getContactsStatus,xe=p.Z.getFilterValue,be=p.Z.getFilteredContacts,ge=function(){var e=(0,x.I0)();(0,o.useEffect)((function(){e((0,Z.yF)()).unwrap().then((function(){f.Am.success("Contacts updated")})).catch((function(){f.Am.error("Contacts didn't updated")}))}),[e]);var n=(0,x.v9)(be),t="loading"===(0,x.v9)(Ze),r=(0,x.v9)(xe);return(0,g.jsxs)(l.Z,{component:"div",maxWidth:"xs",children:[t&&(0,g.jsx)(he.Z,{}),(0,g.jsx)(v.Z,{title:"Find contacts. Please enter a name or number for search.",children:(0,g.jsx)(m.Z,{variant:"standard",margin:"normal",fullWidth:!0,id:"name",name:"name",value:r,label:"Enter a search name or number",autoComplete:"name",onChange:function(n){e((0,me.h)(n.target.value))},InputProps:{startAdornment:(0,g.jsx)(ve.Z,{position:"start",children:(0,g.jsx)(fe.Z,{})})}})}),(0,g.jsx)("ul",{className:pe,children:n.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,g.jsx)(ue,{name:t,number:r,id:n},n)}))})]})},je=function(){return(0,g.jsxs)("main",{children:[(0,g.jsx)(y,{}),(0,g.jsx)(ge,{})]})}},9952:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");n.Z=o},7247:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o},757:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5zm3.5 14c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"}),"ImportContacts");n.Z=o},3229:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"LocalPhone");n.Z=o},501:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");n.Z=o},3466:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(4942),a=t(3366),i=t(7462),o=t(2791),s=t(8182),c=t(4419),l=t(4036),d=t(890),u=t(3840),m=t(2930),h=t(6934),v=t(1217);function f(e){return(0,v.Z)("MuiInputAdornment",e)}var p,Z=(0,t(5878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=t(1402),b=t(184),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,l.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,r.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),C=o.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,h=t.className,v=t.component,Z=void 0===v?"div":v,C=t.disablePointerEvents,w=void 0!==C&&C,k=t.disableTypography,y=void 0!==k&&k,S=t.position,P=t.variant,_=(0,a.Z)(t,g),z=(0,m.Z)()||{},A=P;P&&z.variant,z&&!A&&(A=z.variant);var N=(0,i.Z)({},t,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:w,position:S,variant:A}),M=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,a=e.position,i=e.size,o=e.variant,s={root:["root",t&&"disablePointerEvents",a&&"position".concat((0,l.Z)(a)),o,r&&"hiddenLabel",i&&"size".concat((0,l.Z)(i))]};return(0,c.Z)(s,f,n)}(N);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(j,(0,i.Z)({as:Z,ownerState:N,className:(0,s.Z)(M.root,h),ref:n},_,{children:"string"!==typeof r||y?(0,b.jsxs)(o.Fragment,{children:["start"===S?p||(p=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:r})}))})}))}}]);
//# sourceMappingURL=contacts-page.6c347dac.chunk.js.map