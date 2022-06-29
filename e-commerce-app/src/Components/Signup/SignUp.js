import React from 'react'
import "./SignUp.css"

function SignUp() {
  return (
<div>
<div className='signup-parent'>
        <img alt="signup-logo" className="signup-logo"src='https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg'/>
        <form>
           <input className='input' 
           type="text" id="fname" placeholder="John" name='name'/>
           <br />
           <br/>
           <input className='input' 
           type="text" id="lname" placeholder="Smith" name='name'/>
           <br/>
           <br/>
           <input className='input' 
           type="email" id="email" placeholder="example@gmail.com" name='email'/>
           <br/>
           <br/>
           <input className='input' 
           type="number" id="mobile" placeholder="1234567" name='mobile'/>
           <br/>
           <br/>
           <input className='input' 
           type="password" id="password" placeholder='*******' name='password'/>
           <br/>
           <br/>
           <br/>
           <button className='signup-button' type='submit'>SignUp</button>

        </form>
        <a className='login-from-signup' href=''>Login</a>








    </div>
</div>
  )
}

export default SignUp