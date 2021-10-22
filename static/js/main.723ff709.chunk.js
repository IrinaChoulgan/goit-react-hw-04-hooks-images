(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=(a(18),a(6)),i=a.n(s),u=a(11),l=a(9),b=a(3),j=a(5),m=(a(12),a(2)),d=a.n(m),f=a(1);function h(e){var t=e.webformatURL,a=e.showImageHandle;return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image",onClick:a})})}function p(e){var t=e.showImageHandler,a=e.images;return Object(f.jsx)("ul",{className:"ImageGallery",children:a.map((function(e,a){return Object(f.jsx)(h,{webformatURL:e.webformatURL,showImageHandle:t(e.largeImageURL),index:a},e.id)}))})}function O(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(b.a)(a,2),r=c[0],o=c[1];return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):j.b.error("Please enter search request!")},children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)},value:r})]})})}h.propType={img:d.a.string.isRequired,showImageHandle:d.a.func.isRequired};var x=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23070790-299ad5e8dfdc75cc527267990","&image_type=photo&orientation=horizontal&per_page=12"));case 2:if((n=e.sent).ok){e.next=5;break}throw n;case 5:return e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=x;function v(e){var t=e.loadMoreHandler;return Object(f.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}v.propType={loadMoreHandler:d.a.func.isRequired};var w=a(13),S=a.n(w);function y(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(S.a,{type:"TailSpin",color:"#303f9f",height:80,width:80})})}var k=document.querySelector("#modal-root");function N(e){var t=e.onClose,a=e.bigURL;Object(n.useEffect)((function(){window.removeEventListener("keydown",c)}));var c=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:a,alt:""})})}),k)}var I=0,H="";function R(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(b.a)(r,2),s=o[0],m=o[1],d=Object(n.useState)(1),h=Object(b.a)(d,2),x=h[0],w=h[1],S=Object(n.useState)(!1),k=Object(b.a)(S,2),R=k[0],C=k[1],L=Object(n.useState)(!1),T=Object(b.a)(L,2),E=T[0],M=T[1],q=Object(n.useState)(""),U=Object(b.a)(q,2),F=U[0],G=U[1];Object(n.useEffect)((function(e){""!==s&&(e!==s&&""!==s||e!==x)&&J()}),[s,x]);var B=function(){var e=document.documentElement.scrollHeight-150;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}),300)},J=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),G(""),e.prev=2,e.next=5,g(s,x);case 5:0!==(t=e.sent).total?(I=Math.ceil(t.totalHits/12),c((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t.hits))}))):(j.b.info("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(s," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!")),c([])),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),G(e.t0.toString());case 13:return e.prev=13,C(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{onSubmit:function(e){I=0,c([]),m(e),w(1)}}),a.length>0&&Object(f.jsx)(p,{images:a,showImageHandler:function(e){return function(){H=e,M(!0)}},scrollToHandler:B}),F&&Object(f.jsx)("p",{className:"ErrorText",children:F}),R&&Object(f.jsx)(y,{}),a.length>0&&Object(f.jsx)(v,{loadMoreHandler:function(){B(),w((function(){return Math.min(I,x+1)}))}}),E&&Object(f.jsx)(N,{bigURL:H,onClose:function(){H="",M(!1)}}),Object(f.jsx)(j.a,{autoClose:2500})]})}o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.723ff709.chunk.js.map