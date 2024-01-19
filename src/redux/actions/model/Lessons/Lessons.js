import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import LessonsApi from "../../api/Lessons";
import { mock, schema } from "./dto";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export default class Lessons {
  schema = schema;
  mock = mock;
  api;
  apiShop;

  constructor(api, apiShop) {
    this.api = new LessonsApi(api);
    this.apiShop = new LessonsApi(apiShop);
  }

  filterList = (list, { startDate, endDate }) => {
    const formatString = 'DD.MM.YYYY HH:mm:ss';

    const obDateStart = dayjs(startDate + " 00:00:00", formatString);
    const obDateEnd = dayjs(endDate + " 23:59:59", formatString);

    return list.filter((item) => {
      const obItemDate = dayjs(item.dateStart).utc().utcOffset(3);

      return obItemDate.isAfter(obDateStart) && obItemDate.isBefore(obDateEnd) ? true : false;
    })
  }

  mapFields = ({ lessons, meta }, productId, price) => {
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
        projectId: project_id,
        seasonId: season_id,
        students: meta.students,
        rentalItem: meta.rental_item,
        rentalPersType: meta.rental_pers_type,
        duration: `${duration} ч.`,
        price,
      }
    })
      .sort((a, b) => dayjs(a.dateStart).isAfter(dayjs(b.dateStart)) ? 1 : -1);

    return list;
  }

  getList = async (productId, price) => {
    const list = await this.api.getList(productId);

    return this.mapFields(list, productId, price);
  }

  addToCart = async (lesson) => {
    console.log({ lesson });
    const formData = new FormData();

    const newLesson = Object.entries(this.schema).map(([id, field]) => {
      let value = lesson[id];

      if (field.format && typeof field.format === 'function') {
        value = field.format(value);
      }

      formData.append(field.id, value)
      return {[field.id]: value}
    });

    console.log({ newLesson });

    return this.apiShop.addToCard(formData);
  }
};