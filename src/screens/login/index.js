import React, { Component } from 'react';


class login extends Component {


constructor(props){
super();


    this.onshowLogin = this.onshowLogin.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handlepass = this.handlepass.bind(this);
    this.onLogin = this.onLogin.bind(this);
}


    onshowLogin(){
        this.props.onshowLogin()
    }

    handleemail(e) {
        const email = e.target.value;
        this.setState({ email: email });

    }
    handlepass(e) {
        const password = e.target.value;
        this.setState({ pass: password });
    }

    onLogin() {
        const { email, pass } = this.state;
        // localStorage.setItem("user", user);
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", pass);
        this.props.onLogin(email, pass);
        this.setState({ email: '', pass: '' });

    }

    render() {
        return (
            <div >
               
                <button onClick={this.onshowLogin}>Signup</button>
                <h1>Login For Quiz App</h1>
                    <div className="form-group">
                    <label>Email:</label>
                    <input onChange={this.handleemail}/>
                    </div>


                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={this.handlepass}/>
                </div>
                <button onClick={this.onLogin}>Login</button>
                
                
            </div>
        );
    }
}

export default login;
