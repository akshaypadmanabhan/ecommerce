import React from 'react';

import './Login.css';

function Login() {
  return (
    <div className='backdrop'>
      <div className="loginParentDiv">
        <img className='login-logo' src="https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg"></img>
        <br />
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <br />
          <input
            className="input"
            type="email"
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
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;