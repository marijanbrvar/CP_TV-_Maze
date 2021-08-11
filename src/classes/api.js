export default class Api {
  constructor() {
    this.url = 'https://api.tvmaze.com/shows';
    this.header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
  }

  async getShows() {
    const res = await fetch(this.url, { method: 'GET' });
    const data = await res.json();
    return data.slice(12, 24);
  }
}