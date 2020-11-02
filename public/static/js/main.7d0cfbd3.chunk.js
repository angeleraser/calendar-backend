(this["webpackJsonpreact-files"]=this["webpackJsonpreact-files"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(8),o=n.n(r),s=n(9),i=n(35),l=n(10),u=n(13),d=n.n(u),j=n(21),b=n(14),f=n.n(b),m="https://mern-calendar-angeleraser.herokuapp.com/api",p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,a=void 0===n?"GET":n,c=t.body,r=t.token,o="".concat(m,"/").concat(e),s={"Content-type":"application/json"};return r&&(s["x-token"]=r),"GET"===a?fetch(o,{method:a,headers:s}):fetch(o,{method:a,headers:s,body:JSON.stringify(c)})},O="[UI] Open Modal",v="[UI] Close Modal",h="[Event] Set active",g="[Event] Logout cleanup",x="[Event] Clear active event",k="[Event] Loaded",y="[Event] Add new",N="[Event] Updated",w="[Event] Deleted",E="[Auth] Finish checking login state",S="[Auth] Login",C="[Auth] Logout",D=function(){return{type:E}},I=function(e,t){return{type:S,payload:{name:e,uid:t}}},T=function(){return{type:C}},A=(n(76),n(12)),L=n(37),P=n(5),U=n(17),R=n.n(U),_=R()().minutes(0).seconds(0).add(1,"hours"),M=R()().clone().minutes(0).seconds(0).add(2,"hours"),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(A.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(_.toDate()),s=Object(A.a)(o,2),i=s[0],l=s[1],u=Object(c.useState)(M.toDate()),d=Object(A.a)(u,2),j=d[0],b=d[1],f=function(e){var t=e.target;r(Object(P.a)(Object(P.a)({},a),{},Object(L.a)({},t.name,t.value)))},m=function(){r(e),l(_.toDate()),b(M.toDate())},p=function(e){return function(t){t.preventDefault(),e()}};return[[a,i,j],[f,l,b,r],p,m]},F=function(){var e=G({loginEmail:"pedrosete@gmail.com",loginPassword:"123456"}),t=Object(A.a)(e,3),n=Object(A.a)(t[0],1)[0],c=Object(A.a)(t[1],1)[0],r=t[2],o=Object(s.b)(),i=n.loginEmail,l=n.loginPassword;return Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:r((function(){var e,t;o((e=i,t=l,function(){var n=Object(j.a)(d.a.mark((function n(a){var c,r,o,s,i,l,u;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("Login..."),n.next=4,p("auth",{method:"POST",body:{email:e,password:t}});case 4:return c=n.sent,n.next=7,c.json();case 7:r=n.sent,o=r.name,s=r.uid,i=r.token,l=r.ok,u=r.msg,r.errors,l?(localStorage.setItem("token",i),localStorage.setItem("token-init-date",(new Date).getTime()),a(I(o,s))):f.a.fire("Error",u,"error"),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.log(n.t0);case 20:return n.prev=20,console.log("Finish login!"),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[0,17,20,23]])})));return function(e){return n.apply(this,arguments)}}()))})),children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"loginEmail",value:i,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"loginPassword",value:l,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]})},J=function(){var e=G({registerName:"Angelo",registerEmail:"angelo123@gmail.com",registerPassword1:"123456",registerPassword2:"123456"}),t=Object(A.a)(e,3),n=Object(A.a)(t[0],1)[0],c=Object(A.a)(t[1],1)[0],r=t[2],o=n.registerName,i=n.registerEmail,l=n.registerPassword1,u=n.registerPassword2,b=Object(s.b)();return Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:r((function(){var e,t,n;l===u?b((e=i,t=o,n=l,function(){var a=Object(j.a)(d.a.mark((function a(c){var r,o,s,i,l,u,j;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("Register..."),a.prev=1,a.next=4,p("auth/register",{method:"POST",body:{name:t,password:n,email:e}});case 4:return r=a.sent,a.next=7,r.json();case 7:o=a.sent,s=o.uid,i=o.name,l=o.token,u=o.ok,j=o.msg,u?(localStorage.setItem("token",l),localStorage.setItem("token-init-date",(new Date).getTime()),c(I(i,s)),console.log("Register finished!")):f.a.fire("Error",j,"error"),a.next=20;break;case 16:a.prev=16,a.t0=a.catch(1),console.log(a.t0),console.log("Register failed :(");case 20:case"end":return a.stop()}}),a,null,[[1,16]])})));return function(e){return a.apply(this,arguments)}}())):f.a.fire("Error","Las contrasenas deben ser iguales","error")})),children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",value:o,onChange:c,name:"registerName"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",value:i,onChange:c,name:"registerEmail"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:l,onChange:c,name:"registerPassword1"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",value:u,onChange:c,name:"registerPassword2"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})},H=function(){return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(F,{}),Object(a.jsx)(J,{})]})})},V=function(e){return e.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{start:R()(e.start).toDate(),end:R()(e.end).toDate()})}))},X=function(e){return{type:y,payload:e}},q=function(e){return{type:N,payload:e}},z=function(){return{type:w}},B=function(e){return{type:k,payload:e}},K=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(a.jsxs)("nav",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsx)("button",{onClick:function(){t((function(e){localStorage.clear(),e(T())})),t({type:g})},className:"btn btn-outline-danger",children:"Salir"})]})},Q=(n(78),n(55)),W=function(){var e=Object(s.b)();return Object(a.jsxs)("button",{onClick:function(){e(function(){var e=Object(j.a)(d.a.mark((function e(t,n){var a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().calendar.activeEvent.id,console.log("Deleting event..."),e.next=5,p("events/".concat(a),{method:"DELETE",token:localStorage.getItem("token")||""});case 5:return c=e.sent,e.next=8,c.json();case 8:(r=e.sent).ok?(t(z()),console.log("Deleting event done!")):(f.a.fire("Error",r.msg,"error"),console.log("Deleting event failed error")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),console.log("Deleting event failed :(");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}())},className:"fab-danger btn btn-danger",children:["Delete ",Object(a.jsx)("i",{className:"fa fa-trash"})]})},Y=function(e){var t=e.event;return Object(a.jsxs)("div",{className:"flex-column align-items-start d-flex",children:[Object(a.jsx)("strong",{children:t.title}),Object(a.jsxs)("span",{className:"mt-2",children:["- ",t.user.name]})]})},Z=function(){return{type:O}},$=function(){return{type:v}},ee=function(){return{type:x}},te=function(e){return function(t){e(Z())}},ne=function(e){return function(t){e(function(e){return{type:h,payload:e}}(Object(P.a)({},t)))}},ae=function(e){return function(t){e(ee())}},ce=function(e){return function(t){e(t),localStorage.setItem("last-view",t)}},re=function(e){return function(t,n,a,c){return{style:{backgroundColor:e===t.user._id?"#367cf7":"#465660",borderRadius:"0px",opacity:"0.8",display:"block",color:"#fff"}}}},oe=n(50),se=n.n(oe),ie=n(51),le=n.n(ie),ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=function(){var e=G({title:"",notes:""}),t=Object(A.a)(e,4),n=t[0],r=Object(A.a)(t[1],4),o=r[0],i=r[1],l=r[2],u=r[3],b=t[2],m=t[3],O=Object(A.a)(n,3),v=O[0],h=v.title,g=v.notes,x=O[1],k=O[2],y=Object(c.useState)(!1),N=Object(A.a)(y,2),w=N[0],E=N[1],S=Object(s.c)((function(e){return e.ui})).isModalOpen,C=Object(s.c)((function(e){return e.calendar})).activeEvent,D=Object(s.b)();return Object(c.useEffect)((function(){if(C){var e=C.title,t=C.notes,n=C.start,a=C.end;u({title:e,notes:t}),i(n),l(a)}else m()}),[C]),Object(a.jsxs)(se.a,{isOpen:S,className:"modal",overlayClassName:"modal-fondo",onRequestClose:function(){D(ee()),D($()),m()},closeTimeoutMS:200,style:ue,children:[Object(a.jsx)("h1",{children:" Nuevo evento "}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{onSubmit:b((function(){var e=R()(x),t=R()(k);if(e.isSameOrAfter(t))return f.a.fire("Error","Fecha de inicio debe ser menor a la fecha de fin","error");if(h.trim().length<2)E(!0);else{var n={title:h,notes:g,start:x,end:k};D(C?function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Updating event..."),t.next=4,p("events/".concat(e.id),{method:"PUT",body:Object(P.a)({},e),token:localStorage.getItem("token")||""});case 4:return a=t.sent,t.next=7,a.json();case 7:(c=t.sent).ok?(n(q(e)),console.log("Updating event done!")):(f.a.fire("Error",c.msg,"error"),console.log("Updating event failed error")),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),console.log("Updating event failed :(");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(Object(P.a)(Object(P.a)({},C),{},{title:h,notes:g,start:x,end:k})):function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n,a){var c,r,o,s,i,l,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Saving event..."),f.a.fire({title:"Guardando evento...",allowOutsideClick:!1,willOpen:function(){f.a.showLoading()}}),t.next=5,p("events",{method:"POST",body:Object(P.a)({},e),token:localStorage.getItem("token")||""});case 5:return c=t.sent,t.next=8,c.json();case 8:(r=t.sent).ok&&(o=a(),s=o.auth,i=s.uid,l=s.name,u=Object(P.a)(Object(P.a)({},e),{},{id:r.event.id,user:{_id:i,name:l}}),n(X(u)),console.log("Saving event done!")),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),console.log("Saving event failed :(");case 16:return t.prev=16,console.log("Saving event process finished"),f.a.close(),t.finish(16);case 20:case"end":return t.stop()}}),t,null,[[0,12,16,20]])})));return function(e,n){return t.apply(this,arguments)}}()}(n)),m(),D(ee()),D($()),E(!1)}})),className:"container",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(le.a,{onChange:i,value:x,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(le.a,{onChange:l,value:k,minDate:x,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(w?"is-invalid":""),placeholder:"T\xedtulo del evento",name:"title",value:h,onChange:o,autoComplete:"off"}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:g,onChange:o}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},je=function(){var e=Object(s.b)();return Object(a.jsx)("button",{onClick:function(){e(Z())},className:"fab btn btn-primary",children:Object(a.jsx)("i",{className:"fa fa-plus"})})},be=Object(Q.b)(R.a),fe=function(){Object(c.useEffect)((function(){u(function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading events..."),e.prev=1,e.next=4,p("events",{method:"GET",token:localStorage.getItem("token")||""});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,c=a.events,t(B(V(c))),console.log("Loading events sucess!"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),console.log("Loading events failed :(");case 17:return e.prev=17,console.log("Loading events process finished!"),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,13,17,20]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var e=Object(c.useState)(localStorage.getItem("last-view")||"month"),t=Object(A.a)(e,2),n=t[0],r=t[1],o=Object(s.c)((function(e){return e.calendar})),i=o.events,l=o.activeEvent,u=Object(s.b)(),b=Object(s.c)((function(e){return e.auth})).uid;return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(K,{}),Object(a.jsx)(Q.a,{localizer:be,events:i,startAccessor:"start",endAccessor:"end",eventPropGetter:re(b),onDoubleClickEvent:te(u),onSelectEvent:ne(u),onSelectSlot:ae(u),selectable:!0,onView:ce(r),view:n,components:{event:Y}}),!!l&&Object(a.jsx)(W,{}),Object(a.jsx)(je,{}),Object(a.jsx)(de,{})]})},me=n(40),pe=function(e){var t=e.path,n=e.component,c=e.isAuthenticated,r=Object(me.a)(e,["path","component","isAuthenticated"]);return Object(a.jsx)(l.b,Object(P.a)(Object(P.a)({path:t},r),{},{component:function(e){return c?Object(a.jsx)(n,Object(P.a)({},e)):Object(a.jsx)(l.a,{to:"/login"})}}))},Oe=function(e){var t=e.path,n=e.component,c=e.isAuthenticated,r=Object(me.a)(e,["path","component","isAuthenticated"]);return Object(a.jsx)(l.b,Object(P.a)(Object(P.a)({path:t},r),{},{component:function(e){return c?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(n,Object(P.a)({},e))}}))},ve=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Checking token..."),e.next=4,p("auth/renew-token",{method:"GET",token:localStorage.getItem("token")||""});case 4:return n=e.sent,e.next=7,n.json();case 7:(a=e.sent).ok&&(t(I(a.name,a.uid)),console.log("Checking token done!")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),console.log("Checking token failed :(");case 15:return e.prev=15,t(D()),console.log("Checking token finished"),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[0,11,15,19]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h1",{children:"Loading..."}):Object(a.jsx)(i.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(Oe,{isAuthenticated:!!r,exact:!0,path:"/login",component:H}),Object(a.jsx)(pe,{isAuthenticated:!!r,exact:!0,path:"/",component:fe}),Object(a.jsx)(l.a,{to:"/login"})]})})},he=n(22),ge=n(66),xe={checking:!0,uid:null,name:null},ke=n(56),ye={events:[],activeEvent:null},Ne={isModalOpen:!1},we=Object(he.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(P.a)(Object(P.a)({},e),{},{isModalOpen:!0});case v:return Object(P.a)(Object(P.a)({},e),{},{isModalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(P.a)(Object(P.a)({},e),{},{activeEvent:t.payload});case y:return Object(P.a)(Object(P.a)({},e),{},{events:[].concat(Object(ke.a)(e.events),[t.payload])});case x:return Object(P.a)(Object(P.a)({},e),{},{activeEvent:null});case N:return Object(P.a)(Object(P.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(P.a)(Object(P.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case k:return Object(P.a)(Object(P.a)({},e),{},{events:Object(ke.a)(t.payload)});case g:return Object(P.a)({},ye);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(P.a)(Object(P.a)(Object(P.a)({},e),t.payload),{},{checking:!1});case E:return Object(P.a)(Object(P.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,Se=Object(he.e)(we,Ee(Object(he.a)(ge.a))),Ce=function(){return Object(a.jsx)(s.a,{store:Se,children:Object(a.jsx)(ve,{})})};n(114);o.a.render(Object(a.jsx)(Ce,{}),document.getElementById("root"))},76:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.7d0cfbd3.chunk.js.map