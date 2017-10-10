import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ completed, text, toggle }) => {
  const handleChange = e => {
    toggle();
  };

  return (
    <tr>
      <td className="text-center" width="10%">
        <input type="checkbox" checked={completed} onChange={handleChange} />
      </td>
      <td>{text}</td>
      <td>{completed ? 'Completed' : 'Active'}</td>
    </tr>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
};

export default TodoItem;
