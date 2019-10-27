(this["webpackJsonpstopgap-frontend"]=this["webpackJsonpstopgap-frontend"]||[]).push([[0],{14:function(e,t,a){e.exports={container:"Form_container__2pLXI",buttonContainer:"Form_buttonContainer__24Fal",navbutton:"Form_navbutton__2YhHT",submit:"Form_submit__3yNoO Form_navbutton__2YhHT",radioGroup:"Form_radioGroup__1G91H",radio:"Form_radio__2rw5C",label:"Form_label__3G2px",heading:"Form_heading__34apI",subheading:"Form_subheading__2Rd1n",actuallySubmit:"Form_actuallySubmit__1-Z7A",question:"Form_question__vQjhP",additionInfo:"Form_additionInfo__1ylv7",imageForm:"Form_imageForm__1j9UI",imagequestion:"Form_imagequestion__1a_e3"}},192:function(e,t,a){e.exports={main:"App_main__2l94Q"}},200:function(e,t,a){e.exports=a(399)},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),i=a.n(s),o=a(12),c=a.n(o),l=a(23),u=a(193),d=a(32),m=a(53),h=a(39),p=a(63),b=a(3),g=a.n(b),f=a(411),E=a(403),v=a(408),O=a(409),w=a(410),y=a(412),_=a(407),k=a(413),N=a(197),I=a(14),S=a.n(I);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=f.a.Types,B={singleStep:F.BooleanType().isRequired("This field is required"),nonResidential:F.BooleanType().isRequired("This field is required")},T={name:F.StringType().isRequired("Business name is required"),address:F.StringType().isRequired("Business address is required"),userIsOwner:F.BooleanType().isRequired("This field is required")},R={attachments:F.ArrayType()},q={sidewalkFlat:F.BooleanType(),stepIsWide:F.BooleanType(),correctHeight:F.BooleanType()},A={canContact:F.BooleanType().isRequired("This field is required"),email:F.StringType().isEmail("Invalid email address")},x=["ENVIRONMENT_INFO","BUSINESS_INFO","IMAGE","ADDITIONAL_INFO","CONTACT_INFO"],D=x.reduce((function(e,t,a){return C({},e,Object(p.a)({},t,a))}),{}),W=D[x[0]],P=D[x[x.length-1]];function H(e){var t=e.onSubmit,a=Object(n.useState)(W),s=Object(h.a)(a,2),i=s[0],o=s[1],c=Object(n.useState)({}),l=Object(h.a)(c,2),u=l[0],d=l[1],m=Object(n.useState)(!1),b=Object(h.a)(m,2),g=b[0],f=b[1];function E(e){return function(t){d(C({},u,Object(p.a)({},e,t)))}}function v(e){e===P?(f(!0),t(u)):o(function(e){return console.assert(e<P),e+1}(e))}function O(e){o(function(e){return console.assert(e>W),e-1}(e))}return r.a.createElement(r.a.Fragment,null,i===D.ENVIRONMENT_INFO&&r.a.createElement(G,{disabled:g,value:u.environment,onChange:E("environment"),onSubmit:v,goBack:O}),i===D.BUSINESS_INFO&&r.a.createElement(M,{disabled:g,value:u.business,onChange:E("business"),onSubmit:v,goBack:O}),i===D.IMAGE&&r.a.createElement(Q,{value:u.image,disabled:g,onChange:E("image"),onSubmit:v,goBack:O}),i===D.ADDITIONAL_INFO&&r.a.createElement(L,{value:u.additional,disabled:g,onChange:E("additional"),onSubmit:v,goBack:O}),i===D.CONTACT_INFO&&r.a.createElement(K,{isOwner:u.business.userIsOwner,disabled:g,value:u.contact,onChange:E("contact"),onSubmit:v,goBack:O}))}function U(e){var t=e.children,a=e.className,n=Object(m.a)(e,["children","className"]);return r.a.createElement(E.a,null,r.a.createElement("p",{className:S.a.question},t),r.a.createElement(v.a,Object.assign({className:g()(a,S.a.radioGroup),accepter:O.a},n),r.a.createElement(w.a,{className:S.a.radio,value:!0},"Yes."),r.a.createElement(w.a,{className:S.a.radio,value:!1},"No.")))}function G(e){var t=e.disabled,a=e.goBack,n=e.value,s=e.onChange,i=e.onSubmit;return r.a.createElement(V,{schema:B,value:n,onChange:s,onSubmit:i,step:D.ENVIRONMENT_INFO,goBack:a,disabled:t,heading:"Tell us about an Ottawa business that could use a StopGap ramp."},r.a.createElement(U,{name:"singleStep"},"Is the location inaccessible due to a single step?"),r.a.createElement(U,{name:"nonResidential"},"Is the location non-residential?"))}function M(e){var t=e.disabled,a=e.goBack,n=e.value,s=e.onChange,i=e.onSubmit;return r.a.createElement(V,{schema:T,value:n,disabled:t,onChange:s,onSubmit:i,step:D.BUSINESS_INFO,goBack:a,heading:"Where would you like a ramp?",subheading:"* mandatory"},r.a.createElement(E.a,null,r.a.createElement(y.a,{className:S.a.label},"Business name *",r.a.createElement(v.a,{name:"name"}))),r.a.createElement(E.a,null,r.a.createElement(y.a,{className:S.a.label},"Address *",r.a.createElement(v.a,{name:"address"}))),r.a.createElement(U,{name:"userIsOwner"},"Are you the owner of this business?"))}function L(e){var t=e.disabled,a=e.goBack,n=e.value,s=e.onChange,i=e.onSubmit;return r.a.createElement("div",{className:S.a.additionInfo},r.a.createElement(V,{schema:q,value:n,onChange:s,disabled:t,onSubmit:i,step:D.ADDITIONAL_INFO,goBack:a,heading:"Give us some extra information."},r.a.createElement(U,{name:"sidewalkFlat"},"Is the sidewalk flat?"),r.a.createElement(U,{name:"stepIsWide"},"Is the step 34 inches or wider?"),r.a.createElement(U,{name:"correctHeight"},"Is the step taller than 2 inches and shorter than 9 inches?")))}function K(e){var t=e.disabled,a=e.isOwner,n=e.goBack,s=e.value,i=e.onChange,o=e.onSubmit;return r.a.createElement(V,{disabled:t,schema:a?C({},A,{email:F.StringType().isEmail().isRequired("This field is required")}):A,value:s,onChange:i,onSubmit:o,step:D.CONTACT_INFO,goBack:n,heading:a?"We'll drop you a line soon.":"Can we contact you about this request?"},a||r.a.createElement(U,{name:"canContact"},"Can we contact you about this request?"),r.a.createElement(E.a,null,r.a.createElement(y.a,null,"Email address",r.a.createElement(v.a,{name:"email",isRequired:a}))))}function Q(e){var t=e.disabled,a=e.goBack,n=e.value,s=e.onChange,i=e.onSubmit;return r.a.createElement("div",{className:S.a.imageForm},r.a.createElement(V,{disabled:t,heading:"Add a photo or two.",schema:R,step:D.IMAGE,onSubmit:i,onChange:s,value:n,goBack:a},r.a.createElement("p",{className:S.a.imagequestion},"Be sure to show the step and entryway."),r.a.createElement(v.a,{accepter:_.a,accept:"image/*",listType:"picture",multiple:!0,name:"attachments",autoUpload:!1,removable:!0})))}function V(e){var t=e.children,a=e.goBack,s=e.value,i=e.onChange,o=e.onSubmit,c=e.step,l=e.schema,u=e.heading,d=e.disabled,h=Object(m.a)(e,["children","goBack","value","onChange","onSubmit","step","schema","heading","disabled"]),p=Object(n.useRef)(null),b=Object(n.useMemo)((function(){return f.a.Model(l)}),[l]);return r.a.createElement(Y,Object.assign({ref:p,fluid:!0,model:b,formValue:s,onChange:i,onSubmit:function(e){e.preventDefault(),p.current.check()&&o(c)},step:c,goBack:a,heading:u,disabled:d},h),t)}var Y=Object(n.forwardRef)((function(e,t){var a=e.children,n=e.disabled,s=e.className,i=e.heading,o=e.subheading,c=e.step,l=e.goBack,u=Object(m.a)(e,["children","disabled","className","heading","subheading","step","goBack"]);return r.a.createElement(k.a,Object.assign({ref:t,className:g()(S.a.container,s)},u),r.a.createElement("h2",{className:S.a.heading},i,o&&r.a.createElement("small",{className:S.a.subheading},o)),a,r.a.createElement("div",{className:S.a.buttonContainer},c!==W&&r.a.createElement(N.a,{appearance:"subtle",size:"lg",type:"button",onClick:function(){return l(c)},className:S.a.navbutton},"< Back"),r.a.createElement(N.a,{appearance:"primary",size:"lg",type:"submit",className:g()(S.a.submit,Object(p.a)({},S.a.actuallySubmit,c===P)),disabled:n},c===P?"Submit.":"Next >")))})),z=a(86),J=a(187),X=a(89),Z=a(50),$=a(87),ee=a(196),te=a(198);Object(ee.a)(Error);function ae(e,t,a){return ne.apply(this,arguments)}function ne(){return(ne=Object(l.a)(c.a.mark((function e(t,a,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.fetch(t,a);case 3:if(!(r=e.sent).ok){e.next=8;break}return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),ie().then((function(e){return e.transaction("outbox","readwrite").objectStore("outbox").put({body:n,url:"https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest"})}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function re(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new URL(e),n=0,r=Object.entries(t);n<r.length;n++){var s=r[n],i=Object(h.a)(s,2),o=i[0],c=i[1];a.searchParams.set(o,c)}return ae(a)}function se(e,t,a){return ae(e,{method:"POST",mode:"no-cors",body:t},a)}function ie(){return oe.apply(this,arguments)}function oe(){return(oe=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.a)("reports",1,{upgrade:function(e){e.createObjectStore("outbox",{autoIncrement:!0,keyPath:"id"})}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=a(406),le=a(414),ue=a(415),de=ce.a.Column,me=ce.a.HeaderCell,he=ce.a.Cell,pe=function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(X.a)(this,Object(Z.a)(t).call(this,e))).state={QueryData:[]},a}return Object($.a)(t,e),Object(J.a)(t,[{key:"componentWillMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(3).then(a.t.bind(null,416,7));case 2:return e.t0=this,e.next=5,re("https://us-east4-rhok11-stopgap.cloudfunctions.net/getAllRampRequests");case 5:e.t1=e.sent,e.t2={QueryData:e.t1},e.t0.setState.call(e.t0,e.t2),console.log(this.state);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(le.a,null,r.a.createElement(ue.a,null,r.a.createElement(ce.a,{height:400,data:this.state.QueryData,onRowClick:function(e){console.log(e)}},r.a.createElement(de,{width:200},r.a.createElement(me,null,"Business Name"),r.a.createElement(he,{dataKey:"request.businessName"})),r.a.createElement(de,{width:200},r.a.createElement(me,null,"Business Address"),r.a.createElement(he,{dataKey:"request.businessAddress"})),r.a.createElement(de,{width:200},r.a.createElement(me,null,"Business Details"),r.a.createElement(he,{dataKey:"request.businessDetails"})),r.a.createElement(de,{width:200},r.a.createElement(me,null,"Met Requirements"),r.a.createElement(he,{dataKey:"request.metRequirements"})),r.a.createElement(de,{width:200},r.a.createElement(me,null,"User Email"),r.a.createElement(he,{dataKey:"request.userEmail"})),r.a.createElement(de,{width:200},r.a.createElement(me,null,"User Is Owner"),r.a.createElement("boolCell",{dataKey:"request.userIsOwner",rowData:"request.userIsOwner"})),r.a.createElement(de,{width:120},r.a.createElement(me,null,"Action"),r.a.createElement(he,null,(function(e){function t(){alert("id:".concat(e.id))}return r.a.createElement("span",null,r.a.createElement("a",{onClick:t}," Edit ")," |"," ",r.a.createElement("a",{onClick:t}," Remove "))}))))))}}]),t}(n.Component),be={NEW_REPORT:"https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest"};function ge(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(l.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=new FormData,n={businessName:t.business.name,businessAddress:t.business.address,attachments:[],singleStep:t.environment.singleStep,nonResidential:t.environment.nonResidential,userIsOwner:t.business.userIsOwner,canContact:t.contact.canContact},a.set("businessName",t.business.name),a.set("businessAddress",t.business.address),a.set("singleStep",t.environment.singleStep),a.set("nonResidential",t.environment.nonResidential),a.set("canContact",t.contact.canContact),t.business.details&&(a.set("businessDetails",t.business.details),n.businessDetails=t.business.details),t.contact.email&&(a.set("userEmail",t.contact.email),n.userEmail=t.contact.email),a.set("userIsOwner",t.business.userIsOwner),t.image&&t.image.attachments&&t.image.attachments.forEach((function(e){a.append("attachments",e.blobFile,e.name),n.attachments.push(e)})),t.additional&&(t.additional.sidewalkFlat&&(a.set("sidewalkFlat",t.additional.sidewalkFlat),n.sidewalkFlat=t.additional.sidewalkFlat),t.additional.stepIsWide&&(a.set("stepIsWide",t.additional.stepIsWide),n.stepIsWide=t.additional.stepIsWide),t.additional.correctHeight&&(a.set("correctHeight",t.additional.correctHeight),n.correctHeight=t.additional.correctHeight)),e.next=15,se(be.NEW_REPORT,a,n);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=a(192),ve=a.n(Ee);var Oe=function(){return r.a.createElement("main",{className:ve.a.main},r.a.createElement(u.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/query",component:pe}),r.a.createElement(d.a,{exact:!0,path:"/thanks",render:function(){return r.a.createElement("div",null,"Thanks.")}}),r.a.createElement(d.a,{render:function(e){var t=e.history;return r.a.createElement(H,{onSubmit:function(){var e=Object(l.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(a);case 2:t.push("/thanks");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}}))))},we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(398);i.a.render(r.a.createElement(Oe,null),document.getElementById("root")),function(e){console.log("production");var t=new URL("",window.location.href);console.log(t.origin),console.log(window.location.origin),t.origin===window.location.origin&&window.addEventListener("load",(function(){var t="".concat("","/sw.js");console.log(t),we?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(e){e.sync.register("sendReports"),console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}()}},[[200,1,2]]]);
//# sourceMappingURL=main.d706b3e0.chunk.js.map