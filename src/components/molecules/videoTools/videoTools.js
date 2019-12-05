import React from 'react';
import PropTypes from 'prop-types';

import VolumeRange from '../../atoms/volumeRange/volumeRange';
import Picto from '../../atoms/picto/picto';
import { getPercentUnit } from '../../../helpers/helpers';

export default function VideoTools({
	playPause,
	playPauseEvent,
	seekBarMax,
	seekingBarEvent,
	currentTime,
	fullScreenEvent,
	volume,
	volumeChangeEvent,
	isFullscreen,
	isShowed
}) {

	// handle play
	const handlePlayPauseVideo = () => {
		playPauseEvent();
	};

	// handle fullscreen event
	const fullScreenVideo = () => fullScreenEvent();

	// handle change time position
	const handleSeekingTime = e => seekingBarEvent(Number(e.target.value));
	
	// get a percent 
	const percent = currTime => getPercentUnit(currTime, seekBarMax);
	
	// method of changing volume for parent
	const changeVolumeEvent = e => volumeChangeEvent(e);

	// toggler of name and picto of button
	const playerLabel = playerstate => (playerstate ? 'pause' : 'play');

	return (
		<div
			className={`tool_bar_video_container ${isShowed ? 'show' : 'hidden'}`}>
			<div className='tool_bar_video'>
				<div className='seekBar'>
					<span
						className='progressBar'
						style={{ width: `${percent(currentTime)}%` }}
					/>
					<input
						onChange={handleSeekingTime}
						value={currentTime}
						type='range'
						step='0.1'
						min='0'
						max={seekBarMax}
					/>
				</div>
				<div className='left_container'>
					<Picto
						pictoName={playerLabel(playPause)}
						clickEvent={handlePlayPauseVideo}
						alt={`${playerLabel(playPause)} video`}
					/>
					<VolumeRange volume={volume} volumeChangeEvent={changeVolumeEvent} />
				</div>
				<div className='right_container'>
					<Picto
						pictoName={isFullscreen ? 'fullscreen_minimize' : 'fullscreen'}
						clickEvent={fullScreenVideo}
						alt='fullscreen'
					/>
				</div>
			</div>
		</div>
	);
}

VideoTools.propTypes = {
	playPause: PropTypes.bool.isRequired,
	playPauseEvent: PropTypes.func.isRequired ,
	seekBarMax: PropTypes.number.isRequired,
	seekingBarEvent: PropTypes.func.isRequired,
	currentTime: PropTypes.number.isRequired,
	fullScreenEvent: PropTypes.func.isRequired,
	volume: PropTypes.number.isRequired,
	volumeChangeEvent: PropTypes.func.isRequired ,
	isFullscreen: PropTypes.bool.isRequired ,
	isShowed: PropTypes.bool.isRequired,
};