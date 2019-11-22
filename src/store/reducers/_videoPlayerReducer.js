import { PLAY_PAUSE_VIDEO, CHANGE_VIDEO, VOLUME_CHANGE_VIDEO, TOGGLE_FULLSCREEN_VIDEO } from '../actions/types';

const initialState = {
	currentVideoState: {
		playing: false,
		timer: 0,
		volume: 0,
		fullScreen: false
	},
	currentVideo: {
		title: 'Feel the nature',
		thumbnail: '/img/bridge.jpg',
		url: '/video/nature.mp4'
	},
	videosRelated: [
		{
			id: 0,
			title: 'Feel the nature',
			thumbnail: '/img/bridge.jpg',
			url: '/video/nature.mp4'
		},
		{
			id: 1,
			title: 'Discover the stars',
			thumbnail: '/img/universe.jpg',
			url: '/video/universe.mp4'
		},
		{
			id: 2,
			title: 'Respect for elephant',
			thumbnail: '/img/elephant.jpg',
			url: '/video/elephant.mp4'
		},
		{
			id: 3,
			title: 'Laugh by jokes',
			thumbnail: '/img/children.jpg',
			url: '/video/maurice_pub.mp4'
		}
	]
};

export default function(state = initialState, action) {
	console.log('state', state)
	switch (action.type) {
		case CHANGE_VIDEO:
			return { ...state, currentVideo: action.payload };
		case TOGGLE_FULLSCREEN_VIDEO:
			return { ...state, currentVideoState : {...state.currentVideoState, fullScreen: !action.payload} };
		case VOLUME_CHANGE_VIDEO:
			return {
				...state,
				currentVideoState: {
					...state.currentVideoState,
					volume: action.payload
				}
			};
		case PLAY_PAUSE_VIDEO:
			return {
				...state,
				currentVideoState: {
					...state.currentVideoState,
					playing: action.payload
				}
			};
		default:
			return state;
	}
}
