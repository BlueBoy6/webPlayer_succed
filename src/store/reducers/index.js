import { combineReducers, createStore } from 'redux';
import { playerReducer } from './player/player.reducer';
import { currentVideoReducer } from './currentVideo/currentVideo.reducer';

// state and actions combiner
export const allReducers = combineReducers({
	playerReducer,
	currentVideoReducer
});

// initialize store
export const store = createStore(allReducers);
