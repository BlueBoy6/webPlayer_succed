import React, { useRef, useEffect } from 'react';

export default function VideoInPlay({
	src,
	clickEvent,
	timeEvent,
	loadedVideoEvent,
	newtimePosition
}) {
	const videoRef = useRef();

	useEffect(() => {
		videoRef.current.currentTime = newtimePosition;
	}, [newtimePosition]);

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
			duration: Number(videoRef.current.duration)
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
