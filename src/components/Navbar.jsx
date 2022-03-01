import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
    
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${props.txtColor}`} to="/">{ props.title }</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.txtColor}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${props.txtColor}`} to="/about">{ props.about }</Link>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-success mx-1" onClick={props.changeMode}>Emerald</button>
                    <button type="button" className="btn btn-danger mx-1" onClick={props.changeMode}>Crimson</button>
                    <button type="button" className="btn btn-warning mx-1" onClick={props.changeMode}>Sun</button>
                    <button type="button" className="btn btn-light mx-1" onClick={props.changeMode}>Light</button>
                    <button type="button" className="btn btn-dark mx-1" onClick={props.changeMode}>Dark</button>
                </div>
            </nav>
        </>
    );

}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    about: "About"
}