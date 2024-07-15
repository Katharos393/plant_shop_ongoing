import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import  cart_icon from'../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { PlantsContext } from '../../Context/PlantsContext'

const Navbar = () => {

  const [menu,setMenu] = useState("plants");
  const {getTotalCartItems} = useContext(PlantsContext);

  return (
    <div className= 'navbar'>
        <div className="nav-logo">
            <img src={logo} alt ="" />
            <p>PLANTA</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("plants")}}><Link style={{ textDecoration: 'none' }} to='/'>PLANTS</Link>{menu==="plants"?<hr/ >:<></>}</li>
            <li onClick={()=>{setMenu("seeds")}}><Link style={{ textDecoration: 'none' }} to='/seeds'>SEEDS</Link>{menu==="seeds"?<hr/ >:<></>}</li>
            <li onClick={()=>{setMenu("pots&planters")}}><Link style={{ textDecoration: 'none' }} to='/pots&planters'>POTS & PLANTERS</Link>{menu==="pots&planters"?<hr/ >:<></>}</li>
            <li onClick={()=>{setMenu("plantcare")}}><Link style={{ textDecoration: 'none' }} to='/plantcare'>PLANT CARE</Link>{menu==="plantcare"?<hr/ >:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar