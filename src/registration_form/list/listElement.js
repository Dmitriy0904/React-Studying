import React from "react";

function Element(props){
    const user = props.user;
    return <li>
        Id: {user.id}
        Username: {user.username}
        Password: {user.password}
    </li>
}

export default Element;