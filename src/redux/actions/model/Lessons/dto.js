import dayjs from "dayjs";
import { FIELD_TYPES } from "../../../../consts";

const {
  text,
  textarea,
  radio,
  radioGroup,
  phone,
  email,
  date,
  dateMulti,
  file,
  list,
} = FIELD_TYPES;

const schema = {
  id: {
    id: 'id',
    label: 'ID',
    hidden: true,
  },
  parentId: {
    id: 'parentId',
    label: 'parentId',
    hidden: true,
  },
  dateStart: {
    id: 'dateStart',
    label: 'Дата начала занятия',
    // minWidth: 170,
    type: date,
    format: (value) => {
      return dayjs(value).format('DD.MM.YYYY')
    },
  },
  timeStart: {
    id: 'timeStart',
    label: 'Время начала занятия',
    // minWidth: 170,
    type: text,
  },
  leftQuotas: {
    id: 'leftQuotas',
    label: 'Осталось мест',
    // minWidth: 170,
    type: text,
  },
  price: {
    id: 'price',
    label: 'Стоимость занятия',
    // minWidth: 170,
    type: text,
    format: (value) => {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
      }).format(value)
    },
  },
};

export { schema };