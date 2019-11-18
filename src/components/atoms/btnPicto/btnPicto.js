import React from 'react';
import PropTypes from 'prop-types';

export default function BtnPicto({ pictoName, clickCallBack, label }) {

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
			default:
				return 'picto_error';
		}
	}

	// handle click event and launch callback here
	const handleClick = e => clickCallBack(e);

	if(pictoName !== undefined || pictoName.length !== 0){
		return (
			<div className='btn_picto_container'>
				<div className='btn_picto' onClick={handleClick}>
					<img src={pictoSetter(pictoName)} alt={label} className='picto' />
					{label ? label : ''}
				</div>
			</div>
		);
	}else{
		return(<></>)
	}
}

BtnPicto.propTypes = {
	pictoName: PropTypes.string.isRequired,
	clickCallBack: PropTypes.func,
	label: PropTypes.string
};
