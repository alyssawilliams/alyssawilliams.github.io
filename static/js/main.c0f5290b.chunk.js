(this["webpackJsonpreddit-feed"]=this["webpackJsonpreddit-feed"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),i=a.n(o),c=(a(16),a(10)),s=a(1),l=a(2),d=a(4),u=a(3),f=a(5);function m(e){return n.a.createElement("header",null,n.a.createElement("button",{className:"header-button feed-toggle active",id:"feed",onClick:e.toggleTab,value:"feed"},n.a.createElement("i",{className:"icon fab fa-reddit-alien"})," /r/",e.subreddit),n.a.createElement("button",{className:"header-button favorites-toggle",id:"favorites",onClick:e.toggleTab,value:"favorites"},n.a.createElement("i",{className:"icon fas fa-heart"})," favorites (",e.favoritesCount,")"))}var v=a(8),p=a.n(v);function h(e){return"https://www.reddit.com/".concat(e)}function g(e){return"/u/".concat(e).toLowerCase()}function E(e){return"".concat(e,"Add"===e?" to Favorites":" from Favorites")}var b=a(9),N=a.n(b);document.lazyLoadInstance||(document.lazyLoadInstance=new N.a(".lazy"));var k=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.lazyLoadInstance.update()}},{key:"componentDidUpdate",value:function(){document.lazyLoadInstance.update()}},{key:"render",value:function(){var e,t,a=this.props,r=a.id,o=a.title,i=a.permalink,c=a.author,s=a.upvotes,l=a.posted,d=a.handleFavorite,u=a.favoriteAction,f=a.isFavorited,m=a.image,v="Add"===u?"icon fas fa-heart":"fas fa-trash-alt",b=f?"favorite-button active":"favorite-button";return n.a.createElement("div",{className:"post",key:r,id:r},n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("button",{className:b,onClick:function(){return d(r)}},n.a.createElement("i",{className:v,role:"presentation","aria-label":E(u)})),n.a.createElement("img",{className:"image lazy","data-src":(t=m,t.replace(/&amp;/g,"&")),alt:"".concat(g(c),"'s makeup look")})),n.a.createElement("a",{className:"link",href:h(i),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h2",{className:"title"},o)),n.a.createElement("div",{className:"post-info"},n.a.createElement("span",{className:"group author"},n.a.createElement("i",{className:"icon fas fa-user"}),g(c)),n.a.createElement("span",{className:"group posted"},n.a.createElement("span",{className:"spacer"},"\u2022"),n.a.createElement("a",{className:"link",href:h(i),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon far fa-clock"}),(e=l,p()(new Date(1e3*e).toLocaleString()).fromNow()))),n.a.createElement("span",{className:"group upvotes"},n.a.createElement("span",{className:"spacer"},"\u2022"),n.a.createElement("i",{className:"icon fas fa-bolt"}),s)))}}]),t}(n.a.Component);function D(e){var t=e.favoritesData.map((function(e){return e.data.id})),a=e.feedData.map((function(a){var r=a.data,o=r.id,i=r.title,c=r.permalink,s=r.author,l=r.ups,d=r.created_utc,u=r.preview,f=t.some((function(e){return e===o}));return n.a.createElement(k,{key:o,id:o,title:i,permalink:c,author:s,upvotes:l,posted:d,image:u.images[0].resolutions[3].url,handleFavorite:e.handleFavorite,favoriteAction:e.favoriteAction,isFavorited:f})}));return n.a.createElement("main",{className:"reddit-feed-container feed"},n.a.createElement("div",null,n.a.createElement("h1",{className:"heading"},"Top posts"),a,n.a.createElement("div",null,n.a.createElement("span",{className:"fin"},"- fin -"))))}function y(e){var t=e.favoritesData.map((function(t){var a=t.data,r=a.id,o=a.title,i=a.permalink,c=a.author,s=a.ups,l=a.created_utc,d=a.preview;return n.a.createElement(k,{key:r,id:r,title:o,permalink:i,author:c,upvotes:s,posted:l,image:d.images[0].resolutions[3].url,handleFavorite:e.handleFavorite,favoriteAction:e.favoriteAction})}));return 0!==t.length?n.a.createElement("div",{className:"reddit-feed-container favorites"},n.a.createElement("div",null,n.a.createElement("h1",{className:"heading"},"Your favorites"),t)):n.a.createElement("div",{className:"reddit-feed-container favorites"},n.a.createElement("div",{className:"no-favorites"},n.a.createElement("p",null,"No favorites yet.")))}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).checkStorage=function(){var e=JSON.parse(localStorage.getItem("favoritesData"));JSON.parse(localStorage.getItem("favoritesData"))&&a.setState({favoritesData:e})},a.fetchData=function(){fetch("https://www.reddit.com/r/".concat(a.state.subreddit,"/top.json")).then((function(e){return e.json()})).then((function(e){var t=e.data.children.filter((function(e){return function(e){if(void 0!==e.data.preview&&void 0!==e.data.preview.images[0].resolutions[3])return e}(e)}));a.setState({feedData:t})})).catch(console.log)},a.toggleTab=function(e){var t=e.target.value;a.setState({active:t});var r=document.getElementsByClassName("header-button"),n=!0,o=!1,i=void 0;try{for(var c,s=r[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){c.value.classList.remove("active")}}catch(l){o=!0,i=l}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}document.getElementById(t).classList.add("active")},a.addFavorite=function(e){var t=a.state.feedData,r=a.state.favoritesData.some((function(t){return t.data.id===e})),n=t.find((function(t){return t.data.id===e}));r||a.setState({favoritesData:[].concat(Object(c.a)(a.state.favoritesData),[n])},a.storeFavorites)},a.removeFavorite=function(e){var t=a.state.favoritesData.filter((function(t){return t.data.id!==e}));a.setState({favoritesData:t},a.storeFavorites)},a.storeFavorites=function(){localStorage.setItem("favoritesData",JSON.stringify(a.state.favoritesData))},a.state={subreddit:"makeupaddiction",active:"feed",feedData:[],favoritesData:[]},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.checkStorage(),this.fetchData()}},{key:"render",value:function(){var e=this.state,t=e.subreddit,a=e.active,r=e.feedData,o=e.favoritesData,i=this.toggleTab,c=this.addFavorite,s=this.removeFavorite;return n.a.createElement("div",{className:"app reddit-feed"},n.a.createElement(m,{subreddit:t,toggleTab:i,favoritesCount:o.length}),"feed"===a?n.a.createElement(D,{feedData:r,favoritesData:o,handleFavorite:c,favoriteAction:"Add"}):"favorites"===a?n.a.createElement(y,{favoritesData:o,handleFavorite:s,favoriteAction:"Remove"}):null)}}]),t}(n.a.Component);i.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c0f5290b.chunk.js.map