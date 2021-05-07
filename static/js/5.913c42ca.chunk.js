(this["webpackJsonpreact-clock"]=this["webpackJsonpreact-clock"]||[]).push([[5],{273:function(e,t,a){"use strict";var o=a(1),r=a(4),i=a(0),c=(a(9),a(5)),n=a(229),s=a(6),d=a(8),l=a(250),u=a(162),b=a(230);function j(e){return Object(u.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var m=a(2),f=Object(s.a)(l.a,{},{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),p=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCard"}),i=a.className,s=a.raised,l=void 0!==s&&s,u=Object(r.a)(a,["className","raised"]),b=Object(o.a)({},a,{raised:l}),p=function(e){var t=e.classes;return Object(n.a)({root:["root"]},j,t)}(b);return Object(m.jsx)(f,Object(o.a)({className:Object(c.a)(p.root,i),elevation:l?8:void 0,ref:t,styleProps:b},u))}));t.a=p},274:function(e,t,a){"use strict";var o=a(1),r=a(4),i=a(0),c=(a(9),a(5)),n=a(229),s=a(6),d=a(8),l=a(162),u=a(230);function b(e){return Object(l.a)("MuiCardContent",e)}Object(u.a)("MuiCardContent",["root"]);var j=a(2),m=Object(s.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardContent"}),i=a.className,s=a.component,l=void 0===s?"div":s,u=Object(r.a)(a,["className","component"]),f=Object(o.a)({},a,{component:l}),p=function(e){var t=e.classes;return Object(n.a)({root:["root"]},b,t)}(f);return Object(j.jsx)(m,Object(o.a)({as:l,className:Object(c.a)(p.root,i),styleProps:f,ref:t},u))}));t.a=f},291:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var o=a(273),r=a(274),i=a(4),c=a(1),n=a(0),s=(a(9),a(5)),d=a(229),l=a(8),u=a(6),b=a(162),j=a(230);function m(e){return Object(b.a)("MuiCardMedia",e)}Object(j.a)("MuiCardMedia",["root","media","img"]);var f=a(2),p=Object(u.a)("div",{},{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps,o=a.isMediaComponent,r=a.isImageComponent;return Object(c.a)({},t.root,o&&t.media,r&&t.img)}})((function(e){var t=e.styleProps;return Object(c.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),O=["video","audio","picture","iframe","img"],v=["picture","img"],h=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardMedia"}),o=a.children,r=a.className,n=a.component,u=void 0===n?"div":n,b=a.image,j=a.src,h=a.style,g=Object(i.a)(a,["children","className","component","image","src","style"]),C=-1!==O.indexOf(u),M=!C&&b?Object(c.a)({backgroundImage:'url("'.concat(b,'")')},h):h,x=Object(c.a)({},a,{component:u,isMediaComponent:C,isImageComponent:-1!==v.indexOf(u)}),y=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(d.a)(a,m,t)}(x);return Object(f.jsx)(p,Object(c.a)({className:Object(s.a)(y.root,r),as:u,ref:t,style:M,styleProps:x,src:C?b||j:void 0},g,{children:o}))})),g=a(254),C=a(3);function M(e){return Object(b.a)("MuiCardActionArea",e)}var x=Object(j.a)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),y=a(244),N=Object(u.a)(y.a,{},{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},Object(C.a)(t,"&:hover .".concat(x.focusHighlight),{opacity:a.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),Object(C.a)(t,"&.".concat(x.focusVisible," .").concat(x.focusHighlight),{opacity:a.palette.action.focusOpacity}),t})),R=Object(u.a)("span",{},{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),k=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardActionArea"}),o=a.children,r=a.className,n=a.focusVisibleClassName,u=Object(i.a)(a,["children","className","focusVisibleClassName"]),b=Object(c.a)({},a),j=function(e){var t=e.classes;return Object(d.a)({root:["root"],focusHighlight:["focusHighlight"]},M,t)}(b);return Object(f.jsxs)(N,Object(c.a)({className:Object(s.a)(j.root,r),focusVisibleClassName:Object(s.a)(n,j.focusVisible),ref:t,styleProps:b},u,{children:[o,Object(f.jsx)(R,{className:j.focusHighlight,styleProps:b})]}))}));function A(e){return Object(b.a)("MuiCardActions",e)}Object(j.a)("MuiCardActions",["root","spacing"]);var w=Object(u.a)("div",{},{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(c.a)({},t.root,!a.disableSpacing&&t.spacing)}})((function(e){var t=e.styleProps;return Object(c.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),P=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardActions"}),o=a.disableSpacing,r=void 0!==o&&o,n=a.className,u=Object(i.a)(a,["disableSpacing","className"]),b=Object(c.a)({},a,{disableSpacing:r}),j=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(d.a)(a,A,t)}(b);return Object(f.jsx)(w,Object(c.a)({className:Object(s.a)(j.root,n),styleProps:b,ref:t},u))})),H=a(257),I=a(227),S=a.p+"static/media/oops.1103803d.webp",V=a.p+"static/media/oopsBg.8849f7ea.webp",z=Object(I.a)((function(e){return{root:{backgroundImage:"url(".concat(V,")"),backgroundSize:"cover",backgroundPosition:"center"},container:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",backdropFilter:"blur(8px)"}}}));function W(){var e=z();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)("div",{className:e.container,children:Object(f.jsxs)(o.a,{sx:{maxWidth:500,margin:"1rem"},elevation:12,children:[Object(f.jsxs)(k,{href:"/",children:[Object(f.jsx)(h,{sx:{aspectRatio:"16/9"},image:S,title:"Long road"}),Object(f.jsxs)(r.a,{children:[Object(f.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"div",children:"You seem lost"}),Object(f.jsx)(g.a,{variant:"body2",color:"text.secondary",children:"Oops... You seem to have fallen off the sides of the flat World Wide Web! Click me to go back home!"})]})]}),Object(f.jsxs)(P,{children:[Object(f.jsx)(H.a,{size:"small",href:"/",children:"Home"}),Object(f.jsx)(H.a,{size:"small",href:"/about",children:"About"}),Object(f.jsx)(H.a,{size:"small",href:"/credits",children:"Credits"})]})]})})})}}}]);
//# sourceMappingURL=5.913c42ca.chunk.js.map