import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import { GetInvolvedTiles } from './GetInvolvedTiles';
import classes from './GetInvolvedTiles.scss';

describe('GetInvolvedTiles', () => {
  let onScrollClick;
  let wrapper;

  beforeEach(() => {
    onScrollClick = sinon.stub();
    wrapper = shallow(<GetInvolvedTiles onScrollClick={onScrollClick} />);
  });

  describe('render()', () => {
    describe('root element', () => {
      it('is of type ImageContainer', () => {
        expect(wrapper.type()).to.equal(ImageContainer);
      });

      describe('props', () => {
        it('className = .imageContainer', () => {
          expect(wrapper.prop('className')).to.equal(classes.imageContainer);
        });

        it('src = "/images/hands-o.jpg"', () => {
          expect(wrapper.prop('src')).to.equal('/images/hands-o.jpg');
        });
      });
    });

    describe('Container', () => {
      let container;
      beforeEach(() => { container = wrapper.find(Container); });

      describe('props', () => {
        it('className = .container', () => {
          expect(container.prop('className')).to.equal(classes.container);
        });

        it('fluid = true', () => {
          expect(container.prop('fluid')).to.be.true;
        });

        it('title = "Get Involved"', () => {
          expect(container.prop('title')).to.equal('Get Involved');
        });
      });

      describe('nested elements', () => {
        describe('header', () => {
          let header;
          beforeEach(() => {
            header = container.childAt(0);
          });

          it('is a div', () => {
            expect(header.type()).to.equal('div');
          });

          it('has a .header class', () => {
            expect(header.prop('className')).to.equal(classes.header);
          });

          it('contains a h6', () => {
            expect(header.find('h6')).to.have.length(1);
          });
        });

        describe('tiles', () => {
          let tiles;
          beforeEach(() => {
            tiles = container.childAt(1);
          });

          it('is a div', () => {
            expect(tiles.type()).to.equal('div');
          });

          it('has a .header class', () => {
            expect(tiles.prop('className')).to.equal(classes.tiles);
          });

          describe('fundraising tile', () => {
            let fundraising;
            beforeEach(() => {
              fundraising = tiles.childAt(0).childAt(0);
            });

            it('has a data-id prop set to "fundraising"', () => {
              expect(fundraising.prop('data-id')).to.equal('fundraising');
            });

            it('has an onClick prop set to props.onScrollClick', () => {
              expect(fundraising.prop('onClick')).to.equal(onScrollClick);
            });

            it('contains two h5 elements', () => {
              expect(fundraising.find('h5')).to.have.length(2);
            });
          });

          describe('newsletter tile', () => {
            let fundraising;
            beforeEach(() => {
              fundraising = tiles.childAt(1).childAt(0);
            });

            it('has a data-id prop set to "newsletter"', () => {
              expect(fundraising.prop('data-id')).to.equal('newsletter');
            });

            it('has an onClick prop set to props.onScrollClick', () => {
              expect(fundraising.prop('onClick')).to.equal(onScrollClick);
            });

            it('contains two h5 elements', () => {
              expect(fundraising.find('h5')).to.have.length(2);
            });
          });

          describe('work with us tile', () => {
            let fundraising;
            beforeEach(() => {
              fundraising = tiles.childAt(2).childAt(0);
            });

            it('has a data-id prop set to "work-with-us"', () => {
              expect(fundraising.prop('data-id')).to.equal('work-with-us');
            });

            it('has an onClick prop set to props.onScrollClick', () => {
              expect(fundraising.prop('onClick')).to.equal(onScrollClick);
            });

            it('contains two h5 elements', () => {
              expect(fundraising.find('h5')).to.have.length(2);
            });
          });
        });
      });
    });
  });
});
