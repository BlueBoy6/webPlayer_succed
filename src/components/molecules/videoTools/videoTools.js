import React, { useState, useEffect } from 'react';
import VolumeRange from '../../atoms/volumeRange/volumeRange';
import BtnPicto from '../../atoms/btnPicto/btnPicto';
import { smoothVideo, getPercentUnit } from '../../../helpers/helpers';

export default function VideoTools({
	playPause,
	playPauseEvent,
	forward,
	rewind,
	seekBarMax,
	seekingBarEvent,
	currentTime,
	fullscreen,
	volumeChangeEvent
}) {



	// handle play
	const playVideo = () => {
		playPauseEvent();
	};

	// handle forward event
	const advanceVideo = () => forward();
	// handle turn back event
	const rewindVideo = () => rewind();
	// handle fullscreen event
	const fullScreenVideo = () => fullscreen();

	const handleSeekingTime = e => {
		seekingBarEvent(Number(e.target.value));
	};

	const seekValue = (currTime) =>  smoothVideo('player', currTime);
	const percent = (currTime) => getPercentUnit(seekValue(currTime), seekBarMax)
	const changeVolumeEvent = (e) => volumeChangeEvent(e);

	// toggler of name and picto of button
	const playerLabel = playerstate => (playerstate ? 'pause' : 'play');


	return (
		<div className='tool_bar_video_container'>
			<div className='tool_bar_video'>
				<div className='seekBar'>
					<span className="progressBar" style={{width: `${percent(currentTime)}%`}}/>
					<input
						onChange={handleSeekingTime}
						value={seekValue(currentTime)}
						type='range'
						step="0.1"
						min='0'
						max={seekBarMax}
					/>
				</div>
				<div className='left_container'>
					<BtnPicto
						pictoName='rewind'
						clickCallBack={rewindVideo}
						label='turn back video'
					/>
					<BtnPicto
						pictoName={playerLabel(playPause)}
						clickCallBack={playVideo}
						label={`${playerLabel(playPause)} video`}
					/>
					<BtnPicto
						pictoName='forward'
						clickCallBack={advanceVideo}
						label='play video'
					/>
					<VolumeRange volumeChangeEvent={changeVolumeEvent} />
				</div>
				<div className='right_container'>
					<BtnPicto
						pictoName='fullscreen'
						clickCallBack={fullScreenVideo}
						label='fullscreen'
					/>
				</div>
			</div>
		</div>
	);
}
