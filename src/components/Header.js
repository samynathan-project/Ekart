import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import icon from '../assets/img/sl-7.png';

export const Header = ({ cart }) => {
  return (
      <div>
        <div className='navbar'>
          <div className='logo'>
          <img src={icon} alt='' />
          <Link to={"/Home"}><b>Takeaway.com</b></Link>
          </div>
            <ul>
              <li>
              <Link to={"/Home"}><i class="fa-solid fa-house"></i> Home</Link>
              </li>
              <li>
              <Link to={"/Cart"}>
                <b><span className='cart-count'>{cart.length}</span></b> View Cart
              </Link>
              </li>
              <li>
              <Link to={"/Register"}><i class="fa-solid fa-user"></i> New Account</Link>
              </li>
            </ul>
          </div>
      </div>
  )
}

 
