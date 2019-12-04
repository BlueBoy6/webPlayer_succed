import { playerReducer, currentPlayerState } from './player.reducer';
import { playVideo, changeVolume, toggleFullScreen } from '../../actions/videoActions';


describe('return reducer of curentVideo Reducer', () => {

	let currPlayerReduc,
	currPlayerReduc2,
	currPlayerReduc3;

	beforeEach(() => {
		currPlayerReduc = playerReducer(currentPlayerState, playVideo(true));
		currPlayerReduc2 = playerReducer(currentPlayerState, changeVolume(50));
		currPlayerReduc3 = playerReducer(currentPlayerState, toggleFullScreen(false));
	});

	it('#1 : expect the initial state is', () => {
		expect(currentPlayerState).toEqual({...currentPlayerState});
	});

	it('#2 : expect the reducer return isPlaying TRUE', () => {
		expect(currPlayerReduc).toEqual({...currentPlayerState, isPlaying: true});
	});

	it('#3 : expect the reducer return changeVolume to 50', () => {
		expect(currPlayerReduc2).toEqual({...currentPlayerState, volume: 50});
	});
	
	it('#4 : expect the reducer return isFullScreen TRUE', () => {
		expect(currPlayerReduc3).toEqual({...currentPlayerState, isFullScreen: true});
	});

});