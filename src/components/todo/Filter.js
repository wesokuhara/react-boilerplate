import React from 'react';
import FilterItem from './FilterItem';

const Filter = ({ visibilityFilter, actions }) => (
  <ul className="nav nav-pills">
    <li className="nav-item">
      <FilterItem
        active={visibilityFilter === 'SHOW_ALL'}
        filter={() => actions.setVisibilityFilter('SHOW_ALL')}
      >
        All
      </FilterItem>
    </li>
    <li className="nav-item">
      <FilterItem
        active={visibilityFilter === 'SHOW_ACTIVE'}
        filter={() => actions.setVisibilityFilter('SHOW_ACTIVE')}
      >
        Active
      </FilterItem>
    </li>
    <li className="nav-item">
      <FilterItem
        active={visibilityFilter === 'SHOW_COMPLETED'}
        filter={() => actions.setVisibilityFilter('SHOW_COMPLETED')}
      >
        Completed
      </FilterItem>
    </li>
  </ul>
);

export default Filter;
