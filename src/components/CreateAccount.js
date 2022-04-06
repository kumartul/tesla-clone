import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

import { auth } from '../firebase';

import '../style/CreateAccount.css';

const CreateAccount = () => {
    document.title = 'Tesla SSO - Register';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if(authUser) {
                dispatch(login({
                    displayName: authUser.displayName,
                    email: authUser.email
                }));

                navigate('/account');
            }
        })
    }, []);

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = event => {
        setLastName(event.target.value);
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: `${firstName} ${lastName}`,
                email
            })
            .then(() => {
                dispatch(login({
                    displayName: authUser.user.displayName,
                    email: authUser.user.email
                }));

                navigate('/account');
            })
        })
        .catch(error => {
            alert(error);
        })
    }

    return (
        <div className="createAccount">
            <Navbar logoOnly />

            <div className="container">
                <form className="form-group" onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    
                    <label htmlFor="firstName">First Name</label>
                    <input value={firstName} onChange={handleFirstNameChange} type="text" name="firstName" id="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <input value={lastName} onChange={handleLastNameChange} type="text" name="lastName" id="lastName" />

                    <label htmlFor="email">Email Address</label>
                    <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" />

                    <button type="submit">Create Account</button>
                </form>
                <span className="line-break">
                    Or
                </span>
                <Link to='/signin'>
                    <button>Sign In</button>
                </Link>
            </div>
            <Footer mainLinksOnly />
        </div>
    );
}

export default CreateAccount;