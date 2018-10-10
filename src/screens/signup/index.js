import React, { Component } from 'react';


class signup extends Component {


constructor(props){

    super();
    console.log(props);
    this.state = {
        user: '',
        email: '',
        pass: ''
    }


    this.onSignup = this.onSignup.bind(this);
    this.handleuser = this.handleuser.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handlepass = this.handlepass.bind(this);

    this.onshowSignup = this.onshowSignup.bind(this);
}

    handleuser(e) {
        const name = e.target.value;
        this.setState({ user: name });
    }
    handleemail(e) {
        const email = e.target.value;
        this.setState({ email: email });

    }
    handlepass(e) {
        const password = e.target.value;
        this.setState({ pass: password });
    }


    onSignup() {
        const { user, email, pass } = this.state;
        // localStorage.setItem("user", user);
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", pass);
        this.props.onSignup(user, email, pass);
        this.setState({ user: '', email: '', pass: '' });    

    }

   
    onshowSignup(){

        this.props.onshowSignup()
    }
    render() {
        return (
            <div >

                <button onClick={this.onshowSignup}>Login</button>
                <h1>Signup For Quiz App</h1>
                <div className="form-group">
                    <label>Full Name: </label>
                    <input onChange={this.handleuser} />
                </div>

                <div className="form-group">
                    <label>User Name: </label>
                    <input onChange={this.handleemail} />
                </div>


                <div className="form-group">
                    <label>Password: </label>
                    <input onChange={this.handlepass} />
                </div>
                <button onClick={this.onSignup}>Signup</button>


            </div>
        );
    }
}

export default signup;
