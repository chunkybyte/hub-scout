import React from 'react';

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-sm mainHeader text-center">
                    <h5>
                        <i className="fa fa-github-alt"></i> HubTracker
                    </h5>
                </div>
            </div>
            <div className="row justify-content-center secondaryHeader">
                <div className="col-sm-8">
                    <i className="fa fa-archive"></i> username / <strong>repoName</strong>
                </div>
            </div>
            <div className="row justify-content-center secondaryHeaderNav">
                <div className="col-sm-7">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="?" className="nav-link active">
                                <i className="fa fa-warning"></i> Issues <span className="issueCount">30</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;