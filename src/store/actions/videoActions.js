import { CHANGE_VIDEO, PLAY_PAUSE_VIDEO } from "./types";

export const changeCurrentVideo = video => {
	console.log('change action called', video)
	return {
		type: CHANGE_VIDEO,
		payload: video
	};
};
export const playVideo = (playpause) => {
	console.log('play/pause action called', )
	return {
		type: PLAY_PAUSE_VIDEO,
		payload: playpause
	};
};
