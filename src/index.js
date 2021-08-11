import './style.css';
import Store from './classes/store';
import Modal from './classes/modal';
import Like from './classes/likes';

const modalData = new Modal();
const dataStore = new Store();

const main = document.querySelector('#card-list');
const modal = document.querySelector('#modal');
const counter = document.querySelector('#counter');

const updateCounter = async (data) => {
  if (data.length === 0) return 0;
  return data.length;
};

const renderUi = async (data) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  const newdata = data
    .map((item) => {
      const { id, image, name, language } = item;

      const html = `
    <div class="col">
    <div class="card h-100" id=${id}>
      <img src="${image.medium}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title fs-5 mb-0 pb-0">${name}</h5>
        <p class="p-0 mb-2"><small>Language:</small> ${language}</p>
        <div id="likes" data-id="${id}"><i class="bi bi-heart">${
        item.likes || 0
      }</i></div>
        </div>
        <div class="card-footer bg-white text-center">
        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal" data-id="${id}" onClick="() => modalData.renderModal(item)">
        Comments
        </button>
      </div>
    </div>
    </div>`;
      return html;
    })
    .join('');
  main.innerHTML = newdata;
  const count = await updateCounter(data);
  counter.innerText = count;
};

const initLoad = async () => {
  await dataStore.getShows();
  await dataStore.getLikes();

  renderUi(dataStore.shows);

  const likesCount = document.querySelectorAll('#likes');
  const likes = new Like(likesCount);
  likes.init();
};

modal.addEventListener('shown.bs.modal', (e) => {
  const currentShowId = e.relatedTarget.dataset.id;
  dataStore.getComment(currentShowId);
  const show = dataStore.shows.filter(
    (item) => item.id === parseInt(currentShowId, 10)
  )[0];
  modalData.modalInit(currentShowId, show);
});

initLoad();
