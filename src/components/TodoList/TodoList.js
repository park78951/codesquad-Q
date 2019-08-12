import React, { Component } from 'react';
import Contents from './Contents';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #8ee4af;
  border-radius: 5px;
  height: 400px;
  padding-top: 2rem;
  font-size: 1.2rem;
`

class TodoList extends Component {
  render() {
    const { myTodo } = this.props
    return (
      <Div>
        <Contents myTodo={myTodo} />
      </Div>
    );
  }
}

export default TodoList;