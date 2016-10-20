import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import BlogPost from './BlogPost';
import Loader from '../Loader/Loader';
import classes from './BlogPost.scss';

describe('BlogPost', () => {
  let loading;
  let post;
  let wrapper;

  beforeEach(() => {
    loading = false;
    post = fromJS({ id: '1', content: '<div>content</div>' });
    wrapper = shallow(<BlogPost loading={loading} post={post} />);
  });

  it('renders a loading if props.loading is true', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.type()).to.equal(Loader);
  });

  it('renders a h6.notFound if props.loading = false and props.post = undefined', () => {
    wrapper.setProps({ loading, post: null });
    expect(wrapper.type()).to.equal('h6');
    expect(wrapper.prop('className')).to.equal(classes.notFound);
  });

  it('renders a root div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  describe('nested elements', () => {
    let header;
    beforeEach(() => {
      header = wrapper.find(`.${classes.header}`);
    });

    describe('header', () => {
      it('is a div', () => {
        expect(header.type()).to.equal('div');
      });

      it('has a .header class', () => {
        expect(header.prop('className')).to.equal(classes.header);
      });

      it('contains an h4', () => {
        expect(header.find('h4')).to.have.length(1);
      });

      it('contains 3 spans', () => {
        expect(header.find('span')).to.have.length(3);
      });
    });

    describe('body', () => {
      let body;
      beforeEach(() => {
        body = wrapper.find(`.${classes['markdown-body']}`);
      });

      it('is a div', () => {
        expect(body.type()).to.equal('div');
      });

      it('has a .header class', () => {
        expect(body.prop('className')).to.equal(classes['markdown-body']);
      });

      it('has its innerHTML set to post.content', () => {
        expect(wrapper.contains(
          <div
            className={classes['markdown-body']}
            dangerouslySetInnerHTML={{ __html: post.get('content') }}
          />
        )).to.be.true;
      });
    });
  });
});
