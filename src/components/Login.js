import React from "react";
import { Link } from "react-router-dom";
import './Login.css';


export default function Login()
{
    return(
        <div className="Log">
            <h2 style={{marginBottom:'50px', backgroundColor:"gray", padding:'10px'}}>Login Form</h2>

<form action="/action_page.php" method="post">
  
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required /> <br></br>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required /> <br></br>
        
        <div className="decore">
        <ul>
            <ul>
            <Link style={{textDecoration:'none'}} to={"/Home"}> Sign In</Link>
            </ul>
        </ul>
        </div>
     
  </div>
  </form>
    </div>
    )
}
