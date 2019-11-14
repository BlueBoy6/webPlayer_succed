import React from 'react'


export default function VolumeRange({volumeChangeEvent}) {

	const handleChangeVolume = (e) => {
		const volumeRange = Math.ceil(Number(e.target.value))
		volumeChangeEvent(volumeRange)
	}

	return (
		<div className="volumeRange_container">
			<span className="volumeBar_hider"/>
			<input
				type='range'
				step="0.1"
				min='0'
				max={100}
				onChange={handleChangeVolume}
				/>
		</div>
	)
}
