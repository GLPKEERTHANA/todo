(this.webpackJsonpreact_feed=this.webpackJsonpreact_feed||[]).push([[0],{24:function(e,t,a){e.exports=a(56)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),o=a.n(r),i=(a(29),a(2)),c=a(3),l=a(5),u=a(4),m=(a(30),a(31),a(12)),d=a(6),h=(a(32),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row ",id:"Body"},s.a.createElement("div",{className:"medium-12 columns"},s.a.createElement("h2",{id:"welcomeText"},s.a.createElement("p",null,"TO DO LIST WEB APPLICATION")),s.a.createElement("div",{className:"login"},s.a.createElement("a",{href:"/login",className:"button signup-class"},"Login")),s.a.createElement("a",{href:"/signup",className:"button success login-class"},"Signup")))}}]),a}(n.Component)),p=a(1),f=(a(33),a(17)),g=a.n(f),v=(a(46),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.feedData.map((function(e,t){var a,n=this,r=!0;return a=(r="F"!==e.feed_status)?s.a.createElement("label",null,s.a.createElement("strike",null,s.a.createElement(g.a,null,s.a.createElement("h5",null,e.feed))," ")):s.a.createElement("label",null,s.a.createElement(g.a,null,s.a.createElement("h5",null,e.feed))," "),s.a.createElement("div",{className:"centered"},s.a.createElement("div",{className:"medium-12 columns",key:t},s.a.createElement("div",{className:"people-you-might-know"},s.a.createElement("div",{className:"row add-people-section"},s.a.createElement("div",{className:"small-12 medium-10 columns about-people"},s.a.createElement("div",{className:"about-people-author"},s.a.createElement("div",{className:"checkboxes"},s.a.createElement("input",{type:"checkbox",onChange:function(t){return n.props.statusFeedAction(t,e.feed_id)},data:e.feed_id,value:t,checked:r}),a),s.a.createElement("br",null))),s.a.createElement("div",{className:"small-12 medium-2 columns add-friend"},s.a.createElement("div",{className:"add-friend-action"},s.a.createElement("button",{id:"del",className:"button small btn-color",onClick:function(t){return n.props.deleteFeed(t,e.feed_id)},data:e.feed_id,value:t},s.a.createElement("i",{className:"fa fa-user-times","aria-hidden":"true"}),"Delete")))))))}),this);return s.a.createElement("div",null,e)}}]),a}(n.Component)),b=a(18),E=(a(49),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[],data1:[],userFeed:"",redirectToReferrer:!1,name:""},n.statusFeed=n.statusFeed.bind(Object(p.a)(n)),n.statusFeedAction=n.statusFeedAction.bind(Object(p.a)(n)),n.getUserFeed=n.getUserFeed.bind(Object(p.a)(n)),n.getUserFeedDone=n.getUserFeedDone.bind(Object(p.a)(n)),n.feedUpdate=n.feedUpdate.bind(Object(p.a)(n)),n.onChange=n.onChange.bind(Object(p.a)(n)),n.deleteFeed=n.deleteFeed.bind(Object(p.a)(n)),n.deleteFeedAction=n.deleteFeedAction.bind(Object(p.a)(n)),n.logout=n.logout.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){sessionStorage.getItem("userData")?(this.getUserFeed(),this.getUserFeedDone()):this.setState({redirectToReferrer:!0})}},{key:"feedUpdate",value:function(e){var t=this;e.preventDefault();var a={user_id:JSON.parse(sessionStorage.getItem("userData")).userData.user_id,feed:this.state.userFeed};this.state.userFeed&&fetch("https://floating-sierra-52069.herokuapp.com/todo/task",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json().then((function(e){console.log(e);t.setState({data:t.state.data})}))})),window.location.reload(!1)}},{key:"statusFeed",value:function(e,t){var a=this;Object(b.confirmAlert)({title:"Status Feed",message:"Are you sure to update status of this feed.",buttons:[{label:"Yes",onClick:function(){return a.statusFeedAction(e,t)}},{label:"No",onClick:function(){return alert("Click No")}}]})}},{key:"statusFeedAction",value:function(e,t){for(var a=this,n={user_id:JSON.parse(sessionStorage.getItem("userData")).userData.user_id,feed_id:t},s=this.state.data.length,r=0;r<s;r++)if(this.state.data[r].feed_id===t){r;break}n&&fetch("https://floating-sierra-52069.herokuapp.com/todo/task/"+n.feed_id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){console.log(e),a.setState({data:a.state.data})}))})),window.location.reload(!1)}},{key:"deleteFeed",value:function(e,t){var a=this;Object(b.confirmAlert)({title:"Delete Task",message:"Are you sure to delete this task.",buttons:[{label:"Yes",onClick:function(){return a.deleteFeedAction(e,t)}},{label:"No",onClick:function(){return alert("Click No")}}]})}},{key:"deleteFeedAction",value:function(e,t){for(var a=this,n={user_id:JSON.parse(sessionStorage.getItem("userData")).userData.user_id,feed_id:t},s=this.state.data.length,r=0,o=0;o<s;o++)if(console.log(this.state.data[o].feed_id),this.state.data[o].feed_id===t){r=o;break}n&&fetch("https://floating-sierra-52069.herokuapp.com/todo/task/"+n.feed_id,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json().then((function(e){console.log(e),a.state.data.splice(r,1),a.setState({data:a.state.data}),200===e.status?alert("Task Deleted"):alert("Task deletion error")}))})),window.location.reload(!1)}},{key:"getUserFeed",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("userData"));this.setState({name:t.userData.name});var a=t.userData.user_id;t&&fetch("https://floating-sierra-52069.herokuapp.com/todo/task/statusFalse/"+a,{method:"GET"}).then((function(t){return t.json().then((function(t){console.log(t);var a=t;a&&e.setState({data:a})}))}))}},{key:"getUserFeedDone",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("userData"));this.setState({name:t.userData.name});var a=t.userData.user_id;t&&fetch("https://floating-sierra-52069.herokuapp.com/todo/task/statusTrue/"+a,{method:"GET"}).then((function(t){return t.json().then((function(t){console.log(t);var a=t;a&&e.setState({data1:a})}))}))}},{key:"onChange",value:function(e){this.setState({userFeed:e.target.value})}},{key:"logout",value:function(){sessionStorage.setItem("userData",""),sessionStorage.clear(),this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){if(this.state.redirectToReferrer)return s.a.createElement(d.a,{to:"/login"});var e,t,a=this.state.data.length,n=this.state.data1.length;return e=0===a?s.a.createElement("h4",null,"  ",s.a.createElement("p",{className:"textcenter"}," ")," "):s.a.createElement("h4",null," ",s.a.createElement("p",{className:"textcenter"},"  In Complete Tasks ")," "),t=0===n?s.a.createElement("h4",null,"  ",s.a.createElement("p",{className:"textcenter"}," ")," "):s.a.createElement("h4",null," ",s.a.createElement("p",{className:"textcenter"}," Completed Tasks ")," "),s.a.createElement("div",{className:"row",id:"Body"},s.a.createElement("div",{className:"medium-12 columns"},s.a.createElement("a",{href:"#",onClick:this.logout,className:"logout"},"Logout")),s.a.createElement("form",{onSubmit:this.feedUpdate,method:"post"},s.a.createElement("input",{className:"text1",name:"userFeed",onChange:this.onChange,value:this.state.userFeed,type:"text",placeholder:"Write your task here..."}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Post",className:"button login-c",onClick:this.feedUpdate})),s.a.createElement("br",null),e,s.a.createElement(v,{feedData:this.state.data,deleteFeed:this.deleteFeed,statusFeedAction:this.statusFeedAction,name:this.state.name}),t,s.a.createElement(v,{feedData:this.state.data1,deleteFeed:this.deleteFeed,statusFeedAction:this.statusFeedAction,name:this.state.name}))}}]),a}(n.Component)),O=a(14);a(53);var k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",password:"",status:!1,redirectToReferrer:!1},e.login=e.login.bind(Object(p.a)(e)),e.onChange=e.onChange.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"login",value:function(){var e=this;this.state.status=!0,this.state.username&&this.state.password?fetch("https://floating-sierra-52069.herokuapp.com/todo/users/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)}).then((function(t){return t.json().then((function(t){var a=t;console.log(t),console.log(a.userData),a.userData?(sessionStorage.setItem("userData",JSON.stringify(a)),e.setState({redirectToReferrer:!0})):alert(t.error)}))})).catch((function(e){alert(e)})):alert("Username and Password are required")}},{key:"onChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.redirectToReferrer?"admin"===this.state.username?s.a.createElement(d.a,{to:"/admin"}):s.a.createElement(d.a,{to:"/home"}):sessionStorage.getItem("userData")?s.a.createElement(d.a,{to:"/home"}):s.a.createElement("div",{className:"row",id:"Body"},s.a.createElement("div",{className:"medium-5 columns left"},s.a.createElement("h4",null,"Login"),s.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onChange:this.onChange}),s.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.onChange}),s.a.createElement("input",{type:"submit",className:"button",value:"Login",onClick:this.login}),s.a.createElement("a",{href:"/signup"},"Registration")))}}]),a}(n.Component),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",email:"",name:"",redirectToReferrer:!1},n.signup=n.signup.bind(Object(p.a)(n)),n.onChange=n.onChange.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"signup",value:function(){var e=this;this.state.username&&this.state.password&&this.state.email&&this.state.name&&fetch("https://floating-sierra-52069.herokuapp.com/todo/users/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)}).then((function(t){return t.json().then((function(t){console.log(t);var a=t;a.userData?(sessionStorage.setItem("userData",JSON.stringify(a)),e.setState({redirectToReferrer:!0})):alert(t.error)}))}))}},{key:"onChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.redirectToReferrer||sessionStorage.getItem("userData")?s.a.createElement(d.a,{to:"/home"}):s.a.createElement("div",{className:"row ",id:"sBody"},s.a.createElement("div",{className:"medium-5 columns left"},s.a.createElement("h4",null,"Signup"),s.a.createElement("form",null,s.a.createElement("input",{type:"text",name:"email",placeholder:"Email",onChange:this.onChange,required:!0}),s.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:this.onChange,required:!0}),s.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onChange:this.onChange,required:!0}),s.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.onChange,required:!0}),s.a.createElement("input",{type:"submit",className:"button",value:"Sign Up",onClick:this.signup,required:!0}),s.a.createElement("a",{href:"/login"},"Login"))))}}]),a}(n.Component),j=(a(54),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[],data1:[],userFeed:"",usernames:[],redirectToReferrer:!1,name:""},n.logout=n.logout.bind(Object(p.a)(n)),n.getUsernames=n.getUsernames.bind(Object(p.a)(n)),n.onChange=n.onChange.bind(Object(p.a)(n)),n.getUserFeed=n.getUserFeed.bind(Object(p.a)(n)),n.getUserFeedDone=n.getUserFeedDone.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){sessionStorage.getItem("userData")?this.getUsernames():this.setState({redirectToReferrer:!0})}},{key:"getUsernames",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("userData"));this.setState({name:t.userData.name});t.userData.user_id;t&&fetch("https://floating-sierra-52069.herokuapp.com/todo/users",{method:"GET"}).then((function(t){return t.json().then((function(t){console.log(t);var a=t;a&&e.setState({usernames:a})}))}))}},{key:"onChange",value:function(e){this.getUserFeed(e.target.value),this.getUserFeedDone(e.target.value)}},{key:"getUserFeed",value:function(e){var t=this,a=Number(e),n=JSON.parse(sessionStorage.getItem("userData"));this.setState({name:n.userData.name}),n&&fetch("https://floating-sierra-52069.herokuapp.com/todo/task/statusFalse/"+a,{method:"GET"}).then((function(e){return e.json().then((function(e){console.log(e);var a=e;a&&t.setState({data:a})}))}))}},{key:"getUserFeedDone",value:function(e){var t=this,a=Number(e),n=JSON.parse(sessionStorage.getItem("userData"));this.setState({name:n.userData.name}),n&&fetch("https://floating-sierra-52069.herokuapp.com/todo/task/statusTrue/"+a,{method:"GET"}).then((function(e){return e.json().then((function(e){console.log(e);var a=e;a&&t.setState({data1:a})}))}))}},{key:"logout",value:function(){sessionStorage.setItem("userData",""),sessionStorage.clear(),this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){var e=this.state.data.map((function(e){return s.a.createElement("li",{key:e.feed},e.feed)})),t=this.state.data1.map((function(e){return s.a.createElement("li",{key:e.feed},e.feed)}));return this.state.redirectToReferrer?s.a.createElement(d.a,{to:"/login"}):s.a.createElement("div",{className:"row",id:"Body"},s.a.createElement("div",{className:"medium-12 columns"},s.a.createElement("a",{href:"#",onClick:this.logout,className:"logout"},"Logout")),s.a.createElement("br",null),s.a.createElement("div",{align:"center"},s.a.createElement("select",{onChange:this.onChange},s.a.createElement("option",null," Select a username "),this.state.usernames.map((function(e){return s.a.createElement("option",{key:e.user_id,value:e.user_id},e.username)})))),s.a.createElement("h4",null,s.a.createElement("p",{className:"textcenter"},"  In Complete Tasks ")," "),s.a.createElement("div",{className:"centered"},s.a.createElement("div",{className:"medium-12 columns"},s.a.createElement("div",{className:"people-you-might-know"},s.a.createElement("div",{className:"row add-people-section"},s.a.createElement("div",{className:"small-12 medium-10 columns about-people"},s.a.createElement("div",{className:"about-people-author"},e)))))),s.a.createElement("h4",null,s.a.createElement("p",{className:"textcenter"},"  Completed Tasks ")," "),s.a.createElement("div",{className:"centered"},s.a.createElement("div",{className:"medium-12 columns"},s.a.createElement("div",{className:"people-you-might-know"},s.a.createElement("div",{className:"row add-people-section"},s.a.createElement("div",{className:"small-12 medium-10 columns about-people"},s.a.createElement("div",{className:"about-people-author"},t)))))))}}]),a}(n.Component)),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row small-up-2 medium-up-3 large-up-4",id:"Body"},s.a.createElement("div",{className:"medium-12 columns"},s.a.createElement("h2",null,"404 Page")))}}]),a}(n.Component),S=function(){return s.a.createElement(m.a,null,s.a.createElement(d.d,null,s.a.createElement(d.b,{exact:!0,path:"/",component:h}),s.a.createElement(d.b,{path:"/home",component:E}),s.a.createElement(d.b,{path:"/admin",component:j}),s.a.createElement(d.b,{path:"/login",component:k}),s.a.createElement(d.b,{path:"/Signup",component:N}),s.a.createElement(d.b,{path:"*",component:y})))},C=(a(55),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"callout headcolor",id:"Header"},s.a.createElement("div",{className:"row column"},s.a.createElement("a",{href:"/"},s.a.createElement("h1",{id:"tit"},this.props.name))))}}]),a}(n.Component)),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row",id:"footer"},s.a.createElement("div",{className:"medium-12 columns"},s.a.createElement("p",null,"Copyright 2020 , Keerthana")))}}]),a}(n.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"showSidebar",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"title-bar hide-for-large"},s.a.createElement("div",{className:"title-bar-left"},s.a.createElement("button",{className:"menu-icon",type:"button","data-open":"my-info",onClick:this.showSidebar}),s.a.createElement("span",{className:"title-bar-title"},this.props.name," ")))}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={appName:"TODO LIST APPLICATION",home:!1},e}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"off-canvas-wrapper"},s.a.createElement("div",{className:"off-canvas-wrapper-inner","data-off-canvas-wrapper":!0},s.a.createElement("div",{className:"off-canvas-content","data-off-canvas-content":!0},s.a.createElement(D,{name:this.state.appName}),s.a.createElement(C,{name:this.state.appName}),s.a.createElement(S,{name:this.state.appName}),s.a.createElement("hr",null),s.a.createElement(F,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f19ef2f0.chunk.js.map