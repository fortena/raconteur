(window.webpackJsonpraconteur=window.webpackJsonpraconteur||[]).push([[0],{216:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(81),c=t.n(i),o=t(15),l=(t(97),t(11)),u=t(2),s=t(3),p=t(4),d=t(91),f=function(e){var n=e.height,t=e.width,a=e.color;return r.a.createElement("svg",{height:n,width:t,x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{enableBackground:"new 0 0 56.966 56.966",margin:"0px 6px 0px 0px"}},r.a.createElement("path",{fill:a,d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\r s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\r c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\r s-17-7.626-17-17S14.61,6,23.984,6z"}))};f.defaultProps={height:"14px",width:"14px",color:"#000000"};var m=f;function b(){var e=Object(u.a)(["\n  min-width: 400px;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n  font-size: 14px;\n  height: 23px;\n  @media (max-width: 400px) {\n    min-width: unset;\n    width: 100%;\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(u.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  padding: 0px 5px 0px 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n"]);return g=function(){return e},e}var h=s.a.div(g()),v=s.a.input(b()),x=function(e){var n=e.value,t=Object(d.a)(e,["value"]);return r.a.createElement(h,null,r.a.createElement(m,{color:""===n?"#757575":"#000000"}),r.a.createElement(v,Object.assign({value:n},t)))};x.defaultProps={value:""};var y=x,j=t(10);function O(){var e=Object(u.a)(["\n  background-color: black;\n  width: 2px;\n  height: 100px;\n  margin: 2px;\n  border-radius: 10px;\n  display: inline-block;\n  animation: "," 2s ","s infinite\n    cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation-fill-mode: both;\n"]);return O=function(){return e},e}function E(){var e=Object(u.a)(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.05)}\n  100% {transform: scaley(1.0)}\n"]);return E=function(){return e},e}function w(){var e=Object(u.a)(["\n  height: 104px;\n"]);return w=function(){return e},e}function k(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 100px;\n"]);return k=function(){return e},e}var _=s.a.div(k()),R=s.a.div(w()),S=Object(s.b)(E()),M=s.a.div(O(),S,function(e){return e.start}),P=function(){var e=Object(a.useState)([.1]),n=Object(p.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(.2),o=Object(p.a)(c,2),l=o[0],u=o[1];return Object(a.useEffect)(function(){var e=setTimeout(function(){l<=10&&(i([].concat(Object(j.a)(t),[l])),u(l+.1))},1e3);return function(){return clearTimeout(e)}},[l]),r.a.createElement(_,null,r.a.createElement(R,null,t.map(function(e){return r.a.createElement(M,{key:e,start:.1*e})})),r.a.createElement("p",null,"Loading ..."))};function C(){var e=Object(u.a)(["\n  margin: 0px;\n  font-size: 32px;\n  color: black;\n  text-decoration: ",";\n  @media (max-width: 400px) {\n    font-size: 32px;\n  }\n"]);return C=function(){return e},e}function D(){var e=Object(u.a)(["\n  margin: 0px;\n"]);return D=function(){return e},e}function z(){var e=Object(u.a)(["\n  margin: 10px;\n"]);return z=function(){return e},e}function T(){var e=Object(u.a)(["\n  height: 100px;\n  width: 100px;\n  min-width: 100px;\n  border-radius: 100px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return T=function(){return e},e}function L(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0px;\n  ","\n"]);return L=function(){return e},e}var A=s.a.div(L(),function(e){return e.hover?"cursor: pointer":""}),G=s.a.img(T(),function(e){return e.hover?"border-radius: 4px":""},.4,.4,.4,.4),U=s.a.div(z()),B=s.a.p(D()),Y=Object(s.a)(o.b)(C(),function(e){return e.textDecoration}),H=function(e){var n=e.onClick,t=e.id,i=e.image,c=e.title,o=e.publisher,l=Object(a.useState)(!1),u=Object(p.a)(l,2),s=u[0],d=u[1];return r.a.createElement(A,{hover:s,onClick:n,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},r.a.createElement(G,{hover:s,src:i,alt:"artwork"}),r.a.createElement(U,null,r.a.createElement(Y,{textDecoration:s?"underline":"none",to:"/podcast/".concat(t,"/")},c),r.a.createElement(B,{id:"publisher"},"".concat(o))))};H.defaultProps={onClick:function(){},id:null,image:null,title:null,publisher:null};var I=H,J=Object(a.createContext)(),q=function(e){var n=e.reducer,t=e.initialState,i=e.children;return r.a.createElement(J.Provider,{value:Object(a.useReducer)(n,t)},i)},N=function(){return Object(a.useContext)(J)},Q=function(e,n){return fetch(e,n).then(function(e){return e.json()})},K=function(e){var n=e.key,t=e.url,a=e.dispatch,r=e.options;return a({type:"GET_REQUEST",meta:{key:n}}),Q(t,r).then(function(e){return a({type:"GET_PAYLOAD",payload:e,meta:{key:n}}),e}).catch(function(e){return a({type:"GET_ERROR",error:e,meta:{key:n}}),e})},W="https://listen-api.listennotes.com/api/v2",V={headers:{"X-ListenAPI-Key":"e9c25682454544cba44d336d2a9ce32e"}},X=function(e,n){return K({key:"podcasts",url:"".concat(W,"/search?type=podcast&q=").concat(e),dispatch:n,options:V})},Z=function(e,n,t){return function(e){var n=e.attribute,t=e.key,a=e.url,r=e.dispatch,i=e.options;return r({type:"GET_MORE_REQUEST",meta:{key:t}}),Q(a,i).then(function(e){return r({type:"GET_MORE_PAYLOAD",payload:e,meta:{key:t,attribute:n}}),e}).catch(function(e){return r({type:"GET_ERROR",error:e,meta:{key:t}}),e})}({attribute:"episodes",key:"podcast",url:"".concat(W,"/podcasts/").concat(e,"?next_episode_pub_date=").concat(n),dispatch:t,options:V})};function F(){var e=Object(u.a)(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return F=function(){return e},e}var $=s.a.div(F()),ee=function(e){var n=e.history,t=e.location,i=Object(a.useState)(!1),c=Object(p.a)(i,2),o=c[0],l=c[1],u=Object(a.useState)(""),s=Object(p.a)(u,2),d=s[0],f=s[1],m=N(),b=Object(p.a)(m,2),g=b[0].podcasts,h=b[1],v=g.loading,x=g.results;return Object(a.useEffect)(function(){if(!o)if(t.search.length>0){var e=decodeURI(t.search.substring(1));X(e,h),f(e)}else g.results.length>0&&function(e){(function(e){var n=e.key;(0,e.dispatch)({type:"RESET",meta:{key:n}})})({key:"podcasts",dispatch:e})}(h);l(!0)}),r.a.createElement($,null,r.a.createElement(y,{placeholder:"Search for podcasts",value:d,onChange:function(e){f(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(n.push({search:"".concat(d)}),X(d,h))}}),v?r.a.createElement(P,null):r.a.createElement("div",null,x.map(function(e){var t=e.id,a=e.image,i=e.publisher_original,c=e.title_original;return r.a.createElement(I,{key:t,onClick:function(){return n.push("/podcast/".concat(t,"/"))},id:t,image:a,title:c,publisher:i})})))},ne=t(86);function te(){var e=Object(u.a)(["\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n"]);return te=function(){return e},e}var ae=s.a.svg(te(),function(e){return e.opacity},.3,.3,.3,.3,.3),re=function(e){var n=e.color,t=void 0===n?"white":n,a=e.height,i=void 0===a?"60px":a,c=e.width,o=void 0===c?"60px":c,l=e.opacity;return r.a.createElement(ae,{opacity:l,height:i,width:o,x:"0px",y:"0px",viewBox:"0 0 492 492",enableBackground:"new 0 0 492 492"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{fill:t,d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12\r C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084\r c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864\r l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"}))))};function ie(){var e=Object(u.a)(["\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n"]);return ie=function(){return e},e}var ce=s.a.svg(ie(),function(e){return e.opacity},.3,.3,.3,.3,.3),oe=function(e){var n=e.color,t=void 0===n?"white":n,a=e.height,i=void 0===a?"60px":a,c=e.width,o=void 0===c?"60px":c,l=e.opacity;return r.a.createElement(ce,{opacity:l,x:"0px",y:"0px",height:i,width:o,viewBox:"0 0 492.004 492.004",enableBackground:"new 0 0 492.004 492.004"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{fill:t,d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\r c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\r c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\r c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}))))};function le(){var e=Object(u.a)(["\n  height: ","px;\n  display: flex;\n  align-items: center;\n  width: 100px;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  outline: none;\n"]);return le=function(){return e},e}function ue(){var e=Object(u.a)(["\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n  margin-top: 30px;\n"]);return ue=function(){return e},e}function se(){var e=Object(u.a)(["\n  width: fill-available;\n  height: fill-available;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return se=function(){return e},e}function pe(){var e=Object(u.a)(["\n  color: white;\n"]);return pe=function(){return e},e}function de(){var e=Object(u.a)(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  background: ",";\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n  display: flex;\n  align-items: flex-end;\n"]);return de=function(){return e},e}function fe(){var e=Object(u.a)(["\n  position: relative;\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n  max-height: 500px;\n"]);return fe=function(){return e},e}function me(){var e=Object(u.a)(["\n  margin: 30px 0px 0px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: ",";\n"]);return me=function(){return e},e}var be=s.a.div(me(),function(e){return e.display}),ge=s.a.img(fe(),function(e){return e.opacity},.3,.3,.3,.3,.3),he=s.a.div(de(),function(e){return e.height},function(e){return e.width},function(e){return e.background},.3,.3,.3,.3),ve=s.a.h1(pe()),xe=s.a.div(se()),ye=s.a.div(ue(),function(e){return e.opacity},.3,.3,.3,.3,.3),je=s.a.button(le(),function(e){return e.height}),Oe=function(e){var n=e.slides,t=e.history,i=function(e,n){var t=Object(a.useRef)(),r=Object(a.useState)(e),i=Object(p.a)(r,2),c=i[0],o=i[1],l=Object(a.useState)(n),u=Object(p.a)(l,2),s=u[0],d=u[1];return Object(a.useEffect)(function(){var e=t.current,n=new ne.a(function(e){if(Array.isArray(e)&&e.length){var n=e[0];o(n.contentRect.width),d(n.contentRect.height)}});return n.observe(e),function(){return n.unobserve(e)}},[]),[t,c,s]}(500,400),c=Object(p.a)(i,3),o=c[0],l=c[1],u=c[2],s=Object(a.useState)(5e3),d=Object(p.a)(s,2),f=d[0],m=d[1],b=Object(a.useState)(0),g=Object(p.a)(b,2),h=g[0],v=g[1];!function(e,n){var t=Object(a.useRef)();Object(a.useEffect)(function(){t.current=e},[e]),Object(a.useEffect)(function(){if(null!==n){var e=setInterval(function(){t.current()},n);return function(){return clearInterval(e)}}},[n])}(function(){v((h+1)%n.length)},f);var x=Object(a.useState)(!1),y=Object(p.a)(x,2),j=y[0],O=y[1],E=Object(a.useState)(!0),w=Object(p.a)(E,2),k=w[0],_=w[1],R=k&&o&&o.current,S=n[h],M=S.imageUrl,P=S.podcasts,C=S.title;return r.a.createElement(be,null,r.a.createElement(ge,{ref:o,src:M,onError:function(){return _(!1)},opacity:R?1:0}),R&&r.a.createElement(he,{onMouseEnter:function(){O(!0),m(null)},onMouseLeave:function(){O(!1),m(5e3)},background:j?"linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.2))":"transparent",height:u,width:l},r.a.createElement(je,{height:u,onClick:function(){0===h&&n.length>0?v(n.length-1):v((h-1)%n.length)}},r.a.createElement(re,{opacity:j?1:0})),r.a.createElement(xe,null,r.a.createElement(ye,{opacity:j?1:0},P.map(function(e){var n=e.id,a=e.image,i=e.publisher_original,c=e.title_original;return r.a.createElement(I,{key:n,onClick:function(){return t.push("/podcast/".concat(n,"/"))},id:n,image:a,title:c,publisher:i})})),r.a.createElement(ve,null,C)),r.a.createElement(je,{height:u,onClick:function(){h===n.length-1?v(0):v((h+1)%n.length)}},r.a.createElement(oe,{opacity:j?1:0}))))};Oe.defaultProps={history:null,slides:[]};var Ee=Oe;function we(){var e=Object(u.a)(["\n  font-family: 'Permanent Marker', cursive;\n  font-size: 72px;\n  margin: 0px 0px 20px 0px;\n  @media (max-width: 400px) {\n    font-size: 48px;\n    margin: 0px 0px 10px 0px;\n  }\n"]);return we=function(){return e},e}function ke(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return ke=function(){return e},e}function _e(){var e=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return _e=function(){return e},e}var Re=s.a.div(_e()),Se=s.a.div(ke()),Me=s.a.h1(we()),Pe=function(e){var n=e.history,t=e.location;return r.a.createElement(Re,null,r.a.createElement(Se,null,r.a.createElement(Ee,{slides:[{imageUrl:"https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/09/dan_carlin_-_h_2015.jpg",title:"Dan Carlin",podcasts:[{id:"658b13f1769449f89b937754c17feee4",image:"https://cdn-images-1.listennotes.com/podcasts/dan-carlins-hardcore-history-dan-carlin-THDlEiZ9tbB.300x300.jpg",publisher_original:"Dan Carlin",title_original:"Dan Carlin's Hardcore History"},{id:"ffb64d537bb14563a648de7772d47334",image:"https://cdn-images-1.listennotes.com/podcasts/common-sense-with-dan-carlin-dan-carlin-fGTUb53Xxgk.300x300.jpg",publisher_original:"Dan Carlin",title_original:"Common Sense with Dan Carlin"},{id:"74f6f88d4bdc4e5cb2982c50d17295b1",image:"https://cdn-images-1.listennotes.com/podcasts/dan-carlins-hardcore-history-addendum-dan-isTKMRywPHE.300x300.jpg",publisher_original:"Dan Carlin",title_original:"Dan Carlin's Hardcore History: Addendum"}]},{imageUrl:"http://pics.yatpay.net/17-10-27/1200/20171027-0016.jpg",title:"Mike Duncan",podcasts:[{id:"ed7b7197dba8478bae1e8ab6ea412d81",image:"https://cdn-images-1.listennotes.com/podcasts/revolutions-mike-duncan-dOrPaDkfLUo.300x300.jpg",publisher_original:"Mike Duncan",title_original:"Revolutions"},{id:"0796ebc1a6874c05a7eb3a8b5beba450",image:"https://cdn-images-1.listennotes.com/podcasts/the-history-of-rome-mike-duncan-zLe-i7FbwnA.300x300.jpg",publisher_original:"Mike Duncan",title_original:"The History of Rome"}]},{imageUrl:"https://timedotcom.files.wordpress.com/2016/04/jad-abumrad.jpg?quality=85&w=1012&h=569&crop=1",title:"Jad Abumrad",podcasts:[{id:"535815a492a941d79b95be6ae1c5cc9c",image:"https://cdn-images-1.listennotes.com/podcasts/radiolab-wnyc-studios-LcwYyVzfJx9.300x300.jpg",publisher_original:"WNYC Studios",title_original:"Radiolab"},{id:"bda17730014841048b374b102c1cf187",image:"https://cdn-images-1.listennotes.com/podcasts/radiolab-presents-more-perfect-wnyc-studios-Clw1Jjf4Bry.300x300.jpg",publisher_original:"WNYC Studios",title_original:"Radiolab Presents: More Perfect"}]},{imageUrl:"https://www.sundaypost.com/wp-content/uploads/sites/13/2019/07/5d3abdaf8ee852.79749622.jpg",title:"Alex Goldman and PJ Vogt",podcasts:[{id:"3909a2c0c06c47d2a30422d62fe969be",image:"https://cdn-images-1.listennotes.com/podcasts/reply-all-gimlet-BNLxkVvzfKP-U8JoNCP62gM.300x300.jpg",publisher_original:"Gimlet",title_original:"Reply All"}]},{imageUrl:"https://1omv27318zyr1hkzinzz4e4u-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/malcolm-gladwell-945x540.jpg",title:"Malcolm Gladwell",podcasts:[{id:"e023bce0d56d458b99775cbed7e50f3a",image:"https://cdn-images-1.listennotes.com/podcasts/revisionist-history-pushkin-industries-iCe4S7HnXP9-dnIGUict_ZQ.300x300.jpg",publisher_original:"Pushkin Industries",title_original:"Revisionist History"},{id:"1cdda6016c0143d9993d7382f69e237d",image:"https://cdn-images-1.listennotes.com/podcasts/broken-record-with-malcolm-gladwell-rick-le3I0pCMrDb.300x300.jpg",publisher_original:"Pushkin Industries",title_original:"Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam"},{id:"4474938df00745d79abb9759387a06f3",image:"https://cdn-images-1.listennotes.com/podcasts/solvable-pushkin-industries-O_SAFm3Gery-gZfsqC9wyxi.300x300.jpg",publisher_original:"Pushkin Industries",title_original:"Solvable"}]},{imageUrl:"https://assets.about.me/background/users/d/a/v/davidmcraney_1402869126_68.jpg",title:"David McRaney",podcasts:[{id:"e9928c2a58ae46268460af9293446f72",image:"https://cdn-images-1.listennotes.com/podcasts/you-are-not-so-smart-you-are-not-so-smart-R0bxgrDycUj.300x300.jpg",publisher_original:"You Are Not So Smart",title_original:"You Are Not So Smart"}]}],history:n}),r.a.createElement(Me,null,"raconteur")),r.a.createElement(ee,{history:n,location:t}))},Ce=t(87),De=t.n(Ce),ze=t(88);function Te(){var e=Object(u.a)(["\n  font-family: 'Permanent Marker', cursive;\n  text-decoration: none;\n  color: black;\n  font-size: 36px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return Te=function(){return e},e}function Le(){var e=Object(u.a)(["\n  margin: 0px;\n"]);return Le=function(){return e},e}function Ae(){var e=Object(u.a)(["\n  list-style-type: none;\n  display: flex;\n  padding: 0px;\n  margin-top: 10px 0px;\n  @media (max-width: 400px) {\n    justify-content: center;\n  }\n"]);return Ae=function(){return e},e}function Ge(){var e=Object(u.a)([""]);return Ge=function(){return e},e}var Ue=s.a.div(Ge()),Be=s.a.ul(Ae()),Ye=s.a.li(Le()),He=Object(s.a)(o.b)(Te()),Ie=function(){return r.a.createElement(Ue,null,r.a.createElement(Be,null,r.a.createElement(Ye,null,r.a.createElement(He,{to:"/"},"raconteur"))))};function Je(){var e=Object(u.a)(["\n  margin: 0px;\n"]);return Je=function(){return e},e}function qe(){var e=Object(u.a)(["\n  margin: 0px;\n"]);return qe=function(){return e},e}function Ne(){var e=Object(u.a)(["\n  margin: 20px;\n"]);return Ne=function(){return e},e}function Qe(){var e=Object(u.a)(["\n  height: 150px;\n  width: 150px;\n  min-width: 150px;\n  border-radius: 150px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return Qe=function(){return e},e}function Ke(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ke=function(){return e},e}var We=s.a.div(Ke()),Ve=s.a.img(Qe(),function(e){return e.hover?"border-radius: 1px":""},.4,.4,.4,.4),Xe=s.a.div(Ne()),Ze=s.a.h1(qe()),Fe=s.a.p(Je()),$e=function(e){var n=e.image,t=e.title,i=e.publisher,c=Object(a.useState)(!1),o=Object(p.a)(c,2),l=o[0],u=o[1];return r.a.createElement(We,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},r.a.createElement(Ve,{hover:l,src:n,alt:"artwork"}),r.a.createElement(Xe,null,r.a.createElement(Ze,null,t),r.a.createElement(Fe,{id:"publisher"},"".concat(i))))};$e.defaultProps={image:null,title:null,publisher:null};var en=$e;function nn(){var e=Object(u.a)(["\n  &:focus {\n    outline: none;\n  }\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(u.a)(["\n  font-size: 12px;\n  margin: 5px 0px 10px 0px;\n"]);return tn=function(){return e},e}function an(){var e=Object(u.a)(["\n  margin-bottom: 0px;\n"]);return an=function(){return e},e}function rn(){var e=Object(u.a)(["\n  border-bottom: 3px solid black;\n  padding: 5px 0px;\n"]);return rn=function(){return e},e}function cn(){var e=Object(u.a)(["\n  margin: 0px 40px 20px 40px;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return cn=function(){return e},e}function on(){var e=Object(u.a)(["\n  display: flex;\n"]);return on=function(){return e},e}var ln=s.a.div(on()),un=s.a.div(cn()),sn=s.a.h2(rn()),pn=s.a.h3(an()),dn=s.a.p(tn()),fn=s.a.audio(nn()),mn=function(e){var n=e.match,t=Object(a.useState)(!1),i=Object(p.a)(t,2),c=i[0],o=i[1],l=Object(a.useState)(null),u=Object(p.a)(l,2),s=u[0],d=u[1],f=Object(a.useState)(!1),m=Object(p.a)(f,2),b=m[0],g=m[1],h=n.params.id,v=N(),x=Object(p.a)(v,2),y=x[0],O=x[1],E=y.podcast,w=E.description,k=E.episodes,_=E.image,R=E.loading,S=E.loadingMore,M=E.publisher,C=E.title;return Object(a.useEffect)(function(){c||(function(e,n){return K({key:"podcast",url:"".concat(W,"/podcasts/").concat(e),dispatch:n,options:V})}(h,O).then(function(e){if(10===e.episodes.length){var n=Object(j.a)(e.episodes).pop();d(n.pub_date_ms),g(!0)}else g(!1)}),o(!0))}),Object(a.useEffect)(function(){var e=function(e){var n=document.scrollingElement||document.documentElement;b&&Math.round(n.scrollHeight)<=Math.round(n.scrollTop+window.innerHeight)&&Z(h,s,O).then(function(e){if(10===e.episodes.length){var n=Object(j.a)(e.episodes).pop();d(n.pub_date_ms)}else g(!1)})};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),R?r.a.createElement(P,null):r.a.createElement(ln,null,r.a.createElement(un,null,r.a.createElement(Ie,null),r.a.createElement(en,{image:_,title:C,publisher:M}),r.a.createElement("p",null,w),r.a.createElement(sn,null,"Episodes"),r.a.createElement("div",null,k&&k.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(pn,null,e.title),r.a.createElement(dn,null,"".concat((n=e.pub_date_ms,Object(ze.format)(new Date(n),"D MMM YYYY").toUpperCase()))),r.a.createElement(fn,{controls:!0,src:e.audio,preload:"none"}),e.title!==e.description?r.a.createElement("p",null,De()(e.description)):null);var n})),S?r.a.createElement(P,null):null))},bn=t(9);function gn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function hn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?gn(t,!0).forEach(function(n){Object(bn.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gn(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var vn={feed:{loading:!1,error:null,stage:""},podcasts:{loading:!1,results:[],error:null,stage:""},podcast:{loading:!1,error:null,stage:"",loadingMore:!1}},xn=function(e,n){switch(n.type){case"GET_REQUEST":var t=n.meta.key;if(t){var a=e[t];if(a)return hn({},e,Object(bn.a)({},t,hn({},a,{loading:!0,stage:"Requesting data"})))}return e;case"GET_PAYLOAD":var r=n.meta.key;if(r){var i=e[r];if(i)return hn({},e,Object(bn.a)({},r,hn({},i,{},n.payload,{loading:!1,stage:"Data fetched"})))}return e;case"GET_MORE_REQUEST":var c=n.meta.key;if(c){var o=e[c];if(o)return hn({},e,Object(bn.a)({},c,hn({},o,{loadingMore:!0,stage:"Requesting data"})))}return e;case"GET_MORE_PAYLOAD":var l=n.meta,u=l.key,s=l.attribute;if(u){var p,d=e[u],f=d[s];if(d)return hn({},e,Object(bn.a)({},u,hn({},d,{},n.payload,(p={},Object(bn.a)(p,s,[].concat(Object(j.a)(f),Object(j.a)(n.payload[s]))),Object(bn.a)(p,"loadingMore",!1),Object(bn.a)(p,"stage","Data fetched"),p))))}return e;case"GET_ERROR":var m=n.meta.key,b=e[m];return hn({},e,Object(bn.a)({},m,hn({},b,{},n.error,{loading:!1,stage:"Request failed"})));case"RESET":var g=n.meta.key;return hn({},e,Object(bn.a)({},g,vn[g]));default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{basename:""},r.a.createElement(function(){return r.a.createElement(q,{initialState:vn,reducer:xn},r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:Pe}),r.a.createElement(l.a,{path:"/podcast/:id/",component:mn}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,n,t){e.exports=t(216)},97:function(e,n,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.11c0d7ec.chunk.js.map