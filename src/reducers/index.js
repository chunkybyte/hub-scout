import { ADD_GIT_INFO, INIT_ISSUES, OPEN_ISSUES_COUNT } from '../actions/action-types';

const initialState = {
    data: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT_ISSUES:
            return { ...state, data: action.payload};
        case ADD_GIT_INFO:
            return { ...state, gituser: action.payload.gituser, gitrepo: action.payload.gitrepo };
        case OPEN_ISSUES_COUNT:
            return { ...state, open_issues_count: action.payload}            
        default:
            return state;
    }
};

export default rootReducer;