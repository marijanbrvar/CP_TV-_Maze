const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5C88SbpqPP3Eb5tpLRl0/likes';

const postLikes = (itemid) => {
  const params = { item_id: `${itemid}` };
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
    }
      .then((response) => response.json())
      .then((data) => console.log('Sucess:', data)),
  });
};

export default postLikes;
