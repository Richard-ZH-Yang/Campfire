import React from 'react';
import {Link} from "react-router-dom";

function LeftContent(props) {
    return (
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">FOLKLORE</h1>
            <p className="lead">
                A place to share your thoughts
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <Link to = '/add'>
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add</button>
                </Link>
                <Link to = '/search'>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Search</button>
                </Link>
            </div>
        </div>
    );
}

export default LeftContent;