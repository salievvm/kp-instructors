class LessonsApi {
  constructor(api) {
    this.api = api;
  }

  getList = async (productId) => {
    return await this.api.get(
      'lessons',
      productId
    );
  };

  addToCard = async (formData) => {
    return await this.api.post(
      'route=checkout/cart/add',
      formData
    );
  }
}

export default LessonsApi;