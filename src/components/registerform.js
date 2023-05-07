import React from "react";
import "./registerform.css"
// import { useHistory } from "react-router-dom";


const RegisterForm = () =>{
//     const history = useHistory();

//   const handleDropdownChange = (event) => {
//     const value = event.target.value;
//     if (value === "option1") {
//       history.push("/school");
//     } else if (value === "option2") {
//       history.push("/private-tutor");
//     }
//   };

    return (
        <div className="cover">
            <img src="src/assets/logo1.PNG" alt="Logo" className="logo" />
            <text type="text">Private Tutor Account</text>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="Phone Number"/>
            <input type="text" placeholder="User Name"/>
            <input type="text" placeholder="Enter Bank Account"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <div className="login-btn">Create Account</div>
            <div className="">Do you have an account?<a href="src/components/loginform.js">LogIn</a></div>
            

        </div>
    )
}

export default RegisterForm