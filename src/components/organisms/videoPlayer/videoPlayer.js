import React from 'react';
import VideoInPlay from '../../atoms/videoInPlay/videoInPlay';
import VideoTools from '../../molecules/videoTools/videoTools';
import ListVideosPurpose from '../../molecules/listVideosPurpose/listVideosPurpose';

export default function VideoPlayer() {
	return (
		<div className='video_player_container'>
			<VideoInPlay source='/video/maurice_pub.mp4' />
			<VideoTools />
			<ListVideosPurpose
				videosList={[
					{ id: 0, title: 'someone else', url: '/video/maurice_pub.mp4' }
				]}
			/>
		</div>
	);
}
