import { combineReducers, createStore } from 'redux';
import videoPlayer from './_videoPlayerReducer';

// state and actions combiner
export const allReducers = combineReducers({
	videoCurrentPlay: videoPlayer
});

// initialize store
export const store = createStore(allReducers);
