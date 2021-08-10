import './style.css';
import Store from './classes/api';
import Involvement from './classes/involvement';
import postLikes from './classes/postLikes';

const involvement = new Involvement();
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
      id, image, name, genres, language,
    } = item;
    return `
    <section class="col">
    <div class="card" id=${id}>
      <img src="${image.medium}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${name} ${id}</h5>
        <div class="d-flex flex-row bd-highlight mb-2 justify-content-between">
        <i class="bi bi-translate">${language}</i>
        <i class="bi bi-heart countlikes" id=${id}>11</i>
       </div>
      </div>
      <p class=' bg-light border'>Genres: ${genres
    .map((genre) => genre)
    .join(', ')}</p>
      <button type="button" class="btn btn-secondary">comment<i class="comment">(11)</i></button>
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

// click likes
const like = document.querySelector('countlikes');
const card = document.querySelector('#id');
let count = 0;

card.addEventListener('click', (ev) => {
  if (ev.target.id === card.id) {
    const itemId = ev.target.id;
    count += 1;
    Involvement.postLikes(itemId);
  }
  return count;
});

like.innerHTML = count;