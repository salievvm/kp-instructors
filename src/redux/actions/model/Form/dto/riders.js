import { FIELD_TYPES } from "../../../../../shared/consts";

const {
  text,
  textarea,
  phone,
  email,
  date,
  list,
} = FIELD_TYPES;


export const riders = {
  main: {
    subtitle: 'Контактная информация',
    sections: {
      0: {
        items: {
          fio: {
            title: 'Представьтесь, пожалуйста',
            code: 'UF_CRM_14_VACANCY',
            type: text,
            col: 12,
            required: true,
          },
          phone: {
            title: 'Номер телефона',
            code: '',
            type: phone,
            col: 12,
            disabled: false,
            required: true,
          },
          email: {
            title: 'Email',
            code: '',
            type: email,
            required: true,
            col: 12,
          },
        },
      },
    },
  },
  sport: {
    subtitle: 'Направление',
    sections: {
      0: {
        items: {
          riders_equipment: {
            title: 'На чем будете заниматься?',
            code: 'UF_CRM_INSTRUCTORS_RIDERS_EQUIPMENT',
            type: list,
            col: 12,
            disabled: false,
            required: true,
            options: [
              // { code: '7548', id: 'rollers', label: 'Ролики', },
              // { code: '7550', id: 'skateboard', label: 'Скейтборд', },
              // { code: '7552', id: 'scooter', label: 'Самокат', },
              // { code: '7554', id: 'bike', label: 'Велосипед', },
              { code: '7590', id: 'scoutCamp', label: 'Scout Camp', },
              { code: '7592', id: 'rollersAndSkateboard', label: 'Школа роликов и скейтбординга', },
            ],
          },
        },
      },
    },
  },
  date: {
    subtitle: 'Когда планируете',
    sections: {
      0: {
        items: {
          date: {
            title: 'Дата занятия',
            code: 'UF_CRM_652CD8D71A9AE',
            type: date,
            required: true,
            col: 6,
            maxDate: new Date(2099, 1, 1),
            minDate: new Date(),
          },
          time: {
            title: 'Время',
            code: 'UF_CRM_652CD8D71A9AE',
            type: list,
            required: true,
            col: 6,
            options: [
              { code: "01", id: '00:00', label: '00:00', },
              { code: "1", id: '01:00', label: '01:00', },
              { code: "2", id: '02:00', label: '02:00', },
              { code: "3", id: '03:00', label: '03:00', },
              { code: "4", id: '04:00', label: '04:00', },
              { code: "5", id: '05:00', label: '05:00', },
              { code: "6", id: '06:00', label: '06:00', },
              { code: "7", id: '07:00', label: '07:00', },
              { code: "8", id: '08:00', label: '08:00', },
              { code: "9", id: '09:00', label: '09:00', },
              { code: "10", id: '10:00', label: '10:00', },
              { code: "11", id: '11:00', label: '11:00', },
              { code: "12", id: '12:00', label: '12:00', },
              { code: "13", id: '13:00', label: '13:00', },
              { code: "14", id: '14:00', label: '14:00', },
              { code: "15", id: '15:00', label: '15:00', },
              { code: "16", id: '16:00', label: '16:00', },
              { code: "17", id: '17:00', label: '17:00', },
              { code: "18", id: '18:00', label: '18:00', },
              { code: "19", id: '19:00', label: '19:00', },
              { code: "20", id: '20:00', label: '20:00', },
              { code: "21", id: '21:00', label: '21:00', },
              { code: "22", id: '22:00', label: '22:00', },
              { code: "23", id: '23:00', label: '23:00', },
            ],
            // value: 'Тест: Разработчик ПО',
          },
        },
      },
    },
  },
  comment: {
    subtitle: 'Комментарий к заявке',
    sections: {
      0: {
        items: {
          comment: {
            title: 'Оставить комментарий',
            code: 'COMMENTS',
            type: textarea,
            col: 12,
          },
        },
      },
    },
  },
};
