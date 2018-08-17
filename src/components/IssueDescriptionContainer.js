import React from 'react';
import IssueDescriptionComment from './IssueDescriptionComment';
import SubHeader from './SubHeader';
import dateFormatter from '../js/dateFormatter';

class IssueDescriptionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                user: {

                }
            }
        }
    }

    componentDidMount() {
        const {gituser, gitrepo, issueId} = this.props.match.params;
        fetch(`https://api.github.com/repos/${gituser}/${gitrepo}/issues/${issueId}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                });
        });
    }

    render() {
        const data = this.state.data;
        return (
            <React.Fragment>
                <SubHeader gituser={this.props.match.params.gituser} gitrepo={this.props.match.params.gitrepo} />
                <main className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10">
                            <div className="issueDescriptionContainer">
                                <div className="issueDescritionHeader">
                                    <h4>
                                        <span>{data.title} </span> 
                                        <span style={{color: "#999999"}}>#{data.number}</span>
                                    </h4>
                                    <div>
                                        <button className="btn btn-success txtSecondary">
                                            <i className="fa fa-warning"></i> {data.state}
                                        </button>
                                        <span style={{paddingLeft: "10px", color: "#666666"}} className="txtSecondary">
                                            <a href={data.user.html_url}><strong>{data.user.login}</strong></a> opened this issue on {dateFormatter(data.created_at)} &middot; {data.comments} comment 
                                        </span>
                                    </div>
                                </div>
                                <IssueDescriptionComment params={this.props.match.params} />
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default IssueDescriptionContainer;