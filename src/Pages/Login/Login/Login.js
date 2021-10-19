import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { error, handleResetPassword, handleNameChange, handleEmailChange, handlePasswordChange, handleRegister, toggleLogIn, isLogin, signInUsingGoogle } = useAuth();
    return (
        <div className="my-5 py-5 container">
            <form onSubmit={handleRegister}>
                <h2 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h2>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input onBlur={handleNameChange} type="Name" className="form-control" id="inputName" placeholder="Your Name" required />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder=" Email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-8 offset-sm-2">
                        <div className="form-check">
                            <input onClick={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
                <button onClick={handleResetPassword} type="button" className="ms-3 btn btn-secondary btn-sm">Reset Password</button>
            </form>
            <br />
            <h5>Or</h5>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign in</button>
        </div>
    );
};

export default Login;