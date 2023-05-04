"use client"

import { useRouter } from "next/navigation";
function Users({ users }) {

  const router = useRouter();

  return (
    <div className="container">
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              className="list-group-item list-group-item-action d-flex flex-wrap justify-content-between align-items-center"
              style={{cursor: 'pointer'}}
              key={user.id}
              onClick={() => router.push(`/users/${user.id}`)}
            >
              <h5 className="p-2">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p>{user.email}</p>
              <div>
                <img
                  src={user.avatar}
                  alt={user.email}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
