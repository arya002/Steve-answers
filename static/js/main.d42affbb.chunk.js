(this.webpackJsonpcomp=this.webpackJsonpcomp||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),c=(n(17),n(5)),l=n(25),s=n(26),u=(n(18),n(6)),d=n.n(u);n(19);var f={headerText:{textShadow:"1px 2px 1px rgba(0,0,0,0.2)",fontFamily:"monospace",fontWeight:"bold",fontSize:"5em",color:"white"}},h=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),u=Object(c.a)(i,2),h=u[0],m=u[1],p=Object(a.useState)(""),v=Object(c.a)(p,2),g=v[0],w=v[1],b=Object(a.useState)(!1),y=Object(c.a)(b,2),E=y[0],S=y[1],j=Object(a.useState)(!1),k=Object(c.a)(j,2),x=k[0],O=k[1],C="Steve please answer my question.",_=["I don't trust you","Try again some other time","The semantic of the petition is incorrect","You're not cool enough","I wish I could tell you","I dunno 😕"];return o.a.createElement("div",{className:d.a.main},o.a.createElement("div",{className:d.a.header},o.a.createElement("text",{style:f.headerText},"Steve Answers")),o.a.createElement("div",{className:d.a.container},o.a.createElement(l.a,{onSubmit:function(e){e.preventDefault(),S(!0),x||w(_[Math.floor(Math.random()*_.length)])}},o.a.createElement(l.a.Group,{controlId:"question"},o.a.createElement(l.a.Label,null,"Please enter your question"),o.a.createElement(l.a.Control,{autoComplete:"off",placeholder:"Enter a question"})),o.a.createElement(l.a.Group,{controlId:"pledge"},o.a.createElement(l.a.Label,null,"Please enter your pledge!"),o.a.createElement(l.a.Control,{autoComplete:"off",placeholder:"Steve please answer",onChange:function(e){var t=e.target.value.slice(-1)[0],a=e.target.value.length,o=e.target.value;h||"."!==t?h&&"."===t?(m(!1),o=n+C[a-1]):h&&(w(g+t),o=n+C[a-1]):(m(!0),O(!0),o=n+C[a-1]),r(o)},value:n})),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},o.a.createElement(s.a,{variant:"primary",type:"submit"},"Ask"),o.a.createElement(s.a,{variant:"danger",onClick:function(){window.location.reload(!1)}},"Retry"))),E&&o.a.createElement("div",{style:{width:"100%",marginTop:60}},o.a.createElement("h3",null,"answer: "+g))))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()},6:function(e,t,n){e.exports={main:"MainStyling_main__2ziRJ",header:"MainStyling_header__22tKJ",container:"MainStyling_container__1V_sY"}}},[[12,1,2]]]);
//# sourceMappingURL=main.d42affbb.chunk.js.map
