import {
	PLAY_PAUSE,
	VOLUME_CHANGE,
	TOGGLE_FULLSCREEN
} from '../../actions/types';

const playerState = {
	isPlaying: false,
	timer: 0,
	volume: 0,
	isFullScreen: false
};

export default function(state = playerState, action) {
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
