import React, { useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar/Sidebar';
import Field from './Field';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';

import { auth } from '../firebase';
 
import '../style/Account.css';

const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if(authUser) {
                dispatch(login({
                    displayName: authUser.displayName,
                    email: authUser.email
                }));
            }
            else {
                dispatch(logout());

                navigate('/signin');
            }
        })
    }, []);

    return (
        <div className="account">
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="content">
                    <h2>Profile Settings</h2>

                    <div className="fields">
                        <Field title='Full Name' value={user?.displayName} btn='Edit' />
                        <Field title='Address' value={user?.address} btn='Edit' />
                        <Field title='Phone Number' value={user?.phoneNumber} btn='Edit' />
                        <Field title='Email' value={user?.email} btn='Edit' />
                        <Field title='Password' value='*******' btn='Reset' />
                        <Field title='Multi-factor Authentication' value='Add an additional layer of security to your account' btn='Manage' />
                    </div>
                    <Footer mainLinksOnly />
                </div>
            </div>
        </div>
    );
}

export default Account;