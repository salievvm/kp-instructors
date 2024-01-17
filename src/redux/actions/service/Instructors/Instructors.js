import { INSTRUCTORS_SET_FILTER, INSTRUCTORS_UNSET_FILTER, SET_ACTIVE_LESSON, SET_LESSONS_LIST, SET_NAVIGATION_TREE } from "../../../reducers/instructors";
import store from "../../../store";

import {
  obApp,
  Lessons,
  Navigation,
} from "../../model";

class InstructorsService {
  constructor(
    obAxcessController,
    obShopController,
  ) {
    this.obAxcessController = obAxcessController;
    this.obShopController = obShopController;

    this.app = obApp;
    this.obNavigation = new Navigation(obShopController);
    this.obLessons = new Lessons(obAxcessController);
  }

  get = async () => {
    this.app.setLoading();

    const navigation = await this.getNavigation();
    const lesson = navigation?.skis?.items[0]?.items[0];

    console.log({ navigation, lesson});
    if (lesson) {
      await this.getLessons(lesson);
    } else {
      this.app.setError('Что-то пошло не так');
    }

    this.app.endLoading();
  }

  getNavigation = async () => {
    const navigation = await this.obNavigation.getTreeList();

    store.dispatch({
      type: SET_NAVIGATION_TREE,
      data: {
        schema: navigation,
      }
    });

    return navigation;
  }

  getLessons = async (lesson) => {
    const productId = lesson.id;
    const lessons = await this.obLessons.getList(productId);

    store.dispatch({
      type: SET_ACTIVE_LESSON,
      data: {
        activeLesson: lesson,
      }
    });

    store.dispatch({
      type: SET_LESSONS_LIST,
      data: {
        list: lessons,
        schema: this.obLessons.schema,
      }
    });

    return lessons;
  }

  getLessonsHandler = async (lesson) => {
    this.app.setLoading();
    const { instructors } = store.getState();
    const { startDate, endDate } = instructors.filter;

    await this.getLessons(lesson);

    if (startDate && endDate) {
      this.setFilterDate(startDate, endDate);
    }

    this.app.endLoading();
  }

  setFilterDate = (startDate, endDate) => {
    const { instructors } = store.getState();

    const list = this.obLessons.filterList(
      instructors.lessons.list,
      {
        startDate,
        endDate,
      }
    );

    store.dispatch({
      type: INSTRUCTORS_SET_FILTER,
      data: {
        startDate,
        endDate,
        list,
      }
    });
  }

  unsetFilterDate = () => {
    store.dispatch({
      type: INSTRUCTORS_UNSET_FILTER,
    });
  }

  lessonsSort = (fieldId) => {
    
  }
}

export default InstructorsService;