import React from "react";
import Element from "./tableElement";
import "./../styles.css";

function UserList(props){
    const users = props.users;

    return (
      <table className="users-table">
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
        {users.map((u) => (<Element user={u} />))}
      </table>
    );
    

}

export default UserList;