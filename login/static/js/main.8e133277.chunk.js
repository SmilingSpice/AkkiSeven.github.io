(this.webpackJsonpfirebase=this.webpackJsonpfirebase||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var i=n(8),a=n(11),c=n.n(a),r=n(16),s=n.n(r),o=(n(28),n(17)),u=n(18),h=n(22),l=n(21),p=(n(29),n(9)),d=n(19),b=n.n(d);p.a.initializeApp({apiKey:"AIzaSyAhb6JsLpJ0I5iDwM2fWkfKG--2J3RVMKc",authDomain:"my-second-firebase-auth.firebaseapp.com"});var f=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={isSignedIn:!1},t.uiConfig={signInFlow:"popup",signInOptions:[p.a.auth.GoogleAuthProvider.PROVIDER_ID,p.a.auth.FacebookAuthProvider.PROVIDER_ID,p.a.auth.GithubAuthProvider.PROVIDER_ID,p.a.auth.PhoneAuthProvider.PROVIDER_ID,p.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},t.componentDidMount=function(){p.a.auth().onAuthStateChanged((function(e){t.setState({isSignedIn:!!e})}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"App",children:this.state.isSignedIn?Object(i.jsxs)("span",{children:[Object(i.jsx)("div",{className:"loggedin",children:"Signed In!"}),Object(i.jsx)("button",{className:"signout",onClick:function(){return p.a.auth().signOut()},children:"Sign out"}),Object(i.jsxs)("h1",{children:["Welcome ",p.a.auth().currentUser.displayName]}),p.a.auth().currentUser.photoURL?Object(i.jsx)("img",{className:"profilepic",alt:"profile picture",src:p.a.auth().currentUser.photoURL}):Object(i.jsx)(i.Fragment,{})]}):Object(i.jsx)(b.a,{uiConfig:this.uiConfig,firebaseAuth:p.a.auth()})})}}]),n}(a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),c(t),r(t)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.8e133277.chunk.js.map