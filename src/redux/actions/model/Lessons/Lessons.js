import LessonsApi from "../../api/Lessons";
import { mock, schema } from "./dto";

export default class Lessons {
  schema = schema;
  mock = mock;
  api;

  constructor(api) {
    this.api = new LessonsApi(api);
  }

  getList = async (productId) => {
    return await this.api.getList(productId);
  }
};