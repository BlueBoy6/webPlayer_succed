import React from 'react';
import { shallow, mount } from 'enzyme';
import VolumeRange from './volumeRange';
import { currentPlayerState, playerReducer } from '../../../store/reducers/player/player.reducer'
import { changeVolume } from '../../../store/actions/videoActions';

describe('<VolumeRange /> Component', () =>{

	let wrapper,
	spy;

	

	beforeEach(() => {
		spy = jest.fn();
		wrapper = mount(<VolumeRange volume={currentPlayerState.volume} volumeChangeEvent={spy} />);
	});

	it('#1 : Volume range was rended', () => {
		expect(wrapper.find('.volumeRange_container').length).toEqual(1);
		expect(wrapper.find('.volumeRange').length).toEqual(1);
	});
	
	// fail to test a changing volume by redux
	it('#2 : must render a good volume change', () => {
		const volumeChangeValue = 67;
		const spyVolumeChange = jest.fn();
		
		const playerReduc = playerReducer(currentPlayerState, changeVolume(currentPlayerState.volume));
		const wrapperMounted = mount(<VolumeRange volume={playerReduc.volume} volumeChangeEvent={spyVolumeChange} />);
		
		const volumeRange = wrapperMounted.find('.volumeRange');
		volumeRange.simulate("change", { target: { value: volumeChangeValue }})
		expect(volumeRange.find('.volumeRange').prop('value')).toEqual(25);
		expect(spyVolumeChange).toHaveBeenCalled();
  	});
});