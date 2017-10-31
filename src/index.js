import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
unregister();
