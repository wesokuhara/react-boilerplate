import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../actions/todo-list-actions';
import TodoItem from '../components/todo/TodoItem';

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

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
