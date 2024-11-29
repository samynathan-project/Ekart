import React from "react";
import { Link } from "react-router-dom";
import './Register.css';


export default function Register()
{
    return(
        <div className="Log">
            <h2 style={{marginBottom:'50px', backgroundColor:"gray", padding:'10px'}}>Register</h2>

<form action="/action_page.php" method="post">
  
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required /> <br></br>

    <label for="email"><b>Email</b></label>
    <input style={{marginInlineStart:'42px'}} type="email" placeholder="Enter Email" name="psw" required /> <br></br>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required /> <br></br>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Re-enter Password" name="psw" required /> <br></br>
        
        <div className="decore">
        <ul>
            <ul>
            <Link style={{textDecoration:'none'}} to={"/"}>Sign Up</Link>
            </ul>
        </ul>
        </div>
     
  </div>
  </form>
    </div>
    )
}
