import React, { Component } from 'react';


class login extends Component {


constructor(props){
super();


    this.onshowLogin = this.onshowLogin.bind(this);
}


    onshowLogin(){
        this.props.onshowLogin()
    }

    render() {
        return (
            <div >
               
                <button onClick={this.onshowLogin}>Signup</button>
                <h1>Login For Quiz App</h1>
                    <div className="form-group">
                    <label>username</label>
                    <input id="txtusername" />
                    </div>


                <div className="form-group">
                    <label>password</label>
                    <input id="txtpassword" />
                </div>
                <button>Login</button>
                
                
            </div>
        );
    }
}

export default login;
