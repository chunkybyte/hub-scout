import React from 'react';
import IssueItem from './IssueItem';
import dateFormatter from '../js/dateFormatter';

class IssueList extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-10 listWrapper">
                    <div className="issueListInfoBar txtSecondary">
                        <div>
                            <strong style={{paddingRight: '10px'}}>
                                <i className="fa fa-warning"></i> &nbsp;{this.props.open_issues_count} Open
                            </strong>
                            {/* <span><i className="fa fa-check"></i> 100 Closed</span> */}
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-link dropdown-toggle txtSecondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort
                            </button>
                            <div className="dropdown-menu dropdown-menu-right txtSecondary">
                                <a className="dropdown-item">Newest</a>
                                <a className="dropdown-item">Oldest</a>
                                <a className="dropdown-item">Most Commented</a>
                                <a className="dropdown-item">Least Commented</a>
                                <a className="dropdown-item">Recently Updated</a>
                            </div>
                        </div>
                    </div>
                    <div className="issueItemsList">
                        {this.props.issuesListData === [] ? 
                            <div className="text-center">Loading...</div> : 
                            this.props.issuesListData.map(issueData => <IssueItem key={issueData.id} data={issueData} dateFormatter={dateFormatter} gituser={this.props.gituser} gitrepo={this.props.gitrepo} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueList;