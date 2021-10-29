import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleLogo from '../../images/gLogo.png';

const Login = () => {
    const { tours, signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePassChange = e => {
        console.log(email, password);
        setPassword(e.target.value);
    }
    return (
        <div className="container py-4">
            <h3 className="text-center">Please Login</h3>
            {/* Login Form */}
            <form className="w-50 mx-auto pt-4" onSubmit={handleLogin}>
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

                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
            <div className="text-center pt-5">
                <div>
                    <button className="btn btn-info" onClick={signInUsingGoogle}>
                        <img className="w-25" src={googleLogo} alt="googleLogo" />
                        Login With Google
                    </button>

                </div>
                <br />
                <p>New Customer? <Link to="/signup">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;