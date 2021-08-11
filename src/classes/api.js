/* eslint-disable class-methods-use-this */
export default class Api {
  async get(url, endPoint) {
    const res = await fetch(url + endPoint);
    return res.json();
  }

  async post(url, endPoint, body) {
    const res = await fetch(url + endPoint, {
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': 'http://localhost:8080/',
      },
    });
    return res;
  }
}