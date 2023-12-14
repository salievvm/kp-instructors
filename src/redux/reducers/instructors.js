import { mock, breadcrumbs } from "../actions/model/Lessons/dto";

export const INSTRUCTORS_SET_FILTER = 'INSTRUCTORS_SET_FILTER';

const initState = {
  navigation: {},
  filter: {},
  sort: {},
  list: mock,
  breadcrumbs,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case INSTRUCTORS_SET_FILTER:
      return { ...state, filter: action.data };
    default:
      return state;
  }
}

export default reducer;