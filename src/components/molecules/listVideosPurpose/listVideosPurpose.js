import React from 'react';
import PropTypes from 'prop-types';

export default function ListVideosPurpose({ videosList, videoSelectedEvent }) {
	const handleSelectVideo = video => {
		console.log(video);
		return videoSelectedEvent(video);
	};

	return (
		<div className='videos_lists_container'>
			{videosList.map(video => {
				return (
					<div
						key={video.id}
						className='thumb_video_container'
						onClick={() => handleSelectVideo(video)}
						style={{
							backgroundImage: `url(${video.thumbnail})`,
							backgroundSize: 'cover'
						}}>
						<h2>{video.title}</h2>
					</div>
				);
			})}
		</div>
	);
}

ListVideosPurpose.propTypes = {
	videosList: PropTypes.array.isRequired
};
