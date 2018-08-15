import React from 'react';

const IssueItem = () => {
    return (
        <div className="issueItem">
            <div className="issueItemTitle">
                <i className="fa fa-bug greenBug"></i>
            </div>
            <div className="issueItemDesc">
                <div className="txtPrimary">
                    <strong>sometime some issue showed up I don't know</strong>
                </div>
                <div className="txtTertiary">
                    #1890 opened 22 hours ago by chunkybyte
                </div>
            </div>
            <div className="issueItemComments txtSecondary">
                <i className="fa fa-comments-o"></i> 6
            </div>
        </div>
    );
};

export default IssueItem;