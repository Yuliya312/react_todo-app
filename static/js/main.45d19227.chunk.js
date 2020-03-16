(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(10),c=o.n(l),r=(o(16),o(17),o(8)),s=o(7),d=o(2),i=o(3),u=o(5),m=o(4),f=o(6),p=o(20),h=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},o.changeHandler=function(e){o.setState({title:e.target.value})},o.addNewTodo=function(e){e.preventDefault();var t=o.state.title;o.props.addTodo({title:t,id:Object(p.a)(),completed:!1,inputError:!1}),o.setState({title:""})},o}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.title;return a.a.createElement("form",{action:"",onSubmit:this.addNewTodo},a.a.createElement("input",{type:"text",name:"new-todo",className:"new-todo",placeholder:"Enter new todo please",value:e,onChange:this.changeHandler}))}}]),t}(n.Component),v=o(1),b=o.n(v),E=function(e){var t=e.todo,o=t.id,n=t.title,l=t.completed,c=e.onCheckboxChecked,r=e.onTodoDelete;return a.a.createElement("li",{className:b()("",{completed:l})},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:o,onChange:function(e){return c(e.target.checked)},checked:l}),a.a.createElement("label",{htmlFor:o,className:b()("",{completed:l})},n),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return r(o)}})),a.a.createElement("input",{type:"text",className:"edit"}))},g=function(e){var t=e.todos,o=e.deleteTodo,n=e.checkedTodo;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.id;return a.a.createElement(E,{todo:e,key:t,onTodoDelete:o,onCheckboxChecked:function(e){return n(t,e)}})}))))},C={all:"All",active:"Active",completed:"Completed"},k=function(e){var t=e.todos,o=e.filterButtonsChosed,n=e.filterHandler,l=e.onClearCompleted,c=t.filter((function(e){return!1===e.completed})).length;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},c,"\xa0items left"),a.a.createElement("ul",{className:"filters"},Object.values(C).map((function(e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:"#/",className:b()("",{selected:o}),onClick:function(){return n(e)}},e))}))),a.a.createElement("button",{type:"button",className:"clear-completed",onClick:l},"Clear completed"))},y=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],filterButtonsChosed:C.all},o.addTodo=function(e){o.setState((function(t){return{todos:[].concat(Object(s.a)(t.todos),[e])}}))},o.deleteTodo=function(e){o.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},o.filterHandler=function(e){o.setState({filterButtonsChosed:e})},o.filterTodos=function(){var e=o.state,t=e.filterButtonsChosed,n=e.todos;switch(t){case C.active:return n.filter((function(e){return!e.completed}));case C.completed:return n.filter((function(e){return e.completed}));case C.all:default:return Object(s.a)(n)}},o.checkedTodo=function(e,t){o.setState((function(o){return{todos:o.todos.map((function(o){return o.id===e?Object(r.a)({},o,{completed:t}):o}))}}))},o.toggleAll=function(){var e=o.state.todos;o.setState((function(t){return e.every((function(e){return e.completed}))?{todos:t.todos.map((function(e){return Object(r.a)({},e,{completed:!1})}))}:{todos:t.todos.map((function(e){return Object(r.a)({},e,{completed:!0})}))}}))},o.clearAllCompleted=function(){o.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},o}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");if(e){var t=JSON.parse(e);this.setState({todos:t})}}},{key:"componentDidUpdate",value:function(e,t){t.todos!==this.state.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,o=e.filterButtonsChosed,n=this.filterTodos(),l=t.every((function(e){return e.completed}));return a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(h,{addTodo:this.addTodo})),a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.toggleAll,checked:l}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement(g,{todos:n,deleteTodo:this.deleteTodo,checkedTodo:this.checkedTodo})),a.a.createElement(k,{filterButtonsChosed:o,todos:this.state.todos,filterHandler:this.filterHandler,onClearCompleted:this.clearAllCompleted}))}}]),t}(a.a.Component);c.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.45d19227.chunk.js.map