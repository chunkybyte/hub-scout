import React from 'react';
import IssueSearch from './IssueSearch';
import IssueList from './IssueList';
import SubHeader from './SubHeader';

class IssueListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitHubInfo: {
                username: this.props.match.params.gituser,
                reponame: this.props.match.params.gitrepo
            },
            issuesList: []
        };
    }

    componentDidMount() {
        fetch(`https://api.github.com/repos/${this.state.gitHubInfo.username}/${this.state.gitHubInfo.reponame}/issues`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    issuesList: res
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <SubHeader gitHubInfo={this.state.gitHubInfo} />

                <main className="container issueListContainer">
                    <IssueSearch />
                    <IssueList issuesList={this.state.issuesList} />
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <nav className="issueListPagination">
                                <ul className="pagination justify-content-center pagination-sm">
                                    <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default IssueListContainer;