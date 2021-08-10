import './style.css';
import Store from './classes/api';

const store = new Store();
const main = document.querySelector('#card-list');
const modal = document.querySelector('#modal');

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
      <a type="button" class="btn btn-ligth btn-sm" data-bs-toggle="modal" data-bs-target="#modal" " data-id="${item}">Comment</a>
    </div>
    </div>`;
  }).join('');
  main.innerHTML = newdata;
};

const initLoad = async () => {
  const res = await store.getData();
  renderUi(res);
};

modal.addEventListener('shown.bs.modal', (e) => {
  console.log(e.relatedTarget.dataset.id);
});

initLoad();