import React from 'react';
import { shallow } from 'enzyme';
import BtnPicto from './btnPicto';


describe('<BtnPicto/> Component', () =>{

	let wrapper,
	spy;

	beforeEach(() => {
		spy = jest.fn()
		wrapper = shallow(<BtnPicto pictoName='play' clickCallBack={spy} label='click here'/>);
	});

	it('#1 : Btn container was rended', () => {
	  	expect(wrapper.find('.btn_picto_container').length).toEqual(1);
	});
	
	it('#2 : Btn callback event called"', () => {
		wrapper.find('.btn_picto').simulate('click');
		expect(spy).toHaveBeenCalled()
	});
	
	it('#3 : It must render a good link', () => {
		expect(wrapper.find('.btn_picto_container img').prop('src'))
			.toEqual('/pictos/play.png');
	});

	it('#4 : it must render a alt like label', () => {
		expect(wrapper.find('.btn_picto_container img').prop('alt')).toEqual('click here');
	});

	it('#5 : it must render a good picto url', () => {
		expect(wrapper.find('.btn_picto_container img').prop('src')).toEqual('/pictos/play.png');
	});

	it('#6 : Nothing rended if pictoName is not rended', () => {
		expect(wrapper.find('.btn_picto_container img').prop('src')).toEqual('/pictos/play.png');
	});

});
