import {
	CHANGE_VIDEO,
	PLAY_PAUSE,
	VOLUME_CHANGE,
	TOGGLE_FULLSCREEN
} from './types';

export const changeCurrentVideo = video => {
	return {
		type: CHANGE_VIDEO,
		payload: video
	};
};
export const playVideo = playpause => {
	return {
		type: PLAY_PAUSE,
		payload: playpause
	};
};
export const changeVolume = volume => {
	return {
		type: VOLUME_CHANGE,
		payload: volume
	};
};
export const toggleFullScreen = state => {
	return {
		type: TOGGLE_FULLSCREEN,
		payload: state
	};
};
