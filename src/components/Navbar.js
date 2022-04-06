import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import teslaLogo from '../images/tesla-logo.svg';

import '../style/Navbar.css';

const Navbar = ({ logoOnly }) => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to='/'>
                    <img src={teslaLogo} alt="Tesla Logo" />
                </Link>
            </div>

            {
                !logoOnly && (
                    <>
                        <div className="navbar__center">
                            <Link to="/model-s" className="navbar__link">Model S</Link>    
                            <Link to="/model-3" className="navbar__link">Model 3</Link>    
                            <Link to="/model-x" className="navbar__link">Model X</Link>    
                            <Link to="/model-y" className="navbar__link">Model Y</Link>    
                            <Link to="/solar-roof" className="navbar__link">Solar Roof</Link>    
                            <Link to="/solar-panels" className="navbar__link">Solar Panels</Link>
                        </div>
                        
                        <div className="navbar__right">
                            <Link to="/shop" className="navbar__link">Shop</Link>
                            <Link to="/account" className="navbar__link">Account</Link>
                            <Link to="#" className="navbar__link">Menu</Link>
                        </div>
                    </>
                )
            }

        </div>
    );
}

Navbar.defaultProps = {
    logoOnly: false
}

Navbar.propTypes = {
    logoOnly: PropTypes.bool
}

export default Navbar;