import React from 'react';
import { Link } from 'react-router-dom';

class IssueItem extends React.Component {
    render() {
        const data = this.props.data;
        console.log('here', this.props.data);
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
                        <strong>{data.title}</strong>
                    </div>
                    <div className="txtTertiary">
                        #{data.number} opened 22 hours ago by <a href={data.user.html_url}>{data.user.login}</a>
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