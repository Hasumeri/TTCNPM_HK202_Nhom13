import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class PasswordResetSuccess extends Component {
    render() {
        return (
            
        <div className="content ct-success">
            <form className="container form-signup-success" name="signupsuccess"> 
                <div className="form-group border-bottom">
                    <h2 className="text-center">Password Reset Successfully!</h2>    
                </div>

                <div className="form-group">
                    <h5 className="text-success">Congratulations! Your password has been reset successfully.</h5>
                    <center><Link to="/signin">Click here</Link> to Log In.</center>
                </div>
               
            </form>
        </div>
        );
    }
}

export default PasswordResetSuccess;