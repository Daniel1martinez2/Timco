(this.webpackJsonptimco=this.webpackJsonptimco||[]).push([[0],{106:function(e,t,n){e.exports={app:"App_app__1IksY"}},109:function(e,t,n){e.exports={container:"ModalNeighbor_container__iwMv1"}},110:function(e,t,n){e.exports={container:"NeighborList_container__20PH6"}},128:function(e,t,n){},145:function(e,t){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(18),c=n.n(r),i=(n(128),n(15)),u=n(36),o=n.n(u),s=n(75),l=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split(/\r?\n/).map((function(e){return e.split(",")})),a=n[0],n.splice(0,1),r=n.map((function(e){var t={};return a.forEach((function(n,a){return t[n]=e[a]})),t})),e.abrupt("return",{parsedData:r,headers:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function d(){return(d=Object(s.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"content-type":"text/csv;charset=UTF-8"}}).catch((function(){}));case 2:return n=e.sent,e.next=5,n.text();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=n(106),j=n.n(f),b=n(7),p=n(37),h=n(218),v=n(209),m=n(211),O=n(220),x=n(210),g=n(195),y=n(194),k=n(96),M=n.n(k),w=n(2),A=function(e){var t=e.setShowModal,n=e.children,r=document.getElementById("modal-root"),i=document.getElementById("backdrop-root");return Object(w.jsxs)(a.Fragment,{children:[c.a.createPortal(Object(w.jsx)("div",{onClick:function(){return t(!1)},className:M.a["modal-wrapper"]}),i),c.a.createPortal(Object(w.jsx)("div",{className:M.a.container,children:n}),r)]})},N=n(10),_=n(108),C=n(33);C.c.register.apply(C.c,Object(N.a)(C.j));var F=function(e){var t=e.labels,n=e.data;return Object(w.jsx)(_.a,{data:{labels:t,datasets:[{data:n,backgroundColor:"#009688",borderWidth:1}]},height:400,width:600,options:{indexAxis:"y",responsive:!0,color:"white",plugins:{legend:{display:!1}},scales:{xAxes:{ticks:{color:"#7F828F",font:{family:"lato"}},grid:{color:"#434450"}},yAxes:{grid:{color:"#434450"},ticks:{color:"#7F828F",font:{family:"lato"}}}}}})},I=n(109),S=n.n(I),E=function(e){var t=e.name,n=e.data,a=Object.keys(n).slice(1),r=function(e){var t=[];for(var n in e)t.push(parseInt(e[n]));return t}(n).slice(1);return Object(w.jsxs)("div",{className:S.a.container,children:[Object(w.jsx)("h1",{children:t}),Object(w.jsx)(F,{labels:a,data:r})]})},D=Object(y.a)(v.a)({h3:{color:"#A6A6A6"},color:"#122930"}),L=function(e){var t=e.name,n=e.value,r=e.data,c=Object(a.useState)(!1),u=Object(i.a)(c,2),o=u[0],s=u[1];return Object(w.jsxs)(a.Fragment,{children:[o&&Object(w.jsx)(A,{setShowModal:s,children:Object(w.jsx)(E,{data:r,name:t})}),Object(w.jsx)(D,{secondaryAction:Object(w.jsxs)("h3",{children:[n.toFixed(1),"%"]}),disablePadding:!0,children:Object(w.jsxs)(g.a,{onClick:function(){return s(!0)},children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{alt:"Avatar n\xb0",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dmrkNiYJX4oH586rKzZebgHaHa%26pid%3DApi&f=1"})}),Object(w.jsx)(m.a,{primary:Object(w.jsx)("h2",{children:t}),secondary:Object(w.jsx)("span",{children:"Number: 23132423"})})]})})]})},B=n(110),P=n.n(B),H=function(e,t,n){return e.find((function(e){return e[n]===t}))},J=function(e){var t=e.NeighborArray,n=e.data,a=e.header;return Object(w.jsx)("div",{className:P.a.container,children:Object(w.jsx)(h.a,{dense:!0,sx:{width:"100%",bgcolor:"transparent",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"1em"},children:t.map((function(e,t){return Object(w.jsx)(L,{data:H(n,e.name,a),name:e.name,value:e.tie},t)}))})})},V=n(199),W=n(213),z=function(e){var t=e.title,n=e.value,a=e.onChange;return Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:t}),Object(w.jsx)(W.a,{value:n,"aria-label":"Default",valueLabelDisplay:"auto",onChange:a})]})},Y=function(e){var t=e.sliders,n=e.getValue;return Object(w.jsx)(V.a,{children:t.map((function(e){return Object(w.jsx)(z,{title:e.title,value:e.value,onChange:function(a,r){return function(e,a){var r=Object(N.a)(t),c=r.findIndex((function(t){return t.id===e}));-1!==c&&(r[c].value=a,n(r))}(e.id,r)}},e.id)}))})},Z=n(214),q=function(e){var t=e.type,n=e.getValue,a=e.value,r=e.title;return Object(w.jsx)(Z.a,{color:"secondary",fullWidth:!0,id:"outlined-basic",label:r,variant:"outlined",value:a,onChange:function(e){"number"===t?(/^\d+$/.test(e.target.value)||""===e.target.value)&&n(e.target.value):n(e.target.value)},size:"small"})},K=n(203),R=n(202),T=n(216),U=n(208),X=n(217),$=function(e){var t=Object.values(e).splice(1).reduce((function(e,t){return e+Math.pow(t,2)}),0);return Math.sqrt(t)},G=function(e){return Object.values(e).splice(1)},Q=function(e,t){var n=function(e,t){var n=0;return Object.keys(e[0]).filter((function(e){return e!==t})).forEach((function(t,a){n+=e[0][t]*e[1][t]})),n}(e,t),a=$(e[0]),r=$(e[1]);return function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1],r=G(n),c=G(a),u=Math.max.apply(Math,Object(N.a)(r)),o=Math.max.apply(Math,Object(N.a)(c)),s=r.map((function(e){return e/u})),l=c.map((function(e){return e/o})),d=0;return s.forEach((function(e,t){d=+(e-l[t])})),0===d}(e)?100*function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1],r=$(n),c=$(a);return r===c?1:Math.abs(r-c)/Math.max(r,c)}(e):100*function(e){var t=e.dot,n=e.magnitudeA,a=e.magnitudeB;return 0===n||0===a?0:t/(n*a)}({dot:n,magnitudeA:a,magnitudeB:r})},ee=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=[],i=e.filter((function(e){return e[n[0]]!==t[n[0]]}));return i.forEach((function(e){var a=Q([t,e],n[0]),i=r?e[n[1]]:e[n[0]];c.push({tie:a,name:i})})),c.sort((function(e,t){return t.tie-e.tie})).splice(0,a)},te=n(4),ne=n(87),ae=n(207),re=function(e,t,n,a){var r={};switch(e){case"Naive average":default:return t;case"Least misery":for(var c in t)r[c]=t[c]<5?0:t[c];return r;case"Maximum pleasure":for(var i in t)r[i]=t[i]>=8?t[i]:0;return r;case"Media satisfaction":console.log(n,"LOL");var u=function(e,t){var n=e.map((function(e){return e[t],Object(te.a)(e,[t].map(ne.a))})).reduce((function(e,t){for(var n in t)e[n]||(e[n]=[]),e[n].push(parseInt(t[n]));return e}),{});for(var a in n)n[a]=Object(ae.a)(n[a]);return n}(n,a);for(var o in u)u[o]>1?r[o]=0:r[o]=t[o];return r}},ce=[10,9,4,10,7,5,3,8,2,2,8,10,7,4,6,8,8,10,10,10,10,9,8,0,7,4,0,0,0,0,0,6,0],ie=[9,10,9,5,5,5,2,7,3,3,9,8,10,7,10,9,9,10,0,0,0,5,0,0,4,4,10,10,10,10,10,5,9],ue=[10,7,8,10,4,10,3,10,5,7,4,4,5,8,3,10,5,8,0,4,5,3,10,1,10,7,0,0,0,0,0,10,0],oe=function(e){var t=e.data,n=e.headers,r=Object(a.useState)(""),c=Object(i.a)(r,2),u=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),d=l[0],f=l[1],j=Object(a.useState)([]),h=Object(i.a)(j,2),v=h[0],m=h[1],O=Object(a.useState)(function(e,t){return e.filter((function(e){return e!==t})).map((function(e){return{id:e.split(" ").join(""),value:100,title:e}}))}(n,n[0])),x=Object(i.a)(O,2),g=x[0],y=x[1],k=Object(a.useState)(),M=Object(i.a)(k,2),A=M[0],N=M[1],_=function(e){var t=[];switch(e){case"marketing":t=ce;break;case"design":t=ie;break;case"mix":t=ue}y((function(e){return e.map((function(e,n){return Object(p.a)(Object(p.a)({},e),{},{value:10*t[n]})}))}))};return Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)(q,{type:"number",getValue:function(e){return f(e)},value:d,title:"N\xfamero de personas"}),Object(w.jsx)(K.a,{variant:"outlined",type:"button",color:"primary",onClick:function(){return _("marketing")},children:"Marketing"}),Object(w.jsx)(K.a,{variant:"outlined",type:"button",color:"primary",onClick:function(){return _("design")},children:"Design"}),Object(w.jsx)(K.a,{variant:"outlined",type:"button",color:"primary",onClick:function(){return _("mix")},children:"Mix"}),Object(w.jsx)(Y,{sliders:g,getValue:function(e){return y(e)}}),Object(w.jsxs)(R.a,{fullWidth:!0,children:[Object(w.jsx)(T.a,{id:"demo-simple-select-label",children:"Aggregation model"}),Object(w.jsxs)(U.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:u,label:"Age",onChange:function(e){"string"===typeof e.target.value&&o(e.target.value)},children:[Object(w.jsx)(X.a,{value:"Naive average",children:"Naive average"}),Object(w.jsx)(X.a,{value:"Least misery",children:"Least misery"}),Object(w.jsx)(X.a,{value:"Maximum pleasure",children:"Maximum pleasure"}),Object(w.jsx)(X.a,{value:"Media satisfaction",children:"Media satisfaction"})]})]}),Object(w.jsx)(K.a,{variant:"outlined",type:"button",color:"secondary",onClick:function(){if(d){var e,a,r,c=function(e,t){var n={};return e.forEach((function(e){"number"===typeof e.value&&(n[e.title]=e.value/10)})),Object(p.a)(Object(b.a)({},t,"proto"),n)}(g,n[0]),i=ee(t,c,[n[0]],parseInt(d)),o=(e=t,a=g.map((function(e){return"number"===typeof e.value?e.value/100:0})),r=n[0],e.map((function(e){var t={},n=0;for(var c in e)c!==r?(t[c]=(parseInt(e[c])*a[n]).toString(),n++):t[c]=e[c];return t}))),s=function(e,t){var n=e.map((function(e){return e[t],Object(te.a)(e,[t].map(ne.a))})),a=n.length,r={};for(var c in n.forEach((function(e,t){if(0===t){var c=function(e){r[e]=n.reduce((function(t,n){return t+n[e]/a}),0)};for(var i in e)c(i)}})),r)r[c]=Math.round(r[c]);return r}(o.filter((function(e){return i.map((function(e){return e.name})).includes(e[n[0]])})),n[0]),l=re(u,s,o,n[0]),f=Object(p.a)(Object(b.a)({},n[0],"Aggregation person"),l),j=ee(t,f,[n[0]],parseInt(d));N(j),m(function(e,t,n){var a=t.map((function(e){return e.name}));return e.filter((function(e){return a.includes(e[n])}))}(t,j,n[0]))}},children:"Continuar"}),A&&Object(w.jsx)(J,{header:n[0],data:v,NeighborArray:A})]})},se=n(111),le=n(206),de=n(204),fe=n(205),je=n.p+"static/media/habilidades.079e96e9.csv",be=Object(se.a)({palette:{primary:{main:de.a[500]},secondary:{main:"#122930"},error:{main:fe.a[50]}}});var pe=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(e){return d.apply(this,arguments)})(je).then((function(e){return l(e)})).then((function(e){r(e)}))}),[]),Object(w.jsx)(le.a,{theme:be,children:Object(w.jsx)("div",{className:j.a.app,children:n&&Object(w.jsx)(oe,{headers:n.headers,data:n.parsedData})})})};c.a.render(Object(w.jsx)(pe,{}),document.getElementById("root"))},96:function(e,t,n){e.exports={"modal-wrapper":"ModalScreen_modal-wrapper__3ym3g",container:"ModalScreen_container__JOZcb"}}},[[146,1,2]]]);
//# sourceMappingURL=main.313711c9.chunk.js.map