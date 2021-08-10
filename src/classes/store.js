import Api from './api';
import Involvement from './involvement';

export default class Store {
  constructor() {
    this.shows = [];
    this.api = new Api();
    this.involvment = new Involvement();
  }

  async getData() {
    const data = await this.api.getShows();

    this.shows = data;
  }

  getInvolvement = async (endpoint) => {
    const data = await this.involvment.getData(endpoint);
    return data;
  }
}
