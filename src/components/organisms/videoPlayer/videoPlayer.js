import React, { useState } from 'react';
import { connect } from 'react-redux';
import VideoInPlay from '../../atoms/videoInPlay/videoInPlay';
import VideoTools from '../../molecules/videoTools/videoTools';
import ListVideosPurpose from '../../molecules/listVideosPurpose/listVideosPurpose';
import {smoothVideo} from '../../../helpers/helpers';

import {
	changeCurrentVideo,
	playVideo,
	changeVolume
} from '../../../store/actions/videoActions';

function VideoPlayer(props) {
	const [videoInPlayInfos, setVideoInPlayInfos] = useState({});
	const [timePlayer, setTimePlayer] = useState(0);
	const [newTimePlayer, setNewTimePlayer] = useState(0);

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
		return setNewTimePlayer(smoothVideo('seeker', time));
	};
	const handleVolumeChange = time => {
		return props.changeVolume(time);
	};


	return (
		<div className='video_player_container'>
			<VideoInPlay
				src={currentVideoInPlay.url}
				clickEvent={playPauseEvent}
				playPause={currentVideoInPlayState.playing}
				timeEvent={handleTimeVideoProgress}
				loadedVideoEvent={handleVideoInformations}
				timePosition={timePlayer}
				newTimePosition={newTimePlayer}
				volumeChange={currentVideoInPlayState.volume}
			/>
			<VideoTools
				playPause={currentVideoInPlayState.playing}
				playPauseEvent={playPauseEvent}
				currentTime={timePlayer}
				seekBarMax={videoInPlayInfos.duration}
				seekingBarEvent={handleSeekingTime}
				volumeChangeEvent={handleVolumeChange}
			/>
			<ListVideosPurpose
				videosList={relatedVideos}
				videoSelectedEvent={handleRelatedVideoSelect}
				show={!currentVideoInPlayState.playing}
			/>
		</div>
	);
}

const mapStateToProps = state => ({
	videoCurrentPlay: state.videoCurrentPlay
});

const mapDispatchToProps = {
	changeCurrentVideo,
	playVideo,
	changeVolume
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
