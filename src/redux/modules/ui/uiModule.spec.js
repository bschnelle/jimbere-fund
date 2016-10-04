import { expect } from 'chai';
import { fromJS } from 'immutable';
import * as uiModule from './uiModule';

const { default: reducer, SET_THEME, setTheme } = uiModule;

describe('[Redux] UIModule', () => {
  describe('reducer', () => {
    describe('default state', () => {
      it('theme = "secondary"', () => {
        expect(reducer(undefined, {}).get('theme')).to.equal('secondary');
      });
    });

    describe('SET_THEME', () => {
      it('if action.theme = "secondary", sets state.theme to "secondary"', () => {
        const state = fromJS({});
        const theme = 'secondary';
        expect(reducer(state, { type: SET_THEME, theme }).get('theme')).to.equal('secondary');
      });

      it('sets state.theme to "primary" otherwise', () => {
        const state = fromJS({});
        const theme = 'other';
        expect(reducer(state, { type: SET_THEME, theme }).get('theme')).to.equal('primary');
      });
    });

    describe('default', () => {
      it('returns old state', () => {
        const state = fromJS({});
        expect(reducer(state, { type: 'SOMETHING_ELSE' })).to.equal(state);
      });
    });
  });

  describe('setTheme()', () => {
    it('returns an action with type of SET_THEME and theme set to argument', () => {
      const theme = 'primary';
      const action = setTheme(theme);
      expect(action.type).to.equal(SET_THEME);
      expect(action.theme).to.equal(theme);
    });
  });
});
