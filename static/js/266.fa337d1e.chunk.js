"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{2266:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var o,t,i,a,c,d,s,u,l,x,p,m,h=r(168),b=r(6114),f=b.ZP.div(o||(o=(0,h.Z)(["\n  width: 300px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #e8e8e8;\n  box-shadow: 2px 2px 10px #ccc;\n"]))),g=b.ZP.div(t||(t=(0,h.Z)(["\n  margin-bottom: 15px;\n"]))),v=b.ZP.label(i||(i=(0,h.Z)(["\n  font-size: 18px;\n  margin-bottom: 5px;\n"]))),j=b.ZP.input(a||(a=(0,h.Z)(["\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  transition: 0.5s;\n"]))),w=b.ZP.button(c||(c=(0,h.Z)(["\n  width: 100%;\n  background-color: #333;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background-color: #ccc;\n    color: black;\n  }\n"]))),Z=r(4420),k=r(8007),y=(r(5834),r(7980)),C=r(1799),P=r(3553),A=function(n){return n.contacts.data},F=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},D=(0,P.P1)([A,function(n){return n.filter}],(function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),L=r(184),T=function(){var n=(0,Z.v9)(A),e=(0,Z.I0)(),r=(0,y.TA)({initialValues:{name:"",number:""},validationSchema:k.Ry({name:k.Z_().min(2,"Too Short!").max(8,"Too Long!").required("Required name"),number:k.Rx().min(12,"Too Short!").typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").required("A phone number is required")}),onSubmit:function(o){if(n.find((function(n){return n.name.toLowerCase()===o.name.toLowerCase()})))return r.resetForm(),void alert("".concat(o.name," is already in contact."));e((0,C.uK)(o)),r.setSubmitting(!1),r.resetForm()}});return(0,L.jsx)(f,{children:(0,L.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,L.jsxs)(g,{children:[(0,L.jsx)(v,{htmlFor:"firstName",children:"Name"}),r.touched.name&&r.errors.name?(0,L.jsx)("div",{className:"error",children:r.errors.name}):null,(0,L.jsx)(j,{style:r.touched.name&&r.errors.name?{backgroundColor:"red"}:null,id:"name",name:"name",type:"text",onChange:r.handleChange,value:r.values.name})]}),(0,L.jsxs)(g,{children:[(0,L.jsx)(v,{htmlFor:"lastName",children:"phone"}),r.touched.number&&r.errors.number?(0,L.jsx)("div",{className:"error",children:r.errors.number}):null,(0,L.jsx)(j,{style:r.touched.number&&r.errors.number?{backgroundColor:"red"}:null,id:"number",name:"number",type:"tel",onChange:r.handleChange,value:r.values.number})]}),(0,L.jsx)(w,{type:"submit",children:"Submit"})]})})},z=r(2791),I=r(9493),N=r(9655),_=b.ZP.li(d||(d=(0,h.Z)(["\n     width: 420px;\n  padding: 12px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n  justify-content: space-between;\n  background: #EDFBD8;\n  border-radius: 8px;\n  border: 1px solid #84D65A;\n  box-shadow: 0px 0px 5px -3px #111;\n  margin: 5px;\n"]))),q=b.ZP.p(s||(s=(0,h.Z)(["\n    font-size: 15px;\n    \n    margin-right: 5px;\n    &:last-child{\n       margin-right: 0; \n    }\n"]))),E=b.ZP.button(u||(u=(0,h.Z)(["\n      font-family: monospace;\n  background-color: #84D65A;\n  color: #345a21;\n  border: none;\n  border-radius: 8px;\n  width: 80px;\n  height: 35px;\n  transition: .3s;\n\n  &:hover{\n      background-color: #ff3718;\n  box-shadow: 0 0 7px 5px #df0e0a;\n  color: #a70303;\n  }\n"]))),R=function(n){var e=n.item,r=(0,Z.I0)();return(0,L.jsxs)(_,{children:[(0,L.jsx)(q,{children:e.name})," ",(0,L.jsx)(q,{children:e.number}),(0,L.jsx)(E,{onClick:function(){return n=e.id,void r((0,C.GK)(n));var n},type:"submit",children:"Delete"})]})},K=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(S);(0,z.useEffect)((function(){e&&N.Am.error(e),n((0,C.yF)())}),[n,e]);var r=(0,Z.v9)(D),o=(0,Z.v9)(F);return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("ul",{children:[o&&(0,L.jsx)(I.Z,{}),!!r.length&&r.map((function(n){return(0,L.jsx)(R,{item:n},n.id)}))]})})},B=b.ZP.input(l||(l=(0,h.Z)(["\n      padding: 10px;\n  width: 120px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  box-shadow: 0px 2px 3px 2px #345a21;\n  font-size: 18px;\n  transition: width 0.3s;\n  margin: 10px;\n\n  &:focus{\n  outline: 1px solid #84D65A;\n  box-shadow: none;\n  width: 230px;\n  box-shadow: -1px 9px 16px 5px #345a21;\n  }\n  &::placeholder {\n  color: #345a21;\n}\n"]))),G=r(8833),V=function(){var n=(0,Z.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("p",{children:"Find contacts by name"}),(0,L.jsx)(B,{onChange:function(e){var r=e.target.value;n((0,G.T)(r))},placeholder:"Search...",name:"filter",type:"text"})]})},H=b.ZP.h1(x||(x=(0,h.Z)(["\n  padding-top: 30px;\n  text-align: center;\n"]))),J=b.ZP.h2(p||(p=(0,h.Z)(["\n  text-align: center;\n"]))),M=b.ZP.div(m||(m=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));function O(){var n=(0,Z.v9)(S),e=(0,Z.I0)(),r=(0,Z.v9)(D);return(0,z.useEffect)((function(){n&&N.Am.error(n),e((0,C.yF)())}),[e,n]),(0,L.jsxs)(M,{children:[(0,L.jsx)(H,{children:"Phone book"}),(0,L.jsx)(J,{children:"Adding new contact"}),(0,L.jsx)(T,{}),(0,L.jsx)(J,{children:"Contacts"}),(0,L.jsx)(V,{}),!!r.length&&(0,L.jsx)(K,{})]})}}}]);
//# sourceMappingURL=266.fa337d1e.chunk.js.map