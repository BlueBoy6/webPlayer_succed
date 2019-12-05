import React from 'react';
import { currentPlayerState } from '../../../store/reducers/player/player.reducer';
import { currentVideoState } from '../../../store/reducers/currentVideo/currentVideo.reducer';
import { mount, shallow } from 'enzyme';
import VideoInPlay from './videoInPlay'



describe('<VideoInPlay /> Component', () =>{

	let wrapper;

	const timePlayer = 0;
	const newTimePlayer = 0;

	const handlePlayPause = jest.fn();
	const handleTimeVideoProgress = jest.fn();
	const handleVideoInformations = jest.fn();

	// the good way to mock a media on pause statement
	const pauseStatementVideo = jest
		.spyOn(window.HTMLMediaElement.prototype, 'pause')
		.mockImplementation(() => {});

	const playStatementVideo = jest
		.spyOn(window.HTMLMediaElement.prototype, 'play')
		.mockImplementation(() => {});

	beforeEach(() => {
		
		wrapper = mount(<VideoInPlay
			src={currentVideoState.videoPlaying.url}
			clickEvent={handlePlayPause}
			playPause={currentPlayerState.isPlaying}
			timeEvent={handleTimeVideoProgress}
			loadedVideoEvent={handleVideoInformations}
			timePosition={timePlayer}
			newTimePosition={newTimePlayer}
			fullScreenState={currentVideoState.fullScreen}
			volumeChange={currentPlayerState.volume}
			/>);
	});

	it('#1 : Video container was rended', () => {
		expect(wrapper.find('.video_container').length).toEqual(1);
	});
	
	it('#2 : Mock the pause statement on initialize', () => {
		expect(pauseStatementVideo).toHaveBeenCalled();
	});
	
	it('#3 : Video container was rended', () => {
		wrapper.find('.video_player').simulate('click')
		expect(handlePlayPause).toHaveBeenCalled();
		expect(playStatementVideo).toHaveBeenCalled();
		// expect(handleTimeVideoProgress).toHaveBeenCalled();

	});
	
});