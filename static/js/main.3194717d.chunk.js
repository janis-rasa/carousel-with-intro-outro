(this["webpackJsonpcarousel-with-intro-outro"]=this["webpackJsonpcarousel-with-intro-outro"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),i=(a(16),a(17),a(9)),c=a(2);a(18);var o=function(){var e=[{title:"Can you believe",text:"Than a react-bootstrap carousel can be more controlled?",style:{backgroundImage:'url("/images/close-up-of-leaf-326055.jpg")'}},{title:"Check this out",text:"And you will see",style:{backgroundImage:'url("/images/landscape-nature-sky-person-33688.jpg")'}}],t=l.a.useRef(e.map((function(){return l.a.createRef()}))),a=l.a.useRef(),n=function(){var e=window.innerHeight;a.current.style.height=e+"px"},r=e.map((function(e,a){return l.a.createElement(c.a.Item,{key:a,ref:t.current[a]},l.a.createElement("div",{className:"carousel-bg","aria-hidden":"true",style:e.style}),l.a.createElement(c.a.Caption,null,l.a.createElement("h3",{className:"carousel-title"},e.title),l.a.createElement("p",{className:"carousel-lead lead mb-0"},e.text)))})),s=l.a.useState((function(){return e.length-1})),o=Object(i.a)(s,2),u=o[0],m=o[1];return l.a.useEffect((function(){return n(),m(0),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),l.a.createElement("section",{ref:a,className:"mb-5"},l.a.createElement("h2",{className:"sr-only"},"Controlled carousel"),l.a.createElement(c.a,{className:"carousel_intro",fade:!0,activeIndex:u,onSelect:function(e){t.current[u].current.classList.add("sliding"),setTimeout((function(){m(e)}),500)},pause:!1,controls:!1,indicators:!0},r))},u=a(10);a(21);var m=function(){var e=[{id:0,image:"https://picsum.photos/id/237/500/250.jpg",title:"Lorem Ipsum",url:"#"},{id:1,image:"https://picsum.photos/id/238/500/250.jpg",title:"Dolor sit amet",url:"#"},{id:2,image:"https://picsum.photos/id/239/500/250.jpg",title:"Consectetur adipiscing elit",url:"#"},{id:3,image:"https://picsum.photos/id/240/500/250.jpg",title:"Phasellus leo ante",url:"#"},{id:4,image:"https://picsum.photos/id/241/500/250.jpg",title:"Consectetur a condimentum vel",url:"#"},{id:5,image:"https://picsum.photos/id/242/500/250.jpg",title:"Sodales id lectus",url:"#"},{id:6,image:"https://picsum.photos/id/243/500/250.jpg",title:"Pellentesque laoreet",url:"#"}],t=function(t){var a=e.length;return t>=a&&(t-=a),l.a.createElement("figure",{className:"carousel-item__figure col-12 col-sm-4 col-lg-3 mb-0",key:t},l.a.createElement("a",{href:e[t].url,target:"_blank",rel:"noopener noreferrer",className:"carousel-item__link"},l.a.createElement("img",{src:e[t].image,alt:e[t].title,className:"img-fluid carousel-item__img"}),l.a.createElement("span",{className:"carousel-item__caption"},e[t].title)))},a=e.map((function(e,a){var n,r=[];for(n=a;n<a+4;n++)r=[].concat(Object(u.a)(r),[t(n)]);return l.a.createElement(c.a.Item,{key:a},r)}));return l.a.createElement("section",{className:"py-5"},l.a.createElement("div",{className:"container pb-5"},l.a.createElement("h2",{className:"text-center"},"Multiple carousel")),l.a.createElement(c.a,{fade:!1,indicators:!0,interval:5e3,pause:!1,controls:!0,className:"carousel_multiple"},a))};var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"sr-only"},"Bootstrap controlled and multiple carousels"),l.a.createElement(o,null),l.a.createElement(m,null))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3194717d.chunk.js.map