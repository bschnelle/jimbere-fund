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

  getPosts(nextPageToken) {
    const apiKey = 'AIzaSyD-5Ripyoq7Tqn9LLVvjbsWE3kH_XoU2dI';
    const blogID = '4014902320987113516';
    const pageToken = nextPageToken ? `&pageToken=${nextPageToken}` : '';
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}${pageToken}`;

    return fetch.default(url)
      .then(fetch.handleError)
      .then(fetch.getJSON);
  }
}

export default new BlogService();
