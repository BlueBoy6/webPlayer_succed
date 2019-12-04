import { CHANGE_VIDEO } from '../../actions/types';

const videosRelated = [
	{
		id: 0,
		title: 'Feel the nature',
		thumbnail: '/img/bridge.jpg',
		url: '/video/nature.mp4',
		timeComplete: 0
	},
	{
		id: 1,
		title: 'Discover the stars',
		thumbnail: '/img/universe.jpg',
		url: '/video/universe.mp4',
		timeComplete: 0
	},
	{
		id: 2,
		title: 'Respect for elephant',
		thumbnail: '/img/elephant.jpg',
		url: '/video/elephant.mp4',
		timeComplete: 0
	},
	{
		id: 3,
		title: 'Laugh by jokes',
		thumbnail: '/img/children.jpg',
		url: '/video/maurice_pub.mp4',
		timeComplete: 0
	}
];

export const currentVideoState = {
	videoPlaying: videosRelated[2],
	videosRelated: videosRelated
};

export function currentVideoReducer(state = currentVideoState, action) {
	switch (action.type) {
		case CHANGE_VIDEO:
			return { ...state, videoPlaying: action.payload };
		default:
			return state;
	}
}
