import React, { Component } from 'react'
import Todos from './Todos/Todos'
import AddTask from './AddTask/AddTask'
import axios from 'axios'
import Header from './Header/Header'

export default class App extends Component {
 
  state={
    todos:[],
    
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=> this.setState({todos:res.data}));
  }
  jobDone=(id)=>{
   const oldStateTodos=[...this.state.todos];
   const newState=oldStateTodos.map((todo)=>{
     if(todo.id===id){
       todo.completed=!todo.completed;
     }
     return todo
    });
  this.setState({todos: newState});
  }
  deleteTask=(id)=>{
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos:this.state.todos.filter(todo=>{
      if(todo.id!==id){
        return todo
      }
    })}))
    
  }
newTaskHandler=(s)=>{
  axios.post('https://jsonplaceholder.typicode.com/todos',s)
  .then(res=>this.setState({todos:[...this.state.todos,res.data]}))
  
}
  render() {
  
    return (
      <div>
        <Header/>
         <AddTask newTaskHandler={this.newTaskHandler}/>
        <Todos todos={this.state.todos} deleteTask={this.deleteTask} jobDone={this.jobDone}/>
       
      </div>
    )
  }
}
