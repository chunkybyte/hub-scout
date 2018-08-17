import React from 'react';

const SubHeader = (props) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center secondaryHeader">
                <div className="col-sm-8">
                    <i className="fa fa-archive"></i> {props.gitHubInfo.username} / <strong>{props.gitHubInfo.reponame}</strong>
                </div>
            </div>
            <div className="row justify-content-center secondaryHeaderNav">
                <div className="col-sm-7">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className="btn btn-link nav-link active">
                                <i className="fa fa-warning"></i> Issues <span className="issueCount">30</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;