const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cQK6bXqt0T7mAWM6m29P/likes/';

// like click event
const postData = (count, itemid) => {
  const params = { likes: `${count}`, item_id: `${itemid}` };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
    }
      .then((response) => response.json())
      .then((params) => console.log('Sucess:', params)),
  });
};

export default postData;
