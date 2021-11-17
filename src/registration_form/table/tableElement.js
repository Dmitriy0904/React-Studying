import React from "react";

function Element(props){
    const user = props.user;
    return <tr>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
    </tr>
    
}

export default Element;