import React, { Component } from 'react';


class login extends Component {
    render() {
        return (
            <div >
               
                  
                    <div className="form-group">
                    <label>username</label>
                    <input id="txtusername" />
                    </div>


                <div className="form-group">
                    <label>password</label>
                    <input id="txtpassword" />
                </div>

                
                
            </div>
        );
    }
}

export default login;
