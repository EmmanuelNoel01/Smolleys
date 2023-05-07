import React from "react";
import "./loginform.css"


const LoginForm = () =>{
    return (
        <div className="cover">
            <img src="src/assets/logo1.PNG" alt="Logo" className="logo" />
            <input type="text" placeholder="Enter UserName"/>
            <input type="password" placeholder="Enter Password"/>
            <div className="login-btn">LOG IN</div>
            <div>
            <label for="dropdown">Create Account: </label>
            <select id="dropdown" name="dropdown">
                <option value="option1">School</option>
                <option value="option2">Private Tutor</option>
            </select>
            </div>
            
        </div>
    )
}

export default LoginForm