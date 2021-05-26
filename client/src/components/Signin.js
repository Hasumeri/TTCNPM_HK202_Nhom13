import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Signin extends Component {
    render() {
        return (
            <div className="content">
                <form className="container" name="signin"> 
                    <div className="form-group border-bottom">
                        <h2 className="text-center">Sign In</h2>    
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="a@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="*********" required />
                    </div>
                    <br />
                                     
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    </div>
                    
                    <div className="form-group">
                        <Link to="/forgotpassword">Forgot your password?</Link>
                        <Link to="/" className="float-right">Create new account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;