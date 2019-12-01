import { combineReducers, createStore } from 'redux';
import playerState from './player/player.reducer';
import currentVideoState from './currentVideo/currentVideo.reducer';

// state and actions combiner
export const allReducers = combineReducers({
	playerState,
	currentVideoState
});

// initialize store
export const store = createStore(allReducers);
