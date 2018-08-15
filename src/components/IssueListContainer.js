import React from 'react';
import IssueSearch from './IssueSearch';
import IssueList from './IssueList';

class IssueListContainer extends React.Component {
    render() {
        return (
            <main className="container issueListContainer">
                <IssueSearch />
                <IssueList />
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <nav className="issueListPagination">
                            <ul class="pagination justify-content-center pagination-sm">
                                <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </main>
        );
    }
}

export default IssueListContainer;