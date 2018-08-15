import React from 'react';
import Header from './Header';
import Footer from './Footer';
import IssueListContainer from './IssueListContainer';
import IssueDescriptionContainer from './IssueDescriptionContainer';

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                {/* <IssueListContainer /> */}
                <IssueDescriptionContainer />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;