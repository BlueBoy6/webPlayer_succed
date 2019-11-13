import React, { useState } from 'react';
import { connect } from 'react-redux';
import VideoInPlay from '../../atoms/videoInPlay/videoInPlay';
import VideoTools from '../../molecules/videoTools/videoTools';
import ListVideosPurpose from '../../molecules/listVideosPurpose/listVideosPurpose';
import {
	changeCurrentVideo,
	playVideo
} from '../../../store/actions/videoActions';

function VideoPlayer(props) {
	const [videoInPlayInfos, setVideoInPlayInfos] = useState({});
	const [timePlayer, setTimePlayer] = useState(0);

	const currentVideoInPlayState = props.videoCurrentPlay.currentVideoState;
	const currentVideoInPlay = props.videoCurrentPlay.currentVideo;
	const relatedVideos = props.videoCurrentPlay.videosRelated;

	const playPauseEvent = () => {
		return props.playVideo(!currentVideoInPlayState.playing);
	};
	const handleRelatedVideoSelect = video => {
		return props.changeCurrentVideo(video);
	};
	const handleTimeVideoProgress = time => {
		return setTimePlayer(time);
	};
	const handleVideoInformations = videoInfos => {
		return setVideoInPlayInfos(videoInfos);
	};
	const handleSeekingTime = time => {
		return setTimePlayer(time);
	};

	return (
		<div className='video_player_container'>
			<VideoInPlay
				src={currentVideoInPlay.url}
				clickEvent={playPauseEvent}
				timeEvent={handleTimeVideoProgress}
				loadedVideoEvent={handleVideoInformations}
				newtimePosition={timePlayer}
			/>
			<VideoTools
				playPause={currentVideoInPlayState.playing}
				playPauseEvent={playPauseEvent}
				currentTime={timePlayer}
				timer={``}
				seekBarMax={videoInPlayInfos.duration}
				seekingBarEvent={handleSeekingTime}
			/>
			<ListVideosPurpose
				videosList={relatedVideos}
				videoSelectedEvent={handleRelatedVideoSelect}
			/>
		</div>
	);
}

const mapStateToProps = state => ({
	videoCurrentPlay: state.videoCurrentPlay
});

const mapDispatchToProps = {
	changeCurrentVideo,
	playVideo
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
