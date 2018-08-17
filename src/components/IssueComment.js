import React from 'react';
import dateFormatter from '../js/dateFormatter';

class IssueComment extends React.Component {
    render() {
        const popoverContent = `<span><a href='#'>Upvote</a></span><br/><span><a href='#'>Downvote</a></span>`;
        const data = this.props.data;
        return(    
            <div className="issueCommentWrapper">
                <div>
                    <img src={data.user.avatar_url} alt={data.user.login} style={{width: '50px'}}/>
                </div>
                <div className="issueCommentBody">
                    <div className="issueCommentBodyHead txtTertiary">
                        <p>
                            <strong>{data.user.login}</strong> commented on {dateFormatter(data.created_at)}
                        </p>
                        <button
                            type="button" className="btn btn-link" 
                            data-container="body" 
                            data-toggle="popover" 
                            data-placement="left" 
                            title="Pick your reaction" 
                            data-content={popoverContent}>
                            <i className="fa fa-smile-o"></i>
                        </button>
                    </div>
                    <div className="issueCommentBodyDesc">
                        <p className="txtSecondary">
                            {data.body}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueComment;