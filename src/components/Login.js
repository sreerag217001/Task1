import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
function Login() {
    const [formData,setFormData] = useState({
email:'',
password:''
    })
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setFormData((prevData)=>({...prevData,[name]:value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        
        console.log(formData)
    }
    
  return (
    <div>
    <div className='header'>
       <h5>Don't have an account?</h5>
       <Link to={'/'}>
     <input className='button'type="button" value='Sign Up' />
       </Link>
    
    </div>
    <div className="container">
        <div className="login-card">
        <h6>Welcome back!</h6>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label><br />
            <input type="text" placeholder=' Email address' name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}/><br />
            <label htmlFor="">Password</label><br />
            <input type="text" placeholder=' Password' name='password'  value={formData.password} onChange={(event)=>handleInputChange(event)}/><br />
            <img className='pswd-eye'src="https://img.freepik.com/premium-vector/show-password-icon-eye-symbol-vector-vision-hide-from-watch-icon-secret-view-web-design-element_87543-11126.jpg" alt="" />
            <div className="checkbox">
        <input type="checkbox" />
        
        </div>
        <label className='label-checkbox'htmlFor="">Remember me</label>
        <Link to={'/login/home'}>
        <button className='btn' type='submit'  >Login</button>
        </Link>
       
        <a href="">Forgot your Password?</a>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Login