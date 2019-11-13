import React, { useState, useEffect } from 'react';
import BtnPicto from '../../atoms/btnPicto/btnPicto';

export default function VideoTools({
	playPause,
	playPauseEvent,
	forward,
	rewind,
	seekBarMax,
	seekingBarEvent,
	currentTime,
	fullscreen
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
		seekingBarEvent(e.target.value);
	};

	// toggler of name and picto of button
	const playerLabel = playerstate => (playerstate ? 'pause' : 'play');

	return (
		<div className='tool_bar_video_container'>
			<div className='tool_bar_video'>
				<div className='seekBar'>
					<input
						onChange={handleSeekingTime}
						value={currentTime}
						type='range'
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
