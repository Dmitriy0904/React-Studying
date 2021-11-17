import React from "react";
import useInput from "../hooks/custom_hooks/useInput";
import "./styles.css";

//validation
//required fields

//username (unique)
//password
//password one more time
//age type=number
//submit

function Form(){
    const {username, setUsername} = useInput();
    const {password, setPassword} = useInput();
    const {repeatedPassword, setRepeatedPassword} = useInput();


    return <fieldset className="registration-form">
        <p>Username</p>
        <input className="input-panel" type="text"  value={username} onChange={setUsername} placeholder="Enter username..."/>
        <p>Password</p>
        <input className="input-panel" type="password" value={password} onChange={setPassword} placeholder="Enter password..."/>
        <p>Repeat password</p>
        <input className="input-panel" type="password" value={repeatedPassword} onChange={setRepeatedPassword} placeholder="Enter password one more time..."/>
        <p>Age</p>
        <input className="age-panel" type="number" min="18" max="110"/>
        <br /> <br />
        <button className="register-button">Register</button>
    </fieldset>;
}

export default Form;