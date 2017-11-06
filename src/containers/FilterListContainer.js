import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/filter-actions';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants';
import FilterItem from '../components/todo/FilterItem';

const FilterList = ({ visibilityFilter, actions }) => (
  <div className="todo-filter col-xs-12 col-md-6">
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

const mapStateToProps = (state, ownProps) => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
