import React from 'react';
import PropTypes from 'prop-types';

export default function Picto({ pictoName, clickEvent, alt }) {
	function pictoSetter(picto) {
		switch (picto) {
			case 'play':
				return '/pictos/play.png';
			case 'pause':
				return '/pictos/pause.png';
			case 'forward':
				return '/pictos/forward.png';
			case 'rewind':
				return '/pictos/rewind.png';
			case 'fullscreen':
				return '/pictos/fullscreen.png';
			case 'fullscreen_minimize':
				return '/pictos/fullscreen_minimize.svg';
			default:
				return 'picto_error';
		}
	}

	// handle click event and launch callback here
	const handleClick = e => clickEvent(e);

	if (pictoName !== undefined || pictoName.length !== 0) {
		return (
			<div className='picto_container'>
				<img src={pictoSetter(pictoName)} alt={alt} className='picto' onClick={handleClick}/>
			</div>
		);
	} else {
		return <></>;
	}
}

Picto.propTypes = {
	pictoName: PropTypes.string.isRequired,
	clickEvent: PropTypes.func,
	alt: PropTypes.string
};
