import React from 'react';
import { shallow } from 'enzyme';
import Picto from './picto';


describe('<Picto/> Component', () =>{

	let wrapper,
	spy;

	beforeEach(() => {
		spy = jest.fn()
		wrapper = shallow(<Picto pictoName='play' clickCallBack={spy} label='click here'/>);
	});

	it('#1 : Btn container was rended', () => {
	  	expect(wrapper.find('.picto_container').length).toEqual(1);
	});
	
	it('#2 : Btn callback event called"', () => {
		wrapper.find('.picto').simulate('click');
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

	it('#6 : Nothing rended if pictoName is not rended', () => {
		expect(wrapper.find('.picto_container img').prop('src')).toEqual('/pictos/play.png');
	});
});
