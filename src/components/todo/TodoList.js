import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, actions }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => actions.toggleTodo(todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoList;
