(this.webpackJsonpvaclaims=this.webpackJsonpvaclaims||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),l=n(6),s=n.n(l),j=(n(12),n(5)),r=n(2),o=n(4),b=(n(13),function(e,t){return t.reset?{name:"",email:"",phone:"",type:"",contact:!1}:Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},t.name,t.value))});var u=function(){var e=Object(a.useReducer)(b,{name:"",email:"",phone:"",type:"",contact:!1}),t=Object(j.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(!1),s=Object(j.a)(l,2),r=s[0],o=s[1],u=function(e){var t="checkbox"===e.target.type;i({name:e.target.name,value:t?e.target.checked:e.target.value})};return Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)("h1",{children:"Get help with your VA Claim"}),Object(c.jsx)("h2",{children:"Let's increase your VA rating"}),r&&Object(c.jsxs)("div",{children:["You are submitting the following:",Object(c.jsx)("ul",{children:Object.entries(n).map((function(e,t){return Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:e}),":",t.toString()]},e)}))})]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(!0),setTimeout((function(){o(!1),i({reset:!0})}),3e3)},children:[Object(c.jsx)("fieldset",{disabled:r,children:Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{children:"Name"}),Object(c.jsx)("input",{name:"name",onChange:u,value:n.name}),Object(c.jsx)("p",{children:"Email"}),Object(c.jsx)("input",{name:"email",onChange:u,value:n.email}),Object(c.jsx)("p",{children:"Phone (recommended)"}),Object(c.jsx)("input",{name:"phone",onChange:u,value:n.phone})]})}),Object(c.jsxs)("fieldset",{disabled:r,children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{children:"Please choose an option:"}),Object(c.jsxs)("select",{name:"type",onChange:u,value:n.type,children:[Object(c.jsx)("option",{value:"VA Claim",children:"VA Claim"}),Object(c.jsx)("option",{value:"VA Appeal",children:"VA Appeal"}),Object(c.jsx)("option",{value:"Not sure",children:"I'm not sure"})]})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{children:"Contact me about my VA Claim/Appeal."}),Object(c.jsx)("input",{type:"checkbox",name:"contact",onChange:u,checked:n.contact})]})]}),Object(c.jsx)("button",{type:"submit",disabled:r,children:"Submit"})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),i(e),l(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.54e2e3c1.chunk.js.map