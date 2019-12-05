import React from 'react';
import { mount, shallow } from 'enzyme';
import { currentPlayerState } from '../../../store/reducers/player/player.reducer';
import VideoTools from './videoTools';




describe('<VideoTools /> Component', () =>{

	let wrapper;
	const handlePlayPause = jest.fn();
	const handleSeekingTime = jest.fn();
	const handleVolumeChange = jest.fn();
	const handleFullScreen = jest.fn();

	const timePlayer = 0;
	const videoInfos = {duration: 239};
	const isShowedVideoTool = false;


	beforeEach(() => {
		wrapper = mount(<VideoTools
			playPause={currentPlayerState.isPlaying}
			playPauseEvent={handlePlayPause}
			currentTime={timePlayer}
			seekBarMax={videoInfos.duration}
			seekingBarEvent={handleSeekingTime}
			volume={currentPlayerState.volume}
			volumeChangeEvent={handleVolumeChange}
			fullScreenEvent={handleFullScreen}
			isFullscreen={currentPlayerState.isFullScreen}
			isShowed={isShowedVideoTool}
			/>);
	});

	it('#1 : Picto container was rended', () => {
		expect(wrapper.find('.tool_bar_video_container').length).toEqual(1);
  });

});