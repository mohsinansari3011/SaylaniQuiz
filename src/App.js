import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './screens/login/';
import Signup from './screens/signup/';
import Categories from './screens/categories';

class App extends Component {

constructor(props){

  super();

  this.state = {

    islogin: false,
    issignup: true,
    isquiz :false,

    quizez: [{ name: "React", Question: "40", time: "1hour" },
    { name: "Angular", Question: "30", time: "1hour" },
    { name: "Php", Question: "40", time: "1hour" },
    { name: "Asp.net", Question: "20", time: "1hour" },
    ]
  };



  this.QuizSignup = this.QuizSignup.bind(this);
  this.loginCheck = this.loginCheck.bind(this);
  this.showSignup = this.showSignup.bind(this);
  this.showLogin = this.showLogin.bind(this);
}

  componentDidMount(){

    this.loginCheck();
  }


loginCheck(){
  const { islogin, issignup, isquiz } = this.state;
  const username = localStorage.getItem("user");
  if (username != null) {
 
    this.setState({

      issignup: false,
      islogin: true,
      isquiz: true,
    })
  }else{
    this.setState({

      issignup: false,
      islogin: true,
      isquiz: false,
    })
  }
  
}

  QuizSignup(user, email, pass){

    const { islogin, issignup, isquiz}= this.state;

    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);

    this.setState({

      issignup: false,
      islogin: true,
      isquiz: true,
    })
}

showLogin(){
  const { islogin, issignup, isquiz } = this.state;
  this.setState({

    issignup: false,
    islogin: true,
    isquiz: false,
  })

  console.log("showLogin");
}
showSignup(){
  const { islogin, issignup, isquiz } = this.state;

  this.setState({

    issignup: true,
    islogin: false,
    isquiz: false,
  })

  console.log("showSignup");
}

  render() {

    const { islogin, issignup, isquiz, quizez} = this.state;

    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

          {islogin && !issignup && !isquiz && <Login onshowLogin={this.showLogin}  />}
          {!islogin && issignup && !isquiz && <Signup onshowSignup={this.showSignup} onSignup={this.QuizSignup} />}
          {!issignup && islogin && isquiz && <Categories list={quizez} />}
        
       

       
      </div>
    );
  }
}

export default App;
