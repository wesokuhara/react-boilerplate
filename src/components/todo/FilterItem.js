import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ active, children, setFilter }) => {
  if (active) {
    return <span>{children}</span>;
  }

  const handleClick = e => {
    e.preventDefault();
    setFilter();
  };

  return (
    // eslint-disable-next-line
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
};

FilterItem.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default FilterItem;
