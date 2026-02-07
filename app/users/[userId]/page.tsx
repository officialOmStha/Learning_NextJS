import React from "react";

const fetchUser = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok){
        return null;
    }
    const user = await res.json();
    return user
}

const UserPage = async ({params}: {params: Promise<{ userId: string }>; }) => {
  const { userId } = await params;
  const user = await fetchUser(userId)
  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.company.name}</p>
      </div>
    </>
  );
};

export default UserPage;