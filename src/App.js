import React from 'react';
import { store } from './store/reducers/index';
import VideoPlayer from './components/organisms/videoPlayer/videoPlayer';

import './style/globalStyle.scss';

function App() {
	return (
		<div className='App'>
			<VideoPlayer store={store} />
		</div>
	);
}

export default App;
