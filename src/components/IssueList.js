import React from 'react';
import IssueItem from './IssueItem';

class IssueList extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-10 listWrapper">
                    <div className="issueListInfoBar txtSecondary">
                        <div>
                            <strong style={{paddingRight: '10px'}}><i className="fa fa-warning"></i> 15 Open</strong>
                            <span><i className="fa fa-check"></i> 100 Closed</span>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-link dropdown-toggle txtSecondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort
                            </button>
                            <div className="dropdown-menu dropdown-menu-right txtSecondary">
                                <a className="dropdown-item" href="#">Newest</a>
                                <a className="dropdown-item" href="#">Oldest</a>
                                <a className="dropdown-item" href="#">Most Commented</a>
                                <a className="dropdown-item" href="#">Least Commented</a>
                                <a className="dropdown-item" href="#">Recently Updated</a>
                            </div>
                        </div>
                    </div>
                    <div className="issueItemsList">
                        {this.props.issuesListData === [] ? 
                            <div className="text-center">Loading...</div> : 
                            this.props.issuesListData.map(issueData => <IssueItem key={issueData.id} data={issueData} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueList;