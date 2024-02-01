import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

import { FIELD_TYPES } from "../../../../consts";

dayjs.extend(utc);

const {
  text,
  date,
  // textarea,
  // radio,
  // radioGroup,
  // phone,
  // email,
  // dateMulti,
  // file,
  // list,
} = FIELD_TYPES;

const schema = {
  id: {
    id: 'lesson_id',
    label: 'ID',
    hidden: true,
    formSend: true,
  },
  parentId: {
    id: 'product_id',
    label: 'parentId',
    hidden: true,
    formSend: true,
  },
  projectId: {
    id: 'project_id',
    label: 'projectId',
    hidden: true,
    formSend: true,
  },
  seasonId: {
    id: 'season_id',
    label: 'seasonId',
    hidden: true,
    formSend: true,
  },
  students: {
    id: 'students',
    label: 'students',
    hidden: true,
    formSend: true,
  },
  rentalItem: {
    id: 'rental_item',
    label: 'rentalItem',
    hidden: true,
    formSend: true,
  },
  rentalPersType: {
    id: 'rental_pers_type',
    label: 'rentalPersType',
    hidden: true,
    formSend: true,
  },
  dateStart: {
    id: 'start_date',
    label: 'Дата и время начала',
    minWidth: 143,
    type: date,
    format: (value) => {
      return dayjs(value).utc().utcOffset(0).format('DD.MM.YYYY HH:mm')
    },
    formatForm: (value) => {
      return dayjs(value).utc().utcOffset(0).format('YYYY-MM-DD HH:mm:ss')
    },
    formSend: true,
  },
  dateEnd: {
    id: 'end_date',
    label: 'Дата и время окончания',
    minWidth: 143,
    type: date,
    hidden: true,
    format: (value) => {
      return dayjs(value).utc().utcOffset(0).format('DD.MM.YYYY HH:mm')
    },
    formatForm: (value) => {
      return dayjs(value).utc().utcOffset(0).format('YYYY-MM-DD HH:mm:ss')
    },
    formSend: true,
  },
  duration: {
    id: 'duration',
    label: 'Продолжительность',
    minWidth: 155,
    type: text,
  },
  availableSlots: {
    id: 'available_slots',
    label: 'Осталось мест',
    minWidth: 104,
    type: text,
  },
  price: {
    id: 'price',
    label: 'Стоимость',
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
    dateStart: '01.01.2024 10:00',
    parentId: 'standart_individual_1hour',
    duration: '1 ч.',
    availableSlots: '1',
    price: 6000,
  },
  {
    id: 'test2',
    parentId: 'standart_individual_1hour',
    dateStart: '01.01.2024 12:00',
    duration: '2 ч.',
    availableSlots: '3',
    price: 6000,
  },
  {
    id: 'test3',
    parentId: 'standart_individual_1hour',
    dateStart: '01.01.2024 14:00',
    duration: '3 ч.',
    availableSlots: '2',
    price: 6000,
  },
];

const breadcrumbs = [
  {
    href: 'https://krasnayapolyanaresort.ru/',
    label: 'Главная',
  },
  {
    href: 'https://shop.krasnayapolyanaresort.ru/',
    label: 'Онлайн-магазин',
  },
  {
    href: '',
    label: 'Инструкторы по горным лыжам и сноуборду',
  },
];

export { schema, mock, breadcrumbs };