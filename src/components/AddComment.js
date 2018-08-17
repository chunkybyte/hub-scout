import React from 'react';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.commentRef = React.createRef();
    }

    addComment = (e) => {
        e.preventDefault();
        const body = this.commentRef.current.value;
        const today = new Date();

        const newCommentData = {
            "user": {
                "user.avatar_url": "https://dummyimage.com/50x50/cccccc/000000&text=U",
                "login": "https://github.com/chunkybyte"
            }, 
            "created_at": "",
            "body": body
        };
    }

    render() {
        return(
            <form className="addCommentWrapper" onSubmit={this.addComment} >
                <div>
                    <img src="https://dummyimage.com/50x50/cccccc/000000&text=U" 
                        alt="You" style={{width: '50px'}}/>
                </div>
                <div className="addCommentBody">
                    <div className="textField">
                        <textarea ref={this.commentRef} placeholder="Enter Your Comment" />
                    </div>
                    <button type="submit" className="btn btn-success" style={{width: '100%', margin: '0px 10px'}}>
                        Comment
                    </button>
                </div>
            </form>
        );
    }
}

export default AddComment;