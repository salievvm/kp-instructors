import { CATEGORIES } from "../../../../consts";
import { SET_SCHEMA } from "../../../reducers/form";
import store from "../../../store";

import {
  CrmContact,
  CrmDeal,
} from "../../model";
import { schemas } from "../../model/Form/dto";

class FormService {
  constructor(api, app) {
    this.api = api;
    this.app = app;

    this.obCrmContact = new CrmContact(api);
    this.obCrmDeal = new CrmDeal(api);
  }

  initializeSchema = (category_id) => {
    const { form } = store.getState();

    const schema_id = category_id && CATEGORIES[category_id]?.schema;
    const schema = schemas[schema_id] ?? form.schema;

    console.log({ schema_id, schemas });

    store.dispatch({
      type: SET_SCHEMA,
      data: { schema }
    })
  }

  validate = (schema) => {
    let isValidate = true;
    const errorDescription = [];

    for (const chapter of Object.values(schema)) {
      console.group(chapter.title);
      for (const section of Object.values(chapter.sections)) {
        const { items } = section;
        for (const item of Object.values(items)) {
          console.log(item);
          if (item.required === true && !item.value) {
            isValidate = false;

            errorDescription.push(item.title);
          }
        }
      }
      console.groupEnd();
    }

    return [isValidate, errorDescription]
  }

  send = async (category_id) => {
    const { form } = store.getState();
    const resValidate = this.validate(form.schema);

    if (!resValidate[0]) {
      return this.app.setError(`Неверно заполнены поля:

      ${resValidate[1].join(', ')}
      `);
    }

    this.app.setLoading();

    console.log({ schema: form.schema });

    const main = form.schema.main.sections[0].items;
    const sport = form.schema.sport.sections[0].items;
    const date = form.schema.date.sections[0].items;
    const comment = form.schema.comment.sections[0].items;

    const sourceDescription = category_id && CATEGORIES[category_id]?.title;

    const contactId = await this.obCrmContact.add({
      ...main,
    }, sourceDescription);

    console.log({ contactId });

    const resDeal = await this.obCrmDeal.add({
      ...sport,
      ...date,
      ...comment,
    }, contactId, sourceDescription);

    console.log({ resDeal });

    this.app.setSend();
    this.app.endLoading();
  }

  setOpenForm = (state) => {
    this.app.setOpenForm(state);
  }
}

export default FormService;