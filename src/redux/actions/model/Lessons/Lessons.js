import dayjs from "dayjs";
import LessonsApi from "../../api/Lessons";
import { mock, schema } from "./dto";

export default class Lessons {
  schema = schema;
  mock = mock;
  api;

  constructor(api) {
    this.api = new LessonsApi(api);
  }

  mapFields = ({ lessons, meta }, productId) => {
    const list = lessons.map(({
      available_slots,
      project_id,
      season_id,
      lesson_id,
      start_date,
      end_date,
    }) => {
      const dateStart = dayjs(end_date)
      const duration = dateStart.diff(start_date, 'hour')

      return {
        id: lesson_id,
        dateStart: start_date,
        dateEnd: end_date,
        parentId: productId,
        availableSlots: available_slots,
        prejectId: project_id,
        seasonId: season_id,
        students: meta.students,
        rentalItem: meta.rental_item,
        rentalPersType: meta.rental_pers_type,
        duration: `${duration} ч.`,
        price: 6000,
      }
    });

    return list;
  }

  getList = async (productId) => {
    const list = await this.api.getList(productId);

    return this.mapFields(list, productId);
  }
};