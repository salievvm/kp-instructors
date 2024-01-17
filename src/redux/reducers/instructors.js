import { 
  // mock, 
  breadcrumbs,
  schema,
 } from "../actions/model/Lessons/dto";

export const INSTRUCTORS_SET_FILTER = 'INSTRUCTORS_SET_FILTER';
export const INSTRUCTORS_UNSET_FILTER = 'INSTRUCTORS_UNSET_FILTER';

export const SET_LESSONS_LIST = 'SET_LESSONS_LIST';
export const SET_ACTIVE_LESSON = 'SET_ACTIVE_LESSON';

export const SET_NAVIGATION_TREE = 'SET_NAVIGATION_TREE';

const initState = {
  lessons: {
    list: [],
    listFiltered: [],
    schema: schema,
  },
  navigation: {
    schema: {},
  },
  breadcrumbs,
  filter: {
    startDate: null,
    endDate: null,
  },
  sort: {}, // id: 'asc'
};

function reducer(state = initState, action) {
  switch (action.type) {
    case INSTRUCTORS_SET_FILTER:
      return {
        ...state,
        filter: {
          startDate: action.data.startDate,
          endDate: action.data.endDate,
        },
        lessons: {
          ...state.lessons,
          listFiltered: action.data.list,
        }
      };
    case INSTRUCTORS_UNSET_FILTER:
      return {
        ...state,
        filter: {
          startDate: '',
          endDate: '',
        },
        lessons: {
          ...state.lessons,
          listFiltered: state.lessons.list,
        }
      };
    case SET_LESSONS_LIST:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          list: action.data.list,
          listFiltered: action.data.list,
          schema: action.data.schema,
        }
      };
    case SET_ACTIVE_LESSON:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          activeLesson: action.data.activeLesson,
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