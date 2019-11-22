import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import VideoInPlay from '../../atoms/videoInPlay/videoInPlay';
import VideoTools from '../../molecules/videoTools/videoTools';
import ListVideosPurpose from '../../molecules/listVideosPurpose/listVideosPurpose';

import {
	changeCurrentVideo,
	playVideo,
	changeVolume,
	toggleFullScreen
} from '../../../store/actions/videoActions';

function VideoPlayer(props) {

	const playerRef = useRef()

	const [videoInPlayInfos, setVideoInPlayInfos] = useState({});
	const [timePlayer, setTimePlayer] = useState(0);
	const [newTimePlayer, setNewTimePlayer] = useState(0);

	const currentVideoInPlayState = props.videoCurrentPlay.currentVideoState;
	const currentVideoInPlay = props.videoCurrentPlay.currentVideo;
	const {currentVideoState, videosRelated} = props.videoCurrentPlay

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
		return setNewTimePlayer(time);
	};
	const handleVolumeChange = time => {
		return props.changeVolume(time);
	};
	const handleFullScreen = () => {
		if (playerRef.current){
			if (!currentVideoState.fullScreen) {
				playerRef.current.requestFullscreen();
			} else {
				if(document.fullscreenElement !== null) document.exitFullscreen(); 
			}
		}
		return  props.toggleFullScreen(currentVideoState.fullScreen)
	}


	return (
		<div ref={playerRef} className='video_player_container'>
			<VideoInPlay
				src={currentVideoInPlay.url}
				clickEvent={playPauseEvent}
				playPause={currentVideoInPlayState.playing}
				timeEvent={handleTimeVideoProgress}
				loadedVideoEvent={handleVideoInformations}
				timePosition={timePlayer}
				newTimePosition={newTimePlayer}
				volumeChange={currentVideoInPlayState.volume}
				fullScreenState={currentVideoState.fullScreen}
			/>
			<VideoTools
				playPause={currentVideoInPlayState.playing}
				playPauseEvent={playPauseEvent}
				currentTime={timePlayer}
				seekBarMax={videoInPlayInfos.duration}
				seekingBarEvent={handleSeekingTime}
				volumeChangeEvent={handleVolumeChange}
				fullScreenEvent={handleFullScreen}
			/>
			<ListVideosPurpose
				videosList={videosRelated}
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
	changeVolume,
	toggleFullScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
