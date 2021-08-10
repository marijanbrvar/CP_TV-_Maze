import './style.css';
import Store from './classes/api';

const store = new Store();
const main = document.querySelector('MAIN');

const renderUi = async (data) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  // eslint-disable-next-line array-callback-return
  const newdata = data.map((item) => {
    const { id, image } = item;
    return `<div class ='image'>
    <img src='${image.medium}' alt='image'>
    <div class='info'>
    <p class ='title'>Space ${id}</p>
    <div class='likes>
    <span class="material-icons-sharp">
favorite_border</span>
<span class='like'>likes</span>
</div>
</div>
</div>`;
  }).join('');
  main.innerHTML = newdata;
};

const initLoad = async () => {
  const res = await store.getData();
  renderUi(res);
  // return res;
};

initLoad();