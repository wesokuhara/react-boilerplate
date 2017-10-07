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
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={node => {
            input = node;
          }}
        />
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
