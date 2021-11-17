import React from "react";
import Element from "./listElement";

function UserList(props){
    const users = props.users;
    return <ul>
            {users.map( (u) => <Element user={u} />)}
    </ul>
}

export default UserList;