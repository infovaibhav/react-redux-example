import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPanel from './MainPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainPanel />, document.getElementById('root'));
registerServiceWorker();
