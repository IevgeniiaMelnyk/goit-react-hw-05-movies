"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[714,983],{2377:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(2791),a=n(1087),s=n(7689),i="FilmsList_item__+wMaw",u="FilmsList_link__K+Gli",c="FilmsList_list__4lry1",o=n(184),l=function(e){var t=e.items,n=(0,s.TH)(),r=t.map((function(e){var t=e.id,r=e.title;return(0,o.jsx)("li",{className:i,children:(0,o.jsx)(a.rU,{className:u,to:"/movies/".concat(t),state:{from:n},children:r})},t)}));return(0,o.jsx)("ul",{className:c,children:r})},f=(0,r.memo)(l);l.defaultProps={items:[]}},6714:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(5861),a=n(9439),s=n(7757),i=n.n(s),u=n(2791),c=n(1087),o=n(7596),l=(n(5462),n(3791)),f=n(2377),p=n(7671),d=n(3983),h=n(50),m="homePage_title__Jf-8W",v=n(184),x=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],x=(0,u.useState)(!1),g=(0,a.Z)(x,2),_=g[0],b=g[1],k=(0,c.lr)({page:1}),j=(0,a.Z)(k,2),w=j[0],y=j[1],N=w.get("page");(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,p.ap)(N);case 4:t=e.sent,s(t.results),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response,o.Am.error(n.data.message);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);var Z=(0,u.useCallback)((function(){y({page:Number(N)+1})}),[N,y]),P=(0,u.useCallback)((function(){N>1&&y({page:Number(N)-1})}),[N,y]);return(0,v.jsxs)(l.Z,{children:[(0,v.jsx)("h1",{className:m,children:"Trending today"}),_&&(0,v.jsx)(d.default,{}),n.length&&!_&&(0,v.jsx)(f.Z,{items:n}),n.length&&!_&&(0,v.jsx)(h.Z,{page:N,nextPage:Z,previousPage:P})]})}},50:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(8820),a=n(9983),s="Buttons_button__QG7Yg",i="Buttons_btnBox__XQz-f",u="Buttons_text__7kwX9",c=n(184),o=function(e){var t=e.page,n=e.previousPage,o=e.nextPage;return(0,c.jsxs)("div",{className:i,children:[t>1&&(0,c.jsx)("button",{className:s,type:"button",onClick:n,children:(0,c.jsx)(a.Pd.Provider,{value:{style:{width:"20px",height:"20px",fill:"#3498db"}},children:(0,c.jsx)(r.kyg,{})})}),(0,c.jsx)("p",{className:u,children:t}),(0,c.jsx)("button",{className:s,type:"button",onClick:o,children:(0,c.jsx)(a.Pd.Provider,{value:{style:{width:"20px",height:"20px",fill:"#3498db"}},children:(0,c.jsx)(r.mGl,{})})})]})}},3983:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(4691),a="loader_box__PwN30",s=n(184),i=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(r.s5,{strokeColor:"#3498db",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},3791:function(e,t,n){n.d(t,{Z:function(){return s}});var r="section_section__esffj",a=n(184);var s=function(e){var t=e.children;return(0,a.jsx)("section",{className:r,children:t})}},7671:function(e,t,n){n.d(t,{NV:function(){return f},Y5:function(){return l},_p:function(){return u},ap:function(){return o}});var r=n(5861),a=n(7757),s=n.n(a),i=n(1912),u="https://image.tmdb.org/t/p/w500",c=i.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b0b4fd1b10f37d2fc7069fdd28d61a74",language:"en-US"}}),o=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.get("trending/movie/day",{params:{page:t}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t).concat(n));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,a,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,n=i.length>1?i[1]:void 0,e.next=4,c.get("search/movie",{params:{page:t,query:n,sort_by:"popularity.desc"}});case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},5462:function(){}}]);
//# sourceMappingURL=714.826cfa55.chunk.js.map