export default class Involvement {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.app_id = '5C88SbpqPP3Eb5tpLRl0%';
  }

  postLikes = (itemid) => {
    const params = { item_id: `${itemid}` };
    const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5C88SbpqPP3Eb5tpLRl0/likes/';
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json',
      }
        .then((response) => response.json())
        .then((data) => console.log('Sucess:', data)),
    });
  };
}
