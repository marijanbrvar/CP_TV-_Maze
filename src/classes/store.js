import Api from './api';
import Involvement from './involvement';

export default class Store {
  constructor() {
    this.api = new Api();
    this.involvment = new Involvement();
  }

  async init() {
    await this.getData();
  }

  getData = async () => {
    const data = await this.api.getData();

    return data;
  }

  getInvolvement = async (endpoint) => {
    const data = await this.involvment.getData(endpoint);

    return data;
  }
}
