import React, { useRef, useState, useEffect } from 'react';
import {smoothVideo} from '../../../helpers/helpers';

export default function VideoInPlay({
	src,
	playPause,
	clickEvent,
	timeEvent,
	loadedVideoEvent,
	newTimePosition,
	volumeChange
}) {

	const [newTimePositionState, setNewTimePosition] = useState(0)
	// const [volume, setVolume] = useState(0)
	const videoRef = useRef();

	if(videoRef.current){
		// Play/Pause event manager from parent
		if(playPause === true){
			videoRef.current.play()
		}else{
			videoRef.current.pause()
		}

		// Seeking event local manager 
		if (newTimePositionState !== newTimePosition) {
			const timeToPlay = newTimePosition;
			videoRef.current.currentTime = timeToPlay;
			setNewTimePosition(timeToPlay);
		}

		videoRef.current.volume = volumeChange / 100;
	}

	const handleClick = e => {
		if (videoRef.current.paused) {
			videoRef.current.play();
			return clickEvent(videoRef.current);
		} else {
			videoRef.current.pause();
			return clickEvent(videoRef.current);
		}
	};

	const timeUpdateEvent = e => {
		const currentTime = e.target.currentTime;
		return timeEvent(currentTime);
	};
	const handleLoaded = e => {
		const videoInformations = {
			duration: smoothVideo('player', videoRef.current.duration)
		};
		loadedVideoEvent(videoInformations);
	};


	return (
		<div className='video_container'>
			<video
				ref={videoRef}
				src={src}
				onClick={handleClick}
				onLoadedData={handleLoaded}
				onTimeUpdate={timeUpdateEvent}
			/>
		</div>
	);
}
