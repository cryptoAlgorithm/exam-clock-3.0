(this["webpackJsonpreact-clock"]=this["webpackJsonpreact-clock"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(167),c=n(168),r=n(169),i=n(2);function o(e){var t=e.children,n=e.window,o=Object(a.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(i.jsx)(c.a,{in:o,children:Object(i.jsx)(r.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#header");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(30),c=n(0),r=n(97),i=n.n(r),o=n(109),s=n(11),l=n(229),j=n(245),d=n(246),b=n(256),u=n(2),h=Object(l.a)((function(e){return{fullW:{width:"100%"},txtFSp:{marginTop:e.spacing(1.5)+" !important"}}}));function f(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],l=n[1],f=Object(c.useState)([]),x=Object(s.a)(f,2),p=x[0],O=x[1],m=Object(c.useState)(null),g=Object(s.a)(m,2),v=g[0],w=g[1],k=r&&0===p.length,y=h();return Object(c.useEffect)((function(){var e=!0;if(k)return Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCHAiEzW77cEfanXlsRhFrHXoyz3jWr9EI").catch((function(e){console.log("Fetch Error :-S",e)}));case 2:if(200===(n=t.sent).status){t.next=6;break}return console.log("Looks like there was a problem. Status Code: "+n.status),t.abrupt("return");case 6:if(!e){t.next=12;break}return t.t0=O,t.next=10,n.json();case 10:t.t1=t.sent.items,(0,t.t0)(t.t1);case 12:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[k]),Object(u.jsx)(d.a,{open:r,className:y.fullW,onOpen:function(){l(!0)},onClose:function(){l(!1)},value:v,onChange:function(t,n){w(n);var a=p[Object.keys(p).find((function(e){return p[e]===n}))];a&&e.onURLChanged(a.files.regular.replace(/^http/m,"https"))},getOptionSelected:function(e,t){return e.family===t.family},getOptionLabel:function(e){return e.family},options:p,loading:k,renderInput:function(e){return Object(u.jsx)(j.a,Object(a.a)(Object(a.a)({},e),{},{variant:"filled",label:"Search for a font",placeholder:"",InputProps:Object(a.a)(Object(a.a)({},e.InputProps),{},{endAdornment:Object(u.jsxs)(u.Fragment,{children:[k?Object(u.jsx)(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var x=n(5),p=n(257),O=n(258),m=n(248),g=n(260),v=n(261),w=n(259),k=n(70),y=n.n(k),S=n(113),C=n.n(S),I=n(111),F=n.n(I),T=n(112),A=n.n(T),W=n(114),N=n.n(W),L=n(253),D=n(266),E=n(239),R=n(243),_=n(242),U=n(265),z=n(254),H=n(252),P=n(264),B=Object(l.a)((function(e){return{fullW:{width:"100%"},txtFSp:{marginTop:e.spacing(1.5)+" !important"},flexD:{display:"flex"},supBtn:{width:e.spacing(7),height:e.spacing(7),marginLeft:e.spacing(1)+" !important"}}}));function M(e){var t=B(),n=function(e,t){return(e?"Disable":"Enable")+t},c=function(e){return window.open(e)};return Object(u.jsxs)(p.a,{children:[Object(u.jsx)(O.a,{children:"Settings, a place where you change settings"}),Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(y.a,{}),children:Object(u.jsx)(w.a,{children:"Exam Information"})}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{children:"Add exam information to be displayed (e.g. Module code & title)"}),Object(u.jsx)(j.a,{label:"Exam Title",variant:"filled",className:Object(x.a)(t.fullW,t.txtFSp),value:e.examTitle,onChange:function(t){return e.examTitleChange(t.target.value)}}),Object(u.jsx)(j.a,{label:"Additional Information",multiline:!0,variant:"filled",className:Object(x.a)(t.fullW,t.txtFSp),maxRows:5,value:e.examDesc,onChange:function(t){return e.examDescChange(t.target.value)}}),Object(u.jsx)(w.a,{variant:"caption",children:""===e.examTitle.trim()||""===e.examDesc.trim()?"Both fields need to be filled in":"The information is currently displayed beside the clock"})]})]}),Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(y.a,{}),children:Object(u.jsx)(w.a,{children:"Timer"})}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{children:"Edit exam durations and timer settings"}),Object(u.jsxs)(E.b,{dateAdapter:_.a,children:[Object(u.jsx)(R.a,{mask:"__:__ __",label:"Start Time",value:e.stTime,onChange:function(t){e.setStTime(t)},renderInput:function(e){return Object(u.jsx)(j.a,Object(a.a)(Object(a.a)({variant:"filled"},e),{},{className:Object(x.a)(t.fullW,t.txtFSp)}))}}),Object(u.jsx)(R.a,{ampm:!1,openTo:"hours",views:["hours","minutes","seconds"],inputFormat:"HH:mm:ss",mask:"__:__:__",label:"Duration",value:e.duration,onChange:function(t){e.setDuration(t)},renderInput:function(e){return Object(u.jsx)(j.a,Object(a.a)(Object(a.a)({variant:"filled"},e),{},{margin:"normal",className:t.fullW}))}})]})]})]}),Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(y.a,{}),children:Object(u.jsx)(w.a,{children:"Appearance"})}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{children:"Change theme, UI font and more"}),Object(u.jsxs)(H.a,{value:e.appearance,onChange:function(t,n){return e.setAppearance(n)},"aria-label":"Appearance",className:t.txtFSp,children:[Object(u.jsx)(P.a,{value:"dark","aria-label":"Dark mode",children:Object(u.jsx)(U.a,{title:n(e.appearance.includes("dark")," dark mode"),children:Object(u.jsx)(F.a,{})})}),Object(u.jsx)(P.a,{value:"12hr","aria-label":"12 hour clock",children:Object(u.jsx)(U.a,{title:n(e.appearance.includes("12hr")," 12-hour time"),children:Object(u.jsx)(A.a,{})})})]}),Object(u.jsxs)("div",{className:Object(x.a)(t.flexD,t.txtFSp),children:[Object(u.jsx)(f,{onURLChanged:e.fontURLChange}),Object(u.jsx)(U.a,{title:"Reset to default font",children:Object(u.jsx)(z.a,{className:t.supBtn,onClick:function(){return e.fontURLChange(null)},children:Object(u.jsx)(C.a,{})})})]})]})]}),Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{expandIcon:Object(u.jsx)(y.a,{}),children:Object(u.jsx)(w.a,{children:"More Info"})}),Object(u.jsxs)(v.a,{children:[Object(u.jsxs)(w.a,{children:["An exam clock to be used in exams",Object(u.jsx)("br",{}),"A project by Vincent Kwok, ",(new Date).getFullYear()]}),Object(u.jsxs)(D.a,{variant:"outlined","aria-label":"Contact me",sx:{width:"100%",justifyContent:"center"},className:t.txtFSp,children:[Object(u.jsx)(L.a,{onClick:function(){return c("https://github.com/cryptoAlgorithm/exam-clock-3.0")},children:"GitHub"}),Object(u.jsx)(L.a,{onClick:function(){return c("/about")},children:"About"}),Object(u.jsx)(L.a,{onClick:function(){return c("/credits")},children:"Credits"})]}),Object(u.jsx)(L.a,{sx:{marginTop:1.5,width:"100%"},startIcon:Object(u.jsx)(N.a,{}),href:"mailto:hi@clockexe.cf",variant:"contained",children:"Contact Me"})]})]})]})}},141:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(50),i=n.n(r),o=(n(141),n(11)),s=(n(120),n(117));function l(e,t){var n=null!=t&&"null"!==t,a={shape:{borderRadius:7},palette:{mode:e,primary:{main:"#1976d2"},secondary:{main:"#9c27b0"}},typography:{fontFamily:(n?'"customFont",':"")+'"Roboto","Helvetica","Arial",sans-serif'},components:{MuiCssBaseline:{styleOverrides:(n?"\n            @font-face {\n                font-family: 'customFont';\n                font-style: normal;\n                font-display: swap;\n                font-weight: 400;\n                src: url('".concat(t,"') format('truetype');\n            }\n            "):"")+("dark"===e?"/* ====== Custom scrollbar ======= */\n::-webkit-scrollbar {\n    background-color: #fff;\n    width: 14px\n}\n\n/* Background of the scrollbar except button or resizer */\n::-webkit-scrollbar-track {\n    background-color: #121212;\n}\n\n::-webkit-scrollbar-corner {\n    background-color: #121212;\n}\n\nbody.light ::-webkit-scrollbar-track, body.light ::-webkit-scrollbar-corner {\n    background-color: rgb(223, 223, 223);\n}\n\n/* scrollbar itself */\n::-webkit-scrollbar-thumb {\n    background-color: rgb(107, 107, 107);\n    border-radius: 14px;\n    border: 3px solid #121212;\n    transition: all 500ms ease-out;\n}\n::-webkit-scrollbar-thumb:hover {\n    background-color: rgb(149, 149, 149);\n}\n\n.light *::-webkit-scrollbar-thumb {\n    background-color: rgb(150, 150, 150) !important;\n    border: 3px solid rgb(223, 223, 223) !important;\n}\n.light *::-webkit-scrollbar-thumb:hover {\n    background-color: rgb(101, 101, 101) !important;\n}\n/* ============ */":"")}}};return Object(s.a)(a)}var j=n(273),d=n(240),b=n(250),u=n(265),h=n(116),f=n(19),x=n(30),p=n(229),O=n(267),m=n(268),g=n(259),v=n(169),w=n(269),k=n(272),y=n(270),S=n(108),C=n.n(S),I=n(115),F=n.n(I),T=n(107),A=n.n(T),W=n(106),N=n(254),L=n(271),D=n(2),E=Object(p.a)((function(e){return{tpS:{marginTop:e.spacing(1)+"!important",display:"block"}}}));function R(e){var t=E();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(O.a,{children:Object(D.jsxs)(m.a,{children:[Object(D.jsx)(F.a,{sx:{mr:2}}),Object(D.jsx)(g.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Credits"}),Object(D.jsx)(N.a,{href:"/",children:Object(D.jsx)(A.a,{})})]})}),Object(D.jsx)(m.a,{id:"header"})," ",Object(D.jsx)(w.a,{maxWidth:"md",children:Object(D.jsxs)(v.a,{sx:{my:2},children:[Object(D.jsx)(g.a,{variant:"h2",children:"Credits"}),Object(D.jsx)(y.a,{}),Object(D.jsx)(g.a,{variant:"h6",className:t.tpS,children:"Work in progress - More detailed credits coming soon"}),Object(D.jsxs)(g.a,{variant:"p",className:t.tpS,children:["This project would not have been possible without the following amazing libraries/frameworks:",Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(L.a,{href:"https://material-ui.com",children:"Material UI"})}),Object(D.jsx)("li",{children:Object(D.jsx)(L.a,{href:"https://reactjs.org",children:"ReactJS"})})]})]})]})}),Object(D.jsx)(W.a,Object(x.a)(Object(x.a)({},e),{},{children:Object(D.jsx)(k.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(D.jsx)(C.a,{})})}))]})}var _=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):z(t,e)}))}}function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=n(253),P=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,293))})),B=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,292))})),M=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,295))}));function J(){var e,t,n=Object(a.useState)(localStorage.fontURL),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)({msg:"",open:!1,act:null}),x=Object(o.a)(s,2),p=x[0],O=x[1],m=Object(a.useState)(JSON.parse((e=localStorage.appearance,t="[]",e&&"null"!==e?e:t))),g=Object(o.a)(m,2),v=g[0],w=g[1];return U({onUpdate:function(e){var t=e.waiting;t&&O({msg:"A new update is available",open:!0,act:{msg:"Update now",label:"This action will restart the clock",handler:function(){t.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload()})),t.postMessage({type:"SKIP_WAITING"})}}})},onSuccess:function(){O({msg:"Ready for offline operation",open:!0,act:null})}}),Object(D.jsx)(h.a,{children:Object(D.jsxs)(j.a,{theme:l(v.includes("dark")?"dark":"light",r),children:[Object(D.jsx)(d.a,{}),Object(D.jsxs)(a.Suspense,{fallback:Object(D.jsx)("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:"Loading..."}),children:[Object(D.jsxs)(f.c,{children:[Object(D.jsx)(f.a,{exact:!0,path:["/","/index","/index.html",".","./index.html"],children:Object(D.jsx)(P,{a:v,sa:w,f:r,sf:i})}),Object(D.jsx)(f.a,{path:"/about",children:Object(D.jsx)(M,{})}),Object(D.jsx)(f.a,{path:"/credits",children:Object(D.jsx)(R,{})}),Object(D.jsx)(f.a,{path:"*",children:Object(D.jsx)(B,{})})]}),Object(D.jsx)(b.a,{open:p.open,autoHideDuration:3e3,onClose:function(){return O({msg:"",open:!1,act:null})},message:p.msg,action:p.act&&Object(D.jsx)(u.a,{title:p.act.label,children:Object(D.jsx)(H.a,{size:"small",color:"secondary",onClick:p.act.handler,children:p.act.msg})})})]})]})})}var G=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,291)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(156),n(157),n(158),n(159);i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(J,{})}),document.getElementById("root")),G()}},[[160,1,2]]]);
//# sourceMappingURL=main.8bf4edd6.chunk.js.map