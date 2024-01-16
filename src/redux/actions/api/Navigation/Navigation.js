class NavigationApi {
  constructor(api) {
    this.api = api;
  }

  getTreeList = async () => {
    return await this.api.get(
      { route: 'api/lessonsIntegration/getAllInstructors' }
    );
  };
}

export default NavigationApi;