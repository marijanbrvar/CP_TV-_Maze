import './style.css';
import Store from './classes/api';
import Post from './classes/postLikes';
import Involvement from './classes/involvement';

const involvement = new Involvement();
const post = new Post();
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
        <div class="d-flex flex-row bd-highlight mb-2 justify-content-between" id=${id}>
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

  const like = document.querySelector('.countlikes');
  like.addEventListener('click', (ev) => {
    if (ev.target.id === ev.target.parentElement.id) {
      console.log(like);
      const itemId = ev.target.id;
      post.postLikes(itemId);
      const data = initLikes();
      ev.target.innerHTML = data;
    }
  });
};

involvement.getLikes();

const initLikes = async () => {
  await store.getLikes();
  const result = store.like;
  return result;
};

const initLoad = async () => {
  const res = await store.getData();
  renderUi(res);
};

initLoad();
