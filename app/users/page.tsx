import React from "react";
import UsersList from "./UsersList";

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();

  return (
    <div>
      <h1>User List</h1>
      <UsersList users={users} />
    </div>
  );
};

export default Users;
