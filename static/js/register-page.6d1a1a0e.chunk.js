"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[316],{9376:function(e,n,a){a.d(n,{Q:function(){return o}});var t=a(6373),r="LoaderButton_wrapper__WcgzK",i=a(184),o=function(){return(0,i.jsx)("div",{className:r,children:(0,i.jsx)(t.iT,{ariaLabel:"loading-indicator",height:24,width:24,strokeWidth:8,color:"white",secondaryColor:"white"})})}},6911:function(e,n,a){a.r(n),a.d(n,{default:function(){return q}});var t=a(5861),r=a(4942),i=a(1413),o=a(885),s=a(7757),l=a.n(s),d=a(2791),c=a(3044),u=a(6151),m=a(4708),p=a(4953),h=a(3466),Z=a(3400),v=a(3746),x=a(165),w=a(1889),f=a(4554),g=a(403),b=a(890),j=a(1614),P=a(7107),y=a(7012),z=a(3504),k=a(9774),C=a(6871),S=a(9434),E=a(6258),_=a(2286),A=a(9376),L=a(184),M=(0,P.Z)(),I=/^[A-z][A-z0-9-_-\s?]{1,23}$/,T=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,W=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;function N(){var e=(0,S.v9)(_.Z.getIsLoading),n=(0,C.s0)(),a=(0,S.I0)(),s=d.useState({name:"",email:"",password:"",showPassword:!1}),P=(0,o.Z)(s,2),N=P[0],q=P[1],R=d.useState({name:"",email:"",password:""}),$=(0,o.Z)(R,2),D=$[0],F=$[1],V=function(e,n,a){return n.match(a)?(q((0,i.Z)((0,i.Z)({},N),{},(0,r.Z)({},e,n))),F((0,i.Z)((0,i.Z)({},D),{},(0,r.Z)({},e,""))),!0):n?(q((0,i.Z)((0,i.Z)({},N),{},(0,r.Z)({},e,n))),F((0,i.Z)((0,i.Z)({},D),{},(0,r.Z)({},e,"wrong ".concat(e)))),!1):(q((0,i.Z)((0,i.Z)({},N),{},(0,r.Z)({},e,n))),F((0,i.Z)((0,i.Z)({},D),{},(0,r.Z)({},e,"".concat(e," is required")))),!1)},Q=function(e){var n=e.target,a=n.name,t=n.value;switch(a){case"name":V(a,t,I);break;case"email":V(a,t,T);break;case"password":V(a,t,W);break;default:return}},U=function(){var e=(0,t.Z)(l().mark((function e(t){var r,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData(t.currentTarget),i={name:r.get("name"),email:r.get("email"),password:r.get("password")},!(V("name",i.name,I)&&V("email",i.email,T)&&V("password",i.password,W))){e.next=13;break}return e.prev=4,e.next=7,a((0,E.a$)(i)).unwrap();case 7:n(k.P.contactsPage),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,L.jsx)(y.Z,{theme:M,children:(0,L.jsxs)(j.Z,{component:"main",maxWidth:"xs",children:[(0,L.jsx)(m.ZP,{}),(0,L.jsxs)(f.Z,{sx:{marginTop:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,L.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,L.jsx)(g.Z,{})}),(0,L.jsx)(b.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,L.jsxs)(f.Z,{component:"form",noValidate:!0,onSubmit:U,sx:{my:3},children:[(0,L.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,L.jsx)(w.ZP,{item:!0,xs:12,children:(0,L.jsx)(p.Z,{error:!!D.name,helperText:D.name,required:!0,fullWidth:!0,id:"name",name:"name",value:N.name,type:"text",label:"Your name",autoComplete:"name",autoFocus:!0,onChange:Q})}),(0,L.jsx)(w.ZP,{item:!0,xs:12,children:(0,L.jsx)(p.Z,{error:!!D.email,helperText:D.email,required:!0,fullWidth:!0,id:"email",name:"email",value:N.email,type:"email",label:"Email Address",autoComplete:"email",onChange:Q})}),(0,L.jsx)(w.ZP,{item:!0,xs:12,children:(0,L.jsx)(p.Z,{error:!!D.password,helperText:D.password?"Must be greater then 6 characters and contains letter and number":D.password,required:!0,fullWidth:!0,id:"password",name:"password",value:N.password,type:N.showPassword?"text":"password",label:"Password",autoComplete:"new-password",onChange:Q,InputProps:{endAdornment:(0,L.jsx)(h.Z,{position:"end",children:(0,L.jsx)(Z.Z,{"aria-label":"toggle password visibility",onClick:function(){q((0,i.Z)((0,i.Z)({},N),{},{showPassword:!N.showPassword}))},edge:"end",children:N.showPassword?(0,L.jsx)(x.Z,{}):(0,L.jsx)(v.Z,{})})})}})})]}),(0,L.jsx)(u.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:e?(0,L.jsx)(A.Q,{}):"Sign Up"}),(0,L.jsx)(w.ZP,{container:!0,justifyContent:"center",children:(0,L.jsx)(w.ZP,{item:!0,children:(0,L.jsx)(z.rU,{to:k.P.loginPage,children:"Already have an account? Sign in"})})})]})]})]})})}var q=function(){return(0,L.jsx)(N,{})}},3746:function(e,n,a){var t=a(5318);n.Z=void 0;var r=t(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=o},165:function(e,n,a){var t=a(5318);n.Z=void 0;var r=t(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=o},3466:function(e,n,a){a.d(n,{Z:function(){return j}});var t=a(4942),r=a(3366),i=a(7462),o=a(2791),s=a(8182),l=a(4419),d=a(4036),c=a(890),u=a(3840),m=a(2930),p=a(6934),h=a(1217);function Z(e){return(0,h.Z)("MuiInputAdornment",e)}var v,x=(0,a(5878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),w=a(1402),f=a(184),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[n.root,n["position".concat((0,d.Z)(a.position))],!0===a.disablePointerEvents&&n.disablePointerEvents,n[a.variant]]}})((function(e){var n=e.theme,a=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===a.variant&&(0,t.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===a.position&&{marginRight:8},"end"===a.position&&{marginLeft:8},!0===a.disablePointerEvents&&{pointerEvents:"none"})})),j=o.forwardRef((function(e,n){var a=(0,w.Z)({props:e,name:"MuiInputAdornment"}),t=a.children,p=a.className,h=a.component,x=void 0===h?"div":h,j=a.disablePointerEvents,P=void 0!==j&&j,y=a.disableTypography,z=void 0!==y&&y,k=a.position,C=a.variant,S=(0,r.Z)(a,g),E=(0,m.Z)()||{},_=C;C&&E.variant,E&&!_&&(_=E.variant);var A=(0,i.Z)({},a,{hiddenLabel:E.hiddenLabel,size:E.size,disablePointerEvents:P,position:k,variant:_}),L=function(e){var n=e.classes,a=e.disablePointerEvents,t=e.hiddenLabel,r=e.position,i=e.size,o=e.variant,s={root:["root",a&&"disablePointerEvents",r&&"position".concat((0,d.Z)(r)),o,t&&"hiddenLabel",i&&"size".concat((0,d.Z)(i))]};return(0,l.Z)(s,Z,n)}(A);return(0,f.jsx)(u.Z.Provider,{value:null,children:(0,f.jsx)(b,(0,i.Z)({as:x,ownerState:A,className:(0,s.Z)(L.root,p),ref:n},S,{children:"string"!==typeof t||z?(0,f.jsxs)(o.Fragment,{children:["start"===k?v||(v=(0,f.jsx)("span",{className:"notranslate",children:"\u200b"})):null,t]}):(0,f.jsx)(c.Z,{color:"text.secondary",children:t})}))})}))}}]);
//# sourceMappingURL=register-page.6d1a1a0e.chunk.js.map