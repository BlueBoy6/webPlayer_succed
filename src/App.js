import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/reducers/index';
import VideoPlayer from './components/organisms/videoPlayer/videoPlayer';

import './style/globalStyle.scss';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<VideoPlayer />
			</div>
		</Provider>
	);
}

export default App;
