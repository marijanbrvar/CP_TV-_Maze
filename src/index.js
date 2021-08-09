import './style.css';
import Data from './classes/data';

const data = new Data();
data.init();

console.log(data.list);

const main = document.querySelector('MAIN');

const displayItems = (data) => {
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

displayItems(data.list);
