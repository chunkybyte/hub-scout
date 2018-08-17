import { ADD_COMMENT, ADD_GITHUB_INFO } from './action-types';

export const addComment = commentData => ({
    type: ADD_COMMENT,
    payload: commentData
});

export const addGitHubInfo = gitHubInfoData => ({
    type: ADD_GITHUB_INFO,
    payload: gitHubInfoData
});

