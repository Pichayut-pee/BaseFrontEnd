import React, { Component } from 'react';

class TopNav extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-main" style={{color:'white'}}>
                <div className="collapse navbar-collapse justify-content-md-center" >
                    <ul className="navbar-nav nav-font">
                        <li className="nav-item nav-padding">
                            <a className="nav-link" href="#" style={{color:'white'}}>HOME</a>
                        </li>
                        <li className="nav-item nav-padding">
                            <a className="nav-link" href="#" style={{color:'white'}}>HELP</a>
                        </li>
                        <li className="nav-item nav-padding">
                            <a className="nav-link" href="#" style={{color:'white'}}>LOGOFF</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TopNav;
