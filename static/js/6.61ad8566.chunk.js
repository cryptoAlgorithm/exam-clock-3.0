(this["webpackJsonpreact-clock"]=this["webpackJsonpreact-clock"]||[]).push([[6],{293:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var c=a(11),n=a(3),i=a(0),s=a(5),r=a(229),o=a(255),l=a(259),d=a(2),j=Object(r.a)((function(e){var t;return{root:(t={width:"0",height:"0",minWidth:"calc(420px + ".concat(e.spacing(3),")"),minHeight:"calc(420px + ".concat(e.spacing(3),")"),paddingTop:"min(100%, min(calc(100vh - ".concat(e.spacing(2),"), calc(100vw - calc(").concat(e.spacing(2)," + 300px))))"),paddingRight:"min(100%, min(calc(100vh - ".concat(e.spacing(2),"), calc(100vw - calc(").concat(e.spacing(2)," + 300px))))")},Object(n.a)(t,e.breakpoints.down(780),{paddingTop:"min(100%, calc(100vw - ".concat(e.spacing(2),"))"),paddingRight:"min(100%, calc(100vw - ".concat(e.spacing(2),"))")}),Object(n.a)(t,"position","relative"),Object(n.a)(t,"margin","auto"),Object(n.a)(t,"borderRadius","100% !important"),t),face:{backgroundColor:"transparent",borderRadius:"50%",width:"calc(100% - ".concat(e.spacing(3),")"),height:"calc(100% - ".concat(e.spacing(3),")"),minWidth:420,minHeight:420,border:"1px solid ".concat(e.palette.grey[400]),position:"absolute",top:e.spacing(1.5),left:e.spacing(1.5),boxShadow:e.shadows[1]},hands:{position:"absolute",borderRadius:16,boxShadow:e.shadows[6],opacity:.9},iFace:{position:"absolute",left:"5%",top:"5%",height:"90%",width:"90%",borderRadius:"50%",border:"1px solid ".concat(e.palette.grey[700])},s:{backgroundColor:"#f44336",transformOrigin:"1px 90%",zIndex:4,width:2,height:"50%",top:"5%",left:"50%"},m:{backgroundColor:"#2196f3",zIndex:2,width:6,height:"calc(50% - 55px)",top:55,left:"calc(50% - 3px)",transformOrigin:"3px 100%"},h:{backgroundColor:"#4caf50",zIndex:1,width:10,height:"calc(50% - 100px)",top:100,left:"calc(50% - 5px)",transformOrigin:"5px 100%"},pin:{backgroundColor:"white",width:e.spacing(3),height:e.spacing(3),left:"calc(50% - ".concat(e.spacing(1.5),")"),top:"calc(50% - ".concat(e.spacing(1.5),")"),borderRadius:e.spacing(3),border:"".concat(e.spacing(.75)," solid ").concat(e.palette.primary.main),position:"absolute",zIndex:3,boxShadow:e.shadows[8]},degMark:{left:"50%",position:"absolute",transformOrigin:"1px 100%",height:"50%",zIndex:0},degLine:{height:"10%",width:1,display:"block",backgroundColor:e.palette.grey[700]},longDegLine:{height:"20%",backgroundColor:e.palette.grey[500]},digText:{position:"absolute",width:"100%",top:"calc(75% - ".concat(e.spacing(10),")"),textAlign:"center",fontFamily:"sevenSeg,Roboto,serif !important"},digTextBg:{opacity:.1}}}));function b(e){var t=j(),a=function(e){return e.toString().padStart(2,"0")},r=Object(i.useState)(0),b=Object(c.a)(r,2),u=b[0],p=b[1],g=Object(i.useState)(0),m=Object(c.a)(g,2),h=m[0],O=m[1],x=Object(i.useState)(0),f=Object(c.a)(x,2),v=f[0],S=f[1],w=Object(i.useState)("00"),k=Object(c.a)(w,2),y=k[0],T=k[1],C=Object(i.useState)("00"),N=Object(c.a)(C,2),M=N[0],R=N[1],D=Object(i.useState)(0),B=Object(c.a)(D,2),I=B[0],F=B[1],L=Object(i.useState)("am"),E=Object(c.a)(L,2),H=E[0],A=E[1];setInterval((function(){var e=new Date,t=e.getHours();t>12&&(t-=12),p(6*e.getSeconds()),O(6*e.getMinutes()+e.getSeconds()/10),S(30*t+e.getMinutes()/2),T(a(e.getSeconds())),R(a(e.getMinutes())),F(e.getHours()),A(e.getHours()>12?"pm":"am")}),200);for(var z=[],J=0;J<360;J+=6)z.push(J);return Object(d.jsx)(o.a,{elevation:12,className:t.root,children:Object(d.jsxs)("div",{className:t.face,children:[Object(d.jsx)("div",{className:t.iFace}),Object(d.jsx)("div",{className:Object(s.a)(t.hands,t.s),style:{transform:"rotate(".concat(u,"deg)")}}),Object(d.jsx)("div",{className:Object(s.a)(t.hands,t.m),style:{transform:"rotate(".concat(h,"deg)")}}),Object(d.jsx)("div",{className:Object(s.a)(t.hands,t.h),style:{transform:"rotate(".concat(v,"deg)")}}),Object(d.jsxs)(l.a,{className:Object(s.a)(t.digText,t.digTextBg),variant:"h2",children:["~~:~~:~~",e.ampm&&Object(d.jsx)("br",{}),e.ampm?"~~":""]}),Object(d.jsxs)(l.a,{className:t.digText,variant:"h2",children:[a(I>12&&e.ampm?I-12:I),":",M,y%2===0?":":" ",y,e.ampm&&Object(d.jsx)("br",{}),e.ampm?H:""]}),Object(d.jsx)("div",{className:t.pin}),z.map((function(e){return Object(d.jsx)("div",{className:t.degMark,style:{transform:"rotate(".concat(e,"deg)")},children:Object(d.jsx)("span",{className:Object(s.a)(t.degLine,Object(n.a)({},t.longDegLine,e%30===0))})},e.toString())}))]})})}var u=a(272),p=a(299),g=a(263),m=a(262),h=a(253),O=a(277),x=a(278),f=a(270),v=a(268),S=a(265),w=a(254),k=a(285),y=a.n(k),T=a(282),C=a.n(T),N=a(281),M=a.n(N),R=a(283),D=a.n(R),B=a(284),I=a.n(B),F=a(120);var L=a(296),E=a(280),H=a.n(E),A=a(279),z=a.n(A),J=a(241),P=a(297),U=a(298),G=a(294),W=a(250),q=Object(r.a)((function(e){return{nMg:{marginTop:e.spacing(1)+"!important"},dMg:{marginTop:e.spacing(2)+"!important"},fBd:{marginLeft:"-"+e.spacing(2),marginRight:"-"+e.spacing(2)},confB:{marginBottom:e.spacing(.5)+"!important",marginTop:e.spacing(.5)+"!important",backgroundColor:e.palette.error.main+"!important"}}}));function K(e){var t=q(),a=function(e){return e.toString().padStart(2,"0")},n=Object(i.useState)(e.h),r=Object(c.a)(n,2),o=r[0],j=r[1],b=Object(i.useState)(e.m),u=Object(c.a)(b,2),p=u[0],g=u[1],m=Object(i.useState)(e.s),O=Object(c.a)(m,2),x=O[0],f=O[1],v=Object(i.useState)(null),w=Object(c.a)(v,2),k=w[0],y=w[1],T=Object(i.useState)(100),C=Object(c.a)(T,2),N=C[0],M=C[1],R=Object(i.useState)(0),D=Object(c.a)(R,2),B=D[0],I=D[1],F=Object(i.useState)(0),E=Object(c.a)(F,2),A=E[0],K=E[1],Q=Object(i.useState)({msg:"",open:!1}),V=Object(c.a)(Q,2),X=V[0],Y=V[1],Z=Object(i.useState)(!1),$=Object(c.a)(Z,2),_=$[0],ee=$[1],te=1e3*e.s+6e4*e.m+36e5*e.h,ae=function(){y(null),M(100),ee(!1),Y({open:!0,msg:"Timer finished!"})};!function(e,t){for(var a=arguments.length,c=new Array(a>2?a-2:0),n=2;n<a;n++)c[n-2]=arguments[n];var s=Object(i.useRef)();Object(i.useEffect)((function(){s.current=e}),[e]),Object(i.useEffect)((function(){if(null!==t){var e=setInterval((function(){s.current.apply(s,c)}),t);return function(){return clearInterval(e)}}}),[c,t])}((function(){var e=B-new Date;if(e<0)ae();else{var t=Math.floor(e/1e3%60),a=Math.floor(e/6e4%60),c=Math.floor(e/36e5%24);j(c),g(a),f(t),M(Math.floor(e/A*100))}}),k);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(l.a,{variant:"h3",align:"center",children:[a(k?o:e.h),"h ",a(k?p:e.m),"m ",a(k?x:e.s),"s"]}),Object(d.jsx)(L.a,{variant:"determinate","aria-label":"Time remaining till timer ends",value:N,className:Object(s.a)(t.fBd,t.nMg)}),Object(d.jsx)(J.a,{onClickAway:function(){return ee(!1)},children:Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center"},className:t.dMg,children:[Object(d.jsx)(S.a,{PopperProps:{disablePortal:!0},onClose:function(){return ee(!1)},open:_,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{color:"inherit",children:"Are you sure you want to stop the timer?"}),Object(d.jsx)(h.a,{variant:"contained",onClick:ae,startIcon:Object(d.jsx)(z.a,{}),className:t.confB,children:"Stop timer"}),Object(d.jsx)(h.a,{onClick:function(){return ee(!1)},children:"Close"})]}),children:Object(d.jsx)(h.a,{variant:"contained",disabled:_||te<=0,startIcon:k?Object(d.jsx)(z.a,{}):Object(d.jsx)(H.a,{}),onClick:function(){k?ee(!0):(j(e.h),g(e.m),f(e.s),I(+new Date+te),K(te),y(200))},children:k?"Stop":"Start"})}),Object(d.jsx)(S.a,{title:"Auto-starts the timer when the start time specified in Settings is reached",children:Object(d.jsx)(P.a,{sx:{ml:2},children:Object(d.jsx)(U.a,{control:Object(d.jsx)(G.a,{defaultChecked:!0}),label:"Auto-start"})})})]})}),Object(d.jsx)(W.a,{open:X.open,autoHideDuration:5e3,onClose:function(){return Y({msg:"",open:!1})},message:X.msg})]})}var Q=Object(r.a)((function(e){var t;return{clock:(t={height:"100vh",padding:e.spacing(1),display:"grid",gridTemplateColumns:"auto 300px",gridTemplateRows:"auto"},Object(n.a)(t,e.breakpoints.down(780),{gridTemplateColumns:"auto",gridTemplateRows:"auto auto"}),Object(n.a)(t,"gridGap",e.spacing(1)),t),fab:{position:"fixed !important",bottom:e.spacing(1.5),right:e.spacing(1.5)},cardMg:{marginTop:0,marginBottom:e.spacing(1),marginLeft:"auto",marginRight:"auto",width:300},supText:{whiteSpace:"break-spaces",textAlign:"center"},divider:{marginBottom:e.spacing(1)+" !important"},controls:{display:"flex"}}}));function V(e){var t=Q(),a=new Date;a.setSeconds(0),a.setMinutes(0),a.setHours(0);var n=function(e,t){return e&&"null"!==e?e:t},s=Object(i.useState)(!1),r=Object(c.a)(s,2),o=r[0],j=r[1],k=Object(i.useState)(""),T=Object(c.a)(k,2),N=T[0],R=T[1],B=Object(i.useState)(""),L=Object(c.a)(B,2),E=L[0],H=L[1],A=Object(i.useState)(new Date),z=Object(c.a)(A,2),J=z[0],P=z[1],U=Object(i.useState)(a),G=Object(c.a)(U,2),W=G[0],q=G[1],V=Object(i.useState)(!document.fullscreenElement),X=Object(c.a)(V,2),Y=X[0],Z=X[1],$=Object(i.useState)(!0),_=Object(c.a)($,2),ee=_[0],te=_[1],ae=function(){return j(!1)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:t.clock,children:[Object(d.jsx)(b,{ampm:e.a.includes("12hr")}),Object(d.jsxs)("div",{children:[Object(d.jsx)(O.a,{elevation:24,className:t.cardMg,children:Object(d.jsxs)(x.a,{style:{paddingBottom:8},children:[Object(d.jsx)(l.a,{variant:"overline",children:"Controls"}),Object(d.jsxs)(v.a,{disableGutters:!0,children:[Object(d.jsx)(S.a,{title:document.fullscreenEnabled?"Fullscreen":"Fullscreen mode is not supported",children:Object(d.jsx)("span",{children:Object(d.jsx)(w.a,{"aria-label":"Enter/exit fullscreen",onClick:function(){document.fullscreenElement?document.exitFullscreen():document.body.requestFullscreen(),Z(!document.fullscreenElement)},disabled:!document.fullscreenEnabled,children:Y?Object(d.jsx)(M.a,{}):Object(d.jsx)(C.a,{})})})}),Object(d.jsx)(S.a,{title:(ee?"M":"Unm")+"ute sound effects",children:Object(d.jsx)("span",{children:Object(d.jsx)(w.a,{"aria-label":"Enable/disable sound effects",onClick:function(){return te(!ee)},children:ee?Object(d.jsx)(D.a,{}):Object(d.jsx)(I.a,{})})})})]})]})}),""!==E.trim()&&""!==N.trim()&&Object(d.jsx)(O.a,{elevation:24,className:t.cardMg,children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)(l.a,{variant:"overline",children:"Exam Information"}),Object(d.jsx)(l.a,{variant:"h2",className:t.supText,children:E.trim()}),Object(d.jsx)(f.a,{className:t.divider}),Object(d.jsx)(l.a,{variant:"h4",className:t.supText,children:N.trim()})]})}),Object(d.jsx)(O.a,{elevation:24,className:t.cardMg,children:Object(d.jsxs)(x.a,{style:{paddingBottom:16},children:[Object(d.jsx)(l.a,{variant:"overline",children:"Duration"}),Object(d.jsx)(l.a,{variant:"h4",className:t.supText,children:"1000 - 2000hrs"}),Object(d.jsx)(l.a,{variant:"h5",className:t.supText,children:"100 hours"})]})}),Object(d.jsx)(O.a,{elevation:24,className:t.cardMg,children:Object(d.jsxs)(x.a,{style:{paddingBottom:16},children:[Object(d.jsx)(l.a,{variant:"overline",children:"Timer"}),Object(d.jsx)(K,{h:n(W,a).getHours(),m:n(W,a).getMinutes(),s:n(W,a).getSeconds()})]})})]})]}),Object(d.jsx)(u.a,{color:"primary","aria-label":"add",className:t.fab,onClick:function(){return j(!0)},children:Object(d.jsx)(y.a,{})}),Object(d.jsxs)(m.a,{onClose:ae,"aria-labelledby":"simple-dialog-title",open:o,children:[Object(d.jsx)(p.a,{id:"simple-dialog-title",children:"Settings"}),Object(d.jsx)(F.a,{examDesc:N,examDescChange:R,examTitle:E,examTitleChange:H,stTime:J,setStTime:P,duration:W,setDuration:q,fontURLChange:function(t){localStorage.fontURL=t,e.sf(t)},appearance:e.a,setAppearance:function(t){localStorage.appearance=JSON.stringify(t),e.sa(t)}}),Object(d.jsx)(g.a,{children:Object(d.jsx)(h.a,{onClick:ae,children:"Done"})})]})]})}}}]);
//# sourceMappingURL=6.61ad8566.chunk.js.map