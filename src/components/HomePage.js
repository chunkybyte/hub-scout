import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exists: true
        }
    }
    
    usernameRef = React.createRef();
    repoRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        const userName = this.usernameRef.current.value;
        const repoName = this.repoRef.current.value;
        fetch(`https://api.github.com/repos/${userName}/${repoName}`)
            .then(res => res.json())
            .then(res => {
                if (res.message === "Not Found") {
                    console.log(`The github repository "${userName}/${repoName}" doesn't exist.`);
                    this.setState({
                        exists: false
                    });
                } else {
                    this.props.history.push(`/${userName}/${repoName}`);         
                }
        });
    }

    render() {
        return (
            <main className="container homepageContainer">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <form className="gitDetailsForm" onSubmit={(e) => {this.handleSubmit(e);}} >
                            {this.state.exists ? 
                                '' : 
                                <h4 className="text-center" style={{color: 'red'}}>The github repository doesn't exists.</h4>}
                            <h3 className="text-center">Enter Repository Details</h3><br/>
                            <div className="form-group">
                                <label htmlFor="text">GitHub Username : </label>
                                <input type="text" className="form-control" ref={this.usernameRef} id="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="text">Repository Name : </label>
                                <input type="text" className="form-control" ref={this.repoRef} id="text" />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

export default HomePage;