import React from 'react';
import PropTypes from 'prop-types';

export default function Picto({ pictoName, clickCallBack, alt }) {
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
	const handleClick = e => clickCallBack(e);

	if (pictoName !== undefined || pictoName.length !== 0) {
		return (
			<div className='picto_container'>
				<div className='picto' onClick={handleClick}>
					<img src={pictoSetter(pictoName)} alt={alt} className='picto' />
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}

Picto.propTypes = {
	pictoName: PropTypes.string.isRequired,
	clickCallBack: PropTypes.func,
	alt: PropTypes.string
};
