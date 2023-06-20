import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
function Register() {
    const [formData, setFormData] = useState({
        name:'',
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
       <h5>Already have an account?</h5>
       <Link to='/login'>
       <button>Login</button>
       </Link>
       
    </div>
    <div className="container">
        <div className="signup-card">
        <h6>Lets go!</h6>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="">Full Name</label><br />
            <input type="text"  name='name' value={formData.name} onChange={(event)=>handleInputChange(event)} /><br />
            <label htmlFor="">Email</label><br />
            <input type="email"  name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}/><br />
            <label htmlFor="">Choose Password</label><br />
            <input type="password"  name='password'value={formData.password} onChange={(event)=>handleInputChange(event)}  /><br />
            <img className='pswd-eye'src="https://img.freepik.com/premium-vector/show-password-icon-eye-symbol-vector-vision-hide-from-watch-icon-secret-view-web-design-element_87543-11126.jpg" alt="" />

        <Link to={'/login'}>
        <button className='button-signup'type='button'   >Sign up</button>
        </Link>
        
      
        </form>
        </div>
    </div>
    </div>
  )
}

export default Register