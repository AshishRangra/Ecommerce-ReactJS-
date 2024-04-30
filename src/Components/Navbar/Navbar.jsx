import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
// import { checkedData } from '../../Pages/Login'

const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext)
    const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu("shop")}><Link to='/' style={{textDecoration:"none"}}>Shop{menu==="shop"?<hr/>:<></>}</Link></li>
            <li onClick={()=>setMenu("mens")}><Link to='/mens' style={{textDecoration:"none"}}>Men{menu==="mens"?<hr/>:<></>}</Link></li>
            <li onClick={()=>setMenu("womens")}><Link to='/womens' style={{textDecoration:"none"}}>Women{menu==="womens"?<hr/>:<></>}</Link></li>
            <li onClick={()=>setMenu("kids")}><Link to='/kids' style={{textDecoration:"none"}}>Kids{menu==="kids"?<hr/>:<></>}</Link></li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/signup'><button className='nav-login'>{/*checkedData.length > 0 ? checkedData.name : "Register"*/}Register</button></Link>
            <Link to='/cart'><img src={cart_icon} alt='' className='nav-cart-icon'/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
