import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleLogo from '../../images/gLogo.png';

const Signup = () => {
    const { tours, signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            alert('Password Must be at least 6 char');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePassChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div className="container py-4">
            <h3 className="text-center">Please Register</h3>
            <form className="w-50 mx-auto pt-4" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="emailInput" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="emailInput" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="passwordInput" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassChange} type="password" className="form-control" id="passwordInput" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className="text-center pt-5">
                <div>
                    <button className="btn btn-info" onClick={signInUsingGoogle}>
                        <img className="w-25" src={googleLogo} alt="googleLogo" />
                        Sign Up With Google
                    </button>

                </div>
                <br />
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;