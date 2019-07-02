import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Todos extends Component {

  render () {
    return this.props.todos.map((todo) => (

      <Item key={todo.id} itemProps={todo} completeField={this.props.completeField} />
    ));
  }
}

//propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
