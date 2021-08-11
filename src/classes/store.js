import Api from './api';
import Involvement from './involvement';

export default class Store {
  constructor() {
    this.api = new Api();
    this.likeData = new Involvement();
    this.like = [];
  }

  async init() {
    await this.getData();
  }

  getData = async () => {
    const data = await this.api.getData();

    return data;
  }

  getLikes = async () => {
    const likes = await this.likeData.getLikes();
    this.like.push(likes[0].likes);
    return this.like;
  }
}
