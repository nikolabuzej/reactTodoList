(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{19:function(t,e,n){t.exports=n(45)},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(18),c=n.n(r),s=(n(24),n(8)),i=n(2),l=n(3),u=n(5),d=n(4),p=n(6),h=(n(25),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).styleName=function(){return n.props.todo.completed?"TodoTrue":"Todo"},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:this.styleName()},a.a.createElement("input",{type:"checkbox",onChange:this.props.jobDone.bind(this,this.props.todo.id)}),a.a.createElement("p",null,this.props.todo.title),a.a.createElement("button",{className:"Delete",onClick:this.props.deleteTask.bind(this,this.props.todo.id)},"X"))}}]),e}(o.Component)),m=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(h,{key:e.id,todo:e,deleteTask:t.props.deleteTask,jobDone:t.props.jobDone})}))}}]),e}(o.Component),f=(n(26),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={title:"",completed:!1},n.newNameHandler=function(t){n.setState({title:t.target.value})},n.onSubmit=function(t){t.preventDefault()},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{className:"DodajForma",onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",placeholder:"Unesite novi zadatak",onChange:this.newNameHandler}),a.a.createElement("button",{className:"DodajDugme",onClick:this.props.newTaskHandler.bind(this,this.state)},"Dodaj"))}}]),e}(o.Component)),b=n(7),j=n.n(b);n(44);function k(){return a.a.createElement("header",null,a.a.createElement("h1",null,"Todo aplikacija"))}var v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.jobDone=function(t){var e=Object(s.a)(n.state.todos).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));n.setState({todos:e})},n.deleteTask=function(t){j.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:n.state.todos.filter((function(e){if(e.id!==t)return e}))})}))},n.newTaskHandler=function(t){j.a.post("https://jsonplaceholder.typicode.com/todos",t).then((function(t){return n.setState({todos:[].concat(Object(s.a)(n.state.todos),[t.data])})}))},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(k,null),a.a.createElement(f,{newTaskHandler:this.newTaskHandler}),a.a.createElement(m,{todos:this.state.todos,deleteTask:this.deleteTask,jobDone:this.jobDone}))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5a6618f8.chunk.js.map