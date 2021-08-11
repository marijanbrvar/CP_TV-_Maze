export default class Involvement {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.app_id = '5C88SbpqPP3Eb5tpLRl0';
  }

  async getLikes() {
    const response = await fetch(`${this.baseUrl}/apps/${this.app_id}/likes`, { method: 'GET' });
    const likeData = await response.json();
    return likeData;
  }
}
