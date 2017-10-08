import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FilterItem = ({ active, children, filter }) => {
  const handleClick = e => {
    e.preventDefault();
    filter();
  };

  const classes = classNames('nav-link', {
    active
  });

  return (
    // eslint-disable-next-line
    <a href="#" className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

FilterItem.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.func.isRequired
};

export default FilterItem;
