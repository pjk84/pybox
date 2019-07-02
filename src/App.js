import React, { Component } from 'react';
import Todos from './components/Todos';


class App extends Component {

  state = {
    todos: [
      {
        id:1, 
        fieldId: 'salutation',
        fieldName: 'salutation',
        fieldType: "textfield",
        completed:false,
      },
      {
        id:2, 
        fieldId: 'first_name',
        fieldName: 'first name',
        fieldType: 'textfield',
        completed:false,
      },
      {
        id:3, 
        fieldId: 'last_name',
        fieldName: 'last name',
        fieldType: 'textfield',
        completed:false,
      },
      {
        id:4, 
        fieldId: 'quote_version',
        fieldName: 'quote verion',
        fieldType: 'dropdown',
        completed:false,
      },
    ]
  }

  completeField = (e) => {
    console.log(e)
    this.setState ({value: e.target.value})
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === "test") 
        {todo.completed = true}
      return todo;
    }) });
  }

  render () {

    return (
      <div className="App">
        <Todos todos={this.state.todos} completeField={this.completeField}  />
      </div>
    );
  }
}

export default App;
