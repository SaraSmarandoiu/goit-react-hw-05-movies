"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{687:function(r,t,e){e.d(t,{Hx:function(){return h},Y5:function(){return f},wr:function(){return o},xc:function(){return v},z1:function(){return p}});var n=e(861),a=e(757),c=e.n(a),u=e(759),s="a23610388808b879b8f614586097c9a9",i="https://api.themoviedb.org/3",o=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("".concat(i,"/trending/movie/day"),{params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("".concat(i,"/search/movie"),{params:{api_key:s,query:t}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("".concat(i,"/movie/").concat(t),{params:{api_key:s}});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits"),{params:{api_key:s}});case 2:return e=r.sent,r.abrupt("return",e.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),{params:{api_key:s}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},168:function(r,t,e){e.r(t),e.d(t,{default:function(){return o}});var n=e(439),a=e(791),c=e(689),u=e(687),s="Reviews_reviews__n3fdK",i=e(184),o=function(){var r=(0,c.UO)().movieId,t=(0,a.useState)([]),e=(0,n.Z)(t,2),o=e[0],p=e[1];return(0,a.useEffect)((function(){(0,u.Hx)(r).then(p).catch((function(r){console.error("Error fetching movie reviews:",r)}))}),[r]),(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)("h2",{children:"Reviews"}),(0,i.jsx)("ul",{children:o.map((function(r){return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:r.author}),(0,i.jsx)("p",{children:r.content})]},r.id)}))})]})}}}]);
//# sourceMappingURL=168.7d4f73af.chunk.js.map