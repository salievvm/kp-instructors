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
    minWidth: 143,
    type: date,
    format: (value) => {
      return dayjs(value).format('DD.MM.YYYY')
    },
  },
  timeStart: {
    id: 'timeStart',
    label: 'Время начала занятия',
    minWidth: 155,
    type: text,
  },
  leftQuotas: {
    id: 'leftQuotas',
    label: 'Осталось мест',
    minWidth: 104,
    type: text,
  },
  price: {
    id: 'price',
    label: 'Стоимость занятия',
    minWidth: 175,
    type: text,
    format: (value) => {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
      }).format(value)
    },
  },
};

const mock = [
  {
    id: 'test1',
    dateStart: '01.01.2024',
    parentId: 'standart_individual_1hour',
    timeStart: '10:00',
    leftQuotas: '1',
    price: 6000,
  },
  {
    id: 'test2',
    parentId: 'standart_individual_1hour',
    dateStart: '01.01.2024',
    timeStart: '11:00',
    leftQuotas: '3',
    price: 6000,
  },
  {
    id: 'test3',
    parentId: 'standart_individual_1hour',
    dateStart: '01.01.2024',
    timeStart: '12:00',
    leftQuotas: '2',
    price: 6000,
  },
];

export { schema, mock };