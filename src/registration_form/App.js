import React, { useState, useEffect } from "react";
import Form from "./form";
import UserList from "./table/userTable";
import { UsersContext } from "./context/context";
import { USERS } from "./values";


const items = [
    {id: "1", username: "Dima1", password: "1"},
    {id: "2", username: "Dima2", password: "12"},
    {id: "3", username: "Dima3", password: "123"},
    {id: "4", username: "Dima4", password: "1234"},
    {id: "5", username: "Dima5", password: "12345"},
];


function App(){

    const [users, setUsers] = useState(items);

    useEffect(() => {
        const items = localStorage.getItem(USERS);
        setUsers(JSON.parse(items));
    }, []);

    useEffect(() => {
        localStorage.setItem(USERS, JSON.stringify(users));
    }, [users]);

    const register = (newUser) => {
        console.log("Log from App:");
        console.log(newUser);
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