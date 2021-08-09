export default class Data {
  constructor() {
    this.list = [];
  }

  async getData() {
    const response = await fetch('https://api.tvmaze.com/shows', {
      method: 'GET',
    });

    const data = await response.json();
    return data;
  }

  async init() {
    const data = getData();
    this.list.push(data);
  }
}