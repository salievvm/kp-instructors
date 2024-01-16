import NavigationApi from "../../api/Navigation";
import { schema } from "./dto";

export default class Navigation {
  schema = schema;

  constructor(api) {
    this.api = new NavigationApi(api);
  }

  getTreeList = async () => {
    return await this.api.getTreeList();
  }
};