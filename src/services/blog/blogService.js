import * as fetch from '../../utils/fetch';

class BlogService {
  /* constructor() {
    this.url = 'https://public-api.wordpress.com/rest/v1.1/sites/jimberefundblog.wordpress.com';
  }

  getPost(id) {
    const url = `${this.url}/posts/${id}`;
    return fetch.default(url)
      .then(fetch.handleError)
      .then(fetch.getText);
  } */

  getPosts() {
    const url = '/blog/posts.json';
    // if (offset) url += `?offset=${offset}`;

    return fetch.default(url)
      .then(fetch.handleError)
      .then(fetch.getJSON);
  }
}

export default new BlogService();
