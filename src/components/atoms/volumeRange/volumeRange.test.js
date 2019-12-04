import React from 'react';
import { shallow } from 'enzyme';
import VolumeRange from './volumeRange';

describe('<VolumeRange /> Component', () =>{

	let wrapper,
	spy;

	beforeEach(() => {
		spy = jest.fn()
		wrapper = shallow(<VolumeRange volumeChangeEvent={spy} />);
	});

	it('#1 : Volume range was rended', () => {
		expect(wrapper.find('.volumeRange_container').length).toEqual(1);
  });
});