import React, { Component } from 'react'
import './Todo.css'
export default class Todo extends Component {
    styleName=()=>{
        if(this.props.todo.completed){
            return 'TodoTrue'
        }
        else{
            return 'Todo'
        }
    }
    render() {
      
        return (
            <div className={this.styleName()}>
            <input type="checkbox" onChange={this.props.jobDone.bind(this,this.props.todo.id)}></input>
             <p>{this.props.todo.title}</p>
             <button className="Delete" onClick={this.props.deleteTask.bind(this,this.props.todo.id)}>X</button>
            </div>
        )
    }
}
