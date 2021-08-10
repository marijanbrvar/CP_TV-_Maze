import './style.css';
import Store from './classes/api';

const store = new Store();
const main = document.querySelector('#card-list');

const renderUi = async (data) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  const newdata = data.map((item) => {
    const { id, image, name } = item;
    return `
    <div class="col">
    <div class="card" id=${id}>
      <img src="${image.medium}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
      </div>
    </div>
    </div>`;
  }).join('');
  main.innerHTML = newdata;
};

const initLoad = async () => {
  const res = await store.getData();
  renderUi(res);
};

initLoad();