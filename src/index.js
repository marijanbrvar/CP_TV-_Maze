import './style.css';
import Store from './classes/store';
import Modal from './classes/modal';

const modalData = new Modal();
const dataStore = new Store();

const main = document.querySelector('#card-list');
const modal = document.querySelector('#modal');
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
    const {
      id, image, name, language,
    } = item;
    modalData.renderModal(item);
    const html = `
    <section class="col">
    <div class="card" id=${id}>
      <img src="${image.medium}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title fs-5 mb-0 pb-0">${name}</h5>
        <p class="p-0 mb-2"><small>Language:</small> ${language}</p>
        <i class="bi bi-heart">11</i>
        <a type="button" class="btn btn-ligth" data-bs-toggle="modal" data-bs-target="#modal" " data-id="${id}">
          <i class="bi bi-chat-left">
          <span class="text-muted fs-6 fw-bolder ms-1" id="coments-count">2</span>
          </i>
        </a>
      </div>
      <div class="card-footer">
       <ul id="genre">
       </ul>
      </div>
    </div>
    </section>`;
    return html;
  }).join('');
  main.innerHTML = newdata;

  const count = await updateCouner(data);
  counter.innerText = count;
};

const initLoad = async () => {
  await dataStore.getData();

  renderUi(dataStore.shows);
};

modal.addEventListener('shown.bs.modal', (e) => {
  const currentShowId = e.relatedTarget.dataset.id;
  const show = dataStore.shows.filter((item) => item.id === parseInt(currentShowId, 10))[0];
  modalData.renderModal(show);
});

initLoad();

// like click event
// const clicklike = document.querySelector('countlikes');
// const heart = document.querySelector('bi-heart');
// const myfunction = () => {
//   clicklike.innerHTML = parseInt(clicklike.innerHTML, 10) + 1;
// };

// heart.addEventListener('click', myfunction);
