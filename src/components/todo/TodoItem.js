import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ completed, text, toggle }) => {
  const handleChange = e => {
    toggle();
  };

  return (
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="checkbox"
          checked={completed}
          onChange={handleChange}
        />
        {text}
      </label>
    </div>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
};

export default TodoItem;
