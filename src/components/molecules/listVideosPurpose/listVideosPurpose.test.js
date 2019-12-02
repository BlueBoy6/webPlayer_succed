import React from 'react';
import { shallow } from 'enzyme';
import ListVideosPurpose from './listVideosPurpose';


describe('<ListVideosPurpose /> Component', () => {

	const videosRelated = [
		{
			id: 0,
			title: 'Feel the nature',
			thumbnail: '/img/bridge.jpg',
			url: '/video/nature.mp4',
			timeComplete: 0
		},
		{
			id: 1,
			title: 'Discover the stars',
			thumbnail: '/img/universe.jpg',
			url: '/video/universe.mp4',
			timeComplete: 0
		},
		{
			id: 2,
			title: 'Respect for elephant',
			thumbnail: '/img/elephant.jpg',
			url: '/video/elephant.mp4',
			timeComplete: 0
		},
		{
			id: 3,
			title: 'Laugh by jokes',
			thumbnail: '/img/children.jpg',
			url: '/video/maurice_pub.mp4',
			timeComplete: 0
		}
	];
	const spy_changeVideo = jest.fn()
	
	const wrapper = shallow(<ListVideosPurpose
						videosList={videosRelated}
						videoSelectedEvent={spy_changeVideo}
						isShowed={true}
						/>);

	it('#1 : Btn container was rended', () => {
		expect(wrapper.find('.videos_lists_container.show').length).toEqual(1);
	});


})