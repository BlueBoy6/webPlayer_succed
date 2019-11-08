import React, { useState } from 'react';
import BtnPicto from '../../atoms/btnPicto/btnPicto';

export default function VideoTools({
	play,
	pause,
	forward,
	rewind,
	fullscreen
}) {
	const [playState, setPlayState] = useState(false);

	// handle play
	const playVideo = () => setPlayState(!playState);

	// handle forward event
	const advanceVideo = () => forward();
	// handle turn back event
	const rewindVideo = () => rewind();
	// handle fullscreen event
	const fullScreenVideo = () => fullscreen();

	// toggler of name and picto of button
	const playerLabel = playerstate => (playerstate ? 'pause' : 'play');

	return (
		<div className='tool_bar_video_container'>
			<div className='tool_bar_video'>
				<div className='left_container'>
					<BtnPicto
						pictoName='rewind'
						clickCallBack={rewindVideo}
						label='turn back video'
					/>
					<BtnPicto
						pictoName={playerLabel(playState)}
						clickCallBack={playVideo}
						label={`${playerLabel(playState)} video`}
					/>
					<BtnPicto
						pictoName='forward'
						clickCallBack={advanceVideo}
						label='play video'
					/>
				</div>
				<div className='right_container'>
					<BtnPicto
						pictoName='fullscreen'
						clickCallBack={fullScreenVideo}
						label='fullscreen'
					/>
				</div>
			</div>
		</div>
	);
}
