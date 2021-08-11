/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
export default class Modal {
  constructor() {
    this.modal = document.querySelector('#modal');
    this.form = document.querySelector('FORM');
  }

  renderComments(list) {
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    const commentItem = (email, comment) => `
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${email}</div>
          ${comment}
        </div>
      </li>
    `;

    list.forEach((item) => {
      ul.innerHTML += commentItem(item.email, item.comment);
    });

    return ul;
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

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(form.email.value, form.comment.value);
      form.reset();
    });
    form.innerHTML = html;
    return form;
  }

  renderModal(data) {
    const html = `
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name} <span class="fs-6 text-muted">${data.genres}</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-start">
              <div class="col-4">
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
                      <div class="fw-bold">Rating</div>
                      ${data.language}
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                      <div class="fw-bold">Language</div>
                      ${data.rating.average}
                    </div>
                    </li>
                  </ul>
                </div>
                <div id="comments" class="mt3">
                  <div class="px-3 mt-4"><h5>Commens (2)</h5></div>
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
        </div>
      </div>
    `;
    this.modal.innerHTML = html;
    document.querySelector('#new-coment').append(this.renderCommentForm());
    document.querySelector('#comments').append(this.renderComments([{ email: 'mama@mamma.com', comment: 'sadsasda asdsasad' }]));
  }
}