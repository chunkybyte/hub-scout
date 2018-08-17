import React from 'react';
import { connect } from 'react-redux';
import IssueSearch from './IssueSearch';
import IssueList from './IssueList';
import SubHeader from './SubHeader';
import LinkParser from 'parse-link-header';

import { addGitInfo, initIssues, openIssuesCount } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        data: state.data,
        gituser: state.gituser,
        gitrepo: state.gitrepo,
        open_issues_count: state.open_issues_count
    };
}

const mapDispatchToProps = (dispatch) => ({
    initIssues: issuesData => dispatch(initIssues(issuesData)),
    addGitInfo: gitInfo => dispatch(addGitInfo(gitInfo)),
    openIssuesCount: count => dispatch(openIssuesCount(count))
});

class IssueListContainer extends React.Component {
    constructor(props) {
        super(props);
        const pageQuery = this.props.location.search === "undefined" ? "?page=1" : this.props.location.search;
        this.state = {
            pageQuery,
            pagesInfo: {}
        };
        
        this.props.addGitInfo({
            gituser: this.props.match.params.gituser,
            gitrepo: this.props.match.params.gitrepo
        });
    }
    
    componentDidMount() {
        const { gituser, gitrepo } = this.props.match.params;
        fetch(`https://api.github.com/repos/${gituser}/${gitrepo}/issues${this.state.pageQuery}`)
        .then(res => {
            const linkHeaderData = res.headers.get('Link');
            const parsedLinkData = LinkParser(linkHeaderData);
            this.setState({
                pagesInfo: parsedLinkData
            });
            console.log(parsedLinkData);
            return res.json();
        })
        .then(res => {
            this.props.initIssues(res);
        });

        fetch(`https://api.github.com/repos/${this.props.match.params.gituser}/${this.props.match.params.gitrepo}`)
        .then(res => res.json())
        .then(res => {
            this.props.openIssuesCount(res.open_issues_count);
        });
    }

    getPagination = () => {
        const data = this.state.pagesInfo;
        let last, prev, next, current, prevButton, nextButton, currentButton;

        if (data['last']) {
            last = parseInt(data['last']['page']);
        } else {
            if (data['prev']) {
                last = parseInt(data['prev']['page']) + 1;
            } else {
                last = 1;
            }
        }

        if (data['prev']) {
            prev = parseInt(data['prev']['page'])
            current = prev + 1;
            prevButton = <li className="page-item"><a className="btn btn-link page-link" href={`/github/hub?page=${prev}`}> Previous </a></li>;
        } else {
            prevButton = <li className="page-item"><a disabled className="btn btn-link page-link"> Previous </a></li>;
        }

        if (data['next']) {
            next = parseInt(data['next']['page']);
            nextButton = <li className="page-item">
                <a className="btn btn-link page-link" href={`/github/hub?page=${next}`}> Next </a>
            </li>
            current = next - 1;
        } else {
            nextButton = <li className="page-item"><a disabled className="btn btn-link page-link"> Next </a></li>
        }

        currentButton = <li className="page-item active"><a className="page-link" href="#">{current} of {last}</a></li>;

        return [prevButton, nextButton, currentButton];
    }

    render() {
        const { gituser, gitrepo } = this.props.match.params;
        let [ prevButton, nextButton, currentButton ] = this.getPagination();

        return (
            <React.Fragment>
                <SubHeader gituser={this.props.gituser} gitrepo={this.props.gitrepo} />

                <main className="container issueListContainer">
                    <IssueSearch />
                    
                    <IssueList open_issues_count={this.props.open_issues_count} issuesListData={this.props.data}  gituser={this.props.gituser} gitrepo={this.props.gitrepo} />
                    
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <nav className="issueListPagination">
                                <ul className="pagination justify-content-center pagination-sm">
                                    {/* <li className="page-item">
                                        {
                                            prev === null 
                                            ? 
                                            <a className="page-link disabled" tabIndex="-1"> Previous </a>
                                            : 
                                            <a className="page-link" tabIndex="-1" href={`./${gitrepo}?pages=${prev}`}> Previous </a>
                                        }    
                                    </li>
                                    
                                    <li className="page-item active">
                                        <a className="page-link">
                                            {current} of {last} 
                                        </a>
                                    </li>

                                    <li className="page-item">
                                        {
                                            next === null 
                                            ? 
                                            <a className="page-link disabled" tabIndex="-1"> Next </a>
                                            : 
                                            <a className="page-link" tabIndex="-1" href={`./${gitrepo}?pages=${next}`}> Next </a>
                                        }
                                    </li> */}
                                    {prevButton}
                                    {currentButton}
                                    {nextButton}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueListContainer);