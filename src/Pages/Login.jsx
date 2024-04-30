import React, { useState } from 'react'
import './CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  let url = "http://localhost:8000/user/"
  const [check, setCheck] = useState({
    email: "",
    pass: ""
  })
  const inputChange = (e) =>{
    setCheck({
      ...check,[e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = (await fetch(url))
      const data = await res.json()
      const checkedData = data.filter((item)=>
        item.email === check.email && item.pass === check.pass
      )
      console.log(checkedData);
      if(checkedData.length > 0){
        alert("Login Successfull")
        setCheck({
          email: "",
          pass: ""
        })
        navigate('/')
      }
      else{
        alert("Login Failed")
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Login</h1>
            <div className="loginsignup-fields">
              <form onSubmit={handleSubmit}>
                <input type="email" onChange={inputChange} value={check.email} name='email' placeholder='Email Address' />
                <input type="password" onChange={inputChange} name='pass' value={check.pass} placeholder='Password' />
                <button type='submit'>Continue</button>
                </form>
            </div>
            <p className="loginsignup-login">Don't have an account?<Link to='/signup' style={{textDecoration:"none"}}><span>Register Here</span></Link></p>
        </div>
    </div>

  )
}

export default Login