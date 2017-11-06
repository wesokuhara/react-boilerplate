import React from 'react';
import AddTodoContainer from '../../containers/AddTodoContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import FilterListContainer from '../../containers/FilterListContainer';

const TodoPage = () => (
  <div>
    <div className="row">
      <AddTodoContainer />
      <FilterListContainer />
    </div>
    <TodoListContainer />
  </div>
);

export default TodoPage;
