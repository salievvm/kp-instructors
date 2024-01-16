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
}

export default LessonsApi;