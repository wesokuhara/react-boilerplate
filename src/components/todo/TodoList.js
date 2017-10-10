import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, actions }) => (
  <div className="todo-list">
    <table className="table table-hover">
      <thead>
        <tr>
          <th width="10%" />
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggle={() => actions.toggleTodo(todo.id)}
          />
        ))}
      </tbody>
    </table>
  </div>
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
