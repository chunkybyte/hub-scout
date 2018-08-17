import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IssueListContainer from './IssueListContainer';
import IssueDescriptionContainer from './IssueDescriptionContainer';
import HomePage from './HomePage';
import NotFound from './NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/:gituser/:gitrepo" component={IssueListContainer} />
                <Route exact path="/:gituser/:gitrepo/issues/:issueId" component={IssueDescriptionContainer} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;