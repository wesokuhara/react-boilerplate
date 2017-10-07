import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ active, children, filter }) => {
  if (active) {
    return <span>{children}</span>;
  }

  const handleClick = e => {
    e.preventDefault();
    filter();
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
  onClick: PropTypes.func.isRequired
};

export default FilterItem;
