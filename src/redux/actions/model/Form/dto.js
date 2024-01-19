import {
  FIELD_TYPES,
  // SECTION_TYPES,
} from "../../../../consts";

const {
  text,
  textarea,
  // radio,
  // radioGroup,
  phone,
  email,
  date,
  // dateMulti,
  // file,
  list,
} = FIELD_TYPES;

// const {
//   base,
//   filled,
// } = SECTION_TYPES;

const schema = {
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
            // value: 'Тест: Разработчик ПО',
          },
          phone: {
            title: 'Номер телефона',
            code: '',
            type: phone,
            col: 12,
            disabled: false,
            required: true,
            // value: 'Василий Иванович',
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
    subtitle: 'Вид спорта',
    sections: {
      0: {
        items: {
          equipment: {
            title: 'На чем будете заниматься',
            code: 'UF_CRM_652CD8D6B3E07',
            type: list,
            col: 12,
            options: [
              { code: "7064", id: 'board', label: 'Сноуборд', },
              { code: "7066", id: 'skis', label: 'Лыжи', },
            ],
            required: true,
            // value: 'Тест: Разработчик ПО',
          },
          program: {
            title: 'Выберите программу',
            code: 'UF_CRM_652CD8D6F0F10',
            type: list,
            col: 12,
            disabled: false,
            required: true,
            options: [
              { code: "7068", id: 'individual', label: 'Индивидуально', },
              { code: "7082", id: 'pair', label: 'Парное занятие', },
              { code: "7084", id: 'personal', label: 'Личное сопровождение', },
              { code: "7086", id: 'evolution', label: 'Evolution для новичков', },
              { code: "7088", id: 'evolutionPro', label: 'Evolution PRO', },
              { code: "7090", id: 'skicamp', label: 'Ski camp KIDS', },
            ],
            // value: 'Василий Иванович',
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
            col: 12,
            maxDate: new Date(2099, 1, 1),
            minDate: new Date(),
            // value: 'Тест: Разработчик ПО',
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
          hours: {
            title: 'Кол-во часов',
            code: 'UF_CRM_652CD8D732FC0',
            type: list,
            col: 6,
            required: true,
            options: [
              { code: "1", id: '1', label: '1', },
              { code: "2", id: '2', label: '2', },
              { code: "3", id: '3', label: '3', },
              { code: "4", id: '4', label: '4', },
              { code: "5", id: '5', label: '5', },
              { code: "6", id: '6', label: '6', },
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
            // value: 'Тест: Разработчик ПО',
          },
        },
      },
    },
  },
};

export { schema };
