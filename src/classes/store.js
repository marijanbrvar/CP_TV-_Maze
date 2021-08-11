/* eslint-disable class-methods-use-this */
import Api from './api';

export default class Store {
  constructor() {
    this.showsUrl = 'https://api.tvmaze.com';
    this.involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = '5C88SbpqPP3Eb5tpLRl0';
    this.shows = [];
    this.commments = [];
    this.api = new Api();
  }

  async getShows() {
    const data = await this.api.get(this.showsUrl, '/shows');

    this.shows = data.slice(12, 18);
  }

  async postComment(body) {
    const res = await this.api.post(this.involvementUrl, `apps/${this.appId}/comments`, JSON.stringify(body));
    return res;
  }

  async getComment(id) {
    const res = await this.api.get(this.involvementUrl, `apps/${this.appId}/comments?item_id=${id}`);
    if (res.length !== 0) {
      this.commments = res;
      return res;
    }
    return [];
  }

  getInvolvement = async (endpoint) => {
    const data = await this.involvment.getData(endpoint);
    return data;
  }
}
