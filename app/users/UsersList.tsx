"use client";

import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
}

interface Props {
  users: User[];
}

export default function UsersList({ users }: Props) {
  const router = useRouter();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h3
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            {user.name}
          </h3>
        </li>
      ))}
    </ul>
  );
}
