import React, { useRef } from 'react';

export default function VideoInPlay({ source }) {
	const videoTarget = useRef();

	const handleClick = () => videoTarget.current.play();
	return (
		<div className='video_container'>
			<video ref={videoTarget} src={source} onClick={handleClick} />
		</div>
	);
}
