export default class Post {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.app_id = '5C88SbpqPP3Eb5tpLRl0';
  }

  postLikes = async (itemid) => {
    const params = { item_id: `${itemid}` };
    await fetch(`${this.baseUrl}/apps/${this.app_id}/likes/`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json',
      },
    });
  };
}
