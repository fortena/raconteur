(window.webpackJsonpraconteur=window.webpackJsonpraconteur||[]).push([[0],{216:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(81),c=t.n(i),o=t(15),u=(t(97),t(11)),l=t(2),s=t(3),p=t(4),d=t(91),f=function(n){var e=n.height,t=n.width,a=n.color;return r.a.createElement("svg",{height:e,width:t,x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{enableBackground:"new 0 0 56.966 56.966",margin:"0px 6px 0px 0px"}},r.a.createElement("path",{fill:a,d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\r s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\r c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\r s-17-7.626-17-17S14.61,6,23.984,6z"}))};f.defaultProps={height:"14px",width:"14px",color:"#000000"};var m=f;function b(){var n=Object(l.a)(["\n  min-width: 400px;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n  font-size: 14px;\n  height: 23px;\n  @media (max-width: 400px) {\n    min-width: unset;\n    width: 100%;\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(l.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  padding: 0px 5px 0px 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n"]);return h=function(){return n},n}var g=s.a.div(h()),v=s.a.input(b()),x=function(n){var e=n.value,t=Object(d.a)(n,["value"]);return r.a.createElement(g,null,r.a.createElement(m,{color:""===e?"#757575":"#000000"}),r.a.createElement(v,Object.assign({value:e},t)))};x.defaultProps={value:""};var y=x,j=t(10);function O(){var n=Object(l.a)(["\n  background-color: black;\n  width: 2px;\n  height: 100px;\n  margin: 2px;\n  border-radius: 10px;\n  display: inline-block;\n  animation: "," 2s ","s infinite\n    cubic-bezier(0.2, 0.68, 0.18, 1.08);\n  animation-fill-mode: both;\n"]);return O=function(){return n},n}function E(){var n=Object(l.a)(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.05)}\n  100% {transform: scaley(1.0)}\n"]);return E=function(){return n},n}function w(){var n=Object(l.a)(["\n  height: 104px;\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 100px;\n"]);return k=function(){return n},n}var _=s.a.div(k()),S=s.a.div(w()),R=Object(s.b)(E()),M=s.a.div(O(),R,function(n){return n.start}),C=function(){var n=Object(a.useState)([.1]),e=Object(p.a)(n,2),t=e[0],i=e[1],c=Object(a.useState)(.2),o=Object(p.a)(c,2),u=o[0],l=o[1];return Object(a.useEffect)(function(){var n=setTimeout(function(){u<=10&&(i([].concat(Object(j.a)(t),[u])),l(u+.1))},1e3);return function(){return clearTimeout(n)}},[u]),r.a.createElement(_,null,r.a.createElement(S,null,t.map(function(n){return r.a.createElement(M,{key:n,start:.1*n})})),r.a.createElement("p",null,"Loading ..."))};function D(){var n=Object(l.a)(["\n  margin: 0px;\n  font-size: 32px;\n  color: black;\n  text-decoration: ",";\n  @media (max-width: 400px) {\n    font-size: 32px;\n  }\n"]);return D=function(){return n},n}function P(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return P=function(){return n},n}function T(){var n=Object(l.a)(["\n  margin: 10px;\n"]);return T=function(){return n},n}function z(){var n=Object(l.a)(["\n  height: 100px;\n  width: 100px;\n  min-width: 100px;\n  border-radius: 100px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return z=function(){return n},n}function L(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0px;\n  ","\n"]);return L=function(){return n},n}var A=s.a.div(L(),function(n){return n.hover?"cursor: pointer":""}),Y=s.a.img(z(),function(n){return n.hover?"border-radius: 4px":""},.4,.4,.4,.4),G=s.a.div(T()),U=s.a.p(P()),B=Object(s.a)(o.b)(D(),function(n){return n.textDecoration}),H=function(n){var e=n.onClick,t=n.id,i=n.image,c=n.title,o=n.publisher,u=Object(a.useState)(!1),l=Object(p.a)(u,2),s=l[0],d=l[1];return r.a.createElement(A,{hover:s,onClick:e,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},r.a.createElement(Y,{hover:s,src:i,alt:"artwork"}),r.a.createElement(G,null,r.a.createElement(B,{textDecoration:s?"underline":"none",to:"/podcast/".concat(t,"/")},c),r.a.createElement(U,{id:"publisher"},"".concat(o))))};H.defaultProps={onClick:function(){},id:null,image:null,title:null,publisher:null};var q=H,I=Object(a.createContext)(),J=function(n){var e=n.reducer,t=n.initialState,i=n.children;return r.a.createElement(I.Provider,{value:Object(a.useReducer)(e,t)},i)},N=function(){return Object(a.useContext)(I)},Q=function(n,e){return fetch(n,e).then(function(n){return n.json()})},W=function(n){var e=n.key,t=n.url,a=n.dispatch,r=n.options;return a({type:"GET_REQUEST",meta:{key:e}}),Q(t,r).then(function(n){return a({type:"GET_PAYLOAD",payload:n,meta:{key:e}}),n}).catch(function(n){return a({type:"GET_ERROR",error:n,meta:{key:e}}),n})},K="https://listen-api.listennotes.com/api/v2",X={headers:{"X-ListenAPI-Key":"e9c25682454544cba44d336d2a9ce32e"}},V=function(n,e){return W({key:"podcasts",url:"".concat(K,"/search?type=podcast&q=").concat(n),dispatch:e,options:X})},Z=function(n,e,t){return function(n){var e=n.attribute,t=n.key,a=n.url,r=n.dispatch,i=n.options;return r({type:"GET_MORE_REQUEST",meta:{key:t}}),Q(a,i).then(function(n){return r({type:"GET_MORE_PAYLOAD",payload:n,meta:{key:t,attribute:e}}),n}).catch(function(n){return r({type:"GET_ERROR",error:n,meta:{key:t}}),n})}({attribute:"episodes",key:"podcast",url:"".concat(K,"/podcasts/").concat(n,"?next_episode_pub_date=").concat(e),dispatch:t,options:X})};function $(){var n=Object(l.a)(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return $=function(){return n},n}var F=s.a.div($()),nn=function(n){var e=n.history,t=n.location,i=Object(a.useState)(!1),c=Object(p.a)(i,2),o=c[0],u=c[1],l=Object(a.useState)(""),s=Object(p.a)(l,2),d=s[0],f=s[1],m=N(),b=Object(p.a)(m,2),h=b[0].podcasts,g=b[1],v=h.loading,x=h.results;return Object(a.useEffect)(function(){if(!o)if(t.search.length>0){var n=decodeURI(t.search.substring(1));V(n,g),f(n)}else h.results.length>0&&function(n){(function(n){var e=n.key;(0,n.dispatch)({type:"RESET",meta:{key:e}})})({key:"podcasts",dispatch:n})}(g);u(!0)}),r.a.createElement(F,null,r.a.createElement(y,{placeholder:"Search for podcasts",value:d,onChange:function(n){f(n.target.value)},onKeyDown:function(n){"Enter"===n.key&&(e.push({search:"".concat(d)}),V(d,g))}}),v?r.a.createElement(C,null):r.a.createElement("div",null,x.map(function(n){var t=n.id,a=n.image,i=n.publisher_original,c=n.title_original;return r.a.createElement(q,{key:t,onClick:function(){return e.push("/podcast/".concat(t,"/"))},id:t,image:a,title:c,publisher:i})})))},en=t(86);function tn(){var n=Object(l.a)(["\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n"]);return tn=function(){return n},n}var an=s.a.svg(tn(),function(n){return n.opacity},.3,.3,.3,.3,.3),rn=function(n){var e=n.color,t=void 0===e?"white":e,a=n.height,i=void 0===a?"60px":a,c=n.width,o=void 0===c?"60px":c,u=n.opacity;return r.a.createElement(an,{opacity:u,height:i,width:o,x:"0px",y:"0px",viewBox:"0 0 492 492",enableBackground:"new 0 0 492 492"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{fill:t,d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12\r C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084\r c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864\r l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"}))))};function cn(){var n=Object(l.a)(["\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n"]);return cn=function(){return n},n}var on=s.a.svg(cn(),function(n){return n.opacity},.3,.3,.3,.3,.3),un=function(n){var e=n.color,t=void 0===e?"white":e,a=n.height,i=void 0===a?"60px":a,c=n.width,o=void 0===c?"60px":c,u=n.opacity;return r.a.createElement(on,{opacity:u,x:"0px",y:"0px",height:i,width:o,viewBox:"0 0 492.004 492.004",enableBackground:"new 0 0 492.004 492.004"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{fill:t,d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\r c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\r c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\r c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}))))};function ln(){var n=Object(l.a)(["\n  height: ","px;\n  display: flex;\n  align-items: center;\n  width: 100px;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  outline: none;\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n  margin-top: 30px;\n"]);return sn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  width: fill-available;\n  height: fill-available;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return pn=function(){return n},n}function dn(){var n=Object(l.a)(["\n  color: white;\n"]);return dn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n  background: ",";\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n  display: flex;\n  align-items: flex-end;\n"]);return fn=function(){return n},n}function mn(){var n=Object(l.a)(["\n  position: relative;\n  opacity: ",";\n  -webkit-transition: opacity ","s ease-in;\n  -moz-transition: opacity ","s ease-in;\n  -ms-transition: opacity ","s ease-in;\n  -o-transition: opacity ","s ease-in;\n  transition: opacity ","s ease-in;\n  max-height: 500px;\n"]);return mn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  margin: 30px 0px 0px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: ",";\n"]);return bn=function(){return n},n}var hn=s.a.div(bn(),function(n){return n.display}),gn=s.a.img(mn(),function(n){return n.opacity},.3,.3,.3,.3,.3),vn=s.a.div(fn(),function(n){return n.height},function(n){return n.width},function(n){return n.background},.3,.3,.3,.3),xn=s.a.h1(dn()),yn=s.a.div(pn()),jn=s.a.div(sn(),function(n){return n.opacity},.3,.3,.3,.3,.3),On=s.a.button(ln(),function(n){return n.height}),En=function(n){var e=n.slides,t=n.history,i=function(n,e){var t=Object(a.useRef)(),r=Object(a.useState)(n),i=Object(p.a)(r,2),c=i[0],o=i[1],u=Object(a.useState)(e),l=Object(p.a)(u,2),s=l[0],d=l[1];return Object(a.useEffect)(function(){var n=t.current,e=new en.a(function(n){if(Array.isArray(n)&&n.length){var e=n[0];o(e.contentRect.width),d(e.contentRect.height)}});return e.observe(n),function(){return e.unobserve(n)}},[]),[t,c,s]}(500,400),c=Object(p.a)(i,3),o=c[0],u=c[1],l=c[2],s=Object(a.useState)(5e3),d=Object(p.a)(s,2),f=d[0],m=d[1],b=Object(a.useState)(0),h=Object(p.a)(b,2),g=h[0],v=h[1];!function(n,e){var t=Object(a.useRef)();Object(a.useEffect)(function(){t.current=n},[n]),Object(a.useEffect)(function(){if(null!==e){var n=setInterval(function(){t.current()},e);return function(){return clearInterval(n)}}},[e])}(function(){v((g+1)%e.length)},f);var x=Object(a.useState)(!1),y=Object(p.a)(x,2),j=y[0],O=y[1],E=Object(a.useState)(!0),w=Object(p.a)(E,2),k=w[0],_=w[1],S=k&&o&&o.current,R=e[g],M=R.imageUrl,C=R.podcasts,D=R.title;return r.a.createElement(hn,null,r.a.createElement(gn,{ref:o,src:M,onError:function(){return _(!1)},opacity:S?1:0}),S&&r.a.createElement(vn,{onMouseEnter:function(){O(!0),m(null)},onMouseLeave:function(){O(!1),m(5e3)},background:j?"linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.2))":"transparent",height:l,width:u},r.a.createElement(On,{height:l,onClick:function(){0===g&&e.length>0?v(e.length-1):v((g-1)%e.length)}},r.a.createElement(rn,{opacity:j?1:0})),r.a.createElement(yn,null,r.a.createElement(jn,{opacity:j?1:0},C.map(function(n){var e=n.id,a=n.image,i=n.publisher_original,c=n.title_original;return r.a.createElement(q,{key:e,onClick:function(){return t.push("/podcast/".concat(e,"/"))},id:e,image:a,title:c,publisher:i})})),r.a.createElement(xn,null,D)),r.a.createElement(On,{height:l,onClick:function(){g===e.length-1?v(0):v((g+1)%e.length)}},r.a.createElement(un,{opacity:j?1:0}))))};En.defaultProps={history:null,slides:[]};var wn=En;function kn(){var n=Object(l.a)(["\n  font-family: 'Permanent Marker', cursive;\n  font-size: 72px;\n  margin: 0px 0px 20px 0px;\n  @media (max-width: 400px) {\n    font-size: 48px;\n    margin: 0px 0px 10px 0px;\n  }\n"]);return kn=function(){return n},n}function _n(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return _n=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return Sn=function(){return n},n}var Rn=s.a.div(Sn()),Mn=s.a.div(_n()),Cn=s.a.h1(kn()),Dn=function(n){var e=n.history,t=n.location;return r.a.createElement(Rn,null,r.a.createElement(Mn,null,r.a.createElement(wn,{slides:[{imageUrl:"https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/09/dan_carlin_-_h_2015.jpg",title:"Dan Carlin",podcasts:[{id:"658b13f1769449f89b937754c17feee4",image:"https://cdn-images-1.listennotes.com/podcasts/dan-carlins-hardcore-history-dan-carlin-THDlEiZ9tbB.300x300.jpg",publisher_original:"Dan Carlin",title_original:"Dan Carlin's Hardcore History"},{id:"ffb64d537bb14563a648de7772d47334",image:"https://cdn-images-1.listennotes.com/podcasts/common-sense-with-dan-carlin-dan-carlin-fGTUb53Xxgk.300x300.jpg",publisher_original:"Dan Carlin",title_original:"Common Sense with Dan Carlin"},{id:"74f6f88d4bdc4e5cb2982c50d17295b1",image:"https://cdn-images-1.listennotes.com/podcasts/dan-carlins-hardcore-history-addendum-dan-isTKMRywPHE.300x300.jpg",publisher_original:"Dan Carlin",title_original:"Dan Carlin's Hardcore History: Addendum"}]},{imageUrl:"https://timedotcom.files.wordpress.com/2016/04/jad-abumrad.jpg?quality=85&w=1012&h=569&crop=1",title:"Jad Abumrad",podcasts:[{id:"535815a492a941d79b95be6ae1c5cc9c",image:"https://cdn-images-1.listennotes.com/podcasts/radiolab-wnyc-studios-LcwYyVzfJx9.300x300.jpg",publisher_original:"WNYC Studios",title_original:"Radiolab"},{id:"bda17730014841048b374b102c1cf187",image:"https://cdn-images-1.listennotes.com/podcasts/radiolab-presents-more-perfect-wnyc-studios-Clw1Jjf4Bry.300x300.jpg",publisher_original:"WNYC Studios",title_original:"Radiolab Presents: More Perfect"}]},{imageUrl:"https://assets.about.me/background/users/d/a/v/davidmcraney_1402869126_68.jpg",title:"David McRaney",podcasts:[{id:"e9928c2a58ae46268460af9293446f72",image:"https://cdn-images-1.listennotes.com/podcasts/you-are-not-so-smart-you-are-not-so-smart-R0bxgrDycUj.300x300.jpg",publisher_original:"You Are Not So Smart",title_original:"You Are Not So Smart"}]}],history:e}),r.a.createElement(Cn,null,"raconteur")),r.a.createElement(nn,{history:e,location:t}))},Pn=t(87),Tn=t.n(Pn),zn=t(88);function Ln(){var n=Object(l.a)(["\n  font-family: 'Permanent Marker', cursive;\n  text-decoration: none;\n  color: black;\n  font-size: 36px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return Ln=function(){return n},n}function An(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return An=function(){return n},n}function Yn(){var n=Object(l.a)(["\n  list-style-type: none;\n  display: flex;\n  padding: 0px;\n  margin-top: 10px 0px;\n  @media (max-width: 400px) {\n    justify-content: center;\n  }\n"]);return Yn=function(){return n},n}function Gn(){var n=Object(l.a)([""]);return Gn=function(){return n},n}var Un=s.a.div(Gn()),Bn=s.a.ul(Yn()),Hn=s.a.li(An()),qn=Object(s.a)(o.b)(Ln()),In=function(){return r.a.createElement(Un,null,r.a.createElement(Bn,null,r.a.createElement(Hn,null,r.a.createElement(qn,{to:"/"},"raconteur"))))};function Jn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return Jn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n  margin: 0px;\n"]);return Nn=function(){return n},n}function Qn(){var n=Object(l.a)(["\n  margin: 20px;\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(l.a)(["\n  height: 150px;\n  width: 150px;\n  min-width: 150px;\n  border-radius: 150px;\n  ","\n  -moz-transition: all ","s;\n  -o-transition: all ","s;\n  -webkit-transition: all ","s;\n  transition: all ","s;\n"]);return Wn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return Kn=function(){return n},n}var Xn=s.a.div(Kn()),Vn=s.a.img(Wn(),function(n){return n.hover?"border-radius: 1px":""},.4,.4,.4,.4),Zn=s.a.div(Qn()),$n=s.a.h1(Nn()),Fn=s.a.p(Jn()),ne=function(n){var e=n.image,t=n.title,i=n.publisher,c=Object(a.useState)(!1),o=Object(p.a)(c,2),u=o[0],l=o[1];return r.a.createElement(Xn,{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},r.a.createElement(Vn,{hover:u,src:e,alt:"artwork"}),r.a.createElement(Zn,null,r.a.createElement($n,null,t),r.a.createElement(Fn,{id:"publisher"},"".concat(i))))};ne.defaultProps={image:null,title:null,publisher:null};var ee=ne;function te(){var n=Object(l.a)(["\n  &:focus {\n    outline: none;\n  }\n  @media (max-width: 400px) {\n    width: 100%;\n  }\n"]);return te=function(){return n},n}function ae(){var n=Object(l.a)(["\n  font-size: 12px;\n  margin: 5px 0px 10px 0px;\n"]);return ae=function(){return n},n}function re(){var n=Object(l.a)(["\n  margin-bottom: 0px;\n"]);return re=function(){return n},n}function ie(){var n=Object(l.a)(["\n  border-bottom: 3px solid black;\n  padding: 5px 0px;\n"]);return ie=function(){return n},n}function ce(){var n=Object(l.a)(["\n  margin: 0px 40px 20px 40px;\n  @media (max-width: 400px) {\n    margin: 0px 10px;\n  }\n"]);return ce=function(){return n},n}function oe(){var n=Object(l.a)(["\n  display: flex;\n"]);return oe=function(){return n},n}var ue=s.a.div(oe()),le=s.a.div(ce()),se=s.a.h2(ie()),pe=s.a.h3(re()),de=s.a.p(ae()),fe=s.a.audio(te()),me=function(n){var e=n.match,t=Object(a.useState)(!1),i=Object(p.a)(t,2),c=i[0],o=i[1],u=Object(a.useState)(null),l=Object(p.a)(u,2),s=l[0],d=l[1],f=Object(a.useState)(!1),m=Object(p.a)(f,2),b=m[0],h=m[1],g=e.params.id,v=N(),x=Object(p.a)(v,2),y=x[0],O=x[1],E=y.podcast,w=E.description,k=E.episodes,_=E.image,S=E.loading,R=E.loadingMore,M=E.publisher,D=E.title;return Object(a.useEffect)(function(){c||(function(n,e){return W({key:"podcast",url:"".concat(K,"/podcasts/").concat(n),dispatch:e,options:X})}(g,O).then(function(n){if(10===n.episodes.length){var e=Object(j.a)(n.episodes).pop();d(e.pub_date_ms),h(!0)}else h(!1)}),o(!0))}),Object(a.useEffect)(function(){var n=function(n){var e=document.scrollingElement||document.documentElement;b&&Math.round(e.scrollHeight)<=Math.round(e.scrollTop+window.innerHeight)&&Z(g,s,O).then(function(n){if(10===n.episodes.length){var e=Object(j.a)(n.episodes).pop();d(e.pub_date_ms)}else h(!1)})};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),S?r.a.createElement(C,null):r.a.createElement(ue,null,r.a.createElement(le,null,r.a.createElement(In,null),r.a.createElement(ee,{image:_,title:D,publisher:M}),r.a.createElement("p",null,w),r.a.createElement(se,null,"Episodes"),r.a.createElement("div",null,k&&k.map(function(n){return r.a.createElement("div",{key:n.id},r.a.createElement(pe,null,n.title),r.a.createElement(de,null,"".concat((e=n.pub_date_ms,Object(zn.format)(new Date(e),"D MMM YYYY").toUpperCase()))),r.a.createElement(fe,{controls:!0,src:n.audio,preload:"none"}),n.title!==n.description?r.a.createElement("p",null,Tn()(n.description)):null);var e})),R?r.a.createElement(C,null):null))},be=t(9);function he(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}function ge(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?he(t,!0).forEach(function(e){Object(be.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):he(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var ve={feed:{loading:!1,error:null,stage:""},podcasts:{loading:!1,results:[],error:null,stage:""},podcast:{loading:!1,error:null,stage:"",loadingMore:!1}},xe=function(n,e){switch(e.type){case"GET_REQUEST":var t=e.meta.key;if(t){var a=n[t];if(a)return ge({},n,Object(be.a)({},t,ge({},a,{loading:!0,stage:"Requesting data"})))}return n;case"GET_PAYLOAD":var r=e.meta.key;if(r){var i=n[r];if(i)return ge({},n,Object(be.a)({},r,ge({},i,{},e.payload,{loading:!1,stage:"Data fetched"})))}return n;case"GET_MORE_REQUEST":var c=e.meta.key;if(c){var o=n[c];if(o)return ge({},n,Object(be.a)({},c,ge({},o,{loadingMore:!0,stage:"Requesting data"})))}return n;case"GET_MORE_PAYLOAD":var u=e.meta,l=u.key,s=u.attribute;if(l){var p,d=n[l],f=d[s];if(d)return ge({},n,Object(be.a)({},l,ge({},d,{},e.payload,(p={},Object(be.a)(p,s,[].concat(Object(j.a)(f),Object(j.a)(e.payload[s]))),Object(be.a)(p,"loadingMore",!1),Object(be.a)(p,"stage","Data fetched"),p))))}return n;case"GET_ERROR":var m=e.meta.key,b=n[m];return ge({},n,Object(be.a)({},m,ge({},b,{},e.error,{loading:!1,stage:"Request failed"})));case"RESET":var h=e.meta.key;return ge({},n,Object(be.a)({},h,ve[h]));default:return n}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{basename:""},r.a.createElement(function(){return r.a.createElement(J,{initialState:ve,reducer:xe},r.a.createElement("div",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:Dn}),r.a.createElement(u.a,{path:"/podcast/:id/",component:me}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},92:function(n,e,t){n.exports=t(216)},97:function(n,e,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.8a9913e7.chunk.js.map