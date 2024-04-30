import React, { useState } from 'react';
import './Admin.css';

function LoggedInPage({ onLogout }) {
  let url = "http://localhost:8000/cards/"
  const [data, setData] = useState({
    name: "",    
    category: "",
    image: "",
    new_price: "",
    old_price: ""
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
    setData({name: "",category: "",image: "",new_price: "",old_price: ""})
    alert("Record Saved Successfully")
  }


  return (
    <div className='adminpage'>
      <div className="adminpage-container">
        <div className='inner'>
          <h1>ADMIN PANEL</h1>
          <button className='adminpage-logout' style={{width:"100px"}} onClick={onLogout}>Logout</button>
        </div>
        <div className="adminpage-fields">
          <form onSubmit={handleUsers}> 
            <input type="text" name='name' onChange={inputChange} value={data.name} placeholder="Product's Name" />
            <input type="text" name='category'  onChange={inputChange}  value={data.category} placeholder="Product's category" />
            <input type="text" name='image'  onChange={inputChange}  value={data.image} placeholder="Product's image link"/>
            <input type="number" name='old_price' onChange={inputChange}  value={data.old_price} placeholder="Product's old price"/>
            <input type="number" name='new_price' onChange={inputChange}  value={data.new_price} placeholder="Product's new price"/>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function LoggedOutPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin123') {
      onLogin();
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>ADMIN PAGE LOGIN</h1>
        <div className="loginsignup-fields">
          <form onSubmit={handleLogin}> 
            <input type="email" name='email' onChange={handleEmailChange} value={email} placeholder='Email Address' />
            <input type="password" name='pass' onChange={handlePasswordChange} value={password} placeholder='Password' />
            <button type='submit'>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LoggedInPage onLogout={handleLogout} />
      ) : (
        <LoggedOutPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;