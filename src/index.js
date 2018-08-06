import React from 'react';
import ReactDOM from 'react-dom';

import './css/master/index.css';
import App from './components/app.js';

import registerServiceWorker from './registerServiceWorker';


console.log('React Version is:', React.version)
ReactDOM.render(
<App />, 
document.getElementById('root'));
registerServiceWorker();
