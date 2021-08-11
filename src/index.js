import './style.css';
import Store from './classes/store';
import Modal from './classes/modal';
import counter from './classes/util';

const modalData = new Modal();
const dataStore = new Store();

const main = document.querySelector('#card-list');
const modal = document.querySelector('#modal');
const counterTarget = document.querySelector('#counter');

const renderUi = async (data) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  const newdata = data.map((item) => {
    const {
      id, image, name, language,
    } = item;

    const html = `
    <div class="col">
    <div class="card h-100" id=${id}>
      <img src="${image.medium}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title fs-5 mb-0 pb-0">${name}</h5>
        <p class="p-0 mb-2"><small>Language:</small> ${language}</p>
        <i class="bi bi-heart">11</i>
        </div>
        <div class="card-footer bg-white text-center">
        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" data-id="${id}" onClick="() => modalData.renderModal(item)">
        Comments
        </button>
      </div>
    </div>
    </div>`;
    return html;
  }).join('');
  main.innerHTML = newdata;
  const count = counter(data);
  counterTarget.innerText = count;
};

const initLoad = async () => {
  await dataStore.getShows();

  renderUi(dataStore.shows);
};

modal.addEventListener('shown.bs.modal', (e) => {
  const currentShowId = e.relatedTarget.dataset.id;
  dataStore.getComment(currentShowId);
  const show = dataStore.shows.filter((item) => item.id === parseInt(currentShowId, 10))[0];
  modalData.modalInit(currentShowId, show);
});

initLoad();
