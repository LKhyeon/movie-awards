(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(8),c=n.n(i),r=(n(13),n(3)),o=n(4),h=n(2),d=n(6),u=n(5),l=(n(14),n(0)),j=function(e){var t=e.eventHandler;return Object(l.jsxs)("div",{className:"Search",children:[Object(l.jsx)("p",{children:" MOVIE TITLE "}),Object(l.jsx)("input",{placeholder:"Search a movie",onKeyPress:t})]})},p=(n(16),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={entries:[]},s.fetchData=s.fetchData.bind(Object(h.a)(s)),s.populateList=s.populateList.bind(Object(h.a)(s)),s}return Object(o.a)(n,[{key:"fetchData",value:function(e){var t=this;""!==e&&fetch("https://www.omdbapi.com/?s="+e+"&apikey=39dd2421").then((function(e){if(200===e.status)return e.json()})).then((function(e){var n="undefined"===typeof e.Search?[]:e.Search;t.state.entries!==n&&t.setState({entries:n})})).catch((function(e){console.log(e)}))}},{key:"populateList",value:function(){this.fetchData(this.props.keyWord);for(var e=[],t=0;t<this.state.entries.length;t++)e.push(Object(l.jsxs)("div",{children:[this.state.entries[t].Title," (",this.state.entries[t].Year,")"]},this.props.keyWord+t.toString()));return e}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"MovieList",children:[Object(l.jsx)("p",{className:"KeyWord",children:""===this.props.keyWord?"Please type a movie title":'Results for "'+this.props.keyWord+'"'}),Object(l.jsx)("div",{children:this.populateList()})]})}}]),n}(s.Component)),b=(n(17),function(e){e.entries;return Object(l.jsx)("div",{className:"Nomination",children:Object(l.jsx)("p",{className:"KeyWord",children:"Nominations"})})}),f=(n(18),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).changeKey=function(e){"Enter"===e.key&&(console.log(e.target.value),s.setState({keyWord:e.target.value}))},s.state={keyWord:"",nominations:[]},s.changeKey=s.changeKey.bind(Object(h.a)(s)),s}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"The Shoppies"})}),Object(l.jsx)(j,{eventHandler:this.changeKey}),Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsx)(p,{keyWord:this.state.keyWord}),Object(l.jsx)(b,{entry:this.state.nominations})]})]})}}]),n}(s.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}],[[19,1,2]]]);
//# sourceMappingURL=main.6eaa4a47.chunk.js.map