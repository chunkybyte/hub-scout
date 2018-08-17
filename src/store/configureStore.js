import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const initialState = {
    data: null
};

const store = createStore(rootReducer, initialState);

export default store;