import React from 'react';
import SubHeader from './SubHeader';

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-sm mainHeader text-center">
                    <h5>
                        <i className="fa fa-github-alt"></i> HubTracker
                    </h5>
                </div>
            </div>
            <SubHeader />
        </header>
    );
}

export default Header;