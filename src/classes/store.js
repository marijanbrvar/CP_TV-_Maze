import Api from './api';

export default class Store {
  constructor() {
    this.api = new Api();
  }

  async init() {
    await this.getData();
  }

  getData = async () => {
    const data = await this.api.getData();

    return data;
  }
}
