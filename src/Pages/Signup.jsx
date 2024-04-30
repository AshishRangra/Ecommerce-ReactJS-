import React, { useState } from 'react'
import './CSS/Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  let url = "http://localhost:5000/user/register"
  const [data, setData] = useState({
    name: "",    
    email: "",
    password: ""
  })
  const inputChange = (e) =>{
    setData({
        ...data,[e.target.name]:e.target.value
    })
    console.log(data);
  }
  const handleUsers = async(e)=>{
    e.preventDefault();
    try{
      await fetch(url,{
          method: "POST",
          body: JSON.stringify(data),
          headers: {"Content-Type" : "application/json"}
      })
    } catch(err){
        console.log(err);
    }
    setData({name: "",email: "",password: ""})
    alert("Registered Successfully")
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <form onSubmit={handleUsers}>
            <input type="text" name='name' value={data.name} onChange={inputChange} placeholder='Your Name' />
            <input type="email" name='email' value={data.email} onChange={inputChange} placeholder='Email Address' />
            <input type="password" name='password' value={data.password} onChange={inputChange} placeholder='Password' />
            <button type='submit'>Continue</button>
          </form>
        </div>
        <p className="loginsignup-login">Already have an account? <Link to='/login' style={{textDecoration:"none"}}><span>Login Here</span></Link></p>
      </div>
    </div>
  )
}

export default Signup
