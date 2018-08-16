import React from 'react';

const SubHeader = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default SubHeader;