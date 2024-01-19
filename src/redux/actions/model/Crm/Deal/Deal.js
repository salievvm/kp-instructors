import { FIELD_TYPES } from "../../../../../consts";

import DealApi from "../../../api/Deal/Deal";
import { entityTypeId, schema } from "./dto";

const {
  radioGroup,
  file,
  list,
} = FIELD_TYPES;

class Deal {
  entityTypeId = entityTypeId;
  schema = schema;

  constructor (api) {
    this.api = new DealApi(api);
  }

  add = async (data, contactId) => {
    const fields = {
      "CATEGORY_ID": this.entityTypeId,
      "CONTACT_ID": contactId,
      "SOURCE_ID": "WEBFORM",
      "SOURCE_DESCRIPTION": "Заполнена форма Занятия с инструктором",
    };

    // console.log({ data });

    for (const [apiCode, code] of Object.entries(schema)) {
      if (code && data[code]) {
        switch (data[code].type) {
          case file:
            if (data[code].value) {
              fields[apiCode] = data[code].value.map(value => (
                [value.name, value.base64]
              ));
            }
            break;
          case list:
            if (data[code].value) {
              fields[apiCode] = data[code].value.code;
            }
            break;
          case radioGroup:
            const { options } = data[code];
            if (data[code].value) {
              fields[apiCode] = data[code].value.map(value => {
                return options.find((option) => option.id === value).code;
              });
            }
            break;
          default:
            console.log({ fields, code, data});
            fields[apiCode] = data[code].value;
            if (code === 'date') {
              fields[apiCode] = `${data[code].value} ${data.time.value.label}:00`;
            }
            break;
        }
      }
    }

    return await this.api.add(fields);
  }

  update = async (id, fields) => {
    return await this.api.update(id, fields);
  }

  getFields = async () => {
    return await this.api.getFields();
  }
}

export default Deal;