import React from 'react';
import PropTypes from 'prop-types';


export default function VolumeRange({volumeChangeEvent, volume}) {

	const handleChangeVolume = (e) => {
		const volumeRange = Math.ceil(Number(e.target.value));
		volumeChangeEvent(volumeRange)
	}

	return (
		<div className="volumeRange_container">
			<input
				className="volumeRange"
				type='range'
				step="0.1"
				min={0}
				max={100}
				value={volume}
				onChange={handleChangeVolume}
				/>
		</div>
	)
}

VolumeRange.propTypes = {
	volume: PropTypes.number.isRequired,
	volumeChangeEvent: PropTypes.func.isRequired,
};