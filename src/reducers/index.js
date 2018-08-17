import { ADD_COMMENT, ADD_GITHUB_INFO } from '../actions/action-types';

const initialState = {
    data: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT: 
            return state;
        case ADD_GITHUB_INFO:
            return {...state, gitHubInfo: action.payload}
        default:
            return state;
    }
};

export default rootReducer;