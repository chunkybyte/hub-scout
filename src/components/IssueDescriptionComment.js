import React from 'react';
import $ from 'jquery';

class IssueDescriptionComment extends React.Component {
    constructor(props) {
        super(props);
        this.popoverRef = React.createRef();
    }

    componentDidMount() {
        $('[data-toggle="popover"]').popover({
            html: true
        });
    }

    render() {
        const popoverContent = `<span><a href='#'>Upvote</a></span> <span><a href='#'>Downvote</a></span>`;

        return (
            <div className="issueCommentWrapper">
                <div>
                    <img src="https://dummyimage.com/50x50/ccc/000" alt="Github User"/>
                </div>
                <div className="issueCommentBody">
                    <div className="issueCommentBodyHead txtTertiary">
                        <p>
                            <strong>chunkybyte</strong> commented on Aug 14
                        </p>
                        <button ref={this.popoverRef} 
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
                            Lorem Ipsum Thing Thing This Thing That Thing Here There Everywhere
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueDescriptionComment;