import React from 'react';
import Header from './Header';
import Router from './Router';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

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