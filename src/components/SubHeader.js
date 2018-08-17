import React from 'react';
import { Link } from 'react-router-dom';

const SubHeader = (props) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center secondaryHeader">
                <div className="col-sm-8">
                    <i className="fa fa-archive"></i> {props.gituser} / <strong>{props.gitrepo}</strong>
                </div>
            </div>
            <div className="row justify-content-center secondaryHeaderNav">
                <div className="col-sm-7">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to={`/${props.gituser}/${props.gitrepo}`}>
                            <button className="btn nav-link active">
                                <i className="fa fa-warning"></i> Issues
                            </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;