import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function VideoInPlay({
	src,
	playPause,
	clickEvent,
	timeEvent,
	loadedVideoEvent,
	newTimePosition,
	volumeChange
}) {
	const [newTimePositionState, setNewTimePosition] = useState(0);

	const videoRef = useRef();
	useEffect(() => {
		if (videoRef.current) {
			// Play/Pause event manager from parent
			if (playPause === true) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
	
			// Seeking event local manager
			if (newTimePositionState !== newTimePosition) {
				const timeToPlay = newTimePosition;
				videoRef.current.currentTime = timeToPlay;
				setNewTimePosition(timeToPlay);
			}
	
			videoRef.current.volume = volumeChange / 100;
		}
	}, [newTimePosition, newTimePositionState, playPause, volumeChange])

	const handleClick = e => {
		if (videoRef.current.paused) {
			videoRef.current.play();
			return clickEvent(videoRef.current);
		} else {
			videoRef.current.pause();
			return clickEvent(videoRef.current);
		}
	};

	const handleTimeUpdate = e => {
		const currentTime = e.target.currentTime;
		return timeEvent(currentTime);
	};

	const handleLoaded = e => {
		const videoInformations = {
			duration: videoRef.current.duration
		};
		loadedVideoEvent(videoInformations);
	};

	return (
		<div className='video_container'>
			<video
				className="video_player"
				ref={videoRef}
				src={src}
				onClick={handleClick}
				onLoadedData={handleLoaded}
				onTimeUpdate={handleTimeUpdate}
			/>
		</div>
	);
}

VideoInPlay.propTypes = {
	src: PropTypes.string.isRequired,
	playPause: PropTypes.bool.isRequired,
	newTimePosition: PropTypes.number.isRequired,
	volumeChange: PropTypes.number.isRequired,

	clickEvent: PropTypes.func.isRequired,
	timeEvent: PropTypes.func.isRequired,
	loadedVideoEvent: PropTypes.func.isRequired,
};