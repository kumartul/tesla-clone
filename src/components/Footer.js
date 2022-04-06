import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import '../style/Footer.css';

const Footer = ({ mainLinksOnly }) => {
    return (
        <div className="footer">
            <div className="footer__links">
                <Link to='/about'>Tesla &copy; 2022</Link>
                <Link to='/legal'>Privacy &amp; Legal</Link>
                {!mainLinksOnly && <Link to='/vin-recall-search'>Vehicle Recalls</Link>}
                <Link to='/contact'>Contact</Link>
                {
                    !mainLinksOnly && (
                        <>
                            <Link to='/careers'>Careers</Link>
                            <Link to='/blog'>News</Link>
                            <Link to='/engage'>Engage</Link>
                            <Link to='/findus/list'>Location</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
}

Footer.defaultProps = {
    mainLinksOnly: false
}

Footer.propTypes = {
    mainLinksOnly: PropTypes.bool
}

export default Footer;