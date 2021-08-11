import Store from './store';

export default class Like {
  constructor(nodes) {
    this.nodes = nodes;
    this.store = new Store();
  }

  init() {
    this.eventListener();
  }

  eventListener() {
    this.nodes.forEach((item) => {
      item.addEventListener('click', async () => {
        await this.store.postLikes({ item_id: item.dataset.id });
        location.reload();
      });
    });
  }
}
