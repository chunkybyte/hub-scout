import { ADD_GIT_INFO, INIT_ISSUES, OPEN_ISSUES_COUNT } from './action-types';

export const addGitInfo = gitHubInfoData => ({
    type: ADD_GIT_INFO,
    payload: gitHubInfoData
});

export const initIssues = issueList => ({
    type: INIT_ISSUES,
    payload: issueList
});

export const openIssuesCount = count => ({
    type: OPEN_ISSUES_COUNT,
    payload: count
});