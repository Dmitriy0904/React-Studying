import React, { useState, useEffect } from "react";
import Form from "./form";
import UserList from "./userList";
import { UsersContext } from "./context/context";
import { USERS } from "./values";

function App(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const items = localStorage.getItem(USERS);
        setUsers(JSON.parse(items));
    }, []);

    useEffect(() => {
        localStorage.setItem(USERS, JSON.stringify(users));
    }, [users]);

    const register = (newUser) => {
        setUsers([...users, newUser]);
    }

    return (
    <div>
        <UsersContext.Provider value={{register}}>
            <Form />
        </UsersContext.Provider>
        <UserList users={users}/>
    </div>
    );
}

export default App;