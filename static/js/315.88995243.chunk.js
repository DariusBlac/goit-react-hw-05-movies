"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[315],{436:function(e,t,r){r.d(t,{Dw:function(){return p},Hj:function(){return d},_L:function(){return l},b3:function(){return v},vl:function(){return h}});var n=r(861),a=r(757),s=r.n(a),i=r(243),c="application/json",o="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjIwOWFkYWM0MmMyODFlZDBmMWNjZmMyNTBmNzk5MSIsInN1YiI6IjY1MWE5OGYwOTY3Y2M3MzQyNjA5ZTc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m93T8ZMpr2fyuroo_6h3P7kuR8Mgd_ssuYjfehMO0ko",u={method:"GET",headers:{accept:c,Authorization:o}},l=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",u);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("https://api.themoviedb.org/3/search/movie",{params:{include_adult:"false",language:"en-US",page:"1",query:t},headers:{accept:c,Authorization:o}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("https://api.themoviedb.org/3/movie/".concat(t),{params:{language:"en-US"},headers:{accept:c,Authorization:o}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{language:"en-US",page:"1"},headers:{accept:c,Authorization:o}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{language:"en-US"},headers:{accept:c,Authorization:o}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},315:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(613),o="MovieInfo_container__MNRAo",u="MovieInfo_list__i7jw8",l=r(184),p=function(e){var t=e.movie,r=t.original_title,n=t.poster_path,a=t.release_date,s=t.overview,i=t.genres,p=t.vote_average;return(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w400".concat(n):c,alt:r}),(0,l.jsx)("h2",{children:"".concat(r," (").concat(a,")")}),(0,l.jsxs)("ul",{className:u,children:[(0,l.jsx)("li",{children:(0,l.jsxs)("h3",{children:["User Score: ",p]})}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:s})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:i.map((function(e){return e.name})).join(" ")})]})]})]})},h=r(436),d=r(791),v=r(689),f=r(87),m="MovieDetails_btn__7L5IF",x="MovieDetails_container__Ys+c9",j="MovieDetails_list__dbNMP",_="MovieDetails_loader__lDPsH",g=function(){var e=(0,d.useState)(null),t=(0,a.Z)(e,2),r=t[0],s=t[1],c=(0,d.useState)(!1),o=(0,a.Z)(c,2),u=o[0],g=o[1],w=(0,d.useState)(!1),b=(0,a.Z)(w,2),M=b[0],k=b[1],Z=(0,v.UO)().movieId,N=(0,v.s0)(),y=(0,v.TH)(),I=(0,d.useCallback)((0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,(0,h.vl)(Z);case 4:t=e.sent,s(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),k(!0),console.log(e.t0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),[Z]);(0,d.useEffect)((function(){I()}),[I]);return(0,l.jsxs)("div",{className:x,children:[!u&&(0,l.jsx)("button",{onClick:function(){y.state?N(y.state):N("/")},className:m,children:"Go back"}),r&&(0,l.jsx)(p,{movie:r}),!u&&(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsxs)("ul",{className:j,children:[(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"reviews",state:y.state,children:"Reviews"})}),(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"cast",state:y.state,children:"Cast"})})]})]}),u&&(0,l.jsx)("div",{className:_,children:"Loading..."}),M&&(0,l.jsx)("div",{children:"Try later"}),(0,l.jsx)(d.Suspense,{children:(0,l.jsx)(v.j3,{})})]})}},613:function(e,t,r){e.exports=r.p+"static/media/plug.323f7926900997de8c34.png"}}]);
//# sourceMappingURL=315.88995243.chunk.js.map