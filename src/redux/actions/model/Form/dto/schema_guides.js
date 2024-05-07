import { FIELD_TYPES } from "../../../../../shared/consts";

const {
  text,
  textarea,
  phone,
  email,
  date,
  list,
} = FIELD_TYPES;


export const schema_guides = {
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
    subtitle: 'Прогулка с гидом',
    sections: {
      0: {
        items: {
          guides_program: {
            title: 'Выберите программу',
            code: 'UF_CRM_INSTRUCTORS_GUIDES_PROGRAM',
            type: list,
            col: 12,
            disabled: false,
            required: true,
            options: [
              { code: "7544", id: 'group', label: 'Групповая', },
              { code: "7546", id: 'individual', label: 'Индивидуальная', },
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
            col: 12,
            maxDate: new Date(2099, 1, 1),
            minDate: new Date(),
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
