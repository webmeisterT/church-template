(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({projects:"projects"}[t]||t)+"."+{"chunk-1336dad0":"37314148","chunk-134b51b1":"43573f69","chunk-159ad0d3":"5de083c4","chunk-15ce82ad":"efaba3a2","chunk-15e28d4c":"f46c8731","chunk-70fc3a6b":"9475d85a","chunk-b1efb86e":"54045cd6",projects:"740ae798"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-1336dad0":1,"chunk-134b51b1":1,"chunk-159ad0d3":1,"chunk-15ce82ad":1,"chunk-15e28d4c":1,"chunk-70fc3a6b":1,"chunk-b1efb86e":1,projects:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({projects:"projects"}[t]||t)+"."+{"chunk-1336dad0":"fbe1b00e","chunk-134b51b1":"fbe1b00e","chunk-159ad0d3":"fbe1b00e","chunk-15ce82ad":"fbe1b00e","chunk-15e28d4c":"fbe1b00e","chunk-70fc3a6b":"0fa481ee","chunk-b1efb86e":"00c74fb3",projects:"df9d9a7c"}[t]+".css",o=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],m.parentNode.removeChild(m),a(r)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1771:function(t,e,a){var n={"./a1.jpg":"52cd","./a2.jpg":"7c80","./a3.jpg":"a6e8","./a4.jpg":"593e","./bc12.jpg":"718e","./bc14.jpg":"829d","./bible1.jpg":"b9a6","./bible2.jpg":"5ac2","./bible3.jpg":"4ae4","./download.png":"f6f5","./iloveimg-compressed.zip":"fe35","./logo.png":"cf05","./logo.svg":"9b19","./parallax2.jpg":"7c89"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="1771"},"4ae4":function(t,e,a){t.exports=a.p+"img/bible3.6517eb01.jpg"},"52cd":function(t,e,a){t.exports=a.p+"img/a1.66bc6279.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"white",extended:"","extension-height":"28","elevate-on-scroll":""}},[n("v-toolbar-title",{staticClass:"ml-lg-16 pl-lg-16 mt-6"},[n("v-img",{staticClass:"shrink p-lg-16",attrs:{alt:"Church Logo",contain:"",src:a("f6f5"),transition:"scale-transition",width:"90"}})],1),n("v-spacer"),n("v-toolbar-items",{directives:[{name:"show",rawName:"v-show",value:!t.mobile,expression:"!mobile"}],staticClass:"mt-6"},[t._l(t.links,(function(e){return n("v-btn",{key:e.id,staticClass:"mr-1",attrs:{link:"",plain:"",to:{name:e.routelink},color:"red"}},[t._v(" "+t._s(e.namelink)+" ")])})),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-1",attrs:{link:"",plain:"",color:"red",text:""}},"v-btn",i,!1),a),[t._v(" Media"),n("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[n("v-list",t._l(t.items,(function(e){return n("v-list-item",{key:e.id,attrs:{href:e.link}},[n("v-list-item-title",{staticClass:"red--text"},[t._v(t._s(e.title))])],1)})),1)],1),t._l(t.links2,(function(e){return n("v-btn",{key:e.id,staticClass:"mr-1",attrs:{link:"",plain:"",to:{name:e.routelink},color:"red"}},[t._v(" "+t._s(e.namelink)+" ")])})),n("v-btn",{staticClass:"ml-4 py-4 white--text",attrs:{to:{name:"Contact"},color:"red",rounded:""}},[t._v("Online Giving")])],2),n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.mobile,expression:"mobile"}],staticClass:"red--text mr-4 display-4",on:{click:function(e){t.drawer=!t.drawer}}})],1),n("v-navigation-drawer",{attrs:{color:"white",app:"",temporary:"",right:"","hide-overlay":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-row",{staticClass:"mt-5 pr-6",attrs:{justify:"end"}},[n("v-btn",{attrs:{text:""},on:{click:function(e){t.drawer=!1}}},[n("v-icon",{staticClass:"display-1",attrs:{color:"red"}},[t._v("mdi-close")])],1)],1),n("v-list",[t._l(t.links,(function(e){return n("v-list-item",{key:e.id,attrs:{link:"",to:{name:e.routelink}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"red--text"},[t._v(" "+t._s(e.namelink)+" ")])],1)],1)})),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",{staticClass:"red--text"},[t._v("Media")])]},proxy:!0}])},[n("v-list-item",{staticClass:"ml-3",attrs:{to:{name:"Sermons"}}},[n("span",{staticClass:"red--text"},[t._v("Sermons")])]),n("v-list-item",{staticClass:"ml-3",attrs:{href:"https://www.youtube.com/embed/8K0JagCWcIg"}},[n("span",{staticClass:"red--text"},[t._v("Watch Live")])])],1),t._l(t.links2,(function(e){return n("v-list-item",{key:e.id,attrs:{link:"",to:{name:e.routelink}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"red--text"},[t._v(" "+t._s(e.namelink)+" ")])],1)],1)})),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"red--text"},[n("v-btn",{staticClass:"ml-4 py-4 white--text",attrs:{to:{name:"Contact"},color:"red",rounded:""}},[t._v("Online Giving")])],1)],1)],1)],2)],1),n("v-main",{staticClass:"parallax"},[n("router-view")],1),n("v-overlay",{attrs:{opacity:1,color:"grey lighten-3",value:t.overlay}},[n("fulfilling-bouncing-circle-spinner",{attrs:{size:90,color:"#FF3D00"}})],1),n("foo-ter",{on:{"move-up":t.toTheTop}})],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-footer",{staticStyle:{"z-index":"1"},attrs:{app:"",absolute:"",dark:"",color:"rgb(20,20,20)"}},[a("v-container",[a("v-row",[a("v-col",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:"animated fadeInUp",expression:"'animated fadeInUp'",modifiers:{repeat:!0}}],attrs:{cols:"12",md:"4"}},[a("p",{staticClass:"align-center"},[a("iframe",{attrs:{width:"100%",height:"220",src:"https://www.youtube.com/embed/8K0JagCWcIg",title:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),a("v-col",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:"animated fadeInUp",expression:"'animated fadeInUp'",modifiers:{repeat:!0}}],attrs:{cols:"12",md:"4"}},[a("p",{staticClass:"white--text pt-0 text-center"},[a("span",{staticClass:"text-h5"},[t._v(" QUICK LINKS ")]),a("br"),a("router-link",{staticClass:"text-decoration-none text-h6",attrs:{to:"{name:'Home'}"}},[t._v("Home")]),a("br"),a("router-link",{staticClass:"text-decoration-none text-h6",attrs:{to:"{name:'About'}"}},[t._v("About")]),a("br"),a("router-link",{staticClass:"text-decoration-none text-h6",attrs:{to:"{name:'Sermons'}"}},[t._v("Sermons")]),a("br"),a("router-link",{staticClass:"text-decoration-none text-h6",attrs:{to:"{name:'Events'}"}},[t._v("Events")]),a("br"),a("router-link",{staticClass:"text-decoration-none text-h6",attrs:{to:"{name:'Blog'}"}},[t._v("Blog")]),a("br"),a("router-link",{staticClass:"text-decoration-none text-h6",attrs:{to:"{name:'Contact'}"}},[t._v("Contact")])],1)]),a("v-col",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:"animated fadeInUp",expression:"'animated fadeInUp'",modifiers:{repeat:!0}}],attrs:{cols:"12",md:"4"}},[a("p",{staticClass:"d-flex flex-column text-center align-center pt-md-9"},t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"35px"}},[t._v(" "+t._s(e)+" ")])],1)})),1)])],1)],1),a("v-container",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:"animated fadeInUp",expression:"'animated fadeInUp'",modifiers:{repeat:!0}}],staticClass:"black",attrs:{fluid:""}},[a("div",{staticClass:"white--text text-center"},[t._v(" © Copyright "+t._s((new Date).getFullYear())+" | All Rights Reserved ")])]),a("v-btn",{staticClass:"zIndex",attrs:{color:"blue",absolute:"",fixed:"",bottom:"",right:"",icon:""},on:{click:t.toTop}},[a("v-icon",{attrs:{size:"50",color:"red accent-3"}},[t._v("mdi-arrow-up-circle")])],1)],1)],1)},s=[],c={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},methods:{toTop:function(){this.$emit("move-up")}}},l=c,u=a("2877"),d=a("6544"),m=a.n(d),p=a("8336"),f=a("62ad"),v=a("a523"),h=a("553a"),b=a("132d"),g=a("0fd9"),w=Object(u["a"])(l,r,s,!1,null,null,null),k=w.exports;m()(w,{VBtn:p["a"],VCol:f["a"],VContainer:v["a"],VFooter:h["a"],VIcon:b["a"],VRow:g["a"]});var x=a("4583"),y=a("11c1"),C={name:"App",data:function(){return{drawer:!1,overlay:!0,links:[{id:y["uuid"],namelink:"Home",routelink:"Home"},{id:y["uuid"],namelink:"About",routelink:"About"},{id:y["uuid"],namelink:"Events",routelink:"Events"}],links2:[{id:y["uuid"],namelink:"Blog",routelink:"Blog"},{id:y["uuid"],namelink:"Store",routelink:"Store"},{id:y["uuid"],namelink:"Contact",routelink:"Contact"}],linkall:[{id:y["uuid"],namelink:"Home",routelink:"Home"},{id:y["uuid"],namelink:"About",routelink:"About"},{id:y["uuid"],namelink:"Events",routelink:"Events"},{id:y["uuid"],namelink:"Blog",routelink:"Blog"},{id:y["uuid"],namelink:"Store",routelink:"Store"},{id:y["uuid"],namelink:"Contact",routelink:"Contact"}],items:[{id:y["uuid"],title:"Sermons",link:"/sermons"},{id:y["uuid"],title:"Watch Live",link:"https://www.youtube.com/embed/8K0JagCWcIg"}]}},mounted:function(){var t=this;setTimeout((function(){return t.overlay=!1}),3e3)},components:{FooTer:k,FulfillingBouncingCircleSpinner:x["a"]},computed:{mobile:function(){return this.$vuetify.breakpoint.smAndDown}},watch:{mobile:function(t){t||this.hideDrawer()}},methods:{hideDrawer:function(){this.drawer=!1},toTheTop:function(){this.$vuetify.goTo(0)}}},_=C,j=(a("034f"),a("7496")),V=a("40dc"),A=a("5bc1"),I=a("adda"),S=a("8860"),E=a("56b0"),O=a("da13"),B=a("5d23"),T=a("f6c4"),F=a("e449"),L=a("f774"),N=a("a797"),q=a("2fa4"),M=a("2a7f"),H=Object(u["a"])(_,i,o,!1,null,null,null),U=H.exports;m()(H,{VApp:j["a"],VAppBar:V["a"],VAppBarNavIcon:A["a"],VBtn:p["a"],VIcon:b["a"],VImg:I["a"],VList:S["a"],VListGroup:E["a"],VListItem:O["a"],VListItemContent:B["a"],VListItemTitle:B["b"],VMain:T["a"],VMenu:F["a"],VNavigationDrawer:L["a"],VOverlay:N["a"],VRow:g["a"],VSpacer:q["a"],VToolbarItems:M["a"],VToolbarTitle:M["b"]});var P=a("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7"),a("3ca3"),a("ddb0");var D=a("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("system-bar"),n("v-carousel",{attrs:{"hide-delimiters":"","show-arrows-on-hover":"",cycle:""}},t._l(t.carousels,(function(t){return n("v-carousel-item",{key:t.id,attrs:{src:a("1771")("./"+t.src)}})})),1),n("div",[n("v-row",{attrs:{"no-gutters":""}},t._l(t.comps,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",md:"4",sm:"6"}},[n("v-card",{staticClass:"text-left",attrs:{color:"rgba(0,0,0,0.98)",dark:"",tile:""}},[n("div",{staticClass:"py-12"},[n("v-icon",{staticClass:"float-left display-4 pl-8 pr-4"},[t._v(" "+t._s(e.icon)+" ")]),n("p",{staticClass:"px-10"},[n("span",{staticClass:"display-1 font-weight-thin"},[t._v(t._s(e.heading))]),n("br"),t._v(t._s(e.body)+" ")])],1)])],1)})),1)],1),n("v-sheet",{attrs:{color:"rgba(128,128,128,0.95)",width:"100%",height:"auto"}},[n("v-container",{staticClass:"py-10",attrs:{color:"red"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"py-9 text-h4 text-uppercase text-center white--text"},[t._v(" About Church ")])]),t._l(t.abts,(function(e){return n("v-col",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:"animated fadeInDown",expression:"'animated fadeInDown'",modifiers:{repeat:!0}}],key:e.id,staticClass:"px-4",attrs:{cols:"12",md:"4"}},[n("v-img",{attrs:{src:a("1771")("./"+e.src)}}),n("v-card",{attrs:{flat:"",tile:"",color:"transparent"}},[n("h3",{staticClass:"py-3 white--text"},[t._v(t._s(e.title))]),n("p",{staticClass:"white--text"},[t._v(" "+t._s(e.body)+" ")]),n("v-btn",{staticClass:"px-7 white--text font-weight-black",attrs:{color:"green",to:{name:e.path}}},[t._v("Read More")]),n("br")],1)],1)}))],2)],1)],1),n("v-sheet",{attrs:{color:"rgba(255,255,255,0.95)"}},[n("v-container",{staticClass:"py-10",attrs:{color:"red"}},[n("v-row",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:"animated fadeInRight",expression:"'animated fadeInRight'",modifiers:{repeat:!0}}],attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"py-9 text-h4 text-uppercase text-center"},[t._v("Articles")])]),t._l(t.blogs,(function(e){return n("v-col",{key:e.id,staticClass:"px-4 mb-md-15 mb-sm-10",attrs:{cols:"12",md:"4"}},[n("v-img",{attrs:{src:a("1771")("./"+e.src),"max-height":"200px"}}),n("v-card",{attrs:{flat:"",tile:"",color:"transparent"}},[n("h3",{staticClass:"pt-3"},[n("v-icon",{attrs:{color:"red",size:"3.7rem"}},[t._v("mdi-calendar-range")]),t._v(" "+t._s(e.title)+" ")],1),n("p",{staticClass:"pb-0"},[t._v(t._s(e.body)+" ...")])])],1)})),n("v-btn",{staticClass:"font-weight-black white--text text-h5 mx-auto py-7",attrs:{to:{name:"Blog"},color:"red"}},[t._v("Read More "),n("v-icon",{attrs:{color:"white"}},[t._v("mdi-chevron-right")])],1)],2)],1)],1),n("v-sheet",{attrs:{color:"rgba(128,128,128,0.95)",width:"100%",height:"auto"}},[n("v-container",{staticClass:"py-10",attrs:{color:"red"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"py-9",attrs:{cols:"12"}},[n("h3",{staticClass:"text-uppercase text-center warning--text"},[t._v(" Get Involved ")]),n("p",{staticClass:"text-uppercase text-h4 text-center white--text pt-0"},[t._v(" Our Ministries ")])]),t._l(t.abts,(function(e){return n("v-col",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll.repeat",value:"animated fadeInLeft",expression:"'animated fadeInLeft'",modifiers:{repeat:!0}}],key:e.id,staticClass:"px-1",attrs:{cols:"12",md:"4"}},[n("v-card",[n("v-img",{staticClass:"align-center text-center",attrs:{src:a("1771")("./"+e.src),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"350px"}},[n("router-link",{staticClass:"text-h4 text-decoration-none white--text font-italic",attrs:{to:{name:"Evangelism"}}},[t._v(t._s(e.title))])],1)],1)],1)}))],2)],1)],1),n("v-sheet",{attrs:{color:"rgba(255,255,255,0.1)",width:"100%",height:"auto"}},[n("v-container",{staticClass:"py-10",attrs:{color:"red"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows":!1}},t._l(t.slides,(function(e,a){return n("v-carousel-item",{key:a},[n("v-sheet",{attrs:{color:"rgba(255,255,255,0)",height:"100%"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-icon",{attrs:{"x-large":"",color:"white"}},[t._v("mdi-format-quote-open")]),n("div",{staticClass:"\n                    gfont\n                    text-h5\n                    white--text\n                    px-10\n                    font-italic font-weight-black\n                  "},[t._v(" "+t._s(e)+" ")]),n("div",{staticClass:"\n                    text-h5\n                    white--text\n                    px-10\n                    font-italic font-weight-black\n                    gfont\n                  "},[t._v(" Hebrews 10:12 ")])],1)],1)],1)})),1)],1)],1)],1)],1)},z=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{staticStyle:{position:"fixed","z-index":"2"},attrs:{app:"",color:"black",height:"40"}},[a("v-btn",{staticClass:"white--text ml-16",attrs:{text:"",href:"tel:08093684611",icon:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-phone")]),t._v(" 080123456789")],1),a("v-spacer"),a("v-btn",{staticClass:"white--text mr-16 pr-10 text-lowercase",attrs:{text:"",href:"mailto:kaunapraise@gmail.com",icon:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-gmail")]),t._v("church@gmail.com")],1)],1)],1)},K=[],J={name:"SystemBar",data:function(){return{}}},W=J,G=a("afd9"),Y=Object(u["a"])(W,$,K,!1,null,null,null),Q=Y.exports;m()(Y,{VBtn:p["a"],VIcon:b["a"],VSpacer:q["a"],VSystemBar:G["a"]});var X={name:"Home",data:function(){return{name:"Home",carousels:[{id:y["uuid"],src:"a3.jpg"},{id:y["uuid"],src:"a4.jpg"},{id:y["uuid"],src:"a3.jpg"},{id:y["uuid"],src:"a4.jpg"}],comps:[{id:y["uuid"],icon:"mdi-twitter",heading:"COME UP HITHER",body:"ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus doloremque officiis soluta."},{id:y["uuid"],icon:"mdi-alarm",heading:"COME UP HITHER",body:"ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus doloremque officiis soluta."},{id:y["uuid"],icon:"mdi-book",heading:"COME UP HITHER",body:"ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus doloremque officiis soluta."}],abts:[{id:y["uuid"],title:"Ministers",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident sit, facere perspiciatis aut alias similique omnis numquam nulla a harum autem, non esse explicabo rem iste earum ea magni?",src:"a2.jpg",path:"About"},{id:y["uuid"],title:"Prayer Meeting",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident sit, facere perspiciatis aut alias similique omnis numquam nulla a harum autem, omnis numquam nulla a harum autem",src:"a1.jpg",path:"About"},{id:y["uuid"],title:"Annual Convention",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident sit, facere perspiciatis aut alias similique omnis numquam nulla a harum autem, non esse explicabo rem iste earum ea magni?",src:"a2.jpg",path:"About"}],blogs:[{id:y["uuid"],title:"Article One",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident sit, facere perspiciatis aut alias similique omnis numquam nulla a harum autem, non esse explicabo rem iste earum ea magni?",src:"bible1.jpg",path:"Blog"},{id:y["uuid"],title:"Article Two",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident sit, facere perspiciatis aut alias similique omnis numquam nulla a harum autem, omnis numquam nulla a harum autem",src:"bible2.jpg",path:"Blog"},{id:y["uuid"],title:"Article Three",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident sit, facere perspiciatis aut alias similique omnis numquam nulla a harum autem, non esse explicabo rem iste earum ea magni?",src:"bible1.jpg",path:"Blog"}],slides:["For we are not of them who draws back unto perdition, but of them that believe to the saving of the soul","For we are not of them who draws back unto perdition, but of them that believe to the saving of the soul","For we are not of them who draws back unto perdition, but of them that believe to the saving of the soul","For we are not of them who draws back unto perdition, but of them that believe to the saving of the soul","For we are not of them who draws back unto perdition, but of them that believe to the saving of the soul"]}},components:{SystemBar:Q}},Z=X,tt=(a("cccb"),a("b0af")),et=a("5e66"),at=a("3e35"),nt=a("8dd9"),it=Object(u["a"])(Z,R,z,!1,null,null,null),ot=it.exports;m()(it,{VBtn:p["a"],VCard:tt["a"],VCarousel:et["a"],VCarouselItem:at["a"],VCol:f["a"],VContainer:v["a"],VIcon:b["a"],VImg:I["a"],VRow:g["a"],VSheet:nt["a"]}),n["a"].use(D["a"]);var rt=[{path:"/",name:"Home",component:ot},{path:"/about",name:"About",component:function(){return a.e("chunk-15ce82ad").then(a.bind(null,"f820"))}},{path:"/events",name:"Events",component:function(){return a.e("chunk-159ad0d3").then(a.bind(null,"aa9c"))}},{path:"/sermons",name:"Sermons",component:function(){return a.e("chunk-1336dad0").then(a.bind(null,"752a"))}},{path:"/blog",name:"Blog",component:function(){return a.e("chunk-15e28d4c").then(a.bind(null,"fd3f"))}},{path:"/store",name:"Store",component:function(){return a.e("chunk-70fc3a6b").then(a.bind(null,"2c25"))}},{path:"/contact",alias:"/giving",name:"Contact",component:function(){return a.e("chunk-b1efb86e").then(a.bind(null,"b8fa"))}},{path:"/evangelism",name:"Evangelism",component:function(){return a.e("chunk-134b51b1").then(a.bind(null,"7b45"))}},{path:"/404",alias:"*",name:"NotFound",component:function(){return a.e("projects").then(a.bind(null,"9703"))}}],st=new D["a"]({mode:"history",base:"/",routes:rt}),ct=st,lt=a("2f62");n["a"].use(lt["a"]);var ut=new lt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),dt=a("f309");n["a"].use(dt["a"]);var mt=new dt["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),pt=(a("d5e8"),a("5363"),a("1d49"));n["a"].use(pt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:ct,store:ut,vuetify:mt,render:function(t){return t(U)}}).$mount("#app")},"593e":function(t,e,a){t.exports=a.p+"img/a4.94a5b581.jpg"},"5ac2":function(t,e,a){t.exports=a.p+"img/bible2.40f10d16.jpg"},"5ced":function(t,e,a){},"718e":function(t,e,a){t.exports=a.p+"img/bc12.b0fce1eb.jpg"},"7c80":function(t,e,a){t.exports=a.p+"img/a2.81f58a6f.jpg"},"7c89":function(t,e,a){t.exports=a.p+"img/parallax2.b1f34be8.jpg"},"829d":function(t,e,a){t.exports=a.p+"img/bc14.62be35a9.jpg"},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},a6e8:function(t,e,a){t.exports=a.p+"img/a3.959761fc.jpg"},b9a6:function(t,e,a){t.exports=a.p+"img/bible1.0fbed017.jpg"},cccb:function(t,e,a){"use strict";a("5ced")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},f6f5:function(t,e,a){t.exports=a.p+"img/download.ceb68347.png"},fe35:function(t,e){throw new Error("Module parse failed: Unexpected character '' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")}});
//# sourceMappingURL=app.40d59b3f.js.map