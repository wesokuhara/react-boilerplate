import React from 'react';
import FilterContainer from '../../containers/FilterContainer';
import AddTodoContainer from '../../containers/AddTodoContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const TodoPage = () => (
  <div>
    <AddTodoContainer />
    <FilterContainer />
    <TodoListContainer />
  </div>
);

export default TodoPage;
