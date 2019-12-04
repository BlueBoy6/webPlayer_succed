import React from 'react';
import { mount, shallow } from 'enzyme';
import Picto from './picto';


describe('<Picto/> Component', () =>{

	let wrapper,
	wrapperMounted,
	spy;

	beforeEach(() => {
		spy = jest.fn()
		wrapper = shallow(<Picto pictoName='play' clickEvent={spy} alt='click here'/>);
		wrapperMounted = mount(<Picto pictoName='play' clickEvent={spy} alt='click here'/>);
	});

	it('#1 : Picto container was rended', () => {
	  	expect(wrapper.find('.picto_container').length).toEqual(1);
	});
	it('#1.1 : Picto was rended', () => {
	  	expect(wrapper.find('.picto').length).toEqual(1);
	});
	
	it('#2 : Picto callback event called"', () => {
		wrapperMounted.find('.picto').simulate('click');
		expect(spy).toHaveBeenCalled()
	});
	
	it('#3 : It must render a good link', () => {
		expect(wrapper.find('.picto_container img').prop('src'))
			.toEqual('/pictos/play.png');
	});

	it('#4 : it must render a alt like label', () => {
		expect(wrapper.find('.picto_container img').prop('alt')).toEqual('click here');
	});

	it('#5 : it must render a good picto url', () => {
		expect(wrapper.find('.picto_container img').prop('src')).toEqual('/pictos/play.png');
	});
});
