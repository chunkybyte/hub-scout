import React from 'react';
import $ from 'jquery';
import IssueComment from './IssueComment';
import AddComment from './AddComment';

class IssueDescriptionComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        const {gituser, gitrepo, issueId} = this.props.params;
        fetch(`https://api.github.com/repos/${gituser}/${gitrepo}/issues/${issueId}/comments`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    comments: res
                });
                console.log(res);
        });

        $('[data-toggle="popover"]').popover({
            html: true
        });
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <IssueComment data={comment} key={comment.id}/>)}
                <AddComment />
            </div>
        );
    }
}

export default IssueDescriptionComment;