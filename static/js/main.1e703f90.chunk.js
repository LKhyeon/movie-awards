(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),s=n(8),r=n.n(s),c=(n(14),n(9)),o=n(3),h=n(4),l=n(1),u=n(6),d=n(5),j=(n(15),n(0)),b=function(e){var t=e.eventHandler;return Object(j.jsxs)("div",{className:"Search",children:[Object(j.jsx)("p",{children:" MOVIE TITLE "}),Object(j.jsx)("input",{placeholder:"Search a movie",onChange:t})]})},v=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={entries:[]},i.fetchData=i.fetchData.bind(Object(l.a)(i)),i.populateList=i.populateList.bind(Object(l.a)(i)),i.compareArrays=i.compareArrays.bind(Object(l.a)(i)),i}return Object(h.a)(n,[{key:"compareArrays",value:function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)for(var i=0;i<t.length;i++)if(e[n].Title!==t[n].Title)return!1;return!0}},{key:"fetchData",value:function(e){var t=this;""!==e?fetch("https://www.omdbapi.com/?s="+e+"&apikey=39dd2421").then((function(e){if(200===e.status)return e.json()})).then((function(e){var n="undefined"!==typeof e.Search?e.Search:[];t.compareArrays(t.state.entries,n)||t.setState({entries:n})})).catch((function(e){console.log(e)})):this.state.entries.length>0&&this.setState({entries:[]})}},{key:"populateList",value:function(){this.fetchData(this.props.keyWord);for(var e=[],t=0;t<this.state.entries.length;t++){var n="".concat(this.state.entries[t].Title," (").concat(this.state.entries[t].Year,")");e.push(Object(j.jsxs)("div",{children:[n,Object(j.jsx)("button",{movie:n,className:"Nominate",onClick:this.props.eventHandler,children:"Nominate"})]},this.props.keyWord+t.toString()))}return e}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"MovieList",children:[Object(j.jsx)("p",{className:"KeyWord",children:""===this.props.keyWord?"Please type a movie title":'Results for "'+this.props.keyWord+'"'}),Object(j.jsx)("div",{children:this.populateList()})]})}}]),n}(i.Component)),p=(n(18),function(e){var t=e.entry;return Object(j.jsxs)("div",{className:"Nomination",children:[Object(j.jsx)("p",{className:"KeyWord",children:"Nominations"}),Object(j.jsx)("div",{children:function(){for(var e=[],n=0;n<t.length;n++)e.push(Object(j.jsxs)("div",{children:[t[n],Object(j.jsx)("button",{movie:t[n],className:"Remove",children:"Remove"})]},t[n]+n.toString()));return e}()})]})}),f=(n(19),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).nominateMovie=function(e){i.setState({nominations:[].concat(Object(c.a)(i.state.nominations),[e.target.getAttribute("movie")])})},i.changeKey=function(e){i.setState({keyWord:e.target.value})},i.state={keyWord:"",nominations:[]},i.changeKey=i.changeKey.bind(Object(l.a)(i)),i.nominateMovie=i.nominateMovie.bind(Object(l.a)(i)),i}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("h1",{children:"The Shoppies"})}),Object(j.jsx)(b,{eventHandler:this.changeKey}),Object(j.jsxs)("div",{className:"Container",children:[Object(j.jsx)(v,{keyWord:this.state.keyWord,eventHandler:this.nominateMovie}),Object(j.jsx)(p,{entry:this.state.nominations})]})]})}}]),n}(i.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),m()}],[[20,1,2]]]);
//# sourceMappingURL=main.1e703f90.chunk.js.map