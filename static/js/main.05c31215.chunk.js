(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(n,e,t){n.exports=t(59)},38:function(n,e,t){},59:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(15),c=t.n(i),o=t(8),u=(t(38),t(9)),l=t(1),s=t(2),d=t(4),f=t(32),p=function(n){var e=n.height,t=n.width,r=n.color;return a.a.createElement("svg",{height:e,width:t,x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{enableBackground:"new 0 0 56.966 56.966",margin:"0px 6px 0px 0px"}},a.a.createElement("path",{fill:r,d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\r s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\r c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\r s-17-7.626-17-17S14.61,6,23.984,6z"}))};p.defaultProps={height:"14px",width:"14px",color:"#000000"};var m=p;function b(){var n=Object(l.a)(["\n  min-width: 400px;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n  font-size: 14px;\n  height: 23px;\n  @media (max-width: 400px) {\n    min-width: unset;\n    width: 100%;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(l.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  padding: 0px 5px 0px 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n  @media (max-width: 400px) {\n    margin: 0px 10px 18px 10px;\n  }\n"]);return v=function(){return n},n}var x=s.a.div(v()),h=s.a.input(b()),g=function(n){var e=n.value,t=Object(f.a)(n,["value"]);return a.a.createElement(x,null,a.a.createElement(m,{color:""===e?"#757575":"#000000"}),a.a.createElement(h,Object.assign({value:e},t)))};g.defaultProps={value:""};var E=g,j=t(30);function O(){var n=Object(l.a)(["\n  background-color: black;\n  width: 2px;\n  height: 100px;\n  margin: 2px;\n  border-radius: 10px;\n  display: inline-block;\n  animation: "," 2s ","s infinite\n    cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation-fill-mode: both;\n"]);return O=function(){return n},n}function y(){var n=Object(l.a)(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.05)}\n  100% {transform: scaley(1.0)}\n"]);return y=function(){return n},n}function w(){var n=Object(l.a)(["\n  height: 104px;\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 100px;\n"]);return k=function(){return n},n}var R=s.a.div(k()),S=s.a.div(w()),z=Object(s.b)(y()),T=s.a.div(O(),z,function(n){return n.start}),_=function(){var n=Object(r.useState)([.1]),e=Object(d.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)(.2),o=Object(d.a)(c,2),u=o[0],l=o[1];return Object(r.useEffect)(function(){var n=setTimeout(function(){u<=10&&(i([].concat(Object(j.a)(t),[u])),l(u+.1))},1e3);return function(){return clearTimeout(n)}},[u]),a.a.createElement(R,null,a.a.createElement(S,null,t.map(function(n){return a.a.createElement(T,{key:n,start:.1*n})})),a.a.createElement("p",null,"Loading ..."))};function C(){var n=Object(l.a)(["\n  margin: 0px;\n  font-size: 32px;\n  color: black;\n  text-decoration: ",";\n"]);return C=function(){return n},n}function D(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return D=function(){return n},n}function P(){var n=Object(l.a)(["\n  margin: 10px;\n"]);return P=function(){return n},n}function L(){var n=Object(l.a)(["\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return L=function(){return n},n}function G(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0px;\n  ","\n"]);return G=function(){return n},n}var M=s.a.div(G(),function(n){return n.hover?"cursor: pointer":""}),A=s.a.img(L(),function(n){return n.hover?"border-radius: 4px":""},.4,.4,.4,.4),B=s.a.div(P()),I=s.a.p(D()),q=Object(s.a)(o.b)(C(),function(n){return n.textDecoration}),U=function(n){var e=n.onClick,t=n.id,i=n.image,c=n.title,o=n.publisher,u=Object(r.useState)(!1),l=Object(d.a)(u,2),s=l[0],f=l[1];return a.a.createElement(M,{hover:s,onClick:e,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)}},a.a.createElement(A,{hover:s,src:i,alt:"artwork"}),a.a.createElement(B,null,a.a.createElement(q,{textDecoration:s?"underline":"none",to:"/podcast/".concat(t,"/")},c),a.a.createElement(I,{id:"publisher"},"".concat(o))))};U.defaultProps={onClick:function(){},id:null,image:null,title:null,publisher:null};var J=U,K=Object(r.createContext)(),Q=function(n){var e=n.reducer,t=n.initialState,i=n.children;return a.a.createElement(K.Provider,{value:Object(r.useReducer)(e,t)},i)},W=function(){return Object(r.useContext)(K)},Y=function(n){var e=n.key,t=n.url,r=n.dispatch,a=n.options;return r({type:"GET_REQUEST",meta:{key:e}}),function(n,e){return fetch(n,e).then(function(n){return n.json()})}(t,a).then(function(n){return r({type:"GET_PAYLOAD",payload:n,meta:{key:e}}),n}).catch(function(n){return r({type:"GET_ERROR",error:n,meta:{key:e}}),n})},F="https://listen-api.listennotes.com/api/v2",X={headers:{"X-ListenAPI-Key":"e9c25682454544cba44d336d2a9ce32e"}},$=function(n,e){return Y({key:"podcasts",url:"".concat(F,"/search?type=podcast&q=").concat(n),dispatch:e,options:X})};function H(){var n=Object(l.a)(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return H=function(){return n},n}var N=s.a.div(H()),V=function(n){var e=n.history,t=n.location,i=Object(r.useState)(!1),c=Object(d.a)(i,2),o=c[0],u=c[1],l=Object(r.useState)(""),s=Object(d.a)(l,2),f=s[0],p=s[1],m=W(),b=Object(d.a)(m,2),v=b[0].podcasts,x=b[1],h=v.loading,g=v.results;return Object(r.useEffect)(function(){if(!o&&t.search.length>0){var n=decodeURI(t.search.substring(1));$(n,x),p(n)}u(!0)}),a.a.createElement(N,null,a.a.createElement(E,{placeholder:"Search for podcasts",value:f,onChange:function(n){p(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&(e.push({search:"".concat(f)}),$(f,x))}}),h?a.a.createElement(_,null):a.a.createElement("div",null,g.map(function(n){var t=n.id,r=n.image,i=n.publisher_original,c=n.title_original;return a.a.createElement(J,{key:t,onClick:function(){return e.push("/podcast/".concat(t,"/"))},id:t,image:r,title:c,publisher:i})})))};function Z(){var n=Object(l.a)(["\n  font-size: 72px;\n  @media (max-width: 400px) {\n    font-size: 54px;\n  }\n"]);return Z=function(){return n},n}function nn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return en=function(){return n},n}var tn=s.a.div(en()),rn=s.a.div(nn()),an=s.a.h1(Z()),cn=function(n){return a.a.createElement(tn,null,a.a.createElement(rn,null,a.a.createElement(an,null,"raconteur")),a.a.createElement(V,n))},on=t(29),un=t.n(on);function ln(){var n=Object(l.a)(["\n  text-decoration: none;\n  color: black;\n  font-size: 36px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n  margin: 0px 40px 0px 0px;\n"]);return sn=function(){return n},n}function dn(){var n=Object(l.a)(["\n  list-style-type: none;\n  display: flex;\n  padding: 0px;\n  margin-top: 10px;\n"]);return dn=function(){return n},n}function fn(){var n=Object(l.a)([""]);return fn=function(){return n},n}var pn=s.a.div(fn()),mn=s.a.ul(dn()),bn=s.a.li(sn()),vn=Object(s.a)(o.b)(ln()),xn=function(){return a.a.createElement(pn,null,a.a.createElement(mn,null,a.a.createElement(bn,null,a.a.createElement(vn,{to:"/"},"raconteur"))))};function hn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return hn=function(){return n},n}function gn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return gn=function(){return n},n}function En(){var n=Object(l.a)(["\n  margin: 20px;\n"]);return En=function(){return n},n}function jn(){var n=Object(l.a)(["\n  height: 150px;\n  width: 150px;\n  border-radius: 150px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return jn=function(){return n},n}function On(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return On=function(){return n},n}var yn=s.a.div(On()),wn=s.a.img(jn(),function(n){return n.hover?"border-radius: 1px":""},.4,.4,.4,.4),kn=s.a.div(En()),Rn=s.a.h1(gn()),Sn=s.a.p(hn()),zn=function(n){var e=n.image,t=n.title,i=n.publisher,c=Object(r.useState)(!1),o=Object(d.a)(c,2),u=o[0],l=o[1];return a.a.createElement(yn,{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},a.a.createElement(wn,{hover:u,src:e,alt:"artwork"}),a.a.createElement(kn,null,a.a.createElement(Rn,null,t),a.a.createElement(Sn,{id:"publisher"},"".concat(i))))};zn.defaultProps={image:null,title:null,publisher:null};var Tn=zn;function _n(){var n=Object(l.a)(["\n  &:focus {\n    outline: none;\n  }\n"]);return _n=function(){return n},n}function Cn(){var n=Object(l.a)(["\n  font-size: 14px;\n  font-style: italic;\n"]);return Cn=function(){return n},n}function Dn(){var n=Object(l.a)(["\n  border-bottom: 3px solid black;\n  padding: 5px 0px;\n"]);return Dn=function(){return n},n}function Pn(){var n=Object(l.a)(["\n  margin: 0px 40px;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return Pn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  display: flex;\n"]);return Ln=function(){return n},n}var Gn=s.a.div(Ln()),Mn=s.a.div(Pn()),An=s.a.h2(Dn()),Bn=s.a.p(Cn()),In=s.a.audio(_n()),qn=function(n){var e=n.match,t=Object(r.useState)(!1),i=Object(d.a)(t,2),c=i[0],o=i[1],u=e.params.id,l=W(),s=Object(d.a)(l,2),f=s[0],p=s[1],m=f.podcast,b=m.description,v=m.episodes,x=m.image,h=m.loading,g=m.publisher,E=m.title;return Object(r.useEffect)(function(){c||function(n,e){Y({key:"podcast",url:"".concat(F,"/podcasts/").concat(n),dispatch:e,options:X})}(u,p),o(!0)}),h?a.a.createElement(_,null):a.a.createElement(Gn,null,a.a.createElement(Mn,null,a.a.createElement(xn,null),a.a.createElement(Tn,{image:x,title:E,publisher:g}),a.a.createElement("p",null,b),a.a.createElement(An,null,"Episodes"),a.a.createElement("div",null,v&&v.map(function(n){return a.a.createElement("div",{key:n.id},a.a.createElement("h3",null,n.title),a.a.createElement(In,{controls:!0,src:n.audio,preload:"none"}),n.title!==n.description?a.a.createElement("p",null,un()(n.description)):null,a.a.createElement(Bn,null,"Released: ".concat((e=n.pub_date_ms,new Intl.DateTimeFormat("default",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e))))));var e}))))},Un=t(12),Jn=t(10),Kn={feed:{loading:!1,error:null,stage:""},podcasts:{loading:!1,results:[],error:null,stage:""},podcast:{loading:!1,error:null,stage:""}},Qn=function(n,e){switch(e.type){case"GET_REQUEST":var t=e.meta.key;if(t){var r=n[t];if(r)return Object(Jn.a)({},n,Object(Un.a)({},t,Object(Jn.a)({},r,{loading:!0,stage:"Requesting data"})))}return n;case"GET_PAYLOAD":var a=e.meta.key;if(a){var i=n[a];if(i)return Object(Jn.a)({},n,Object(Un.a)({},a,Object(Jn.a)({},i,e.payload,{loading:!1,stage:"Data fetched"})))}return n;case"GET_ERROR":var c=e.meta.key,o=n[c];return Object(Jn.a)({},n,Object(Un.a)({},c,Object(Jn.a)({},o,e.error,{loading:!1,stage:"Request failed"})));default:return n}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(o.a,{basename:"/raconteur"},a.a.createElement(function(){return a.a.createElement(Q,{initialState:Kn,reducer:Qn},a.a.createElement("div",null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:cn}),a.a.createElement(u.a,{path:"/podcast/:id/",component:qn}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.05c31215.chunk.js.map