import { FIELD_TYPES } from "../../../../../shared/consts";
import ContactApi from "../../../api/Contact";
import { schema } from "./dto";

const {
  phone,
  email,
} = FIELD_TYPES;

class Contact {
  schema = schema;

  constructor(api) {
    this.api = new ContactApi(api);
  }

  add = async (data, sourceDescription = null) => {
    const fields = {
      "SOURCE_ID": "WEBFORM",
      "SOURCE_DESCRIPTION": `Занятия с инструктором${sourceDescription ? ' ' + sourceDescription : ''}`,
    };

    for (const [apiCode, code] of Object.entries(this.schema)) {
      if (code && data[code]) {
        switch (data[code].type) {
          case phone:
            fields[apiCode] = [{ "VALUE": data[code].value, "VALUE_TYPE": "WORK" }];
            break;
          case email:
            fields[apiCode] = [{ "VALUE": data[code].value, "VALUE_TYPE": "WORK" }];
            break;
          default:
            fields[apiCode] = data[code].value;
            break;
        }
      }
    }

    return await this.api.add(fields);
  }

  getFields = async () => {
    return await this.api.getFields();
  }

  get = async (id) => {
    return await this.api.get(id);
  }
};

export default Contact;