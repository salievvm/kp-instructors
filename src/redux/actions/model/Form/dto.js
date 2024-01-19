import {
  FIELD_TYPES,
  SECTION_TYPES,
} from "../../../../consts";

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

const {
  base,
  filled,
} = SECTION_TYPES;

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
            code: 'UF_CRM_14_VACANCY',
            type: list,
            col: 12,
            options: [
              { code: "7092", id: 'student', label: 'студент', },
              { code: "7094", id: 'middle', label: 'среднее общее', },
              { code: "7096", id: 'middle-proffessional', label: 'среднее профессиональное', },
              { code: "7098", id: 'high', label: 'высшее/бакалавр', },
              { code: "7100", id: 'magistr', label: 'аспирантура/магистратура', },
            ],
            // value: 'Тест: Разработчик ПО',
          },
          program: {
            title: 'Выберите программу',
            code: '',
            type: list,
            col: 12,
            disabled: false,
            options: [
              { code: "7092", id: 'student', label: 'студент', },
              { code: "7094", id: 'middle', label: 'среднее общее', },
              { code: "7096", id: 'middle-proffessional', label: 'среднее профессиональное', },
              { code: "7098", id: 'high', label: 'высшее/бакалавр', },
              { code: "7100", id: 'magistr', label: 'аспирантура/магистратура', },
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
            code: 'UF_CRM_14_VACANCY',
            type: date,
            col: 12,
            // value: 'Тест: Разработчик ПО',
          },
          time: {
            title: 'Время',
            code: 'UF_CRM_14_VACANCY',
            type: list,
            col: 6,
            options: [
              { code: "7092", id: 'student', label: 'студент', },
              { code: "7094", id: 'middle', label: 'среднее общее', },
              { code: "7096", id: 'middle-proffessional', label: 'среднее профессиональное', },
              { code: "7098", id: 'high', label: 'высшее/бакалавр', },
              { code: "7100", id: 'magistr', label: 'аспирантура/магистратура', },
            ],
            // value: 'Тест: Разработчик ПО',
          },
          hours: {
            title: 'Кол-во часов',
            code: 'UF_CRM_14_VACANCY',
            type: list,
            col: 6,
            options: [
              { code: "7092", id: 'student', label: 'студент', },
              { code: "7094", id: 'middle', label: 'среднее общее', },
              { code: "7096", id: 'middle-proffessional', label: 'среднее профессиональное', },
              { code: "7098", id: 'high', label: 'высшее/бакалавр', },
              { code: "7100", id: 'magistr', label: 'аспирантура/магистратура', },
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
          date: {
            title: 'Оставить комментарий',
            code: 'UF_CRM_14_VACANCY',
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
