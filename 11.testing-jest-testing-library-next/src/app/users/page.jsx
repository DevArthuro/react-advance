"use client";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {error ?? <h4>error</h4>}
      <h1>List of users</h1>
      <div>
        {users.length > 0 ? (
          users.map((user) => <div key={user.id}>{user.userName}</div>)
        ) : (
          <span>Wait for users</span>
        )}
      </div>
    </div>
  );
}
