import React, {useContext} from "react";
import useInput from "../hooks/custom_hooks/useInput";
import { UsersContext } from "./context/context";
import validate from "./validation";
import "./styles.css";

//validation
//required fields

//username (unique)
//password
//password one more time
//age type=number
//age для проверки что больше 18
//submit

function createUser(username, password){
    return {
        id: new Date(),
        username: username,
        password: password
    };
}

function Form(props){
    const users = props.users;
    const { register } = useContext(UsersContext);

    const {username, setUsername} = useInput();
    const {password, setPassword} = useInput();
    const {repeatedPassword, setRepeatedPassword} = useInput();
    const {age, setAge} = useInput(0);

    const handleCreateNewUser = (event) =>{

        console.assert(username, password, repeatedPassword, age);

        if(validate(users, username, password, repeatedPassword, age)){
            const user = createUser(username, password);
            register(user);
        }
        else{
            console.assert("Incorect data entered!");
        }
        setUsername("");
        setPassword("");
        setRepeatedPassword("");
    }


    return <fieldset className="registration-form">
        <form onSubmit={(event) => handleCreateNewUser(event)}>
        <p>Username</p>
        <input className="input-panel" type="text"  value={username} onChange={setUsername} placeholder="Enter username..."/>
        <p>Password</p>
        <input className="input-panel" type="password" value={password} onChange={setPassword} placeholder="Enter password..."/>
        <p>Repeat password</p>
        <input className="input-panel" type="password" value={repeatedPassword} onChange={setRepeatedPassword} placeholder="Enter password one more time..."/>
        <p>Age</p>
        <input className="age-panel" type="number" min="1" max="110" value={age} onChange={setAge}/>
        <br /> <br />
        <button className="register-button" type="submit">Register</button>
        </form>
    </fieldset>;
}

export default Form;