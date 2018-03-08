import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Datum from './Datum';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Datum />, document.getElementById('head'));
registerServiceWorker();
