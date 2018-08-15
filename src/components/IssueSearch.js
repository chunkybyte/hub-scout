import React from 'react';

const IssueSearch = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-sm-10" style={{padding: "0px"}}>
                <div className="searchBar">
                    <div className="input-group mb-3 searchField">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <strong>Filters</strong>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Open Issues</a>
                                <a className="dropdown-item" href="#">Your Issues</a>
                                <a className="dropdown-item" href="#">Everything assigned to you</a>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Search Issues"  placeholder="is:issue is:open" />
                    </div>
                    <div>
                        <button className="btn btn-success txtSecondary">
                            New Issue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IssueSearch;