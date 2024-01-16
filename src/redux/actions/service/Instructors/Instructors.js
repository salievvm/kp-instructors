import { SET_ACTIVE_LESSON, SET_LESSONS_LIST, SET_NAVIGATION_TREE } from "../../../reducers/instructors";
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
    const productId = navigation?.skis?.items[0]?.items[0]?.id;
    if (productId) {
      const lessons = await this.getLessons(productId);
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

  getLessons = async (productId) => {
    const lessons = await this.obLessons.getList(productId);

    store.dispatch({
      type: SET_ACTIVE_LESSON,
      data: {
        activeLesson: productId,
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

  getLessonsHandler = async (productId) => {
    this.app.setLoading();

    await this.getLessons(productId);

    this.app.endLoading();
  }
}

export default InstructorsService;