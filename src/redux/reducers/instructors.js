import { mock, breadcrumbs, schema } from "../actions/model/Lessons/dto";
import { schema as schemaNavigation } from "../actions/model/Navigation/dto";

export const INSTRUCTORS_SET_FILTER = 'INSTRUCTORS_SET_FILTER';

const initState = {
  lessons: {
    list: mock,
    schema: schema,
  },
  navigation: {
    schema: schemaNavigation,
  },
  breadcrumbs,
  filter: {},
  sort: {},
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