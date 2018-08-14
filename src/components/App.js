import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <h2>Hub Scout Welcomes You!</h2>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;