import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
});

async function fetchProfile(userId: string) {
  const baseURL = import.meta.env.API_URL || "http://localhost:3000";
  const response = await fetch(`${baseURL}/users/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }
  return response.json();
}

function ProfilePage() {
  const userId = "675491b205974fe9a6b9a66e";
  const { data, isLoading, error } = useQuery({
    queryFn: () => fetchProfile(userId),
    queryKey: ["profile"],
  });

  console.log("data from server", data);

  if (isLoading) {
    return <div>profile is loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {" "}
      <h1>User Profile</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
