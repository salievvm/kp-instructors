class DealApi {
  constructor(api, entityTypeId) {
    this.api = api;
    this.entityTypeId = entityTypeId;
  }

  getList = async () => {
    return await this.api.BatchQuery(
      'crm.deal.list',
      {
        entityTypeId: this.entityTypeId,
      },
      true
    );
  };

  update = async (id, fields) => {
    return await this.api.Get(
      'crm.deal.update',
      {
        entityTypeId: this.entityTypeId,
        id,
        fields,
      }
    );
  };

  add = async (fields) => {
    return await this.api.Get(
      'crm.deal.add',
      {
        entityTypeId: this.entityTypeId,
        fields,
      }
    );
  };

  getFields = async () => {
    return await this.api.BatchQuery(
      'crm.deal.fields',
      {
        entityTypeId: this.entityTypeId,
      }
    );
  }

  get = async (id) => {
    return await this.api.Get(
      'crm.deal.get',
      {
        id
      }
    );
  }

  getByFilter = async ({ select, order, filter }) => {
    return await this.api.BatchQuery(
      'crm.deal.list',
      {
        select,
        order,
        filter,
      },
      true
    );
  }

}

export default DealApi;