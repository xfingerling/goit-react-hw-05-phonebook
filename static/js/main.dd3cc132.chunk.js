(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={enter:"popTransition_enter__Z8uGf",enterActive:"popTransition_enterActive__3cFub",exit:"popTransition_exit__9Nyfg",exitActive:"popTransition_exitActive__1nA81"}},,,,,,function(t,e,n){t.exports={form:"ContactForm_form__3IVLV",input:"ContactForm_input__3KTqF",btn:"ContactForm_btn__1C0zJ"}},,,,,,,function(t,e,n){t.exports={logoWrap:"Phonebook_logoWrap__11h-e",logo:"Phonebook_logo__1DBQE",title:"Phonebook_title__2PuiD Phonebook_logoWrap__11h-e"}},,,,,,function(t,e,n){t.exports={enter:"logoTransition_enter__3hsnB",enterActive:"logoTransition_enterActive__pSxBN"}},function(t,e,n){t.exports={list:"ContactList_list__1_-th"}},function(t,e,n){t.exports={listItem:"ContactListItem_listItem__2tvAB"}},function(t,e,n){t.exports={btn:"DeleteBtn_btn__1lET9"}},function(t,e,n){t.exports={input:"Filter_input__TiudA"}},function(t,e,n){t.exports={alert:"Notification_alert__1EmE-"}},,function(t,e,n){t.exports=n(36)},,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(4),i=(n(32),n(17)),c=n(5),l=n(9),s=n(10),u=n(12),m=n(13),h=n(37),f=n(19),p=n.n(f),b=n(14),_=n.n(b),d=n(20),v=n.n(d),E=n(8),S=n(7),g=n.n(S),C={name:"",number:""},N=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state=Object(c.a)({},C),t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(c.a)({},t.state)),t.setState(Object(c.a)({},C))},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(E.a)({},a,o))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:g.a.form},o.a.createElement("input",{className:g.a.input,name:"name",type:"text",value:e,onChange:this.handleChange,placeholder:"Name",autoComplete:"off"}),o.a.createElement("input",{className:g.a.input,name:"number",type:"number",value:n,onChange:this.handleChange,placeholder:"Number",autoComplete:"off"}),o.a.createElement("button",{className:g.a.btn,type:"submit",disabled:!e||!n},"Add contact"))}}]),n}(a.Component),A=n(38),x=n(21),y=n.n(x),w=n(1),O=n.n(w),j=n(22),k=n.n(j),D=n(23),F=n.n(D),T=function(t){var e=t.onDelete;return o.a.createElement("button",{className:F.a.btn,onClick:e},"Delete")},L=function(t){var e=t.name,n=t.number,a=t.onDelete;return o.a.createElement("li",{className:k.a.listItem},e,": ",n,o.a.createElement(T,{onDelete:a}))},B=function(t){var e=t.contacts,n=void 0===e?[]:e,a=t.onDelete,r=n.map((function(t){var e=t.id,n=t.name,r=t.number;return o.a.createElement(h.a,{key:e,timeout:250,classNames:O.a,unmountOnExit:!0},o.a.createElement(L,{name:n,number:r,onDelete:function(){return a(e)}}))}));return o.a.createElement(A.a,{component:"ul",className:y.a.list},r)},I=n(24),P=n.n(I),J=function(t){var e=t.value,n=t.onFilter,a=t.isShow;return o.a.createElement(h.a,{in:a,timeout:250,classNames:O.a,unmountOnExit:!0},o.a.createElement("input",{className:P.a.input,type:"text",onChange:n,value:e,placeholder:"Find contact by name"}))},W=n(25),q=n.n(W),U=function(t){var e=t.text,n=t.isShow;return o.a.createElement(h.a,{in:n,timeout:250,classNames:O.a,unmountOnExit:!0},o.a.createElement("div",{className:q.a.alert},o.a.createElement("p",null,e)))},K=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",isAlertShow:!1,isLogoShow:!1},t.isUniqueName=function(e){var n=e.name;return!t.state.contacts.some((function(t){return t.name===n}))},t.handleSubmit=function(e){if(t.isUniqueName(e)){var n=Object(c.a)({id:p()()},e);t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))}else t.setState((function(t){return{isAlertShow:!t.isAlertShow}})),setTimeout((function(){t.setState((function(t){return{isAlertShow:!t.isAlertShow}}))}),3e3)},t.handleFilter=function(e){t.setState({filter:e.target.value})},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContactsByName=function(e,n){var a=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return t.sortContactsAlphabetically(a)},t.sortContactsAlphabetically=function(t){return Object(i.a)(t).sort((function(t,e){return t.name<e.name?-1:t.name<e.name?1:0}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState((function(t){return{isLogoShow:!t.isLogoShow}}));var t=localStorage.getItem("contacts");if(t){var e=JSON.parse(t);this.setState({contacts:e})}}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=t.isAlertShow,r=t.isLogoShow,i=this.filterContactsByName(e,n),c=this.sortContactsAlphabetically(e);return o.a.createElement("div",null,o.a.createElement("div",{className:_.a.logoWrap},o.a.createElement(h.a,{in:r,timeout:500,classNames:v.a},o.a.createElement("h2",{className:_.a.logo},"Phonebook"))),o.a.createElement(N,{onAddContact:this.handleSubmit}),o.a.createElement("h2",{className:_.a.title},"Contacts"),o.a.createElement(J,{onFilter:this.handleFilter,value:n,isShow:e.length>=2}),o.a.createElement(B,{contacts:n.length?i:c,onDelete:this.handleDelete}),o.a.createElement(U,{isShow:a,text:"Contact is already exist"}))}}]),n}(a.Component),V=function(){return o.a.createElement(K,null)};Object(r.render)(o.a.createElement(V,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.dd3cc132.chunk.js.map