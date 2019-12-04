import React from 'react';
import { mount } from 'enzyme';
import { store } from '../../../store/reducers/index';

import VideoPlayer from './videoPlayer';
import VideoInPlay from '../../atoms/videoInPlay/videoInPlay';
import VideoTools from '../../molecules/videoTools/videoTools';


describe('<VideoPlayer /> Component', () => {
	const wrapper = mount(<VideoPlayer store={store} />);
	
	it('#1 : expect that the component is mounted', () => {
		expect(wrapper.find('.video_player_container').length).toEqual(1);
	});
	 
	it('#2 : expect that the video player component is mounted', () => {
		expect(wrapper.find(VideoInPlay).length).toEqual(1);
	});

	it('#2.1 : expect that the video player component is mounted', () => {
		expect(wrapper.find(VideoInPlay).prop('src')).toEqual("/video/elephant.mp4");
	});
	
	it('#2.2 : expect the good statement of player', () => {
		expect(wrapper.find(VideoInPlay).prop('playPause')).toEqual(false);
	});
	
	it('#2.2 : expect that the video player component is mounted', () => {
		expect(wrapper.find(VideoInPlay).prop('playPause')).toEqual(false);
	});

	it('#3 : expect that video tools is mounted', () => {
		expect(wrapper.find(VideoTools).length).toEqual(1);
 	});

})