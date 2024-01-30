import NavigationApi from "../../api/Navigation";
import { schema } from "./dto";

export default class Navigation {
  schema = schema;

  constructor(api) {
    this.api = new NavigationApi(api);
  }

  convertItemsToArray = (items) => {
    if (!items || items.length === 0) {
      return [];
    }

    return items.map(item => {
      if (item.categories && !item.items) {
        item.items = item.categories;
        delete item.categories;
      }

      const nestedItems = item.items;
      if (nestedItems) {
        item.items = Array.isArray(nestedItems) ? nestedItems : Object.values(nestedItems);
        this.convertItemsToArray(item.items);
      }

      return item;
    });
  }

  mapTreeList = (skis) => {
    // const skis = tree.skis[67];

    if (skis.categories) {
      skis.items = Object.values(skis.categories);
      delete skis.categories;
    }

    skis.items = skis.items.map((item) => {
      const quantity = item.items?.length;

      item.quantity = quantity;

      return item;
    })

    this.convertItemsToArray(skis.items);

    return { skis };
  }

  getTreeList = async (categoryId) => {
    const tree = await this.api.getTreeList();

    console.log({ tree });

    const skis = tree.skis[categoryId];

    return this.mapTreeList(skis);
  }
};