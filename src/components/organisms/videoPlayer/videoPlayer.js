import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

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
	const playerRef = useRef();

	const [videoInPlayInfos, setVideoInPlayInfos] = useState({});
	const [timePlayer, setTimePlayer] = useState(0);
	const [newTimePlayer, setNewTimePlayer] = useState(0);
	const [isShowedVideoTool, setShowVideoTool] = useState(true);
	const [isLoaded, setLoad] = useState(false);


	const { playerState } = props;
	const { currentVideoState } = props;

	const handlePlayPause = () => props.playVideo(!playerState.isPlaying);

	const handleRelatedVideoSelect = video => props.changeCurrentVideo(video);

	const handleTimeVideoProgress = time => setTimePlayer(time);

	const handleVideoInformations = videoInfos =>{
		setVideoInPlayInfos(videoInfos);
		setLoad(true);
	}

	const handleSeekingTime = time => setNewTimePlayer(time);

	const handleVolumeChange = time => props.changeVolume(time);

	const handleMouseLeave = () =>
		playerState.isPlaying && setShowVideoTool(false);

	const handleMouseMove = () => {
		setShowVideoTool(true);
		window.clearTimeout(timeoutDisplayVideoTool)
		return timeoutDisplayVideoTool(playerState.isPlaying)
	};
	
	const timeoutDisplayVideoTool = isPlaying => isPlaying && setTimeout(() => setShowVideoTool(false), 5000);
	
	
	const handleFullScreen = () => {
		if (playerRef.current) {
			if (playerState.isFullScreen) {
				if (document.fullscreenElement !== null) document.exitFullscreen();
			} else {
				playerRef.current.requestFullscreen();
			}
		}
		return props.toggleFullScreen(playerState.isFullScreen);
	};

	useEffect(() => {
		if(timePlayer === videoInPlayInfos.duration) handlePlayPause();
	}, [handlePlayPause, playerState.isPlaying, props, timePlayer, videoInPlayInfos.duration])

	return (
		<div
			className={`video_player_container ${isShowedVideoTool ? 'pointerShowed' : ''}`}
			ref={playerRef}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}>

			<VideoInPlay
				src={currentVideoState.videoPlaying.url}
				clickEvent={handlePlayPause}
				playPause={playerState.isPlaying}
				timeEvent={handleTimeVideoProgress}
				loadedVideoEvent={handleVideoInformations}
				timePosition={timePlayer}
				newTimePosition={newTimePlayer}
				fullScreenState={currentVideoState.fullScreen}
				volumeChange={playerState.volume}
				/>
			
			{isLoaded && <VideoTools
				playPause={playerState.isPlaying}
				playPauseEvent={handlePlayPause}
				currentTime={timePlayer}
				seekBarMax={videoInPlayInfos.duration}
				seekingBarEvent={handleSeekingTime}
				volumeChangeEvent={handleVolumeChange}
				volume={playerState.volume}
				fullScreenEvent={handleFullScreen}
				isFullscreen={playerState.isFullScreen}
				isShowed={isShowedVideoTool}
				/>}

			{isLoaded && <ListVideosPurpose
				videosList={currentVideoState.videosRelated}
				videoSelectedEvent={handleRelatedVideoSelect}
				isShowed={!playerState.isPlaying}
				/>}

		</div>
	);
}

const mapStateToProps = state => ({
	playerState: state.playerReducer,
	currentVideoState: state.currentVideoReducer
});

const mapDispatchToProps = {
	changeCurrentVideo,
	playVideo,
	changeVolume,
	toggleFullScreen
};

VideoPlayer.propTypes = {
	playerState: PropTypes.object.isRequired,
	currentVideoState: PropTypes.object.isRequired,

	changeCurrentVideo: PropTypes.func.isRequired,
	playVideo: PropTypes.func.isRequired,
	changeVolume: PropTypes.func.isRequired,
	toggleFullScreen: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
