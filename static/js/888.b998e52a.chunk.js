"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{687:function(e,t,r){r.d(t,{Hx:function(){return d},Y5:function(){return l},wr:function(){return u},xc:function(){return v},z1:function(){return p}});var n=r(861),a=r(757),s=r.n(a),c=r(759),i="a23610388808b879b8f614586097c9a9",o="https://api.themoviedb.org/3",u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:i}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/search/movie"),{params:{api_key:i,query:t}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/credits"),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews"),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(439),a=r(791),s=r(689),c=r(87),i=r(687),o="MovieDetails_movieDetails__EqwEX",u="MovieDetails_movieHeader__tWqS+",p="MovieDetails_movieImage__8nQBH",l="MovieDetails_movieInfo__XAfDM",v="MovieDetails_additionalInfo__qmwMY",d=r(184),f=function(){var e=(0,s.UO)().movieId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),f=r[0],h=r[1];return(0,a.useEffect)((function(){(0,i.Y5)(e).then((function(e){console.log("Fetched movie details:",e),h(e)})).catch((function(e){console.error("Error fetching movie details:",e)}))}),[e]),f?(0,d.jsxs)("div",{className:o,children:[(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(f.poster_path),alt:f.title,className:p}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsxs)("h1",{children:[f.title," (",f.release_date.split("-")[0],")"]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("strong",{children:"User Score:"})," ",10*f.vote_average,"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:f.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsx)(c.rU,{to:"cast",children:"Cast"}),(0,d.jsx)(c.rU,{to:"reviews",children:"Reviews"})]}),(0,d.jsx)(s.j3,{})]}):(0,d.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=888.b998e52a.chunk.js.map