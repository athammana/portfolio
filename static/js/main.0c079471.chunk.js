(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/BoozPic.00478779.png"},21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},27:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r);a(26),a(27);var c=function(e){return l.a.createElement("section",{id:"projects"},l.a.createElement("div",{id:"projectsbg",className:"projects-background"}),"Boombayah")},i=a(14),s=a(1),m=a(2),u=a(4),d=a(3),v=a(19),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={progress:e.completed},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"containerStyles"},l.a.createElement("div",{className:"fillerStyles"},console.log("".concat(this.props.completed,"%")),l.a.createElement("span",{id:this.props.barNum,className:"labelStyles",style:{width:"".concat(this.state.progress,"%"),backgroundColor:this.props.bgcolor}},"".concat(this.state.progress,"%"))))}}]),a}(l.a.Component);var b=function(e){return l.a.createElement("div",{id:"skills-table"},l.a.createElement("span",null,"Javascript")," ",l.a.createElement(p,{bgcolor:"purple",completed:"100"})," ",l.a.createElement("br",null),l.a.createElement("span",null,"Python")," ",l.a.createElement(p,{bgcolor:"teal",completed:"75"})," ",l.a.createElement("br",null),l.a.createElement("span",null,"Java")," ",l.a.createElement(p,{bgcolor:"yellow",completed:"60"})," ",l.a.createElement("br",null),l.a.createElement("span",null,"C#")," ",l.a.createElement(p,{bgcolor:"brown",completed:"50"})," ",l.a.createElement("br",null),l.a.createElement("span",null,"C++")," ",l.a.createElement(p,{bgcolor:"gold",completed:"25"})," ",l.a.createElement("br",null))},E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pieData:[{title:"Javascript",value:20,color:"Lime"},{title:"Python",value:15,color:"HoneyDew"},{title:"Java",value:35,color:"Coral"},{title:"C#",value:20,color:"Chartreuse"},{title:"C++",value:5,color:"PeachPuff"}]},n}return Object(m.a)(a,[{key:"render",value:function(){var e;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{id:"aboutbg",className:"about-background"}),l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"left-card card container"},"Really am a huge go getter, always looking for the bread. Hmu w some sick job details and Ill hook you up with some sick code",l.a.createElement(v.PieChart,(e={style:{width:"40vw",height:"60vh"},radius:"25",animate:"True",labelPosition:"20",label:function(e){return e.dataEntry.title},labelStyle:function(e){return{fontSize:"4px",fontFamily:"Montserrat"}}},Object(i.a)(e,"labelPosition",65),Object(i.a)(e,"data",this.state.pieData),e))),l.a.createElement("div",{className:" right-card card container"},l.a.createElement(b,null))))}}]),a}(l.a.Component),h=a(20),f=a.n(h),g=a(5),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"intro",className:"flex height-fix"},l.a.createElement("div",{id:"introbg",className:"intro-background"}),l.a.createElement("div",{className:"intro-content flex"},l.a.createElement("img",{src:f.a,className:"MePic",alt:"Me"}),l.a.createElement("h1",null,"Yo"),l.a.createElement("h1",null,"I'm AJ"),l.a.createElement(g.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500,style:{cursor:"pointer"}},l.a.createElement("svg",{height:"210",width:"500"},l.a.createElement("g",{fill:"none"},l.a.createElement("path",{stroke:"white",strokeWidth:"4",d:"M 167 75 l 80 20 l 80 -20"}))))))}}]),a}(l.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(){var e=window.scrollY>100,t=document.getElementById("navbar");e?t.classList.add("scrolled"):t.classList.remove("scrolled")}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return l.a.createElement("div",{id:"navbar",className:"header"},l.a.createElement("ul",{className:"navlist"},l.a.createElement("li",{className:"navitem"},l.a.createElement(g.Link,{activeClass:"active",to:"intro",spy:!0,smooth:!0,offset:-70,duration:500},"Intro")),l.a.createElement("li",{className:"navitem"},l.a.createElement(g.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About")),l.a.createElement("li",{className:"navitem"},l.a.createElement(g.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},"Projects"))))}}]),a}(l.a.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("div",{className:"overflow-wrap"},l.a.createElement(y,null),l.a.createElement(E,null),l.a.createElement(c,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.body),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0c079471.chunk.js.map