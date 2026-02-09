import { notFound } from "next/navigation";

const fetchUser = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) return null;
  return res.json();
};

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>; // notice Promise here
}) {
  const { userId } = await params; // ✅ unwrap the promise

  const user = await fetchUser(Number(userId));

  if (!user) notFound();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}
