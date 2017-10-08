import React from 'react';
import FilterItem from './FilterItem';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants';

const Filter = ({ visibilityFilter, actions }) => (
  <div className="todo-filter">
    <ul className="nav nav-pills">
      <li className="nav-item">
        <FilterItem
          active={visibilityFilter === SHOW_ALL}
          filter={() => actions.setVisibilityFilter(SHOW_ALL)}
        >
          All
        </FilterItem>
      </li>
      <li className="nav-item">
        <FilterItem
          active={visibilityFilter === SHOW_ACTIVE}
          filter={() => actions.setVisibilityFilter(SHOW_ACTIVE)}
        >
          Active
        </FilterItem>
      </li>
      <li className="nav-item">
        <FilterItem
          active={visibilityFilter === SHOW_COMPLETED}
          filter={() => actions.setVisibilityFilter(SHOW_COMPLETED)}
        >
          Completed
        </FilterItem>
      </li>
    </ul>
  </div>
);

export default Filter;
