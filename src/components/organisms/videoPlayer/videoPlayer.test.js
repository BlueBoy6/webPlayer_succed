import React from 'react';
import { mount, shallow } from 'enzyme';
import { store } from '../../../store/reducers/index';

import VideoPlayer from './videoPlayer';
import VideoInPlay from '../../atoms/videoInPlay/videoInPlay';
import VideoTools from '../../molecules/videoTools/videoTools';


describe('<VideoPlayer /> Component', () => {

	let pauseStatmentVideo, 
	wrapper, 
	wrapperMounted;


	
	beforeEach(() => {
		pauseStatmentVideo = jest
		.spyOn(window.HTMLMediaElement.prototype, 'pause')
		.mockImplementation(() => {});
		wrapper = shallow(<VideoPlayer store={store} />);
		wrapperMounted = mount(<VideoPlayer store={store} />);
	});

	
	it('#1 : expect that the component is mounted', () => {
		expect(wrapperMounted.find('.video_player_container').length).toEqual(1);
	});
	 
	it('#2 : expect that the video player component is mounted', () => {
		expect(wrapperMounted.find(VideoInPlay).length).toEqual(1);
	});

	it('#2.1 : expect that the video player component is mounted', () => {
		expect(wrapperMounted.find(VideoInPlay).prop('src')).toEqual("/video/elephant.mp4");
	});
	
	it('#2.2 : expect the good statement of player', () => {
		expect(wrapperMounted.find(VideoInPlay).prop('playPause')).toEqual(false);
	});
	
	it('#2.2 : expect that the video player component is mounted', () => {
		expect(wrapperMounted.find(VideoInPlay).prop('playPause')).toEqual(false);
	});

	it('#3 : expect that video tools is not mounted', () => {
		expect(wrapper.find(VideoTools).length).toEqual(0);
	});

	
	it('#3 : expect that video tools is not mounted', () => {
		expect(wrapper.find(VideoTools).length).toEqual(0);
	});

	 it('#4 : Mock the pause statement on initialize', () => {
		expect(pauseStatmentVideo).toHaveBeenCalled();
	});

})