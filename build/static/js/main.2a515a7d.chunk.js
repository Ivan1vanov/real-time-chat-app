(this.webpackJsonpfirechat=this.webpackJsonpfirechat||[]).push([[0],{21:function(e,t,n){},39:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(14),i=n.n(r),s=n(15),a=(n(39),n(13)),o=a.a.initializeApp({apiKey:"AIzaSyBE-oddrp8jINfUjVpmRA7tE5B_t6XU3uc",authDomain:"chat-58269.firebaseapp.com",projectId:"chat-58269",storageBucket:"chat-58269.appspot.com",messagingSenderId:"729156828292",appId:"1:729156828292:web:1227a5e2bd4ae6f029d6d1",measurementId:"G-YZH25V0G19"}).firestore(),u=a.a.auth(),d=n(23),l=n.n(d),j=n(26),p=(n(21),n(5));var b=function(e){var t=e.scroll,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],d=r[1];function b(){return(b=Object(j.a)(l.a.mark((function e(n){var c,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=u.currentUser,r=c.uid,s=c.photoURL,e.next=4,o.collection("messages").add({text:i,photoURL:s,uid:r,createdAt:a.a.firestore.FieldValue.serverTimestamp()});case 4:d(""),t.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{children:Object(p.jsx)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:Object(p.jsxs)("div",{className:"sendMsg",children:[Object(p.jsx)("input",{className:"input",style:{color:"#000",width:"78%",fontSize:"15px",fontWeight:"550",marginLeft:"5px",marginBottom:"-3px"},placeholder:"Enter your message...",type:"text",value:i,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)("button",{className:"btnSend",type:"submit",children:"Send"})]})})})},h=n(65);var f=function(){return Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",position:"fixed",width:"100%",backgroundColor:"rgb(55, 62, 68)",top:0,borderBottom:"solid 1px lightgray",zIndex:"10"},children:Object(p.jsx)(h.a,{class:"btnComponent",style:{fontSize:"15px",borderRadius:"0",fontWeight:"600"},onClick:function(){return u.signOut()},children:"Log out"})})};var m=function(){var e=Object(c.useRef)(),t=Object(c.useState)([]),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){o.collection("messages").orderBy("createdAt").limit(50).onSnapshot((function(e){i(e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{}),Object(p.jsx)("div",{className:"msgs",children:r.map((function(e){var t=e.id,n=e.text,c=e.photoURL,r=e.uid;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"msg ".concat(r===u.currentUser.uid?"sent":"received"),children:[Object(p.jsx)("img",{src:c,alt:""}),Object(p.jsx)("p",{children:n})]},t)})}))}),Object(p.jsx)(b,{scroll:e}),Object(p.jsx)("div",{ref:e})]})},x=n(33);var O=function(){return Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"},children:Object(p.jsxs)("button",{className:"btnLogin",onClick:function(){var e=new a.a.auth.GoogleAuthProvider;u.signInWithPopup(e)},children:[Object(p.jsx)("div",{className:"textLogin",children:"Login With Google"})," ",Object(p.jsx)(x.a,{size:30})]})})},g=n(32);var v=function(){var e=Object(g.a)(u),t=Object(s.a)(e,1)[0];return Object(p.jsx)(p.Fragment,{children:t?Object(p.jsx)(m,{}):Object(p.jsx)(O,{})})};i.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2a515a7d.chunk.js.map