import { mock, breadcrumbs, schema } from "../actions/model/Lessons/dto";
import { schema as schemaNavigation } from "../actions/model/Navigation/dto";

export const INSTRUCTORS_SET_FILTER = 'INSTRUCTORS_SET_FILTER';

export const SET_LESSONS_LIST = 'SET_LESSONS_LIST';
export const SET_ACTIVE_LESSON = 'SET_ACTIVE_LESSON';

export const SET_NAVIGATION_TREE = 'SET_NAVIGATION_TREE';

const initState = {
  lessons: {
    list: [],
    schema: {},
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
    case SET_LESSONS_LIST:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          list: action.data.list,
          schema: action.data.schema,
        }
      };
    case SET_ACTIVE_LESSON:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          activeLesson: action.data.activeItemId,
        }
      }
    case SET_NAVIGATION_TREE:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          schema: action.data.schema,
        }
      }
    default:
      return state;
  }
}

export default reducer;