import NavigationApi from "../../api/Navigation";
import { schema } from "./dto";

export default class Navigation {
  schema = schema;

  constructor(api) {
    this.api = new NavigationApi(api);
  }

  mapTreeList = (tree) => {
    const skis = tree.skis[67];

    skis.items = Object.values(skis.categories);

    skis.items = skis.items.map((item) => {
      const quantity = item.items?.length;

      item.quantity = quantity;

      return item;
    })

    delete skis.categories;

    return { skis };
  }

  getTreeList = async () => {
    const tree = await this.api.getTreeList();

    return this.mapTreeList(tree);
  }
};