import { CHANGE_VIDEO, PLAY_PAUSE_VIDEO, VOLUME_CHANGE_VIDEO, TOGGLE_FULLSCREEN_VIDEO } from "./types";

export const changeCurrentVideo = video => {
	return {
		type: CHANGE_VIDEO,
		payload: video
	};
};
export const playVideo = (playpause) => {
	return {
		type: PLAY_PAUSE_VIDEO,
		payload: playpause
	};
};
export const changeVolume = (volume) => {
	return {
		type: VOLUME_CHANGE_VIDEO,
		payload: volume
	};
};
export const toggleFullScreen = (state) => {
	return {
		type: TOGGLE_FULLSCREEN_VIDEO,
		payload: state
	};
};
