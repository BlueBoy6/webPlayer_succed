import React from 'react';
import PropTypes from 'prop-types';

export default function ListVideosPurpose({ videosList }) {
	return (
		<div className='videos_lists_container'>
			{videosList.map(video => {
				return (
					<div key={video.id} className='thumb_video_container'>
						<img
							alt={video.title}
							src={video.url}
							className='thumb_video'
						/>
					</div>
				);
			})}
		</div>
	);
}

ListVideosPurpose.propTypes = {
	videosList: PropTypes.array.isRequired
};
