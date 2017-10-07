import React from 'react';
import FilterItem from './FilterItem';

const Filter = ({ visibilityFilter, actions }) => (
  <p>
    <FilterItem
      active={visibilityFilter === 'SHOW_ALL'}
      filter={() => actions.setVisibilityFilter('SHOW_ALL')}
    >
      All
    </FilterItem>
    {' | '}
    <FilterItem
      active={visibilityFilter === 'SHOW_ACTIVE'}
      filter={() => actions.setVisibilityFilter('SHOW_ACTIVE')}
    >
      Active
    </FilterItem>
    {' | '}
    <FilterItem
      active={visibilityFilter === 'SHOW_COMPLETED'}
      filter={() => actions.setVisibilityFilter('SHOW_COMPLETED')}
    >
      Completed
    </FilterItem>
  </p>
);

export default Filter;
