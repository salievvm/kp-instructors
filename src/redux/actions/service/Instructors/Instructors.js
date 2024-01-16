import { SET_LESSONS_LIST } from "../../../reducers/instructors";
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

    const navigation = await this.obNavigation.getTreeList();
    const lessons = await this.obLessons.getList(111);

    store.dispatch({
      type: SET_LESSONS_LIST,
      data: {
        list: lessons,
        schema: this.obLessons.schema,
      }
    })

    console.log({ navigation, lessons });

    this.app.endLoading();
  }
}

export default InstructorsService;