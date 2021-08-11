/* eslint-disable arrow-parens */
/* eslint-disable class-methods-use-this */
import Api from './api';

export default class Store {
  constructor() {
    this.showsUrl = 'https://api.tvmaze.com';
    this.involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = '5C88SbpqPP3Eb5tpLRl0';
    this.shows = [];
    this.commments = [];
    this.likes = [];
    this.api = new Api();
  }

  async getShows() {
    const data = await this.api.get(this.showsUrl, '/shows');

    this.shows = data.slice(12, 18);
  }

  async postComment(body) {
    const res = await this.api.post(
      this.involvementUrl,
      `apps/${this.appId}/comments`,
      JSON.stringify(body),
    );
    return res;
  }

  async getComment(id) {
    const res = await this.api.get(
      this.involvementUrl,
      `apps/${this.appId}/comments?item_id=${id}`,
    );
    if (res.length !== 0) {
      this.commments = res;
      return res;
    }
    return [];
  }

  async getLikes() {
    const res = await this.api.get(
      this.involvementUrl,
      `apps/${this.appId}/likes/`,
    );
    // eslint-disable-next-line max-len
    const merge = this.shows.map((show) => ({
      ...show,
      ...res.find((like) => parseInt(like.item_id, 10) === show.id),
    }));
    this.shows = merge;
    return res;
  }

  async postLikes(body) {
    const res = await this.api.post(
      this.involvementUrl,
      `apps/${this.appId}/likes`,
      JSON.stringify(body),
    );
    return res;
  }
}
