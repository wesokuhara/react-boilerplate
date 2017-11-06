import { SET_VISIBILITY_FILTER } from '../constants';

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
