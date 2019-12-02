import React, { useState, useRef } from 'react';
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
	const [isMouseMoving, setMouseMovingState] = useState(true);

	const { playerState } = props;
	const { currentVideoState } = props;

	const playPauseEvent = () => props.playVideo(!playerState.isPlaying);

	const handleRelatedVideoSelect = video => props.changeCurrentVideo(video);

	const handleTimeVideoProgress = time => setTimePlayer(time);

	const handleVideoInformations = videoInfos =>
		setVideoInPlayInfos(videoInfos);

	const handleSeekingTime = time => setNewTimePlayer(time);

	const handleVolumeChange = time => props.changeVolume(time);

	const handleMouseLeave = () =>
		playerState.isPlaying && setShowVideoTool(false);

	const handleMouseMove = () => {
		setShowVideoTool(true);
		!isMouseMoving && setTimeout(() => setShowVideoTool(false), 300);
	};

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

	return (
		<div
			className='video_player_container'
			ref={playerRef}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}>
			<VideoInPlay
				src={currentVideoState.videoPlaying.url}
				clickEvent={playPauseEvent}
				playPause={playerState.isPlaying}
				timeEvent={handleTimeVideoProgress}
				loadedVideoEvent={handleVideoInformations}
				timePosition={timePlayer}
				newTimePosition={newTimePlayer}
				fullScreenState={currentVideoState.fullScreen}
				volumeChange={playerState.volume}
			/>
			{}
			<VideoTools
				playPause={playerState.isPlaying}
				playPauseEvent={playPauseEvent}
				currentTime={timePlayer}
				seekBarMax={videoInPlayInfos.duration}
				seekingBarEvent={handleSeekingTime}
				volumeChangeEvent={handleVolumeChange}
				fullScreenEvent={handleFullScreen}
				isFullscreen={playerState.isFullScreen}
				isShowed={isShowedVideoTool}
			/>
			<ListVideosPurpose
				videosList={currentVideoState.videosRelated}
				videoSelectedEvent={handleRelatedVideoSelect}
				show={!playerState.isPlaying}
			/>
		</div>
	);
}

const mapStateToProps = state => ({
	playerState: state.playerState,
	currentVideoState: state.currentVideoState
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
