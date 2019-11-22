import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import videoPlayer from './_videoPlayerReducer';

// state and actions combiner
export const allReducers = combineReducers({
	videoCurrentPlay: videoPlayer
});

// initialize store
export const store = createStore(allReducers, applyMiddleware(thunk));
