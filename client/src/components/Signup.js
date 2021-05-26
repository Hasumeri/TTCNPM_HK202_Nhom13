import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
        }
        this.renderNotice = this.renderNotice.bind(this);
    }
    handleChange = (event)=> {
        console.log("name " + this.state.name);    
        this.setState({
            name: event.target.value
        })
        
    }
    renderNotice = () => {   
        // console.log("jjjj");    
         if(this.state.name.length < 5) {
            return <small className="text-danger">length be hon 5</small>
        };
    }
    render() {
        return (
            <div className="content">
                <form className="container" name="registration">
                    <div className="form-group border-bottom">
                        <h1 className="text-center">Sign Up</h1>    
                    </div><br />
                    <div className="form-group row">
                    <div className="col">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" onChange={this.handleChange} className="form-control" id="fname" placeholder="First Name" name="fname" required />                      
                    </div>
                    <div className="col">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" className="form-control" id="lname" placeholder="Last Name" name="lname" required />
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="a@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="*********" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpassword">Confirm Passwod:</label>
                        <input type="password" className="form-control" id="confirmpassword" placeholder="*********" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bdate">Birthday:</label>
                        <input type="date" className="form-control" id="bdate" defaultValue="1998-05-23" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label><br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="option1" />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="another" defaultValue="option3" />
                        <label className="form-check-label" htmlFor="another">Another</label>
                    </div>
                    </div>

                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                    </div>
                    
                    <br />
                    <div className="form-group">
                        Have already an account? <Link to="/signin">Sign In</Link>
                        
                    </div>   
                    
                </form>
            </div>
        );
    }
}

export default Signup;