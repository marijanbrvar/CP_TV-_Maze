import './style.css';
import Store from './classes/api';

const store = new Store();
const main = document.querySelector('#card-list');
const counter = document.querySelector('#counter');

const updateCouner = async (data) => {
  if (data.length === 0) return 0;
  return data.length;
};

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
        <h5 class="card-title">${name} ${id}</h5>
      </div>
    </div>
    </div>`;
  }).join('');
  main.innerHTML = newdata;

  const count = await updateCouner(data);
  counter.innerText = count;
};

const initLoad = async () => {
  const res = await store.getData();
  renderUi(res);
};

initLoad();