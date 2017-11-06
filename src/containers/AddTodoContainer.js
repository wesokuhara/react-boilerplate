import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/add-todo-actions';

const AddTodo = ({ actions }) => {
  let input = null;

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) return;
    actions.addTodo(input.value);
    input.value = '';
  };

  return (
    <div className="add-todo col-xs-12 col-md-6">
      <div className="input-group">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control"
            placeholder="Enter Todo"
            ref={node => {
              input = node;
            }}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
