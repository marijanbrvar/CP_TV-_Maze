export default class Post {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.app_id = '5C88SbpqPP3Eb5tpLRl0';
  }

  postLikes = (itemid) => {
    const params = { item_id: `${itemid}` };
    fetch(`${this.baseUrl}/apps/${this.app_id}/likes`, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json;',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
}
