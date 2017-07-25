import { fromJS } from 'immutable';

// Actions
export const SET_THEME = 'ui/SET_THEME';
export const HIDE_BOOK = 'ui/HIDE_BOOK';

// Reducer
const initialState = fromJS({
  theme: 'primary',
  showBook: true,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return state.set('theme', action.theme === 'secondary' ? 'secondary' : 'primary');
    }

    case HIDE_BOOK: {
      return state.set('showBook', false);
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export function setTheme(theme) {
  return { type: SET_THEME, theme };
}

export function hideBook() {
  return { type: HIDE_BOOK };
}
