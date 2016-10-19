import { expect } from 'chai';
import sinon from 'sinon';
import blogService from './blogService';
import * as fetch from '../../utils/fetch';

describe('[Service] BlogService', () => {
  /* describe('getPost()', () => {
    afterEach(() => { fetch.default.restore(); });

    it('calls fetch.default with https://public-api.wordpress.com/rest/v1.1/sites/jimberefundblog.wordpress.com/posts/:id', () => {
      sinon.stub(fetch, 'default').returns(Promise.resolve());
      const url = 'https://public-api.wordpress.com/rest/v1.1' +
                  '/sites/jimberefundblog.wordpress.com/posts/1';
      const r = new RegExp(url);
      blogService.getPost('1');
      expect(fetch.default).to.have.been.calledWith(sinon.match(r));
    });

    it('if res.ok is true, returns res.text()', () => {
      const text = 'my gnarly post';
      const response = { ok: true, text: () => text };
      sinon.stub(fetch, 'default').returns(Promise.resolve(response));
      return expect(blogService.getPost('slug')).to.eventually.equal(text);
    });

    it('if res.ok is false, throws an error', () => {
      const response = { ok: false };
      sinon.stub(fetch, 'default').returns(Promise.resolve(response));
      return expect(blogService.getPost('slug')).to.eventually.be.rejectedWith(Error);
    });
  }); */

  describe('getPosts()', () => {
    afterEach(() => { fetch.default.restore(); });

    it('calls fetch.default with /blog/posts.json', () => {
      sinon.stub(fetch, 'default').returns(Promise.resolve());
      blogService.getPosts();
      const url = '/blog/posts.json';
      const r = new RegExp(url);
      expect(fetch.default).to.have.been.calledWith(sinon.match(r));
    });

    /* it('appends an offset query param if an offset arg is passed', () => {
      sinon.stub(fetch, 'default').returns(Promise.resolve());
      blogService.getPosts(2);
      expect(fetch.default).to.have.been.calledWith(sinon.match(/\?offset=2/));
    }); */

    it('if res.ok is true, returns res.json()', () => {
      const json = { posts: [] };
      const response = { ok: true, json: () => json };
      sinon.stub(fetch, 'default').returns(Promise.resolve(response));
      return expect(blogService.getPosts()).to.eventually.equal(json);
    });

    it('if res.ok is false, throws an error', () => {
      const response = { ok: false };
      sinon.stub(fetch, 'default').returns(Promise.resolve(response));
      return expect(blogService.getPosts()).to.eventually.be.rejectedWith(Error);
    });
  });
});
