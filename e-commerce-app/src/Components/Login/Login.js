import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../../store/FirebaseContext';


import './Login.css';

function Login() {
  const history=useHistory
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const handleLogin= (e)=>{
    e.Preventdefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert("LOGGED IN")
      history.push("/")
    })
    .cath((error)=>{
      alert(error.message)
    })
  }
  return (
    <div className='backdrop'>
      <div className="loginParentDiv">
        <img alt='logo' className='login-logo' src="https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg"></img>
        <br />
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <br />
          <input
            className="input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <br />
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;