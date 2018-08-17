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

    // componentDidMount () {
    //     fetch('https://api.github.com/repos/chunkybyte/dummy-repo')
    //         .then(res => res.json())
    //         .then(res => {
    //            console.log('data here');
    //            console.log(res); 
    //            this.setState({
    //                data: res
    //            });
    //         });
    // }

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