import {
  PLAY_PAUSE,
  VOLUME_CHANGE,
  TOGGLE_FULLSCREEN
} from "../../actions/types";

export const currentPlayerState = {
  volume: 25,
  isPlaying: false,
  isFullScreen: false
};

export function playerReducer(state = currentPlayerState, action) {
  switch (action.type) {
    case TOGGLE_FULLSCREEN:
      return { ...state, isFullScreen: !action.payload };
    case VOLUME_CHANGE:
      return { ...state, volume: action.payload };
    case PLAY_PAUSE:
      return { ...state, isPlaying: action.payload };
    default:
      return state;
  }
}
