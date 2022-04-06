import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';

import { auth } from '../../firebase';

import '../../style/Sidebar/SidebarItem.css';

const SidebarItem = ({ href, signOutLink, icon, title }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(logout());

            navigate('/');
        })
    }

    if(signOutLink) {
        return (
            <div className="sidebarItem" onClick={signOut}>
                <img src={icon} alt={title} />
                <h3>{title}</h3>
            </div>
        );
    }
    return (
        <Link to={href} className="sidebarItem">
            <img src={icon} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
}

SidebarItem.propTypes = {
    href: PropTypes.string,
    signOutLink: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default SidebarItem;