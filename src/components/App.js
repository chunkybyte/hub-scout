import React from 'react';
import Header from './Header';
import Router from './Router';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Router />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;