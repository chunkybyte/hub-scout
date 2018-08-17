import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';

// Bootstrap Dependencies I hate to import : jQuery and Popper 
import 'jquery/dist/jquery'; 
import 'popper.js/dist/esm/popper';

// Bootstrap Files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Stylesheet
import './css/index.css';

import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);