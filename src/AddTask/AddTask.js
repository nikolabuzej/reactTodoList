import React, { Component } from 'react'
import './AddTask.css'

export default class AddTask extends Component {
    state={
        title:'',
        // id:Math.floor(Math.random()*100),
        completed:false
    }

    newNameHandler=(event)=>{
        this.setState({title: event.target.value});
        // this.setState({id:Math.floor(Math.random()*100)})
    }
    onSubmit=(event)=>{
        event.preventDefault();
    }
    render() {
        return (
            
          <form className="DodajForma" onSubmit={this.onSubmit}>
              <input type="text" placeholder="Unesite novi zadatak" onChange={this.newNameHandler}></input>
              <button className="DodajDugme" onClick={this.props.newTaskHandler.bind(this,this.state)}>Dodaj</button>
          </form>
          
        )
    }
}
