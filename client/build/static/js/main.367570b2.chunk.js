(this.webpackJsonpbudge=this.webpackJsonpbudge||[]).push([[0],{54:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(23),a=n.n(c),s=(n(53),n(9)),o=n(10),i=(n(54),n(18)),l=n(12),u=n(8),d=n(6),j=n.n(d),h=n(13),p=n(20),b=n.n(p),m=n(7),O=n.n(m),x={nuevoUsuario:function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n,r){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("http://budge-online.herokuapp.com/api/signup",e);case 2:c=t.sent,n({type:"LOG_USER",payload:c.data});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},logOut:function(){return function(e,t){e({type:"LOG_OUT_USER"})}},logInUser:function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n,r){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("http://budge-online.herokuapp.com/api/signin",e);case 2:if((c=t.sent).data.success){t.next=5;break}return t.abrupt("return",c.data);case 5:n({type:"LOG_USER",payload:c.data});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},logFromLS:function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n,r){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post("http://budge-online.herokuapp.com/api/user/ls",{token:e},{headers:{Authorization:"Bearer ".concat(e)}});case 3:c=t.sent,n({type:"LOG_USER",payload:{respuesta:Object(u.a)({},c.data.respuesta)}}),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),401===t.t0.response.status&&O.a.fire({icon:"question",title:"It seems like you ve lost yourself",showConfirmButton:!1,timer:3e3}),localStorage.clear(),window.location.reload();case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()}},v=n(88),g=n(89),f=n(95),y=n(90),w=n(91),k=n(92),N=n(0),E={logOut:x.logOut},M=Object(l.b)((function(e){return{loggedUser:e.auth.loggedUser}}),E)((function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1];if(e.loggedUser)var s=Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.b,{className:"home",to:"/home",children:"Home"}),Object(N.jsx)(o.b,{className:"home",to:"/",onClick:function(){O.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",O.a.stopTimer),e.addEventListener("mouseleave",O.a.resumeTimer)}}).fire({icon:"success",title:"See you soon!"}),e.logOut()},children:"LogOut"})]});else s=Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(o.b,{className:"signIn",to:"/signin",children:"Sign In"}),Object(N.jsx)(o.b,{className:"signUp",to:"/signup",children:"Sign Up"})]});return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("header",{className:"containerHeader",children:[Object(N.jsx)(o.b,{to:"/",children:Object(N.jsx)("h1",{children:"Budge Online"})}),Object(N.jsxs)(v.a,{color:"faded",light:!0,children:[Object(N.jsx)(g.a,{onClick:function(){return a(!c)},className:"mr-2"}),Object(N.jsx)(f.a,{isOpen:!c,navbar:!0,children:Object(N.jsx)(y.a,{navbar:!0,children:Object(N.jsx)(w.a,{children:Object(N.jsx)(k.a,{children:s})})})})]})]})})})),S=n(93),U=function(e){O.a.fire({icon:"error",title:"\xa1Error!",text:e,showConfirmButton:!1,timer:4e3})},C={newMov:function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n,r){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.loggedUser?r().auth.loggedUser.token:"",t.prev=1,t.next=4,b.a.post("http://budge-online.herokuapp.com/api/newMov",e,{headers:{Authorization:"Bearer ".concat(c)}});case 4:a=t.sent,n({type:"NEW_MOV",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),401===t.t0.response.status&&U("Error adding movements");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()},listMovs:function(){return function(){var e=Object(h.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth.loggedUser?n().auth.loggedUser.token:"",e.prev=1,e.next=4,b.a.get("http://budge-online.herokuapp.com/api/mov/:userId",{headers:{Authorization:"Bearer ".concat(r)}});case 4:c=e.sent,t({type:"LIST_MOVS",payload:c.data.respuesta}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),401===e.t0.response.status&&e.t0("Error getting data");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()},removeMov:function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n,r){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.loggedUser?r().auth.loggedUser.token:"",t.prev=1,t.next=4,b.a.delete("http://budge-online.herokuapp.com/api/mov/"+e,{headers:{Authorization:"Bearer ".concat(c)}});case 4:a=t.sent,n({type:"REMOVE_MOV",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0("Something went wrong, try again later");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()},editedMov:function(e,t){return function(){var n=Object(h.a)(j.a.mark((function n(r,c){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.put("http://budge-online.herokuapp.com/api/mov/".concat(e),t);case 3:a=n.sent,r({type:"EDITED_MOV",payload:a.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),U("Error,try again later");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()}},I={listMovs:C.listMovs},_=Object(l.b)((function(e){return{mov:e.movs.mov}}),I)((function(e){var t=e.mov.reduce((function(e,t){return"Entry"==t.type?e+t.amount:e}),0)+e.mov.reduce((function(e,t){return"Egress"==t.type?e-t.amount:e}),0),n=e.mov,c=n.slice(n.length-10);return Object(r.useEffect)((function(){e.listMovs()}),[]),0===c.length?Object(N.jsx)("div",{className:"noMovements",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h5",{children:"You still have no movements"}),Object(N.jsx)("div",{className:"containerOperation",children:Object(N.jsx)(o.b,{to:"/entry",children:Object(N.jsx)(S.a,{color:"dark",children:"Entry/Egress"})})})]})}):Object(N.jsxs)("div",{className:"containerHome",children:[Object(N.jsxs)("div",{className:"infoHome",children:[Object(N.jsx)("h3",{className:"lastMoves",children:"LAST MOVES"}),Object(N.jsx)("div",{className:"containerMoves",children:c.map((function(e){var t=e.concept,n=e.amount,r=e.type,c=e._id;return"Entry"===r?Object(N.jsx)("div",{children:Object(N.jsxs)("p",{className:"conceptEntry",children:[t," $",n]},c)}):"Egress"===r?Object(N.jsx)("div",{children:Object(N.jsxs)("p",{className:"conceptEgress",children:[t,"  $ - ",n]})}):void 0}))})]}),Object(N.jsx)("div",{className:"containerBalance",children:Object(N.jsxs)("p",{children:["Current Balance: ",t]})}),Object(N.jsx)("div",{className:"containerOperation",children:Object(N.jsx)(o.b,{to:"/entry",children:Object(N.jsx)(S.a,{color:"dark",children:"Entry/Egress"})})})]})})),B=function(){return Object(N.jsx)("div",{className:"containerMain",children:Object(N.jsxs)("div",{className:"infoMain",children:[Object(N.jsx)("h3",{className:"titleMain",children:"INFORMATION"}),Object(N.jsxs)("div",{className:"subContainerMain",children:[Object(N.jsx)("h5",{children:"Website where you can control your income."}),Object(N.jsx)("h5",{children:"Technologies used:"}),Object(N.jsxs)("div",{className:"technologies",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h6",{children:"Front-End:"}),Object(N.jsx)("p",{children:"React.js"}),Object(N.jsx)("p",{children:"Redux"}),Object(N.jsx)("p",{children:"Bootstrap"})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h6",{children:"Back-End:"}),Object(N.jsx)("p",{children:"Express"}),Object(N.jsx)("p",{children:"MongoDB"}),Object(N.jsx)("p",{children:"Node.js"})]})]}),Object(N.jsxs)("div",{className:"developed",children:[Object(N.jsx)("p",{children:"Developed by: Walter Romero"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/walterromero09/",children:Object(N.jsx)("img",{src:"assets/images/61109.png"})}),Object(N.jsx)("a",{href:"mailto:wromero1893@gmail.com",children:Object(N.jsx)("img",{src:"assets/images/email.png"})})]})]})]})]})})},L=n(19),R=n(27),T=n.n(R),A={logInUser:x.logInUser},F=Object(l.b)((function(e){return{loggedUser:e.auth.loggedUser}}),A)((function(e){var t=Object(r.useState)({}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;a(Object(u.a)(Object(u.a)({},c),{},Object(L.a)({},t,n)))};function l(e,t){O.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",O.a.stopTimer),e.addEventListener("mouseleave",O.a.resumeTimer)}}).fire({icon:e,title:t})}var d=function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.logInUser(c);case 3:(r=t.sent)&&!r.success?l("error","An error occurred while logging in"):(l("success","Signed in successfully"),e.history.push("/home"));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.error){t.next=4;break}l("error","An error occurred while logging in"),t.next=8;break;case 4:return t.next=6,e.logInUser({email:n.profileObj.email,password:n.profileObj.googleId});case 6:(r=t.sent)&&!r.success?l("error","An error occurred while logging in"):(l("success","Signed in successfully"),e.history.push("/home"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"titleRegister",children:Object(N.jsx)("h3",{children:"Log In"})}),Object(N.jsx)("div",{className:"containerRegister",children:Object(N.jsxs)("form",{className:"containerInput",children:[Object(N.jsx)("input",{type:"text",placeholder:"Insert your email",name:"email",onChange:s}),Object(N.jsx)("input",{type:"password",placeholder:"Insert your password",name:"password",onChange:s}),Object(N.jsx)(S.a,{color:"dark",onClick:d,children:"Log In"})]})}),Object(N.jsx)("div",{className:"subReg",children:Object(N.jsx)(o.b,{to:"/signup",children:Object(N.jsx)("p",{children:"Don't have account? Create one here!"})})}),Object(N.jsx)("div",{className:"google",children:Object(N.jsx)(T.a,{clientId:"8788813292-rlhs4nsqhlhs6hdn53u0ftj92tk5mu5k.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:p,onFailure:p,cookiePolicy:"single_host_origin"})})]})})),D={newUser:x.nuevoUsuario},V=Object(l.b)((function(e){return{loggedUser:e.auth.loggedUser}}),D)((function(e){var t=Object(r.useState)({}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;a(Object(u.a)(Object(u.a)({},c),{},Object(L.a)({},t,n)))},l=function(e,t){O.a.fire({icon:e,title:t,showConfirmButton:!1,timer:1e3})},d=function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c.name&&c.lastName&&c.email&&c.password){t.next=5;break}l("error","Please complete all fields."),t.next=9;break;case 5:return t.next=7,e.newUser(c);case 7:(r=t.sent)&&!r.success?alert("Error"):e.history.push("/home");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.error){t.next=4;break}l("error","An error occurred, please try again later."),t.next=8;break;case 4:return t.next=6,e.newUser({email:n.profileObj.email,password:n.profileObj.googleId,lastName:n.profileObj.familyName,name:n.profileObj.givenName});case 6:(r=t.sent)&&!r.success?l("error","An error occurred, please try again later."):(l("success","Account Created successfully."),e.history.push("/home"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"generalContainer",children:[Object(N.jsx)("div",{className:"titleRegister",children:Object(N.jsx)("h3",{children:"Register"})}),Object(N.jsx)("div",{className:"containerRegister",children:Object(N.jsxs)("form",{className:"containerInput",children:[Object(N.jsx)("input",{type:"text",placeholder:"Insert your First name",name:"name",onChange:s}),Object(N.jsx)("input",{type:"text",placeholder:"Insert your Last name",name:"lastName",onChange:s}),Object(N.jsx)("input",{type:"text",placeholder:"Insert your email",name:"email",onChange:s}),Object(N.jsx)("input",{type:"password",placeholder:"Insert your password",name:"password",onChange:s}),Object(N.jsx)(S.a,{color:"dark",onClick:d,children:"Register Now"})]})}),Object(N.jsx)("div",{className:"subReg",children:Object(N.jsx)(o.b,{to:"/signin",children:Object(N.jsx)("p",{children:"Do you already have an account? Log in here"})})}),Object(N.jsx)("div",{className:"google",children:Object(N.jsx)(T.a,{clientId:"8788813292-rlhs4nsqhlhs6hdn53u0ftj92tk5mu5k.apps.googleusercontent.com",buttonText:"Create account with Google",onSuccess:p,onFailure:p,cookiePolicy:"single_host_origin"})})]})})),G=n(94),H={listMovs:C.listMovs,removeMov:C.removeMov},P=Object(l.b)((function(e){return{mov:e.movs.mov}}),H)((function(e){Object(r.useEffect)((function(){e.listMovs()}),[]);var t=e.mov.reverse();return Object(N.jsx)("div",{children:Object(N.jsxs)(G.a,{children:[Object(N.jsx)("thead",{className:"thTable",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Concept"}),Object(N.jsx)("th",{children:"Amount"}),Object(N.jsx)("th",{children:"Date"}),Object(N.jsx)("th",{children:"Type"}),Object(N.jsx)("th",{children:"Edit"})]})}),Object(N.jsx)("tbody",{children:t.map((function(e){var t=e.concept,n=e.amount,r=e.type,c=e.date,a=e._id;return"Entry"===r?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("tr",{className:"conceptABMR",children:[Object(N.jsx)("td",{children:t}),Object(N.jsx)("td",{children:n}),Object(N.jsx)("td",{children:c}),Object(N.jsx)("td",{children:r}),Object(N.jsx)("td",{children:Object(N.jsx)(o.b,{to:"/edit/".concat(a),children:Object(N.jsx)(S.a,{children:"Edit"})})})]})}):"Egress"===r?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("tr",{className:"conceptABMG",children:[Object(N.jsx)("td",{children:t}),Object(N.jsxs)("td",{children:["-",n]}),Object(N.jsx)("td",{children:c}),Object(N.jsx)("td",{children:r}),Object(N.jsx)("td",{children:Object(N.jsx)(o.b,{to:"/edit/".concat(a),children:Object(N.jsx)(S.a,{children:"Edit"})})})]})}):void 0}))})]})})})),q={newMov:C.newMov},z=Object(l.b)((function(e){return{mov:e.movs.mov}}),q)((function(e){var t=Object(r.useState)({}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;a(Object(u.a)(Object(u.a)({},c),{},Object(L.a)({},t,n)))};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"containerHome",children:[Object(N.jsx)("div",{className:"infoHome",children:Object(N.jsxs)("div",{className:"containerMoves",children:[Object(N.jsx)("h3",{children:"Add Movements"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{type:"text",name:"concept",placeholder:"Concept",onChange:s,required:"true"}),Object(N.jsx)("input",{type:"number",name:"amount",placeholder:"Amount",onChange:s}),Object(N.jsx)("input",{type:"date",name:"date",onChange:s}),Object(N.jsxs)("select",{name:"type",onChange:s,className:"selectType",children:[Object(N.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select type"}),Object(N.jsx)("option",{children:"Entry"}),Object(N.jsx)("option",{children:"Egress"})]})]})]})}),Object(N.jsx)("div",{className:"containerOperation",children:Object(N.jsx)(o.b,{to:"/entry",children:Object(N.jsx)(S.a,{color:"dark",onClick:function(t){t.preventDefault(),c.concept&&c.amount&&c.date&&c.type?(e.newMov(c),e.history.push("/home")):O.a.fire({icon:"error",title:"Please complete all fields.",showConfirmButton:!1,timer:4e3})},children:"Send"})})})]}),Object(N.jsx)(P,{})]})})),W={listMovs:C.listMovs,removeMov:C.removeMov,editedMov:C.editedMov},J=Object(l.b)((function(e){return{mov:e.movs.mov}}),W)((function(e){var t=Object(r.useState)({}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)({}),o=Object(i.a)(s,2),l=o[0],d=o[1];Object(r.useEffect)((function(){var t=e.match.params.id,n=e.mov.filter((function(e){return e._id===t}));a(n[0])}),[]);var p=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;d(Object(u.a)(Object(u.a)({},l),{},Object(L.a)({},t,n)))},b=function(e,t,n){O.a.fire({icon:e,title:t,text:n,showConfirmButton:!1,timer:2e3})},m=function(){var t=Object(h.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.removeMov(n);case 2:b("success","OK","Movement removed successfully!"),e.history.push("/Entry");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"containerHome",children:[Object(N.jsx)("div",{className:"infoHome",children:Object(N.jsxs)("div",{className:"containerMoves",children:[Object(N.jsx)("h3",{children:"Edit Movements"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{defaultValue:c.concept,type:"text",name:"concept",onChange:p,required:"true"}),Object(N.jsx)("input",{defaultValue:c.amount,type:"number",name:"amount",onChange:p}),Object(N.jsx)("input",{defaultValue:c.date,type:"date",name:"date",onChange:p}),Object(N.jsx)(S.a,{color:"danger",onClick:function(){return m(c._id)},children:"Delete"})]})]})}),Object(N.jsx)("div",{className:"containerOperation",children:Object(N.jsx)(S.a,{color:"dark",onClick:function(){return t=c._id,void(l.concept&&l.amount&&l.date?(e.editedMov(t,l),b("success","OK","Successfully modified!"),e.history.push("/Home")):b("error","STOP!","Please complete all fields."));var t},children:"Edit"})})]})})})),K={logFromLS:x.logFromLS,listMovs:C.listMovs},Y=Object(l.b)((function(e){return{loggedUser:e.auth.loggedUser}}),K)((function(e){if(e.loggedUser)var t=Object(N.jsxs)(s.d,{children:[Object(N.jsx)(s.b,{exact:!0,path:"/",component:B}),Object(N.jsx)(s.b,{exact:!0,path:"/home",component:_}),Object(N.jsx)(s.b,{exact:!0,path:"/entry",component:z}),Object(N.jsx)(s.b,{exact:!0,path:"/edit/:id",component:J}),Object(N.jsx)(s.a,{to:"/"})]});else if(localStorage.getItem("token"))e.logFromLS(localStorage.getItem("token"));else t=Object(N.jsxs)(s.d,{children:[Object(N.jsx)(s.b,{exact:!0,path:"/",component:B}),Object(N.jsx)(s.b,{exact:!0,path:"/signin",component:F}),Object(N.jsx)(s.b,{exact:!0,path:"/signup",component:V}),Object(N.jsx)(s.a,{to:"/"})]});return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(o.a,{children:[Object(N.jsx)(M,{}),Object(N.jsx)(s.d,{children:t})]})})})),$=n(22),Q=n(48),X={mov:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_MOV":return t.payload?O.a.fire({icon:"success",title:"You added a move!",showConfirmButton:!1,timer:2e3}):O.a.fire({icon:"error",title:"An error occurred! try again later",showConfirmButton:!1,timer:3e3}),e;case"LIST_MOVS":return Object(u.a)(Object(u.a)({},e),{},{mov:t.payload});case"REMOVE_MOV":return e;case"EDITED_MOV":return console.log(t.payload),e;default:return e}},ee={loggedUser:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_USER":return localStorage.setItem("name",t.payload.respuesta.name),localStorage.setItem("token",t.payload.respuesta.token),Object(u.a)(Object(u.a)({},e),{},{loggedUser:t.payload.respuesta});case"LOG_OUT_USER":return localStorage.clear(),Object(u.a)(Object(u.a)({},e),{},{loggedUser:null});default:return e}},ne=Object($.c)({movs:Z,auth:te}),re=Object($.d)(ne,Object($.a)(Q.a));a.a.render(Object(N.jsx)(l.a,{store:re,children:Object(N.jsx)(Y,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.367570b2.chunk.js.map