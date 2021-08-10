export default class Involvement {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.app_id = '5C88SbpqPP3Eb5tpLRl0%';
    this.likeData = [];
  }

  async getLikes() {
    const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5C88SbpqPP3Eb5tpLRl0/likes';
    await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.likeData = json.likes;
      });
  }
}
