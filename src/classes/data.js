export default class Data {
  constructor() {
    this.list = [];
  }

  getData = async () => {
    const response = await fetch('https://api.tvmaze.com/shows?per_page=6');

    const data = await response.json();
    return data;
  }

  init = async () => {
    const data = await this.getData();
    this.list.push(data);
  }
}