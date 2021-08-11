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
    const {
      id, image, name, language,
    } = item;
    return `
    <section class="col">
    <div class="card" id=${id}>
      <img src="${image.medium}" class="card-img-top">
      <div class="card-body">
       <div class="d-flex flex-row bd-highlight mb-2 justify-content-between">
        <h5 class="card-title fs-6">${name} ${id}</h5>
        <div class="d-flex flex-column bd-highlight mb-3">
        <i class="bi bi-heart"></i>
        <p><span class='countlikes'></span><span>likes</span></p>
        </div>
       </div>
      </div>
      <p>
      <p class="px-3 bg-light border">Language: ${language}</p>
      <button type="button" class="btn btn-secondary">comment</button>
    </div>
    </section>`;
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

// like click event
const clicklike = document.querySelector('countlikes');
const heart = document.querySelector('bi-heart');
const myfunction = () => {
  clicklike.innerHTML = parseInt(clicklike.innerHTML, 10) + 1;
};

heart.addEventListener('click', myfunction);