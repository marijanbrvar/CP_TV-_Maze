export default class Api {
  constructor() {
    this.url = 'https://api.tvmaze.com/shows';
  }

  async getData() {
    const res = await fetch(this.url, { method: 'GET' });
    const data = await res.json();

    return data;
  }
}