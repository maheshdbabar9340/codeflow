(this.webpackJsonpcodeflow=this.webpackJsonpcodeflow||[]).push([[0],{29:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(26),i=c.n(n),r=(c(58),c(29),c(22)),l=c(9),j=(c(59),c.p+"static/media/img1.b87e8591.png"),o=c(18),d=(c(60),c.p+"static/media/logo.73010905.png"),b=c(83),h=c(51),O=c(3),x=function(e){var t=Object(a.useState)(!1),c=Object(o.a)(t,2),s=c[0],n=c[1];return Object(O.jsx)("div",{children:Object(O.jsxs)(b.a,{className:"justify-content-between",style:s?{background:"#01bfd9"}:{background:e.color},children:[Object(O.jsxs)("div",{className:"headings-logos-buttons",children:[Object(O.jsx)(h.a,{className:"nav-dynamic-button",size:40,onClick:function(){return n(!s)}}),Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("img",{src:d,alt:"logo",height:e.height})})]}),Object(O.jsxs)("div",{className:"navs",id:s?"hidden":"",children:[Object(O.jsx)(r.b,{className:" m-2 nav navbar-link-css",to:"/",onClick:function(){return n(!s)},children:"HOME"}),Object(O.jsx)(r.b,{className:" m-2 nav navbar-link-css",to:"/about",onClick:function(){return n(!s)},children:"ABOUT"})," ",Object(O.jsx)(r.b,{className:" m-2 nav navbar-link-css",to:"/events",onClick:function(){return n(!s)},children:"EVENTS"}),Object(O.jsx)(r.b,{className:" m-2 nav navbar-link-css",to:"/team",onClick:function(){return n(!s)},children:"TEAM"})," ",Object(O.jsx)(r.b,{className:" m-2 nav navbar-link-css",to:"/contact",onClick:function(){return n(!s)},children:"CONTACT US"})]})]})})};var u=function(){return Object(O.jsxs)("div",{className:"Home",id:"Home",children:[Object(O.jsx)(x,{color:"",height:"50px",padding:"5vh"}),Object(O.jsxs)("div",{className:"parent",children:[Object(O.jsxs)("div",{class:"col-5 son",children:[Object(O.jsx)("span",{id:"codeflow-text",className:"codeflow-text",children:Object(O.jsx)("b",{children:"Codeflow"})}),Object(O.jsx)("span",{id:"learning-text",className:"learning-text",children:Object(O.jsx)("b",{children:"Learning"})}),Object(O.jsx)("span",{className:"break"}),Object(O.jsx)("span",{id:"learning-text",className:"learning-text",children:Object(O.jsx)("b",{children:"must go on"})})]}),Object(O.jsx)("div",{class:"col-7 daughter",children:Object(O.jsx)("img",{src:j,alt:"loading"})})]})]})};var m=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{color:"#01bfd9",height:"50px",padding:"5vh"}),Object(O.jsx)("div",{className:"focus",children:"Coming soon !!"})]})},p=c(47),g=c(27),v=c(45),f=(c(78),c(79),v.a.initializeApp({apiKey:"AIzaSyAc1HwKpWdsEPUBaU0y9mWmla5EU3_vqCQ",authDomain:"codeflow-org.firebaseapp.com",databaseURL:"https://codeflow-org-default-rtdb.firebaseio.com",projectId:"codeflow-org",storageBucket:"codeflow-org.appspot.com",messagingSenderId:"706543120697",appId:"1:706543120697:web:e90a5abaa092a306c778e8"})),N=f.storage(),y=f.firestore(),w=v.a.firestore.FieldValue.serverTimestamp(),k=function(e){var t=Object(a.useState)([]),c=Object(g.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){y.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)(Object(p.a)({},e.data()),{},{id:e.id}))})),n(t)}))}),[e]),{docs:s}},C=c(84),S=c(85),T=c(81),B=(c(69),function(){var e=k("events").docs,t=Object(a.useState)(0),c=Object(o.a)(t,2);c[0],c[1];return Object(O.jsxs)("div",{className:"events ",children:[Object(O.jsx)(x,{color:"#01bfd9",height:"50px",padding:"5vh"}),Object(O.jsx)("div",{class:"focus",children:"Events"}),Object(O.jsx)("div",{className:" ",children:Object(O.jsx)("div",{className:"row justify-content-center",children:e&&e.map((function(e){return Object(O.jsx)("div",{className:"col-3 m-3",children:Object(O.jsx)(C.a,{defaultActiveKey:"0",children:Object(O.jsxs)(S.a,{children:[Object(O.jsx)("img",{src:e.url,className:"img.fluid\r "}),Object(O.jsxs)("div",{className:"text-white bg-warning p-2",children:[" ",e.title]}),Object(O.jsx)(S.a.Header,{children:Object(O.jsx)(C.a.Toggle,{as:T.a,variant:"info",eventKey:"1",children:"Know More !"})}),Object(O.jsx)(C.a.Collapse,{eventKey:"1",children:Object(O.jsx)(S.a.Body,{children:Object(O.jsx)("p",{children:e.content})})})]})})})}))})})]})}),E=(c(72),c.p+"static/media/team.82a4fe3d.jpg"),A=c.p+"static/media/youtube.53e4f973.png",I=c.p+"static/media/opensource.eeacc999.jpg";var U=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{color:"#01bfd9",height:"50px"}),Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("h6",{className:"Collabrated",children:"Collaborated With"})]}),Object(O.jsx)("div",{className:" justify-content-center",children:Object(O.jsx)("div",{className:""})}),Object(O.jsx)("div",{className:"focus",children:"Our Focus Areas"}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-4 ",children:[Object(O.jsx)("img",{className:"img1",src:E,alt:"Image"}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"caption orange ",children:"Community Building"})})]}),Object(O.jsxs)("div",{className:"col-4 ",children:[Object(O.jsx)("img",{className:"img1 img-opensource",src:I,alt:"Image"}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"caption green",children:"Open Source"})})]}),Object(O.jsxs)("div",{className:"col-4 ",children:[Object(O.jsx)("img",{className:"img1 img-youtube",src:A,alt:"Image"}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"caption orange",children:"Youtube"})})]})]})})]})},F=(c(73),c(28));var L=function(){return Object(O.jsxs)("div",{className:"contact",children:[Object(O.jsx)(x,{color:"#01bfd9",height:"50px",padding:"5vh"}),Object(O.jsxs)("div",{className:"nhi-custom",children:[Object(O.jsx)("a",{href:"https://github.com/codeflow201",target:"_blank",children:Object(O.jsx)(S.a,{className:"text-center",children:Object(O.jsx)(S.a.Body,{children:Object(O.jsxs)(S.a.Text,{children:[Object(O.jsxs)("div",{className:"m-1",children:[Object(O.jsx)(F.a,{className:"nav-dynamic-button",size:40})," ","Github"]}),"Check out our GitHub repository to see our project boards, code and spike reports."]})})})}),Object(O.jsx)("a",{href:"https://www.youtube.com/channel/UCIsECRBRWOalTC51co-tJWg",target:"_blank",children:Object(O.jsx)(S.a,{className:"text-center",children:Object(O.jsx)(S.a.Body,{children:Object(O.jsxs)(S.a.Text,{children:[Object(O.jsxs)("div",{className:"m-1",children:[Object(O.jsx)(F.e,{className:"nav-dynamic-button",size:40})," Youtube"]}),"Check out our videos."]})})})}),Object(O.jsx)("a",{href:"https://www.linkedin.com/company/codefloworg/",target:"_blank",children:Object(O.jsx)(S.a,{className:"text-center",children:Object(O.jsx)(S.a.Body,{children:Object(O.jsxs)(S.a.Text,{children:[Object(O.jsxs)("div",{className:"m-1",children:[Object(O.jsx)(F.b,{className:"nav-dynamic-button",size:40})," Linked in"]}),"Check out , our linked in.!!"]})})})}),Object(O.jsx)("a",{href:"https://twitter.com/codefloworg",target:"_blank",children:Object(O.jsx)(S.a,{className:"text-center",children:Object(O.jsx)(S.a.Body,{children:Object(O.jsxs)(S.a.Text,{children:[Object(O.jsxs)("div",{className:"m-1",children:[Object(O.jsx)(F.d,{className:"nav-dynamic-button",size:40})," ","Twitter"]}),"See our latest tweets .!!"]})})})}),Object(O.jsx)("a",{href:"https://t.me/joinchat/FdJhyMumJK5sryCv",target:"_blank",children:Object(O.jsx)(S.a,{className:"text-center",children:Object(O.jsx)(S.a.Body,{children:Object(O.jsxs)(S.a.Text,{children:[Object(O.jsxs)("div",{className:"m-1",children:[Object(O.jsx)(F.c,{className:"nav-dynamic-button",size:40})," ","Telegram"]}),"Join us on Telegram !!"]})})})})]})]})},H=c(86),z=c(82),R=c(46),K=c.n(R),_=c(53),J=function(e,t,c){var s=Object(a.useState)(0),n=Object(g.a)(s,2),i=n[0],r=n[1],l=Object(a.useState)(null),j=Object(g.a)(l,2),o=j[0],d=j[1],b=Object(a.useState)(null),h=Object(g.a)(b,2),O=h[0],x=h[1];return Object(a.useEffect)((function(){var a=N.ref(e.name),s=y.collection("events");a.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){d(e)}),Object(_.a)(K.a.mark((function e(){var n,i,r,l;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getDownloadURL();case 2:n=e.sent,i=w,r=t,l=c,s.add({title:r,url:n,content:l,createdAt:i}),x(n);case 8:case"end":return e.stop()}}),e)}))))}),[e]),{progress:i,url:O,error:o}},D=c(87),G=function(e){var t=e.file,c=(e.setFile,e.heading),a=e.description,s=(e.setHeading,e.setDescription,J(t,c,a)),n=s.url,i=s.progress;return console.log(i,n),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"m-2 ",children:Object(O.jsx)(D.a,{animated:!0,now:i})})})},M=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),i=Object(o.a)(n,2),r=i[0],l=i[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),b=d[0],h=d[1],u=Object(a.useState)(null),m=Object(o.a)(u,2),p=m[0],g=m[1],v=Object(a.useState)(null),f=Object(o.a)(v,2),N=f[0],y=f[1],w=Object(a.useState)(null),k=Object(o.a)(w,2),C=k[0],S=k[1],B=["image/png","image/jpeg","image/jpg"];return Object(a.useEffect)((function(){if(c){console.log("hi!");var e=URL.createObjectURL(c);return g(e),function(){return URL.revokeObjectURL(e)}}g(null)}),[c]),Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{color:"#01bfd9",height:"30px"}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row m-3",children:[Object(O.jsxs)("div",{className:"col-6",children:[Object(O.jsx)("div",{className:"output",children:b&&Object(O.jsx)(H.a,{className:"m-4",variant:"danger",children:"Pls input image file of vaild format (.png , .jpeg , .jpg) !!"})}),Object(O.jsxs)(z.a,{className:"border p-3 ",children:[Object(O.jsxs)(z.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(O.jsx)(z.a.Label,{children:"Heading"}),Object(O.jsx)(z.a.Control,{type:"text",placeholder:"heading of the event",onChange:function(e){var t=e.target.value;t&&y(t)}})]}),Object(O.jsx)(z.a.Group,{children:Object(O.jsx)(z.a.File,{type:"file",id:"exampleFormControlFile1",label:"Thumbnail / Poster:",onChange:function(e){var t=e.target.files[0];t&&B.includes(t.type)?(s(t),h("")):(s(null),h("Please select image of type (png, jpg, jpeg)"))}})}),Object(O.jsxs)(z.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(O.jsx)(z.a.Label,{children:"Description:"}),Object(O.jsx)(z.a.Control,{as:"textarea",rows:3,onChange:function(e){var t=e.target.value;t&&S(t)}})]}),Object(O.jsx)(T.a,{variant:"primary",onClick:function(e){c&&N&&C?(l(c),h("")):h("Please select image ")},children:"Submit"})]})]}),Object(O.jsx)("div",{className:"col-6",children:Object(O.jsxs)("div",{className:"output",children:[c&&Object(O.jsx)("img",{src:p,alt:"image",className:"col-12"}),r&&Object(O.jsx)(G,{file:r,setFile:l,heading:N,description:C,setHeading:y,setDescription:S})]})})]})})]})};var P=function(){return Object(O.jsx)(r.a,{basename:"/codeflow",children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(l.a,{path:"/",exact:!0,component:u}),Object(O.jsx)(l.a,{path:"/team",exact:!0,component:m}),Object(O.jsx)(l.a,{path:"/events",exact:!0,component:B}),Object(O.jsx)(l.a,{path:"/about",exact:!0,component:U}),Object(O.jsx)(l.a,{path:"/contact",exact:!0,component:L}),Object(O.jsx)(l.a,{path:"/Add",exact:!0,component:M})]})})};c(76);i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.0ac7480d.chunk.js.map