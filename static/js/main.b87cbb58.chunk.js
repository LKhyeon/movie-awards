(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(8),i=n.n(s),c=(n(13),n(3)),o=n(4),h=n(2),u=n(6),l=n(5),d=(n(14),n(0)),j=function(e){var t=e.eventHandler;return Object(d.jsxs)("div",{className:"Search",children:[Object(d.jsx)("p",{children:" MOVIE TITLE "}),Object(d.jsx)("input",{placeholder:"Search a movie",onKeyPress:t})]})},p=(n(16),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={entries:[]},r.fetchData=r.fetchData.bind(Object(h.a)(r)),r.populateList=r.populateList.bind(Object(h.a)(r)),r.compareArrays=r.compareArrays.bind(Object(h.a)(r)),r}return Object(o.a)(n,[{key:"compareArrays",value:function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)for(var r=0;r<t.length;r++)if(e[n].Title!==t[n].Title)return!1;return!0}},{key:"fetchData",value:function(e){var t=this;""!==e&&fetch("https://www.omdbapi.com/?s="+e+"&apikey=39dd2421").then((function(e){if(200===e.status)return e.json()})).then((function(e){var n=e.Search;"undefined"===typeof n||t.compareArrays(t.state.entries,n)||t.setState({entries:n})})).catch((function(e){console.log(e)}))}},{key:"populateList",value:function(){this.fetchData(this.props.keyWord);for(var e=[],t=0;t<this.state.entries.length;t++)e.push(Object(d.jsxs)("div",{children:[this.state.entries[t].Title," (",this.state.entries[t].Year,")"]},this.props.keyWord+t.toString()));return e}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"MovieList",children:[Object(d.jsx)("p",{className:"KeyWord",children:""===this.props.keyWord?"Please type a movie title":'Results for "'+this.props.keyWord+'"'}),Object(d.jsx)("div",{children:this.populateList()})]})}}]),n}(r.Component)),b=(n(17),function(e){e.entries;return Object(d.jsx)("div",{className:"Nomination",children:Object(d.jsx)("p",{className:"KeyWord",children:"Nominations"})})}),f=(n(18),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).changeKey=function(e){"Enter"===e.key&&r.setState({keyWord:e.target.value})},r.state={keyWord:"",nominations:[]},r.changeKey=r.changeKey.bind(Object(h.a)(r)),r}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:"The Shoppies"})}),Object(d.jsx)(j,{eventHandler:this.changeKey}),Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)(p,{keyWord:this.state.keyWord}),Object(d.jsx)(b,{entry:this.state.nominations})]})]})}}]),n}(r.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),v()}],[[19,1,2]]]);
//# sourceMappingURL=main.b87cbb58.chunk.js.map