export default class Involvement {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.app_id = '5C88SbpqPP3Eb5tpLRl0';
  }

  async getData(endpoint) {
    const res = await fetch(`${this.url}/apps/${this.app_id}/${endpoint}/`, { method: 'GET' });
    const data = await res.json();
    return data;
  }

  async postComment(itemId, username, comment) {
    const res = await fetch(`${this.url}/apps/${this.app_id}/comments`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
    });

    return res.json();
  }
}