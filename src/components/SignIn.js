import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

import { auth } from '../firebase';

import '../style/SignIn.css';

const SignIn = () => {
    document.title = 'Tesla SSO - Login';

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

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const signIn = event => {
        event.preventDefault();

        setEmail('');
        setPassword('');

        auth.signInWithEmailAndPassword(email, password)
        .then(authUser => {
            dispatch(login({
                displayName: authUser.user.displayName,
                email: authUser.user.email
            }));

            navigate('/account');
        })
        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="signIn">
            <Navbar logoOnly />

            <div className="container">
                <form className="form-group" onSubmit={signIn}>
                    <h2>Sign In</h2>
                    
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />

                    <button type="submit">Sign In</button>

                    <div className="otherLinks">
                        <p>
                            <span>Forgot email?</span>
                            <span className="divider">|</span>
                            <span>Forgot password?</span>
                        </p>
                    </div>
                </form>
                <span className="line-break">
                    Or
                </span>
                <Link to='/createAccount'>
                    <button>Create Account</button>
                </Link>
            </div>
            <Footer mainLinksOnly />
        </div>
    );
}

export default SignIn;