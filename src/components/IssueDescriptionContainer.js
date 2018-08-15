import React from 'react';
import IssueDescriptionComment from './IssueDescriptionComment';

class IssueDescriptionContainer extends React.Component {
    render() {
        return (
            <main className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <div className="issueDescriptionContainer">
                            <div className="issueDescritionHeader">
                                <h4>
                                    <span>sometime some issue showed up I don't know </span> 
                                    <span style={{color: "#999999"}}>#875</span>
                                </h4>
                                <div>
                                    <button className="btn btn-success txtSecondary">
                                        <i className="fa fa-warning"></i> Open
                                    </button>
                                    <span style={{paddingLeft: "10px", color: "#666666"}} className="txtSecondary">
                                        <strong>chunkybyte</strong> opened this issue on Aug 14 &middot; 1 comment 
                                    </span>
                                </div>
                            </div>
                            <IssueDescriptionComment />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default IssueDescriptionContainer;