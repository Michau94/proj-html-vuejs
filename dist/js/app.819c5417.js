(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"15ee":function(t,e,i){"use strict";i("df1d")},"1c4d":function(t,e,i){"use strict";i("fab7")},"1d6d":function(t,e,i){t.exports=i.p+"img/blog-post-92486644-400x241.3fc718b4.jpg"},2269:function(t,e,i){},2593:function(t,e,i){t.exports=i.p+"img/home-logo9-219096700-320x202.cdfe3807.png"},"2bd6":function(t,e,i){t.exports=i.p+"img/home-testimonial-113165296.774476d4.jpg"},3613:function(t,e,i){"use strict";i("5556")},"41bc":function(t,e,i){"use strict";i("eac5")},5440:function(t,e,i){t.exports=i.p+"img/En2TRxLW4AEiWUN.c492e059.jpeg"},"552c":function(t,e,i){t.exports=i.p+"img/home-logo1-219096700-320x202.6932017a.png"},5556:function(t,e,i){},"565f":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("Main"),i("Footer"),i("Credits")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row h-100"},[s("div",{staticClass:"col-6"},[s("figure",{staticClass:"h-100 d-flex align-items-center"},[s("img",{staticClass:"img-fluid",attrs:{src:i("e97a"),alt:"Logo"}})])]),s("div",{staticClass:"col-6 d-flex align-items-center justify-content-end"},[s("nav",{staticClass:"d-flex"},[s("ul",{staticClass:"d-flex align-items-center"},t._l(t.links,(function(e,i){return s("li",{key:e.id,staticClass:"mx-4 d-flex align-items-center",on:{click:function(e){return t.currentLink(i)}}},[s("a",{class:{active:e.selected},attrs:{href:e.path}},[t._v(t._s(e.title))]),s("span",{staticClass:"arrow-down",class:{active:e.selected}})])})),0),s("div",{staticClass:"d-flex align-items-center"},[s("Button",{attrs:{text:"Get Quote",buttonType:"basic"}})],1)])])])])])},c=[],o=(i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"mx-2 btn",class:t.buttonType,attrs:{type:"button"}},[t._v(t._s(t.text))])}),l=[],u={name:"Button",props:["buttonType","text"]},d=u,f=(i("e9db"),i("2877")),m=Object(f["a"])(d,o,l,!1,null,"7f74d592",null),p=m.exports,v={name:"Header",components:{Button:p},data:function(){return{links:[{id:1,title:"Home",path:"#",selected:!0},{id:2,title:"About",path:"#",selected:!1},{id:3,title:"Services",path:"#",selected:!1},{id:4,title:"Work",path:"#",selected:!1},{id:5,title:"Articles",path:"#",selected:!1}]}},methods:{currentLink:function(t){this.links.forEach((function(e,i){e.selected=i==t}))}}},C=v,g=(i("15ee"),Object(f["a"])(C,r,c,!1,null,"eef8a556",null)),x=g.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Banner"),s("Slogan",{attrs:{text:"Do you have a construction project we can help with?"}}),s("section",{attrs:{id:"specialist"}},[s("Heading",{attrs:{title:"Specialists in modern construction",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet\n          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique\n          "}}),s("div",{staticClass:"cards d-flex justify-content-evenly py-5 container"},t._l(t.specialistData,(function(e){return s("Card",{key:e.id,attrs:{cardType:"alternative",title:e.title,text:e.text,icon:e.icon}},[s("div",{staticClass:"w-100 h-100 overflow-auto cardHover"},[s("div",{staticClass:"text-light d-flex flex-column align-items-center w-100"},[s("div",{staticClass:"text-dark"},[s("h6",{staticClass:"my-4"},[t._v("Artfully Crafted")]),s("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing")]),s("Button",{attrs:{text:"Get a Quote",buttonType:"light"}})],1)])])])})),1)],1),s("section",{staticClass:"background",attrs:{id:"banner"}},[s("div",{staticClass:"cards h-100 d-flex justify-content-evenly align-items-center"},t._l(t.bannerData,(function(t){return s("Card",{key:t.id,attrs:{title:t.title,text:t.text,cardType:"basic",icon:t.icon}})})),1)]),s("section",{attrs:{id:"projects"}},[s("Heading",{attrs:{title:"Explore Recent Work",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet dicta ipsam beatae earum aut. Corporis consequatur dolorum similique facilis veritatis nostrum non"}}),s("div",{staticClass:"d-flex align-items-center justify-content-evenly col-6 container"},[s("ProjectCard",{attrs:{prj:"prj1"}}),s("ProjectCard",{attrs:{prj:"prj2"}}),s("ProjectCard",{attrs:{prj:"prj3"}})],1),s("Showmore",{attrs:{text:"View All Projects"}})],1),s("section",{attrs:{id:"values"}},[s("Heading",{attrs:{title:"Our Core Values",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet\n          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique\n          facilis veritatis nostrum non repudiandae, ratione vero libero nihil\n          debitis?"}}),s("div",{staticClass:"cards d-flex justify-content-evenly py-5 container"},t._l(t.valuesData,(function(t){return s("ValuesCard",{key:t.id,attrs:{title:t.title,text:t.text,icon:t.icon}})})),1)],1),s("section",{staticClass:"background2 text-light d-flex flex-column align-items-center pt-3",attrs:{id:"testimonial"}},[s("Heading",{attrs:{title:"Our Home Owners Say"}}),t._m(0),s("p",{staticClass:"text-italic p-3"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ducimus earum debitis adipisci nostrum exercitationem in neque, assumenda ipsum, quas provident dolor eius quasi. Dolore modi accusamus blanditiis ut aliquid. ")]),s("h6",{staticClass:"text-uppercase"},[t._v("Harry Smith - New Home Owner")]),t._m(1)],1),s("section",{attrs:{id:"news"}},[s("Heading",{attrs:{title:"Latest News",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet\n          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique\n          facilis veritatis nostrum non repudiandae, ratione vero libero nihil\n          debitis?\n          "}}),s("div",{staticClass:"d-flex justify-content-evenly col-12 container"},[s("News",{attrs:{title:"Redeveloping Florida's Remote Southern Coast",text:"Corporis consequatur dolorum similique\n            facilis veritatis nostrum non repudiandae, ratione vero libero\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet\n          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique\n          facilis veritatis nostrum non repudiandae, ratione vero libero nihil\n          debitis?"}},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:i("61bf"),alt:"post-1"}})])]),s("News",{attrs:{title:"How We Manage Large Construction Projects",text:"Corporis consequatur dolorum similique\n            facilis veritatis nostrum non repudiandae, ratione vero libero\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet\n          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique\n          facilis veritatis nostrum non repudiandae, ratione vero libero nihil\n          debitis?"}},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:i("1d6d"),alt:"post-1"}})])]),s("News",{attrs:{title:"Future proofing a modern home",text:"Corporis consequatur dolorum similique\n            facilis veritatis nostrum non repudiandae, ratione vero libero\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet\n          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique\n          facilis veritatis nostrum non repudiandae, ratione vero libero nihil\n          debitis?"}},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:i("e946"),alt:"post-1"}})])])],1),s("Showmore",{attrs:{text:"View More Articles"}})],1),s("section",{attrs:{id:"partners"}},[s("Heading",{attrs:{title:"Trusted Partners",text:" Corporis consequatur dolorum similique\n          facilis veritatis nostrum non repudiandae, ratione vero libero nihil\n          debitis?"}}),t._m(2)],1),s("section",{staticClass:"background3",attrs:{id:"prefooter"}},[s("div",{staticClass:"d-flex align-items-center h-100"},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"content"},[s("Heading",{attrs:{mod:"light",title:"Building Inspiring Spaces",text:"Lorem\n          ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet\n          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique\n          facilis veritatis nostrum non repudiandae, ratione vero libero nihil\n          debitis?"}})],1)]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"h-100 align-items-center"},[s("Button",{attrs:{buttonType:"basic",text:"Get a Free Quote Today!"}}),s("div",{staticClass:"text-light"},[t._v("Only takes a few seconds!")])],1)])])])],1)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("figure",[s("img",{staticClass:"rounded-circle img-fluid",attrs:{src:i("2bd6"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider p-3 m-5"},[i("i",{staticClass:"fas fa-circle px-1"}),i("i",{staticClass:"far fa-circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-evenly col-12 container"},[s("figure",{staticClass:"col-2"},[s("img",{staticClass:"h-50",attrs:{src:i("5ce9"),alt:""}})]),s("figure",{staticClass:"col-2"},[s("img",{staticClass:"h-50",attrs:{src:i("eafc"),alt:""}})]),s("figure",{staticClass:"col-2"},[s("img",{staticClass:"h-50",attrs:{src:i("552c"),alt:""}})]),s("figure",{staticClass:"col-2"},[s("img",{staticClass:"h-50",attrs:{src:i("8d65"),alt:""}})]),s("figure",{staticClass:"col-2"},[s("img",{staticClass:"h-50",attrs:{src:i("2593"),alt:""}})])])}],A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"\n    presentation-banner\n    d-flex\n    justify-content-center\n    align-items-center\n    text-center\n  "},[i("div",{staticClass:"message"},[i("h1",{staticClass:"text-light"},[t._v("BUILDING INPIRING SPACES")]),i("h5",{staticClass:"subtitle"},[t._v(" We build inspiring Residential & Commericial Spaces ")]),i("div",[i("Button",{attrs:{text:"Explore Recent Work",buttonType:"alternative"}}),i("Button",{attrs:{text:"Get a Quote Today",buttonType:"basic"}})],1)])])},j=[],_={name:"Banner",components:{Button:p}},y=_,w=(i("41bc"),Object(f["a"])(y,A,j,!1,null,"290e8d38",null)),M=w.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"question d-flex justify-content-center align-items-center"},[i("h4",[t._v(t._s(t.text))]),i("Button",{attrs:{text:"Get a Quote Today",buttonType:"light"}})],1)},z=[],T={name:"Slogan",props:["text"],components:{Button:p}},D=T,B=(i("ea18"),Object(f["a"])(D,E,z,!1,null,"121bf6ed",null)),L=B.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"content p-3 my-4 d-flex flex-column align-items-center",class:t.mod},[i("h5",[t._v(t._s(t.title))]),i("div",{staticClass:"separator my-3"}),i("p",{staticClass:"w-75"},[t._v(" "+t._s(t.text)+" ")])])])])])},O=[],R={name:"Heading",props:["title","text","mod"]},P=R,Y=(i("90d6"),Object(f["a"])(P,q,O,!1,null,"b4af9866",null)),N=Y.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card d-flex wrapper",class:t.cardType},[i("div",{staticClass:"icon"},[i("i",{class:t.icon})]),i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"description"},[t._v(t._s(t.text))]),i("div",{staticClass:"content"},[t._t("default")],2)])},S=[],H={name:"Card",props:["title","text","cardType","icon"]},k=H,Q=(i("b035"),Object(f["a"])(k,I,S,!1,null,"ec4c12c0",null)),U=Q.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"project",class:t.prj},[t._m(0)])])},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-card py-2"},[i("i",{staticClass:"fas fa-link p-3 m-2 bg-secondary rounded-circle"}),i("i",{staticClass:"fas fa-search p-3 m-2 bg-secondary rounded-circle"}),i("h5",[t._v("Florida Health Facility")]),i("span",[t._v("Commercial")])])}],W={name:"ProjectCard",props:["prj"]},X=W,F=(i("8f2c"),Object(f["a"])(X,G,Z,!1,null,"2f5b9152",null)),J=F.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card d-flex wrapper standard"},[i("div",{staticClass:"icon"},[i("i",{class:t.icon})]),i("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._m(0),i("div",{staticClass:"description"},[t._v(t._s(t.text))]),i("div",{staticClass:"content"},[t._t("hover")],2)])])},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex justify-content-center"},[i("hr",{staticClass:"w-25"})])}],$={name:"ValuesCard",props:["title","text","icon"]},tt=$,et=(i("bd5c"),Object(f["a"])(tt,K,V,!1,null,"134c759c",null)),it=et.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card post"},[i("div",{staticClass:"wrapper"},[t._m(0),t._t("default")],2),i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("Separator",[i("time",[t._v("September 20, 2021")])]),i("div",{staticClass:"description"},[t._v(t._s(t.text))]),i("div",{staticClass:"content"},[t._t("hover")],2)],1)},at=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content d-flex align-items-center"},[i("div",{staticClass:"sub-card py-2"},[i("i",{staticClass:"fas fa-link p-3 m-2 bg-secondary rounded-circle"}),i("i",{staticClass:"fas fa-search p-3 m-2 bg-secondary rounded-circle"}),i("h5",[t._v("Redeveloping Florida Remote Southern Coast")]),i("span",[t._v("Architecture Buildings News")])])])}],nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default"),i("hr")],2)},rt=[],ct={name:"Separator"},ot=ct,lt=(i("3613"),Object(f["a"])(ot,nt,rt,!1,null,"19ead805",null)),ut=lt.exports,dt={name:"News",props:["title","text"],components:{Separator:ut}},ft=dt,mt=(i("efbd"),Object(f["a"])(ft,st,at,!1,null,"62531ed6",null)),pt=mt.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"d-flex justify-content-center align-items-center col-12 py-5"},[i("div",{staticClass:"line"}),i("h5",{staticClass:"px-5"},[t._v(t._s(t.text))]),i("div",{staticClass:"line"})])])},Ct=[],gt={Name:"Showmore",props:["text"]},xt=gt,bt=(i("b8bc"),Object(f["a"])(xt,vt,Ct,!1,null,"26b23e99",null)),ht=bt.exports,At=[{id:1,title:"Buildings",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nis",icon:"fas fa-building fa-2x m-3"},{id:2,title:"Renovate",text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi",icon:"fas fa-sync-alt fa-2x m-3"},{id:3,title:"Construct",text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nis",icon:"fas fa-home fa-2x m-3"},{id:4,title:"Exclusive",text:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nis",icon:"fas fa-truck fa-2x m-3"}],jt=[{id:1,title:"147",text:"Buildings",icon:"fas fa-suitcase fa-5x"},{id:2,title:"896",text:"Completed Projects",icon:"far fa-building fa-5x"},{id:3,title:"172",text:"Trained Professionals",icon:"fas fa-users fa-5x"},{id:4,title:"19",text:"International Offices",icon:"fas fa-globe fa-5x"}],_t=[{id:1,title:"Great Services",text:"Corporis consequatur dolorum similique facilis veritatis nostrum",icon:"first fas fa-home fa-3x"},{id:2,title:"Highest Standards",text:"Corporis consequatur dolorum similique facilis veritatis nostrum",icon:"second fas fa-cog fa-3x"},{id:3,title:"Professional Team",text:"Corporis consequatur dolorum similique facilis veritatis nostrum",icon:"fas third fa-users fa-3x"},{id:4,title:"Creative Solutions",text:"Corporis consequatur dolorum similiquefacilis veritatis nostrum",icon:"fourth fas fa-lightbulb fa-3x"}],yt={name:"Main",components:{Banner:M,Slogan:L,Heading:N,ProjectCard:J,ValuesCard:it,News:pt,Card:U,Showmore:ht,Button:p},data:function(){return{specialistData:At,bannerData:jt,valuesData:_t}}},wt=yt,Mt=(i("f70a"),Object(f["a"])(wt,b,h,!1,null,"34bdee3c",null)),Et=Mt.exports,zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"wrapper h-100 d-flex align-items-center py-3"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-3",attrs:{id:"about"}},[i("div",{staticClass:"content text-start mx-3"},[t._m(0),i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim doloremque laudantium minus repudiandae non vero a repellat cupiditate tempora, quaerat minima alias id, animi optio, deleniti et vel fuga eos. ")]),i("Button",{attrs:{text:"Get a Free Quote Today!"}})],1)]),t._m(1),t._m(2),t._m(3)])])])])},Tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("figure",[s("img",{attrs:{src:i("8bef"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3",attrs:{id:"social"}},[s("div",{staticClass:"content mx-3"},[s("h4",{staticClass:"text-bold text-start"},[t._v("Last Tweets")]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"d-flex text-light"},[s("figure",{staticClass:"d-flex align-items-center justify-content-center"},[s("img",{staticClass:"h-50",attrs:{src:i("ffec"),alt:"logo"}})]),s("div",[s("div",{staticClass:"text-bold"},[t._v("Theme Fusion")]),s("div",{staticClass:"text-secondary"},[t._v("@ThemeFusion")])])]),s("div",[s("i",{staticClass:"fab fa-twitter"})])]),s("p",{staticClass:"text-start text-light offset-2"},[t._v(" Lorem ipsum dolor sit ametconsectetur "),s("a",{attrs:{href:"#"}},[t._v("#consectetur")]),t._v(" adipisicing elit. A modi illo, veritatis quaerat ")]),s("figure",{staticClass:"col-12"},[s("img",{staticClass:"img-fluid",attrs:{src:i("5440"),alt:""}})]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"icons"},[s("i",{staticClass:"far fa-heart mx-1"}),s("i",{staticClass:"fas fa-sign-out-alt"})]),s("span",[t._v("22h")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-3",attrs:{id:"contact"}},[i("div",{staticClass:"content mx-3"},[i("h4",{staticClass:"text-bold text-start"},[t._v("Contact Us Today")]),i("ul",{staticClass:"w-100"},[i("li",[i("i",{staticClass:"fas fa-globe"}),t._v("Corporate Location 1600 Amphitheatre Parkway London W4RT ")]),i("li",[i("i",{staticClass:"fas fa-home"}),t._v("REsidential Location 9521 Broadberry Avenue Paddigton RC7 9ZA ")]),i("li",[i("i",{staticClass:"fas fa-phone"}),t._v("1.800.458.556/18000.532.2112 ")]),i("li",[i("i",{staticClass:"far fa-envelope"}),t._v("info#yourdomain.miao")]),i("li",[i("i",{staticClass:"far fa-clock"}),t._v("Monday - Friday: 9:00AM - 6:00PM ")]),i("li",[i("i",{staticClass:"far fa-clock"}),t._v("Saturday - Sunday: 09:00 AM - 12:00AM ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("h4",{staticClass:"text-bold text-start"},[t._v("Find us")]),s("figure",[s("img",{staticClass:"img-fluid",attrs:{src:i("c1ac"),alt:"position"}})])])}],Dt={name:"Footer",components:{Button:p}},Bt=Dt,Lt=(i("1c4d"),Object(f["a"])(Bt,zt,Tt,!1,null,"153abc64",null)),qt=Lt.exports,Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"credits d-flex align-items-center"},[i("div",{staticClass:"text-secondary col-12"},[i("div",{staticClass:"content d-flex col-12"},[i("div",{staticClass:"col-6"},[i("span",{staticClass:"copyright"},[t._v(" Copyright 2021 - 2022 AVANDA THEME BY THEME FUSION | ALL RIGHTS RESERVED | POWERED BY MICHAU ")])]),i("div",{staticClass:"text-end col-6"},[i("i",{staticClass:"fab fa-twitter mx-3"}),i("i",{staticClass:"fab fa-facebook mx-3"}),i("i",{staticClass:"fab fa-youtube mx-3"}),i("i",{staticClass:"fab fa-instagram mx-3"})])])])])}],Pt={name:"Credits"},Yt=Pt,Nt=(i("b32e"),Object(f["a"])(Yt,Ot,Rt,!1,null,"3c93c03e",null)),It=Nt.exports,St={name:"App",components:{Header:x,Main:Et,Footer:qt,Credits:It}},Ht=St,kt=(i("5c0b"),Object(f["a"])(Ht,a,n,!1,null,null,null)),Qt=kt.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Qt)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"5ce9":function(t,e,i){t.exports=i.p+"img/home-logo11-219096700-320x202.d9231a82.png"},"61bf":function(t,e,i){t.exports=i.p+"img/blog-post-134132600-400x241.bd02c08c.jpg"},6430:function(t,e,i){},"75e8":function(t,e,i){},"8bef":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAABOCAMAAADl0lFOAAAAjVBMVEUAAAD/////////////////////////////////////////////////////////zz/////80T380T3/////zz/90D790T780T3/zz/70jz90D790T390T37zz/80T390D780T3///////////////////////////////////////////////////////9zTCJ3AAAAL3RSTlMAUBCf/0Awz2DvjyC/gHAwr2Dv3xCf/88gUI+Av0Bwr99mM1XuzLt3ESKZ3YhEqmL97mAAAAQESURBVHgB7JgFagRRFAT/zI679rrc/5KRv/qWKJ4ihTdaUFi7XxI4OuEiciziG+5MkkY0x+iG82R5RHcsogjuWKYR3THII7pjEUV0xzTiO0b/jjDHiu9YO7pjHju6YxU6HOhOzzS208CPrQMRdkYxLf3aD45DMhrFwo/TLNE7XUqidypJzE4X53WWOI5ZbjrN/LhaiuMYLmyniV/XgziOSWo7Df260Q12p2fYnZ5BdrqVOI5BbhQbP047gRwLYzieO90P4jiWttPug07PsDs9w+70DKrTg8RxjPMPLo3pKJBj/dH11p4EcmyMYmU7hTjWH3eKdPy40932iXn3TP83HE2nvR7YvrZjZmuMmzAY9cV5hO47NiAMgfd/vDZYLh00+8RfJ/NFN4j8lsSJ5Y358N9VsIc8AePYevtiRges/4wb+P7DBmEI3egWJWnMDsjFjLr1pp+KX8YYgXx3Cmz3MYMbwmAEijILUK5j1K03Rfhyxh3Ap77wjpR0egrKKHIrUI55AahXMWqfPo4xQwQ5oPzRovm/gjLe6YPOXZfaVYzapw9jTJ6ya+PF3qwN1klQxmWDqAfuBfarGLVPH8UoIEuAep7BBGEWTkYdV2jLDeQiRt3SeBhjPx2ijechOZBZmBgzuDuov4ZRCR/GuEGodeNovBu4BskIyrj2Xk1ArbWAuwbywYyR00QZIFtBGWOfCafFZ2DcUdPGCwDVCoCI6LOjDG19AsYM0h1tPAcUI7z5DuAgnsH562dM/nwACIT7D4BYQRmDpKNhXZdWIH2djM9kL8YX44vxxfhi/AJ7Mb4YX4wueuJtP/xWKM0dwrl5o6+ntfljZ044Tf59ybsl+5U5UpsQUyzCqqHx4YwpcBYffjhX3EZZp5pPlhHwu2EcqS3jXCyCX69iDOCzRMjdp0kGgq4UOcsmIEv25KWKCCAidXx0kQ3jSG1ClrlYVNgrGEVTu9b9/l+u/mQDv2rZCvQD10ExnB38zCgjtQkxxSJAvIYxwjZ8XHcchF7OQ0jjPBbZu24Z+zAxjtQ2xBSL4CFfwghYXz2IGbKWFQCCeyujQJsZAVPKqgN5A9z/wJgCOC1bGwC3ecFq25cyLg6o1/SqM74bl8bq8ces79U1YLeM4J1OkunGD/dqPBiXDP4CRqeXvoR0+ncunDIuAn3cTwrqvGCRAuvYtlsE4hupLeNcLMIRf9GzgxALNPvs6OUafcxQbtLAJ7vgs51dT9AAN6U2IebZoc/MK98B/DZ8YhqMqfRRvGrubQsu+nvmsDylNiFzsXiIq/8w4/e/T/bHBxh7L0GQZN/ltNyqrBLBt2ovLm35pC98/SCT2oSYd7k+1g8zWluez75JxhfjT79+yJ4Q6m8/fxM7MBvTCwAAAABJRU5ErkJggg=="},"8d65":function(t,e,i){t.exports=i.p+"img/home-logo2-219096700-320x202.c3f07795.png"},"8f2c":function(t,e,i){"use strict";i("565f")},"90d6":function(t,e,i){"use strict";i("aad9")},"9b42":function(t,e,i){},"9c0c":function(t,e,i){},aad9:function(t,e,i){},aba9:function(t,e,i){},b035:function(t,e,i){"use strict";i("9b42")},b32e:function(t,e,i){"use strict";i("d89c")},b8bc:function(t,e,i){"use strict";i("ea77")},bd5c:function(t,e,i){"use strict";i("2269")},c1ac:function(t,e,i){t.exports=i.p+"img/construction_map_pin.561256a0.png"},d89c:function(t,e,i){},df1d:function(t,e,i){},e946:function(t,e,i){t.exports=i.p+"img/blog-post-332773904-400x241.47cd4371.jpg"},e97a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAABOCAMAAADl0lFOAAAAjVBMVEUAAAAzMzMvLy8zMzM0NDMzMzM1NTUzMzI1NTI0NDMzMzM3Ny80NDIzMzM0NDL/zz80NDP80T380T0zMzP/zz/90D790T780T3/zz/70jz90D790T390T37zz/80T390D780T00NDIyMjIzMzM0NDM0NDMzMzIzMzMtLS00NDQzMzMzMzI0NDI0NDQ0NDNvzz4wAAAAL3RSTlMAUBCf/0Awz2DvjyC/gHAwr2Dv3xCf/88gUI+Av0Bwr99mM1XuzLt3ESKZ3YhEqmL97mAAAAQESURBVHgB7JgFagRRFAT/zI679rrc/5KRv/qWKJ4ihTdaUFi7XxI4OuEiciziG+5MkkY0x+iG82R5RHcsogjuWKYR3THII7pjEUV0xzTiO0b/jjDHiu9YO7pjHju6YxU6HOhOzzS208CPrQMRdkYxLf3aD45DMhrFwo/TLNE7XUqidypJzE4X53WWOI5ZbjrN/LhaiuMYLmyniV/XgziOSWo7Df260Q12p2fYnZ5BdrqVOI5BbhQbP047gRwLYzieO90P4jiWttPug07PsDs9w+70DKrTg8RxjPMPLo3pKJBj/dH11p4EcmyMYmU7hTjWH3eKdPy40932iXn3TP83HE2nvR7YvrZjZmuMmzAY9cV5hO47NiAMgfd/vDZYLh00+8RfJ/NFN4j8lsSJ5Y358N9VsIc8AePYevtiRges/4wb+P7DBmEI3egWJWnMDsjFjLr1pp+KX8YYgXx3Cmz3MYMbwmAEijILUK5j1K03Rfhyxh3Ap77wjpR0egrKKHIrUI55AahXMWqfPo4xQwQ5oPzRovm/gjLe6YPOXZfaVYzapw9jTJ6ya+PF3qwN1klQxmWDqAfuBfarGLVPH8UoIEuAep7BBGEWTkYdV2jLDeQiRt3SeBhjPx2ijechOZBZmBgzuDuov4ZRCR/GuEGodeNovBu4BskIyrj2Xk1ArbWAuwbywYyR00QZIFtBGWOfCafFZ2DcUdPGCwDVCoCI6LOjDG19AsYM0h1tPAcUI7z5DuAgnsH562dM/nwACIT7D4BYQRmDpKNhXZdWIH2djM9kL8YX44vxxfhi/AJ7Mb4YX4wueuJtP/xWKM0dwrl5o6+ntfljZ044Tf59ybsl+5U5UpsQUyzCqqHx4YwpcBYffjhX3EZZp5pPlhHwu2EcqS3jXCyCX69iDOCzRMjdp0kGgq4UOcsmIEv25KWKCCAidXx0kQ3jSG1ClrlYVNgrGEVTu9b9/l+u/mQDv2rZCvQD10ExnB38zCgjtQkxxSJAvIYxwjZ8XHcchF7OQ0jjPBbZu24Z+zAxjtQ2xBSL4CFfwghYXz2IGbKWFQCCeyujQJsZAVPKqgN5A9z/wJgCOC1bGwC3ecFq25cyLg6o1/SqM74bl8bq8ces79U1YLeM4J1OkunGD/dqPBiXDP4CRqeXvoR0+ncunDIuAn3cTwrqvGCRAuvYtlsE4hupLeNcLMIRf9GzgxALNPvs6OUafcxQbtLAJ7vgs51dT9AAN6U2IebZoc/MK98B/DZ8YhqMqfRRvGrubQsu+nvmsDylNiFzsXiIq/8w4/e/T/bHBxh7L0GQZN/ltNyqrBLBt2ovLm35pC98/SCT2oSYd7k+1g8zWluez75JxhfjT79+yJ4Q6m8/fxM7MBvTCwAAAABJRU5ErkJggg=="},e9db:function(t,e,i){"use strict";i("75e8")},ea18:function(t,e,i){"use strict";i("f961")},ea77:function(t,e,i){},eac5:function(t,e,i){},eafc:function(t,e,i){t.exports=i.p+"img/home-logo10-219096700-320x202.e3c958bb.png"},efbd:function(t,e,i){"use strict";i("aba9")},f70a:function(t,e,i){"use strict";i("6430")},f961:function(t,e,i){},fab7:function(t,e,i){},ffec:function(t,e,i){t.exports=i.p+"img/3a74ce3d0532b7773b174c45ca3bd05a_normal.d00f846f.png"}});
//# sourceMappingURL=app.819c5417.js.map