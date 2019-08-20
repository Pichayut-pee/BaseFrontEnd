import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router";


class LeftNav extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <nav className="leftnav-main">
                <p className="leftnav-firstsubmain">Search & Request Catalog</p>
                <ul className="dashed">
                    <li><Link to="/catalogList" style={{color:'black'}}>Catalog List</Link></li>
                    <li><Link to="/createNewCatalog" style={{color:'black'}}>Create New Catalog</Link></li>
                    <li><Link to="/uploadCatalog" style={{color:'black'}}>Upload Catalog</Link></li>
                    <li><Link to="/uploadNewPicture" style={{color:'black'}}>Upload New Picture</Link></li>
                </ul>
                <p className="leftnav-submain">Approve</p>
                <ul className="dashed">
                    <li><a href="#" style={{color:'black'}}>Approve Status (0)</a></li>
                </ul>
                <p className="leftnav-submain">Check Status</p>
                <ul className="dashed">
                    <li><a href="#" style={{color:'black'}}>Create & Edit Catalog</a></li>
                    <li><Link to="/checkUploadCatalog" style={{color:'black'}}>Upload Catalog</Link></li>
                </ul>
            </nav>
        )
    }
}

export default LeftNav;
