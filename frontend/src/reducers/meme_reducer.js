import {
  FETCH_MEME,
  FETCH_MEMES,
  CREATE_MEME,
  DELETE_MEME,
} from "../actions/meme_actions";

const MemesReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  const { payload } = action;

  switch (action.type) {
    case FETCH_MEMES:
      return Object.assign({}, state, payload.data);
    case FETCH_MEME:
      //  ;
      return Object.assign({}, state, {
        [payload.data._id]: payload.data.img.data,
      });
    case DELETE_MEME:
      const newState = Object.assign({}, state);
      delete newState[payload.data.memeId];
      return newState;
    default:
      return state;
  }
};

export default MemesReducer;
