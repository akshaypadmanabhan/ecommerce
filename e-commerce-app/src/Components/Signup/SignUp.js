import React, { useState } from 'react'
import "./SignUp.css"

function SignUp() {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(firstname)
    }
  return (
<div>
<div className='signup-parent'>
        <img alt="signup-logo" className="signup-logo"src='https://t4.ftcdn.net/jpg/03/77/48/55/360_F_377485593_QHN6cjoNsNdOBoJNOwVRlFcHyZ0M9n3P.jpg'/>
        <form onSubmit={handleSubmit}>
           <input className='input' value={firstname} onChange={(e)=>setFirstname(e.target.value)}
           type="text" id="fname" placeholder="John" name='name'/>
           <br />
           <br/>
           <input className='input'value={lastname} onChange={(e)=>setLastname(e.target.value)} 
           type="text" id="lname" placeholder="Smith" name='name'/>
           <br/>
           <br/>
           <input className='input' value={email} onChange={(e)=>setEmail(e.target.value)}
           type="email" id="email" placeholder="example@gmail.com" name='email'/>
           <br/>
           <br/>
           <input className='input' alue={mobile} onChange={(e)=>setMobile(e.target.value)}
           type="number" id="mobile" placeholder="1234567" name='mobile'/>
           <br/>
           <br/>
           <input className='input' value={password} onChange={(e)=>setPassword(e.target.value)}
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