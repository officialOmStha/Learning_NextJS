import React from "react";
import ButtonComponent from "./button";

const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await response.json();
  console.log(users);
  return (
    <>
      <div>User List</div>
      <ul>
        {users.map((user: {id:number; name: string}) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
          </li>
        ))}
      </ul>
      <ButtonComponent />
    </>
  );
};

export default Users;
