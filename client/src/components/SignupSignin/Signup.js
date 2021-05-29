import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { Redirect } from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
           fields: {},
           error: {},
           success:false,
        }
    }

    handleChange = (field, event) => { 
        let fields = this.state.fields;
        fields[field] = event.target.value;
        this.setState({
            fields
        })         
    }
    
    handleSubmit = (event) => {   
        event.preventDefault(); 
        let fields = this.state.fields;
        let error = {} ;
        

        //validate first name
        if(!fields['fname']) {
            error['fname'] = 'First Name is required.';
          
        }           
        
        //validate last name
        if(!fields['lname']) {
            error['lname'] = 'Last Name is required.';
            
        }            

        //validate email
        if(!fields['email']) {
            error['email'] = 'Email is required.';
           
        } 
        else if(!/\S+@\S+\.\S+/.test(fields['email'])){
            error['email'] = 'Email is invalid.';
            
        }
        /*else if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                error["email"] = "Email is not valid";
            }
        }*/

        //validate password
        if(!fields['password']) {
            error['password'] = 'Password is required.';
            
        } else if (fields['password'].length < 5) {
            error['password'] = "Password must be more than 5 characters.";
            
        }

        //validate confirmpassword
        if(!fields['confirmpassword']) {
            error['confirmpassword'] = 'Confirm Password is required.';
            
        } else if(fields['confirmpassword'] != fields['password']) {
            error['confirmpassword'] = 'Password do not match.';
            
        }

        //validate gender
        if(!fields['gender']){
            error['gender'] = 'Gender is required.';
           
        }
        if(!fields['birthday']){
            error['birthday'] = 'Birthday is required.';
            
        }
        this.setState({
            error:error,
        })

        // Sign up successfully
        if(Object.keys(error).length === 0) {
            //console.log(isOb); 
            this.setState({
                success:true
            })
        }
        
    }
    render() {
        
        if(this.state.success==true){
            return <Redirect to={"/signupsuccess"} />
        }
            
        return (
            <div className="content">
                <form className="form-sign container" name="registration"  >
                    <div className="form-group border-bottom">
                        <h1 className="text-center">Sign Up</h1>    
                    </div><br />
                    <div className="form-group row">
                    <div className="col">
                        <label htmlFor="fname">First Name:</label>
                        <input  onChange={this.handleChange.bind(this,'fname')} type="text" className="form-control" id="fname" placeholder="First Name" name="fname" />  
                        <small>{this.state.error['fname']}</small>
                    </div>
                    <div className="col">
                        <label htmlFor="lname">Last Name:</label>
                        <input onChange={this.handleChange.bind(this,'lname')} type="text" className="form-control" id="lname" placeholder="Last Name" name="lname" />
                        <small>{this.state.error['lname']}</small>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input onChange={this.handleChange.bind(this,'email')} type="text" className="form-control" id="email" placeholder="a@gmail.com" />
                        <small>{this.state.error['email']}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input onChange={this.handleChange.bind(this,'password')} type="password" className="form-control" id="password" placeholder="*********" />
                        <small>{this.state.error['password']}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpassword">Confirm Passwod:</label>
                        <input onChange={this.handleChange.bind(this,'confirmpassword')} type="password" className="form-control" id="confirmpassword" placeholder="*********" />
                        <small>{this.state.error['confirmpassword']}</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bdate">Birthday:</label>
                        <input onChange={this.handleChange.bind(this,'birthday')} type="date" className="form-control" id="bdate" />
                        <small>{this.state.error['birthday']}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label><br />
                    <div className="form-check form-check-inline">
                        <input onChange={this.handleChange.bind(this,'gender')} className="form-check-input" type="radio" name="gender" id="male" defaultValue="option1" />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={this.handleChange.bind(this,'gender')} className="form-check-input" type="radio" name="gender" id="female" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={this.handleChange.bind(this,'gender')} className="form-check-input" type="radio" name="gender" id="another" defaultValue="option3" />
                        <label className="form-check-label" htmlFor="another">Another</label>
                    </div>
                    <br></br>
                    <small>{this.state.error['gender']}</small>
                    </div>

                    <br />
                    <div className="form-group">
                    <button onClick={this.handleSubmit}><Link to="/signupsuccess">Sign up</Link></button>
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