import React from 'react';
import VolumeRange from '../../atoms/volumeRange/volumeRange';
import BtnPicto from '../../atoms/btnPicto/btnPicto';
import { getPercentUnit } from '../../../helpers/helpers';

export default function VideoTools({
	playPause,
	playPauseEvent,
	forward,
	rewind,
	seekBarMax,
	seekingBarEvent,
	currentTime,
	fullScreenEvent,
	volumeChangeEvent
}) {



	// handle play
	const playVideo = () => {
		playPauseEvent();
	};

	// handle fullscreen event
	const fullScreenVideo = () => fullScreenEvent();

	// handle change time position
	const handleSeekingTime = e => {
		seekingBarEvent(Number(e.target.value));
	};

	const percent = (currTime) => getPercentUnit(currTime, seekBarMax)
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
						value={currentTime}
						type='range'
						step="0.1"
						min='0'
						max={seekBarMax}
					/>
				</div>
				<div className='left_container'>
					<BtnPicto
						pictoName={playerLabel(playPause)}
						clickCallBack={playVideo}
					/>
					<VolumeRange volumeChangeEvent={changeVolumeEvent} />
				</div>
				<div className='right_container'>
					<BtnPicto
						pictoName='fullscreen'
						clickCallBack={fullScreenVideo}
					/>
				</div>
			</div>
		</div>
	);
}
