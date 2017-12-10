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
    const url = 'https://www.googleapis.com/blogger/v3/blogs/2842622942419516439/posts?key=AIzaSyD-5Ripyoq7Tqn9LLVvjbsWE3kH_XoU2dI';

    return fetch.default(url)
      .then(fetch.handleError)
      .then(fetch.getJSON);
  }
}

export default new BlogService();
