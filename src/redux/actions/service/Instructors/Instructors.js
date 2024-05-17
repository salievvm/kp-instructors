import {
  INSTRUCTORS_SET_FILTER,
  INSTRUCTORS_UNSET_FILTER,
  SET_ACTIVE_LESSON,
  SET_LESSONS_LIST,
  SET_NAVIGATION_TREE
} from "../../../reducers/instructors";

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
    this.obLessons = new Lessons(obAxcessController, obShopController);
  }

  get = async () => {
    this.app.setLoading();
    
    const { params } = store.getState();

    const navigation = await this.getNavigation();
    const shopId = params.shopId; // "327"
    const lesson = this.findItemById(navigation?.skis?.items, shopId);

    if (lesson) {
      await this.getLessons(lesson);
    } else {
      this.app.setError('Что-то пошло не так. Не найдено занятие.');
    }

    this.app.endLoading();
  }

  findItemById = (items, itemId) => {
    if (!items || items.length === 0) {
      return null;
    }

    for (const item of items) {
      // console.log({ 'item.shopId': item.shopId, itemId });
      if (!itemId) {
        if (!item.items || item.items.length === 0) {
          return item;
        }
      } else if (+item.shopId === +itemId) {
        return item;
      }

      const nestedItems = item.items;
      if (nestedItems) {
        const result = this.findItemById(Array.isArray(nestedItems) ?
          nestedItems : Object.values(nestedItems), itemId);
        if (result) {
          return result;
        }
      }
    }

    return null;
  }

  getNavigation = async () => {
    const categoryId = window.category_id || 67;
    const navigation = await this.obNavigation.getTreeList(categoryId);

    store.dispatch({
      type: SET_NAVIGATION_TREE,
      data: {
        schema: navigation,
      }
    });

    return navigation;
  }

  getLessons = async (product) => { // Product = navigation item, Lesson = Quotas
    const {
      id: productId,
      price,
      shopId,
      model,
    } = product;

    console.log({ model });
    const lessons = await this.obLessons.getList(productId, price, shopId, model);

    store.dispatch({
      type: SET_ACTIVE_LESSON,
      data: {
        activeLesson: product,
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

  lessonAddToCart = async (lessonId) => {
    this.app.setLoading();

    console.log({ lessonId });
    const { instructors } = store.getState();

    const lesson = instructors.lessons.list.find((item) => item.id === lessonId);

    await this.obLessons.addToCart(lesson, {
      onSuccess: () => this.app.endLoading(),
      onError: (error) => this.app.setError(error),
    });

    this.app.endLoading();
  }

  lessonsSort = (fieldId) => {

  }
}

export default InstructorsService;