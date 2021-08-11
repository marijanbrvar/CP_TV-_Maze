/* eslint-disable class-methods-use-this */
import Store from './store';

export default class Modal {
  constructor() {
    this.modal = document.querySelector('.modal-content');
    this.form = document.querySelector('FORM');
    this.modalId = null;
    this.store = new Store();
  }

  async renderComments(id) {
    try {
      const showComments = await this.store.getComment(id);
      const commentsCount = document.querySelector('#comments-count');
      commentsCount.innerText = `(${await showComments.length || 0})`;
      const ul = document.createElement('ul');
      ul.classList.add('list-group', 'list-group-flush');

      const commentItem = (username = '', comment = '') => `
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${username}</div>
          ${comment}
        </div>
      </li>
    `;

      this.store.commments.forEach((item) => {
        ul.innerHTML += commentItem(item.username, item.comment);
      });

      return ul;
    } catch (error) {
      const ul = document.createElement('ul');
      ul.classList.add('list-group', 'list-group-flush');

      const commentItem = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            No coments yet!
          </div>
        </li>
      `;

      ul.innerHTML = commentItem;

      return ul;
    }
  }

  renderCommentForm() {
    const form = document.createElement('form');
    const html = `
    <form>
      <div class="mb-3  px-3">
        <input type="email" class="form-control" name="email" placeholder="name@example.com">
      </div>
      <div class="mb-3 px-3">
        <textarea class="form-control" name="comment" rows="3"></textarea>
      </div>
      <div class="mb-3 px-3 d-flex justify-content-end">
        <button class="btn btn-primary">Submit</button>
      </div>
      
    </form>
    `;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (this.modalId !== '' && form.email.value !== '' && form.comment.value !== '') {
        this.store.postComment({
          item_id: this.modalId, username: form.email.value, comment: form.comment.value,
        });
        form.reset();
        await this.store.getShows();
        const data = this.store.shows.filter((item) => item.id === parseInt(this.modalId, 10));
        this.renderComments(this.modalId);
        this.modalInit(this.modalId, data[0]);
      }
    });
    form.innerHTML = html;
    return form;
  }

  renderModal(data) {
    const html = `
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name} <span class="fs-6 text-muted">${data.genres}</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start gx-2">
              <div class="col-sm-4">
                <figure class="figure">
                  <img src="${data.image.original}" class="figure-img img-fluid rounded" alt="${data.name}">
                </figure>
              </div>
              <div class="col">
                <div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                      <div class="fw-bold">Summary</div>
                      ${data.summary}
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                      <div class="fw-bold">Genres</div>
                      ${data.genres}
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                      <div class="fw-bold">Runtime</div>
                      ${data.runtime} min.
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                      <div class="fw-bold">Language</div>
                      ${data.language}
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                      <div class="fw-bold">Rating</div>
                      ${data.rating.average}
                    </div>
                    </li>
                  </ul>
                </div>
                <div id="comments" class="mt3">
                  <div class="px-3 mt-4"><h5>Comments <span id="comments-count"></span></h5></div>
                </div>
                <div id="new-coment" class="mt3">
                  <div class="px-3 mt-4"><h5>Add new comment</h5></div>
                </div>
              </div>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
    `;
    this.modal.innerHTML = html;
  }

  async modalInit(id, data) {
    this.modalId = data.id;
    this.renderModal(data);
    document.querySelector('#new-coment').append(this.renderCommentForm());
    document.querySelector('#comments').append(await this.renderComments(id));
  }
}