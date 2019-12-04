import { currentVideoReducer, currentVideoState } from './currentVideo.reducer';
import { changeCurrentVideo } from '../../actions/videoActions';

describe('return reducer of curentVideo Reducer', () => {

	const { videosRelated } = currentVideoState;

	let currVidReduc,
	currVidReduc2;

	beforeEach(() => {
		currVidReduc = currentVideoReducer(currentVideoState, changeCurrentVideo(videosRelated[1]));
		currVidReduc2 = currentVideoReducer(currentVideoState, changeCurrentVideo(videosRelated[3]));
	})

	it('#1 : expect the reducer return the good state', () => {
		expect(currVidReduc).toEqual({
			videoPlaying: videosRelated[1],
			videosRelated: videosRelated
		});
	});
	it('#2 : expect the reducer return the good state ', () => {
		expect(currVidReduc2).toEqual({...currentVideoState, videoPlaying: videosRelated[3]});
	});
});