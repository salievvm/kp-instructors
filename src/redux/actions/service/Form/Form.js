import store from "../../../store";

import {
  CrmContact,
  CrmDeal,
//   CrmCandidate,
//   CrmExperience,
//   CrmRecommendation,
//   CrmRelatives,
//   CrmRequisite,
} from "../../model";

class FormService {
  constructor(api, app) {
    this.api = api;
    this.app = app;

    // this.obCrmRequisite = new CrmRequisite(api);
    this.obCrmContact = new CrmContact(api);
    this.obCrmDeal = new CrmDeal(api);
    // this.obCrmCandidate = new CrmCandidate(api);
    // this.obCrmRelatives = new CrmRelatives(api);
    // this.obCrmExperience = new CrmExperience(api);
    // this.obCrmRecommendation = new CrmRecommendation(api);
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
            // let title = item.title;

            // if (!title) {
            //   if (item.type === radioGroup) {
            //     title = 'Наличие водительских прав';
            //   }
            // }
            errorDescription.push(item.title);
          }
        }
      }
      console.groupEnd();
    }

    return [isValidate, errorDescription]
  }

  send = async () => {
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
    // const additional = form.schema.additional.sections[0].items;
    // const carLicense = form.schema.carLicense.sections[0].items;
    // const lawViolation = form.schema.lawViolation.sections[0].items;
    // const main = form.schema.main.sections[0].items;
    // const sourceRecognition = form.schema.sourceRecognition.sections[0].items;
    // const documents = form.schema.documents.sections[0].items;
    // const passport = form.schema.passport.sections[0].items;

    // const relatives = form.schema.family.sections;
    // const experience = form.schema.experience.sections;
    // const recommendation = form.schema.recommendation.sections;

    const contactId = await this.obCrmContact.add({
      ...main,
    });

    console.log({ contactId });

    const resDeal = await this.obCrmDeal.add({
      ...sport,
      ...date,
      ...comment,
    }, contactId);

    console.log({ resDeal });

    // const candidateId = resCandidate.item.id;

    // const resRelatives = await this.obCrmRelatives.add(relatives, candidateId);
    // const resExperience = await this.obCrmExperience.add(experience, candidateId);
    // const resRecommendation = await this.obCrmRecommendation.add(recommendation, candidateId);

    // await this.obCrmCandidate.update(
    //   candidateId,
    //   {
    //     "ufCrm14Relatives": resRelatives,
    //     "ufCrm14Experience": resExperience,
    //     "ufCrm14Recommendations": resRecommendation,
    //   },
    // );

    this.app.setSend();
    this.app.endLoading();
  }

  setOpenForm = (state) => {
    this.app.setOpenForm(state);
  }
}

export default FormService;