const schema = {
  skis: {
    title: 'Горные лыжи и сноуборд',
    id: 'skis',
    items: [
      {
        id: 'standart',
        title: 'Стандартные тарифы',
        quantity: 12,
        items: [
          {
            title: 'Индивидуальное занятие',
            id: 'individual',
            items: [
              {
                id: '1hour',
                title: '1 час',
              },
              {
                id: '2hours',
                title: '2 часа',
              },
            ],
          },
          {
            title: 'Два человека/Парное занятие',
            id: 'twoperson',
            items: [
              {
                id: '1hour',
                title: '1 час',
              },
              {
                id: '2hours',
                title: '2 часа',
              },
            ],
          },
        ],
      },
      {
        id: 'group',
        title: 'Групповые тарифы',
        quantity: 3,
        items: [
          {
            title: 'Тариф «Учись катать»',
            id: 'learnride',
            items: [
              {
                id: '3hour',
                title: '3 часа',
              },
            ],
          },
        ],
      },
      {
        id: 'vip',
        title: 'Тариф VIP',
        quantity: 18,
        items: [
          {
            title: 'VIP Индивидуальное занятие',
            id: 'vipindividual',
            items: [
              {
                id: '3hour',
                title: '3 часа',
              },
              {
                id: '4hours',
                title: '4 часа',
              },
            ],
          },
          {
            title: 'VIP Два человека',
            id: 'viptwoperson',
            items: [
              {
                id: '3hour',
                title: '3 часа',
              },
              {
                id: '4hours',
                title: '4 часа',
              },
            ],
          },
          {
            title: 'Личное сопровождение - день',
            id: 'vippersonalday',
            items: [
              {
                id: '6hour',
                title: '6 часов',
              },
            ],
          },
          {
            title: 'Личное сопровождение - вечер',
            id: 'vippersonalevening',
            items: [
              {
                id: '4hour',
                title: '4 часа',
              },
            ],
          },
        ],
      },
      {
        id: 'special',
        title: 'Специальные предложения',
        quantity: 14,
        items: [
          {
            title: 'Тариф «Снежный Понедельник»',
            id: 'snowymonday',
            items: [
              {
                id: 'oneperson',
                title: '1 человек',
                items: [
                  {
                    id: '1hour',
                    title: '1 час',
                  },
                  {
                    id: '2hour',
                    title: '2 часа',
                  },
                ],
              },
              {
                id: 'twoperson',
                title: '2 человека',
                items: [
                  {
                    id: '1hour',
                    title: '1 час',
                  },
                  {
                    id: '2hour',
                    title: '2 часа',
                  },
                ],
              },
              {
                id: 'learnride',
                title: 'Тариф «Учись катать»',
                items: [
                  {
                    id: '3hour',
                    title: '3 часа',
                  },
                ],
              },
            ],
          },
          {
            title: 'Тариф «Утро в горах»',
            id: 'morningmountain',
            items: [
              {
                id: 'oneperson',
                title: '1 человек',
                items: [
                  {
                    id: '1hour',
                    title: '1 час',
                  },
                ],
              },
              {
                id: 'twoperson',
                title: '2 человека',
                items: [
                  {
                    id: '1hour',
                    title: '1 час',
                  },
                ],
              },
            ],
          },
          {
            title: 'Тариф «Вечерний»',
            id: 'tariffevening',
            items: [
              {
                id: 'oneperson',
                title: '1 человек',
                items: [
                  {
                    id: '1hour',
                    title: '1 час',
                  },
                  {
                    id: '2hour',
                    title: '2 часа',
                  },
                ],
              },
              {
                id: 'twoperson',
                title: '2 человека',
                items: [
                  {
                    id: '1hour',
                    title: '1 час',
                  },
                  {
                    id: '2hour',
                    title: '2 часа',
                  },
                ],
              },
              {
                id: 'learnride',
                title: 'Тариф «Учись катать»',
                items: [
                  {
                    id: '3hour',
                    title: '3 часа',
                  },
                ],
              },
            ],
          },
          {
            title: 'Тариф «Семейный»',
            id: 'family',
            items: [
              {
                id: 'groupthreeperson',
                title: 'Группа из 3-х человек',
                items: [
                  {
                    id: '2hour',
                    title: '2 часа',
                  },
                ],
              },
              
              {
                id: 'groupgourperson',
                title: 'Группа из 4-х человек',
                items: [
                  {
                    id: '2hour',
                    title: '2 часа',
                  },
                ],
              },
              
            ],
          },
        ],
      },
    ],
  },
};

export { schema };