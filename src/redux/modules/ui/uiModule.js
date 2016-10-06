import { fromJS } from 'immutable';

// Actions
export const SET_THEME = 'ui/SET_THEME';

// Reducer
const initialState = fromJS({
  theme: 'primary'
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return state.set('theme', action.theme === 'secondary' ? 'secondary' : 'primary');
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
