import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const initialState = {
    data: []
};

const store = createStore(rootReducer, initialState);

export default store;