import React from 'react';
import ReactDOM from 'react-dom';

// jQuery and Popper required dependencies for Bootstrap JS 
import 'jquery/dist/jquery'; 
import 'popper.js/dist/esm/popper';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));