import React from 'react';
import { Link } from 'react-router-dom';

class IssueItem extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="issueItem">
                <div className="issueItemTitle">
                    {
                        data.state === 'open' ? 
                            <i className="fa fa-bug greenBug"></i> : 
                            <i className="fa fa-check-square-o"></i>
                    }
                </div>
                <div className="issueItemDesc">
                    <div className="txtPrimary">
                        <Link to={`${this.props.gitrepo}/issues/${data.number}`}>
                            <strong>{data.title}</strong>
                        </Link>
                    </div>
                    <div className="txtTertiary">
                        #{data.number} opened at {this.props.dateFormatter(data.created_at)} by <a href={data.user.html_url}>{data.user.login}</a>
                    </div>
                </div>
                {
                    data.comments === 0 
                    ? 
                    '' 
                    : 
                    <div className="issueItemComments txtSecondary">
                        <i className="fa fa-comments-o"></i> {data.comments}
                    </div>
                }
            </div>
        );
    }
};

export default IssueItem;