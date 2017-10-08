import React from 'react';

const AddTodo = ({ actions }) => {
  let input;

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) return;
    actions.addTodo(input.value);
    input.value = '';
  };

  return (
    <div className="add-todo">
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

export default AddTodo;
